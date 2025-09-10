import { Link } from "react-router-dom"
export function Navigation() {
    return (
        <div className="flex justify-between py-3">

            <Link to="/Task">
              <h1 className="font-bold text-3x1 mb-4"> Lista tareas </h1>
              </Link>
              <button className="bg-indigo-500 px-4 py-1 rounded-lg">
                <Link to="/Task-create"><h1>Create Task  </h1></Link>
                </button>
        </div >
    )
}