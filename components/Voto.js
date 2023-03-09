import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Alert } from "react-native";
import { Contexto } from "../context/Contexto";
import { Candidatos } from "../filesJson/Candidatos";
import { Contralor } from "../screens/Contralor";
import { Personero } from "../screens/Personero";

export const Voto = (props) => {
const { selectedId, setSelectedId } = useContext(Contexto);

const votoCandidato=()=>{
    if(props.personero){
        switch(selectedId){
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }if(props.contralor){
        switch(selectedId){
            case 5:
                
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
        }
    }
}

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
        votoCandidato()
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
        <Text style={estilos.value}>Votar</Text>
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
    backgroundColor: "#2196f3",
    borderRadius: 30,
},
value: {
    fontSize: 30,
    color: "white",
},
});
