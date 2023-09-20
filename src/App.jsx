import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Quote from './Quote'

function App() {
  const [quote,setQuote] = useState({
    text:'Without hard work, nothing grows but weeds',
    author:'Yolanda Hadid'
  })
  const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote({ text: data.content, author: data.author });

  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-gray-800 h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl text-slate-200 shadow-sm">Random QuoteGenrator</h1>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl" onClick={getQuote}>Get Quote</button>
      </div>
      <Quote text={quote.text} author={quote.author} />
    </div>
  );
}

export default App
