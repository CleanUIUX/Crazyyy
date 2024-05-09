import styled from "styled-components";
import data from '../data/data.js'
import { BrowserRouter as Router, Link } from "react-router-dom";

function ListContents() {
    return(
        <>
            <div>
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
                        <Title>여기에 글제목이 들어가야해!</Title>
                        <Txt>여기는 글내용이 들어가야해!</Txt>
                        <InfoWriter>
                            <img src="" alt="" />
                            <WriterInfo>
                                <WriterName>글쓴이</WriterName>
                                <DateInfo></DateInfo>
                            </WriterInfo>
                        </InfoWriter>
                    </TxtBox>
                </StyledLink>
                <ul className="post_list">
                    <li>
                        <Link to="/">
                            <TagList>
                                <span className="tag1">tag1</span>
                            </TagList>
                            <div className="post_content">
                                <div className="post_txt">
                                    <h3>여기에 글제목이 들어가야해!</h3>
                                    <p>여기는 글내용이 들어가야해!</p>
                                    <div className="info_writer">
                                        <img src="" alt="" />
                                        <div>
                                            <p className="writer">글쓴이</p>
                                            <span className="date"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="post_img">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </Router>
            </div>
        </>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
const ImgBox = styled.div`
    /* 이미지 박스 스타일 */
`;
const TxtBox = styled.div`
    /* 텍스트 박스 스타일 */
`;
const TagList = styled.div`
    /* 태그 리스트 스타일 */
`;
const Tag = styled.span`
    /* 태그 스타일 */
`;
const Title = styled.h2`
    /* 제목 스타일 */
`
const Txt =styled.p`
    /* 내용 스타일 */
`
const InfoWriter = styled.div`
    /* 글쓴이 정보 스타일 */
`;
const WriterInfo = styled.div`
    /* 글쓴이 정보 스타일 */
`;
const WriterName = styled.p`
    /* 글쓴이 이름 스타일 */
`;

const DateInfo = styled.span`
    /* 날짜 정보 스타일 */
`;
export default ListContents;
