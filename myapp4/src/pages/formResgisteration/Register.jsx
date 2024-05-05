import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Register =()=> {
const [user,setUser]=useState({email:'',password:''});
const [UserErrors,setErrors]=useState({
    emial:'',password:''
});


  const handelValidation=(e)=>{
   if(e.target.name=='email'){
setUser({...user,email:e.target.value})
setErrors({...UserErrors,email:(e.target.value.length===0)?'email is required':(e.target.value.includes('@'))?'':'email is not valid'})
   }else if(e.target.name==='password')
   {
    setUser({...user,password:e.target.value})
   }

}

const preventdefault=(e)=>{
    e.preventdefault
}


  return (
    <div className="container my-4">
    <Form onSubmit={(e)=>preventdefault(e)}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={(e)=>{handelValidation(e)}} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>
<p>{UserErrors.emial}</p>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={(e)=>{handelValidation(e)}}/>
      </Form.Group>
      <p>{UserErrors.password}</p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>


  )
}

export default Register;
