import CustomerHelp from "../components/CustomerHelp";
import Header from "../components/Header";
import styled from "styled-components";

function Notice() {



    return (
        <>
            <Header />
            <div className="Section">
                <Inner className="inner">
                    <CustomerHelp />
                </Inner>
            </div>
        </>
    )
}
const Inner = styled.div`
    width:100%;
    max-width:600px;
    margin:0 auto;
`

export default Notice;