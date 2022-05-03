import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from './data.js';

function App() {
  // console.log(data);
  const cardElements = data.map((item) => {
    return <Card key={item.index} item={item} />;
  });
  // console.log(cardElements);
  return (
    <div className='App'>
      <Header />
      {cardElements}
    </div>
  );
}

export default App;
