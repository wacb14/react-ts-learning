import { useMemo, useState } from 'react';

// OBJECTIVE: To cache the result of an expensive function, to avoid calling the function again.
// But we must consider whether the cost of caching the function is higher than recalculating it.

// EXAMPLE: We have a shopping list and we have calculated the total cost of the entire purchase.
// If we do not add any new items or do not change anything in the information, the result should not change.

interface Item {
  id: number;
  name: string;
  price: number;
}

export function ShoppingCart() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Apple', price: 1.5 },
    { id: 2, name: 'Pear', price: 2.0 },
    { id: 3, name: 'Milk', price: 3.5 },
  ]);
  const [discount, setDiscount] = useState<number>(0);

  const totalCost = useMemo(() => {
    alert('Calculating total...');
    return items.reduce((total, item) => total + item.price, 0);
  }, [items]);

  const finalCost = totalCost - discount;

  function addItem() {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      price: Math.random() * 5,
    };
    setItems([...items, newItem]);
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total cost: ${finalCost.toFixed(2)}</p>
      <p>
        <input
          type='number'
          value={discount}
          onChange={e => setDiscount(parseFloat(e.target.value) || 0)}
        />
      </p>

      <button onClick={addItem}>New Item</button>
    </div>
  );
}
