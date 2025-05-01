import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // Estados para armazenar os valores dos inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Recupera os dados armazenados no localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Verifica se os campos estão preenchidos e se correspondem ao que está no localStorage
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
    } else if (email === storedEmail && password === storedPassword) {
      // Se os dados baterem, navega para a página de tarefas
      navigate("/");
    } else {
      // Se os dados não baterem
      alert("Email ou senha incorretos.");
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-500 p-6 ">
      <h1 className="text-3xl font-bold text-center text-white mt-20">Login</h1>
      <div className="flex w-[500px] mt-8 flex-col gap-4 mt-6 bg-slate-800 p-6 rounded-md mx-auto shadow">
        <input
          className="rounded h-8"
          placeholder="Insira seu email cadastrado..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
        />

        <input
          className="rounded h-8"
          placeholder="Insira sua senha cadastrada"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
        />
        <button
          onClick={handleLogin} // Chama a função de login com a verificação
          className="bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500 transition-all"
        >
          Entrar
        </button>
        <p className="text-center text-white font-extralight">
          Não tem Cadastro?{" "}
          <a
            onClick={() => {
              navigate("/cadastro");
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

export default Login;
