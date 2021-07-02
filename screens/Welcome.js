import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Colors,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';
//Colors
const {brand,darkLight,primary} = Colors;

import { View } from "react-native";

const Welcome =({navigation})=>{

  const [hidePassword,setHidePassword] = useState(true);

    return(
        
        < >
        <StatusBar style="dark"/>
            <InnerContainer>
            <WelcomeContainer>
            <WelcomeImage resizeMode="cover" source={require('./../assets/img/logo.png')}></WelcomeImage>
            <PageTitle Welcome={true}>Shashith Adithya</PageTitle>
                <SubTitle Welcome={true}>Welcome! Buddy</SubTitle>
                <Avatar resizeMode="cover" source={require('./../assets/img/logo.png')}></Avatar>
                <StyledFormArea>
                    <StyledButton onPress={() => {navigation.navigate('Login')} }>
                      <ButtonText>LOG OUT</ButtonText>
                    </StyledButton>
                </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;