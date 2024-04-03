import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddTodo from "./pages/AddTodo/AddTodo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/add",
        element: <AddTodo/>,
    },
    {
        path: "/list",
        element: <div>Create a component for me and update the router in index.tsx</div>,
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
