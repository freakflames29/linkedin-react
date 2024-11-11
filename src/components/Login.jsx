import styled from "styled-components";
import Logo from "/src/assets/images/login-logo.svg"
import HeroImg from "../assets/images/login-hero.svg"
import GoogleIcon from "../assets/images/google.svg"

const Container = styled.div`
    padding: 0px;
`
const Nav = styled.nav`
    max-width: 1129px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 134px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`

const Join = styled.a`
    text-decoration: none;
    padding: 10px 12px;
    margin-right: 12px;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    font-size: 16px;


    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
    }

`
const Signin = styled.a`
    box-shadow: inset 0 0 0 1px #1e1e1e;
    padding: 10px 24px;
    border-radius: 24px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    transition: 157ms ease;
    color: #0a66c2;
    border: 1px solid #0a66c2;
    background-color: #fff;

    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
    }


`

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    //border: 2px solid;

    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }

`

const Hero = styled.div`
    width: 100%;

    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 100;
        line-height: 70px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2px;

        }
    }

    img {
        //z-index: -1;
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: 50px;
        right: -150px;
        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }

`

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 768px) {
        margin-top: 20px;
        
    }

`
const Google = styled.button`
    display: flex;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 56px;
    justify-content: center;
    font-size: 20px;
    border-radius: 28px;
    background-color: white;
    
    cursor: pointer;
    img{
        margin-right: 10px;
    }
    
    &:hover{
        background-color: whitesmoke;
    }
`

const Login = (props) => {
    return (<>
        <Container>
            <Nav>
                <a href="/">
                    <img src={Logo} alt=""/>
                </a>
                <div>
                    <Join>Join now</Join>
                    <Signin>Sigin in</Signin>
                </div>


            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src={HeroImg} alt="heero img"/>
                </Hero>

                <Form>
                    <Google>
                        <img src={GoogleIcon} alt="google icon"/>
                        Login with google
                    </Google>
                </Form>
            </Section>

        </Container>
    </>)

}


export default Login;