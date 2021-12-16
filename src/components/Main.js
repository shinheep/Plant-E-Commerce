import {Link} from 'react-scroll'

const Main = () => {
    return (
        <div className="main">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ca0xjdgv.json"  background="transparent"  speed="1"  style={{width: "300px"}, {height: "300px"}} autoplay></lottie-player>
            <div className="title">Plantify</div>
            <Link activeClass="active" to="plant" spy={true} smooth={false}><button>Shop Plants</button></Link>
        </div>
    )
}

export default Main;