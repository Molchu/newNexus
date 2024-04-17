import React, {useState, useContext, useEffect} from 'react'
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item'

const SearchProduct = (searchText) => {
  const {all_product, SearchProduct} = useContext(ShopContext);
  return (
    <div className='searchitems'>
        {all_product.map((e) => {
            if(e.name == searchText)
            {
                return (
                    <div key={e.id}>
                        <div className='items'>
                            <img src={e.image} alt="" className='product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                );

            }
            return null;
        })}
    </div>
  )
}

export default SearchProduct