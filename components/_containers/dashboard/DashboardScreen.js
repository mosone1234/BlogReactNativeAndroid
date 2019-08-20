import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class DashboardScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hellow dashboard</Text>
                <Button title="Other screen" />
            </View>
        );
    }
}

export default DashboardScreen;