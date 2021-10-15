import React, { useState } from "react";

import {
  Arrow90degRight,
  ChatLeftText,
  Check2,
  Dot,
  HeartFill,
  Plus,
  ShareFill,
  ThreeDots,
} from "react-bootstrap-icons";

import { BiLike } from "react-icons/bi";
import {RiHandHeartFill} from 'react-icons/ri'

import styled from "styled-components";

import Like from "../../../assets/Like.png";

import {
  Card,
  DivFlex,
  Seperator,
} from "../../../styled-components/common/CommonStyles";
import { UserCircle } from "../../../styled-components/ProfileTab";
import FeedActions from "./FeedActions";

export default function FeedCard({ body, user }) {
  const [showFeedActions, setShowFeedActions] = useState(false);
  const [following, setFollowing] = useState(false);
  const {
    name: { first, last },
    picture: { large },
  } = user;
  return (
    <Card className="px-5 py-3 mb-2">
      <FeedHeader className=" text-sm pb-2">
        <DivFlex justify="space-between" align="center" className="relative">
          <DivFlex>
            <div className="font-semibold">John, doe </div>
            <div className="px-2 text-gray-500">likes this</div>
          </DivFlex>
          <ThreeDotsCustom
            fill="#5c5959"
            className="cursor-pointer relative"
            onClick={() => {
              setShowFeedActions(!showFeedActions);
            }}
          />
          {showFeedActions && <FeedActions author={first + " " + last} />}
        </DivFlex>
      </FeedHeader>
      <Seperator className="w-full block bg-gray-800" color="#ece7e7" />
      <UserInfo className="flex justify-between mt-2 items-center">
        <div className="user flex ">
          <UserCircle width="50px" height="50px" src={large} />
          <DivFlex col={true} className="ml-2">
            <DivFlex align="center">
              <div className="font-bold text-sm">{first + " " + last}</div>
              <Dot />
              <div className="text-sm text-gray-500">2nd</div>
            </DivFlex>
            <div className="text-xs flex">Software Engineer</div>
          </DivFlex>
        </div>
        <div
          onClick={() => {
            setFollowing(!following);
          }}
          className="flex justify-evenly hover:bg-blue-100 cursor-pointer hover:bg-blue-50 rounded p-1 "
        >
          <span
            style={{ color: "#1E66C2" }}
            className="font-bold mr-1 flex items-center"
          >
            {following ? (
              <>
                <Check2 size={20} className="mr-1 mt-1" />
                Following
              </>
            ) : (
              <>
                <Plus fill="#1E66C2" size={25} />
                Follow
              </>
            )}
          </span>
        </div>
      </UserInfo>
      <FeedContent className="feed-content py-3">{body}</FeedContent>
      <DivFlex className="reaction-icons items-center">
        <HeartFill fill="#CB6340" size={12} />
        <BiLike fill="#1585BD" size={14} className="mx-1" />
        <RiHandHeartFill fill="#01937C"/>
        <div className="text-xs ml-1 text-gray-600">100</div>
        <Dot />
        <div className="text-xs text-gray-600 cursor-pointer hover:underline">
          5 comments
        </div>
      </DivFlex>
      <hr className="mt-4" />
      <DivFlex justify="space-between" className="feed-icons w-3/4 pt-3">
        <div className="hover:bg-gray-200 flex items-center rounded cursor-pointer p-1">
          <img src={Like} alt="like" className="w-6 h-6 mr-2" fill="#5E5E5E" />
          <div className="text-sm font-bold text-gray-500">Like</div>
        </div>
        <div className="hover:bg-gray-200 flex items-center rounded cursor-pointer p-1">
          <ChatLeftText size={18} className="mx-2" fill="#5E5E5E" />
          <div className="text-sm font-bold text-gray-500">Comment</div>
        </div>
        <div className="hover:bg-gray-200 flex items-center rounded cursor-pointer p-1">
          <ShareFill size={18} className="mx-2" fill="#5E5E5E" />
          <div className="text-sm font-bold text-gray-500">Share</div>
        </div>
        <div className="hover:bg-gray-200 flex items-center rounded cursor-pointer p-1">
          <Arrow90degRight size={18} className="mx-2" fill="#5E5E5E" />
          <div className="text-sm font-bold text-gray-500">Send</div>
        </div>
      </DivFlex>
    </Card>
  );
}

export const FeedHeader = styled.div``;
export const UserInfo = styled.div``;
export const FeedContent = styled.div`
  text-align: left;
`;

export const ThreeDotsCustom = styled(ThreeDots)`
  border-radius: 50%;
  padding: 6px;
  height: 35px;
  width: 35px;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: #f0ecec;
  }
`;
