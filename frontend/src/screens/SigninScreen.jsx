import { useLocation, Link, useNavigate } from 'react-router-dom';
import { toast } from  'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {Helmet} from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useState, useContext, useEffect} from 'react';
import { Store } from '../Store';
import { getError } from '../utils';

export default function SigninScreen(){
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const { data } = await Axios.post('/api/users/signin', {
                email,
                password,
            });
            ctxDispatch({
                type: 'USER_SIGNIN',
                payload: data
            })
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/ShopApp');
        }catch (err){
            toast.error(getError(err));
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo])

    return (
        
        <Container className='small-container'>
            <ToastContainer position="bottom-center" limit={1} />
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <h1 style= {{color: 'green'}} className="my-3">Sign In </h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId='email'>
                    <Form.Label style= {{color: 'green'}}>Email</Form.Label>
                    <Form.Control type='email' required onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId='password'>
                    <Form.Label style= {{color: 'green'}}>Password</Form.Label>
                    <Form.Control type='password' required onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <div className='mb-3'>
                    <Button  style={{ background: "green" }} type='submit'>Sign In</Button>
                </div>
                <div style= {{color: 'green'}} className='mb-3'>
                    New customer?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>Create an account</Link>
                </div>
            </Form>
        </Container>
    );
}