import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    //padding: 0.1rem 1rem;
    text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export { FooterContainer, FooterContent, FooterLinks, FooterLink }