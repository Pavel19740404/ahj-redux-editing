import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialItems = [
  { id: '1', name: 'Замена стекла', price: 21000 },
  { id: '2', name: 'Замена дисплея', price: 25000 },
  { id: '3', name: 'Замена аккумулятора', price: 4000 },
  { id: '4', name: 'Замена микрофона', price: 2500 },
];

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    list: initialItems,
    editingId: null,
    filter: '',
  },
  reducers: {
    addItem: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(name, price) {
        return { payload: { id: nanoid(), name, price: Number(price) } };
      },
    },
    updateItem(state, action) {
      const { id, name, price } = action.payload;
      const item = state.list.find((i) => i.id === id);
      if (item) {
        item.name = name;
        item.price = Number(price);
      }
      state.editingId = null;
    },
    deleteItem(state, action) {
      state.list = state.list.filter((i) => i.id !== action.payload);
      if (state.editingId === action.payload) {
        state.editingId = null;
      }
    },
    setEditing(state, action) {
      state.editingId = action.payload;
    },
    cancelEditing(state) {
      state.editingId = null;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addItem, updateItem, deleteItem, setEditing, cancelEditing, setFilter } =
  itemsSlice.actions;

export default itemsSlice.reducer;
