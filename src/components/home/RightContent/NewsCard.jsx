import React from "react";
import {
  ChevronCompactDown,
  ChevronCompactUp,
  Dot,
  InfoSquareFill,
} from "react-bootstrap-icons";
import styled from "styled-components";
import { DivFlex } from "../../../styled-components/common/CommonStyles";
import { Card } from "../Main/CreatePostCard";
export default function NewsCard() {
  return (
    <Card className="py-3">
      <Content>
        <div className="flex justify-between items-center px-3">
          <div className="font-semibold">LinkedIn News</div>
          <InfoSquareFill size={13} fill="#666666" />
        </div>
        <div className="news-list pt-1">
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <DivFlex
                align="flex-start"
                className="hover:bg-gray-200 pb-1 mb-1 cursor-pointer"
              >
                <Dot size={32} className="pt-0 mt-0" />
                <div className="pt-1">
                  <div className="text-sm font-semibold">
                    Tokyo Olympics bans all spectators
                  </div>
                  <DivFlex align="center" className="text-xs text-gray-500">
                    <div className="news-timestamp">3d ago</div>
                    <Dot />
                    <div className="reader-count">25,764 readers</div>
                  </DivFlex>
                </div>
              </DivFlex>
            );
          })}
        </div>
        <DivFlex
          width="fit-content"
          align="center"
          className="show-more hover:bg-gray-200 cursor-pointer rounded py-1 px-2 ml-7"
        >
          <div className="mr-1 text-sm font-medium">Show more</div>
          {true ? (
            <ChevronCompactDown size={18} fill="#313030" />
          ) : (
            <ChevronCompactUp size={18} fill="#313030" />
          )}
        </DivFlex>
      </Content>
    </Card>
  );
}

export const Content = styled.div``;
