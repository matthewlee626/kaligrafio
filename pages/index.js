import { Container, Grid, Textarea, Box } from 'theme-ui'
import {VertText} from '../components/cards'
import Head from 'next/head'

export default function index() {
	return (
		<>
			<Head>
				<title>笔记本</title>
				<link href="https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap" rel="stylesheet"></link>
			</Head>
			<Container sx={{   
					display: 'grid',
					gridTemplate: 'auto 1fr auto/ auto 1fr auto',
					height: '100vh'
			}}>
				<Box sx={{   
					p: '2rem',
					gridColumn: '1 / 4',
					bg: "blue"
				}}>
					Header
				</Box>
				<VertText
					text="中文"
					fontFamily="Zhi Mang Xing"
				>
				</VertText>
				<Box sx={{   
					px: '2rem',
					gridColumn: '3 / 4',
					bg: "yellow"
				}}>
					Right Sidebar
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