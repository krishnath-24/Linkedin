import React, { useState } from "react";
import {
  BellFill,
  BriefcaseFill,
  CaretDownFill,
  ChatDotsFill,
  HouseDoorFill,
  Linkedin,
  PeopleFill,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  InputSearch,
  MenuItem,
  MenuItemName,
  MenuItems,
  NavbarContainer,
} from "../../styled-components/Navbar";
import ProfileTab from "./ProfileTab";
import UserCard from "./UserCard";

export default function Navbar() {
  const [showUserCard, setShowUserCard] = useState(false);

  const handleUserCardToggle = () => {
    setShowUserCard(!showUserCard);
  };

  return (
    <>
      <NavbarContainer>
        <div className="flex relative">
          <Linkedin size={32} fill={"#0B65C2"} className="cursor-pointer" />
          <Search style={{ position: "absolute", top: "8px", left: "55px" }} />
          <InputSearch placeholder="Search" />
        </div>
        <MenuItems>
          <Link to="/feed">
            <MenuItem>
              <HouseDoorFill fill="#636E69" size={23} />
              <MenuItemName>Home</MenuItemName>
            </MenuItem>
          </Link>
          <Link to="/mynetwork">
            <MenuItem>
              <PeopleFill fill="#636E69" size={23} />
              <MenuItemName>My Network</MenuItemName>
            </MenuItem>
          </Link>
          <Link to="/jobs">
            <MenuItem>
              <BriefcaseFill fill="#636E69" size={23} />
              <MenuItemName>Jobs</MenuItemName>
            </MenuItem>
          </Link>
          <Link to="/messaging">
            <MenuItem>
              <ChatDotsFill fill="#636E69" size={23} />
              <MenuItemName>Messaging</MenuItemName>
            </MenuItem>
          </Link>
          <Link to="/notifications">
            <MenuItem>
              <BellFill fill="#636E69" size={23} />
              <MenuItemName>Notifications</MenuItemName>
            </MenuItem>
          </Link>

          <MenuItem onClick={handleUserCardToggle}>
            <ProfileTab />
            <div className="flex relative">
              <MenuItemName>Me</MenuItemName>
              <CaretDownFill fill="#696969" />
              <UserCard showUserCard={showUserCard} />
            </div>
          </MenuItem>
        </MenuItems>
      </NavbarContainer>
    </>
  );
}

export const LoginButton = styled.button``;
