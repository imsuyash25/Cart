import React from 'react';


class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image } alt="" />
                </div>  
                <div className="right-block">
                    <div style={{ fontSize:25, color:'red'}}>Phone</div>
                    <div style={{ fontSize:25, color:'red'}}>Rs 999</div>
                    <div style={{ fontSize:25, color:'red'}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
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