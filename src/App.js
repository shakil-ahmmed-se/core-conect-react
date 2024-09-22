import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Alomgir', 'Bapparaj', 'Jasim', 'Shuvo','Shakil']
  const products = [
    {name:'Photoshope', price:'$99.99'},
    {name:'Illustrator', price:'$100'},
    {name:'Adobe Reader', price:'$78'},
    {name:'Adobe XD', price:'$78'},
  ]

  // const productName = products.map(product => product.name);
  // console.log(productName);
  // const nayokNames = nayoks.map(nayok => <li>{nayok}</li>)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done for react add  <code>src/App.js</code> and save to reload repository.
        </p>
        <Count></Count>
        <Users></Users>
        <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name }</li>)
        }
      </ul>
        <h1>add some thing here </h1>

     

        <p style={{color:'white', backgroundColor:'orange', fontSize:25}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque provident beatae ab laudantium quae aspernatur dicta deleniti dolore corporis. Nostrum a provident nesciunt fuga voluptatum voluptatem deleniti quo iste eos.</p>

        {
          products.map( product => <Product name ={product.name} price = {product.price}></Product>)
        }
{/* 
        <Product name ={products[0].name} price = {products[0].price}></Product>
        <Product name ={products[1].name} price = {products[1].price}></Product> */}

       <Person name ="Rubel Nayok"></Person>
       <Person name="Mannan Bhai"></Person>
       <Person name="Sakib Khan"></Person>
       <Person name="Ahmmed Khan"></Person>
       
      </header>
    </div>
  );
}

function Count(){

  const [count , setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count -1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
          
        }
      </ul>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
      borderRadius : '5px',
      backgroundColor: 'lightgray',
      heigth : '200px',
      width : '400px',
      float : 'left',
      padding: '20px',
      color:'black',
      margin:'10px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h4>Price:{props.price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props){
  const PersonStyle = {
    border : '2px solid red',
    margin : '10px',
    padding : '10px',
    width : '500px',
 

  }
  return (
  <div style={PersonStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of the year</h3>
  </div>
  

  );
}

export default App;
