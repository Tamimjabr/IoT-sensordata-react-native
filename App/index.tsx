import Navigation from './config/Navigation';
import { StatusBar } from 'react-native';

export default function App () {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Navigation />
    </>
  );
}
