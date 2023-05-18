import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //this is how you define type for hooks.. crazy shii
  const [count, setCount] = useState<number>(2)

  // adding types to useRef.. note.. that can also be any other type
  const ref = useRef<HTMLInputElement>(null)
  interface mol{
    mol: string,
    moa: number
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  })
  class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
    }

    format() {
      return `${this.client} owes $${this.amount} for ${this.details}`;
    }
  }

  const invOne = new Invoice('mario', 'work on the mario website', 250);
  console.log(invOne.format());
  
  // basically created type over here
  let invoices: Invoice[] = [];
  invoices.push(invOne)
  return (
    <>
      <div>
        {/* <input type='image' ref={ref} /> */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count * 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
