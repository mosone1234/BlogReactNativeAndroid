import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class HomeScreen extends Component {

    redirectToDashBoard = () => {
        this.props.navigation.navigate('Dashboard');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Hellow of Home
                </Text>
                <Button title="Go Dashboard" onPress={this.redirectToDashBoard} />
            </View>
        );
    }
}

export default HomeScreen;