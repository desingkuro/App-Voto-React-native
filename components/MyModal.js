import { useContext } from "react";
import { Text, View, TouchableOpacity, Modal, StyleSheet, TextInput, Alert } from "react-native";
import { Contexto } from "../context/Contexto";
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
export const MyModal = () => {
const { 
    mostrar,
    setMostrar,
    setPassword,
    password,
    setResultados
} = useContext(Contexto);

const cerrar = () => {
    setMostrar(false);
};

const closeVotacion =  () => {
    if (password === "compiladores") {
    //Alert.alert("Contraseña correcta");
    setPassword("");
        setResultados(true);
    } else {
    Alert.alert("Error al ingresar la contraseña");
    }
};    
    
    return(
        <Modal 
            animationType='slide'
            visible={mostrar}
            transparent
            //style={{backgroundColor:"#0000"}}
        >
        <View
            style={estilos.container}
        > 
            <View style={estilos.container_modal}>
                <View style={estilos.container_modalCierre}>
                    <TouchableOpacity onPress={cerrar} style={estilos.container_Boton}>
                        <Text style={estilos.text}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.containerForm}>
                        <Text style={estilos.containerForm_TextAdvertencia}>Si eres estudiante abstengase de proceder y selecione la opcion votar</Text>
                        <Text style={estilos.containerForm_Text}>para cerrar las votaciones por favor digite la clave y asi generar el conteo de votos</Text>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            style={estilos.inputText}
                        />
                        <View style={estilos.containerBotonVotaciones}>
                            <TouchableOpacity onPress={closeVotacion}>
                                <Text style={estilos.text}>
                                    Cerrar Votación
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{textAlign:"center", marginTop:45}}>
                                © Derechos de autor de Andrés Licona Machado. Para obtener más información, póngase en contacto con 
                                andresmauricio745@gmail.com o llame al 3215082539.  
                            </Text>                     
                        </View>
                </View>
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
    text:{
        fontSize:22,
        color:'white'
    },
    containerForm:{
        flex:1,
        alignItems:'center',
        padding:20,
        marginTop:80
        
    },
    containerForm_TextAdvertencia:{
        textAlign:'center',
        color:'red',
        marginBottom:40,
        backgroundColor:'#a0c5f7',
        width:'100%',
        padding:5
    },
    containerForm_Text:{
        textAlign:'center',
        fontSize:18,
        marginBottom:40
    },
    inputText:{
        backgroundColor:'#bceeff',
        width:260,
        height:40,
        padding:5,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontSize:16,
        marginBottom:40
    },
    containerBotonVotaciones:{
        height:40,
        width:200,
        backgroundColor:'#3b8eed',
        borderRadius:15,
        alignItems:"center",
        justifyContent:'center',
    }

})


{/*
const guardarPermiso = async () => {
    try {
    const { status } = await Permissions.askAsync(Permissions.WRITE_EXTERNAL_STORAGE);
    if (status === 'granted') {
        console.log('Permiso concedido');
    } else {
        console.log('Permiso denegado');
    }
    } catch (err) {
    console.warn(err);
    }
};


const guardarArchivo = async () => {
    try {
    const downloadDirectory = FileSystem.documentDirectory + 'Download/';
    await FileSystem.makeDirectoryAsync(downloadDirectory, { intermediates: true });
    
    const filename = 'resultados.txt';
    const filePath = downloadDirectory + filename;
    const content = JSON.stringify(info);
    await FileSystem.writeAsStringAsync(filePath, content);
    
    console.log('Archivo guardado correctamente en:', filePath);
    Alert.alert('Datos guardados correctamente');
    } catch (e) {
    console.log('Error al guardar los datos:', e);
    }
};*/}