import styled from "styled-components";

const PopUpS = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #00000051;
    top: 0px;
    z-index: 999;
    overflow-y: auto;

    .form-conteiner {
        padding: 20px;
        background-color: white;
        color: black;
        border-radius: 10px;
        width: 50%;
        min-width: 340px;
        max-width: 1000px;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        padding: 20px;
        color: black;
        background-color: white;
    }

    .form-main-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }

    .main-inputs {
        display: flex;
        flex-direction: column;
        width: 500px;

        .no-first {
            margin-top: 20px;
        }
    }

    .field {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;
    }

    .title {
        margin-left: 15px;
        font-size: 17px;
        font-weight: bold;
    }

    input {
        width: 90%;
        padding: 10px 20px 10px 20px;
        background-color: #292929;
        color: white;
        border-radius: 20px;
        outline: none;
    }

    .image {
        background-size: cover;
        min-width: 300px;
        min-height: 200px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 10px;
    }

    .second-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
        height: 150px;
    }

    .dish-summary {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-right: 20px;

        textarea {
            width: 100%;
            height: 200px;
            padding: 10px;
            background-color: #292929;
            color: white;
            border-radius: 20px;
            resize: none;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
    }

    .diet-type-conteiner {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        margin-left: 20px;
        margin-right: 15px;

        *::-webkit-scrollbar {
            width: 30px;
        }

        *::-webkit-scrollbar-track {
            margin: 9px;
            background: transparent;
        }

        *::-webkit-scrollbar-thumb {
            background: #2ddeaf;
            border: 12px #292929 solid;
            border-radius: 20px;
        }
    }

    .diet-type {
        background-color: #292929;
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: 180px;
        max-height: 180px;
        padding: 10px;
        border-radius: 20px;
        
        overflow: hidden;
        overflow-y: auto;
        
        .active {
            background-color: #2ddeaf;
            box-shadow: rgb(125, 255, 225) 0px 0px 15px;

            :hover {
                background-color: #2ddeaf;
            }
        }

        .diet {
            padding: 10px 20px 30px 20px;
            margin: 5px;
            border: #339e85 2px solid;
            color: white;
            border-radius: 30px;
            height: 0px;
            font-size: 14px;
            cursor: pointer;

            :hover {
                background-color: #2ccea3;
            }
        }
    }

    .third-content {
        margin-top: 20px;
        margin-bottom: 40px;
        width: 100%;
        height: 180px;

        *::-webkit-scrollbar {
            width: 30px;
        }

        *::-webkit-scrollbar-track {
            margin: 9px;
            background: transparent;
        }

        *::-webkit-scrollbar-thumb {
            background: #292929;
            border: 11px white solid;
            border-radius: 20px;
        }
        
        .input {
            width: 100%;
            position: relative;
            margin-bottom: 10px;
            button {
                border: none;
                outline: none;
                padding: 10px 20px 12px 20px;
                position: absolute;
                top: 39%;
                right: 2.7%;
                background-color: #339e85;
                color: white;
                border-radius: 30pc;
                cursor: pointer;

                :hover {
                    background-color: #2ccea3;
                }
            }
        }

        

        .steps {
            margin-top: 0px;
            overflow: hidden;
            overflow-y: visible;
            font-size: 14px;
            height: 130px;
            border: #b3b2b299 solid 2px;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
            border-radius: 30px;

            .step {
                padding: 5px;
                div {
                    display: flex;
                    border-radius: 30px;
                    padding: 0px;
                    box-shadow: none;
                    margin-top: 0px;
                }
            }
        }
    }

    .btn-create {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 30px;
        background-color: #339e85;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;

        :hover {
            background-color: #2ccea3;
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        }
    }

    .btn-close {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
        cursor: pointer;
    }

    .btn-disabled {
        cursor: not-allowed;
    }
`;

export default PopUpS;