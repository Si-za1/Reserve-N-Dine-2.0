import React , {useState, useEffect}from 'react';
import {Button} from '../../Button';
import {Link, useHistory} from 'react-router-dom';
import './Login.css'

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push("/menu")
        }
    }, [])
    async function login(){
        let item={email,password};
        let result=await fetch('https://28392f45-ac2d-4f82-8e71-87d13d48207f.mock.pstmn.io',{
            method:'POST',
            headers:{
                "Content-type":'application/json',
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/menu")
    }
    return(
        <div className='footer-container1'>
        <section className='footer-subscription1'>
        <p className='footer-subscription-heading1'>
          Welcome!
        </p>
        <div className='input-areas1'>
          <form>
            <input
              className='footer-input1'
              name='email'
              value ={email}
              onchange={(e)=>setEmail(e.target.value)}
              type='email'
              placeholder='Your Email'
            /> <hr></hr>
            <br></br>
             <input
              className='footer-input1'
              name='password'
              value ={password}
              onchange={(e)=>setPassword(e.target.value)}
              type='password'
              placeholder='Your password'
            /> <hr></hr>
            <br/>
            <br/>
             <Link to='/register' className='footer-subscription-text1' >
              Forgot Password?
            </Link>
            <br/>
            <br></br>
            <Button onclick ={login}buttonStyle='btn--outline'>Login </Button>
            <br></br>
            <br/>
           
          </form>
        </div>
      </section>
         <br>
         </br>
       </div>
    );
}

export default Login;
