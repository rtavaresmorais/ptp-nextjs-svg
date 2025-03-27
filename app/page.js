
import styles from "./page.module.css";
import Saudacao from './Componentes/Saudacao';
//import Orcamento from './Componentes/Orcamento';
import Link from "next/link";


export default function Home() {
  return (
   
      <div className={styles.page}>
        <Saudacao />
   
        <Link href="/orcamento">Ir para a Página de Orçamento</Link>

      </div>
      
   
  );
}