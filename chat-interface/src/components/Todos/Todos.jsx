import React, {useEffect} from "react";
import "./Todos.css"

const Todos = (props) => {
    const { setState } = props

    useEffect(() => {
        fetch("http://127.0.0.1:5000/todos")
        .then(res => res.json())
        .then(data => {
            setState(state => ({ ...state, todos: data}))
        })
    }, [])
    console.log(props.todos)

    const renderTodos = () => {
        return props.todos.map((todo) => {
            return <li className='todo-widget-list-item' key={todo.id}>
                {todo.title}
            </li>;
        });
    };

    return (
    <div className="todos-widget">
        <ul className="todo-widget-list"> {renderTodos()} </ul>
    </div>
    );
}

export default Todos;