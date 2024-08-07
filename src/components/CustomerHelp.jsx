import styled from "styled-components";
import { helpData } from "../data/help_data.js";
// import { Link } from "react-router-dom/cjs/react-router-dom";

function CustomerHelp() {

    return(
        <>
            <Contents>
                <Imgbox>
                    <Img src={`${process.env.PUBLIC_URL}/img/qna1.png`} alt="" />
                </Imgbox>
                <Title>무엇을 도와드릴까요?</Title>
                <Inpbox>
                    <input type="search" placeholder="궁금한 점을 검색해보세요." value="" readOnly/>
                </Inpbox>
                <HelpList>
                    {helpData.map((item, index) => (
                        <List key={index}>
                            <a href="#">{item}</a>
                        </List>
                    ))}
                </HelpList>
            </Contents>
        </>
    )
}

const Contents = styled.div`
    width:100%;
    max-width:600px;
    margin:80px auto 0;
`
const Imgbox = styled.div`
    margin:0 auto;
    width:100px;
    height:100px;
`
const Img = styled.img`
    width:100%;
`
const Title = styled.p`
    margin-bottom: 38px;
    font-size: 40px;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
`
const Inpbox = styled.div`
    width:100%;
    max-width:600px;
    margin:0 auto;

    input{
        width:100%;
        height:48px;
        padding:0 20px;
        border-radius:20px;
    }
`
const HelpList = styled.ul`
    display:flex;
    gap:20px;
    justify-content:left;
    flex-wrap:wrap;
    margin-top:20px;
`
const List = styled.li`
    padding:4px 10px;
    border-radius:20px;
    background:#f2f4f6;
    font-size:13px;
`
export default CustomerHelp;