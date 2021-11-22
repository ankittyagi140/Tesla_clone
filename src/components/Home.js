import React from 'react';
import styled from "styled-components";
import Section from './Section';
import Chatbot from './Chatbot';

function Home(){

    return(
        <Container>
            <Chatbot/>

            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftButtonText="Cutom Order"
                rightBtnText="Existing Invntory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftButtonText="Cutom Order"
                rightBtnText="Existing Invntory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftButtonText="Cutom Order"
                rightBtnText="Existing Invntory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftButtonText="Cutom Order"
                rightBtnText="Existing Invntory"
            />
            <Section
                title="Lowest Cost Solar Panels In America"
                description="Money Back guarantee"
                backgroundImg="solar-panel.jpg"
                leftButtonText="order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftButtonText="order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftButtonText="shop now"
                rightBtnText=""
            />
        </Container>
    )
}
export default Home;
const Container=styled.div`
height:100vh;`
