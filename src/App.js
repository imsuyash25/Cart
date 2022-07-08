import * as React from "react";
import './index.css';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

class App extends React.Component{
  constructor(){
    super();
    this.state ={
        products : [
           /* {
            price:999,
            title: "Mobile Phone",
            qty:1,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC-1rXmXSXpVqxYr_PEVviFj8PfXQn_t_PHz7j9ytJS8YOt5_ySs8IirTM4klFRauJtA&usqp=CAU',
            id :1,
            count_like:0,
            like:false,
            src:"https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
            },
            {
            price:99,
            title: "Watch",
            qty:1,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGT4S4ghQVXpOWDQ7XgojB7GsLMbyhvNQYA&usqp=CAU',
            id:2,
            count_like:0,
            like:false,
            src:"https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
            },
            {
            price:9999,
            title: "Laptop",
            qty:1,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlABIEPOyTnCC1sSFzIg_6E4o_3fpJ9e-Erw&usqp=CAU',
            id:3,
            count_like:0,
            like:false,
            src:"https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
            }*/
        ],
        loading : true
    }
    this.db = firebase.firestore();
}

componentDidMount (){
  this.db.collection('products')
  .onSnapshot((snapshot)=>{
    console.log(snapshot);

    snapshot.docs.map((doc)=>{
      console.log(doc.data());
      return '';
    });

    const products = snapshot.docs.map((doc)=>{
      const data = doc.data();
      data['id'] = doc.id
      return doc.data();
    })

    this.setState({
      products,
      loading :false
    })
  })
}
handleIncreaseQty= (product)=>{
    console.log('heyy please inc the qty', product);
    const { products }  = this.state;
    const index = products.indexOf(product);
    /*products[index].qty += 1;
    this.setState({
        products 
    })*/
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef 
    .update({
      qty : products[index].qty+1
    })
    .then(()=>{
      console.log("increase succefully");
    })
    .catch((error)=>{
      console.log("Error",error);
    })
}
handleDecreaseQty = (product)=>{
    
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return
    }
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
    .update({
      qty : products[index].qty-1
      })
    .then(()=>{
      console.log("Decreased successfully");
    })
    /*this.setState({
        products
    })*/
}
handleDeletePrd = (id)=>{
    
    const {products} = this.state;
    //const items = products.filter((item)=> item.id !== id); // return array of products not equal to id
    /*console.log("item deleted", id)
    this.setState({
        products: items
    })*/
    const docRef = this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log("Deleted successfully");
    })
    .catch((error)=>{
      console.log("Error",error);
    })
}   
handlelikes =(product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);
    if (products[index].like){
        products[index].count_like -= 1;
        products[index].like = false;
        products[index].src = "https://cdn-icons-png.flaticon.com/128/1077/1077035.png";
      }
    else{
          products[index].count_like +=1; 
          products[index].like = true;
          products[index].src = "https://cdn-icons-png.flaticon.com/128/2107/2107845.png";
      }
      
      this.setState({
          products
      })
}
getCartCount =()=>{
  const {products} = this.state;
  let count = 0;
  products.forEach((product)=>{
    count += product.qty; 
  })
  return count;
}
getCartCount2 =()=>{
  const {products} = this.state;
  let count = 0;
  products.forEach((product)=>{
    count += product.count_like; 
  })
  return count;
} 
getCartTotal =()=>{
  const {products} = this.state;
  let total = 0;
  products.map((prod) => {
    if (prod.qty >0){
      total = total+(prod.qty * prod.price);
    }
    return '';
  })
  return total;
}

addProduct =()=>{
  this.db.collection('products')
   .add({
     img:'',
     price:900,
     title: 'Waching machine',
     qty:2,
     like:false,
    count_like:0
   })

   .then((doc)=>{
      console.log("Product ahs been added", doc);
   })

   .catch((error)=>{
     console.log("Error",error)
   })
}

render(){
  const {products, loading} = this.state;
      return (
        <div className="App">
        <Navbar count ={this.getCartCount()} 
        count2={this.getCartCount2()}/>
       {/* <button onClick={ this.addProduct}>Add Product</button>*/}
        <Cart 
        products = {products}
        onIncreaseQty = {this.handleIncreaseQty}
        onDecreaseQty = {this.handleDecreaseQty}
        onDeletePrd = {this.handleDeletePrd}
        onLiked = {this.handlelikes}
        />
        { loading && <h1>Loading products</h1>}
        <div style={{padding:10, fontSize:20 }} >Total: {this.getCartTotal()}</div>
        </div>
  
      );
    }
}
export default App;