const Signup = () => {
    
    return(
        <div className="signupContainer">
            <h1>Plantify</h1>
            <div><input type='text' placeholder='Mobile Number or Email'/></div>
            <div><input type='text' placeholder='Full Name'/></div>
            <div><input type='text' placeholder='Username'/></div>
            <div><input type='password' placeholder='Password'/></div>
            <button className="signupButton">Sign up</button>
        </div>

     
    )
}

export default Signup