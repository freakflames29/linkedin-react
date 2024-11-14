import styled from "styled-components";
import Leftside from "./Leftside.jsx";
import Mainside from "./Mainside.jsx";
import Rightside from "./Rightside.jsx";

const Container = styled.div`
    padding-top: 5%;
    max-width: 100%;

`
const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;

`
const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;

    justify-content: center;
`

const Layout = styled.div`
    display: grid;
    grid-template-areas: "Leftside Mainside Rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 5fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 25px 0;
    
    padding: 0 5%;
`

const Home = (props) => {
    return <Container>
        <Section>
            <h5>
                <a>
                    Hiring in a hurry? -
                </a>
            </h5>

            <p>
                Find talendted pros to keep your buisness booyah !
            </p>

        </Section>

        <Layout>
            <Leftside/>
            <Mainside/>
            <Rightside/>


        </Layout>
    </Container>
}
export default Home;