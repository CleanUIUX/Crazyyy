import styled from "styled-components";
import { testData } from "../data/test_data";

function CustomerBanner() {
    const filter = testData.filter(item => item.phone);
    console.log(filter);
    return(
        <>
            <CounselWrap>
                <TxtBox>
                    <Title>토스 고객센터에서 <br />24시간 상담받을 수 있어요</Title>
                    <Counsel>
                        {testData.map((item, index) => (
                            <Txt key={index}>
                                 {item.name}
                                <em>{item.phone}</em>
                            </Txt>
                        ))}
                    </Counsel>
                </TxtBox>
                <ImgBox>
                    <Img src={`${process.env.PUBLIC_URL}/img/qna1.png`} alt="" />
                </ImgBox>
            </CounselWrap>
        </>
    )
}
const CounselWrap = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:100px;
    width:100%;
    margin-top:58px;
    background:#eef6f3;
`
const TxtBox = styled.div`
    
`
const Title = styled.h3`
    margin-bottom: 32px;
    font-size: 28px;
    font-weight: 700;
    line-height: 140%;
    color: rgba(0, 12, 30, 0.8);
    white-space: pre-line;
`
const Counsel = styled.div`
    display:flex;
    justify-content:left;
    gap:50px;
    text-align:center;
`
const Txt = styled.p`
    font-size:17px;

    em{
        display:block;
        margin-top:10px;
        font-size:20px;
        font-weight:700;
    }
`
const ImgBox = styled.div`
    width:326px;
    height:326px;
`
const Img = styled.img`
    width:100%;
`
export default CustomerBanner;