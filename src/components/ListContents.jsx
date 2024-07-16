import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { contentData } from "../data/list_data.js"

function ListContents() {
    return(
        <>
        <Inner>
            {contentData.map((content) => {
                return(
                <StyledLink to="/notice" key={content.id}>
                    <ImgBox>
                        <img src={content.imgSrc} alt="" />
                    </ImgBox>
                    <TxtBox>
                        <TagList>
                            {content.tags.map((tag, list_data) => {
                                <Tag key={list_data}>{tag}</Tag>
                            })}
                        </TagList>
                        <Title>{content.title}</Title>
                        <Txt>{content.text}</Txt>
                        <InfoWriter>
                            <WriterImage src={content.writer.imageSrc} alt="" />
                            <WriterInfo>
                                <WriterName>{content.writer.name}</WriterName>
                                <DateInfo>{content.writer.date}</DateInfo>
                            </WriterInfo>
                        </InfoWriter>
                    </TxtBox>
                </StyledLink>
                
                )
            })}
        </Inner>
        </>
    )
}
const Inner = styled.section`
    padding-top:30px;
    text-align:center;
`
const StyledLink = styled(Link)`
    display:inline-block;
    margin:4px;
    border:1px solid #ebebeb;
    border-radius:20px;
    text-decoration: none;
    color: inherit;
`;
const ImgBox = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    padding-top: 250px;
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
    margin-top:20px;
`
const InfoWriter = styled.div`
    display:flex;
    align-items:center;
    margin-top:20px;
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
