import * as React from "react";
import './index.css';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component{
  constructor(){
    super();
    this.state ={
        products : [
            {
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
            }
        ]
    }
}
handleIncreaseQty= (product)=>{
    console.log('heyy please inc the qty', product);
    const { products }  = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products 
    })
}
handleDecreaseQty = (product)=>{
    console.log('hey', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return
    }
    products[index].qty -= 1;

    this.setState({
        products
    })
}
handleDeletePrd = (id)=>{
    
    const {products} = this.state;
    const items = products.filter((item)=> item.id !== id); // return array of products not equal to id
    console.log("item deleted", id)
    this.setState({
        products: items
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
          products[index].src = "https://cdn-icons.flaticon.com/png/128/2589/premium/2589175.png?token=exp=1656413900~hmac=38f2a43bf00e26f9f6a2bee49f6fe20d";
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

render(){
  const {products} = this.state;
      return (
        <div className="App">
        <Navbar count ={this.getCartCount()} 
        count2={this.getCartCount2()}/>
        <Cart 
        products = {products}
        onIncreaseQty = {this.handleIncreaseQty}
        onDecreaseQty = {this.handleDecreaseQty}
        onDeletePrd = {this.handleDeletePrd}
        onLiked = {this.handlelikes}
        />
        <div style={{padding:10, fontSize:20 }} >Total: {this.getCartTotal()}</div>
        </div>
  
      );
    }
}
export default App;