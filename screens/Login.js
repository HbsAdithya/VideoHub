import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from "formik";
//icons
import { Octicons, Ionicons, Fontisto} from "@expo/vector-icons";

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

//API Client
import axios from 'axios';

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    Colors
} from './../components/styles';

//Colors
const {brand,darkLight,primary} = Colors;

import { View } from "react-native";

const Login =({navigation})=>{

  const [hidePassword,setHidePassword] = useState(true);

    return(
        <KeyboardAvoidingWrapper>
        <StyledContainer >
        <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}></PageLogo>
                <PageTitle>YouTube</PageTitle>
                <SubTitle>ACCOUNT LOGIN</SubTitle>

                <Formik
                    initialValues={{email:'',password:''}}
                    onSubmit={(values)=>{
                        console.log(values);
                        navigation.navigate("Welcome");
                    }}
                >
                {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    <MyTextInput
                      label="Email Address"
                      placeholder="andyj@gmail.com"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                      icon="mail"
                    />
                    <MyTextInput
                      label="Password"
                      placeholder="* * * * * * * *"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={hidePassword}
                      icon="lock"
                      isPassword={true}
                      hidePassword={hidePassword}
                      setHidePassword={setHidePassword}
                    />
                    <MsgBox>___</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                      <ButtonText>LOGIN</ButtonText>
                    </StyledButton>
                    <Line/>
                    <StyledButton google={true} onPress={handleSubmit}>
                      <Fontisto name="google" color={primary} size={25}/>
                      <ButtonText google={true}> - SIGN IN WITH GOOGLE</ButtonText>
                    </StyledButton>

                    <ExtraView>
                      <ExtraText>Don't have an account already?</ExtraText>
                      <TextLink onPress={() => navigation.navigate('Signup')}>
                        <TextLinkContent>SIGN UP</TextLinkContent>
                      </TextLink>
                    </ExtraView>
                </StyledFormArea>
                )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;