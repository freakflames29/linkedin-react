import styled from "styled-components";
import Logo from "/src/assets/images/login-logo.svg"

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
    border : 1px solid #0a66c2;
    background-color: #fff;
    
    &:hover {
        background-color: rgba(112,181,249,0.15);
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
        </Container>
    </>)

}


export default Login;