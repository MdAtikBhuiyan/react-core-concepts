import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ["Anwar","Jafor","Alamgir","Salman Sha","Alamgir","bapparaz"];
  const products = [
    {name:'photoshop',price:'$90.99'},
    {name:"Illustrator",price:'$60.99'},
    {name:"Pdf Reader", price:"$6.99"},
    {name: 'Premiere EL', price:'$56.89'}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  const nayokNames = nayoks.map( nayok => nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <User></User>
        <ul>
          {
            nayoks.map(nayok => <li> {nayok} </li>)
          }
          {
            products.map(product => <li>  {product.name} </li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}> </Product>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1); 
  return(
    <div>
      <h1>Count : {count} </h1>
      <button onMouseMove={() => setCount(count -1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height:"250px",
    width:'250px',
    float: "left"
  }
  console.log(props);
  const {name, price} = props.product;
  console.log(name,price);
  return(
    <div style={productStyle}>
      <h3> Name: {props.product.name}</h3>
      <h4>{name}</h4>
      <h5> Price: {price} </h5>
      <button> Buy Now</button>
    </div>
  )
}


function User(){
  const [users, setusers] = useState([]);
  useEffect( () => {
    // console.log('calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setusers(data))
  },[])
  return(
   <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
   </div>
  )
}

function Person(props){
  return (
    <div style ={{border:'2px solid gold', width:'400px', margin:'20px'}}>
        <h3> My Name : {props.name} </h3>
        <p> My Profession : {props.job}</p>
    </div>
  )
}

export default App; 
