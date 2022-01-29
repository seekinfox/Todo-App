import React from "react";
import Header from "./Header";
import InputTodo from "./InputToDo";
import TodoList from "./ToDosList";
import { v4 as uuidv4 } from "uuid";
import "../styles/main.scss"

export default class ToDoContainer extends React.Component {
    state = {
        todos: [],
        DarkMode: false
    }
    handleTheme = () => {
        this.setState({
            DarkMode: !this.state.DarkMode
        })
        console.log(this.state.DarkMode)
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
          const temp = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", temp)
        }
      }
      componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
          this.setState({
            todos: loadedTodos
          })
        }
      }   

    handleChange = id => { 
        this.setState(prevState  => ({
            todos: prevState.todos.map( item => {
                if(item.id === id ){
                   return{
                    ...item,
                    completed: !item.completed
                   }
                }
               return item
            })
        }))  
    }

    handleDel = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter( item => {
                    return item.id !== id
                })
            ]
        })
    }
    addTodoItem = title => {
        const newTitle = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTitle]
        })
    }
    editItem = (UpdatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map( item => {
                if(item.id === id){
                    item.title = UpdatedTitle
                }
                return item
            })
        })
    }

    render() {

        return (
            <>
            <div className={this.state.DarkMode ? "darkmode": ""}>
                <Header DarkMode={this.state.DarkMode} 
                handleTheme={this.handleTheme}  />
                <InputTodo
                DarkMode={this.state.DarkMode}
                addTodoItem={this.addTodoItem}
                />
                <TodoList 
                DarkMode={this.state.DarkMode}
                todos={this.state.todos}
                handleChange={this.handleChange}
                handleDel={this.handleDel}
                editItem={this.editItem}
                />
            </div>
            </>
        )
    }
}
    // { id: uuidv4(), title: "one", completed: true},
    // { id: uuidv4(), title: "two", completed: true},
    // { id: uuidv4(), title: "three", completed: false}