import AddTodoForm from "./AddTodoForm";
import {render, screen} from "@testing-library/react";

describe('AddTodoForm', () => {
    it("should render the input and button", () => {
        render(<AddTodoForm />);
        const todoInput = screen.getByTestId('todo-input');
        const todoSubmit = screen.getByTestId('todo-submit');
        expect(todoInput).toBeInTheDocument();
        expect(todoSubmit).toBeInTheDocument();
    })

    it("should show a success message when a todo is added", () => {
        render(<AddTodoForm />);
        const todoSubmit = screen.getByTestId('todo-submit');
        todoSubmit.click();

        throw new Error('Not implemented yet');
    })
})
