import React from 'react';
import styles from './AddTodoForm.module.css';

const AddTodoForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Todo: Add todo functionality")
    }

    return (
        <div className={styles.addWrapper}>
            <div className={styles.success} data-testid={"success-alert"}>Todo "fixme" added!</div>
            <form className={styles.formInline} onSubmit={handleSubmit}>
                <input name='todo' placeholder='Write your todo here' className={styles.textInput} data-testid={'todo-input'}/>
                <button type={'submit'} className={styles.button} data-testid={'todo-submit'}>Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodoForm;
