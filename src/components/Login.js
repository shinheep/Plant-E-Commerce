import {Link, Route} from 'react-router-dom';

const Login = () => {
    return(
        <div className="loginContainer">
            
            
            <h1>Plantify</h1>
            <form>
                <div><input type='text'/></div>
                <div><input type='password'/></div>
                <div><Link to="/welcome"><button className="loginButton">Log In</button></Link></div>
            </form>

            <form>
                <div>Don't have an account? <Link to='/signup'>Sign up</Link></div>
            </form>

        </div>
    )
}

export default Login;