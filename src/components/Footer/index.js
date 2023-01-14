import { FaInstagram,  FaTwitter,  FaGithub } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer,
         FooterWrap,
         FooterLinksContainer,
         FooterLinksWrapper,
         FooterLinkItems,
         FooterLinkTitle,
         FooterLink,
         SocialMedia,
         SocialMediaWrap,
         SocialLogo,
         WebsiteRights,
         SocialIcons,
         SocialIconLink

} from './FooterElements'


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return ( 
        <FooterContainer>
               <FooterWrap>
                  {/* <FooterLinksContainer>
                       <FooterLinksWrapper>
                           <FooterLinkItems>
                               <FooterLinkTitle>About Us</FooterLinkTitle>
                                   <FooterLink to="/signin">How it works</FooterLink>
                                   <FooterLink to="/signin">Testimonials</FooterLink>
                                   <FooterLink to="/signin">Careers</FooterLink>
                                   <FooterLink to="/signin">Investors</FooterLink>
                                   <FooterLink to="/signin">Terms of Service</FooterLink>
                           </FooterLinkItems>
                           <FooterLinkItems>
                               <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                   <FooterLink to="/signin">How it works</FooterLink>
                                   <FooterLink to="/signin">Testimonials</FooterLink>
                                   <FooterLink to="/signin">Careers</FooterLink>
                                   <FooterLink to="/signin">Investors</FooterLink>
                                   <FooterLink to="/signin">Terms of Service</FooterLink>
                           </FooterLinkItems>
                       </FooterLinksWrapper>
                       <FooterLinksWrapper>
                           <FooterLinkItems>
                               <FooterLinkTitle>Videos</FooterLinkTitle>
                                   <FooterLink to="/signin">How it works</FooterLink>
                                   <FooterLink to="/signin">Testimonials</FooterLink>
                                   <FooterLink to="/signin">Careers</FooterLink>
                                   <FooterLink to="/signin">Investors</FooterLink>
                                   <FooterLink to="/signin">Terms of Service</FooterLink>
                           </FooterLinkItems>
                           <FooterLinkItems>
                               <FooterLinkTitle>Social Media</FooterLinkTitle>
                                   <FooterLink to="/signin">Instagram</FooterLink>
                                   <FooterLink to="/signin">Facebook</FooterLink>
                                   <FooterLink to="/signin">Youtube</FooterLink>
                                   <FooterLink to="/signin">Twitter</FooterLink>
                           </FooterLinkItems>
                       </FooterLinksWrapper>
                  </FooterLinksContainer> */}
                   <SocialMedia>
                       <SocialMediaWrap>
                           <SocialLogo to="/" onClick={toggleHome}>
                               ALYST.XYZ
                           </SocialLogo>
                           <WebsiteRights>ALYST © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                           <SocialIcons>
                               <SocialIconLink href="https://github.com/alystxyz" target="_blank" aria-label="Github">
                                   <FaGithub />
                               </SocialIconLink>
                               <SocialIconLink href="https://twitter.com/alyst_xyz" target="_blank" aria-label="Twitter">
                                   <FaTwitter />
                               </SocialIconLink>
                           </SocialIcons>
                       </SocialMediaWrap>
                   </SocialMedia>
               </FooterWrap>
        </FooterContainer>
     );
}
 
export default Footer;