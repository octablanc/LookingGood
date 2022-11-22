import styled from "styled-components";

const StepS = styled.div`
    margin-top: 20px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 30px;
    display: flex;
    text-align: left;
    align-items: center;
    color: white;
    background-color: #292929;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    #number {
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        background-color: #339e85;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }

    div {
        span {

            display: block;
        }
    }

`;

export default StepS;