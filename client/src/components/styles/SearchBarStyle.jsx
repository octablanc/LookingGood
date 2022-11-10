import styled from "styled-components";

const SearchBarS = styled.div`
    margin-top: 40px;
    display: flex;
    width: 1000px;
    position: relative;

    input {
        padding: 10px;
        padding-left: 20px;
        width: 100%;
        background-color: #292929;
        color: white;
        border-top: none;
        border-left: none;
        outline: none;
        border-radius: 20px;
        font-size: 20px;
    }

    button {
        background-color: #4b4b4b;
        border: none;
        position: absolute;
        right: 0px;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 11px;
        color: white;
        font-size: 20px;
        border-radius: 20px;

        :hover {
            background-color: #258770;
        }
    }
`;

export default SearchBarS;
