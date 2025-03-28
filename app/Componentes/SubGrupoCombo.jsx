import React from "react";

const SubgrupoCombo = ({ subgrupos, onSubgrupoSelect, isDisabled }) => {
  const handleChange = (e) => {
    const selectedId = e.target.value; // Obtém o ID selecionado
    if (onSubgrupoSelect && selectedId) {
      onSubgrupoSelect(selectedId); // Chama a função de callback com o ID
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <label htmlFor="subgrupo-select" style={{ display: "block", marginBottom: "10px" }}>
        Escolha um Subgrupo:
      </label>
      <select
        id="subgrupo-select"
        onChange={handleChange}
        disabled={isDisabled} // Ativa/desativa a combo
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: isDisabled ? "#f0f0f0" : "#fff",
          cursor: isDisabled ? "not-allowed" : "pointer",
          fontSize: "16px",
        }}
      >
        <option value="">
          {isDisabled ? "Selecione um grupo no SVG para carregar os subgrupos" : "Escolha um Subgrupo"}
        </option>
        {subgrupos.map((subgrupo) => (
          <option key={subgrupo.id} value={subgrupo.id}>
            {subgrupo.descricao}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubgrupoCombo;