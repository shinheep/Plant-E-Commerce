import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="welcomeContainer">
            <h1 className='welcome'>You're logged in!</h1>
            <Link to='/'><button className='shopPlantsButton'>Shop Plants</button></Link>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_30iie6.json"  background="transparent"  speed="1"  style={{width: "100%"}, {height: "100%"}} autoplay></lottie-player>
        </div>
    )
}

export default Welcome;