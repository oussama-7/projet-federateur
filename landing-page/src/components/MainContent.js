import React from 'react'
import FooterComponent from './FooterComponent';
import HeroComponent from './HeroComponent';
import Keunggulan from './Keunggulan';
import MajorsComponent from './MajorsComponent';
import PartnerComponent from './PartnerComponent';
import SectionKepsek from './SectionKepsek';

const MainContent = () => {
  return (
    <div>
        <HeroComponent />
        <SectionKepsek />
        {/* <Keunggulan /> */}
        <MajorsComponent />
        {/* <PartnerComponent /> */}
        <FooterComponent />
    </div>
  )
}

export default MainContent;
