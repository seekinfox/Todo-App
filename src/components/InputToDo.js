import React, {Component} from "react";
import style from "./sass-moduls/InputTodo.module.scss";

export default class InputTodo extends Component {
   state = {
      title: ""
   }
   onChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }
   onSubmit = e => {
      e.preventDefault();
      console.log(this.state.title)
      if(this.state.title.trim()) {
         this.props.addTodoItem(this.state.title)
         this.setState({
            title: ""
         })
      } else {
         alert('empty')
      }
   }
   
   render() {
      return(
         <>
         <form onSubmit={this.onSubmit} className={style.form}>
            <input className={this.props.DarkMode ? style.darkmode : ""} name="title" type="text" placeholder="Create a new todo..." value={this.state.title} onChange={this.onChange} />
            <button>add</button>
         </form>
         </>
      )
   }
}
