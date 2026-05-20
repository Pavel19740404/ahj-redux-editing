import ItemForm from './ItemForm';
import ItemList from './ItemList';
import FilterInput from './FilterInput';

export default function App() {
  return (
    <div className="app">
      <h1 className="title">Сервисный центр</h1>
      <ItemForm />
      <FilterInput />
      <ItemList />
    </div>
  );
}
