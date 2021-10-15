import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CreatePostCard from "./CreatePostCard";
import { DivFlex } from "../../../styled-components/common/CommonStyles";
import FeedCard from "./FeedCard";
export default function Main() {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        data.length = 10;
        setPosts(data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(({ data }) => {
        data.results.length = 10;
        setUsers(data.results);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return (
    <div className="mx-6">
      <CreatePostCard />
      <SortFeed className="flex items-center mt-3">
        <hr className="w-full text-gray-400" />
        <DivFlex>
          <div className="w-16 text-gray-400 text-sm">Sort by: </div>
          <select className="text-xs font-semibold mx-0 px-0 bg-transparent select-none outline-none">
            <option value="Top">Top</option>
            <option value="Recent">Recent</option>
          </select>
        </DivFlex>
      </SortFeed>
      <FeedContainer className="sort-feed-container">
        {users &&
          posts &&
          posts.map((item, index) => {
            return <FeedCard {...item} user={users[index]} />;
          })}
      </FeedContainer>
    </div>
  );
}

export const FeedContainer = styled.div`
  margin-top: 20px;
`;

export const SortFeed = styled.div``;
