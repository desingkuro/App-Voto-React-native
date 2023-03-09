import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Cards } from "../components/Cards";

export const Contralor = (props) => {
return (
    <View style={Styles.container}>
    <Text style={Styles.titulo}>Bienvenido a las votaciones de Contraloría</Text>
    <Text style={Styles.descripcion}>Debe seleccionar un solo candidato</Text>
    <ScrollView>
        <Cards person={false} contralor={true} navegacion={props.navigation} />
    </ScrollView>
    </View>
);
};

const Styles = StyleSheet.create({
container: {
    height: "100%",
    flex: 1,
    //justifyContent:"center",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "white",
},
titulo: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: "center",
},
descripcion: {
    fontSize: 20,
},
});
