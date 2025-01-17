import './App.css';
import {getBooks, getListOfRestEndPoint} from './api/anapioficeandfire'
import {useState, useEffect} from "react";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getBooks().then(data => {
      setList(data.entity);
    })
  }, []);
  return (
    <div className="app">
      <section className="app-main">
        <h1>
          <a
            className="app-link"
            href="https://www.anapioficeandfire.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn An API of Ice And Fire
          </a>
        </h1>
        <ul className="app-list">
          {
            list.map(item => (
              <li key={item.url} className="app-list-item">
                <a className="app-link"
                   href={item.url}
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default App;
