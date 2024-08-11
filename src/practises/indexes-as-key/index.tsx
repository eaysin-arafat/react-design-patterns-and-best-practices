import { useState } from "react";

export const List = () => {
  const [items, setItems] = useState(["foo", "bar"]);

  const handleClick = () => {
    const newItems = items.slice();
    newItems.unshift("baz");
    setItems(newItems);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>
            {item}
            <input type="text" />
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Add +</button>
    </div>
  );
};
