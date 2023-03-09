import React from "react";
import { createContext,useState, useEffect } from "react";

export const Contexto = createContext();

export const MyContexto=(props)=>{
    const [candidato1, setCandidato1] = useState(0);
    const [candidato2, setCandidato2] = useState(0);
    const [candidato3, setCandidato3] = useState(0);
    const [candidato4, setCandidato4] = useState(0);
    const [candidato5, setCandidato5] = useState(0);
    const [candidato6, setCandidato6] = useState(0);
    const [candidato7, setCandidato7] = useState(0);
    const [candidato8, setCandidato8] = useState(0);

    const [mostrar,setMostrar]=useState(false);

    const [selectedId, setSelectedId] = useState(null);

    const [password, setPassword] = useState('')

    return(
        <Contexto.Provider value={{selectedId,setSelectedId,mostrar,setMostrar, setPassword, password
        , setCandidato1,
        setCandidato2,
        setCandidato3,
        setCandidato5,
        setCandidato6,
        setCandidato7,
        setCandidato4,
        setCandidato8, 
        candidato1,
        candidato2,
        candidato3,
        candidato4,
        candidato5,
        candidato6,
        candidato7,
        candidato8
        }}>
            {props.children}
        </Contexto.Provider>
    );
}