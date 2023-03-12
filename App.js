import React from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyContexto } from './context/Contexto';
import { MyModal } from './components/MyModal';
import { StackNavigation } from './Navigation/StackNavigation';
import { Resultados } from './components/Reseltados';

export default function App() {
  return (
    <NavigationContainer>
      <MyContexto>
        <View style={styles.container}>
          <StackNavigation/>
          <MyModal/>
          <Resultados/>
        </View>
      </MyContexto>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
