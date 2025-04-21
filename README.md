# 📝 React To-Do App

A simple and interactive To-Do list application built with React. Users can view, add, and delete to-do items with ease.

## ✅ Objective

Build a basic To-Do list where users can:
- View a list of tasks fetched from an external API.
- Add new tasks using an input field and a button.
- Remove tasks from the list.

## 🚀 Getting Started

Node expected version ">=18"

```bash
git clone https://github.com/noelalfonsomiranda/mint-react-todo.git
cd mint-react-todo
yarn
yarn start
```

- Open the source code with your IDE
- Open `src/App.tsx` and `src/Todo.tsx`

---

### 1. Set Up Components
- Render the `Todo` component inside the `App` component.

### 2. Fetch Initial Data
- Use the `fetch` API and React Hooks to request to-do items from:  
  `https://dummyjson.com/todos/random/3`
- Parse the JSON response and store the result in a state variable.

### 3. Display the To-Dos
- Display the to-do items inside a table format.
- Each row should represent a single task.

### 4. Add New To-Dos
- Place an input field and an 'Add' button above the table.
- Create add function to:
  - Create a new to-do object with the following properties:
    - `id`: a randomly generated ID
    - `todo`: the task text from the input field
  - Add the new item to your created state.
  - Clear the input field after adding.

### 5. Delete To-Dos
- Implement the delete function to remove a to-do from the list.

### 6. Type Safety
- Define and apply the `TodoProps` type to ensure all to-do objects conform to the expected structure.

---

## 🧱 Example To-Do Item Structure

```ts
{
  id: 123,         // Randomly generated ID
  todo: "Example task"
}
```
