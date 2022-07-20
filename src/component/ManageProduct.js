import React,{useEffect,useState,useContext} from 'react';
import './ManageProduct.css';
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';
import { useParams,useNavigate } from 'react-router-dom';

export const ManageProduct = () => {
  const {isToken, userid, userdetailId} = useContext(LoginContext)
  const [ManageProductData,setManageProductData]=useState()
  const [isDuration,setisDuraction] = useState()
  const navigate = useNavigate()
  const [state, setState] = useState(
  {
    userDetailsId:{
      userDetailsId:''
    },
    productName:'',
    value_duration:'',
    product_description:'',
    product_image:'',
    deposit:'',
    available_pieces:'',
    product_rate:'',
    productDetail:'',
    subcategory:{
      id:''
  },
  productDurationRates:{
      id:''
  },
  size:''
  })
  const getCategory = async() =>{
    let res = await axios.get(`http://localhost:8080/products/subcategory/all`)
    setManageProductData(res.data)  
    // console.log(ManageProductData)
  }
  const getDuration = async() =>{
    let res = await axios.get(`http://localhost:8080/products/duration/all`)
    setisDuraction(res.data)  
    // console.log(isDuration)
  }

  const viewProduct = (id) =>
  {
    console.log(id)
    navigate(`/ownerproduct/${id}`)
  }
  const addproduct = async() =>
  {
    let detail =
    {
      
    }
    const create = axios.create({
      baseURL: `http://localhost:8080/user-profile-service/register/profiledata/`,
      timeout: 1000*60*60,
      headers: {'Authorization': 'Bearer '+isToken}
    });
    let res = await create.post(``,detail)
    console.log(res.data.userDetailsId)
    // userdetailid = res.data.userDetailsId
  }
  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubcategory = (e) => {
    setState((prevState) => ({
      ...prevState,
      subcategory:{
        id:e.target.value
    },
    }))
  }
  const handleproductduration = (e) => {
    setState((prevState) => ({
      ...prevState,
      productDurationRates:{
        id:e.target.value
    }
    }))
  }
  useEffect(() => {
    getCategory()
    getDuration()
  },[] );

  return (
    <main className='mainpr'>
        <section className='maincontainer'>
          <h1>Product Inventory</h1>
            <hr></hr>
                <form className='form1'>
                <section className='containerpr'>
                  <section className='data'>
                    <select className='inputbox' onChange={handleSubcategory} >
                    <option>---select---</option>
                      {ManageProductData?.map((item) => (
                        <option value={item?.subcategory?.id}>{item.subCategory_name}</option>
                      ))}
                    </select><br></br><br></br>
                    <label>Product Name</label> <br></br><input type='text' name="productName" className='inputbox' onChange={handleChange} /><br></br>
                    <label>Product Rate</label> <br></br><input type='number' name="product_rate" className='inputbox' onChange={handleChange}/><br></br>
                    <label>Product Description</label> <br></br><input type='text' name="product_description" className='inputbox' onChange={handleChange}/><br></br>
                    <select className='inputbox' onChange={handleproductduration}>
                    <option>---select---</option>
                      {isDuration?.map((item) => (
                        <option value={item?.productDurationRates?.id}>{item.duration}</option>
                      ))}
                    </select><br></br>
                    {/* <label>Duration Rate</label> <br></br><input type='number' className='inputbox' onChange={handleChange}/><br></br> */}
                    </section>
                    <section className='uploadimage'>
                    <label>Duration Rate</label> <br></br><input type='number' name="value_duration" onChange={handleChange} className='inputbox'/><br></br>
                    <label>Available Pieces</label> <br></br><input type='number' name="available_pieces" onChange={handleChange} className='inputbox'/><br></br>
                    <label>Deposite</label> <br></br><input type='number' name="deposit" onChange={handleChange} className='inputbox'/><br></br>
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
                    <input type="submit" value="Add Product" className='btn' onClick={addproduct}/>
                    <input type="submit" value="Update Product" className='btn'/>
                    <input type="submit" value="Delete Product" className='btn'/>
                    <input type="submit" value="View Product" className='btn' onClick={() => viewProduct(userdetailId)}/>
                </form>
            </section>
    </main>
)}
