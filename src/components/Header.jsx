import styled from "styled-components";
import HeaderLogo from "../assets/images/home-logo.svg"

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    position: fixed;
    z-index: 100;
    padding: 10px 24px;
    top: 0;
    width: 100vw;

`
const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`
const Logo = styled.span`
    margin-right: 8px;
    font-size: 0;
`

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & > div {
        max-width: 280px;
        input{
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
        }
    }
    

`
const SearchIcon = styled.div``


const Header = (props) => {
    return <div>
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src={HeaderLogo} alt="headr_logo"/>
                    </a>
                </Logo>

                <Search>
                    <div>
                        <input type="text" placeholder="Search here..."/>
                    </div>

                    <SearchIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            data-supported-dps="16x16"
                            fill="currentColor"
                            width="16"
                            height="16"
                            focusable="false"
                        >
                            <path
                                d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                        </svg>
                    </SearchIcon>
                </Search>
            </Content>
        </Container>
    </div>
}
export default Header;