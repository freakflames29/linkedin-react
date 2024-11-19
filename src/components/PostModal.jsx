import React from 'react';
import styled from "styled-components";
import {BsXLg} from "react-icons/bs";
import UserIcon from "../assets/images/user.svg"

const PostModal = () => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button>
                        <BsXLg/>
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        <img src={UserIcon} alt=""/>
                        <span>Name</span>
                    </UserInfo>
                </SharedContent>
            </Content>
        </Container>
    );
};


const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9199;
    background-color: rgba(0, 0, 0, 0.8);
    //color: red;

`

const Content = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    display: flex;
    position: relative;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;

`

const Header = styled.div`
    //display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.14);
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.4;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        height: 40px;
        width: 40px;
        min-width: auto;
        background: transparent;
        border: none;
        color: rgba(0, 0, 0, 1);
        cursor: pointer;

    }


`

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;

`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;

    img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;

    }

    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }


`

export default PostModal;