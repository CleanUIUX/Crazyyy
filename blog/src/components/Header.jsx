import styled from "styled-components";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useState, useEffect } from "react";

function Header() {

    const [scrollY, setScrollY ] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return(
        <Router>
            <StyledHeader style={{ backgroundColor: scrollY > 0 ? 'red' : 'transparent' }}>
                <StyleInner>
                    <StyleLogo>Crazyyy</StyleLogo>
                    <StyledNav>
                        <StyledUl>    
                            <StyledItem><StyledLink to="/">list1</StyledLink></StyledItem>
                            <StyledItem><StyledLink to="/">list2</StyledLink></StyledItem>
                        </StyledUl>
                    </StyledNav>
                    <StyledBox>
                        <SearchInput type="text" />
                        {/* <button className="btn_del"></button> */}
                    </StyledBox>
                </StyleInner>
            </StyledHeader>
        </Router>
    )
}

const StyledHeader = styled.header`
    width:100%;
    height:100px;
    border-bottom:1px solid #222 ;
`;
const StyleInner = styled.div`
    position:relative;
    margin:0 100px;
`
const StyleLogo = styled.h1`
    position:absolute;
    top:0;
    left:0;
`
const StyledNav = styled.nav`
    display:block;
`;
const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100px;
`
const StyledItem = styled.li`
    height:100%;
`;
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 35px;
    height: 100%;
    color: #222;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.60);
    
`;
const StyledBox = styled.div`
    position:absolute;
    top:0;
    right:0;
`;
const SearchInput = styled.input`
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
`;



export default Header;