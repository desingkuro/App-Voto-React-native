import { useContext, useState } from "react";
import { Text, Alert, View, StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
import { RadioButton } from "react-native-paper";
import { Candidatos } from "../filesJson/Candidatos";
import { Contexto } from "../context/Contexto";
import { Voto } from "./Voto";
import { CerrarModal } from "./CerrarModal";


export function Cards(props) {
const { selectedId, setSelectedId } = useContext(Contexto);

const handleRadioButton = (id) => {
    setSelectedId(id);
};

const validar = () => {
    return selectedId !== null;
};

const renderCandidatos = (candidatos) => {
    const listaimagen=[
    require('../src/usuario.png'),require('../src/usuario2.png'),
    require('../src/usuario3.png'),require('../src/usuario4.png'),
    require('../src/usuario5.png'),require('../src/usuario6.png'),
    require('../src/usuario7.png'),require('../src/usuario8.png'),]
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
                <Image style={styles.imagen} source={listaimagen[candidato.id-1]}/>
            </View>
        </View>
        ))}
        <Voto
        validarVoto={validar}
        contralor={props.contralor}
        personero={props.person}
        navegacion={props.navegacion}
        />
        <CerrarModal/>
    </>
    );
};

return (
    <ScrollView style={styles.contenedor}>
    {props.person
        ? renderCandidatos(Candidatos.personeros)
        : props.contralor
        ? renderCandidatos(Candidatos.contralor)
        : null}
    </ScrollView>
);
}

const styles = StyleSheet.create({
card: {
    height: 170,
    width: 400,
    backgroundColor: "#e4f4fd",
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
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
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius:100,
    marginLeft:70,
    position:"relative",
    marginBottom:10
},
contenedor2:{
    flex: 1,
    width: "70%",
},
imagen_contenedor:{
    flex:1,
    position:"absolute",
    width:150,
    left:200,

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
