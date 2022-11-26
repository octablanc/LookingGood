import styled from "styled-components";

const RecipeDetailS = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 100px;
    margin-right: 100px;
    padding-left: 40px;
    padding-top: 60px;
    padding-bottom: 80px;
    padding-right: 80px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    width: 90%;
    min-height: 700px;
    max-width: 1500px;
    min-width: 1300px;
    border-radius: 10px;
    backdrop-filter: blur( 4.0px);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    #recipe-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    a { text-decoration: none; font-weight: bolder;}
    a:link    { color: #339e85; text-decoration: none; }
    a:visited { color: #339e85; text-decoration: none; }
    a:hover   { color: #339e85; text-decoration: none; }
    a:active  { color: #339e85; text-decoration: none; }

    #recipe-picture {
        margin-left: 40px;
        background-size: cover;
        min-width: 400px;
        height: 300px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 5px;
    }

    .recipe-content {
        padding: 60px;
        margin-left: 40px;
        margin-top: 20px;
        height: auto;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 5px;
        text-align: left;
    }

    h3 {
        padding-top: 20px;
    }

    .health_score {
        display: flex;
        align-items: center;

        span {
            margin-left: 10px;
        }

        strong {
            margin-left: 10px;
            width: 40px;
            height: 40px;
            min-width: 40px;
            min-height: 40px;
            background-color: #339e85;
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
`;

export default RecipeDetailS;