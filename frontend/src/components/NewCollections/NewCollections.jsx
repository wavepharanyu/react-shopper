import React, { useState, useEffect } from 'react'
import './NewCollections.css'
import Item from "../Item/Item"
import axios from 'axios'

const NewCollections = () => {
  const [new_collections, setNewCollection] = useState([])

  const fetchNewCollections = async() => {
    let response = await axios.get('http://localhost:4000/api/product/newcollection')
    setNewCollection(response.data)
  }

  useEffect(() => {
    fetchNewCollections()
  },[])
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