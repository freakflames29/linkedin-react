import React from 'react';
import styled from "styled-components";
import BackgroundImg from "../assets/images/card-bg.svg"

const Container = styled.div`
    grid-area: Leftside;

`
const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`;
const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
    

`
const CardBackground = styled.div`
    background-image: url("/src/assets/images/card-bg.svg");
    background-size: 462px;
    height: 54px;
    //width: 100%;

    margin: -12px -12px 0;

`
const Photo = styled.div`

    box-shadow: none;
    background-image: url("/src/assets/images/photo.svg");
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;

`
const LinkCustom = styled.div``
const AddphotoText = styled.div``

const Leftside = () => {
    return (<>
            <Container>
                <ArtCard>
                    <UserInfo>
                        <CardBackground/>
                            <a>
                                <Photo/>
                                    <LinkCustom>
                                        Welchome there
                                    </LinkCustom>

                            </a>

                            <a>
                                <AddphotoText>
                                    add a photo
                                </AddphotoText>
                            </a>

                    </UserInfo>

                </ArtCard>
            </Container>
        </>


    );
};

export default Leftside;