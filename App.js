import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { StackNavigation } from './Navigation/StackNavigation';
import { MyContexto } from './context/Contexto';



export default function App() {
  return (
    <NavigationContainer>
      <MyContexto>
        <StackNavigation/>
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
