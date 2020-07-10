/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

export const Profiles = props => (
	<Box
		{...props}
		sx={{
			maxWidth: '70%',
			textAlign: 'center',
			ul: {
				listStyle: 'none',
				p: 0,
				m: [3, 4],
				display: 'grid',
				gridTemplateColumns: ['100%', '33% 33% 33%', '33% 33% 33%'],
				gridGap: [3, 4],
				li: {        
					my: [4, 4, 4],
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					maxWidth: '100%',
					textAlign: 'center',
					fontSize: 2,

					a: {
						color: 'inherit',
						textDecoration: 'none'
					},
					
					ul: {
						display: 'flex',
						textAlign: 'center',
						li: {
							minWidth: '100%',
							my: [0, 0, 0],
							display: 'inline-block',
						},
						minHeight: '100%',
						m: 0
					}
				}
			},
			h2: {
				margin: 4,
			},
			h3: {
				m: 2,
				lineHeight: 'heading',
				a: {
					color: 'inherit',
					textDecoration: 'none'
				}
			},
			img: {
				display: 'block',
				borderRadius: '50%',
				minWidth: '10em',
				width: '10rem',
				maxWidth: '10rem',
				maxHeight: '10rem',
				objectFit: 'cover',
				objectPosition: 'center'
			},
			...props.sx
		}}
	/>
)