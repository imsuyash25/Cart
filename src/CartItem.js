import React from 'react';


class CartItem extends React.Component{
    //We have replace it in cart
    
   // increaseQty =()=>{
        //this.state.qty += 1;react do not know is state updating 
        //thats why we need tell react by setState()
        
       // console.log('this.state',  this.state)
        //setState form 1
        //this.setState({
          // title : "Samsung Galaxy"
        //});
        //form 2
       // this.setState(
          ///  (prevState)=> {
            //    return{
            //        qty : prevState.qty + 1
              //  }
            //});
    //}
    //decreaseQty(){
       // const {qty} = this.state;   //destructuring
       // if (qty === 1  ){
          //  return window.alert("item cant be zero")
      /*   }
        //this.state.qty -= 1
        
        //this is asynchronous becoz we dont know when log wali command update hogi isiliye second parameter me callback func use krte h
        this.setState((prevState)=>{
                return{
                    qty: prevState.qty - 1
                }
        },()=>{
            console.log('this.decrese', this.state)
        });*/
    
    render(){
        const { price, title, qty}= this.props.product;
        
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image } alt="" />
                </div>  
                <div className="right-block">
                    <div style={{ fontSize:25}}>{title}</div>
                    <div style={{ color:'#777'}}>Rs:{price}</div>
                    <div style={{ color:'#777'}}> qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                        onClick = {()=> this.props.onIncreaseQty(this.props.product)} 
                        />

                        <img alt="decrease"
                         className="action-icons"
                          src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                        onClick = {()=> this.props.onDecreaseQty(this.props.product)}   
                        />

                        <img alt="delete"
                         className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                        onClick = {()=> this.props.onDeletePrd(this.props.product)}
                        />
                    </div>  
                </div>
            </div>
        );
    }
}

const styles ={
    image: {
        height:110,
        width:110,
        borderRadius:4
    }
}
export default CartItem;