import styled from "styled-components";

const SpinnerS = styled.div`
    .lds-dual-ring {
        display: inline-block;
        margin-top: -80px;
        width: 80px;
        height: 80px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 100px;
        height: 100px;
        margin: 8px;
        border-radius: 50%;

        border: 8px solid #292929;
        border-color: #339e85 transparent #339e85 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default SpinnerS;