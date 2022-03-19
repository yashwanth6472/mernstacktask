import React, { useState } from 'react'
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import {faMailForward, faKey, faMailBulk} from "@fortawesome/free-solid-svg-icons"
import { Box, TextField, InputProps, InputAdornment, Button } from '@material-ui/core'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
      const [email, setEmail] = useState()
      const [password, setPassword] = useState()
  const navigate = useNavigate()
      const submitHandler = (e) =>{
        e.preventDefault()

        axios.post("http://localhost:5000/user/signIn", {
            email:email.trim(),
            password:password.trim()
        })
        .then((result)=>{console.log(result.data)
        alert(result.data.message)
        navigate(`/home/${email}`)
      }
        
        )
        .catch((error)=>console.log(error.message))
      }
    return (
    <Box style={{display:"flex", flexDirection:"column", width:"50%", marginLeft:"auto", marginRight:"auto", marginTop:"10%"}}>
        <TextField
        style={{marginTop:"2rem"}}
            
            label="Email"
            variant="standard"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={faMailBulk}
                  ></FontAwesomeIcon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
          style={{marginTop:"2rem"}}
            type={"password"}
            label="Password"
            variant="standard"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={faKey}
                  ></FontAwesomeIcon>
                </InputAdornment>
              ),
            }}
          />
          <Button style={{marginTop:"2rem", width:"30%"}} variant="contained" color="primary" onClick={submitHandler}>Login</Button>
          <p>
            For SignUp <Link to="/user/Register">Click Here</Link>
          </p>
    </Box>
  )
}

export default SignIn