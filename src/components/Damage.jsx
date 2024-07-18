import styled from "styled-components";

function Damage() {
    return(
        <>
            <DamageWrap>
                <Title>
                    금전 피해를 입으셨나요?
                </Title>
                <Desc>
                    혹시라도 토스에서 금전 피해를 입으셨다면 신고해주세요. 앞으로 고객님이 안심하고 토스를 쓰실 수 있도록, 토스의 잘못이 아니라도 피해 금액을 보상해드려요.
                </Desc>
                <DamageCont>
                    {links.map((text, index) => (
                        <DamageItem key={index}>
                            <DamageLink href="#">{text}</DamageLink>
                        </DamageItem>
                    ))}
                </DamageCont>
            </DamageWrap>
        </>
    )
}
const links = [
    "토스 계정을 잠시 잠그고 싶어요",
    "명의 도용 신고",
    "보이스피싱 신고",
    "분실/도난/탈취 신고",
    "중고거래 사기 신고"
]
const DamageWrap = styled.section`
    position: relative;
    width: 100%;
    max-width: 690px;
    margin: auto;
    padding:80px 0;
`
const Title = styled.h3`
    font-size: 36px;
    font-weight: 700;
    line-height: 130%;
    color: #333d4b;
`
const Desc = styled.p`
    padding-top: 32px;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    color: #4e5968;
    white-space: pre-line;
`
const DamageCont = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:32px;
`
const DamageItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: background-color .2s ease, box-shadow .2s ease;
    background-color: rgba(2, 32, 71, .05);
    box-shadow: inset 0 0 0 1px transparent;
    margin: 0 10px 10px 0;
    border-radius: 12px;

    &:hover{
        background-color: rgba(0, 27, 55, .1);
    }
    &:nth-child(1) {
        flex-basis: calc(100% - 10px);
        max-width: calc(100% - 10px);
    }
    &:nth-child(2) {
        flex-basis: calc(25% - 10px);
        max-width: calc(25% - 10px);
    }
    &:nth-child(3) {
        flex-basis: calc(25% - 10px);
        max-width: calc(25% - 10px);
    }
    &:nth-child(4) {
        flex-basis: calc(25% - 10px);
        max-width: calc(25% - 10px);
    }
    &:nth-child(5) {
        flex-basis: calc(25% - 10px);
        max-width: calc(25% - 10px);
    }
`
const DamageLink = styled.a`
    display:block;
    position:relative;
    width:100%;
    padding:50px 8px 12px;    
    font-size:13px;
    color: rgb(51, 61, 75);
    text-align:center;
    background:url(/img/ico.svg) no-repeat 50% 25% / 28px 28px;
`
export default Damage;