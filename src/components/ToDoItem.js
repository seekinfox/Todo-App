import React from "react";
import style from "./sass-moduls/TodoItem.module.scss";
import ticked from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg"
export default class TodoItem extends React.Component {
state = {
        editing: false
}

handleEdit = e => {
        this.setState({
                editing: true,
        })
}
Enter = e => {
        if(e.key === "Enter"){
                this.setState({
                        editing: false,
                })
        }
}
componentWillUnmount() {
        console.log("Cleaning up...")
}


render() {
        return (
                <>
                <li>
                        <div className={`${style.TodoItem} ${this.props.DarkMode && style.DarkMode}`} onDoubleClick={this.handleEdit} >
                               {this.state.editing ?  
                               ""
                                :
                                <>
                               <label htmlFor={this.props.title} className={this.props.completed ? style.ticked : ""}>
                                <input 
                                        id={this.props.title}
                                        type="checkbox"
                                        checked={this.props.completed}
                                        onChange={() => this.props.handleChange(this.props.id)}
                                        />
                                        {this.props.completed ? <img src={ticked} alt=""/> : ""}
                               </label>
                               <p className={this.props.completed ? style.Underline : ""} >{this.props.title}</p>
                               <button className={this.props.DarkMode ? style.DaM : ""} onClick={() => this.props.handleDel(this.props.id)}><img src={cross} alt="" /></button>
                               </>
                                }
                                {this.state.editing ? <input className={style.edit} type="text" style={{display:"block"}} value={this.props.title} onChange={ e => this.props.editItem(e.target.value ,this.props.id) } onKeyDown={this.Enter} /> : ""}
                        </div>
                </li>
                </>
        )
}
}