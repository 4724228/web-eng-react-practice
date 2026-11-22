import type { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date();

  return (
    <li>
      {todo.title} {todo.completed ? "(完了)" : "(未完了)"}
      {todo.dueDate && (
        <span style={{ color: isOverdue ? "red" : "black" }}>
          {" "}期限: {todo.dueDate}
        </span>
      )}
    </li>
  );
}