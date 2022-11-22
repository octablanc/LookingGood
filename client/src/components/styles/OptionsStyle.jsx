import styled from "styled-components";

const OptionsS = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    position: absolute;
    color: white;
    border-radius: 30px;
    font-size: 20px;
    cursor: pointer;
    right: 0px;
    z-index: 1;
    
    span {
        background-color: #339e85;
        padding: 10px 60px 10px 60px;
        border-radius: 30px;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .list {
        cursor: default;
        display: none;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        list-style: none;
        width: 91%;
        margin: 0px;
        padding: 70px 10px 10px 10px;
        border-radius: 30px;
        top: -10px;
        z-index: -1;
        background-color: #292929;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

        *::-webkit-scrollbar,
        *::-webkit-scrollbar-thumb {
            width: 5px;
            border-radius: 13px;
            background-clip: padding-box;
            border: none;
            background-color: #363636;
            color: #2ddeaf;
        }

        *::-webkit-scrollbar-thumb {        
            box-shadow: inset 0 0 0 10px;
        }

        hr {
            width: 90%;
        }

        li {
            cursor: pointer;
            background-color: #339e85;
            margin-top: 10px;
            padding: 10px;
            border-radius: 20px;
            transition: 0.1s;

            :hover {
                background-color: #2ccea3;
            }
        }

        #diets {
            max-height: 220px;
            overflow: hidden;
            overflow-y: scroll;
            border-radius: 20px;
            padding-right: 10px;
        }
        .active {
            background-color: #2ddeaf;
            box-shadow: rgb(125, 255, 225) 0px 0px 15px;

            :hover {
                background-color: #2ddeaf;
            }
        }
    }

    :hover {
        .list {
            display: flex;
        }
    }
`;

export default OptionsS;