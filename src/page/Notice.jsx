import CustomerBanner from "../components/CustomerBanner";
import CustomerHelp from "../components/CustomerHelp";
import Damage from "../components/Damage";
import Header from "../components/Header";
import styled from "styled-components";

function Notice() {



    return (
        <>
            <Header />
            <div className="Section">
                <Inner className="inner">
                    <CustomerHelp />
                    <CustomerBanner />
                    <Damage />
                </Inner>
            </div>
        </>
    )
}
const Inner = styled.div`
    
`

export default Notice;