import styled from "styled-components";

const SearchBarS = styled.div`
    margin-top: 40px;
    display: flex;
    width: 100%;
    position: relative;

    input {
        padding: 10px;
        width: 100%;
        background-color: #3ec5a6;
        border-top: none;
        border-left: none;
    }

    button {
        background-color: #3ec5a6;
        border: none;
        position: absolute;
        right: 0px;
        padding: 10px;
        color: white;

        :hover {
            background-color: #258770;
        }
    }
    
`;

export default SearchBarS;
