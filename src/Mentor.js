import React from 'react'
import styled from 'styled-components'
import LogoHCube from './logo_h_cube.svg'
import MentorImg from './bouba.jpg'
import BoxTech from './tech.svg'
import EventSvg from './event.svg'

const Box = styled.div`
  height: 360px;
  width: 360px;
  position: absolute;
  margin : 40px;
  top: 30px;
  overflow: hidden;
  transition: all 0.3s;
  box-sizing: content-box;
  box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
  border-radius : 4px;
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
  &:hover {
    padding: 20px 0;
    top: 10px;
    box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
  }
`

const MentorImgContainer = styled.img`
  position: absolute;
  filter: grayscale(100%);
  top: -30px;
  height: auto;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  width : auto;
`

const Content = styled.div`
  position: absolute;
  z-index: 4;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 1.5rem;
  transition: all 0.3s;
  text-align : left;

  h3,
  p {
    color: white;
  }

  h3 {
    font-size: 19px;
  }
  p {
    font-size: 15px;
  }
  ${Box}:hover & {
    bottom: 20px;
  }
`

export const MentorContainer = styled.div`
  position: relative;
  height : 320px;
  width: 100%;
  float: left;
`

export const LogoSvg = styled.img`
  position: absolute;
  display: inline-block;
  right: 0;
  z-index: 5;
  transition: opacity 0.8s ease-out;
  opacity: 0;
  height: 0;
  overflow: hidden;
  color: white;
  ${Box}:hover & {
    margin: 1rem;
    width: 39px;
    height: 39px;
    opacity: 1;
  }
`

const LilBox= styled.div`
    background-color : white;
    width : 330px;
    height : 80px;
    position : absolute;
    transition: all 0.5s ease-out;
    bottom : -120px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    z-index : 5;
    text-align : left;
    border-radius : 4px;
    padding : 16px;
    ${Box}:hover & {
    bottom : 0;
  }
`

const DateBox= styled.div`
    background-color : white;
    width : 220px;
    align-items : center;
    height : 50px;
    left : -260px;
    bottom : 120px;
    position : absolute;
    transition: all 0.5s ease-out;
    border-top-right-radius : 4px;
    border-bottom-right-radius : 4px;
    display : flex;
    flex-direction : row;
    padding : 2px 8px;
    justify-content : space-between;
    z-index : 5;
    p{
        text-transform : uppercase;
        letter-spacing : 1px;
        width : auto;
    }
    ${Box}:hover & {
    left : 0;
  }
`

const Column = styled.div`
    display : flex;
    flex-direction : column;
    width : auto;
    h2{
        font-size : 16px;
        text-transform : uppercase;
        color : #00CCBE;
        letter-spacing : 2px;
        margin : 0;
    }
    span{
        font-size : 12px;    
    }
    p{
        width : 200px;
        height : auto;
    }
`

const TechSvg = styled.img`
    height : 50px;
    width : 50px;
    display : inline-block;
    border-radius : 4px;
`

const ProgramSvg = styled.img`
    width : 20px;
`
const Date = styled.div`
    display : flex;
    padding-left : 12px;
    margin : 8px;
    flex-direction : column;
    border-left : 1px solid #00CCBE;
    p{
        margin : 0;
        text-transform : uppercase;
        letter-spacing : 2px;
        color : #00CCBE;
        font-size : 14px;
    }
    span{
        font-size: 22px;
        letter-spacing: 3px;
        color : #717776;
    }
`

export class Mentor extends React.Component {
    render() {
        return (
            <MentorContainer>
                <Box>
                    <MentorImgContainer src={MentorImg}/>
                    <Content>
                        <h3>Barry Boubacar Siddighi</h3>
                        <p>Hackages</p>
                    </Content>
                    <LogoSvg src={LogoHCube} />

                    <LilBox>
                        <Column big>
                            <h2>HACKJAM</h2>
                            <p>Build Scalable Web App with React Js</p>
                        </Column>
                        <Column>
                            <TechSvg src={BoxTech} />
                            <span>Brussels</span>
                        </Column>
                    </LilBox>

                    <DateBox>
                        <ProgramSvg src={EventSvg}/>
                        <p>next event</p>

                        <Date>
                            <p>JUL</p>
                            <span>17</span>
                        </Date>
                    </DateBox>

                </Box>
            </MentorContainer>
        )
    }
}
