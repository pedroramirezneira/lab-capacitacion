import { TodoData } from "../models/TodoData";

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
    <li>
      <label>
        <input type="checkbox" checked={data.completed} onChange={onChecked} />
        {data.name}
      </label>
      <button className="btn btn-danger" onClick={() => onDelete()}>
        Delete
      </button>
    </li>
  );
}
