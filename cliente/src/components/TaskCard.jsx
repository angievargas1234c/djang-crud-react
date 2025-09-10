import { useNavigate } from "react-router-dom"

export function TaskCard({ Task }) {

  const navigate = useNavigate()
  return (
    <div className="bg-zinc-800 p3 hover:bg-zinc-700
    hover:cursor-pointer"
      
       // style={{ background:"gray"}} 

  
    onClick={() => {
      navigate(`/Task/${Task.id}`);

    }}
    >
      <h1 className="font-bold uppercase">{Task.title} </h1>
      <p className="text-slate-400">{Task.description} </p>
      <hr />
    </div>
  )
} 