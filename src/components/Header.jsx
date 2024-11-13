import styled from "styled-components";
import HeaderLogo from "../assets/images/home-logo.svg"
import SearchICON from "../assets/images/search-icon.svg"
import NavHome from "../assets/images/nav-home.svg"
import NavNetwork from "../assets/images/nav-network.svg"
import NavMsg from "../assets/images/nav-messaging.svg"
import NavJobs from "../assets/images/nav-jobs.svg"
import NavNotification from "../assets/images/nav-notifications.svg"


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

        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }


`
const SearchIcon = styled.div`
    width: 40px;
    position: absolute;

    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    pointer-events: none;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: white;
        width: 100%;
    }
`

const NavWrap = styled.ul`
    display: flex;

    flex-wrap: nowrap;
    list-style: none;
`
const NavList = styled.li`
    display: flex;
    align-items: center;

    a {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;

    }

    span {
        color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        min-width: 70px;
    }

    &:hover, &:active {
        a {
            span {
                color: black;
            }
        }
    }
`


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
                        <img src={SearchICON} alt=""/>
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavWrap>
                        <NavList>
                            <a>
                                <img src={NavHome} alt=""/>
                                <span>Home</span>
                            </a>

                        </NavList>
                        <NavList>
                            <a>
                                <img src={NavJobs} alt=""/>
                                <span>Jobs</span>
                            </a>

                        </NavList>
                        <NavList>
                            <a>
                                <img src={NavMsg} alt=""/>
                                <span>Messges</span>
                            </a>

                        </NavList>

                        <NavList>
                            <a>
                                <img src={NavNotification} alt=""/>
                                <span>Notification</span>
                            </a>

                        </NavList>
                    </NavWrap>
                </Nav>
            </Content>
        </Container>
    </div>
}
export default Header;