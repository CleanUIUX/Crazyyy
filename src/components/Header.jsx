import styled from "styled-components";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import SubMenu from "./SubMenu";

function Header() {

    const [scrollY, setScrollY ] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });


    const subMenuItems1 = ['sub1' , 'sub2' , 'sub3'];
    const subMenuItems2 = ['sub4' , 'sub5' , 'sub6'];

    return(
        <Router>
            <StyledHeader style={{ backgroundColor: scrollY > 0 ? '#c9c9c9' : 'transparent' }}>
                <StyleInner>
                    <Logolink to="/"><StyleLogo>Crazyyy</StyleLogo></Logolink>
                    <StyledNav>
                        <StyledUl>    
                            <StyledItem>
                                <StyledLink to="/">list1</StyledLink>
                                <SubMenu items={subMenuItems1} />
                            </StyledItem>
                            <StyledItem>
                                <StyledLink to="/">list2</StyledLink>
                                <SubMenu items={subMenuItems2} />
                            </StyledItem>
                        </StyledUl>
                    </StyledNav>
                </StyleInner>
            </StyledHeader>
        </Router>
    )
}

const StyledHeader = styled.header`
    position:fixed;
    top:0;
    left:0;
    right:0;
    width:100%;
    height:80px;
    z-index:10;
    transition: background-color 0.3s, opacity 0.3s;
`;
const StyleInner = styled.div`
    position:relative;
    margin:0 100px;
`
const Logolink = styled(Link)`
    position:absolute;
    top:50%;
    left:0;
    margin-top:-10px;
    color:#fff;
    text-decoration:none;
`
const StyleLogo = styled.h1`
    margin:0;
`
const StyledNav = styled.nav`
    display:block;
`;
const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height:80px;
    margin:0;
`
const StyledItem = styled.li`
    position:relative;
    height:100%;

    &:hover > div{
        display:block;
    }
`;
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 35px;
    height: 100%;
    font-size:24px;
    font-weight:500;
    color: #fff;
    -webkit-text-stroke:1px #222;
    text-decoration:none;
    
`;


export default Header;