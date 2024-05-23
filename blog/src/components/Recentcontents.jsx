import { useState } from "react";
import styled, {keyframes} from "styled-components";
import { txtlist } from "../data/txtList_data";
import { txtpost } from "../data/txtPost_data";
import { BrowserRouter as Router, Link } from 'react-router-dom'
function Recentcontents() {

    const [thumbsUp, setThumbsUp] = useState({ btn1:0, btn2:0, btn3:0 });
    const handleThumbsUp = (button) => {
        setThumbsUp((prevThumbsUp) => ({
            ...prevThumbsUp,
            [button]: prevThumbsUp[button] + 1,
        }));
    };

    return(
        <>
            <Section>
                <Inner>
                    <Title>최신 글✨</Title>
                    <Description>최신 포스팅을 구경해보세요!</Description>
                    <Content>
                        <PostBox to="/">
                            {txtpost.map(() => (
                                <>
                                <PostImgBox>
                                    <PostImg src="/img/img3.jpg" alt="" />
                                </PostImgBox>
                                <PostTxtBox>
                                    <TagWrap>
                                        <TagList>
                                            <TagItem><Tag>태그1</Tag></TagItem>
                                        </TagList>
                                    </TagWrap>
                                    <PostTitle>여기에는 글제목!</PostTitle>
                                    <PostDesc>글내용</PostDesc>
                                    <UserInfo>
                                        <UserImage  src="/img/img2.jpg" alt="" />
                                        <UserName>글쓴이</UserName>
                                        <PostDate>24.05.00</PostDate>
                                    </UserInfo>
                                    <AddOns>
                                        <Comment>
                                            <CommentCount>📝3</CommentCount>
                                        </Comment>
                                        <BtnDown onClick={() => handleThumbsUp('btn1')}>👍{thumbsUp.btn1}</BtnDown>
                                    </AddOns>
                                </PostTxtBox>
                                </>
                            ))}
                        </PostBox>
                        <Router>
                            <TxtListWrap>
                                {txtlist.map((post) => (
                                    <Link to="/">
                                        <TxtList>
                                            <ImgBox>
                                                <Img src={post.imgSrc} alt="" />
                                            </ImgBox>
                                            <TxtBox>
                                                <TagWrap>
                                                        <TagList>
                                                            {post.tags.map((tag, tag_data) => (
                                                                <TagItem key={tag_data}><Tag>{tag}</Tag></TagItem>
                                                            ))}
                                                        </TagList>
                                                </TagWrap>
                                                <TxtTitle>{post.title}</TxtTitle>
                                                <UserInfo>
                                                    <UserImage  src={post.userImgSrc} alt="" />
                                                    <UserName>{post.name}</UserName>
                                                    <PostDate>{post.date}</PostDate>
                                                </UserInfo>
                                                <AddOns>
                                                    <Comment>
                                                        <CommentCount>📝{post.comments}</CommentCount>
                                                    </Comment>
                                                    <BtnDown onClick={() => handleThumbsUp(post.thumbsUpKey)}>👍{thumbsUp[post.thumbsUpKey]}</BtnDown>
                                                </AddOns>
                                            </TxtBox>
                                        </TxtList>
                                    </Link>
                                ))}
                            </TxtListWrap>
                        </Router>
                    </Content>
                </Inner>
            </Section>
        </>
    )
};
let fadeIn = keyframes`
from {
    opacity:0;
    transform:scale(0.95);
}
to {
    opacity: 1;
    transform: scale(1);
}
`;
let scaleUp = keyframes`
from {
    opacity:0;
    transform:translateY(5px);
}
to {
    opacity: 1;
    transform:translateY(0);
}
`
const Section = styled.section`
    padding:30px 0;
`
const Inner = styled.div`
    padding:0 120px;
`
const Title = styled.h3`
    font-size:36px;
    font-weight:500;
    text-align:left;
`
const Description = styled.p`
    margin-top:16px;
    font-size:18px;
    color:#6b7280;
    text-align:left;
`
const Content = styled.div`
    display:flex;
    justify-content:center;
    margin-top:24px;
`
const PostBox = styled.div`
    width:50%;
    margin-right:16px;
    border:1px solid #ebebeb;
    border-radius:20px;
    text-align:left;
`
const PostImgBox = styled.div`
    display:flex;
    -webkit-box-align:center;
    align-items:center;
    overflow:hidden;
    position:relative;
    width:100%;
    padding-top:300px;
    border-radius:20px 20px 0 0;
`
const PostImg = styled.img`
    display:block;
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    max-height:100%;
    max-width:100%;
    min-height:100%;
    min-width:100%;
    width:0;
    height:0;
    margin:auto;
    object-fit:cover;
`
const PostTxtBox = styled.div`
    padding:32px;
`
const PostTitle = styled.p`
    margin-top:16px;
    font-size:24px;
    font-weight:700;
`
const PostDesc = styled.p`
    margin-top:24px;
`
const TxtListWrap = styled.div`
    display:flex;
    flex-direction:column;
`
const TxtList = styled.div`
    position:relative;
    width:360px;
    margin-left:16px;
    margin-bottom:8px;
    padding:32px 200px 32px 24px;
    border:1px solid #ebebeb;
    border-radius:20px;

    &:hover {
        animation: ${scaleUp} 0.5s ease-out;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    animation: ${fadeIn} 0.5s ease-out;
`
const TxtBox = styled.div`
    text-align:left;
`
const TagWrap = styled.div`
`
const TagList = styled.ul`
    display:flex;
    
`
const TagItem = styled.li`
    
`
const Tag = styled.span`
    padding:2px 8px;
    font-size:14px;
    font-weight:500px;
    border:1px solid aliceblue;
    border-radius:20px;
    background-color: aliceblue;
`
const TxtTitle  = styled.p`
    overflow:hidden;
    display:-webkit-box;
    margin-top:16px;
    font-size:24px;
    font-weight:700;
    letter-spacing: -.2px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
const UserInfo = styled.div`
    display:flex;
    align-items:center;
    margin-top:24px;
`
const UserImage  = styled.img`
    width:32px;
    height:32px;
    border-radius:20px;
`
const UserName = styled.span`
    margin-left:8px;
    font-size:14px;
`
const PostDate = styled.span`
    margin-left:4px;
    font-size:14px;
`
const AddOns = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:24px;
`
const Comment = styled.div`
    
`
const CommentCount = styled.span`
    padding:4px 10px;
    font-size:12px;
    border-radius:10px;
    background:#efefef;
`
const BtnDown  = styled.span`
    margin-right:10px;
    font-size:14px;
    font-weight:500;
`
const ImgBox = styled.div`
   position:absolute;
   top:50%;
   right:24px;
   width:160px;
   height:160px;
   margin-top:-80px;
`
const Img = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
    margin: auto;
    object-fit: cover;
    border-radius:20px;
`
export default Recentcontents;