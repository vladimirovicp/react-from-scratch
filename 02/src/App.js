import logo from './logo.svg';
import './App.css';

const Book = (props) =>{
    return(
        <div className="book">
            <h2>Hello, {props.name ? <span>{props.name}</span> : "нет имени"}</h2>
            <p>Год: {props.year}</p>
            <p>{props.price} рублей</p>

            <p>{props.children}</p>
        </div>
    )
}


function App() {
  return (
    <div className="App">
      <h1>Заголовок</h1>
        <Book name='Основы js' year='2020' price='1000'>
            Текст в самом блоке.
        </Book>
      <Book name='Основы react' year='2021' price='1500' />
      <Book name='Основы vue' year='2022' price='1550' />
    </div>
  );
}

export default App;
