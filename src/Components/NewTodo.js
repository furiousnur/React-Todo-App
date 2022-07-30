import React from 'react';
import style from "./newtodo.module.css"

const NewTodo = () => {
    return (
        <form action="" className={style.form}>
            <div className={style["form-field"]}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title"/>
            </div>
            <div className={style["form-field"]}>
                <label htmlFor="desc">Title: </label>
                <input type="text" id="desc" name="desc"/>
            </div>
            <button type="submit">Add todo</button>
        </form>
    );
};

export default NewTodo;
