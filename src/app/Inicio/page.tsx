"use client";
import Menu from "../components/Menu/menu";
import { useState } from "react";
import "./inicio.css";
import MedicineHome from "../components/MedicineHome";

export default function Home() {
  const [medicines, setMedicines] = useState([
    { name: "Ibuprofeno", quantity: 1 },
    { name: "Ibuprofeno", quantity: 1 },
    { name: "Ibuprofeno", quantity: 1 },
    { name: "Ibuprofeno", quantity: 1 },
  ]);

  const [newMedicine, setNewMedicine] = useState("");
  const [quantity, setQuantity] = useState(1);

  function addMedicine() {
    if (!newMedicine) return;

    setMedicines([
      ...medicines,
      { name: newMedicine, quantity },
    ]);

    setNewMedicine("");
    setQuantity(1);
  }

  return (
    <main className="container">
      <div className="card">
        <Menu />
        <h1 className="title">Farmácia Laginhos</h1>

        <div className="grid">
          {/* Esquerda */}
          <div className="left">
            <div className="box">
              <h2>Adicionar remédio</h2>

              <div className="form-row">
                <input
                  type="text"
                  placeholder="Digite o nome do remédio"
                  value={newMedicine}
                  onChange={(e) => setNewMedicine(e.target.value)}
                />

                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="qty"
                />

                <button onClick={addMedicine}>
                  +Adicionar
                </button>
              </div>
            </div>


            <h2 className="related-title">Remédios relacionados</h2>

            <div className="related-box">

              <div className="list">
                {medicines.map((med, index) => (
                  <MedicineHome
                    key={index}
                    name={med.name}
                    quantity={med.quantity}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Direita */}
          <div className="right box">
            <h2>Informações da receita</h2>

            <input type="text" placeholder="Nome da paciente" />
            <input type="text" placeholder="Nome do médico" />

            <div className="upload">
              <p>Upload da foto</p>
              <div className="upload-box">
                Selecionar Foto
                <input type="file" />
              </div>
            </div>

            <button className="generate">
              Gerar Receita
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}