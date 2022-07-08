import React from 'react';

const Navbar = (props)=> {
 return(
            <div style ={styles.nav}>
                <div style = {styles.cartIconContainer}>
                    <img style={styles.cartIcon} src ="https://cdn-icons-png.flaticon.com/128/2107/2107845.png" alt="liked"></img>
                    <span style={styles.cartCount2}>{props.count2}</span>
                    <img style={styles.cartIcon} src ="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart-icon"></img>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        
        );
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    },
    cartCount2: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 60,
        top: -9
    }
  };
  
  export default Navbar;