import { useState } from "react";

export default function Form({ onClick }: { onClick: (name: string) => void }) {
  const [text, setText] = useState("");

  function onSubmit() {
    if (text == "") {
      alert("Name cannot be empty.");
      return;
    }
    onClick(text);
    setText("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={text}
        onInput={(e) => setText(e.currentTarget.value)}
      />
      <button onClick={() => onSubmit()}>Hola Xoaco</button>
    </>
  );
}
