import './App.css'
import AllUsers from './AllUsers';
import React, { useState, useEffect } from 'react';
import Header from './Header';

export default function App() {
  return (
    <main className="container">
      <Header/>
       <AllUsers/>
    </main> 
  );
}