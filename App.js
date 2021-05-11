/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as StoreProvider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";

/**
 *  Screens
 */
import HomeScreen from "./Screens/HomeScreen";
import NotificationsScreen from "./Screens/NotificationsScreen";
import SignInScreen from "./Screens/SignInScreen";
import CartScreen from "./Screens/CartScreen";
import FavouritesScreen from "./Screens/FavouritesScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import WalletScreen from "./Screens/WalletScreen";
import SignUpScreen from "./Screens/SignUpScreen";

import { logout, checkLogin } from "./redux/actions/auth";
import { clearMessage } from "./redux/actions/message";
//import { history } from "./redux/helpers/history";

/**
 *  const
 */
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={styles.flexDirectionRow}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('./assets/images/list-text.png')}
          style={styles.imageIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const NavigationNotifications = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={styles.flexDirectionRow}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('./assets/images/list-text.png')}
          style={styles.imageIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={[styles.flexDirectionRow, styles.tabBg]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        //console.log("options ==>", options)

        let tabImagepath;
        let tabBarBadge = options.tabBarBadge !== undefined ? options.tabBarBadge : null

        switch (route.name) {
          case 'Profile':
            tabImagepath = require('./assets/images/user.png');
            break;
          case 'Favourites':
            tabImagepath = require('./assets/images/favorite-hart.png');
            break;
          case 'Home':
            tabImagepath = require('./assets/images/home.png');
            break;
          case 'Wallet':
            tabImagepath = require('./assets/images/wallet.png');
            break;
          case 'Cart':
            tabImagepath = require('./assets/images/shopping-cart.png');
            break;

          default:
            tabImagepath = require('./assets/images/list-text.png');
            break;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center'
            }}
            key={index}
          >
            <Image
              source={tabImagepath}
              style={isFocused ? styles.tabImageIconActive : styles.tabImageIcon}
            />
            {!!tabBarBadge &&
              <View style={{ position: 'absolute', right: 10, top: 5, backgroundColor: '#fff', borderRadius: 9, minWidth: 18, height: 18, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: isFocused ? '#000' : 'red', paddingStart: 5, paddingEnd: 5 }}>{tabBarBadge}</Text>
              </View>
            }
            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const AppTab = ({ navigation }) => {
  //console.log("navigation ==>", navigation)
  return (
    <Tab.Navigator initialRouteName="Home" tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} options={{ tabBarBadge: 200 }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  )
}

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={AppTab}
        options={{
          title: "FW", //Set Header Title
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitleAlign: 'center',
          animationTypeForReplace: 'pop',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

const NotificationsScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Notifications">
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: "FW", //Set Header Title
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style,
          },
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
}

const WalletScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Wallet">
      <Stack.Screen
        name="Wallet"
        component={AppTab}
        options={{
          title: 'Notifications Screen', //Set Header Title
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: '#f4511e', opacity: 0.9, height: 100, marginTop: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={{ backgroundColor: '#fff', width: 60, height: 60, marginLeft: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
          <Text style={{ color: '#f4511e', fontWeight: 'bold' }}> TD</Text>
        </View>
        <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 25 }}> Welcome,</Text>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}> Test Demo</Text>
        </View>
      </View>

      {/* <DrawerItem
        label="Wallet"
        onPress={() => props.navigation.navigate('Wallet')}
      /> */}
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}

const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />} drawerStyle={{
      backgroundColor: '#f8f8ff',
    }} drawerContentOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'red',
      fontWeight: 'bold',
      activeBackgroundColor: 'red',
    }}>
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen name="Notifications" component={NotificationsScreenStack} />
    </Drawer.Navigator>
  )
}

const AppAuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signin"
        component={SignInScreen}
        options={{
          title: 'Sign In Screen', //Set Header Title,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{
          title: 'Sign Up Screen', //Set Header Title,
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

const AppNavigator = (props) => {
  const { isLoggedIn, user: currentUser } = useSelector((state) => {
    //console.log("state 11==>", state)
    return state.auth
  });
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(isLoggedIn ? true : false)

  /**
   * clear message when changing location
   */
  useEffect(() => {
    // console.log("currentUser ==>", currentUser)
    //console.log("isLoggedIn ==>", isLoggedIn)
    //console.log("isLogin ==>", isLogin)
    //history.listen((location) => {
    dispatch(checkLogin());
    dispatch(clearMessage()); // clear message when changing location
    //});
  }, [dispatch]);

  /**
   * logout 
   */
  const logOut = () => {
    dispatch(logout());
  };

  return (
    <NavigationContainer>
      {isLogin && <AppDrawer />}
      {!isLogin && <AppAuthStack />}
    </NavigationContainer>
  )
}


const App = ({ navigation }) => {
  return (
    <StoreProvider store={store}>
      <AppNavigator />
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: 'row'
  },
  imageIcon: {
    width: 25,
    height: 25,
    marginLeft: 5,
    tintColor: '#fff'
  },
  tabImageIcon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
    marginTop: 10,
    marginBottom: 10
  },
  tabImageIconActive: {
    width: 25,
    height: 25,
    tintColor: '#000',
    marginTop: 10,
    marginBottom: 10
  },
  tabBg: {
    backgroundColor: '#f4511e',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center'
  }
});

export default App;
