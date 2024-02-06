import { createStackNavigator } from "@react-navigation/stack"
import { Personero } from "../screens/Personero";
import { Contralor } from "../screens/Contralor";

const Menu=createStackNavigator()

export const StackNavigation=()=>{
    return(
        <Menu.Navigator initialRouteName="Personero">
            <Menu.Screen name="Personero" component={Personero} options={{
                title:'Elección de Personero',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:30
                },
                headerBackImage: () => null, 
            }}/>
            <Menu.Screen name="Contralor" component={Contralor} options={{
                title:'Contraloría',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:30
                },
                headerBackgroundContainerStyle:{
                    width:'100%',
                    padding:0
                },
                headerBackImage: () => null,
            }}/>
        </Menu.Navigator>
    );
}