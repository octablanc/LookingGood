import styled from "styled-components";

const NavBarS = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    background-color: black;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    #icon {
        margin-left: 20px;
    }

    #create-btn {
        margin-right: 20px;
        background-color: #339e85;
        padding: 10px 50px 10px 50px;
        border-radius: 20px;
        cursor: pointer;

        :hover {
            background-color: #5c5c5c;
        }
    }
`;

export default NavBarS;