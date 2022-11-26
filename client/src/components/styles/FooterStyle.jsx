import styled from "styled-components";

const FooterS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    margin-top: 50px;
    font-weight: lighter;
    color: white;
    background-color: black;
    box-shadow: -1px -8px 21px -1px rgba(0,0,0,0.75);    
    -webkit-box-shadow: -1px -8px 21px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px -8px 21px -1px rgba(0,0,0,0.75);

    span, p {
        font-size: 13px;
    }

    a {
        margin-left: 10px;
        text-decoration: none;
        color: white;

        :hover {
            color: #a9f5e8;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    
    p {
        margin: 0px;
        padding: 0px;
        margin-left: 20px;
        display: flex;
        text-align: start;
    }
`;

export const Information = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    /* background-color: red; */
    width: 400px;
    margin-left: 40px;
`;

export const InformationContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    span {
        margin-left: 10px;
    }
`;

export default FooterS;
