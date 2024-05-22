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
                                <Img src="" alt="" />
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
    font-size:24px;
    text-align:left;
`
const Content = styled.div`
    display:flex;
    justify-content:center;
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
    font-weight:500;
`
const PostDesc = styled.p`
    margin-top:24px;
`
const TxtList = styled.div`
    width:50%;
`
const TxtBox = styled.div`
    margin-left:4px;
    padding:20px;
    border:1px solid #ebebeb;
    border-radius:20px;
`
const TagWrap = styled.div`
    
`
const TagList = styled.ul`
    
`
const TagItem = styled.li`

`
const Tag = styled.span`
    
`
const TxtTitle  = styled.p`
    margin-top:16px;
    font-size:24px;
    font-weight:500;
`
const UserInfo = styled.div`
    display:flex;
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

`
const Img = styled.img`
    
`
export default Recentcontents;