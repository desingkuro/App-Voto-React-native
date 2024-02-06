import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import { Contexto } from "../context/Contexto";
import { Voto } from "../components/Voto";
import CustomModal from "../components/CustomModal";

export const Personero = (props) => {
    const {selectedId,setSelectedId,candidatos,candidatosJson} = useContext(Contexto);
    const [modalVisible, setModalVisible ] = useState(false);

    return (
        <View style={Styles.container}>
        <View style={Styles.containerTitulo}>
            <Text style={Styles.descripcion}>Debe seleccionar un solo candidato</Text>
        </View>
        <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} candidatos={candidatosJson} />
        <ScrollView >
            <View style={Styles.containerScroll}>
                {
                    candidatosJson.personeros.map((e,i)=>{
                        return <Card id={e.id} candidato={e} key={i} />
                    })
                }                
                <Voto personero={true} contralor={false} navegacion={props.navigation}/>
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
        backgroundColor: "#ffff",
    },
    containerTitulo:{
        height:25,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20
    },
    titulo: {
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
