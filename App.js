import { NavigationContainer } from '@react-navigation/native';
import { Modal, StyleSheet} from 'react-native';
import { StackNavigation } from './Navigation/StackNavigation';
import { MyContexto } from './context/Contexto';
import { MyModal } from './components/MyModal';



export default function App() {
  return (
    <NavigationContainer>
      <MyContexto>
        <StackNavigation/>
        <MyModal/>
      </MyContexto>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
    with:"100%"
  },
});
