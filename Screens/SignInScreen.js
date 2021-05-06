/**
 *  SignIn Screen
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
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'


const SignInScreen = ({ navigation }) => {
    const [isDisplay, setIsDisplay] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [errors, setErrors] = useState({})
    const [fields, setFields] = useState({})


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

        // password
        if (!fields["password"]) {
            formIsValid = false;
            newErrors['password'] = 'Password cannot be empty';
        }
        console.log("formIsValid ==>", formIsValid)
        setErrors(newErrors)
        return formIsValid;



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
                        <Text style={{ color: "#f4511e", fontSize: 25, fontWeight: 'bold' }}> Welcome, </Text>
                        <Text style={{ color: "#f4511e", fontSize: 18, fontWeight: 'normal', marginTop: 5 }}> Login To Continue! </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                                source={require('../assets/images/password.png')} //Change your icon image here
                                style={styles.ImageStyle}
                            />

                            <TextInput
                                style={{ flex: 1 }}
                                placeholder="Password"
                                name="password"
                                value={fields.password}
                                secureTextEntry={!isDisplay}
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
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 5 }}>
                            <View style={{ alignItems: 'flex-start', flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10 }}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={{ alignSelf: "flex-start", }}
                                    tintColors={{ true: '#f4511e', false: '#f4511e' }}
                                />
                                <Text style={{ color: "#f4511e", fontWeight: 'normal', fontSize: 15, alignSelf: "center" }}>
                                    Remeber me
                                </Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 15 }}>
                                <TouchableOpacity
                                    style={{ alignSelf: "center" }}
                                    onPress={() => {
                                        console.log("Forgot Password");
                                    }}
                                >
                                    <Text style={{ color: "#f4511e", fontWeight: 'normal', fontSize: 15 }}>Forgot Password ?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.SectionStyle, { marginTop: 10, marginBottom: 5 }]}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={onPress}
                            >
                                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 15 }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 45 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ color: "#f4511e", fontSize: 15, fontWeight: 'normal' }}> Don't have an account? </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Signup')
                            }}
                        >
                            <Text style={{ color: "#f4511e", fontWeight: 'bold', fontSize: 15 }}>Sign Up</Text>
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
                                console.log('facebook')
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
                                console.log('Google')
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
    error: {
        position: "absolute",
        bottom: 0,
        color: "red",
        fontSize: 12,
        alignSelf: 'flex-start'
    }
});

export default SignInScreen