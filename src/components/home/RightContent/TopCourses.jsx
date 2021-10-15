import React from "react";
import { ArrowRight, InfoSquareFill } from "react-bootstrap-icons";
import styled from "styled-components";
import { Card } from "../Main/CreatePostCard";

export default function TopCourses() {
  return (
    <Card className="top-courses mt-3 py-3 sticky top-20">
      <div className="flex justify-between items-center px-3">
        <div className="font-semibold">Today's Top courses</div>
        <InfoSquareFill size={13} fill="#666666" />
      </div>
      <Courses>
        <li className="cursor-pointer hover:bg-gray-100">
          <div className="course-name text-sm font-semibold ">
            Practices for regulating your nerv ...
          </div>
          <div className="author-name text-xs">Jay fields</div>
        </li>
        <li className="cursor-pointer">
          <div className="course-name text-sm font-semibold">
            Digital Transformation
          </div>
          <div className="author-name text-xs">Jay fields</div>
        </li>
        <li className="cursor-pointer">
          <div className="course-name text-sm font-semibold">
            15 secrets of highly sucessfull ...
          </div>
          <div className="author-name text-xs">Jay fields</div>
        </li>
      </Courses>
      <div className="view-courses flex items-center text-gray-500 font-medium hover:bg-gray-200 mx-3 mt-2 rounded cursor-pointer p-1 text-sm w-max">
        <div className="pr-3 font-bold">Show more on LinkedIn learning</div>
        <ArrowRight size={24} />
      </div>
    </Card>
  );
}

export const Courses = styled.ol`
  list-style: decimal;
  padding: 0px;
  margin: 0px;

  li {
    margin: 0px;
    padding-left: 5px;
    text-align: left;
    margin-left: 30px;
    margin-top: 10px;
  }

  li div.course-name {
    max-width: 100%;
  }
`;
