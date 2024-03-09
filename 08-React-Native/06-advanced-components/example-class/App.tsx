import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StatusBarScreen from './Screens/StatusBarScreen';
import ModalScreen from './Screens/ModalScreen';
import AlertScreen from './Screens/AlertScreen';

export default function App() {
  return (

    <AlertScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
