import { useState } from 'react';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../images/0x-bg.png'
import { Button } from '../ButtonElement'


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return ( 
        <HeroContainer id='home'>
             <HeroBg>
                 <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
             </HeroBg>
             <HeroContent>
                 <HeroH1></HeroH1>
                 <HeroP>
                 A suite of products focusing on{"\n"}
                 network ecosystem support, awareness and adoption.{"\n"}
               
                



                 </HeroP>
                 <HeroBtnWrapper>
                     <Button to="signup" onMouseEnter={onHover} 
                                         onMouseLeave={onHover}
                                         primary="true"
                                         dark="true"
                                         smooth={true}
                                         duration={500}
                                         spy={true}
                                         exact='true'
                                         offset={-80}
                                         onClick={() => window.location.href = "https://gleam.io/Ltgua/wafflenft-whitelist-competition"}
                                         >
                         Follow us for updates {hover ? <ArrowForward /> : <ArrowRight />}
                     </Button>
                 </HeroBtnWrapper>
             </HeroContent>
        </HeroContainer>
     );
}
 
export default HeroSection;

