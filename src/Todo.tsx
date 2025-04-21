import React, { useEffect, useState } from 'react';
import './App.css';

type TodoProps = {
	id: number;
	todo: string;
};

const Todo: React.FC = () => {
	const [todos, setTodos] = useState<TodoProps[]>([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		fetch('https://dummyjson.com/todos/random/3')
			.then((res) => res.json())
			.then((data) => setTodos(data));
	}, []);

	const handleAdd = () => {
		if (input.trim() === '') return;
		const newTodo: TodoProps = {
			id: Math.floor(Math.random() * 900) + 100,
			todo: input.trim(),
		};
		setTodos([...todos, newTodo]);
		setInput('');
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

  	return (
		<div className="app-container">
			<h1>Todo List</h1>
		<div className="input-container">
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Add a new todo..."
			/>
			<button onClick={handleAdd}>Add</button>
		</div>

		<table className="todo-table">
			<thead>
				<tr>
					<th>#</th>
					<th>Todo</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr key={1}>
					<td>1</td>
					<td>Complete this simple Todo app.</td>
					<td>
					<button onClick={() => handleDelete(1)} disabled className="btn delete">Delete</button>
					</td>
				</tr>
				{todos.length === 0 ? (
					<tr>
					<td colSpan={3} className="empty-row">No todos yet</td>
					</tr>
				) : (
					todos.map((todo, index) => (
					<tr key={todo.id}>
						<td>{todo.id}</td>
						<td>{todo.todo}</td>
						<td>
						<button onClick={() => handleDelete(todo.id)} className="btn delete">Delete</button>
						</td>
					</tr>
					))
				)}
			</tbody>
		</table>
		</div>
	);
};

export default Todo;
