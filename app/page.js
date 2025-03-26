import Image from "next/image";
import styles from "./page.module.css";
import Saudacao from './Componentes/Saudacao';


export default function Home() {
  return (
    <div className={styles.page}>
      <Saudacao />
    </div>
  );
}
