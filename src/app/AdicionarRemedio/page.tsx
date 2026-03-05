"use client"

import { useState } from "react"
import "./addRe.css"

export default function AdicionarRemedio() {

  const [nome, setNome] = useState("")
  const [dosagem, setDosagem] = useState("")
  const [horario, setHorario] = useState("")
  const [observacao, setObservacao] = useState("")

  function salvarRemedio(e:any){
    e.preventDefault()

    const remedio = {
      nome,
      dosagem,
      horario,
      observacao
    }

    console.log("Remédio salvo:", remedio)

    alert("Remédio cadastrado com sucesso!")

    setNome("")
    setDosagem("")
    setHorario("")
    setObservacao("")
  }

  return (
    <div className="container">

      <div className="card">

        <h1>💊 Adicionar Remédio</h1>

        <form onSubmit={salvarRemedio} className="form">

          <label>Nome do remédio</label>
          <input
            type="text"
            placeholder="Ex: Paracetamol"
            value={nome}
            onChange={(e)=>setNome(e.target.value)}
            required
          />

          <label>Dosagem</label>
          <input
            type="text"
            placeholder="Ex: 500mg"
            value={dosagem}
            onChange={(e)=>setDosagem(e.target.value)}
            required
          />

          <label>Horário</label>
          <input
            type="time"
            value={horario}
            onChange={(e)=>setHorario(e.target.value)}
            required
          />

          <label>Observações</label>
          <textarea
            placeholder="Ex: tomar após refeição"
            value={observacao}
            onChange={(e)=>setObservacao(e.target.value)}
          />

          <button type="submit">
            Salvar Remédio
          </button>

        </form>

      </div>

    </div>
  )
}