import React from 'react';
import styled from "styled-components";
import FeedIcon from "../assets/images/feed-icon.svg"
import RightIcon from "../assets/images/right-icon.svg"
import  BannerImg from "../assets/images/banner.jpg"

const Container = styled.div`
    grid-area: Rightside;
`
const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 12px;

`

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.6);


`;

const FeedList = styled.ul`
    margin-top: 16px;

    li {
        display: flex;
        align-items: center;
        margin: 12px 0;
        position: relative;
        font-size: 14px;

        & > div {
            display: flex;
            flex-direction: column;
        }
    }

    button {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.5);
        padding: 15px;
        align-items: center;
        border-radius: 15px;
        box-sizing: border-box;
        font-weight: 500;
        display: inline-flex;
        justify-content: center;
        max-height: 32px;
        max-width: 480px;
        text-align: center;
        outline: none;
    }

`

const Avatar = styled.div`
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/6/63/Number_sign.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 48px;
    height: 48px;
    margin-right: 8px;

`

const Recommendation = styled.a`
    color: #0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;

`
const BannerCard = styled(FollowCard)`
    img {
        width: 100%;
        height: 100%;
    }
`

const Rightside = () => {
    return (<>
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed</h2>
                    <img src={FeedIcon} alt="feedicon"/>
                </Title>


                <FeedList>
                    <li>
                        <a>
                            <Avatar/>
                        </a>
                        <div>
                            <span>#Linked in</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar/>
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </FeedList>
                <Recommendation>
                    View all recommendation
                    <img src={RightIcon} alt=""/>
                </Recommendation>
            </FollowCard>

            <BannerCard>
                <img
                    src={BannerImg}


                    alt=""/>
            </BannerCard>
        </Container>
    </>);
};

export default Rightside;