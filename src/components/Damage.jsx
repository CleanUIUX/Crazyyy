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
                    <DamageItem>
                        <a href="">토스 계정을 잠시 잠그고 싶어요</a>
                    </DamageItem>
                    <DamageItem>
                        <a href="">명의 도용 신고</a>
                    </DamageItem>
                    <DamageItem>
                        <a href="">보이스피싱 신고</a>
                    </DamageItem>
                    <DamageItem>
                        <a href="">분실/도난/탈취 신고</a>
                    </DamageItem>
                    <DamageItem>
                        <a href="">중고거래 사기 신고</a>
                    </DamageItem>
                </DamageCont>
            </DamageWrap>
        </>
    )
}

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
`
const DamageItem = styled.div`
`
export default Damage;