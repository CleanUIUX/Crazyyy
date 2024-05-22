import { useEffect } from "react";
import styled from "styled-components";

function Hello(){
    useEffect(() => {

    })
    return(
        <>
            <Section>
                <ImgWrapper>
                    <Img src="/img/bg1.png" alt="" />
                </ImgWrapper>
                <TextWrapper>
                    <Title>Welcome to the crazyyy blog!</Title>
                    <Desc>Let's get it crazy</Desc>
                </TextWrapper>
            </Section>
        </>
    )
};
const Section = styled.section`
    /* position:relative; */
    height:100vh;
`
const ImgWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    opacity:.7;
`
const Img = styled.img`
    width:100%;
    height:100%;
`
const TextWrapper = styled.div`
    position:relative;
    padding:200px 0;
`
const Title = styled.p`
    font-size:62px;
    font-weight:700;
`
const Desc = styled.p`
    margin-top:72px;
    font-size:52px;
    font-weight:500;
    color:#ffc940;
`

export default Hello;