import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [SearchParams] = useSearchParams();
  const title = SearchParams.get("title");
  const description = SearchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          
          <button onClick={() => {
            navigate("/");

          }} className="absolute left-0 top-0 bottom-0 text-slate-800 bg-slate-400 p-1 rounded-md">
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-400 p-4 rounded-md shadow">
          <h2 className="text-2xl text-slate-700 font-bold">{title}</h2>
          <p className="text-slate-600 font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
