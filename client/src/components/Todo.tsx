export default function Todo({ name }: { name: string }) {
  return (
    <>
      <p>{name}</p>
      <input type="checkbox"></input>
    </>
  );
}
