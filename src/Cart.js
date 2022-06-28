import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component{
    constructor(){
        super();
        this.state ={
            products : [
                {
                    price:999,
                title: "Mobile Phone",
                qty:1,
                img:'',
                id :1,
                count_like:0,
                like:false,
                src:"https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                },
                {
                 price:99,
                title: "Watch",
                qty:1,
                img:'',
                id:2,
                count_like:0,
                like:false,
                src:"https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                },
                {
                    price:9999,
                title: "Laptop",
                qty:1,
                img:'',
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
    render(){
        const {products} = this.state;
        
        return(
            <div className="cart" >
               
                { 
                    products.map((product)=>{
                        return(
                             <CartItem product={product}
                              key={product.id}
                              onIncreaseQty = {this.handleIncreaseQty}
                              onDecreaseQty = {this.handleDecreaseQty}
                              onDeletePrd = {this.handleDeletePrd}
                              onLiked = {this.handlelikes}
                              />
                        )
                    })
                }
            </div>
        );
    }
}

export default Cart;