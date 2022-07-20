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
  let productid
  const [state, setState] = useState(
  {
    userDetailsId:{
    userDetailsId:''},
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
    console.log(ManageProductData)
  }
  const getDuration = async() =>{
    let res = await axios.get(`http://localhost:8080/products/duration/all`)
    setisDuraction(res.data)  
    console.log(isDuration)
  }

  const viewProduct = (id) =>
  {
    console.log(id)
    navigate(`/ownerproduct/${id}`)
  }
  const formData = new FormData();
  const handleImageChange = (e) =>
  {
    formData.append("file",e)
  }
  const addproduct = async(e) =>
  {
    e.preventDefault();

    console.log('add')
    let detail =
    {
      userDetailsId:{
        userDetailsId:userdetailId},
        productName:state.productName,
        value_duration:state.value_duration,
        product_description:state.product_description,
        product_image:'',
        deposit:state.deposit,
        available_pieces:state.available_pieces,
        product_rate:state.product_rate,
        productDetail:state.productDetail,
        subcategory:{
          id:state.subcategory
        },
        productDurationRates:{
          id:state.productDurationRates
        },
        size:state.size
    }
    console.log(detail)
    const create = axios.create({
      baseURL: `http://localhost:8080/products/cloth-product/add/cloth-product/`,
      timeout: 1000*60*60,
      headers: {'Authorization': 'Bearer '+isToken}
    });
    let res = await create.post(``,detail)
    console.log(res.data)
    console.log(res.data.data.product.id)
    productid = res.data.data.product.id
    addImage(productid)
    // userdetailid = res.data.userDetailsId
  }
  const addImage = async(id) =>
  {
    const create = axios.create({
      baseURL: `http://localhost:8080/products/product/update-image/?id=${id}`,
      timeout: 1000*60*60,
      headers: {'Authorization': 'Bearer '+isToken}
    });
    let res = await create.patch(``,formData)
    console.log(res.data)
    console.log(res.data.product.id)
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
      subcategory:e.target.value
    }))
  }
  const handleproductduration = (e) => {
    setState((prevState) => ({
      ...prevState,
      productDurationRates:e.target.value
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
                    <select className='inputbox' onChange={(e) => handleSubcategory(e)} >
                    <option>---select---</option>
                      {ManageProductData?.map((item) => (
                        <option value={item.id}>{item.subCategory_name}</option>
                      ))}
                    </select><br></br><br></br>
                    <label>Product Name</label> <br></br><input type='text' value={state.productName} name="productName" className='inputbox' onChange={handleChange} /><br></br>
                    <label>Product Rate</label> <br></br><input type='number' value={state.product_rate} name="product_rate" className='inputbox' onChange={handleChange}/><br></br>
                    <label>Product Description</label> <br></br><input type='text' value={state.product_description} name="product_description" className='inputbox' onChange={handleChange}/><br></br>
                    <select className='inputbox' onChange={handleproductduration} >
                    <option>---select---</option>
                      {isDuration?.map((item) => (
                        <option value={item.id}>{item.duration}</option>
                      ))}
                    </select><br></br>
                    {/* <label>Duration Rate</label> <br></br><input type='number' className='inputbox' onChange={handleChange}/><br></br> */}
                    </section>
                    <section className='uploadimage'>
                    <label>Product Detail</label> <br></br><input type='text' value={state.productDetail} name="productDetail" onChange={handleChange} className='inputbox'/><br></br>
                    <label>Duration Rate</label> <br></br><input type='number' value={state.value_duration} name="value_duration" onChange={handleChange} className='inputbox'/><br></br>
                    <label>Available Pieces</label> <br></br><input type='number' value={state.available_pieces} name="available_pieces" onChange={handleChange} className='inputbox'/><br></br>
                    <label>Deposite</label> <br></br><input type='number' value={state.deposit} name="deposit" onChange={handleChange} className='inputbox'/><br></br>
                    <label>Size</label> <br></br>
                    <select className='inputbox' onChange={handleChange} name="size">
                      <option>---select---</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <br></br>
                    <label>Upload Product Image</label><br></br><input type="file" className='inputbox' onChange={(e)=>handleImageChange(e.target.files[0])}/><br></br>
                    </section>  
                    </section>
                    <input type="submit" value="Add Product" className='btn' onClick={(e)=>addproduct(e)}/>
                    <input type="submit" value="Update Product" className='btn'/>
                    <input type="submit" value="Delete Product" className='btn'/>
                    <input type="submit" value="View Product" className='btn' onClick={() => viewProduct(userdetailId)}/>
                </form>
            </section>
    </main>
)}
