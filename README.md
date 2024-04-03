# 📋 Todo-q
One todo app to rule them all.

## 👋 Welcome to Todo-q
Your goal is to finish off this simple todo app.\
The app is already set up with a few components and a few tests.\
Your job is to finish the app by implementing the missing functionality and fixing the failing tests.

## 📚 The app
- The app should be a simple todo app with a list of todos and a form to add new todos.
- But it's not complete yet. Your task is to finish it.

## 📁 The structure
- The app's router is contained within `index.tsx`
- The app's root component (at `/`) is `App.tsx`
- Pages are contained within the `pages` directory

## 🎯 The task
Tasks are best done sequentially, but can be skipped. There's a lot to be done, so don't worry if you can't finish everything.

Note:\
💡 Styling is not important & will not be evaluated\
💡 Feel free to talk through what you're doing\
💡 Please ask questions if you're stuck

- [ ] `AddTodo.tsx` (`/add`) doesn't have a navigation. Restructure the code such that the navigation (in `App.tsx`) can be reused.


- [ ] Introduce a way of storing and retrieving todos locally. The todos should persist even when the browser closes.
  - Each todo should have a `description` and a `isComplete` status.


- [ ] `npm test` is failing. Fix the failing AddTodoForm test (implementing functionality where required).


- [ ] Create the view and required components for `/list`, which should display a list of todos.


- [ ] Update the logic in the existing `AddTodoForm.tsx` to add a new todo to the local list of todos.


- [ ] 💫 Add a filter to the `/list` view to filter todos by `isComplete` status.

## Running & testing


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
