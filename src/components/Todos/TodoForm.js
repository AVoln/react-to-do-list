import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'


const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoForm}>
      <form onSubmit={onSubmitHandler}>
        <label>
          <input type="text" placeholder="Enter new todo" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <Button type="submit" title="Submit">Submit</Button>
      </form>
    </div>
  )
}

export default TodoForm
