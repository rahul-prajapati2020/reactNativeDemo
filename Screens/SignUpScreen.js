/**
 *  SignUp Screen
 */

import React, { useState } from 'react';
import {
    Button,
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'


const SignUpScreen = ({ navigation }) => {
    const [errors, setErrors] = useState({})
    const [fields, setFields] = useState({})
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [userName, setUsername] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [isDisplay, setIsDisplay] = useState(false);
    const [isMatch, setIsMatch] = useState(false);


    let screenHeight = Dimensions.get('window').height;

    const handleValidation = () => {

        let formIsValid = true;
        let newErrors = {};

        // email
        if (!fields["email"]) {
            formIsValid = false;
            newErrors['email'] = 'Email cannot be empty';
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                newErrors['email'] = 'Email is not valid';
            }
        }

        // firstName
        if (!fields["firstName"]) {
            formIsValid = false;
            newErrors['firstName'] = 'First name cannot be empty';
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                newErrors["firstName"] = "Only letters";
            }
        }

        // lastName
        if (!fields["lastName"]) {
            formIsValid = false;
            newErrors['lastName'] = 'Last name cannot be empty';
        }

        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                newErrors["lastName"] = "Only letters";
            }
        }


        // userName
        if (!fields["userName"]) {
            formIsValid = false;
            newErrors['userName'] = 'Username cannot be empty';
        }

        if (typeof fields["userName"] !== "undefined") {
            if (!fields["userName"].match(/^[a-zA-Z0-9_.-]+$/)) {
                formIsValid = false;
                newErrors["userName"] = "Only letters";
            }
        }

        // phoneNumber
        if (!fields["phoneNumber"]) {
            formIsValid = false;
            newErrors['phoneNumber'] = 'Phone number cannot be empty';
        }

        if (typeof fields["phoneNumber"] !== "undefined") {
            if (!fields["phoneNumber"].match(/^[0-9]+$/)) {
                formIsValid = false;
                newErrors["phoneNumber"] = "Only number";
            }
        }

        // confirmPassword
        if (!fields["confirmPassword"]) {
            formIsValid = false;
            newErrors['confirmPassword'] = 'Confirm password cannot be empty';
        }

        if (typeof fields["confirmPassword"] !== "undefined") {
            if (fields["confirmPassword"] === fields["password"]) {
                formIsValid = true;
                setIsMatch(true)
            }

            if (!fields["confirmPassword"].match(/^[a-zA-Z0-9_.-@$#]+$/)) {
                formIsValid = false;
                newErrors["confirmPassword"] = "Password not valid";
            }
        }



        // password
        if (!fields["password"]) {
            formIsValid = false;
            newErrors['password'] = 'Password cannot be empty';
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^[a-zA-Z0-9_.-@$#]+$/)) {
                formIsValid = false;
                newErrors["password"] = "Password not valid";
            }
        }
        console.log("formIsValid ==>", formIsValid)
        setErrors(newErrors)
        return formIsValid;



    }

    const handleChange = (event) => {
        if (typeof fields["confirmPassword"] !== "undefined") {
            if (event.nativeEvent.text === fields["password"]) {
                setIsMatch(true)
            } else {
                setIsMatch(false)
            }
        }
    }

    const onPress = () => {
        console.log("fields ==>", fields);
        if (handleValidation()) {
            console.log('form submit')
        } else {
            console.log('form error')
        }
        // console.log("isValid ==>", isValid)
        // console.log("email ==>", email)
        // console.log("password ==>", password)
        // console.log("sign in");
    }

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={100}>
            <SafeAreaView style={{ backgroundColor: '#f8f8ff', height: screenHeight - 5 }}>
                <ScrollView horizontal={false}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderWidth: 2, width: 100, height: 100, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10, borderRadius: 10, borderColor: '#f4511e' }}>
                            <Text style={{ color: "#f4511e", fontSize: 40, fontWeight: 'bold' }}> FZ </Text>
                            <Text style={{ color: "#f4511e", fontSize: 18, fontWeight: 'normal', marginTop: 10 }}> Food Zone </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5, marginTop: 20 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: "#f4511e", fontSize: 25, fontWeight: 'bold' }}> Create Account, </Text>
                            <Text style={{ color: "#f4511e", fontSize: 18, fontWeight: 'normal', marginTop: 5 }}> Sign Up To Get Started! </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.SectionStyle}>
                                <Image
                                    source={require('../assets/images/user-image.png')} //Change your icon image here
                                    style={styles.ImageStyle}
                                />

                                <TextInput
                                    style={{ flex: 1 }}
                                    placeholder="First Name"
                                    value={fields.firstName}
                                    name="firstName"
                                    onChangeText={(text) => setFields({ ...fields, firstName: text })}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            {errors.firstName &&
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', width: 320, marginLeft: 15, marginTop: 10 }}>
                                    <Text style={{ color: 'red', position: 'absolute', bottom: 0, }}>{errors.firstName}</Text>
                                </View>
                            }
                            <View style={styles.SectionStyle}>
                                <Image
                                    source={require('../assets/images/user-image.png')} //Change your icon image here
                                    style={styles.ImageStyle}
                                />

                                <TextInput
                                    style={{ flex: 1 }}
                                    placeholder="Last Name"
                                    value={fields.lastName}
                                    name="lastName"
                                    onChangeText={(text) => setFields({ ...fields, lastName: text })}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            {errors.lastName &&
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', width: 320, marginLeft: 15, marginTop: 10 }}>
                                    <Text style={{ color: 'red', position: 'absolute', bottom: 0, }}>{errors.lastName}</Text>
                                </View>
                            }
                            <View style={styles.SectionStyle}>
                                <Image
                                    source={require('../assets/images/id-card.png')} //Change your icon image here
                                    style={styles.ImageStyle}
                                />

                                <TextInput
                                    style={{ flex: 1 }}
                                    placeholder="Username"
                                    value={fields.userName}
                                    name="userName"
                                    onChangeText={(text) => setFields({ ...fields, userName: text })}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            {errors.userName &&
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', width: 320, marginLeft: 15, marginTop: 10 }}>
                                    <Text style={{ color: 'red', position: 'absolute', bottom: 0, }}>{errors.userName}</Text>
                                </View>
                            }
                            <View style={styles.SectionStyle}>
                                <Image
                                    source={require('../assets/images/email.png')} //Change your icon image here
                                    style={styles.ImageStyle}
                                />

                                <TextInput
                                    style={{ flex: 1 }}
                                    placeholder="Email"
                                    value={fields.email}
                                    name="email"
                                    onChangeText={(text) => setFields({ ...fields, email: text })}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            {errors.email &&
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', width: 320, marginLeft: 15, marginTop: 10 }}>
                                    <Text style={{ color: 'red', position: 'absolute', bottom: 0, }}>{errors.email}</Text>
                                </View>
                            }
                            <View style={styles.SectionStyle}>
                                <Image
                                    source={require('../assets/images/viber.png')} //Change your icon image here
                                    style={styles.ImageStyle}
                                />

                                <TextInput
                                    style={{ flex: 1 }}
                                    placeholder="Phone Number"
                                    value={fields.phoneNumber}
                                    name="phoneNumber"
                                    onChangeText={(text) => setFields({ ...fields, phoneNumber: text })}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            {errors.phoneNumber &&
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', width: 320, marginLeft: 15, marginTop: 10 }}>
                                    <Text style={{ color: 'red', position: 'absolute', bottom: 0, }}>{errors.phoneNumber}</Text>
                                </View>
                            }
                            <View style={styles.SectionStyle}>
                                <Image
                                    source={require('../assets/images/password.png')} //Change your icon image here
                                    style={styles.ImageStyle}
                                />

                                <TextInput
                                    style={{ flex: 1 }}
                                    placeholder="Password"
                                    value={fields.password}
                                    secureTextEntry={!isDisplay}
                                    name="password"
                                    onChangeText={(text) => setFields({ ...fields, password: text })}
                                    underlineColorAndroid="transparent"
                                />
                                {!isDisplay &&
                                    <TouchableOpacity
                                        style={{}}
                                        onPress={() => {
                                            setIsDisplay(true)
                                        }}
                                    >
                                        <Image
                                            source={require('../assets/images/visibility.png')} //Change your icon image here
                                            style={styles.ImageStyle}
                                        />
                                    </TouchableOpacity>
                                }
                                {isDisplay &&
                                    <TouchableOpacity
                                        style={{}}
                                        onPress={() => {
                                            setIsDisplay(false)
                                        }}
                                    >
                                        <Image
                                            source={require('../assets/images/invisible.png')} //Change your icon image here
                                            style={styles.ImageStyle}
                                        />
                                    </TouchableOpacity>
                                }
                            </View>
                            {errors.password &&
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', width: 320, marginLeft: 15, marginTop: 10 }}>
                                    <Text style={{ color: 'red', position: 'absolute', bottom: 0, }}>{errors.password}</Text>
                                </View>
                            }
                            <View style={styles.SectionStyle}>
                                <Image
                                    source={require('../assets/images/padlock.png')} //Change your icon image here
                                    style={styles.ImageStyle}
                                />

                                <TextInput
                                    style={{ flex: 1 }}
                                    placeholder="Password Confirmation"
                                    value={fields.confirmPassword}
                                    secureTextEntry={!isDisplay}
                                    underlineColorAndroid="transparent"
                                    name="confirmPassword"
                                    onChangeText={(text) => setFields({ ...fields, confirmPassword: text })}
                                    onChange={handleChange}
                                />
                                {!isMatch &&
                                    <Image
                                        source={require('../assets/images/x-mark.png')} //Change your icon image here
                                        style={styles.ImageStyle}
                                    />
                                }
                                {isMatch &&
                                    <Image
                                        source={require('../assets/images/check-mark.png')} //Change your icon image here
                                        style={styles.ImageStyle}
                                    />
                                }
                            </View>
                            {errors.confirmPassword &&
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', width: 320, marginLeft: 15, marginTop: 10 }}>
                                    <Text style={{ color: 'red', position: 'absolute', bottom: 0, }}>{errors.confirmPassword}</Text>
                                </View>
                            }
                            <View style={[styles.SectionStyle, { marginTop: 10, marginBottom: 5 }]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={onPress}
                                >
                                    <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 15 }}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 45 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: "#f4511e", fontSize: 15, fontWeight: 'normal' }}> Already have an account? </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Signin')
                                }}
                            >
                                <Text style={{ color: "#f4511e", fontWeight: 'bold', fontSize: 15 }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                        <View style={[styles.SectionStyle, { marginTop: 10, marginBottom: 5 }]}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#f4511e",
                                    padding: 10,
                                    height: 40,
                                    width: 320,
                                    borderRadius: 50,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress={() => {
                                    console.log("Facebook")
                                }}
                            >
                                <Image
                                    source={require('../assets/images/facebook-logo.png')} //Change your icon image here
                                    style={{ tintColor: "#fff", height: 20, width: 20, marginRight: 10 }}
                                />
                                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 15 }}>Facebook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 15, marginTop: 15 }}>
                        <View style={[styles.SectionStyle, { marginTop: 10, marginBottom: 5 }]}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#f4511e",
                                    padding: 10,
                                    height: 40,
                                    width: 320,
                                    borderRadius: 50,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress={() => {
                                    console.log("google")
                                }}
                            >
                                <Image
                                    source={require('../assets/images/google-plus.png')} //Change your icon image here
                                    style={{ tintColor: "#fff", height: 20, width: 20, marginRight: 10 }}
                                />
                                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 15 }}>Google</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8ff',
        borderWidth: 0.5,
        borderColor: '#f4511e',
        height: 40,
        width: 320,
        borderRadius: 50,
        margin: 10,
    },
    ImageStyle: {
        padding: 10,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        tintColor: '#f4511e'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#f4511e",
        padding: 10,
        height: 40,
        width: 320,
        borderRadius: 50,
    },
});

export default SignUpScreen