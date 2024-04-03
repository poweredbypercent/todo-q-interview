import React from 'react';
import styles from './App.module.css';
import AddTodo from "./pages/AddTodo/AddTodo";

function App() {
  return (
    <div className={styles.App}>
        <header className={styles.header}>
            <h1>Todo-q</h1>
            <h4>The world's best todo app</h4>
        </header>
        <nav>
            <ul>
                <li>
                    <a href={'/'}>Home</a>
                    <a href={'/add'}>Add todo</a>
                    <a href={'/list'}>My todo list</a>
                </li>
            </ul>
        </nav>
        <div className={styles.pageContent}>
            I am just a home page, nothing to see here
        </div>
    </div>
  );
}

export default App;
