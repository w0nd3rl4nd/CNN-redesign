import './App.css'
import React, { useEffect, useState } from 'react';
import Breaking from './components/Breaking.jsx';
import Currently from './components/Currently.jsx';
import Section from './components/Section.jsx';

function App() {
  const [breaking, setBreaking] = useState([]);
  const [currently, setCurrently] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/cnn-news-1', {
      mode: 'cors',
      headers: { 'Access-Control-Allow-Origin': '*'}
    })
      .then((res) => res.json())
      .then((data) => setBreaking(data))
      .catch((err) => console.error("Error fetching news: ", err))
  }, []);

  useEffect(() => {
      fetch('http://127.0.0.1:5000/cnn-news-5', {
        mode: 'cors',
        headers: { 'Access-Control-Allow-Origin': '*'}
      })
        .then((res) => res.json())
        .then((data) => setCurrently(data))
        .catch((err) => console.error("Error fetching news: ", err))
    }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/cnn-news-15', {
      mode: 'cors',
      headers: { 'Access-Control-Allow-Origin': '*'}
    })
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching news: ", err))
  }, []);

  if (breaking.length < 1) {
    return <div style={{ textAlign: 'center', marginTop: 50}}>Loading...</div>
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: 20}}>
        <Breaking data={breaking[0]}/>
        <p>------------------------------------</p>
        <Currently data={currently.slice(1,5)}/>
        <p>------------------------------------</p>
        <Section header={news[5]} items={news.slice(6,10)}/>
        <p>------------------------------------</p>
        <Section header={news[10]} items={news.slice(11,15)}/>
      </div>
    </>
  );
}

export default App
