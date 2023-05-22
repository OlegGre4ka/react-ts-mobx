// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavbarWrapper, MenuLinksBlock, MenuLink } from "./styled";
// import { MenuLink } from "./../sharedStyledComponents";
import { LogoNavBar } from "./../../assets";
import Text from "./../sharedStyledComponents/Text";
// import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const { pathname } = useLocation();

    // const [isMenu, setIsMenu] = useState(false);

    return (
        <>
            <NavbarWrapper>
                <MenuLink to="/" isBorderBottom={true}><img src={LogoNavBar} width="100" height="50" alt="LogoNavBar" />
                    <Text marginLeft= "15px" alignSelf= "center">React-TS-MobX</Text></MenuLink>
                <MenuLinksBlock>
                    <MenuLink to="/" isActive={pathname === "/"}>Counter</MenuLink>

                    <MenuLink to="/posts" isActive={pathname === "/posts"}>Posts</MenuLink>
                </MenuLinksBlock>
                {/* <HamburgerMenu onClick={() => setIsMenu(!isMenu)}>&#9776;</HamburgerMenu> */}
            </NavbarWrapper>
            {/* {isMenu && <MobileMenu close={() => setIsMenu(!isMenu)} isMenu={isMenu} />} */}
        </>
    )
}