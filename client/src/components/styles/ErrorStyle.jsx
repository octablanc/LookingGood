import styled from "styled-components";

const ErrorS = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    right: 3%;
    top: 25.5px;

    .warning {
        padding: 3px 11px 3px 11px;
        border-radius: 50%;
        color: white;
        background-color: #e05c5c;
        border: white 1px solid;
    }

    .message {
        display: none;
        left: 50px;
        background-color: grey;
        position: absolute;
        margin-left: 5px;
        white-space: nowrap;
        padding: 10px 20px 10px 20px;
        background-color: #e05c5c;
        color: white;
        border: white 1px solid;
        border-radius: 30px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: 0.3s;
    }

    :hover {
        .message {
            display: block;
        }
    }
`;

export default ErrorS;