/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-native';
import { helloWorld } from './test';
export default class TodoTypeScript extends Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.welcome }, helloWorld()),
            React.createElement(Text, { style: styles.instructions }, "To get started, edit index.ios.js"),
            React.createElement(Text, { style: styles.instructions },
                "Press Cmd+R to reload,",
                '\n',
                "Cmd+D or shake for dev menu")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
AppRegistry.registerComponent('TodoTypeScript', () => TodoTypeScript);
//# sourceMappingURL=index.ios.js.map