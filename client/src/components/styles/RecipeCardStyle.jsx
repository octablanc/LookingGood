import styled from "styled-components";

const RecipeCardS = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    margin-bottom: 40px;
    background-color: white;
    width: 300px;
    height: 230px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .picture {
        background-size: 1000px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 100%;
        height: 150px;
    }

    .name {
        display: flex;
        width: 100%;
        height: 35%;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        
        span {
            padding: 40px;
        }
    }
`;

export default RecipeCardS;