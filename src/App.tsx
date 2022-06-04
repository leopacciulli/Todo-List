import { ChangeEvent, FormEvent, useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { EmptyState } from './components/EmptyState';
import { Task } from './components/Task';

import styles from './App.module.css';

import './global.css';

export const App = () => {
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTasks] = useState([
    {
      id: 1,
      checked: false,
      content: 'Atingir meta de 1 milhão em 10 anos'
    }
  ]);

  const handleAddTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value);
  }

  const handleAddNewTask = (event: FormEvent) => {
    event.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      checked: false,
      content: newTaskText
    }

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  }

  const deleteTask = (taskId: number) => {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId);
    setTasks(tasksWithoutDeletedOne);
  }

  const checkTask = (taskId: number) => {
    const newTasksWithNewChecked = tasks.map(task => task.id === taskId ? {...task, checked: true} : task);
    setTasks(newTasksWithNewChecked);
  }

  const unCheckTask = (taskId: number) => {
    const newTasksWithNewUnchecked = tasks.map(task => task.id === taskId ? {...task, checked: false} : task);
    setTasks(newTasksWithNewUnchecked);
  }

  const concludedTasks = tasks.filter(task => task.checked);

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <AddTask
          newTaskText={newTaskText}
          onNewTaskChange={handleAddTaskChange}
          onNewTaskAdd={handleAddNewTask}
        />

        <div className={styles.content}>
          <header>
            <div className={styles.title}>
              <p>Tarefas criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.title}>
              <p>Concluídas</p>
              <span>{concludedTasks.length} de {tasks.length}</span>
            </div>
          </header>

          <main>
            {tasks.length === 0
              ? <EmptyState />
              : (
                tasks.map(task => (
                  <Task
                    key={task.id}
                    id={task.id}
                    checked={task.checked}
                    content={task.content}
                    onDeleteTask={deleteTask}
                    onCheckTask={checkTask}
                    onUncheckTask={unCheckTask}
                  />
                ))
              )
            }
          </main>
        </div>
      </div>
    </>
  )
}