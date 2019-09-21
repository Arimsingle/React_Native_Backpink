import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Animated, ProgressBarAndroid } from 'react-native';
class Home extends React.Component {
  static navigationOptions = {
    title: 'React-Native',
  };
  constructor(props) {
    super(props)
    this.state = {
      count_lisa: 0.0,
      count_jennie: 0.0,
      count_rose: 0.0,
      count_jisoo: 0.0,
    }
  }
  plus_lisa = () => {
    this.setState({ count_lisa: this.state.count_lisa + 0.01 })
  }
  plus_jennie = () => {
    this.setState({ count_jennie: this.state.count_jennie + 0.01 })
  }
  plus_rose = () => {
    this.setState({ count_rose: this.state.count_rose + 0.01 })
  }
  plus_jisoo = () => {
    this.setState({ count_jisoo: this.state.count_jisoo + 0.01 })
  }
  render() {
    const find_max = [parseInt(this.state.count_lisa * 100), parseInt(this.state.count_jennie * 100), parseInt(this.state.count_rose * 100), parseInt(this.state.count_jisoo * 100)];
    const { navigate } = this.props.navigation;
    const max_lisa = Math.max(...find_max) === parseInt(this.state.count_lisa * 100) && parseInt(this.state.count_lisa * 100) !== 0 ? 'Lisa' : '';
    const max_jennie = Math.max(...find_max) === parseInt(this.state.count_jennie * 100) && parseInt(this.state.count_jennie * 100) !== 0 ? 'Jenie' : '';
    const max_rose = Math.max(...find_max) === parseInt(this.state.count_rose * 100) && parseInt(this.state.count_rose * 100) !== 0 ? 'Rose' : '';
    const max_jisoo = Math.max(...find_max) === parseInt(this.state.count_jisoo * 100) && parseInt(this.state.count_jisoo * 100) !== 0 ? 'Jisoo' : '';
    return (
      <View style={styles.bg}>
        <View>
          <Text style={styles.text_head}>BLACK PINK</Text>
        </View>
        <View style={styles.between_logo}>
          <View>
            <View style={{ marginBottom: 30, marginTop: 30 }}>
              <Text style={styles.text}>Lisa 😘</Text>
              <View style={styles.row_logo}>
                <ImageBackground source={require('./Lisa.jpg')} style={styles.backdrop} />
                <View style={{ display: 'flex', flexDirection: 'column', paddingTop: 3 }}>
                  <View style={styles.between}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigate('Lisa')}>
                      <Text> Profile </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.between}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigate('Lisa')}>
                      <Text> Photo</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.between}>
                    <TouchableOpacity
                      style={styles.button2}
                      onPress={this.plus_lisa}>
                      <Text> Like </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.text}>Jennie 😜</Text>
            <View style={styles.row_logo}>
              <ImageBackground source={require('./Jannie.jpg')} style={styles.backdrop} />
              <View style={{ display: 'flex', flexDirection: 'column', paddingTop: 3 }}>
                <View style={styles.between}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate('Jennie')}>
                    <Text> Profile </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.between}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate('Jennie')}>
                    <Text> Photo</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.between}>
                  <TouchableOpacity
                    style={styles.button2}
                    onPress={this.plus_jennie}>
                    <Text> Like </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={{ marginBottom: 30, marginTop: 30 }}>
              <Text style={styles.text}>Rose 😆</Text>
              <View style={styles.row_logo}>
                <ImageBackground source={require('./Rose.jpg')} style={styles.backdrop} />
                <View style={{ display: 'flex', flexDirection: 'column', paddingTop: 3 }}>
                  <View style={styles.between}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigate('Rose')}>
                      <Text> Profile </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.between}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigate('Rose')}>
                      <Text> Photo</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.between}>
                    <TouchableOpacity
                      style={styles.button2}
                      onPress={this.plus_rose}>
                      <Text> Like </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.text}>Jisoo 🤭</Text>
            <View style={styles.row_logo}>
              <ImageBackground source={require('./Jisoo.jpg')} style={styles.backdrop} />
              <View style={{ display: 'flex', flexDirection: 'column', paddingTop: 3 }}>
                <View style={styles.between}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate('Jisoo')}>
                    <Text> Profile </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.between}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate('Jisoo')}>
                    <Text> Photo</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.between}>
                  <TouchableOpacity
                    style={styles.button2}
                    onPress={this.plus_jisoo}>
                    <Text> Like </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 30 }}>
          <Text style={styles.text_vote}>Vote</Text>
          <View style={{ borderColor: '#FF5A85', borderWidth: 3, display: 'flex', borderRadius: 8 }}>
            <View style={styles.container}>
              <Text style={{ textAlign: 'right', marginBottom: 5, color: '#C15AFF' }}> Lisa Vote {parseInt(this.state.count_lisa * 100)}%</Text>
              <ProgressBarAndroid
                styleAttr='Horizontal' color="#C15AFF" indeterminate={false}
                progress={this.state.count_lisa} />
            </View>
            <View style={styles.container}>
              <Text style={{ textAlign: 'right', marginBottom: 5, color: '#E35AFF' }}> Jennie Vote {parseInt(this.state.count_jennie * 100)}%</Text>
              <ProgressBarAndroid
                styleAttr='Horizontal' color="#E35AFF" indeterminate={false}
                progress={this.state.count_jennie} />
            </View>
            <View style={styles.container}>
              <Text style={{ textAlign: 'right', marginBottom: 5, color: '#FF5AF6' }}> Rose Vote {parseInt(this.state.count_rose * 100)}%</Text>
              <ProgressBarAndroid
                styleAttr='Horizontal' color="#FF5AF6" indeterminate={false}
                progress={this.state.count_rose} />
            </View>
            <View style={styles.container}>
              <Text style={{ textAlign: 'right', marginBottom: 5, color: '#FF5AD2' }}> Jisoo Vote {parseInt(this.state.count_jisoo * 100)}%</Text>
              <ProgressBarAndroid
                styleAttr='Horizontal' color="#FF5AD2" indeterminate={false}
                progress={this.state.count_jisoo} />
            </View>
          </View>
          <Text style={styles.winner}>The winner is : {max_jennie}{max_jisoo}{max_lisa}{max_rose} </Text>
        </View>
      </View>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  backdrop: { marginTop: 0, width: 120, height: 120 },
  row_logo: { display: 'flex', flexDirection: 'row' },
  between: { marginLeft: 5, flex: 1 },
  between_logo: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around' },
  bg: { backgroundColor: '#303030', flex: 1, paddingTop: 30 },
  button: { alignItems: 'center', backgroundColor: '#FF98FA', padding: 9, borderRadius: 3 },
  text_head: { fontSize: 50, fontWeight: 'bold', fontFamily: 'Roboto', color: '#FF98FA', textAlign: 'center', marginTop: 30, paddingTop: 10, borderRadius: 8, paddingBottom: 10, borderColor: '#FF5A85', borderWidth: 3, display: 'flex', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold', fontFamily: 'Roboto', color: '#FF98FA', textAlign: 'auto' },
  text_vote: { fontSize: 20, fontWeight: 'bold', fontFamily: 'Roboto', color: '#FF98FA', textAlign: 'auto', marginLeft: 10 },
  winner: { fontSize: 20, fontWeight: 'bold', fontFamily: 'Roboto', color: '#FF98FA', textAlign: 'auto', marginLeft: 10, marginTop: 10 },
  button2: { alignItems: 'center', backgroundColor: '#FF5A85', padding: 9, borderRadius: 3 },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,

  },

});
