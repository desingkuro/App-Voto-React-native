import { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Contexto } from "../context/Contexto";

export const CerrarModal=()=>{

    const {setMostrar} = useContext(Contexto);

    return(
        <View style={estilos.container}> 
            <TouchableOpacity style={estilos.boton} onPress={()=>setMostrar(true)}>
            <Text style={estilos.text}>Cerrar Votaciones</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:20
    },
    boton:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: 70,
        backgroundColor:"#1465bb",
        borderRadius: 30,
        marginTop:20
    },
    text:{
        fontSize:30,
        color:"white",
    }
})