import React , {useState}from 'react';
 import {Button} from '../../Button';
import {useHistory} from 'react-router-dom';
import './Signup.css'

function Register() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [repassword, setRepassword]=useState("");
  const history=useHistory("");

  async function SignUp(){
    let item =(name,email,password,repassword)

    let result = await fetch("https://28392f45-ac2d-4f82-8e71-87d13d48207f.mock.pstmn.io",{
    method:"POST",
    body:JSON.stringify(item),
    headers:{
      "Content-type":'application/json',
      "Accept":'application/json'
    }
  })
    result=await result.json()
    localStorage.setItem("user.info", JSON.stringify(result))
    history.pushState('/');
  }
  

  return (
      <div className='footer-container2'>
      <section className='footer-subscription2'>
      <p className='footer-subscription-heading2'>
        Register to our site to get the exclusive membership!
      </p>
      <div className='input-areas2'>
        <form>
        <input
            className='footer-input2'
            name='name'
            value ={name}
            onchange={(e)=>setName(e.target.value)}
            type='text'
            color='black'
            placeholder='Your Name'
          />
          <br/>
          <br/>
          <input
            className='footer-input2'
            name='email'
            value ={email}
            onchange={(e)=>setEmail(e.target.value)}
            type='email'
            placeholder='Your Email'
          /> 
          <br/>
          <br/>
           <input
            className='footer-input2'
            name='password'
            value ={password}
            onchange={(e)=>setPassword(e.target.value)}
            type='password'
            placeholder='Your password'
          />
          <br/>
          <br/>
           <input
            className='footer-input2'
            name='Confirm Password'
            value ={repassword}
            onchange={(e)=>setRepassword(e.target.value)}
            type='password'
            placeholder='Confirm Password'
          />
          <br/>
          <br/>
          <Button onclick={SignUp} buttonStyle='btn--outline'>SignUp</Button>
          <br/>
          <br/>
          <p className='footer-subscription-text2'>
             After signing in, you will be directed to the site!
          </p>

        </form>
      </div>
    </section>
       <br>
       </br>
     </div>
  );
}

export default Register;