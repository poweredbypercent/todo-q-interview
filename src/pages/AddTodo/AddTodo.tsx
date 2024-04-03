import React from 'react';
import styles from './AddTodo.module.css';
import AddTodoForm from "../../components/AddTodoForm";
const AddTodo = () => {
    return (
        <div className={styles.addContainer}>
            <AddTodoForm/>
        </div>
    );
};

export default AddTodo;
