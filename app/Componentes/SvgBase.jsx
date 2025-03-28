import React, { useState } from "react";

const SvgBase = ({ config }) => {
  const { width, height, jsonData, onClick, children } = config;

  const [hint, setHint] = useState(""); // Armazena o ID do polígono
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Armazena a posição do mouse

  // Clique para retornar o ID
  const handleClick = (e) => {
    const id = e.target.id;
    if (e.target.id && e.target.id.includes("image")) { return; }

    console.log(`Você clicou no polígono com ID: ${id}`);

    if (id && onClick) { // Se a função `onClick` existir, chama-a
      onClick(id);
    
    }
  };

  // MouseMove para mostrar o hint e ajustar a posição
  const handleMouseMove = (e) => {
    const id = e.target.id;
    if (e.target.id && e.target.id.includes("image")) { return; }
    if (!jsonData)  { return; }
    const grupo = jsonData.grupos.find((item) => item.id === id); // Encontra o item correspondente no JSON
    if (grupo) {
      setHint(grupo.descricao); 
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 }); // Ajusta a posição relativa ao cursor
      e.target.style.opacity = 0.5; // Destaca o polígono com opacidade reduzida
    }
  };

  // MouseOut para esconder o hint e restaurar opacidade
  const handleMouseOut = (e) => {
    if (e.target.id && e.target.id.includes("image")) { return; }
    setHint(""); // Esconde o hint
    e.target.style.opacity = 0; // Restaura a opacidade original
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Texto do Hint */}
      {hint && (
        <div
          style={{
            position: "fixed", // Fixado em relação à tela
            top: `${position.y}px`,
            left: `${position.x}px`,
            backgroundColor: "lightyellow",
            border: "1px solid black",
            padding: "5px 10px",
            borderRadius: "5px",
            pointerEvents: "none",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
            whiteSpace: "nowrap",
            zIndex: 1000, // Garante que esteja acima de outros elementos
          }}
        >
           {hint}
       
        </div>
      )}

      {/* SVG */}
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        style={{ border: "0px solid black", cursor: "pointer" }}
      >
        {/* Aplica os eventos SOMENTE nos filhos */}
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onClick: handleClick,
            onMouseMove: handleMouseMove,
            onMouseOut: handleMouseOut,
          })
        )}
      </svg>
    </div>
  );
};

export default SvgBase;