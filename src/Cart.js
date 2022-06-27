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
                id :1
                },
                {
                 price:99,
                title: "Watch",
                qty:1,
                img:'',
                id:2
                },
                {
                    price:9999,
                title: "Laptop",
                qty:1,
                img:'',
                id:3
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
                              />
                        )
                    })
                }
            </div>
        );
    }
}

export default Cart;