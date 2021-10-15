import React from "react";
import UserAnalytics from "./UserAnalytics";
import Recent from "./Recent";

export default function LeftContent() {
  return (
    <div className="left-content-parent">
      <UserAnalytics />
      <Recent />
    </div>
  );
}
