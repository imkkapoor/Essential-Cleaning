import React from "react";
import { url_list } from "../../data";
import EachImage from "./EachImage";
import styled from "styled-components";

const ContainerAllImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 20px;
`;

export default function Images() {
    return (
        <div>
            {/* <video height="400px" autoplay muted>
                <source
                    src={main}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video> */}
            <ContainerAllImages>
                {url_list.map((item) => (
                    <EachImage item={item} />
                ))}
            </ContainerAllImages>
        </div>
    );
}
