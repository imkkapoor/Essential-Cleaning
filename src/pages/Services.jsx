import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import ChooseUs from "../components/why-us/ChooseUs";
import NavBarLine from "../components/nav-bar/NavBarLine";


const Container = styled.div`
    display: flex;
    margin: 20px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Description = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    font-size: 15px;
`;
const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
`;
const Image = styled.img`
    height: 90vh;
    width: auto;
    @media screen and (max-width: 600px) {
        height: 48vh;
    }
`;

export default function Services() {
    return (
        <>
            <NavBarLine header = "Services"/>
            {/* <ServiceHeader>Services</ServiceHeader> */}
            <Container>
                <ImageWrapper>
                    <Image src="https://drive.google.com/uc?export=view&id=1MrJzwdfhhw83m2olMbGshTonC109zz5c"></Image>
                </ImageWrapper>
                <Description>
                    <h3>Pressure Washing</h3>
                    Pressure washing your outdoor surfaces, including walkways,
                    patios, driveways, sidewalks, and decks, helps to remove
                    tough stains, prevent damage, increase safety, improve curb
                    appeal, and extend the lifespan of these surfaces. It is an
                    effective way to keep them clean and well-maintained.
                </Description>
            </Container>
            {/* <Container>
                <Image></Image>
                <Description>
                    <h3>Window Cleaning</h3>
                    Professional window cleaning can help enhance the appearance
                    and overall value of a property, as well as improve the
                    energy efficiency of a building by allowing more natural
                    light to enter.
                    <br></br>
                    <br></br>
                    It is an important aspect of property maintenance for both
                    residential and commercial businesses. This can help prolong
                    the lifespan of windows and reduce the need for costly
                    repairs or replacements in the long run. This service
                    involves the thorough cleaning of all exterior windows, both
                    glass surfaces and frames using specialized tools,
                    equipment, and techniques. Professional window cleaners are
                    trained and experienced in identifying the right cleaning
                    solution for each type of glass surface, whether it be
                    traditional glass or modern, energy-efficient glass.
                    <br></br>
                    <br></br>
                    Trust our team to keep your pathways and building exterior
                    clean and functioning correctly. Contact us today to
                    schedule your FREE estimate.
                </Description>
            </Container> */}
            <Container>
                <ImageWrapper>
                    <Image src="https://drive.google.com/uc?export=view&id=1cl-1T4vlRm7Wl1LWp3yzO9Jsitt4khFx" />
                </ImageWrapper>
                <Description>
                    <h3>Gutter Cleaning</h3>
                    Clogged gutters can cause serious problems for your home,
                    such as water damage, mold growth, and pest infestations.
                    Our team of experts uses specialized tools and safe cleaning
                    methods to remove debris, leaves, and other obstructions
                    from your gutters, ensuring that they are free-flowing and
                    fully functional. We also inspect your gutters for any
                    damage or potential issues and provide recommendations for
                    repair or replacement if necessary.
                </Description>
            </Container>
            <Container>
                <ImageWrapper>
                    <Image src="https://drive.google.com/uc?export=view&id=19fXldYOKWyq85EiWktmBdnLii1Pd76re"></Image>
                </ImageWrapper>
                <Description>
                    <h3>Moss Removal</h3>
                    We understand the importance of maintaining a healthy roof
                    and that's why we provide effective and efficient moss
                    removal services. Moss can damage your roof and lead to
                    costly repairs if not properly addressed. Our team of
                    experts uses safe and proven methods to remove moss from
                    your roof, leaving it in optimal condition. We also offer
                    preventative treatments to help keep moss from growing back.
                    Our goal is to provide exceptional service and give you
                    peace of mind knowing your roof is in good hands. Contact us
                    today to schedule your moss removal service!
                </Description>
            </Container>
            <ChooseUs />
            <Footer />
        </>
    );
}
