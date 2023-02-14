import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default function MyBrowser() {
    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://github.com/GehadGKamel');
        setResult(result);
    };
    return (
        <View style={styles.container}>
            <Button color={"#c7d2fe"} title="Open WebBrowser" onPress={_handlePressButtonAsync} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
    },
});