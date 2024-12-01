import React from "react";
import {
  UserCard as UC,
  ViewProfileButton,
} from "../../styled-components/home/UserCard";
import { UserCircle } from "../../styled-components/ProfileTab";
import { useDispatch } from "react-redux";
import { setName } from "../../slices/userSlice";
import { setEmail } from "../../slices/userSlice";
import { useHistory } from "react-router-dom";

export default function UserCard({ showUserCard }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleUserLogout = () => {
    history.push("/login");
    dispatch(setName({ name: "" }));
    dispatch(setEmail({ email: "" }));
  };
  return (
    <UC show={showUserCard}>
      <div className="card-content">
        <div className="card-header flex px-3 my-2">
          <UserCircle
            src="https://media.licdn.com/dms/image/v2/D5603AQGf5fV-ZodbRw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678984126191?e=1738800000&v=beta&t=d_CbH4shD_KFx4pnKCqjUlEUhF-SBiO5i611_vo2IRM"
            width="50px"
          />
          <div className="flex flex-col justify-start items-start pl-2">
            <div className="title font-semibold">Anuj Sharma</div>
            <div className="text-sm ">Software Engineer</div>
          </div>
        </div>
        <ViewProfileButton className="mx-3 mb-2">
          View Profile
        </ViewProfileButton>
        <hr />
        <div className="flex flex-col ">
          <div className="flex flex-col items-start my-1 px-3">
            <div className="font-semibold">Account</div>
            <div className="font-normal py-1 text-sm text-gray-500 hover:underline">
              Settings & privacy
            </div>
            <div className="font-normal py-1 text-sm text-gray-500 hover:underline">
              Help
            </div>
            <div className="font-normal py-1 text-sm text-gray-500 hover:underline">
              Language
            </div>
          </div>
          <hr />
          <div className="flex flex-col items-start my-1 px-3">
            <div className="font-semibold">Manage</div>
            <div className="font-normal py-1 text-sm text-gray-500 hover:underline">
              Posts & Activity
            </div>
            <div className="font-normal py-1 text-sm text-gray-500 hover:underline">
              Job Posting Account
            </div>
          </div>
          <hr />
          <div
            onClick={handleUserLogout}
            className="text-left text-sm font-normal py-2 px-3 text-gray-500 hover:underline"
          >
            Sign Out
          </div>
        </div>
      </div>
    </UC>
  );
}
