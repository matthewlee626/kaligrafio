/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import {Navbar, Nav} from 'react-bootstrap'

export const HeaderTile = props => (
  <Box
      sx={{
        position: 'absolute',
        top: 0,
        minWidth: '100%',
        ul: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          listStyle: 'none',
          right: [3, 3, 5],
          li:{
            mx: [1, 1, 2]
          }
        },
        img: {
          ml: 1,
          mr: 2
        },
        ...props.sx
    }}
  >
    <Navbar 
      expand="lg" 
    >
    <Navbar.Brand href="">
      <img
        alt=""
        src="/strawberry.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {props.title}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" 
      style={{
        color: props.sdcolor
      }}
    />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {props.subdivisions.map((subdivision) => (
          <Nav.Link 
            className="ml-auto" 
            href={`#${subdivision}`}
            key={subdivision}
            style={{
              color: props.sdcolor
            }}
          >
            {subdivision.charAt(0).toUpperCase() + subdivision.slice(1)}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  </Box>
)

export const TitleTile = props => (
  <Box
    {...props}
    sx={{
      minHeight: '105vh',
      minWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      h1: {
        m: [3, 4],
        maxWidth: '50%',
      },
      h3: {
        maxWidth: '70%',
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
      textAlign: 'center',
      ul: {
        listStyle: 'none',
        p: 0,
        m: [3, 4],
        display: 'grid',
        gridGap: [3, 4],
      },
      li: {        
        my: [4, 4, 4],
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
            my: [0, 0, 0],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            textAlign: 'left'
          },
          minHeight: '100%',
          mx: [1, 2, 3],
          my: 0
        }
      },
      h2: {
        margin: 4,
      },
      h3: {
        mb: 2,
        mt: [3, 0, 0],
        lineHeight: 'heading',
        a: {
          color: 'inherit',
          textDecoration: 'none'
        }
      },
      img: {
        display: 'block',
        minWidth: '20em',
        width: '20rem',
        maxWidth: ['6rem', '20rem', '20rem'],
        maxHeight: '10rem',
        objectFit: 'cover',
        objectPosition: 'center'
      },
      ...props.sx
    }}
  />
)

export const ContactTile = props => (
  <Box
    {...props}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      h2: {
        margin: 4,
      },
      ul: {
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        my: 4,
        a: {
          m: [3, 3, 3],
          svg: {
            width: 4,
            height: 4,
          }
        }
      },
      ...props.sx
    }}
  />
)