import { createStackNavigator } from "@react-navigation/stack"
import { HeaderBackButton } from '@react-navigation/stack';
import { Personero } from "../screens/Personero";
import { Contralor } from "../screens/Contralor";

const Menu=createStackNavigator()

export const StackNavigation=()=>{
    return(
        <Menu.Navigator initialRouteName="Personero">
            <Menu.Screen name="Personero" component={Personero} options={{
            headerBackImage: () => null
            }}/>
            <Menu.Screen name="Contralor" component={Contralor} options={{
            headerBackImage: () => null
            }}/>
        </Menu.Navigator>
    );
}