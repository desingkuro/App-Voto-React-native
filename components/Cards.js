import { useContext, useState } from "react";
import { Text, Alert, View, StyleSheet, ScrollView, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { Candidatos } from "../filesJson/Candidatos";
import { Contexto } from "../context/Contexto";
import { Voto } from "./Voto";


export function Cards(props) {
const { selectedId, setSelectedId } = useContext(Contexto);

const handleRadioButton = (id) => {
    setSelectedId(id);
};

const validar = () => {
    return selectedId !== null;
};

const renderCandidatos = (candidatos) => {
    return (
    <>
        {candidatos.map((candidato) => (
        <View key={candidato.id} style={styles.card}>
            <View style={styles.contenedor2}>
                <Text style={styles.estudiante}>{candidato.Nombre}</Text>
                {candidato.Grado && (
                    <Text style={styles.estudiante}>{candidato.Grado}</Text>
                )}
                {candidato.Tarjeton && (
                    <Text style={styles.estudiante_Tarjeton}>
                        Número de Tarjetón: {candidato.Tarjeton}
                    </Text>
                )}
                <RadioButton
                    value={candidato.id}
                    status={
                        selectedId === candidato.id ? "checked" : "unchecked"
                    }
                    onPress={() => handleRadioButton(candidato.id)}
                    theme={styles.boton}
                />
            </View>
            <View style={styles.imagen_contenedor}>
                <Image style={styles.imagen} source={require(require('../src/logo3.png'))} />
            </View>
        </View>
        ))}
        <Voto
            validarVoto={validar}
            contralor={props.contralor}
            personero={props.person}
            navegacion={props.navegacion}
        />
    </>
    );
};

return (
    <View style={styles.contenedor}>
    {props.person
        ? renderCandidatos(Candidatos.personeros)
        : props.contralor
        ? renderCandidatos(Candidatos.contralor)
        : null}
    </View>
);
}

const styles = StyleSheet.create({
card: {
    height: 170,
    width: 360,
    backgroundColor: "#e4f4fd",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 15,
    padding: 10,
    flexDirection:'row',
    paddingLeft:30
},
contenedor: {
    flex: 1,
    width: "100%",
    
},
estudiante: {
    fontWeight: "bold",
    fontSize: 30,
},
imagen:{
    height:80,
    width:80,
    borderRadius:100,
    marginLeft:70,
    position:"relative",
    marginBottom:10
},
contenedor2:{
    width: "70%",
    backgroundColor:'red'
},
imagen_contenedor:{
    width:100,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
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
