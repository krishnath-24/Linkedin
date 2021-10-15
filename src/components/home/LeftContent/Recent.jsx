import React from "react";
import { ChevronDown, Hash, PeopleFill, Plus } from "react-bootstrap-icons";
import styled from "styled-components";
import { Card } from "../../../styled-components/common/CommonStyles";

export default function Recent() {
  return (
    <Card className="container mt-3 sticky top-20 ">
      <ChevronParent className="header flex justify-between items-center p-2">
        <div className="text-xs font-medium">Recent</div>
        <ChevronIcon className="chev-down" size={20} />
      </ChevronParent>
      <div className="recent-container">
        <div className="recent-item cursor-pointer hover:bg-gray-200 flex items-center px-2 py-1">
          <PeopleFill fill="#5E5E5E" className="mr-2" />
          <div className="recent-body text-xs font-semibold text-gray-600">
            Bridging gap between ...
          </div>
        </div>
        <div className="recent-item cursor-pointer hover:bg-gray-200 flex items-center px-2 py-1">
          <PeopleFill fill="#5E5E5E" className="mr-2" />
          <div className="recent-body text-xs font-semibold text-gray-600">
            Coding Ninjas alumni...
          </div>
        </div>
        <div className="recent-item cursor-pointer hover:bg-gray-200 flex items-center px-2 py-1">
          <PeopleFill fill="#5E5E5E" className="mr-2" />
          <div className="recent-body text-xs font-semibold text-gray-600">
            Bridging gap between ...
          </div>
        </div>
        <div className="recent-item cursor-pointer hover:bg-gray-200 flex items-center px-2 py-1">
          <Hash fill="#5E5E5E" className="mr-1" size={20} />
          <div className="recent-body text-xs font-semibold text-gray-600">
            future
          </div>
        </div>
        <div className="recent-item cursor-pointer hover:bg-gray-200 flex items-center px-2 pb-1">
          <Hash fill="#5E5E5E" className="mr-1" size={20} />
          <div className="recent-body text-xs font-semibold text-gray-600">
            feminism
          </div>
        </div>
      </div>

      <div className="groups">
        <ChevronParent className="group-header flex justify-between px-2 items-center mb-2">
          <div className="font-semibold text-xs hover:underline text-blue-600 cursor-pointer">
            Groups
          </div>
          <ChevronIcon className="chev-down" size={20} />
        </ChevronParent>
        <div className="group-item py-1 hover:bg-gray-200 cursor-pointer px-2  flex item-center">
          <PeopleFill fill="#5E5E5E" className="mr-2" />
          <div className="group-body text-xs font-semibold text-gray-600">
            Bridging gap between ...
          </div>
        </div>
        <div className="group-item py-1 hover:bg-gray-200 cursor-pointer px-2  flex item-center">
          <PeopleFill fill="#5E5E5E" className="mr-2" />
          <div className="group-body text-xs font-semibold text-gray-600">
            Coding Ninjas Alumni netw...
          </div>
        </div>
        <div className="group-item py-1 hover:bg-gray-200 cursor-pointer px-2  flex item-center">
          <PeopleFill fill="#5E5E5E" className="mr-2" />
          <div className="group-body text-xs font-semibold text-gray-600">
            E-Learning Bridge
          </div>
        </div>
        <div className="recent-item flex items-center pb-2">
          <div className="w-full text-left pl-3 recent-body text-xs hover:bg-gray-200 hover:text-gray-700 cursor-pointer font-semibold text-gray-600 p-1">
            See all
          </div>
        </div>
        <div className="events flex items-center justify-between px-2">
          <div className="text-blue-600 hover:underline text-xs cursor-pointer font-bold">
            Events
          </div>
          <Plus
            size={20}
            className="h-6 w-6 hover:bg-gray-200 rounded-xl cursor-pointer "
          />
        </div>
      </div>

      <div className="hashtags-container">
        <ChevronParent className="hashtag-header flex items-center justify-between px-2">
          <div className="font-bold text-xs hover:underline text-blue-600 cursor-pointer">
            Followed Hashtags
          </div>
          <ChevronIcon className="chev-down" size={20} />
        </ChevronParent>
        <div className="hashtags">
          <div className="hashtag cursor-pointer hover:bg-gray-200 flex items-center pl-1">
            <Hash fill="#5E5E5E" className="mr-1" size={20} />
            <div className="recent-body text-xs font-semibold text-gray-600">
              future
            </div>
          </div>
          <div className="hashtag cursor-pointer hover:bg-gray-200 flex items-center pl-1">
            <Hash fill="#5E5E5E" className="mr-1" size={20} />
            <div className="recent-body text-xs font-semibold text-gray-600">
              feminism
            </div>
          </div>
          <div className="hashtag cursor-pointer hover:bg-gray-200 flex items-center pl-1">
            <Hash fill="#5E5E5E" className="mr-1" size={20} />
            <div className="recent-body text-xs font-semibold text-gray-600">
              startups
            </div>
          </div>
          <div className="hashtag cursor-pointer hover:bg-gray-200 flex items-center pl-1">
            <Hash fill="#5E5E5E" className="mr-1" size={20} />
            <div className="recent-body text-xs font-semibold text-gray-600">
              computing
            </div>
          </div>
          <div className="hashtag cursor-pointer hover:bg-gray-200 flex items-center pl-1">
            <Hash fill="#5E5E5E" className="mr-1" size={20} />
            <div className="recent-body text-xs font-semibold text-gray-600">
              creativity
            </div>
          </div>
        </div>
        <div className="show-more flex items-center pl-3 cursor-pointer hover:bg-gray-200 my-3 py-1">
          <div className="text-sm font-semibold text-gray-600 mr-1">
            Show more
          </div>
          <ChevronDown />
        </div>
        <hr />
        <div className="discover-more text-sm text-gray-600 font-semibold p-2 hover:bg-gray-200 cursor-pointer">
          Discover more
        </div>
      </div>
    </Card>
  );
}

export const ChevronIcon = styled(ChevronDown)`
  height: 30px;
  width: 30px;
  visibility: hidden;
  padding: 6px;
  &:hover {
    border-radius: 50%;
    background-color: #eee9e9;
    cursor: pointer;
  }
`;

export const ChevronParent = styled.div`
  &:hover .chev-down {
    visibility: visible;
  }
`;
