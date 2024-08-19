import { TodoData } from "./TodoData";

export default function Todo({
  data,
  onDelete,
  onChecked,
}: {
  data: TodoData;
  onDelete: () => void;
  onChecked: () => void;
}) {
  return (
    <div className="row">
      <p>{data.name}</p>
      <input
        type="checkbox"
        checked={data.completed}
        onInput={() => onChecked()}
      ></input>
      <button onClick={() => onDelete()}>Delete</button>
    </div>
  );
}
