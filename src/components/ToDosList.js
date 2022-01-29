import React from "react";
import TodoItem from "./ToDoItem";
import style from "./sass-moduls/TodoList.module.scss"

export default class TodoList extends React.Component {
    render() {
        return (
            <>  
                <div className={style.Todolist}>
                    <ul className={`${style.List} ${ this.props.DarkMode && style.darkmode}`}>
                    {this.props.todos.map(todo => 
                        <TodoItem 
                        DarkMode={this.props.DarkMode}
                        key={todo.id}
                        completed={todo.completed}
                        title={todo.title}
                        id={todo.id}
                        handleChange={this.props.handleChange}
                        handleDel={this.props.handleDel}
                        editItem={this.props.editItem}
                        />
                    )}
                    </ul>
                </div>
            </>
        )
    }
}