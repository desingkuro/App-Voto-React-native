import React from "react";
import { createContext,useState, useEffect } from "react";
import { Candidatos } from "../filesJson/Candidatos";
import AsyncStorage from '@react-native-async-storage/async-storage'


export const Contexto = createContext();

export const MyContexto=(props)=>{
    const [candidato1, setcandidato1] = useState(0)
    const [candidato2, setcandidato2] = useState(0)
    const [candidato3, setcandidato3] = useState(0)
    const [candidato4, setcandidato4] = useState(0)
    const [candidato5, setcandidato5] = useState(0)
    const [candidato6, setcandidato6] = useState(0)
    const [candidato7, setcandidato7] = useState(0)
    const [candidato8, setcandidato8] = useState(0)
    const [candidato9, setcandidato9] = useState(0)
    const [votoBlancoPersonero, setVotoBlancoPersonero] = useState(0)
    const [votoBlancoContralor, setVotoBlancoContralor] = useState(0)

    
    const [selectedId, setSelectedId] = useState(null);

    const [candidatosJson,setCandidatosJson] = useState(Candidatos);

    useEffect(()=>{
        getVoto();
    },[])

    function addVoto(id,personero){
        if(personero){
            candidatosJson.personeros.map((e,i)=>{
                e.id == id ? e.Votos++ : e.Votos = e.Votos
            })
        }else{
            candidatosJson.contralor.map((e,i)=>{
                e.id == id ? e.Votos++ : e.Votos = e.Votos
            })
        }
    }
    async function getVoto(){
        const listadodDeVotos = await AsyncStorage.getItem('candidatos');
        if(listadodDeVotos!=null){
            const lista = JSON.parse(listadodDeVotos);
            setCandidatosJson(lista);
        }else{
            setCandidatosJson(Candidatos);
        }
    }

    async function saveVoto(){
        const votosAGuardar = JSON.stringify(candidatosJson);
        AsyncStorage.setItem('candidatos',votosAGuardar);
    }

    const candidatos={
        setcandidato1,
        setcandidato2,
        setcandidato3,
        setcandidato4,
        setcandidato5,
        setcandidato6,
        setcandidato7,
        setcandidato8,
        setcandidato9,
        setVotoBlancoContralor,
        setVotoBlancoPersonero
    }
    

    return(
        <Contexto.Provider value={{selectedId,setSelectedId,candidatos,candidatosJson,addVoto,saveVoto}}>
            {props.children}
        </Contexto.Provider>
    );
}