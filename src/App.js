import { useState } from "react";
import "./App.css";

const App = () => {
  const [goal, setGoal] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      goal: "react를 배워봅시다.",
    },
    {
      id: 2,
      goal: "useState를 배워봅시다",
    },
  ]);
  return (
    <div>
      <div className="header">
        <input
          className="input-box"
          type="text"
          value={goal}
          onChange={(e) => {
            setGoal(e.target.value);
          }}
          placeholder="목표를 입력해주세요"
        />
        <button
          className="add-button"
          onClick={() => {
            setTodos([...todos, { id: todos.length + 1, goal: goal }]);
          }}
        >
          추가하기
        </button>
        <br />
        <h1>Todo List</h1>
      </div>
      <div className="todo-box">
        {todos.map((todo) => (
          <div className="todo-card" key={todo.id}>
            {todo.goal}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
