import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //this is how you define type for hooks.. crazy shii
  const [count, setCount] = useState<number>(2)

  // adding types to useRef.. note.. that can also be any other type
  const ref = useRef<HTMLInputElement>(null)
  //interfaces, similar to classes but you cannot create new instances
  // they are only used to create structure
  //like if we a varibale in the future and it's declaring itself to be an isPerson
  //then it must have these properties and methods
  interface isPerson {
    name: string;
    age: number;
    speak(a: string): void; // must not have a return value
    spend(b: number): number; // must return number
  }

  const me: isPerson = {
    name: 'Paul',
    age: 29,
    speak(text: string): void{
      console.log(text);
    },
    spend(amount: number): number{
      console.log(`You have spent ${amount} here today`);
      return amount;      
    }
  }

  const greetPerson = (person: isPerson) => {
    console.log('hello ' + person.name);
    console.log('i know you are ' + person.age);
    person.speak('how far now?');
    person.spend(4000);
  }

  greetPerson(me)
  

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  })
  class Invoice {
    readonly client: string;
    public details: string;
    private amount: number;

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
  //amount is private and can only be used within class
  // console.log(invOne.details, invOne.amount);
  // the public private readonly "modifiers" cannot be used to declarre variables
  // public let modify = "asd";
  
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
