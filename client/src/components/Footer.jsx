import React from "react";
import FooterS, { Content, Information, InformationContent , Field } from "./styles/FooterStyle";
import { IconContext } from "react-icons";
import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function Footer() {
    return (
        <>
            <FooterS>
                <h2>Blanc Visions</h2>
                <Content>
                    <Information>
                        <h4>Contact</h4>
                        <IconContext.Provider value={{ color: "#2ddeaf", className: "global-class-name", size: "20px" }}>
                            <InformationContent>
                                <Field>
                                    <GoLocation/>
                                    <span>Argentina - Buenos Aires - Mar del Plata CP 7600</span>
                                </Field>

                                <Field>
                                    <AiOutlineMail />
                                    <span>octavioblanc234@gmail.com</span>
                                </Field>

                                <Field>
                                    <AiOutlinePhone/>
                                    <span>+54 9 (223) 5511921</span>
                                </Field>

                                <Field>
                                    <AiOutlineLinkedin/>
                                    <a href="https://www.linkedin.com/in/octavio-blanc/" target="_blank">linkedin.com/in/octavio-blanc/</a>
                                </Field>
                            </InformationContent>
                        </IconContext.Provider>
                    </Information>

                    <Information>
                        <h4>About</h4>
                        <p>
                        Blanc Visions will be a future consulting and software development company. We will unite the demands of work with the aspirations of growth. We will connect people with our vision of their ventures to develop their potential and take them to the top.
                        </p>
                    </Information>
                </Content>
            </FooterS>
        </>
    );
}