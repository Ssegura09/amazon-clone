import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>

          <CheckoutProduct
            id='11111'
            title='This is a test'
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            price={199.99}
            rating={5}
          />

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
