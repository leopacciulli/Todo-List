import { Trash, Check, CheckCircle } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  id: number;
  checked: boolean;
  content: string;
  onDeleteTask: (taskId: number) => void;
  onCheckTask: (taskId: number) => void;
  onUncheckTask: (taskId: number) => void;
}

export const Task = ({
  id,
  checked,
  content,
  onDeleteTask,
  onCheckTask,
  onUncheckTask
}: TaskProps) => {

  const handleDeleteTask = () => {
    onDeleteTask(id)
  }
  
  const handleCheckTask = () => {
    onCheckTask(id)
  }

  const handeUncheckTask = () => {
    onUncheckTask(id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        {checked
          ? <button onClick={handeUncheckTask} className={styles.checked}>
            <CheckCircle color='white' />
          </button>
          : <button onClick={handleCheckTask} className={styles.check}></button>
        }

        <p>{content}</p>
      </div>

      <button
        onClick={handleDeleteTask}
        title='Deletar task'
      >
        <Trash size={18} />
      </button>
    </div>
  )
}