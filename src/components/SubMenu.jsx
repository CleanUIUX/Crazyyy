import styled from "styled-components";
function SubMenu({ items }) {
    
    return(
        <>
            <SubMenuContainer>
                {items.map((itme, depth) => (
                    <SubMenuItem key={depth}>{itme}</SubMenuItem>
                ))}
               
            </SubMenuContainer>
        </>
    )
};

const SubMenuContainer = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform:translateX(-50%);
`
const SubMenuItem = styled.div`
    padding: 10px;
    &:hover {
        background: #f0f0f0;
    }
`
export default SubMenu;