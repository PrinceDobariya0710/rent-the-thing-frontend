import styled from "styled-components";
import { mobile } from "../Responsive";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from "react-router-dom";

const Container = styled.header`
  display: flex;
  background-color: #f7f7f7;
  ${mobile({ flexDirection: "column" ,fontSize:"12px"})}
`;

const Left = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
font-family:Copperplate Gothic Light;
${mobile({fontSize:"14px"})}
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.section`
  display: flex;
  ${mobile({ justifycontent:"center" })}
`;

const SocialIcon = styled.section`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  ${mobile({ justifycontent:"center" ,height:"30px",width:"30px"})}
`;

const Center = styled.section`
  flex: 1;
  padding: 20px;
  ${mobile({  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile({fontSize:"14px"})}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  color:black;
  text-decoration:none;
`;

const Right = styled.section`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.section`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RentTheThing</Logo>
        <Desc>
          We are giving renting services . If you have something to rent post it on our website
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem to='/'>Home</ListItem>
          <ListItem to='/cart'>Cart</ListItem>
          <ListItem to='/profile'>My Account</ListItem>
          <ListItem to='/'>Wishlist</ListItem>
          <ListItem to='/'>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <PhoneIphoneRoundedIcon style={{marginRight:"10px"}}/> +919601179575
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> contact@rent.thing.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;