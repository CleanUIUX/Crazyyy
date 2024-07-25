import Coverage from "../components/Coverage";
import CustomerBanner from "../components/CustomerBanner";
import CustomerHelp from "../components/CustomerHelp";
import Damage from "../components/Damage";
import Header from "../components/Header";
import Test from "../components/Test";
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
                    <Coverage />
                    <Test />
                </Inner>
            </div>
        </>
    )
}
const Inner = styled.div`
    
`

export default Notice;