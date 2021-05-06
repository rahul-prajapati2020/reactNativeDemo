/**
 *  Favourites Screen
 */

import React from 'react';
import {
    Button,
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList, SafeAreaView
} from 'react-native';



const FavouritesScreen = ({ navigation }) => {

    return (
        <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
                <ListItem
                    roundAvatar
                    title={
                        <Text style={{ textAlign: 'left' }}> {item.name.first} {item.name.last}</Text>
                    }
                    subtitle={
                        <Text style={{ textAlign: 'left' }}>{item.email}</Text>
                    }
                    avatar={{ uri: item.picture.thumbnail }}
                    containerStyle={{ borderBottomWidth: 0 }}
                />
            )}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            keyExtractor={item => item.email}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndThreshold={0}

        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listItem: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 50,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default FavouritesScreen