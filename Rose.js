import React from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
class Rose extends React.Component {
    static navigationOptions = {
        title: 'Rose',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'Roboto', color: '#DDDDDD', textAlign: 'center' }}>Rose Profile</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate('Home')}
                >
                    <Text> Back </Text>
                </TouchableOpacity>
            </View>


        );
    }
}
export default Rose;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
})