import AsyncStorage from '@react-native-community/async-storage';

const authHeader = () => {
    const user = AsyncStorage.getItem('user');
    if (user && user.accessToken) {
        // For Spring Boot back-end
        // return { Authorization: "Bearer " + user.accessToken };

        // for Node.js Express back-end
        return { "x-access-token": user.accessToken };
    } else {
        return {};
    }
}

export default authHeader