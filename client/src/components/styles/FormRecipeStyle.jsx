import styled from "styled-components";

const RecipeFormS = styled.form`
    margin: 40px;
    padding: 40px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #575757;

    input, textarea {
        box-sizing: border-box;
        width: 100% ;
        margin-top: 10px;
        margin-bottom: 20px;
        border: none;
        padding: 10px;
        background-color: #c0f8eb;
        outline: none;
    }

    textarea {
        resize: none;
        height: 100px;
    }

    button{
        padding-top: 10px;
        padding-bottom: 10px;
        width: 100%;
        border: none;
        font-size: 18px;
        color: white;
        background-color: #3fcaaa;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
        transition: 0.1s;

        :hover {
            color: white;
            background-color: #32ac90;
        }
    }

    div {
        display: flex;
        flex-wrap: wrap;

        div {
            margin-left: 20px;
            margin-bottom: 20px;
            margin-right: 10px;
            display: flex;
            align-items: center;
            position: relative;
            input[type="checkbox"] {
                position: absolute;
                height: 15px;
                width: 15px;
                cursor: pointer;
                top: -8px;
            }
        }
    }
`;

export default RecipeFormS;