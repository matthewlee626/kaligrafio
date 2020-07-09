import { Box } from 'theme-ui'

export const Tiles = props => (
    <Box
      {...props}
      sx={{
        ul: {
          listStyle: 'none',
          p: 0,
          m: [3, 4],
          display: 'grid',
          gridGap: [3, 4],
        },
        li: {
					display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          alignItems: ['center', 'center', 'flex-start'],
          justifyContent: 'stretch',
          maxWidth: '100%',
          a: {
            color: 'inherit',
            textDecoration: 'none'
					},
					ul: {
						li: {
							display: 'flex',
							flexDirection: 'column',
              justifyContent: 'start',
            },
            minHeight: '100%',
            mx: [1, 2, 3],
            my: 0
					}
        },
        h1: {
          fontSize: [2, 3],
          mb: 2,
          mt: 0,
          lineHeight: 'heading',
          a: {
            color: 'inherit',
            textDecoration: 'none'
          }
        },

        img: {
          display: 'block',
          minWidth: '40%',
          width: '40%',
          maxWidth: '40%',
					maxHeight: '20rem',
					objectFit: 'cover',
          objectPosition: 'center'
        },
        ...props.sx
      }}
    />
  )