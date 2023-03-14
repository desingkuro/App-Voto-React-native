import { Modal, Text, View, ScrollView, StyleSheet,TouchableOpacity, Alert } from "react-native";
import { Contexto } from "../context/Contexto";
import { useContext } from "react";
import { Candidatos } from "../filesJson/Candidatos";


export const Resultados=()=>{

    const { 
        candidato1,
        candidato2,
        candidato3,
        candidato4,
        candidato5,
        candidato6,
        candidato7,
        candidato8,
        resultados,
        setResultados
    } = useContext(Contexto);
    const votosActuales = [
        { candidato: candidato1, Nombre:"Laura Echeverria" },
        { candidato: candidato2, Nombre:"Carlos Cantillo" },
        { candidato: candidato3, Nombre:"Kenia Oliveros" },
        { candidato: candidato4, Nombre:"Voto en blanco Personero" },
        { candidato: candidato5, Nombre:"Johan Camacho" },
        { candidato: candidato6, Nombre:"Miguel Conrado" },
        { candidato: candidato7, Nombre:"Gabriela Bustamante" },
        { candidato: candidato8, Nombre:"Voto en Blanco Contralor" }
    ];

    const cierre=()=>{
        setResultados(false);
    }

    return(
        <Modal 
            animationType='slide'
            visible={resultados}
            transparent
            //style={{backgroundColor:"#0000"}}
        >
            <View style={estilos.container}> 
                <View style={estilos.container_modal}>
                    <View style={estilos.container_modalCierre}>
                        <TouchableOpacity onPress={cierre} style={estilos.container_Boton}>
                            <Text style={estilos.text}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={estilos.containerForm}>
                    {votosActuales.map((voto, index)=>{
                        return(
                            <View key={index} style={estilos.containerScrool}>
                                <Text style={estilos.containerForm_Text}>{voto.Nombre}: {voto.candidato}</Text>
                            </View>
                        )
                    })}

                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

const estilos=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(1,1,1, 0.5)',
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"white",
        fontSize:20
    },
    container_modal:{
        backgroundColor:"white" , height:'65%', width:'80%'
    },
    container_modalCierre:{
        height:60,
        alignItems:"flex-end",
        justifyContent:"center"
        ,paddingRight:20
    },
    container_Boton:{
        height:40,
        width:100,
        backgroundColor:'#2196f3',
        borderRadius:15,
        alignItems:"center",
        justifyContent:'center',
    },
    containerForm:{
        flex:1,
        //alignItems:'center',
        padding:20,
        marginTop:80,
        backgroundColor:"#2196f3"
        
    },
    containerForm_Text:{
        textAlign:'center',
        fontSize:22,
        marginBottom:40,
        color:"white"
    },
    containerScrool:{
        height:100,
    }
})