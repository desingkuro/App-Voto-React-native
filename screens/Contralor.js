import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import { Contexto } from "../context/Contexto";
import { Voto } from "../components/Voto";

export const Contralor = (props) => {
    const {selectedId,setSelectedId,candidatos,candidatosJson} = useContext(Contexto);

    return (
        <View style={Styles.container}>
        <View style={Styles.containerTitulo}>
            <Text style={Styles.descripcion}>Debe seleccionar un solo candidato</Text>
        </View>
        <ScrollView>
            <View style={Styles.containerScroll}>
                {
                    candidatosJson.contralor.map((e,i)=>{
                        return <Card id={e.id} candidato={e} key={i} />
                    })
                }                
                <Voto personero={false} contralor={true} navegacion={props.navigation}/>
            </View>
        </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
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
    containerScroll:{
        width:'100%',
        paddingBottom:20,
        paddingTop:20,
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        minWidth:380
    }
});
