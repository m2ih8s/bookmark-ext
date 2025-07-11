import { useState } from 'react';
import BookmarkViewer from './BookmarkViewer';

const Button = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1); // count を 1 増やす
  };
  function reset() {
    setCount(0); // count を 1 増やす
  };

  return (
    <div>
      <h1>カウンタ</h1>
      <p><strong>count:</strong> {count}</p>
      <button onClick={increment}>inc</button>
      <button onClick={reset}>reset</button>

      <BookmarkViewer bookmarkId={String(count)}/>
    </div>
  );
}

export default Button;