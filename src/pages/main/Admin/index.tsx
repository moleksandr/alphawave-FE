import { useState } from "react";

import { MainLayout } from "../../../components/layouts/MainLayout";
import ModifyRoleModal from "./ModifyRoleModal";
import {
  settingIcon,
  customizeIcon,
  userIcon,
  securityIcon,
  billingIcon,
  statIcon,
  permissionIcon,
  inviteIcon,
  filterIcon,
  expandIcon,
  roleSettingIcon,
  moreIcon,
  sortupIcon,
  sortdownIcon,
} from "./icons";

const ROLES = [
  { title: "Manager", color: "#09B4EB" },
  { title: "Admin", color: "#003032" },
  { title: "Auditor", color: "#218F53" },
  { title: "Editor", color: "#8F5321" },
  { title: "Viewer", color: "#218F53" },
  { title: "Contributor", color: "#218F53" },
];

const STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  PENDING: "Pending",
};

const users = [
  {
    name: "Rana Utban",
    email: "ranautban007@gmail.com",
    roles: [0, 1, 2],
    avatar: "/images/avatars/user 1.png",
    status: STATUS.ACTIVE,
  },
  {
    name: "John Smith",
    email: "johnjacobmichaelsmith@gmail.com",
    roles: [0, 1, 2],
    avatar: "/images/avatars/user 7.png",
    status: STATUS.ACTIVE,
  },
  {
    name: "Alex Jones",
    email: "alex.jones44@hotmail.com",
    roles: [0, 1, 2],
    avatar: "/images/avatars/user 3.png",
    status: STATUS.ACTIVE,
  },
  {
    name: "Gabriela Garrido",
    email: "gabrielagarrido@yahoo.com",
    roles: [0],
    avatar: "/images/avatars/user 5.png",
    status: STATUS.ACTIVE,
  },
  {
    name: "Rana Utban",
    email: "ranautban007@gmail.com",
    roles: [0, 1, 2],
    avatar: "/images/avatars/user 6.png",
    status: STATUS.ACTIVE,
  },
  {
    name: "Sabrina Spellman",
    email: "sabrinavictoriaspellman@gmail.com",
    roles: [0, 2],
    avatar: "/images/avatars/user 6.png",
    status: STATUS.ACTIVE,
  },
  {
    name: "Alex Smythe",
    email: "alex.smythe@hotmail.com",
    roles: [0, 2],
    avatar: "/images/avatars/user 3.png",
    status: STATUS.ACTIVE,
  },
  {
    name: "Winston Zedmore",
    email: "WinstonZedmore@aol.com",
    roles: [0, 2],
    avatar: "/images/avatars/user 2.png",
    status: STATUS.ACTIVE,
  },
  {
    name: "John Smith",
    email: "johnjacobmichaelsmith@gmail.com",
    roles: [0, 1, 2],
    avatar: "/images/avatars/user 7.png",
    status: STATUS.ACTIVE,
  },
];

const SORT_STATUS = {
  UP: "up",
  DOWN: "down",
  NONE: "none",
};

const getNextStatus = (prev: string) => {
  switch (prev) {
    case SORT_STATUS.UP:
      return SORT_STATUS.DOWN;
    case SORT_STATUS.DOWN:
      return SORT_STATUS.NONE;
    case SORT_STATUS.NONE:
      return SORT_STATUS.UP;
  }
  return SORT_STATUS.NONE;
};

const Admin = () => {
  const [sortName, setSortName] = useState(SORT_STATUS.NONE);
  const [sortStatus, setSortStatus] = useState(SORT_STATUS.NONE);
  const [modifyRoleModalVisible, setModifyRoleModalVisible] = useState(false);

  return (
    <MainLayout>
      <div className="container flex h-[100%] pt-2 gap-9">
        {modifyRoleModalVisible && (
          <ModifyRoleModal onClose={() => setModifyRoleModalVisible(false)} />
        )}
        <div className="h-[100%]">
          <div>
            <h1 className="text-[36px] text-black ml-[33px]">Administration</h1>
            <a className="ml-[33px]">Learn more</a>
          </div>
          <div className="flex flex-col gap-2 relative h-[100%] sm:w-[240px] rounded-xl bg-white py-5 px-6 mt-[15px] sm:ml-[33px] card-shadow">
            <div className="home flex items-center py-2 gap-6">
              <img src={settingIcon} className="w-6 h-6" alt="" />
              <a href="#" className="home-buttons text-gray-darker text-lg">
                General
              </a>
            </div>
            <div className="home flex items-center py-2 gap-6">
              <img src={customizeIcon} className="w-6 h-6" alt="" />
              <a href="#" className="home-buttons text-gray-darker text-lg">
                Customization
              </a>
            </div>
            <div className="home flex items-center py-2 gap-6">
              <img src={userIcon} className="w-6 h-6" alt="" />
              <a href="#" className="home-buttons text-gray-darker text-lg">
                Users
              </a>
            </div>
            <div className="home flex items-center py-2 gap-6">
              <img src={securityIcon} className="w-6 h-6" alt="" />
              <a href="#" className="home-buttons text-gray-darker text-lg">
                Security
              </a>
            </div>
            <div className="home flex items-center py-2 gap-6">
              <img src={billingIcon} className="w-6 h-6" alt="" />
              <a href="#" className="home-buttons text-gray-darker text-lg">
                Billing
              </a>
            </div>
            <div className="home flex items-center py-2 gap-6">
              <img src={statIcon} className="w-6 h-6" alt="" />
              <a href="#" className="home-buttons text-gray-darker text-lg">
                Usage Stats
              </a>
            </div>
            <div className="home flex items-center py-2 gap-6">
              <img src={permissionIcon} className="w-6 h-6" alt="" />
              <a href="#" className="home-buttons text-gray-darker text-lg">
                Permissions
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <button
            type="button"
            className="flex inline-flex bg-[#09B4EB] items-center justify-center text-white w-[100px] h-[40px] gap-2 px-4 py-2.5 mt-3 rounded rounded-[10px]"
          >
            <img src={inviteIcon} className="w-5 h-5" alt="" />
            Invite
          </button>
          <div className="flex gap-2 items-center justify-end mb-2">
            <input
              type="text"
              placeholder="Search by name or email"
              className="border border-gray-400 rounded rounded-[5px] w-80 px-2 py-1"
            ></input>
            <div className="relative" data-te-dropdown-ref>
              <button
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                className="flex inline-flex items-center justify-center gap-1 bg-[#D9D9D9] text-center text-[#7C7979] w-24 h-8 rounded rounded-[5px]"
                type="button"
              >
                <img src={filterIcon} className="w-4 h-4" alt="" />
                Filter
                <img src={expandIcon} className="w-2 h-1" alt="" />
              </button>

              <div
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-45 h-70 absolute px-4 py-3 mt-1 text-[14px] [&[data-te-dropdown-show]]:block"
              >
                <span className="font-bold text-black">Filters</span>
                <div className="flex my-1 py-1 gap-4">
                  <div className="flex flex-col gap-1">
                    <span>User Role</span>
                    {ROLES.map((role, filterRoleIndex) => (
                      <span
                        className="bg-[#EFEFEF] w-25 h-7 px-2 py-1 rounded rounded-[5px] text-center"
                        key={`role-${filterRoleIndex}`}
                      >
                        {role.title}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>Status</span>
                    <span className="bg-[#EFEFEF] w-25 h-7 px-2 py-1 rounded rounded-[5px] text-center">
                      Active
                    </span>
                    <span className="bg-[#EFEFEF] w-25 h-7 px-2 py-1 rounded rounded-[5px] text-center">
                      Inactive
                    </span>
                    <span className="bg-[#EFEFEF] w-25 h-7 px-2 py-1 rounded rounded-[5px] text-center">
                      Pending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] gap-2 overflow-y">
            <div className="flex bg-[#09B4EB] w-[100%] h-[60px] rounded-t-lg items-center px-4 py-2">
              <div className="w-[30%] flex items-center">
                <input type="checkbox" className="w-5 h-5 mr-7" />
                <div className="flex items-center justify-center">
                  <span className="text-[16px] font-bold text-white">Name</span>
                  <div
                    className="flex flex-col ml-2"
                    onClick={() => setSortName((prev) => getNextStatus(prev))}
                  >
                    <img src={sortupIcon} className="w-3 h-3" alt="" />
                    <img src={sortdownIcon} className="w-3 h-3" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] flex items-center">
                <div className="flex items-center justify-center">
                  <span className="text-[16px] font-bold text-white">
                    User Role
                  </span>
                </div>
              </div>
              <div className="w-[20%] flex items-center">
                <div className="flex items-center justify-center">
                  <span className="text-[16px] font-bold text-white">
                    Action
                  </span>
                </div>
              </div>
              <div className="w-[20%] flex items-center">
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => setSortStatus((prev) => getNextStatus(prev))}
                >
                  <span className="text-[16px] font-bold text-white">
                    Status
                  </span>
                  <div className="flex flex-col ml-2">
                    <img src={sortupIcon} className="w-3 h-3" alt="" />
                    <img src={sortdownIcon} className="w-3 h-3" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {users.map((user, index) => (
              <div
                key={`user-item-${index}`}
                className="flex items-center bg-white w-[100%] h-[65px] px-4 py-2"
              >
                <div className="w-[5%] flex items-center">
                  <input type="checkbox" className="w-5 h-5 mr-7" />
                </div>
                <div className="w-[25%] flex items-center">
                  <div className="flex items-center cursor-pointer">
                    <img src={user.avatar} className="w-12 h-12 mr-4" />
                    <div className="flex flex-col">
                      <span className="text-[16px] font-bold truncate">
                        {user.name}
                      </span>
                      <span className="text-[12px] truncate">{user.email}</span>
                    </div>
                  </div>
                </div>
                <div className="w-[30%] flex gap-2 truncate">
                  {user.roles.map((role, roleIndex) => (
                    <div
                      className="flex justify-center items-center w-24 h-6 rounded rounded-[12px] text-white text-[12px]"
                      style={{ backgroundColor: ROLES[role].color }}
                      key={`user-role-${roleIndex}`}
                    >
                      {ROLES[role].title}
                    </div>
                  ))}
                </div>
                <div
                  className="w-[20%] flex items-center"
                  onClick={() => setModifyRoleModalVisible(true)}
                >
                  <span className="flex text-[16px] cursor-pointer">
                    <img src={roleSettingIcon} className="w-5 h-5 mr-2" />
                    Modify Roles
                  </span>
                </div>
                <div className="w-[15%] flex items-center">
                  <span className="flex text-[16px] cursor-pointer">
                    {user.status}
                  </span>
                </div>
                <div
                  className="w-[5%] items-center relative"
                  data-te-dropdown-ref
                >
                  <button
                    id={`dropdownMenuButton-${index}`}
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    type="button"
                  >
                    <span className="flex text-[16px] cursor-pointer">
                      <img src={moreIcon} className="w-5 h-5 mr-2" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-5">
            <span className="text-[14px]">Showing 9 of 56 Total Users</span>
            <div className="flex">
              <button type="button" className="w-10 mr-3 bg-white">
                First
              </button>
              <button type="button" className="w-5 bg-white">
                &lt;
              </button>
              {[1, 2, 3, 4].map((number) => {
                return (
                  <button
                    type="button"
                    className="w-5 bg-white"
                    key={`pagination-btn-${number}`}
                  >
                    {number}
                  </button>
                );
              })}
              <button type="button" className="w-5 bg-white">
                &gt;
              </button>
              <button type="button" className="w-10 ml-3 bg-white">
                Last
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Admin;
