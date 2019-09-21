import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Lisa from './Lisa';
import Home from './Home';
import Jennie from './Jennie';
import Jisoo from './Jisoo';
import Rose from './Rose';

const Black_pink = createSwitchNavigator({
  Home: { screen: Home },
  Lisa: { screen: Lisa },
  Jennie: { screen: Jennie },
  Jisoo: { screen: Jisoo },
  Rose: { screen: Rose }
});
const App = createAppContainer(Black_pink);

export default App;