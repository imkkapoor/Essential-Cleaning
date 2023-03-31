import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import back from "./white-blank.jpg";

const Image = styled.img`
    height: 30vh;
`;
export default function Reviews() {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <Image className="d-block w-100" src={back} />
                    <Carousel.Caption>
                        <p>eligendi ab ipsa provident esse quas labore sapiente voluptatem et dolor mollitia velit distinctio illo!</p>
                        <h5>person 1</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={back} />
                    <Carousel.Caption>
                        <p>elit. Dignissimos sapiente totam dolorum recusandae a quia deserunt.</p>
                        <h5>person 2</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={back} />
                    <Carousel.Caption>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                        <h5>person 3</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
