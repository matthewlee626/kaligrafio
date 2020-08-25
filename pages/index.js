import { Container, Grid, Textarea, Select, Box } from 'theme-ui'
import {VertText} from '../components/cards'
import Head from 'next/head'
import {useState, createRef} from 'react'

export default function index() {
	const [currentFont, setFont] = useState("Zhi Mang Xing")
	const [currentContent, setContent] = useState("中文")
	const mainContent = createRef(null)

	return (
		<>
			<Head>
				<title>笔记本</title>
				<link href="https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap" rel="stylesheet"></link>
			</Head>
			<Container sx={{   
					display: 'grid',
					gridTemplate: 'auto 1fr auto/ auto 1fr auto',
					height: '100vh',
					maxHeight: '100vh'
			}}>
				<Box sx={{   
					p: '2rem',
					gridColumn: '1 / 4',
					bg: "blue"
				}}>
					Header
				</Box>
				<VertText
					fontFamily={currentFont}
					mainContent={mainContent}
					html={currentContent}
					changeText={setContent}
					sx={{   
						overflowWrap: 'break-word',
					}}
				>
				</VertText>
				<Box  
					as='form'
					sx={{   
					px: '2rem',
					minWidth: '200px',
					gridColumn: '3 / 4',
					bg: "yellow"
				}}>
					Right Sidebar
					<Select name='font' id='font' my={3} onChange={e => setFont(e.currentTarget.value)}>
						<option value="Zhi Mang Xing">Zhi Mang Xing</option>
						<option value="Long Cang">Long Cang</option>
					</Select>
				</Box>
				<Box sx={{   
					p: '2rem',
					gridColumn: '1 / 4',
					bg: "red"
				}}>
					Footer
				</Box>
			</Container>
		</>
	)
}