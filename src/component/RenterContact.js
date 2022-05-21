import React from 'react'
import styled from 'styled-components';
import { mobile } from '../Responsive';

const MainContainer = styled.article`

`;

const ContactDetails = styled.details`

`;

const ContactList = styled.ul`

`;


const ListItem = styled.li`

`;

const H5Text = styled.h5`
font-weight: ${(props) => props.fontWeightH5};
text-align:${(props) => props.fontAlignH5};
font-size:${(props) => props.fontSizeH5}; ;
background-color: ${(props) => props.bgColorH5};
`;

const RenterContact = ({item}) => {
  return (
    <MainContainer>
        <ContactDetails>
        <summary>Renter Contact</summary>
        <ContactList>
            <ListItem><H5Text fontSizeH5="0.9em">Primary contact : {item.primaryContact}</H5Text></ListItem>
            <ListItem><H5Text fontSizeH5="0.9em">Secondary contact : {item.street}</H5Text></ListItem>
        </ContactList>
        </ContactDetails>
    </MainContainer>
  )
}

export default RenterContact