import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

const TodoList: React.FC = () => {
  const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo);
  const {fetchTodos, setTodosPage} = useActions();
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line
  }, [page])

  if (loading) {
    return <h3>Идет загрузка списка дел...</h3>
  }

  if (error) {
    return <h3>{error}</h3>
  }

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      ))}

      <div style={{display: 'flex'}}>
        {pages.map(p => (
          <div
            onClick={() => setTodosPage(p)}
            style={{border: p === page ? '2px solid green' : '1px solid grey', padding: 10}}
          >{p}</div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;