import React from 'react';
import { FooterContainer, FooterContent, FooterLinks, FooterLink } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h3>Scriptors</h3>
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <FooterLinks>
          <li>
            <FooterLink href="/info#section2">Termos de Serviço</FooterLink>
          </li>
          <li>
            <FooterLink href="/info#section3">Política de Privacidade</FooterLink>
          </li>
          <li>
            <FooterLink href="/info#section4">Contato</FooterLink>
          </li>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;