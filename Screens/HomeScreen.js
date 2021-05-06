/**
 *  Home Screen 
 */

import React, { useState } from 'react';
import {
    Button,
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    FlatList,
    SafeAreaView,

} from 'react-native';
import Header from "./Header";
import { Rating, AirbnbRating } from 'react-native-ratings';
import CarouselCards from "../Components/CarouselCards";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];



const HomeScreen = ({ navigation }) => {

    const [count, setCount] = useState(0)
    const [data, setData] = useState(DATA)
    const [isEnd, setIsEnd] = useState(true)

    const ratingCompleted = () => {

    }

    const toggleDrawer = () => {

    }


    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const onEndReached = () => {
        setData([...data, ...data])
    }

    return (
        <>

            <SafeAreaView style={{ backgroundColor: '#f8f8ff' }}>
                <Header navigationProps={navigation} />
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontSize: 18, color: '#f4511e', fontWeight: 'bold' }}>
                            What is your Favourite ?
                    </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, height: 90 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.flexDirectionRow}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/pizza.png')}
                                        style={styles.imageIcon}
                                    />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={styles.viewText}>
                                        <Text style={styles.text}> Pizza</Text>
                                    </View>
                                    <View style={styles.viewText}>
                                        <Text style={{ fontWeight: 'normal', color: '#f4511e' }}> Pizza</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.flexDirectionRow}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/pizza.png')}
                                        style={styles.imageIcon}
                                    />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={styles.viewText}>
                                        <Text style={styles.text}> Pizza</Text>
                                    </View>
                                    <View style={styles.viewText}>
                                        <Text style={{ fontWeight: 'normal', color: '#f4511e' }}> Pizza</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.flexDirectionRow}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/pizza.png')}
                                        style={styles.imageIcon}
                                    />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={styles.viewText}>
                                        <Text style={styles.text}> Pizza</Text>
                                    </View>
                                    <View style={styles.viewText}>
                                        <Text style={{ fontWeight: 'normal', color: '#f4511e' }}> Pizza</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.flexDirectionRow}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/pizza.png')}
                                        style={styles.imageIcon}
                                    />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={styles.viewText}>
                                        <Text style={styles.text}> Pizza</Text>
                                    </View>
                                    <View style={styles.viewText}>
                                        <Text style={{ fontWeight: 'normal', color: '#f4511e' }}> Pizza</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{
                        flexDirection: 'row', marginTop: 10, marginLeft: 10, justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 18, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                            Most Popular
                    </Text>
                        <Text style={{ fontSize: 15, color: '#f4511e', fontWeight: 'normal', textAlign: 'right', marginRight: 10 }}>
                            View All
                    </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, height: 200 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View style={styles.flexDirectionRow2}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/image1.jpg')}
                                        style={styles.imageIcon2}
                                    />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row', marginTop: 10, marginLeft: 10, justifyContent: 'space-between',
                                    }}>
                                        <Text style={{ fontSize: 10, color: '#f4511e', fontWeight: 'normal', textAlign: 'left', flex: 1 }}>
                                            meat
                                    </Text>
                                        <Rating
                                            type='star'
                                            ratingCount={5}
                                            imageSize={10}
                                            showRating={false}
                                            onFinishRating={ratingCompleted}
                                            style={{ fontSize: 10, color: '#f4511e', fontWeight: 'normal', textAlign: 'right', flex: 1, }}
                                        />
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', marginLeft: 10,
                                    }}>
                                        <Text style={{ fontSize: 15, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                                            Most Popular
                                    </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', marginLeft: 10,
                                    }}>
                                        <Text numberOfLines={2} style={{ fontSize: 10, color: '#f4511e', fontWeight: 'normal', textAlign: 'justify', width: 110 }}>
                                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', marginLeft: 10, marginTop: 20
                                    }}>
                                        <Text style={{ fontSize: 12, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                                            Quantity:
                                    </Text>

                                        <TouchableOpacity onPress={() => count > 0 ? setCount(count - 1) : null} activeOpacity={count > 0 ? 1 : 0.5}>
                                            {/*Donute Button Image */}
                                            <Image
                                                source={require('../assets/images/minus.png')}
                                                style={styles.imageQty}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 12, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                                            {count}
                                        </Text>
                                        <TouchableOpacity onPress={() => setCount(count + 1)}>
                                            {/*Donute Button Image */}
                                            <Image
                                                source={require('../assets/images/plus.png')}
                                                style={styles.imageQty}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row', marginTop: 10, marginLeft: 10, justifyContent: 'space-between',
                                    }}>
                                        <Text style={{ fontSize: 20, color: '#f4511e', fontWeight: 'bold', textAlign: 'left', flex: 1 }}>
                                            100$
                                    </Text>
                                        <TouchableOpacity onPress={() => {
                                            console.log('order');
                                        }} style={{
                                            fontSize: 10, textAlign: 'right', flex: 1, alignItems: "center",
                                            backgroundColor: "#f4511e",
                                            padding: 1,
                                            borderRadius: 50
                                        }}>
                                            {/*Donute Button Image */}
                                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Order</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.flexDirectionRow2}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/image1.jpg')}
                                        style={styles.imageIcon2}
                                    />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row', marginTop: 10, marginLeft: 10, justifyContent: 'space-between',
                                    }}>
                                        <Text style={{ fontSize: 10, color: '#f4511e', fontWeight: 'normal', textAlign: 'left', flex: 1 }}>
                                            meat
                                    </Text>
                                        <Rating
                                            type='star'
                                            ratingCount={5}
                                            imageSize={10}
                                            showRating={false}
                                            onFinishRating={ratingCompleted}
                                            style={{ fontSize: 10, color: '#f4511e', fontWeight: 'normal', textAlign: 'right', flex: 1, }}
                                        />
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', marginLeft: 10,
                                    }}>
                                        <Text style={{ fontSize: 15, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                                            Most Popular
                                    </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', marginLeft: 10,
                                    }}>
                                        <Text numberOfLines={2} style={{ fontSize: 10, color: '#f4511e', fontWeight: 'normal', textAlign: 'justify', width: 110 }}>
                                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', marginLeft: 10, marginTop: 20
                                    }}>
                                        <Text style={{ fontSize: 12, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                                            Quantity:
                                    </Text>

                                        <TouchableOpacity onPress={() => count > 0 ? setCount(count - 1) : null} activeOpacity={count > 0 ? 1 : 0.5}>
                                            {/*Donute Button Image */}
                                            <Image
                                                source={require('../assets/images/minus.png')}
                                                style={styles.imageQty}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 12, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                                            {count}
                                        </Text>
                                        <TouchableOpacity onPress={() => setCount(count + 1)}>
                                            {/*Donute Button Image */}
                                            <Image
                                                source={require('../assets/images/plus.png')}
                                                style={styles.imageQty}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row', marginTop: 10, marginLeft: 10, justifyContent: 'space-between',
                                    }}>
                                        <Text style={{ fontSize: 20, color: '#f4511e', fontWeight: 'bold', textAlign: 'left', flex: 1 }}>
                                            100$
                                    </Text>
                                        <TouchableOpacity onPress={() => {
                                            console.log('order');
                                        }} style={{
                                            fontSize: 10, textAlign: 'right', flex: 1, alignItems: "center",
                                            backgroundColor: "#f4511e",
                                            padding: 1,
                                            borderRadius: 50
                                        }}>
                                            {/*Donute Button Image */}
                                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Order</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.flexDirectionRow2}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/image1.jpg')}
                                        style={styles.imageIcon2}
                                    />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row', marginTop: 10, marginLeft: 10, justifyContent: 'space-between',
                                    }}>
                                        <Text style={{ fontSize: 10, color: '#f4511e', fontWeight: 'normal', textAlign: 'left', flex: 1 }}>
                                            meat
                                    </Text>
                                        <Rating
                                            type='star'
                                            ratingCount={5}
                                            imageSize={10}
                                            showRating={false}
                                            onFinishRating={ratingCompleted}
                                            style={{ fontSize: 10, color: '#f4511e', fontWeight: 'normal', textAlign: 'right', flex: 1, }}
                                        />
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', marginLeft: 10,
                                    }}>
                                        <Text style={{ fontSize: 15, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                                            Most Popular
                                    </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', marginLeft: 10,
                                    }}>
                                        <Text numberOfLines={2} style={{ fontSize: 10, color: '#f4511e', fontWeight: 'normal', textAlign: 'justify', width: 110 }}>
                                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', marginLeft: 10, marginTop: 20
                                    }}>
                                        <Text style={{ fontSize: 12, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                                            Quantity:
                                    </Text>

                                        <TouchableOpacity onPress={() => count > 0 ? setCount(count - 1) : null} activeOpacity={count > 0 ? 1 : 0.5}>
                                            {/*Donute Button Image */}
                                            <Image
                                                source={require('../assets/images/minus.png')}
                                                style={styles.imageQty}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 12, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                                            {count}
                                        </Text>
                                        <TouchableOpacity onPress={() => setCount(count + 1)}>
                                            {/*Donute Button Image */}
                                            <Image
                                                source={require('../assets/images/plus.png')}
                                                style={styles.imageQty}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row', marginTop: 10, marginLeft: 10, justifyContent: 'space-between',
                                    }}>
                                        <Text style={{ fontSize: 20, color: '#f4511e', fontWeight: 'bold', textAlign: 'left', flex: 1 }}>
                                            100$
                                    </Text>
                                        <TouchableOpacity onPress={() => {
                                            console.log('order');
                                        }} style={{
                                            fontSize: 10, textAlign: 'right', flex: 1, alignItems: "center",
                                            backgroundColor: "#f4511e",
                                            padding: 1,
                                            borderRadius: 50
                                        }}>
                                            {/*Donute Button Image */}
                                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Order</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{
                        flexDirection: 'row', marginTop: 10, marginLeft: 10, justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 18, color: '#f4511e', fontWeight: 'bold', textAlign: 'left' }}>
                            All The Dishes
                    </Text>
                        <Text style={{ fontSize: 15, color: '#f4511e', fontWeight: 'normal', textAlign: 'right', marginRight: 10 }}>
                            View All
                    </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, height: 200 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View style={styles.flexDirectionRow3}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/image1.jpg')}
                                        style={styles.imageIcon2}
                                    />
                                    <View style={styles.overlay}>
                                        <Image
                                            source={require('../assets/images/plus.png')}
                                            style={styles.imageQty}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.flexDirectionRow3}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/image1.jpg')}
                                        style={styles.imageIcon2}
                                    />
                                    <View style={styles.overlay}>
                                        <Image
                                            source={require('../assets/images/plus.png')}
                                            style={styles.imageQty}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.flexDirectionRow3}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/image1.jpg')}
                                        style={styles.imageIcon2}
                                    />
                                    <View style={styles.overlay}>
                                        <Image
                                            source={require('../assets/images/plus.png')}
                                            style={styles.imageQty}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.flexDirectionRow3}>
                                <TouchableOpacity onPress={() => toggleDrawer()}>
                                    {/*Donute Button Image */}
                                    <Image
                                        source={require('../assets/images/image1.jpg')}
                                        style={styles.imageIcon2}
                                    />
                                    <View style={styles.overlay}>
                                        <Image
                                            source={require('../assets/images/plus.png')}
                                            style={styles.imageQty}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        {/* loop infinate scroll*/}
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            onEndReached={onEndReached}
                        />
                    </View>
                    <View style={{ paddingTop: 10, paddingBottom: 20 }}>
                        {/* Carousel Cards*/}
                        <CarouselCards />
                    </View>
                </ScrollView>
            </SafeAreaView>

        </>
    );
};

const styles = StyleSheet.create({
    flexDirectionRow: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: 'auto',
        height: 70,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
    },
    imageIcon: {
        width: 50,
        height: 50,
        marginLeft: 5,
        marginRight: 5
    },
    viewText: {
        flex: 1,
        justifyContent: "flex-start",
    },
    text: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        color: '#f4511e',
        fontSize: 20
    },
    flexDirectionRow2: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: 320,
        height: 180,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
    },
    flexDirectionRow3: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: 'auto',
        height: 180,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
    },
    imageIcon2: {
        width: 160,
        height: 160,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10
    },
    imageQty: {
        width: 18,
        height: 18,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        tintColor: '#f4511e'
    },
    overlay: {
        position: 'absolute',
        top: 100,
        right: 5,
        bottom: 0,
        left: 5,
        backgroundColor: '#000',
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },

});

export default HomeScreen