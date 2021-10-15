import React from "react";
import { Linkedin } from "react-bootstrap-icons";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";

import styled from "styled-components";
import { DivFlex } from "../../styled-components/common/CommonStyles";

function LoginFooter() {
  return (
    <DivFlex align="center" className="absolute bottom-0 my-3 px-7">
      <DivFlex align="center" className="text-sm font-extrabold relative">
        <span className="mr-1">Linked</span>
        <Linkedin size={14} className="mr-1" />
        <AiOutlineCopyrightCircle fill="#4d4a4a" size={10} />
        <span className="text-gray-600 font-semibold text-xs absolute top-0 pl-4 left-16">
          2021
        </span>
      </DivFlex>
      <FooterLinks>
        <FooterLink className="footer-link text-xs mx-1 ml-7 text-gray-600 font-bold">
          User Agreement
        </FooterLink>
        <FooterLink className="footer-link text-xs mx-1 text-gray-500 font-bold">
          Privacy Policy
        </FooterLink>
        <FooterLink className="footer-link text-xs mx-1 text-gray-500 font-bold">
          Community Guidelines
        </FooterLink>
        <FooterLink className="footer-link text-xs mx-1 text-gray-500 font-bold">
          Cookie Policy
        </FooterLink>
        <FooterLink className="footer-link text-xs mx-1 text-gray-500 font-bold">
          Copyright Policy
        </FooterLink>
        <FooterLink className="footer-link text-xs mx-1 text-gray-500 font-bold">
          Send Feedback
        </FooterLink>
        <FooterLink className="flex items-center footer-link hover:text-blue-800 text-xs mx-1 text-gray-500 font-bold flex items-center">
          <div>Language</div> <BsChevronCompactDown fill="#5e5b5b" size={14}/>
        </FooterLink>
      </FooterLinks>
    </DivFlex>
  );
}

export default LoginFooter;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 10px;
`;
export const FooterLink = styled.div`
  padding: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
