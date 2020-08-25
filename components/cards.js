/** @jsx jsx */
import { jsx, Box, Textarea } from 'theme-ui'
import {Navbar, Nav} from 'react-bootstrap'
import ContentEditable from 'react-contenteditable'


export const VertText = props => (
  <Box sx={{   
      gridColumn: '1 / 3',
      bg: "white",
      border: "none",
      '&:focus': {
        outline: 'none'
      },
      resize: "none",
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      fontFamily: (props.fontFamily),
      fontSize: "5",
      wordBreak: 'break-all',
      overflowX: 'auto',
      ...props.sx
  }}
  > 
    <ContentEditable
      innerRef={props.mainContent}
      html={props.html} 
      disabled={false}      
      onChange={props.setContent} // TODO
    />
  </Box>
)
