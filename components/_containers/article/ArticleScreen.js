import React, { Component } from 'react';
import { view, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class ArticleScreen extends Component {
    render() {
        return (
            <View>
                <Text>Hola esto es react native</Text>
            </View>
        );
    }
}

export default ArticleScreen;