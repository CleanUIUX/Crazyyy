import styled from "styled-components";

function Coverage () {
    return(
        <>
        <CoverageWrap>
            <Inner>
                <Title>토스 안심보상제를 <br /> 알려드릴게요</Title>
                
            </Inner>
        </CoverageWrap>
        </>
    )
}

const CoverageWrap =styled.section`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding:56px 0;
    background-color: #f5f6f8;
`
const Inner = styled.div`
    max-width:700px;
    margin:0 auto;
`
const Title = styled.h3`
    position: relative;
    margin-bottom: 16px;
    font-size: 36px;
    font-weight: 700;
    color: #333d4b;
`
export default Coverage;