import React from "react";
import Link from "next/link";


export default function Orcamento() {
  return (
    <div>
      <h1>Página de Orçamento</h1>
      <p>Bem-vindo à página de orçamento!</p>
      <Link href="/">
        <button style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
          Voltar para a Página Principal
        </button>
      </Link>

    </div>
  );
}