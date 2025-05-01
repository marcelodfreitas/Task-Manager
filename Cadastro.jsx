import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  // Estados para armazenar os valores dos inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCadastro = () => {
    // Verifica se os campos estão preenchidos
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
    } else {
      // Salva o email e a senha no localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      // Redireciona para a página de login
      navigate("/login");
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-500 p-6 ">
      <h1 className="text-3xl font-bold text-center text-white mt-20">
        Cadastro
      </h1>
      <div className="flex w-[500px] mt-8 flex-col gap-4 mt-6 bg-slate-800 p-6 rounded-md mx-auto shadow">
        <input
          className="rounded h-8"
          placeholder=" Seu melhor email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
        />

        <input
          className="rounded h-8"
          placeholder=" Sua melhor senha..."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
        />
        <button
          onClick={handleCadastro} // Chama a função de cadastro com a verificação
          className="bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500 transition-all"
        >
          Cadastrar
        </button>
        <p className="text-center text-white font-extralight">
          Já é cadastrado?{" "}
          <a
            onClick={() => {
              navigate("/");
            }}
            className="text-slate-300 font-bold"
            href="#"
          >
            Clique aqui!!
          </a>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
