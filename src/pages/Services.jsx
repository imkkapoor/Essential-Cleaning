import React from "react";
import NavigationBar from "../components/nav-bar/NavigationBar";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import ChooseUs from "../components/why-us/ChooseUs";

const ServiceHeader = styled.div`
    height: 12vh;
    display: flex;
    align-items: center;
    color: white;
    background-color: #2d5a9b;
    justify-content: center;
    font-size: 40px;
`;

const Container = styled.div`
    display: flex;
    margin:20px;
`;

const Description = styled.div`
    flex: 1;
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 30px;
    font-size:15px;
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
    width:auto;
   
`;

export default function Services() {
    return (
        <>
            <NavigationBar />
            <ServiceHeader>Services</ServiceHeader>
            <Container>
                <ImageWrapper>
                    <Image src="https://drive.google.com/uc?export=view&id=1MrJzwdfhhw83m2olMbGshTonC109zz5c"></Image>
                </ImageWrapper>
                <Description>
                    <h3>Pressure Washing</h3>
                    Exterior building and walkway pressure washing is an
                    important aspect of property maintenance. Over time, dirt,
                    grime, and other debris can accumulate on the exterior
                    surfaces of buildings and walkways, making them look
                    unsightly and potentially damaging to the structure.
                    <br></br>
                    <br></br>
                    Pressure washing uses a high-pressure water spray to remove
                    these contaminants, leaving surfaces looking clean and
                    refreshed. By maintaining the exterior of a building and
                    walkways, property owners can improve their curb appeal and
                    make a positive first impression on visitors or potential
                    customers. Additionally, regular pressure washing can help
                    prevent the buildup of mold, mildew, and other harmful
                    bacteria that can compromise the health and safety of
                    occupants. It can also extend the life of the building’s
                    exterior surfaces by removing corrosive elements that can
                    cause damage.
                    <br></br>
                    <br></br>
                    Available for both residential and commercial, exterior and
                    walkway pressure washing is an essential maintenance task
                    that can improve the appearance and safety of your property
                    while also preserving its value over time.
                    <br></br>
                    <br></br>
                    Trust our team to keep your pathways and building exterior
                    clean and functioning correctly. Contact us today to
                    schedule your FREE estimate.
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
                <Description>
                    <h3>Gutter Cleaning</h3>
                    Gutter cleaning is an essential service that ensures the
                    efficient functioning of your roofs drainage system. Over
                    time, leaves, debris, and other materials can accumulate in
                    your gutters, blocking the flow of water and causing damage
                    to your roof and foundation.
                    <br></br> <br></br>
                    Our professional gutter cleaning service will ensure that
                    your home or commercial building gutters are free of debris
                    and functioning properly. Our team of experts use
                    specialized equipment and techniques to safely and
                    effectively remove all debris from your gutters, ensuring
                    that your home or business is protected from water damage.
                    We also offer a thorough inspection of your gutters to
                    identify any potential issues and provide solutions to
                    prevent future problems.
                    <br></br>
                    <br></br>
                    Trust our team to keep your gutters clean and functioning
                    correctly. Contact us today to schedule your FREE estimate.
                </Description>
                <ImageWrapper>
                    <Image src="https://drive.google.com/uc?export=view&id=1cl-1T4vlRm7Wl1LWp3yzO9Jsitt4khFx" />
                </ImageWrapper>
            </Container>
            <Container>
                <ImageWrapper>
                    <Image src="https://drive.google.com/uc?export=view&id=19fXldYOKWyq85EiWktmBdnLii1Pd76re"></Image>
                </ImageWrapper>
                <Description>
                    <h3>Moss Removal</h3>
                    Roof moss removal is an essential service that helps protect
                    the integrity of your roof and maintain the aesthetic appeal
                    of your home or commercial building. Over time, moss can
                    accumulate on your roof, causing damage to shingles and
                    compromising the overall structural integrity of your roof.
                    <br></br>
                    <br></br>
                    Our professional roof moss removal service will ensure that
                    your roof is free of moss and functioning properly. We also
                    include additional treatments to prevent future moss growth.
                    Our team of experts use specialized equipment and soft
                    washing techniques to safely and effectively remove all moss
                    from your roof, without causing any damage to your shingles
                    or roof structure.<br></br>
                    <br></br>
                    We also include a thorough inspection of your roof to
                    identify any potential issues and provide maintenance
                    solutions to prevent future problems.
                    <br></br>
                    Trust our team to keep your roof clean and functioning
                    correctly. Contact us today to schedule your FREE estimate.
                </Description>
            </Container>
            <ChooseUs />
            <Footer />
        </>
    );
}
