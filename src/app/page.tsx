"use client";

import { useRouter } from "next/navigation";
import "./login.css";

export default function Login() {

  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // depois você pode validar usuário aqui
    router.push("/inicio");
  }

  return (
    <main className="login-container">

      <div className="login-grid">

        {/* LOGIN */}
        <div className="login-card">

          <h2>Faça seu login</h2>

          <form onSubmit={handleLogin}>

            <input
              type="text"
              placeholder="Nome"
              required
            />

            <input
              type="password"
              placeholder="Senha"
              required
            />

            <select required>
              <option value="">Cargo</option>
              <option value="farmaceutico">Farmacêutico</option>
              <option value="atendente">Atendente</option>
              <option value="admin">Administrador</option>
            </select>

            <button type="submit">
              Entrar
            </button>

          </form>
        </div>


        {/* BEM VINDO */}
        <div className="welcome-card">

          <h1>
            Bem Vindo(a) ao sistema da
            <br />
            Farmácia Laginhos!
          </h1>

          <div className="pharmacy-icon">
            ⚕
          </div>

          <p>
            Esse sistema foi desenvolvido com a finalidade
            de facilitar e auxiliar seu trabalho. Por favor,
            sinta-se à vontade para entrar em contato caso
            queira fazer qualquer relato ou sugestão.
          </p>

        </div>

      </div>

      {/* BOX INFERIOR */}
      <div className="login-footer">
        Após inserir todas as informações, clique em entrar!
      </div>

    </main>
  );
}