import React from "react";
import Link from "next/link";


export default function Orcamento() {
  return (
    <div style={{ margin: "25px" }}>

      <h1>Página de Orçamento</h1>
      <p>Bem-vindo à página de orçamento!</p>
      <Link href="/">
        <button style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
          Voltar
        </button>
      </Link>
      <br />
      <Link href="/sedan">
        <button style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
          Sedan
        </button>
      </Link>

    </div>
  );
}