import styled from "styled-components";

const LandingS = styled.div`
    display: flex;
    justify-content: end;
    width: 100vw;
    height: 100vh;
    background: url('https://img.freepik.com/premium-photo/ingredients-healthy-foods-selection-concept-healthy-food-set-up_35641-2941.jpg?w=2000') no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center; 
    margin-bottom: -20px;
    zoom: none;

    .landing-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        background-color: white;
        color: black;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.5) 0px 15px 12px;
    }

    .landing-content {
        margin-left: 100px;
        margin-right: 100px;
        width: 80%;
        font-size: 20px;

        h1 {
            font-size: 60px;
        }

        button {
            margin-top: 50px;
            padding: 20px;
            width: 400px;
            font-size: 20px;
            color: white;
            background-color: #339e85;
            border: none;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            cursor: pointer;
            transition: 0.2s;

            :hover {
                background-color: #5c5c5c;
            }
        }
    }
`;

export default LandingS;