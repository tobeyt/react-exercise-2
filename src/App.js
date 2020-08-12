import React, { useState, useEffect } from 'react';
import Header from './components/Header/header';
import './App.scss';
import Content from './components/Content/content';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios('http://localhost:3000/products');

        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const addCard = () => {
    setCount(count + 1);
  };

  return (
    <main className="app">
      <Header count={count} />
      <Content title="iPhone" data={data} addCard={addCard} />
      <Content title="HUAWEI" data={data} addCard={addCard} />
    </main>
  );
};

export default App;
