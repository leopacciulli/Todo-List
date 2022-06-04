import clipboard from '../assets/clipboard.svg';

import styles from './EmptyState.module.css';

export const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <img src={clipboard} alt='Clipboard' />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize sues itens a fazer</span>
    </div>
  )
}