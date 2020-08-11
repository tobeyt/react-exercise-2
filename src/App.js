import React, { useState, useEffect } from 'react';
import Header from './components/Header/header';
import './App.scss';
import Content from './components/Content/content';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({ iphone: [], huawei: [] });
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios('http://localhost:3000/products');
        const iphone = [];
        const huawei = [];
        result.data.forEach((cur) => {
          if (cur.category === 'iPhone') {
            iphone.push(cur);
          } else if (cur.category === 'HUAWEI') {
            huawei.push(cur);
          }
        });
        setData({ iphone, huawei });
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
      <Content title="iPhone" data={data.iphone} addCard={addCard} />
      <Content title="HUAWEI" data={data.huawei} addCard={addCard} />
      <button onClick={addCard}>test</button>
    </main>
  );
};

export default App;
