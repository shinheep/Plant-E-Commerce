import Footer from "./Footer";

const About = () => {
    return (
        <div className="aboutContainer">
            <img id="myPic" src="https://res.cloudinary.com/dxqwpud0l/image/upload/v1637695467/ProfilePic_vyffoy.jpg" alt="myPic" />

            <div className="aboutMain">
                    <div className="paragraph">
                        Hello! My name is Shinhee, and I am a full-stack software engineer creating modern and responsive design for Mobile apps, and the Web. My interest in web development started back in 2010 when I decided my Xanga page needed to have pretty stars flowing down the front page -- turns out that taught me a lot about HTML & CSS!
                    </div>

                    <div className="paragraph">
                        Fast-forward to today, I have just completed the Software Engineering Immersive Program at General Assembly, and I am proud to say my knowledge of programming goes beyond adding pretty stars to a website.
                    </div>

                    <div className="paragraph">
                        Apart from coding, I'm a proud dog and plant mom!
                    </div>
                    
            </div>

            <div className="socialsHome">
            <a
              target="blank"
              href="https://www.linkedin.com/in/shinhee-p-b025885a/"
            >
                <i class="fab fa-linkedin icon home-icon"></i>

            </a>
            <a target="blank" href="https://github.com/shinheep">
                <i class="fab fa-github icon home-icon"></i>

            </a>
          </div>
          <Footer/>
        </div>
    )
}

export default About;