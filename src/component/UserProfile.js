import React from 'react';
import './Userprofile.css';

export const UserProfile = () => {
  return (
    <main className='usermain'>
        <section className='detailcontainer'>
            <section className='detail'>
                <section className='userdetail'>
                  <form className='userform'>
                    <label>FirstName : </label>
                    <input type="text" className='inputbox'/><br></br>
                    <label>LastName : </label>
                    <input type="text" className='inputbox'/><br></br>
                    <label>OrgName : </label>
                    <input type="text" className='inputbox'/><br></br>
                    <label>Website : </label>
                    <input type="text" className='inputbox'/><br></br>
                    <label>BirthDate : </label>
                    <input type="date" className='inputbox'/><br></br>
                    <input type="submit" value="AddDetail"/>
                  </form>
                </section>
                <section className='navigationcontainer'>
                    
                </section>
            </section>
        </section>
    </main>
  )
}
