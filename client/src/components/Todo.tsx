export default function Todo({ name }: { name: string }) {
  return (
    <div className="row">
      <p>{name}</p>
      <input type="checkbox"></input>
    </div>
  );
}
