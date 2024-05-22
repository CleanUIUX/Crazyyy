import styled from "styled-components";
function Recentcontents() {
    return(
        <>
            <Section>
                <Inner>
                    <Title>최신 글✨</Title>
                    <Description>최신 포스팅을 구경해보세요!</Description>
                    <Content>
                        <PostBox>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <TagWrap>
                                <TagList>
                                    <TagItem><Tag>태그1</Tag></TagItem>
                                </TagList>
                            </TagWrap>
                            <PostTitle>여기에는 글제목!</PostTitle>
                            <PostDesc>글내용</PostDesc>
                            <UserInfo>
                                <UserImage  src="" alt="" />
                                <UserName>글쓴이</UserName>
                                <PostDate>24.05.00</PostDate>
                            </UserInfo>
                            <AddOns>
                                <Comment>
                                    <CommentCount>3</CommentCount>
                                </Comment>
                                <BtnDown></BtnDown>
                            </AddOns>
                        </PostBox>
                        <TxtList>
                            <TxtBox>
                                <TagWrap>
                                    <TagList>
                                        <TagItem><Tag>태그1</Tag></TagItem>
                                    </TagList>
                                </TagWrap>
                                <TxtTitle>여기에는 글제목!</TxtTitle>
                                <UserInfo>
                                    <UserImage  src="" alt="" />
                                    <UserName>글쓴이</UserName>
                                    <PostDate>24.05.00</PostDate>
                                </UserInfo>
                                <AddOns>
                                    <Comment>
                                        <CommentCount>3</CommentCount>
                                    </Comment>
                                    <BtnDown></BtnDown>
                                </AddOns>
                            </TxtBox>
                            <ImgBox>
                                <Img src="/img/img1.jpg" alt="" />
                            </ImgBox>
                        </TxtList>
                    </Content>
                </Inner>
            </Section>
        </>
    )
};
const Section = styled.section`
    padding:30px 0;
`
const Inner = styled.div`
    padding:0 120px;
`
const Title = styled.h3`
    font-size:42px;
    font-weight:500;
    text-align:left;
`
const Description = styled.p`
    margin-top:18px;
    font-size:24px;
    text-align:left;
`
const Content = styled.div`
    display:flex;
    justify-content:center;
    margin-top:24px;
`
const PostBox = styled.div`
    width:50%;
    margin-right:4px;
    padding:20px;
    border:1px solid #ebebeb;
    border-radius:20px;
    text-align:left;
`
const PostTitle = styled.p`
    margin-top:16px;
    font-size:24px;
    font-weight:700;
`
const PostDesc = styled.p`
    margin-top:24px;
`
const TxtList = styled.div`
    position:relative;
    width:50%;
`
const TxtBox = styled.div`
    margin-left:4px;
    padding:20px;
    border:1px solid #ebebeb;
    border-radius:20px;
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
    margin-top:16px;
    font-size:24px;
    font-weight:700;
`
const UserInfo = styled.div`
    
`
const UserImage  = styled.img`
    
    
`
const UserName = styled.span`
    
`
const PostDate = styled.span`
    
`
const AddOns = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:16px;
`
const Comment = styled.div`
    
`
const CommentCount = styled.span`
    
`
const BtnDown  = styled.button`

`
const ImgBox = styled.div`
   position:absolute;
   top:50%;
   right:24px;
   width:200px;
   height:200px;
   margin-top:-100px;
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
`
export default Recentcontents;