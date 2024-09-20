import React from 'react'
import './NewCollections.css'
import Item from "../Item/Item"
import new_collections from './../../assets/new_collections';

const NewCollections = () => {
  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections