/**
 *  Header
 */

import React from 'react';
import {
    Button,
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';


const Header = (props) => {

    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={styles.flexDirectionRow}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    source={require('../assets/images/list-text.png')}
                    style={styles.imageIcon}
                />
            </TouchableOpacity>
            <View style={styles.viewText}>
                <Text style={styles.text}> FZ</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flexDirectionRow: {
        flexDirection: 'row',
        backgroundColor: '#f4511e',
        paddingTop: 10,
        paddingBottom: 10
    },
    imageIcon: {
        width: 25,
        height: 25,
        marginLeft: 5,
        tintColor: '#fff'
    },
    viewText: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center',

    },
    text: {
        alignSelf: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 22
    }
});

export default Header