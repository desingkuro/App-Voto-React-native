import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { Personero } from "../screens/Personero";
import { Contralor } from "../screens/Contralor";

enableScreens();

const Menu = createNativeStackNavigator();

export const StackNavigation = () => {
return (
    <Menu.Navigator initialRouteName="Personero">
    <Menu.Screen
        name="Personero"
        component={Personero}
        options={{ headerShown: false }}
    />
    <Menu.Screen
        name="Contralor"
        component={Contralor}
        options={{ headerShown: false }}
    />
    </Menu.Navigator>
);
};
