import Navigation from './config/Navigation';
import { StatusBar } from 'react-native';
import GlobalState from './global-state/GlobalState';

export default function App () {
  return (
    <GlobalState>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Navigation />
    </GlobalState>
  );
}
