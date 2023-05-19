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
  interface hasFormatter {
    format(): string
  }

  // Generics
const addUid = <T extends object>(obj: T)=>{
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUid({name: "yahs", age: 10});
console.log(docOne.name);//this works because of the extends keyword and the obj attached to it
console.log(docOne.name); // wouldnt work if the it didnt extend anything, or if it extended like a string

interface Reference<T> {
  uid: number;
  resourceName: string;
  data: T;
  //if you wanted to use different types for the data element, you would just need to declare the type as a generic type
  //like Reference<T> and data: T; so this way, the type for element(data) can be whatever is passed
  //in as the reference type
}

let docTwo: Reference<string> = {
  uid: 3,
  resourceName: 'jakems',
  data: 'this can be a string'
}

let docThree: Reference<object> = {
  uid: 1,
  resourceName: 'asaa',
  data: {
    or: 'this can',
    be: 'an object',
  }
}

console.log(docTwo, docThree);


//ENUMS- allows for storage of constants and keywords and associate them with numeric value

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface EnumReference<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

let docFour: EnumReference<string> = {
  uid: 9,
  data: 'jkjm',
  resourceName: ResourceType.AUTHOR
  //you'd think it would retirn book but nah.. it returns the index of book in the ResourceType
}

console.log(docFour);


//Tuples

let arr = [true, 'rin', 70];
arr[1] = false;
arr[0] = 'vic';

// array values or elements can be changed by setting them to different values 
//this is not the case in Tuples, when the elemnts in a tuple have been defined, its type cannot be changed

let tup: [string, number, boolean] = ['asaas', 1222, false]
tup[0] = 'asd'; //this works because they have the same different
// tup[1] = false; //this doesnt because of the boolean data type and tup[1] requires a number



  class Invoice implements hasFormatter {
    readonly client: string;
    public details: string;
    private amount: number;

    constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
    }
    //the format method becomes required because the interface that this implements has it
    format() {
      return `${this.client} owes $${this.amount} for ${this.details}`;
    }
  }
  const invOne = new Invoice('mario', 'work on the mario website', 250);
  let doc: hasFormatter[] = [];
  doc.push(invOne);
  //amount is private and can only be used within class
  // console.log(invOne.details, invOne.amount);
  // the public private readonly "modifiers" cannot be used to declarre variables
  // public let modify = "asd";
  
  // basically created type over here
  let invoices: Invoice[] = [];
  invoices.push(invOne)
  throw new Error("Something went wrong!");
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
