/* Creacion del formulario */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/Task.api';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast';



export function TaskFormPage() {
  const { register, handleSubmit, formState: {
    errors }
    , setValue
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  /* console.log(params); */

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data)
      toast.success("Tarea actualizada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        }
      }
      )
    } else {
      await createTask(data);
      toast.success("Tarea creada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        }
      }
      )
    }
    navigate("/Task");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {

        const {
          data: { title, description },
        } = await getTask(params.id);
        /*  console.log(res); */
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask();
  }, [])

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3 ' />
        {errors.title && <span>El titulo es requerido</span>}
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        ></textarea>

        {errors.description && <span>La descripcion es requerida</span>}
        <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
      </form>
      {params.id && (
        <div className='flex justify-end'>
          <button className='bg-red-500 p-3 rounded-lg w-48 mt-3'
            onClick={async () => {
              const accepted = window.confirm("¿Estas seguro de eliminar esta tarea?");
              if (accepted) {
                await deleteTask(params.id);
                toast.success("Tarea eliminada", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#ad5858ff",
                  }
                }
                )
                alert("La tarea fue eliminada exitosamente");
                navigate("/Task");
              }
            }}

          >Eliminar</button>
          
        </div>
  )}
    </div>
  )
}