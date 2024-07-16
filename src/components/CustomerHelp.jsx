import styled from "styled-components";

function CustomerHelp() {

    return(
        <>
            <Contents>
                <Imgbox>
                    <Img src={`${process.env.PUBLIC_URL}/img/qna.png`} alt="" />
                </Imgbox>
                <Title>무엇을 도와드릴까요?</Title>
                <Inpbox>
                    <input type="search" placeholder="궁금한 점을 검색해보세요." value="" />
                </Inpbox>
                <HelpList>
                    <List>
                        <a href="#">잘못 송금했어요</a>
                    </List>
                    <List>
                        <a href="#">송금 확인중</a>
                    </List>
                    <List>
                        <a href="#">각종 증명서 발급</a>
                    </List>
                </HelpList>
            </Contents>
        </>
    )
}

const Contents = styled.div`
    
`
const Imgbox = styled.div`
    width:100px;
    height:100px;
    text-align:center;
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