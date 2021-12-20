import styled from "styled-components"

const FooterC = styled.div`
  margin-top: 3em;
  padding: 2em;
  text-align: center;
  color: #9999;

  hr {
    border-top: 1px solid #6666;
  }
  
  footer {
    margin-top: 2em;
    max-width: 1000px;
  }
`;

const Footer = () => {
  return (
    <FooterC>
      <hr/>
      <footer>© 2021-Present Vineet Singh. All Rights Reserved.</footer>
    </FooterC>
  )
}

export default Footer;