import React from 'react'
import styled from 'styled-components'
import LogoHCube from './logo_h_cube.svg'
import MentorImg from './bouba.jpg'
import BoxTech from './tech.svg'
import EventSvg from './event.svg'

const Box = styled.div`
  height: 360px;
  margin : 40px;
  width: 360px;
  position : absolute;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.75;
    background-image: linear-gradient(-44deg, #2196f3 50%, #00ccbc 100%);
    z-index: 3;
  }
`

const MentorImgContainer = styled.img`
`


export const MentorContainer = styled.div`
    position: relative;
`

export class MentorTest extends React.Component {
    render() {
        return (
            <MentorContainer>
                <Box>
                    <MentorImgContainer src={MentorImg}/>
                </Box>
            </MentorContainer>
        )
    }
}
