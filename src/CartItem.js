import React from 'react';


//class CartItem extends React.Component{
const CartItem =(props)=> {
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
    
    
        const { price, title, qty,count_like, src}= props.product;
        
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image } alt="" />
                </div>  
                <div className="right-block">
                    <div style={{ fontSize:25}}>{title}</div>
                    <div style={{ color:'#777'}}>Rs:{price}</div>
                    <div style={{ color:'#777'}}> qty: {qty}</div>
                    <div style={{ color:'#777'}}> Like by {count_like} people</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="Like" id="liked"
                         className="action-icons"
                        src={src} 
                       // src ="https://cdn-icons.flaticon.com/png/128/2589/premium/2589175.png?token=exp=1656413900~hmac=38f2a43bf00e26f9f6a2bee49f6fe20d"
                        onClick = {()=> props.onLiked(props.product)}
                        />
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                        onClick = {()=> props.onIncreaseQty(props.product)} 
                        />

                        <img alt="decrease"
                         className="action-icons"
                          src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                        onClick = {()=> props.onDecreaseQty(props.product)}   
                        />

                        <img alt="delete"
                         className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                        onClick = {()=> props.onDeletePrd(props.product.id)}
                        />
                       
                    </div>  
                </div>
            </div>
        );
    
}

const styles ={
    image: {
        height:110,
        width:110,
        borderRadius:4
    }
}
export default CartItem;