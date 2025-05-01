function Login() {
  return (
    
    <div className="w-screen h-screen bg-slate-500 p-6 ">
      <h1 className="text-3xl font-bold text-center text-white mt-20">Login</h1>
      <div className="flex w-[500px] mt-8 flex-col gap-4 mt-6 bg-slate-800 p-6 rounded-md mx-auto shadow">
        <input
          className="rounded h-8"
          placeholder=" Insira seu email cadastrado..."
          type="email"
        />

        <input
          className="rounded h-8"
          placeholder=" Insira sua senha cadastrada"
          type="password"
        />
        <button className="bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500 transition-all">
          Entrar
        </button>
        <p className="text-center text-white font-extralight">Esqueceu sua senha? <a className="text-slate-300 font-bold" href="#">Redefina aqui!!</a></p>
      </div>
    </div>
  );
}
export default Login;
