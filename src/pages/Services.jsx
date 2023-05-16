import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import ChooseUs from "../components/why-us/ChooseUs";
import NavBarLine from "../components/nav-bar/NavBarLine";

const Container = styled.div`
    display: flex;
    margin: 60px 150px;
    @media screen and (max-width: 960px) {
        flex-direction: column;
        text-align: center;
    }
    background-color: rgb(237, 237, 237);
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    @media screen and (max-width: 600px) {
        margin: 40px 20px;
    }
`;

const Description = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    padding-right: 60px;
    font-size: 15px;
    @media screen and (max-width: 960px) {
        padding-right: 30px;
    }
`;
const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
    @media screen and (max-width: 960px) {
        margin-bottom: 0px;
        margin-top: 30px;
    }
`;
const Image = styled.img`
    height: 90vh;
    width: 67.66vh;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    object-fit: cover;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    @media screen and (max-width: 720px) {
        height: 60vh;
        width: 45.11vh;
    }
    @media screen and (max-width: 600px) {
        height: 48vh;
        width: 36.09vh;
    }
`;

export default function Services() {
    return (
        <>
            <NavBarLine header="Services" />
            <Container>
                <ImageWrapper>
                    <Image src="https://drive.google.com/uc?export=view&id=1db60bnCTF6fnjjEMiJCWFr_c04VkfT7K"></Image>
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
            <Container>
                <ImageWrapper>
                    <Image src="https://drive.google.com/uc?id=1JW9f2-b62mGr12e28FRCjv8dr2N1GcFH"></Image>
                </ImageWrapper>
                <Description>
                    <h3>Exterior Cleaning</h3>
                    Over time, the exterior of your home can become dirty,
                    stained, and even moldy, which not only looks unattractive
                    but can also damage the siding. Our team of experts uses
                    advanced equipment and safe cleaning methods to remove dirt,
                    grime, and other contaminants from your home's siding,
                    leaving it looking like new. We understand that every home
                    is different, which is why we offer customized solutions to
                    meet your specific needs. Whether you have vinyl, brick,
                    stucco, or any other type of siding, we have the expertise
                    to get it clean. Contact us today to schedule your house
                    washing service and give your home the facelift it deserves!
                </Description>
            </Container>
            <Container>
                <ImageWrapper>
                    <Image src="https://drive.google.com/uc?export=view&id=1xL7NUYvKwdz87rbpx6G7FAvCLOefOUKI"></Image>
                </ImageWrapper>
                <Description>
                    <h3>Window Cleaning</h3>
                    Over time, windows can become dirty, smudged, and stained,
                    which not only looks unattractive but can also impair your
                    view and reduce the amount of natural light entering your
                    home or office. Our team of experts uses specialized tools
                    and safe cleaning methods to remove dirt, grime, and other
                    contaminants from your windows, leaving them sparkling clean
                    and streak-free. We understand that every property is
                    different, which is why we offer customized solutions to
                    meet your specific needs. Whether you need window cleaning
                    for your home, office, or commercial property, we have the
                    expertise to get the job done. Contact us today to schedule
                    your window cleaning service and let us enhance the
                    appearance and comfort of your space.
                </Description>
            </Container>
            <ChooseUs />
            <Footer />
        </>
    );
}
