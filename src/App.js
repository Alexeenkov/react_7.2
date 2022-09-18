import React from 'react';
import './App.css';
import data from './data/data';
import List from './components/List/List';

export default function App() {

  return (
    <List list={data} />
  );
}