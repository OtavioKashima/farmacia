"use client";

import Menu from "../components/Menu/menu";
import { useRemedios } from "../store/remediosStore";
import "./lista.css";

export default function ListaRemedios() {

  const { remedios } = useRemedios();

  return (
    <>
      <Menu />

      <div className="page-container">

        <div className="main-card">

          <h1>Lista de Remédios</h1>

          <div className="lista-box">

            {remedios.length === 0 && (
              <p>Nenhum remédio adicionado.</p>
            )}

            {remedios.map((remedio, index) => (

              <div className="remedio-item" key={index}>

                <span>{remedio.nome}</span>

                <span className="quantidade">
                  {remedio.quantidade}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}