import React from 'react';
import './App.css';

type TodoProps = {};

const Todo: React.FC = () => {
  	return (
		<div className="app-container">
			<h1>Todo List</h1>
		<div className="input-container">
			{/* your add todo item field here */}
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
					<button onClick={() => {}} disabled className="btn delete">Delete</button>
					</td>
				</tr>
			</tbody>
		</table>
		</div>
	);
};

export default Todo;
