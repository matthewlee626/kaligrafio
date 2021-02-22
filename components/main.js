import { Container, Grid, Textarea, Select, Box, Button, Label} from 'theme-ui'
import {VertText} from '../components/cards'
import Head from 'next/head'
import {useState, createRef} from 'react'
import axios from 'axios';


export function Mainframe({font, content, postID}) {
	const [currentFont, setFont] = useState(font || "Zhi Mang Xing")
	const [currentHTML, setHTML] = useState(content || "<p>中文</p>")
	const [currentID, setID] = useState(postID || -1)
	const mainContent = createRef(null)
	// console.log(currentFont)
	const handleChange = evt => {
		setHTML(evt.target.value);
	};

	const submitForm = evt => {
		evt.preventDefault()
		console.log(currentFont)
		axios({
			method: 'POST',
			url: `https://bijibenback.matthewlee626.repl.co/messages/${currentID == -1 ? '' : currentID}`,
			// conditional update / get
			params: {font: currentFont, content: currentHTML},
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache',
				'X-Accel-Buffering': 'no'
			}
		}).then((res) => {
			console.log(res.data)
		}).catch((error) => {
			console.log(error)
		});
		console.log('sent');
	}

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
				}}>
					Header
				</Box>
				<VertText
					fontFamily={currentFont}
					html={currentHTML}
					changeText={handleChange}
					sx={{   
						overflowWrap: 'break-word',
						bg: 'background',
					}}
				>
				</VertText>
				<Box  
					as='form'
					onSubmit={submitForm}
					sx={{   
					px: '2rem',
					minWidth: '200px',
					gridColumn: '3 / 4',
				}}>
					<Label htmlFor='font'>Font</Label>

					<Select name='font' id='font' my={3} onChange={e => setFont(e.currentTarget.value)}>
						<option value="Zhi Mang Xing">Zhi Mang Xing</option>
						<option value="Long Cang">Long Cang</option>
						<option value="Noto Sans SC">Noto Sans SC</option>
						<option value="Noto Serif SC">Noto Serif SC</option>
						<option value="ZCOOL XiaoWei">ZCOOL XiaoWei</option>
						<option value="ZCOOL QingKe HuangYou">ZCOOL QingKe HuangYou</option>
						<option value="Ma Shan Zheng">Ma Shan Zheng</option>
						<option value="ZCOOL KuaiLe">ZCOOL KuaiLe</option>
						<option value="Liu Jian Mao Cao">Liu Jian Mao Cao</option>
					</Select>
					<Label htmlFor='content' hidden>Content</Label>
					<Textarea 
						name='content'
						value={currentHTML}
						hidden
					/>
					<Button>
						Publish
					</Button>
				</Box>
				<Box sx={{   
					p: '2rem',
					gridColumn: '1 / 4',
				}}>
					Footer
				</Box>
			</Container>
		</>
	)
}