import React from 'react';

const Todos = ({todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={ todo.id }>
                    <span className="remover" onClick={() => { deleteTodo(todo.id) }}>Remove</span>
                    <span> { todo.content }</span>
                </div>
            )
        })
    ): (<p className="center">No Todos left</p>)

    return(
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default Todos