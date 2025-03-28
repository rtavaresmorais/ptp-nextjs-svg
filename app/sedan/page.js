
"use client";
import React, { useState, useEffect } from "react";

import SvgBase from '../Componentes/SvgBase';
import SvgConv from '../Componentes/SvgConv';
import SubGrupoCombo from '../Componentes/SubGrupoCombo';

export default function Sedan() {
    const [jsonData, setJsonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [subgrupos, setSubgrupos] = useState([]);

    const [selectedGrupo, setSelectedGrupo] = useState("");
    const [selectedSubgrupo, setSelectedSubgrupo] = useState("");


    const cliqueTeste = (id) => {
        setSubgrupos([]);

        if (id !="estofamento") { return; } // 
        console.log(`Grupo selecionado: ${id}`);
        setSelectedGrupo(id); // Define o grupo selecionado
        // Faz o fetch dos subgrupos com base no grupo clicado
        fetch(`https://gist.githubusercontent.com/rtavaresmorais/c2fef1297d762741bcb35f3436d6a637/raw/dfea84c545524b8f7d595f5927e7e6b1d4de5ade/subgrupo.json`)
            //  fetch(`URL_DOS_SUBGRUPOS?grupoId=${id}`)
            .then((response) => response.json())
            .then((data) => setSubgrupos(data.subgrupos))
            .catch((error) => console.error("Erro ao buscar subgrupos:", error));
    };

    const handleSubgrupoSelect = (id) => {
        setSelectedSubgrupo(id); // Define o subgrupo selecionado
        console.log(`Subgrupo selecionado: ${id}`);
        // Navegue ou busque as peças correspondentes aqui
    };


    /*
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
 };*/


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
        <div style={{ margin: "15px" }}>

            <h4>Clique para selecionar o grupo</h4>
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
            {subgrupos.length > 0 && (
                <SubGrupoCombo subgrupos={subgrupos} onSubgrupoSelect={handleSubgrupoSelect} />
            )}

        </div>
    );
}  