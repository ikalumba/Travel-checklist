export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percentage = Math.trunc((numpacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything Ready to go ✈"
          : `🧳 You have ${numItems} items on your list, and you have already packed
        ${numpacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
