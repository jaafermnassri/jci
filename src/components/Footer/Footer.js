import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
        Rejoignez notre adhésion exclusive pour recevoir les dernières nouvelles et tendances
        </FooterSubHeading>
        <FooterSubText>Vous pouvez vous désinscrire à tout moment.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Votre Email' />
          <Button fontBig>Abonnez vous</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Propos de nous</FooterLinkTitle>
            <FooterLink to='/sign-up'>Comment ça marche</FooterLink>
            <FooterLink to='/'>idées</FooterLink>
            <FooterLink to='/'>carriéres</FooterLink>
            <FooterLink to='/'>Investimenteurs</FooterLink>
            <FooterLink to='/'>Les services</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contactez nous</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Déstinations</FooterLink>
            <FooterLink to='/'>Sponseurs</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Vidéos</FooterLinkTitle>
            <FooterLink to='/'>Ajouter Video</FooterLink>
            <FooterLink to='/'>Ambassadeurs</FooterLink>
            <FooterLink to='/'>Agence</FooterLink>
            <FooterLink to='/'>Influenceur</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Média</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            JCI
          </SocialLogo>
          <WebsiteRights>JCI © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;