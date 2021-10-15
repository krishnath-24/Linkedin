import React from "react";
import {
  Bookmark,
  CodeSlash,
  EyeFill,
  EyeSlashFill,
  FlagFill,
  Link,
  MicMuteFill, XCircleFill
} from "react-bootstrap-icons";
import styled from "styled-components";
import { Card } from "../../../styled-components/common/CommonStyles";

export default function FeedActions({ author }) {
  return (
    <Card
      className="absolute top-12 left-1/3 z-50"
      box="0px 1px 3px 0.5px #b8b3b3"
      width="348px"
    >
      <Actions>
        <ActionItem className="w-full cursor-pointer  hover:bg-gray-200 py-2 ">
          <Bookmark size={20} />
          <div className="flex flex-col text-left pl-2">
            <div className="text-left font-bold ">Save</div>
            <div className="text-xs font-medium text-gray-500">
              save for later
            </div>
          </div>
        </ActionItem>
        <ActionItem className="w-full cursor-pointer  hover:bg-gray-200 py-2 ">
          <Link size={20} fill="#2e2c2c" />
          <div className="flex flex-col text-left pl-2">
            <div className="text-left font-bold ">Copy link to post</div>
          </div>
        </ActionItem>
        <ActionItem className="w-full cursor-pointer  hover:bg-gray-200 py-2 ">
          <CodeSlash size={20} fill="#2e2c2c" />
          <div className="flex flex-col text-left pl-2">
            <div className="text-left font-bold ">Embed this post</div>
            <div className="text-xs font-medium text-gray-500">
              Copy and paste embded post on your site
            </div>
          </div>
        </ActionItem>
        <ActionItem className="w-full cursor-pointer  hover:bg-gray-200 py-2 ">
          <XCircleFill size={20} fill="#6b6969" />
          <div className="flex flex-col text-left pl-2">
            <div className="text-left font-bold ">Unfollow {author}</div>
            <div className="text-xs font-medium text-gray-500">
              Stay connected, but stop seeing posts from {author} in feed
            </div>
          </div>
        </ActionItem>
        <ActionItem className="w-full cursor-pointer  hover:bg-gray-200 py-2 ">
          <MicMuteFill size={20} fill="#6b6969" />
          <div className="flex flex-col text-left pl-2">
            <div className="text-left font-bold ">Mute {author}</div>
            <div className="text-xs font-medium text-gray-500">
              Stop seeing posts from {author} in feed
            </div>
          </div>
        </ActionItem>
        <ActionItem className="w-full cursor-pointer  hover:bg-gray-200 py-2 ">
          <EyeSlashFill size={20} fill="#6b6969" />
          <div className="flex flex-col text-left pl-2">
            <div className="text-left font-bold ">I don't want to see this</div>
            <div className="text-xs font-medium text-gray-500">
              Let us know why you don't want to see this post
            </div>
          </div>
        </ActionItem>
        <ActionItem className="w-full cursor-pointer  hover:bg-gray-200 py-2 ">
          <FlagFill size={20} fill="#6b6969" />
          <div className="flex flex-col text-left pl-2">
            <div className="text-left font-bold ">Report this post</div>
            <div className="text-xs font-medium text-gray-500">
              The post is offensive or the account is hacked
            </div>
          </div>
        </ActionItem>
        <ActionItem className="w-full cursor-pointer  hover:bg-gray-200 py-2 ">
          <EyeFill size={20} fill="#6b6969" />
          <div className="flex flex-col text-left pl-2">
            <div className="text-left font-bold ">Who can see this post?</div>
            <div className="text-xs font-medium text-gray-500">
              Visible to anyone on or off linkedin
            </div>
          </div>
        </ActionItem>
      </Actions>
    </Card>
  );
}

export const Actions = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
`;
export const ActionItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
