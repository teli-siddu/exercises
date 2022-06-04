import { useState } from 'react';
import {LoginUser} from './Utilities'
import './login.css'


 export default function LoginForm(){
    const [userDetails,setUserDetails]=useState({
        userName:'siddu',
        password:'siddu123'
    });
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const [respMessage,setRespMessage]=useState({message:"",hasError:null});
    const disableBtn=!userDetails.userName || userDetails.password.length<6 || loading;
    const handleInput=(e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setRespMessage({})
        setUserDetails((prevValues)=>{
            return{
                ...prevValues,
                [name]:value
            }
        })
        console.log(userDetails)
    }
    const handleLogin=async ()=>{
        
        console.log(userDetails)
        setLoading(true);
        try{
           await LoginUser(userDetails);
           setLoading(false);
           setRespMessage({message:"Login Successful",hasError:false})
        }catch(error){
            setRespMessage({message:error.message,hasError:true});
            setLoading(false);
        }
        console.log(respMessage)
    }
    return(
        <div className="login-wrapper">
            <div className='row'>
                <div className={`msg ${ respMessage.hasError==null?"":respMessage.hasError?"bg-danger":"bg-success"}`}   >{ respMessage.message}</div>
            </div>
            <div className="row">
                <div className=''>
                <label className='control-label' >User Name</label>
                <input type="text" id='userName' name="userName" className='form-control' value={userDetails.userName} placeholder="Enter User Name" onChange={handleInput} />
                </div>
            </div>
            <div className="row">
                <div className=''>
                <label className='control-label'>Password</label>
                <input type="password"  id='password' name="password"  className='form-control' value={userDetails.password} placeholder="Enter Password"  onChange={handleInput}  />
                </div>

            </div>
            <div className='row'>
                <button type='submit' className='btn btn-primary' disabled={disableBtn} onClick={handleLogin}> {loading?"Loading...":"Login"}</button>
            </div>
        </div>
    )
}

