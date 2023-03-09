import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Alert } from "react-native";
import { Contexto } from "../context/Contexto";
import { Candidatos } from "../filesJson/Candidatos";
import { Contralor } from "../screens/Contralor";
import { Personero } from "../screens/Personero";

export const Voto = (props) => {
const { selectedId, setSelectedId } = useContext(Contexto);

const goToPage = () => {
    if (props.contralor) {
    Candidatos.contralor.map((e) => {
        if (e.id == selectedId) {
        Alert.alert("Ha votado por: " + e.Nombre);
        }
    });
    setSelectedId(null);
    props.navegacion.navigate(Personero);
    }
    if (props.personero) {
    Candidatos.personeros.map((e) => {
        if (e.id == selectedId) {
        Alert.alert("Ha votado por: " + e.Nombre);
        }
    });
    setSelectedId(null);
    props.navegacion.navigate(Contralor);
    }
};

const handleVoto = () => {
    if (selectedId) {
    if (props.contralor) {
        Candidatos.contralor.map((e) => {
        if (e.id == selectedId) {
            Alert.alert("Ha votado por: " + e.Nombre);
        }
        });
        setSelectedId(null);
        goToPage();
    }
    if (props.personero) {
        Candidatos.personeros.map((e) => {
        if (e.id == selectedId) {
            Alert.alert("Ha votado por: " + e.Nombre);
        }
        });
        setSelectedId(null);
        goToPage();
    }
    } else {
    Alert.alert("Debe seleccionar un candidato");
    }
};

return (
    <View style={estilos.container}>
    <TouchableOpacity style={estilos.boton} onPress={handleVoto}>
        <Text style={estilos.value}>Aceptar</Text>
    </TouchableOpacity>
    </View>
);
};

const estilos = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
boton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 70,
    backgroundColor: "green",
    borderRadius: 30,
},
value: {
    fontSize: 30,
    color: "white",
},
});
