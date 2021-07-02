import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';


//formik
import { Formik } from "formik";
//icons
import { Octicons, Ionicons, Fontisto} from "@expo/vector-icons";

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

import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';
//Colors
const {brand,darkLight,primary} = Colors;

import { View, TouchableOpacity, ActivityIndicator } from 'react-native';

const Signup =({navigation})=>{

  const [hidePassword,setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  // Actual value to be sent
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow('date');
  };

    return(
        <KeyboardAvoidingWrapper>
        <StyledContainer >
        <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>YouTube</PageTitle>
                <SubTitle>ACCOUNT SIGN UP</SubTitle>

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={date}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}

                <Formik
                    initialValues={{fullName:'',email:'',dateOfBirth:'',password:'',confirmPassword:''}}
                    onSubmit={(values)=>{
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}
                >
                {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    <MyTextInput
                      label="Full Name"
                      placeholder="Jhon Smith"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                      icon="person"
                    />
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
                      label="Date ofBirth"
                      placeholder="YYYY - MM - DD"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('dateOfBirth')}
                      onBlur={handleBlur('dateOfBirth')}
                      value={dob ? dob.toDateString() : ''}
                      isDate={true}
                      editable={false}
                      showDatePicker={showDatePicker}
                      icon="calendar"
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
                    <MyTextInput
                      label="Confirm Password"
                      placeholder="* * * * * * * *"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
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
                    <ExtraView>
                      <ExtraText>Already have account?</ExtraText>
                      <TextLink onPress={()=> navigation.navigate('Login')}>
                        <TextLinkContent>LOGIN</TextLinkContent>
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

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>

      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {!isDate && <StyledTextInput {...props} />}

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

export default Signup;