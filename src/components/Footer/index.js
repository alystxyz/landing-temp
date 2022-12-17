import { FaInstagram,  FaTwitter,  FaDiscord, FaTelegram } from 'react-icons/fa'
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
                               <SocialIconLink href="" target="_blank" aria-label="Instagram">
                                   <FaInstagram />
                               </SocialIconLink>
                               <SocialIconLink href="https://discord.gg/96QBSE4j59" target="_blank" aria-label="Discord">
                                   <FaDiscord />
                               </SocialIconLink>
                               <SocialIconLink href="https://twitter.com/WaffleNft" target="_blank" aria-label="Twitter">
                                   <FaTwitter />
                               </SocialIconLink>
                               <SocialIconLink href="https://t.me/WaffleNFT" target="_blank" aria-label="Telegram">
                                   <FaTelegram />
                               </SocialIconLink>
                           </SocialIcons>
                       </SocialMediaWrap>
                   </SocialMedia>
               </FooterWrap>
        </FooterContainer>
     );
}
 
export default Footer;