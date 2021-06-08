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
      <div className='footer-container1'>
      <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Register to our site to get the exclusive membership and recieve many offers and discount
      </p>
      <p className='footer-subscription-text'>
        You can Logout at any time.
      </p>
      <div className='input-areas'>
        <form>
        <input
            className='footer-input'
            name='name'
            value ={name}
            onchange={(e)=>setName(e.target.value)}
            type='text'
            placeholder='Your Name'
          />
          <input
            className='footer-input'
            name='email'
            value ={email}
            onchange={(e)=>setEmail(e.target.value)}
            type='email'
            placeholder='Your Email'
          />
           <input
            className='footer-input'
            name='password'
            value ={password}
            onchange={(e)=>setPassword(e.target.value)}
            type='password'
            placeholder='Your password'
          />
           <input
            className='footer-input'
            name='Confirm Password'
            value ={repassword}
            onchange={(e)=>setRepassword(e.target.value)}
            type='password'
            placeholder='Confirm Password'
          />
          <Button onclick={SignUp} buttonStyle='btn--outline'>SignUp</Button>
        </form>
      </div>
    </section>
       <br>
       </br>
     </div>
  );
}

export default Register;