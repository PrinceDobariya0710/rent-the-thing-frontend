import React from 'react'
import styled from 'styled-components';
import { mobile } from '../Responsive';

const MainContainer = styled.article`

`;

const AddressDetails = styled.details`

`;

const AddressList = styled.ul`

`;

const ListItem = styled.li`

`;

const H5Text = styled.h5`
font-weight: ${(props) => props.fontWeightH5};
text-align:${(props) => props.fontAlignH5};
font-size:${(props) => props.fontSizeH5}; ;
background-color: ${(props) => props.bgColorH5};
`;

const RenterAddressDetail = ({item}) => {
  return (
    <MainContainer>
        <AddressDetails>
            <summary>Renter Address</summary>
            <AddressList>
                <ListItem><H5Text fontSizeH5="0.9em">Flat/House No : {item.flatNo}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">Street        : {item.street}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">Landmark      : {item.landmark}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">City          : {item.city.cityName}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">Pincode       : {item.pincode}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">State         : {item.state.stateName}</H5Text></ListItem>
            </AddressList>
        </AddressDetails>
    </MainContainer>
  )
}

export default RenterAddressDetail