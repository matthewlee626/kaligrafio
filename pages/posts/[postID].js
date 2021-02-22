import { Mainframe } from '../../components/main'

export default function Post({data}) {
  console.log(data.content)
  return (
    <Mainframe 
      font = {data.font}
      content = {data.content}
      postID = {data.postID}
    ></Mainframe>
  )
}
  
  // This gets called on every request
export async function getServerSideProps({params}) {
  const res = await fetch(`https://bijibenback.matthewlee626.repl.co/messages/${params.postID}`)
  const data = await res.json()
  // console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}