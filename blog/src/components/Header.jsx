import styled from "styled-components";
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Header() {
    return(
        <Router>
            <StyledHeader>
                <h1>Crazyyy</h1>
                <StyledGnb>
                    <StyledItem><Link to="/">list1</Link></StyledItem>
                    <StyledItem><Link to="/">list2</Link></StyledItem>
                </StyledGnb>
                <StyledBox>
                    <SearchInput type="text" />
                    {/* <button className="btn_del"></button> */}
                </StyledBox>
            </StyledHeader>
        </Router>
    )
}

const StyledHeader = styled.header`
    width:100%;
    height:200px;
    background:#555;
`;
const StyledGnb = styled.ul`
    display:flex;
`;
const StyledItem = styled.li`
    border:1px solid #222;
`;

const StyledBox = styled.div`
    float:right;
`;
const SearchInput = styled.input`
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
`;



export default Header;