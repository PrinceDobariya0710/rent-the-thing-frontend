import React,{useEffect,useState} from 'react';
import './ManageProduct.css';
import axios from 'axios';

export const ManageProduct = () => {
  const [ManageProductData,setManageProductData]=useState()
  const [isDuration,setisDuraction] = useState()
  const getCategory = async() =>{
    let res = await axios.get(`http://localhost:8080/products/subcategory/all`)
    setManageProductData(res.data)  
    console.log(ManageProductData)
  }
  const getDuration = async() =>{
    let res = await axios.get(`http://localhost:8080/products/duration/all`)
    setisDuraction(res.data)  
    console.log(isDuration)
  }
  useEffect(() => {
    getCategory()
    getDuration()
  }, );

  return (
    <main className='mainpr'>
        <section className='maincontainer'>
            
                <h1>Product Inventory</h1>
                <hr></hr>
                <form className='form1'>
                <section className='containerpr'>
                  <section className='data'>
                    <select className='inputbox'>
                    <option>---select---</option>
                      {ManageProductData?.map((item) => (
                        <option value={item.id}>{item.subCategory_name}</option>
                      ))}
                    </select><br></br><br></br>
                    <label>Product Name</label> <br></br><input type='text' className='inputbox'/><br></br>
                    <label>Product Rate</label> <br></br><input type='number' className='inputbox'/><br></br>
                    <label>Product Description</label> <br></br><input type='text' className='inputbox'/><br></br>
                    <select className='inputbox'>
                    <option>---select---</option>
                      {isDuration?.map((item) => (
                        <option value={item.id}>{item.duration}</option>
                      ))}
                    </select><br></br>
                    <label>Duration Rate</label> <br></br><input type='number' className='inputbox'/><br></br>
                    </section>
                    <section className='uploadimage'>
                    <label>Duration Rate</label> <br></br><input type='number' className='inputbox'/><br></br>
                    <label>Available Pieces</label> <br></br><input type='number' className='inputbox'/><br></br>
                    <label>Deposite</label> <br></br><input type='number' className='inputbox'/><br></br>
                    <label>Size</label> <br></br>
                    <select className='inputbox'>
                      <option>---select---</option>
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </select>
                    <br></br>
                    <label>Upload Product Image</label><br></br><input type="file" className='inputbox'/><br></br>
                    </section>  
                    </section>
                    <input type="submit" value="Add Product" className='btn'/>
                    <input type="submit" value="Update Product" className='btn'/>
                    <input type="submit" value="Delete Product" className='btn'/>
                </form>
            </section>
    </main>
)}
