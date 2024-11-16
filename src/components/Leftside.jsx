import React from 'react';
import styled from "styled-components";
import BackgroundImg from "../assets/images/card-bg.svg"
import WidgetIcon from "../assets/images/widget-icon.svg"
import ItemIcon from "../assets/images/item-icon.svg"

import PlusIcon from "../assets/images/plus-icon.svg"

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
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
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
const LinkCustom = styled.div`
    font-size: 20px;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);


`
const AddphotoText = styled.div`

    margin-top: 4px;
    font-size: 15px;
    line-height: 1.33;
    font-weight: 400;


`

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 0;

    & > a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;


        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }

        div {
            display: flex;
            flex-direction: column;
            text-align: left;

            span {
                font-size: 12px;
                line-height: 1.3;

                &:first-child {
                    color: rgba(0, 0, 0, 0.6);

                }

                &:nth-child(2) {
                    color: rgba(0, 0, 0, 1);

                }

            }
        }
    }

    img {
        color: black;
    }

`
const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;

    span {
        display: flex;
        align-items: center;
        color: black;

        svg {
            color: rgba(0, 0, 0, 0.6);
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

`

const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;

    a {
        color: black;
        padding: 4px 12px;


        &:hover {
            color: #0a66c2;
        }
    }

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }



`

const LastChild = styled.div`
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    border-top: 1px solid #d6cec2;
    padding: 12px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`

const Leftside = (props) => {
    return (<>
            <Container>
                <ArtCard>
                    <UserInfo>
                        <CardBackground/>
                        <a>
                            <Photo/>
                            <LinkCustom>
                                Welcome there
                            </LinkCustom>

                        </a>

                        <a>
                            <AddphotoText>
                                add a photo
                            </AddphotoText>
                        </a>

                    </UserInfo>

                    <Widget>
                        <a>
                            <div>
                                <span>Connection</span>
                                <span>Grow your network</span>
                            </div>
                            <img src={WidgetIcon} alt="Widget ICON"/>
                        </a>
                    </Widget>

                    <Item>
                        <span>
                            <img src={ItemIcon} alt="Item ICON"/>
                            My Items
                        </span>
                    </Item>

                </ArtCard>

                <CommunityCard>
                    <a>
                        <span>Groups</span>
                    </a>
                    <a>
                        <span>Events
                        <img src={PlusIcon} alt="plusicon"/>

                        </span>
                    </a>

                    <a>
                        <span>Follow hastagas</span>
                    </a>
                    <LastChild>

                        <span>Discover more</span>
                    </LastChild>

                </CommunityCard>
            </Container>
        </>


    );
};

export default Leftside;