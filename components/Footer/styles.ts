import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: ${(props) => props.theme.colors.granto_color};
    color: #fff;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.5);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    z-index: 10;
    position: relative;
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