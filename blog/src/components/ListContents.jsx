import styled from "styled-components";
import data from '../data/data.js'
import { BrowserRouter as Router, Link } from "react-router-dom";

function ListContents() {
    return(
        <>
            <Inner>
                <Router>
                    <StyledLink to="/">
                        <ImgBox>
                            <img src="" alt="" />
                        </ImgBox>
                        <TxtBox>
                            <TagList>
                                <Tag>
                                    tag1
                                </Tag>
                            </TagList>
                            <Title>🌍여기에 글제목이 들어가야해!</Title>
                            <Txt>여기는 글내용이 들어가야해!</Txt>
                            <InfoWriter>
                                <WriterImage src="" alt="" />
                                <WriterInfo>
                                    <WriterName>글쓴이</WriterName>
                                    <DateInfo>2024.00.00</DateInfo>
                                </WriterInfo>
                            </InfoWriter>
                        </TxtBox>
                    </StyledLink>
                </Router>
            </Inner>
        </>
    )
}

const StyledLink = styled(Link)`
    display:inline-block;
    border:1px solid #ebebeb;
    border-radius:20px;
    text-decoration: none;
    color: inherit;
`;
const Inner = styled.div`
    padding-left:40px;
    padding-right:40px;
`
const ImgBox = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    padding-top: 100px;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
    background:tan;
`;
const TxtBox = styled.div`
    padding:16px;
`;
const TagList = styled.div`
    text-align:left;
`;
const Tag = styled.span`
    padding:4px 8px;
    border:0;
    border-radius:20px;
    background:aqua;
    font-size:14px;
    font-weight:500;
`;
const Title = styled.h2`
    font-size:18px;
`
const Txt =styled.p`
    /* 내용 스타일 */
`
const InfoWriter = styled.div`
    display:flex;
    align-items:center;
    padding-top:20px;
    border-top:1px solid #222;
`;
const WriterImage = styled.img`
    width:40px;
    height:40px;
    border-radius:20px;
    background-color:yellowgreen;
    object-fit:cover;
`
const WriterInfo = styled.div`
    display:flex;
    align-items:center;
    margin-left:10px;
`;
const WriterName = styled.p`
    font-size:12px;
    font-weight:700;
`;

const DateInfo = styled.span`
    margin-left:4px;
    font-size:10px;
`;
export default ListContents;
