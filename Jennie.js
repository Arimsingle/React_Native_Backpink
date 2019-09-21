import React from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
class Jennie extends React.Component {
    static navigationOptions = {
        title: 'Jennie',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'Roboto', color: '#DDDDDD', textAlign: 'center' }}>Jennie Profile</Text>
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
export default Jennie;
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