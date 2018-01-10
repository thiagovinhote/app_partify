import { StackNavigator } from 'react-navigation';

import Home from 'pages/Home';
import InfoParty from 'pages/InfoParty';

const Routes = StackNavigator({
  Home: { screen: Home },
  InfoParty: { screen: InfoParty },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default Routes;
