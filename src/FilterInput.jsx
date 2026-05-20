import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './store/itemsSlice';

export default function FilterInput() {
  const dispatch = useDispatch();
  const filter = useSelector((s) => s.items.filter);

  return (
    <div className="filter-row">
      <label className="filter-label">Фильтр:</label>
      <input
        className="input"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Поиск по названию..."
      />
    </div>
  );
}
