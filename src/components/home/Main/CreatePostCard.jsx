import React, { useState } from "react";
import {
  CalendarDate,
  CardText,
  Image,
  PlayBtnFill,
  X,
} from "react-bootstrap-icons";
import styled from "styled-components";
import { UserCircle } from "../../../styled-components/ProfileTab";
import { ProfileImage } from "../../../utils/Constants";
import { Dialog } from "@material-ui/core";

export default function CreatePostCard() {
  const [showModal, setShowModal] = useState(false);
  const [imageUpload, setImageUpload] = useState(true);

  const handleFileUpload = (video) => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Card className="px-5 pt-3 pb-1 w-full">
        <div className="flex">
          <UserCircle width="50px" src={ProfileImage} />
          <CreatePost
            onClick={handleFileUpload}
            className="ml-2 font-semibold cursor-pointer hover:bg-gray-100 px-4"
          >
            Start a post
          </CreatePost>
        </div>
        <CreatePostItems>
          <div
            onClick={() => {
              setImageUpload(true);
              handleFileUpload();
            }}
            className="create-post-item hover:bg-gray-200"
          >
            <Image size={18} fill="#70B5F9" />
            <div>Photo</div>
          </div>
          <div
            onClick={() => {
              setImageUpload(false);
              handleFileUpload();
            }}
            className="create-post-item hover:bg-gray-200"
          >
            <PlayBtnFill size={18} fill="#7FC05E" />
            <div>Video</div>
          </div>
          <div className="create-post-item hover:bg-gray-200">
            <CalendarDate size={18} fill="#E7A33E" />
            <div>Event</div>
          </div>
          <div className="create-post-item hover:bg-gray-200">
            <CardText size={18} fill="#FC9294" />
            <div>Article</div>
          </div>
        </CreatePostItems>
      </Card>
      <Dialog open={showModal} onClose={handleClose} fullWidth maxWidth="sm">
        <div className="dialog-content">
          <header className="flex px-3 pt-5 py-3 pb-5 justify-between items-center">
            <div className="text-xl font-medium">
              Edit your {imageUpload ? "photo" : "video"}
            </div>
            <X size={26} onClick={handleClose} className="cursor-pointer" />
          </header>
          <hr />
          <main className="flex flex-col pt-5 justify-center items-center w-full">
            <FileUploadLabel htmlFor="file-upload">
              Select {imageUpload ? "images" : "videos"} to share
            </FileUploadLabel>
            <input type="file" id="file-upload" className="invisible" />
          </main>
          <hr />
          <footer className="py-3">
            <div className="dialog-controls-buttons flex flex-row-reverse justify-right">
              <DoneButton>Done</DoneButton>
              <CancelButton onClick={handleClose}>Cancel</CancelButton>
            </div>
          </footer>
        </div>
      </Dialog>
    </Container>
  );
}

export const Container = styled.div``;
export const Card = styled.div`
  background-color: white;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 0px 0px 1px #e4e2e2;
  
`;

export const CreatePost = styled.div`
  width: 450px;
  height: 50px;
  border: 1px solid #dfdbdb;
  border-radius: 40px;
  color: #615d5d;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const CreatePostItems = styled.div`
  display: flex;
  padding-top: 6px;
  justify-content: space-between;
  div.create-post-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 5px;
    min-width: 85px;
    min-height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }

  div.create-post-item div {
    color: #6e6969;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const CancelButton = styled.div`
  border: 1px solid #0b65c2;
  height: 30px;
  padding: 0px 15px;
  border-radius: 16px;
  color: #0b65c2;
  font-weight: bold;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DoneButton = styled.div`
  height: 30px;
  padding: 0px 15px;
  border-radius: 16px;
  color: #9c9ea0;
  font-weight: bold;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  background: #eceaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileUploadLabel = styled.label`
  cursor: pointer;
  color: #0962bb;
  font-weight: bold;
  padding: 5px;
  border-radius: 3px;
  transition: all 100ms ease-in-out;

  &:hover {
    background-color: #e3f0fe;
  }
`;
