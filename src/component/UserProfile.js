import React, { useState, useContext } from 'react';
import './Userprofile.css';
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';

export const UserProfile = () => {
  const {isToken,userid,setuserid} = useContext(LoginContext)

  const [state, setState] = useState(
    {
      firstName: '',
      lastName: '',
      orgName: '',
      website: '',
      dob: ''
    })
  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  console.log(isToken)
  console.log(userid) 
  const addData = async (e) => {
    e.preventDefault()
    // console.log("added")
    let detail = {
      firstName: state.firstName,
      lastName: state.lastName,
      orgName: state.orgName,
      website: state.website,
      dob: state.dob
    }
    const create = axios.create({
      baseURL: `http://localhost:8080/user-profile-service/register/profiledata/`,
      timeout: 1000*60*60,
      headers: {'Authorization': 'Bearer '+isToken}
    });

    let res = await create.post(``,detail)
    console.log(res.data.userDetailsId)
    setuserid(res.data.userDetailsId)
  }
  const getuserid = (id) =>
  {

        const create = axios.create({
            baseURL: `http://localhost:8080/user-profile-service/get/user_details/?user_id=${id}`,
            timeout: 1000*60*60,
            headers: {'Authorization': 'Bearer '+isToken}
          });
          let res = create.get(``)
          console.log(res.data)
          setuserid(res.data)
    }
  return (
    <main className='usermain'>
      <section className='detailcontainer'>
          <section className='userdetail'>
            <form className='userform'>
              <label>FirstName : </label>
              <input type="text" className='inputbox' name='firstName' value={state.firstName}  onChange={handleChange} /><br></br>
              <label>LastName : </label>
              <input type="text" className='inputbox' name='lastName' value={state.lastName} onChange={handleChange} /><br></br>
              <label>OrgName : </label>
              <input type="text" className='inputbox' name='orgName' value={state.orgName} onChange={handleChange} /><br></br>
              <label>Website : </label>
              <input type="text" className='inputbox' name='website' value={state.website} onChange={handleChange} /><br></br>
              <label>BirthDate : </label>
              <input type="date" className='inputbox' name='dob' value={state.dob} onChange={handleChange} /><br></br>
              <input type="submit" value="AddDetail" onClick={addData} />
            </form>
          </section>
          <section className='navigationcontainer'>

          </section>
      </section>
    </main>
  )
}
