import { useState,useEffect } from "react";
import { Text,View,TouchableOpacity,Modal, StyleSheet } from "react-native";

export const MyModal=()=>{
    const [mostrar,setMostrar]=useState(false);
    useEffect(()=>{
        if(mostrar){
            setMostrar(true);
        }else{
            setMostrar(false);
        }
    },[mostrar]);
    return(
        <Modal 
            animationType='slide'
            visible={false}
            style={{width:100,backgroundColor:"red"}}
        >
        <View style={estilos.container}>
            <Text>este es un modal</Text>
            <TouchableOpacity>
                <Text>Aceptar</Text>
            </TouchableOpacity>
            </View>
        </Modal>
    );
}

const estilos=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"grey",
        height:"100%"
    }
})