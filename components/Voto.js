import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Alert } from "react-native";
import { Contexto } from "../context/Contexto";
import { Candidatos } from "../filesJson/Candidatos";

export const Voto = (props) => {
    const { selectedId, setSelectedId,candidatosJson,addVoto,saveVoto} = useContext(Contexto);

    const goToPage = () => {
        if (props.contralor) {
            props.navegacion.goBack();
        }
        if (props.personero) {
            props.navegacion.navigate('Contralor');
        }
    };

    const handleVoto = () => {
        if (selectedId!=null) {
            if (props.contralor) {
                Candidatos.contralor.map((e) => {
                if (e.id === selectedId) {
                    addVoto(selectedId,false)
                    Alert.alert("Ha votado por: " + e.Nombre);
                }
                });
                setSelectedId(null);
                goToPage();
            }
            if (props.personero) {
                Candidatos.personeros.map((e) => {
                if (e.id == selectedId) {
                    addVoto(selectedId,true)
                    Alert.alert("Ha votado por: " + e.Nombre);
                }
                });
                setSelectedId(null);
                goToPage();
            }
        } else {
            Alert.alert("Debe seleccionar un candidato");
        }
        saveVoto();
    };

return (
    <TouchableOpacity style={estilos.boton} onPress={handleVoto}>
        <Text style={estilos.value}>Votar</Text>
    </TouchableOpacity>
);
};

const estilos = StyleSheet.create({
    boton: {
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
