import { useContext, useState } from "react";
import { View,StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Contexto } from "../context/Contexto";

export function Card({candidato,id}) {

    const {selectedId,setSelectedId,candidatos,candidatosJson} = useContext(Contexto);

    console.log(id + 'este es el idSeleccionado:' + selectedId)
    function seleccionCandidato(){
        console.log(selectedId)
        if(selectedId!=id || selectedId===null){
            setSelectedId(candidato.id);
        }
    }
    
    return(
        <TouchableOpacity style={selectedId===id?styles.cardActive:styles.card} onPress={seleccionCandidato}>
            <View style={styles.imagen_contenedor}>
                <Image style={styles.imagen} source={{uri:candidato.Foto}}/>
            </View>
            <View style={styles.contenedor}>
                <Text style={styles.estudiante_Tarjeton}>{candidato.Tarjeton}</Text>
                <Text style={styles.estudiante}>{candidato.Nombre}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        height: 380,
        width: 360,
        backgroundColor: "#5B8FB9",
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 15,
        padding: 10,
        flexDirection:'column',
        alignItems:'center',
    },
    cardActive: {
        height: 380,
        width: 360,
        backgroundColor: "#e4f4fd",
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 15,
        padding: 10,
        flexDirection:'column',
        alignItems:'center',
        borderWidth:10,
        borderColor:'#5B8FB9'
    },
    estudiante: {
        fontWeight: "bold",
        fontSize: 30,
    },
    imagen:{
        height:140,
        width:140,
        borderRadius:100,
    },
    contenedor:{
        width: "100%",
        height:'50%',
        alignItems:'center',
        justifyContent:'center'
    },
    imagen_contenedor:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:'40%'
    },
    estudiante_Tarjeton:{
        fontSize:20,
        marginTop:10,
        marginBottom:10
    },
    boton:{
        flex:1,
        width:"100%",
        height:"100%",
    }
    })