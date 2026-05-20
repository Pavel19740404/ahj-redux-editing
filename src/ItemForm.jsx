import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, cancelEditing } from './store/itemsSlice';

export default function ItemForm() {
  const dispatch = useDispatch();
  const { list, editingId } = useSelector((s) => s.items);

  const editingItem = list.find((i) => i.id === editingId) || null;

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setPrice(String(editingItem.price));
    } else {
      setName('');
      setPrice('');
    }
  }, [editingId]);

  const handleSave = () => {
    if (!name.trim() || !price.trim()) return;
    if (editingItem) {
      dispatch(updateItem({ id: editingItem.id, name: name.trim(), price }));
    } else {
      dispatch(addItem(name.trim(), price));
    }
    setName('');
    setPrice('');
  };

  const handleCancel = () => {
    dispatch(cancelEditing());
    setName('');
    setPrice('');
  };

  return (
    <div className="form-row">
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Название"
      />
      <input
        className="input"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Цена"
        type="number"
      />
      <button className="btn" onClick={handleSave}>
        Save
      </button>
      {editingItem && (
        <button className="btn btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </div>
  );
}
