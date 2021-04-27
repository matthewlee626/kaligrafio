import { Container, Link, Textarea, Select, Box, Button, Label, Input} from 'theme-ui'
import {FaGithub} from 'react-icons/fa'
import {VertText} from '../components/cards'
import Head from 'next/head'
import {useState, createRef} from 'react'
import axios from 'axios';

const SCFonts = ["Zhi Mang Xing","Long Cang", "Noto Sans SC", "Noto Serif SC", "ZCOOL XiaoWei", "ZCOOL QingKe HuangYou", "Ma Shan Zheng", "ZCOOL KuaiLe", "Liu Jian Mao Cao"].sort();
const TCFonts = ["Noto Sans TC", "Noto Serif TC"].sort();
const JPFonts = ["Noto Sans JP", "New Tegomin", "Shippori Mincho", "Noto Serif JP", "M PLUS Rounded 1c", "M PLUS 1p", "Sawarabi Mincho", "Sawarabi Gothic", "Kosugi Maru", "Shippori Mincho B1", 'Dela Gothic One', "Kiwi Maru", "RocknRoll One", "Reggae One", "DotGothic16", "Stick", "Train One", "Potta One", "Hachi Maru Pop", "Yusei Magic", "Kosugi"].sort();
const KRFonts = ["Noto Sans KR", "Nanum Gothic", "Namun Myeongjo", "Gothic A1", "Namun Pen Script", "Noto Serif KR", "Namun Gothic Coding", "Black Han Sans", "Namun Brush Script", "Do Hyeon", "Jua", "Sunflower", "Gugi", "Gaegu", "Hi Melody", "Dokdo", "Gamja Flower", "Song Myung", "East Sea Dokdo", "Yeon Sung", "Cute Font", "Stylish", "Poor Story", "Kirang Haerang", "Black And White Picture", "Single Day"].sort();

export function Mainframe({font, content, postID, renderDelete}) {
	const [currentFont, setFont] = useState(font || "Zhi Mang Xing")
	const [currentHTML, setHTML] = useState(content || "<p>滚滚长江东逝水，浪花淘尽英雄。 是非成败转头空，青山依旧在，几度夕阳红。 白发渔樵江渚上，惯看秋月春风。 一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>")
	const [currentID, setID] = useState(postID || " ")
	const [showDelete, setDelete] = useState(renderDelete || false)
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
							{SCFonts.map(font=>(<option value={font}>{font}</option>))}							
						</optgroup>
						<optgroup label="Traditional Chinese">
							{TCFonts.map(font=>(<option value={font}>{font}</option>))}							
						</optgroup>
						<optgroup label="Japanese">
							{JPFonts.map(font=>(<option value={font}>{font}</option>))}							
						</optgroup>		
						<optgroup label="Korean">
							{KRFonts.map(font=>(<option value={font}>{font}</option>))}							
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
							mt: 4,
							mr: 4,
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
					<Link href="https://github.com/matthewlee626/kaligrafio"><FaGithub size={'2em'}/></Link>
				</Box>
			</Container>
		</>
	)
}

/*
{showDelete ? 
	<Button
	sx={{
		mt: 4,
	}}
	>
		Delete
	</Button> : <></>
}
*/