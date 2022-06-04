import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';

import styles from './AddTask.module.css';

interface AddTaskProps {
  newTaskText: string;
  onNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onNewTaskAdd: (event: FormEvent) => void;
}

export const AddTask = ({ newTaskText, onNewTaskChange, onNewTaskAdd }: AddTaskProps) => {
  const isAddNewTextEmpty = newTaskText.length === 0;

  return (
    <div className={styles.addTask}>
      <input
        name='task'
        value={newTaskText}
        onChange={onNewTaskChange}
        placeholder='Adicione uma nova tarefa'
      />

      <button
        onClick={onNewTaskAdd}
        disabled={isAddNewTextEmpty}
      >
        Criar
        <PlusCircle color='white' size={18} />
      </button>
    </div>
  )
}