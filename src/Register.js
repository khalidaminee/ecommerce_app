import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Register(){
    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email");
    const [password, setPassword] = useState("password");
    const navigate = useNavigate();

    async function signUp(){
        
        let item = {name, email, password};
      
        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              
            },
            body: JSON.stringify(item)

        });
        result = await result.json();
        console.warn('result', result)
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/addProduct");
    }
    return (
        <div className='col-sm-6 offset-sm-3'>
            <h1>
                Sign Up A User
            </h1>
            <div>
                <Form>

                    {/* <Form.Control type="hidden" name="_token" value={csrfToken}  /> */}
                    <Form.Group className="mb-3" controlId="formBasicText">
                    

                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder="Enter Your Name" />
                     
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                  
                    <Button variant="primary"  onClick={signUp}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default Register;
