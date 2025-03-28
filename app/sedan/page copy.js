
"use client";
import React, { useState, useEffect } from "react";
import SvgBase from '../Componentes/SvgBase';
import SvgConv from '../Componentes/SvgConv';


export default function Sedan() {
    const [jsonData, setJsonData] = useState(null);
    const [loading, setLoading] = useState(true);
  


    const cliqueTeste = (id) => {
        alert(id);
        switch (id) {
            case "estofamento":
                console.log("Executando ação para Estofamento");
                break;
            case "portas":
                console.log("Executando ação para Portas");
                break;
            default:
                console.log(`ID não reconhecido: ${id}`);
                break;
        }
    };


    useEffect(() => {
        // Fetch do JSON
        fetch(
            "https://gist.githubusercontent.com/rtavaresmorais/6e24cda7cba42aece34a5be6d88c1749/raw/843b9a1ad0c3204a24acd4205c012d6e101b386d/sedan.json"
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar o JSON");
                }
                return response.json();
            })
            .then((data) => {
                setJsonData(data); // Atualiza os dados no estado
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar JSON:", error);
                setLoading(false);
            });
    }, []); // Executa apenas na montagem

    return (
        <div>
            <SvgBase
                config={{
                    width: 350,
                    height: 350,
                    jsonData: jsonData,
                    onClick: cliqueTeste,
                    children: <SvgConv width="100%" height="100%" />,
                }}    >
                <SvgConv width="100%" height="100%" />
            </SvgBase>
        </div>
    );
}  