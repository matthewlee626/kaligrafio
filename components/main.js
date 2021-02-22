import { Container, Link, Textarea, Select, Box, Button, Label, Input} from 'theme-ui'
import {FaGithub} from 'react-icons/fa'
import {VertText} from '../components/cards'
import Head from 'next/head'
import {useState, createRef} from 'react'
import axios from 'axios';

const SimCNFonts = ["Zhi Mang Xing","Long Cang", "Noto Sans SC", "Noto Serif SC", "ZCOOL XiaoWei", "ZCOOL QingKe HuangYou", "Ma Shan Zheng", "ZCOOL KuaiLe", "Liu Jian Mao Cao"]

export function Mainframe({font, content, postID}) {
	const [currentFont, setFont] = useState(font || "Zhi Mang Xing")
	const [currentHTML, setHTML] = useState(content || "<p>中文</p>")
	const [currentID, setID] = useState(postID || " ")
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
			url: `https://bijibenback.matthewlee626.repl.co/messages/`,
			// conditional update / get
			params: {font: currentFont, content: currentHTML, postID: currentID},
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
		window.location.replace(`https://${window.location.hostname}/posts/${currentID}`);
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
					textAlign: 'right',
				}}>
					<h2>Kaligrafio</h2>
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
						<optgroup label="Simplified Chinese">
							{SimCNFonts.map(font=>(<option value={font}>{font}</option>))}							
						</optgroup>
						<optgroup label="Traditional Chinese">
							<option value="null" disabled>TBD</option>
						</optgroup>
						<optgroup label="Korean">
							<option value="null" disabled>TBD</option>
						</optgroup>
						<optgroup label="Japanese">
							<option value="null" disabled>TBD</option>
						</optgroup>
					</Select>
					<Label htmlFor='content' hidden>Content</Label>
					<Textarea 
						name='content'
						value={currentHTML}
						hidden
					/>
					<Label htmlFor="slug">Save As</Label>
					<Input 
						required
						name='postID' 
						onChange={e=>setID(e.currentTarget.value)}
					/>
					<Button
						sx={{
							my: 4,
						}}
					>
						Publish
					</Button>
				</Box>
				<Box sx={{   
					p: '2rem',
					gridColumn: '1 / 4',
					textAlign: 'right',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}>
					<Link href="https://github.com/matthewlee626/kaligrafio"><FaGithub/></Link>
				</Box>
			</Container>
		</>
	)
}