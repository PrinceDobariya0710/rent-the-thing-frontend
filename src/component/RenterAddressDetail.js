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
  console.log(item)
  return (
    <MainContainer>
      {/* {item.map((item2) => ( */}
        <AddressDetails>
            <summary>Renter Address</summary>
            <AddressList>
                <ListItem><H5Text fontSizeH5="0.9em">Flat/House No : {item[0].flatNo}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">Street        : {item[0].street}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">Landmark      : {item[0].landmark}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">City          : {item[0].city.cityName}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">Pincode       : {item[0].pincode}</H5Text></ListItem>
                <ListItem><H5Text fontSizeH5="0.9em">State         : {item[0].state.stateName}</H5Text></ListItem>
            </AddressList>
        </AddressDetails>
        {/* ))} */}
    </MainContainer>
  )
}

export default RenterAddressDetail