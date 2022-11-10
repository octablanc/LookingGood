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
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }

    button {
        background-color: #339e85;
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
        transition: 0.2s;

        :hover {
            background-color: #5c5c5c;
        }
    }
`;

export default SearchBarS;
