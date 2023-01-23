import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nos Événements</PricingHeading>
          <PricingContainer>
            
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan></PricingCardPlan>
                <PricingCardCost>Sommet de la Francophonie</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>un dîner, le 19 novembre, entre les sénateurs et les leaders de la JCI.</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Voir Plus</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan></PricingCardPlan>
                <PricingCardCost>CAMO Gafsa</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>Nous sommes impatients de vous accueillir à Gafsa 🤩 Bienvenue chez #CAMO2022tunisie</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Voir Plus</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan></PricingCardPlan>
                <PricingCardCost>JCI Afrique Tunisie 2022</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>Conférence JCI Afrique et Moyen-Orient Tunisie 2022</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Voir Plus</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing