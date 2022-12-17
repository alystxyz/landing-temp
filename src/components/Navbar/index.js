import { Nav, 
         NavLogo, 
         NavbarContainer, 
         MobileIcon, 
         NavMenu, 
         NavItem, 
         NavLinks,
         NavBtn,
         NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';



const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return ( 
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>ALYST</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}
                                      
                                       >
                                About Us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap"
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact='true'
                                       offset={-80}
                                         >
                                Roadmap
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="gallery"
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact='true'
                                       offset={-80}
                            >Gallery</NavLinks>
                        </NavItem>
                      
                    </NavMenu>
                    <NavBtn>
                        {/* <NavBtnLink to="">Mint: TBD</NavBtnLink> */}
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
     );
}
 
export default Navbar;