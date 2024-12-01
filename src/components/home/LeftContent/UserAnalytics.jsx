import React from "react";
import { BookmarkFill, SquareFill } from "react-bootstrap-icons";
import { UserAnalyticsCard } from "../../../styled-components/home/Home";
import { UserCircle } from "../../../styled-components/ProfileTab";
import { ProfileImage } from "../../../utils/Constants";

export default function UserAnalytics() {
  return (
    <UserAnalyticsCard>
      <div
        className="w-full h-16 z-0"
        style={{
          background: `url("https://static.licdn.com/aero-v1/sc/h/7sb67vl48t706tmd6vd4st83x") no-repeat center`,
        }}
      ></div>
      <UserCircle src={ProfileImage} width="70px" className="absolute top-6" />
      <div className="mt-12 font-bold hover:underline cursor-pointer">
        Anuj Sharma
      </div>
      <div className="text-xs font-medium mb-3 mt-1 text-gray-500">
        Software Engineer
      </div>
      <hr className="w-full" />
      <div className="profile-stats w-full py-3">
        <div className="stat flex justify-between cursor-pointer py-1 px-4 hover:bg-gray-200">
          <span className="text-xs font-semibold text-gray-600">
            Who viewed your profile
          </span>
          <span className="text-xs font-semibold text-blue-700">637</span>
        </div>
        <div className="stat flex justify-between w-full py-1 text-gray-600 cursor-pointer px-4 hover:bg-gray-200">
          <span className="text-xs font-semibold text-gray-600">
            Views of your post
          </span>
          <span className="text-xs font-semibold text-blue-700">2,147</span>
        </div>
      </div>
      <hr className="w-full" />
      <div className="insights-offer p-3 cursor-pointer hover:bg-gray-100 hover:text-blue-700">
        <div className="text-gray-500 text-xs font-medium">
          Access exclusive tools & insights
        </div>
        <div className="flex items-center text-xs font-medium ">
          <SquareFill size={10} fill="#e7a33e" />
          <span className="font-bold ml-2 hover:text-inherit">
            Try premium for free
          </span>
        </div>
      </div>
      <hr className="w-full" />
      <div className="my-items flex w-full p-3 items-center cursor-pointer hover:bg-gray-100">
        <BookmarkFill size={13} fill="#635d5d" />
        <span className="text-xs ml-2 font-bold text-gray-900">My items</span>
      </div>
    </UserAnalyticsCard>
  );
}
