import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import back from "./white-blank.jpg";

const Image = styled.img`
    height: 30vh;
    @media screen and (max-width: 642px) {
        height: 35vh;       
    }
    
  
`;
export default function Reviews() {
    return (
        < >
            <Carousel variant="dark" >
                <Carousel.Item>
                    <Image className="d-block w-100" src={back} />
                    <Carousel.Caption>
                        <p>
                            Recently had the pleasure of working with EEC and their
                            service was nothing short of exceptional. From start
                            to finish, the team was professional, courteous, and
                            extremely attentive to detail.
                        </p>
                        <h5>Conor North</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={back} />
                    <Carousel.Caption>
                        <p>
                            The EEC removed four years of moss, treated the
                            roof, cleaned gutters and upper windows. Great work.
                            Very professional and at a competitive rate. I’ll
                            have them back when needed.
                        </p>
                        <h5>Mark Thane</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={back} />
                    <Carousel.Caption>
                        <p>
                            Very happy with the deep clean these guys did.
                            George showed up on time, was very professional and
                            cleaned up after the job was done. Best value in
                            Victoria for any exterior work you need!
                        </p>
                        <h5>Lewis MacKinven</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
