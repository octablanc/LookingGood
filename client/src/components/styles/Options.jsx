import styled from "styled-components";

const OptionsS = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    position: relative;
    color: white;
    /* padding-left: 70px;
    padding-right: 70px; */
    border-radius: 30px;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    z-index: 1;

    span {
        background-color: #1dc99b;
        padding: 20px 70px 20px 70px;
        border-radius: 30px;
    }
    ul {
        cursor: default;
        display: none;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        list-style: none;
        width: 91%;
        margin: 0px;
        padding: 80px 10px 10px 10px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        top: 0px;
        z-index: -1;
        background-color: #292929;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        li {
            cursor: pointer;
            background-color: #1dc99b;
            margin-top: 10px;
            padding: 10px;
            border-radius: 5px;
        }
    }

    :hover {

        .list {
            display: flex;
        }
    }
`;

export default OptionsS;