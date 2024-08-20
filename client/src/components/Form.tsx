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
    <form className="new-item-form" onSubmit={onSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="Name"
          value={text}
          onInput={(e) => setText(e.currentTarget.value)}
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}
