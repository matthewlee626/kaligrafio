/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

export const TitleTile = props => (
  <Box
    {...props}
    sx={{
      minHeight: '100vh',
      minWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      h1: {
        m: [3, 4]
      },
      ul: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        listStyle: 'none',
        position: 'absolute',
        top: 0,
        right: [null, 3, 4],
        li:{
          mx: [1, 1, 2]
        }
      },
      ...props.sx
    }}
  />
)

export const InfoTiles = props => (
    <Box
      {...props}
      sx={{
        maxWidth: '70%',
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
          fontSize: 2,

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
          fontSize: 4,
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