import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, setEditing } from './store/itemsSlice';

export default function ItemList() {
  const dispatch = useDispatch();
  const { list, editingId, filter } = useSelector((s) => s.items);

  const filtered = filter.trim()
    ? list.filter((i) => i.name.toLowerCase().includes(filter.toLowerCase()))
    : list;

  return (
    <ul className="item-list">
      {filtered.map((item) => (
        <li key={item.id} className={`item${item.id === editingId ? ' item--editing' : ''}`}>
          <span className="item-text">
            {item.name} {item.price}
          </span>
          <button
            className="btn btn-icon"
            title="Редактировать"
            onClick={() => dispatch(setEditing(item.id))}
          >
            ✏️
          </button>
          <button
            className="btn btn-icon btn-delete"
            title="Удалить"
            onClick={() => dispatch(deleteItem(item.id))}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
