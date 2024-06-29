import React from 'react';
import { FooterContainer, FooterContent, FooterLinks, FooterLink } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h3>Nome do seu Site</h3>
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <FooterLinks>
          <li>
            <FooterLink href="#">Termos de Serviço</FooterLink>
          </li>
          <li>
            <FooterLink href="#">Política de Privacidade</FooterLink>
          </li>
          <li>
            <FooterLink href="#">Contato</FooterLink>
          </li>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;