import { useState } from 'react';

function ItemCount({ initial = 1, min = 1, max = 10, onAdd }) {
  const [count, setCount] = useState(initial);
  const dec = () => setCount(c => Math.max(min, c - 1));
  const inc = () => setCount(c => Math.min(max, c + 1));
  const add = () => onAdd?.(count);

  return (
    <div style={{ display:'flex', gap:8, alignItems:'center', marginTop:12 }}>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
      <button onClick={add} style={{ marginLeft:8 }}>Agregar</button>
    </div>
  );
}

export default ItemCount;