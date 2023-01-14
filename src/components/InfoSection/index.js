import {
         InfoContainer,
         InfoWrapper,
         InfoRow,
         Column1,
         Column2,
         TextWrapper,
         TopLine,
         Heading,
         Subtitle,
         BtnWrap,
         ImgWrap,
         Img
} from './InfoElements'

import { Button } from '../ButtonElement';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router';




const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2, buttonTo}) => {
    
    const history = useHistory();
    
    return ( 
        
            
          <InfoContainer lightBg={lightBg} id={id}>
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       <Column1>
                             <TextWrapper>
                                 <TopLine>{ topLine }</TopLine>
                                 <Heading lightText={lightText}>{ headLine }</Heading>
                                 <Subtitle darkText={darkText}>{ description }</Subtitle>
                                 {<BtnWrap>
                                     <Button onClick={() => window.location.href = buttonTo }
                                             smooth={true}
                                             duration={500}
                                             spy={true}
                                             exact="true"
                                             offset={-80}
                                             primary={primary ? 1 : 0}
                                             dark={dark ? 1 : 0}
                                             dark2={dark2 ? 1 : 0}

                                     >{ buttonLabel }</Button>
                                 </BtnWrap>}
                             </TextWrapper>
                       </Column1>
                       <Column2>
                               <ImgWrap>
                                    <Img src={img} alt={alt} />
                               </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
          </InfoContainer>
          
        
     );
}
 
export default InfoSection;