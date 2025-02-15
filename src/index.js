import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Count from './CounterWithCreateElement'
import reportWebVitals from './reportWebVitals';
import GenreSearch from './GenreSearch';
import SearchForm from './SearchForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
const initialValue = 0;
root.render(
  <React.StrictMode>
   <Count initialValue={initialValue} />
    <SearchForm />
    <GenreSearch />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();