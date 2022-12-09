import logo from '../assets/logo.svg'
import { PlusCircle, Trash } from 'phosphor-react'
import { FormEvent, useState } from 'react'

interface Task {
  id: string;
  description: string;
}

export function Home() {
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      description: 'Lorem ipsum dolor'
    }
  ]);

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask: Task = {
      id: String(new Date().getTime()),
      description: taskInput
    }

    setTasks((state) => [...state, newTask])

    setTaskInput('')
  }

  function handleDeleteTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id))
  }

  const totalTasks = tasks.length

  return (
    <div>
      <header className='w-full h-40 bg-theme-gray-700'>
        <div className='w-full max-w-[800px] mx-auto h-full  flex items-center justify-center'>
          <img src={logo} alt="" className='mx-auto' />
        </div>
      </header>

      <section className='w-full mt-[-2rem]'>
        <form action=""
          onSubmit={(event) => handleAddNewTask(event)}
          className='w-full max-w-[800px] mx-auto h-full  flex items-center justify-center gap-2'
        >
          <input
            type="text"
            data-testid="input-test"
            value={taskInput}
            onChange={e => setTaskInput(e.target.value)}
            className='text-theme-gray-200 h-[52px] rounded-md flex-1 bg-theme-gray-500 pl-4'
            placeholder="Adicionar uma nova tarefa"
          />
          <button
            type='submit'
            data-testid="add-new-task-button"
            className="w-[90px] h-[52px] rounded-md bg-theme-blue-dark text-gray-100 flex items-center justify-center gap-2 font-bold"
          >
            Criar
            <PlusCircle size={24} />
          </button>
        </form>
      </section>

      <section className='w-full mt-16'>
        <div className='w-full max-w-[800px] mx-auto h-full flex items-center justify-between border-b-2 border-theme-gray-500 pb-2'>
          <div className='flex items-center justify-center gap-2'>
            <span className='text-theme-blue font-bold'>Tarefas criadas</span>
            <span
              className='text-gray-200 block w-[25px] h-[19px] flex items-center justify-center rounded-full bg-theme-gray-400'
              data-testid="total-tasks"
            >
              {totalTasks}
            </span>
          </div>
        </div>
      </section>

      <main className='w-full mt-16'>
        <div className='w-full max-w-[800px] mx-auto h-full flex flex-col gap-2'>
          {tasks.map(task => {
            return (
              <div
                key={task.id}
                data-testid={`task-${task.id}`}
                className='w-full h-[72px] bg-theme-gray-500 rounded-md text-theme-gray-100 gap-2 flex items-center justify-between py-2 px-4'>
                <p className='flex-1'>{task.description}</p>

                <button data-testid={`delete-button-${task.id}`} onClick={() => handleDeleteTask(task.id)}>
                  <Trash size={24} />
                </button>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}