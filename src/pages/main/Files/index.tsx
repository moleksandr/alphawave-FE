// Dependencies
import React, { useState } from "react";
// Components
import { Button } from "../../../components/common/Button";
import { MainLayout } from "../../../components/layouts/MainLayout";
import Image1 from "../../../components/Assts/Rectangle 4859.png";
import Image2 from "../../../components/Assts/Rectangle 4861.png";
import Image3 from "../../../components/Assts/Rectangle 4863.png";
import Image4 from "../../../components/Assts/Rectangle 4865.png";
import Image5 from "../../../components/Assts/Rectangle 4867.png";
import Image6 from "../../../components/Assts/Group 8757.png";
import Image7 from "../../../components/Assts/Group 8784.png";

// Types
import { BUTTON_VARIANTS } from "../../../components/common/Button/types";

// Export page
const Files = () => {
  return (
    <MainLayout>
      <div className="files flex bg-white">
        <div
          className="w-3/12 p-3"
          style={{ border: "1px solid #DBDBDB", width: "18.5%" }}
        >
          {/* Drop down  */}
          <div className="dropdown mb-5">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white button-primary-gradient hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-52 text-1xl"
              type="button"
            >
              <b> ADD NEW </b>
              <svg
                className="w-2.5 h-2.5 ml-2.5 ms-20"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Side Bar */}

          <div className="sidebar flex flex-col justify-center items-start ms-1 mb-4">
            <div className="home flex items-center gap-1">
              <svg
                width="20"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 10.8084C5 9.45062 5 8.77174 5.27446 8.175C5.54892 7.57826 6.06437 7.13645 7.09525 6.25284L8.09525 5.39569C9.95857 3.79856 10.8902 3 12 3C13.1098 3 14.0414 3.79856 15.9047 5.39569L16.9047 6.25284C17.9356 7.13645 18.4511 7.57826 18.7255 8.175C19 8.77174 19 9.45062 19 10.8084V15.0488C19 16.9344 19 17.8772 18.4142 18.463C17.8284 19.0488 16.8856 19.0488 15 19.0488H9C7.11438 19.0488 6.17157 19.0488 5.58579 18.463C5 17.8772 5 16.9344 5 15.0488V10.8084Z"
                  stroke="#5F6368"
                  stroke-width="2"
                />
                <path
                  d="M14.5 18.2927V13.7805C14.5 13.2282 14.0523 12.7805 13.5 12.7805H10.5C9.94772 12.7805 9.5 13.2282 9.5 13.7805V18.2927"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <a href="#" className="home-buttons text-gray-darker text-sm">
                Home
              </a>
            </div>
            <div className="home flex items-center gap-1">
              <svg
                width="24"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="14"
                  cy="9.33325"
                  r="2.75"
                  stroke="#5F6368"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M16.2069 7.66659C16.4212 7.29547 16.7407 6.99623 17.125 6.80669C17.5093 6.61716 17.9412 6.54585 18.3661 6.60179C18.791 6.65772 19.1897 6.83839 19.5119 7.12093C19.8341 7.40348 20.0652 7.77522 20.1761 8.18914C20.287 8.60307 20.2727 9.04059 20.135 9.44637C19.9972 9.85216 19.7422 10.208 19.4023 10.4689C19.0623 10.7297 18.6526 10.8839 18.225 10.9119C17.7974 10.94 17.3711 10.8406 17 10.6263"
                  stroke="#5F6368"
                  stroke-width="1.5"
                />
                <path
                  d="M11.7931 7.66659C11.5788 7.29547 11.2593 6.99623 10.875 6.80669C10.4907 6.61716 10.0588 6.54585 9.6339 6.60179C9.20904 6.65772 8.81031 6.83839 8.48812 7.12093C8.16594 7.40348 7.93478 7.77522 7.82387 8.18914C7.71296 8.60307 7.72728 9.04059 7.86503 9.44637C8.00277 9.85216 8.25775 10.208 8.59772 10.4689C8.9377 10.7297 9.34739 10.8839 9.775 10.9119C10.2026 10.94 10.6289 10.8406 11 10.6263"
                  stroke="#5F6368"
                  stroke-width="1.5"
                />
                <path
                  d="M14 14.5833C18.8961 14.5833 20.0564 18.6587 20.3313 20.5903C20.4091 21.1371 19.969 21.5833 19.4167 21.5833H8.58337C8.03109 21.5833 7.59093 21.1371 7.66876 20.5903C7.94371 18.6587 9.10394 14.5833 14 14.5833Z"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M22.5558 18.1641L23.5297 17.937V17.937L22.5558 18.1641ZM15.2683 14.6836L14.5298 14.0094L13.289 15.3684L15.1044 15.6701L15.2683 14.6836ZM20.0449 19.2501L19.0843 19.528L19.2932 20.2501H20.0449V19.2501ZM18.0834 14.4167C19.1529 14.4167 19.8997 14.9468 20.4681 15.7401C21.0564 16.5611 21.3977 17.6012 21.582 18.3913L23.5297 17.937C23.3204 17.0396 22.9041 15.706 22.0939 14.5752C21.2638 13.4167 19.9712 12.4167 18.0834 12.4167V14.4167ZM16.0068 15.3579C16.5258 14.7894 17.1825 14.4167 18.0834 14.4167V12.4167C16.5266 12.4167 15.3595 13.1006 14.5298 14.0094L16.0068 15.3579ZM15.1044 15.6701C17.5594 16.0781 18.6123 17.8967 19.0843 19.528L21.0055 18.9722C20.4354 17.0017 18.9861 14.2877 15.4322 13.6972L15.1044 15.6701ZM21.645 18.2501H20.0449V20.2501H21.645V18.2501ZM21.582 18.3913C21.5792 18.3794 21.5776 18.3566 21.5844 18.3297C21.5909 18.3043 21.6022 18.2855 21.6126 18.2733C21.633 18.2494 21.65 18.2501 21.645 18.2501V20.2501C22.8011 20.2501 23.8279 19.2156 23.5297 17.937L21.582 18.3913Z"
                  fill="#5F6368"
                />
                <path
                  d="M12.7317 14.6836L12.8956 15.6701L14.711 15.3684L13.4702 14.0094L12.7317 14.6836ZM5.44417 18.1641L6.41803 18.3913L5.44417 18.1641ZM7.95511 19.2501V20.2501H8.70681L8.91572 19.528L7.95511 19.2501ZM9.91664 14.4167C10.8176 14.4167 11.4742 14.7894 11.9932 15.3579L13.4702 14.0094C12.6405 13.1006 11.4734 12.4167 9.91664 12.4167V14.4167ZM6.41803 18.3913C6.60231 17.6012 6.94356 16.5611 7.53185 15.7401C8.10025 14.9468 8.84709 14.4167 9.91664 14.4167V12.4167C8.02877 12.4167 6.73617 13.4167 5.90609 14.5752C5.0959 15.706 4.67962 17.0396 4.47031 17.937L6.41803 18.3913ZM6.35496 18.2501C6.34999 18.2501 6.36694 18.2494 6.38737 18.2733C6.39777 18.2855 6.40909 18.3044 6.41554 18.3297C6.42243 18.3566 6.42079 18.3794 6.41803 18.3913L4.47031 17.937C4.17207 19.2156 5.19884 20.2501 6.35496 20.2501V18.2501ZM7.95511 18.2501H6.35496V20.2501H7.95511V18.2501ZM8.91572 19.528C9.38767 17.8967 10.4406 16.0781 12.8956 15.6701L12.5678 13.6972C9.01394 14.2878 7.56459 17.0017 6.9945 18.9722L8.91572 19.528Z"
                  fill="#5F6368"
                />
              </svg>

              <a href="#" className="home-buttons text-gray-darker text-sm">
                Starred
              </a>
            </div>
            <div className="home flex items-center gap-1">
              <svg
                width="18"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#5F6368"
                  stroke-width="2"
                />
                <path
                  d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <a href="#" className="home-buttons text-gray-darker text-sm">
                Recent
              </a>
            </div>
            <div className="home flex items-center gap-1">
              <svg
                width="22"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1437 6.62753C10.9303 4.66653 11.3236 3.68604 12 3.68604C12.6763 3.68604 13.0696 4.66653 13.8562 6.62753L13.8928 6.71885C14.3372 7.82672 14.5594 8.38065 15.0123 8.71734C15.4651 9.05403 16.0596 9.10727 17.2485 9.21374L17.4634 9.23299C19.4092 9.40726 20.3822 9.49439 20.5903 10.1134C20.7985 10.7324 20.076 11.3897 18.6309 12.7044L18.1487 13.1432C17.4172 13.8087 17.0514 14.1414 16.8809 14.5776C16.8491 14.6589 16.8227 14.7423 16.8018 14.8271C16.6897 15.2817 16.7968 15.7645 17.0111 16.7299L17.0777 17.0305C17.4714 18.8048 17.6682 19.692 17.3246 20.0746C17.1961 20.2176 17.0292 20.3206 16.8438 20.3712C16.3476 20.5066 15.6431 19.9325 14.2342 18.7844C13.309 18.0305 12.8464 17.6536 12.3153 17.5688C12.1064 17.5354 11.8935 17.5354 11.6846 17.5688C11.1535 17.6536 10.6909 18.0305 9.76577 18.7844C8.35681 19.9325 7.65234 20.5066 7.15614 20.3712C6.97072 20.3206 6.80381 20.2176 6.67538 20.0746C6.33171 19.692 6.52854 18.8048 6.92222 17.0305L6.98889 16.7299C7.2031 15.7645 7.31021 15.2817 7.19815 14.8271C7.17725 14.7423 7.15081 14.6589 7.11901 14.5776C6.94854 14.1414 6.58279 13.8087 5.85128 13.1432L5.369 12.7044C3.92395 11.3897 3.20143 10.7324 3.40961 10.1134C3.61779 9.49439 4.5907 9.40726 6.53651 9.23299L6.75145 9.21374C7.94036 9.10727 8.53482 9.05403 8.98767 8.71734C9.44052 8.38065 9.66272 7.82672 10.1071 6.71885L10.1437 6.62753Z"
                  stroke="#5F6368"
                  stroke-width="2"
                />
              </svg>

              <a href="#" className="home-buttons text-gray-darker text-sm">
                Starred
              </a>
            </div>
            <div className="home flex items-center gap-1">
              <svg
                width="22"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 14.5L9.5 11.5"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M14.5 14.5L14.5 11.5"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M3 6.5H21V6.5C19.5955 6.5 18.8933 6.5 18.3889 6.83706C18.1705 6.98298 17.983 7.17048 17.8371 7.38886C17.5 7.89331 17.5 8.59554 17.5 10V15.5C17.5 17.3856 17.5 18.3284 16.9142 18.9142C16.3284 19.5 15.3856 19.5 13.5 19.5H10.5C8.61438 19.5 7.67157 19.5 7.08579 18.9142C6.5 18.3284 6.5 17.3856 6.5 15.5V10C6.5 8.59554 6.5 7.89331 6.16294 7.38886C6.01702 7.17048 5.82952 6.98298 5.61114 6.83706C5.10669 6.5 4.40446 6.5 3 6.5V6.5Z"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M9.5 3.50024C9.5 3.50024 10 2.5 12 2.5C14 2.5 14.5 3.5 14.5 3.5"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <a href="#" className="home-buttons text-gray-darker text-sm">
                Trash
              </a>
            </div>
          </div>
          {/* Folders */}
          <h1
            className="mb-4 pb-2"
            style={{ borderBottom: "1px solid #B3B3B3" }}
          >
            <b>Folders</b>
          </h1>
          <div className="sidebar flex flex-col justify-center ms-3 mb-1">
            <div className="home flex items-center gap-1">
              <svg
                width="8"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 1L8.82785 7.06056"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M2 13.2133L8.82785 7.1527"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <svg
                width="24"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 10H21.45C23.1302 10 23.9702 10 24.612 10.327C25.1765 10.6146 25.6354 11.0735 25.923 11.638C26.25 12.2798 26.25 13.1198 26.25 14.8V18.95C26.25 20.6302 26.25 21.4702 25.923 22.112C25.6354 22.6765 25.1765 23.1354 24.612 23.423C23.9702 23.75 23.1302 23.75 21.45 23.75H8.55C6.86984 23.75 6.02976 23.75 5.38803 23.423C4.82354 23.1354 4.3646 22.6765 4.07698 22.112C3.75 21.4702 3.75 20.6302 3.75 18.95V10Z"
                  fill="#03B5EA"
                />
                <path
                  d="M3.75 10C3.75 8.35626 3.75 7.53439 4.20398 6.98121C4.28709 6.87995 4.37995 6.78709 4.48121 6.70398C5.03439 6.25 5.85626 6.25 7.5 6.25H10.8431C11.6606 6.25 12.0694 6.25 12.4369 6.40224C12.8045 6.55448 13.0935 6.84351 13.6716 7.42157L16.25 10H3.75Z"
                  fill="#03B5EA"
                />
              </svg>

              <a href="#" className="folder-button text-gray-darker text-sm">
                My Files
              </a>
            </div>
            <div className="home flex items-center gap-1">
              <svg
                width="8"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 1L8.82785 7.06056"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M2 13.2133L8.82785 7.1527"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <svg
                width="24"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 10H21.45C23.1302 10 23.9702 10 24.612 10.327C25.1765 10.6146 25.6354 11.0735 25.923 11.638C26.25 12.2798 26.25 13.1198 26.25 14.8V18.95C26.25 20.6302 26.25 21.4702 25.923 22.112C25.6354 22.6765 25.1765 23.1354 24.612 23.423C23.9702 23.75 23.1302 23.75 21.45 23.75H8.55C6.86984 23.75 6.02976 23.75 5.38803 23.423C4.82354 23.1354 4.3646 22.6765 4.07698 22.112C3.75 21.4702 3.75 20.6302 3.75 18.95V10Z"
                  fill="#03B5EA"
                />
                <path
                  d="M3.75 10C3.75 8.35626 3.75 7.53439 4.20398 6.98121C4.28709 6.87995 4.37995 6.78709 4.48121 6.70398C5.03439 6.25 5.85626 6.25 7.5 6.25H10.8431C11.6606 6.25 12.0694 6.25 12.4369 6.40224C12.8045 6.55448 13.0935 6.84351 13.6716 7.42157L16.25 10H3.75Z"
                  fill="#03B5EA"
                />
              </svg>

              <a href="#" className="folder-button text-gray-darker text-sm">
                Projects
              </a>
            </div>
            <div className="home flex items-center gap-1">
              <svg
                width="8"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 1L8.82785 7.06056"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M2 13.2133L8.82785 7.1527"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <svg
                width="24"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 10H21.45C23.1302 10 23.9702 10 24.612 10.327C25.1765 10.6146 25.6354 11.0735 25.923 11.638C26.25 12.2798 26.25 13.1198 26.25 14.8V18.95C26.25 20.6302 26.25 21.4702 25.923 22.112C25.6354 22.6765 25.1765 23.1354 24.612 23.423C23.9702 23.75 23.1302 23.75 21.45 23.75H8.55C6.86984 23.75 6.02976 23.75 5.38803 23.423C4.82354 23.1354 4.3646 22.6765 4.07698 22.112C3.75 21.4702 3.75 20.6302 3.75 18.95V10Z"
                  fill="#03B5EA"
                />
                <path
                  d="M3.75 10C3.75 8.35626 3.75 7.53439 4.20398 6.98121C4.28709 6.87995 4.37995 6.78709 4.48121 6.70398C5.03439 6.25 5.85626 6.25 7.5 6.25H10.8431C11.6606 6.25 12.0694 6.25 12.4369 6.40224C12.8045 6.55448 13.0935 6.84351 13.6716 7.42157L16.25 10H3.75Z"
                  fill="#03B5EA"
                />
              </svg>

              <a href="#" className="folder-button text-gray-darker text-sm">
                All Library
              </a>
            </div>
            <div className="home flex items-center gap-1">
              <svg
                width="8"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 1L8.82785 7.06056"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M2 13.2133L8.82785 7.1527"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <svg
                width="24"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 10H21.45C23.1302 10 23.9702 10 24.612 10.327C25.1765 10.6146 25.6354 11.0735 25.923 11.638C26.25 12.2798 26.25 13.1198 26.25 14.8V18.95C26.25 20.6302 26.25 21.4702 25.923 22.112C25.6354 22.6765 25.1765 23.1354 24.612 23.423C23.9702 23.75 23.1302 23.75 21.45 23.75H8.55C6.86984 23.75 6.02976 23.75 5.38803 23.423C4.82354 23.1354 4.3646 22.6765 4.07698 22.112C3.75 21.4702 3.75 20.6302 3.75 18.95V10Z"
                  fill="#03B5EA"
                />
                <path
                  d="M3.75 10C3.75 8.35626 3.75 7.53439 4.20398 6.98121C4.28709 6.87995 4.37995 6.78709 4.48121 6.70398C5.03439 6.25 5.85626 6.25 7.5 6.25H10.8431C11.6606 6.25 12.0694 6.25 12.4369 6.40224C12.8045 6.55448 13.0935 6.84351 13.6716 7.42157L16.25 10H3.75Z"
                  fill="#03B5EA"
                />
              </svg>

              <a href="#" className="folder-button text-gray-darker text-sm">
                Policies
              </a>
            </div>
            <div className="home flex items-center gap-1">
              <svg
                width="8"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 1L8.82785 7.06056"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M2 13.2133L8.82785 7.1527"
                  stroke="#5F6368"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <svg
                width="24"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 10H21.45C23.1302 10 23.9702 10 24.612 10.327C25.1765 10.6146 25.6354 11.0735 25.923 11.638C26.25 12.2798 26.25 13.1198 26.25 14.8V18.95C26.25 20.6302 26.25 21.4702 25.923 22.112C25.6354 22.6765 25.1765 23.1354 24.612 23.423C23.9702 23.75 23.1302 23.75 21.45 23.75H8.55C6.86984 23.75 6.02976 23.75 5.38803 23.423C4.82354 23.1354 4.3646 22.6765 4.07698 22.112C3.75 21.4702 3.75 20.6302 3.75 18.95V10Z"
                  fill="#03B5EA"
                />
                <path
                  d="M3.75 10C3.75 8.35626 3.75 7.53439 4.20398 6.98121C4.28709 6.87995 4.37995 6.78709 4.48121 6.70398C5.03439 6.25 5.85626 6.25 7.5 6.25H10.8431C11.6606 6.25 12.0694 6.25 12.4369 6.40224C12.8045 6.55448 13.0935 6.84351 13.6716 7.42157L16.25 10H3.75Z"
                  fill="#03B5EA"
                />
              </svg>

              <a href="#" className="folder-button text-gray-darker text-sm">
                Shared Files
              </a>
            </div>
          </div>
        </div>

        {/* Quick Acces  */}
        <div
          className="leftside w-6/12 p-3"
          style={{ border: "1px solid #DBDBDB", width: "63%" }}
        >
          <h2 className="quic-access text-xl mb-5">
            <b>Quick Access</b>
          </h2>
          {/* Cards  */}
          <div className="flex justify-center items-center overflow-hidden gap-4">
            <div className="Cards shadow-none" style={{ width: "19%" }}>
              <div
                className="bg-white rounded-lg overflow-hidden"
                style={{ border: "1px solid #B3B3B3" }}
              >
                <img
                  className="w-full h-25 object-cover"
                  src={Image1}
                  alt="Image"
                  style={{ width: "100%" }}
                />
                <div className="p-1" style={{ height: "43px" }}>
                  <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
                  <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                    Ceated Today
                  </p>
                </div>
              </div>
            </div>

            <div className="Cards" style={{ width: "19%" }}>
              <div
                className="bg-white rounded-lg overflow-hidden"
                style={{ border: "1px solid #aba4a4" }}
              >
                <img
                  className="w-full h-25 object-cover"
                  src={Image2}
                  alt="Image"
                  style={{ width: "100%" }}
                />
                <div className="p-1" style={{ height: "43px" }}>
                  <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
                  <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                    Ceated Today
                  </p>
                </div>
              </div>
            </div>

            <div className="Cards" style={{ width: "19%" }}>
              <div
                className="bg-white rounded-lg overflow-hidden"
                style={{ border: "1px solid #aba4a4" }}
              >
                <img
                  className="w-full h-25 object-cover"
                  src={Image3}
                  alt="Image"
                  style={{ width: "100%" }}
                />
                <div className="p-1" style={{ height: "43px" }}>
                  <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
                  <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                    Ceated Today
                  </p>
                </div>
              </div>
            </div>

            <div className="Cards" style={{ width: "19%" }}>
              <div
                className="bg-white rounded-lg overflow-hidden"
                style={{ border: "1px solid #aba4a4" }}
              >
                <img
                  className="w-full h-25 object-cover"
                  src={Image4}
                  alt="Image"
                  style={{ width: "100%" }}
                />
                <div className="p-1" style={{ height: "43px" }}>
                  <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
                  <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                    Ceated Today
                  </p>
                </div>
              </div>
            </div>

            <div className="Cards" style={{ width: "19%" }}>
              <div
                className="bg-white rounded-lg overflow-hidden"
                style={{ border: "1px solid #aba4a4" }}
              >
                <img
                  className="w-full h-25 object-cover"
                  src={Image5}
                  alt="Image"
                  style={{ width: "100%" }}
                />
                <div className="p-1" style={{ height: "43px" }}>
                  <h2 className="text-xs font-semibold">HorseofCourse.png</h2>
                  <p className="text-gray-600 mt-1" style={{ fontSize: "9px" }}>
                    Ceated Today
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Access Folder  */}
          <h2 className="folder text-xl my-4">
            <b>Folders</b>
          </h2>
          <div className="flex justify-center items-center gap-4 mb-2">
            <div
              className="folder border border-#aba4a4 flex-col justify-center"
              style={{ width: "19%", height: "110px", borderRadius: "10px" }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 21.3334H51.2C52.8802 21.3334 53.7202 21.3334 54.362 21.6604C54.9265 21.948 55.3854 22.4069 55.673 22.9714C56 23.6131 56 24.4532 56 26.1334V45.8667C56 47.5469 56 48.3869 55.673 49.0287C55.3854 49.5932 54.9265 50.0521 54.362 50.3397C53.7202 50.6667 52.8802 50.6667 51.2 50.6667H12.8C11.1198 50.6667 10.2798 50.6667 9.63803 50.3397C9.07354 50.0521 8.6146 49.5932 8.32698 49.0287C8 48.3869 8 47.5469 8 45.8667V21.3334Z"
                  fill="#03B5EA"
                />
                <path
                  d="M8 17.3334C8 15.4478 8 14.5049 8.58579 13.9192C9.17157 13.3334 10.1144 13.3334 12 13.3334H25.0098C25.8273 13.3334 26.2361 13.3334 26.6036 13.4856C26.9711 13.6379 27.2602 13.9269 27.8382 14.5049L34.6667 21.3334H8V17.3334Z"
                  fill="#03B5EA"
                />
              </svg>

              <span className="quic-acess-file ps-2">
                <b>My Files</b>
              </span>
              <h6 className="quic-acess-file ps-2" style={{ fontSize: "9px" }}>
                Last Modified 12/12/2023
              </h6>
            </div>

            <div
              className="folder border border-#B3B3B3 flex-col justify-center"
              style={{ width: "19%", height: "110px", borderRadius: "10px" }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 21.3334H51.2C52.8802 21.3334 53.7202 21.3334 54.362 21.6604C54.9265 21.948 55.3854 22.4069 55.673 22.9714C56 23.6131 56 24.4532 56 26.1334V45.8667C56 47.5469 56 48.3869 55.673 49.0287C55.3854 49.5932 54.9265 50.0521 54.362 50.3397C53.7202 50.6667 52.8802 50.6667 51.2 50.6667H12.8C11.1198 50.6667 10.2798 50.6667 9.63803 50.3397C9.07354 50.0521 8.6146 49.5932 8.32698 49.0287C8 48.3869 8 47.5469 8 45.8667V21.3334Z"
                  fill="#03B5EA"
                />
                <path
                  d="M8 17.3334C8 15.4478 8 14.5049 8.58579 13.9192C9.17157 13.3334 10.1144 13.3334 12 13.3334H25.0098C25.8273 13.3334 26.2361 13.3334 26.6036 13.4856C26.9711 13.6379 27.2602 13.9269 27.8382 14.5049L34.6667 21.3334H8V17.3334Z"
                  fill="#03B5EA"
                />
              </svg>

              <span className="quic-acess-file ps-2">
                <b>Projects</b>
              </span>
              <h6 className="quic-acess-file ps-2" style={{ fontSize: "9px" }}>
                Last Modified 12/12/2023
              </h6>
            </div>

            <div
              className="folder border border-#B3B3B3 flex-col justify-center"
              style={{ width: "19%", height: "110px", borderRadius: "10px" }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 21.3334H51.2C52.8802 21.3334 53.7202 21.3334 54.362 21.6604C54.9265 21.948 55.3854 22.4069 55.673 22.9714C56 23.6131 56 24.4532 56 26.1334V45.8667C56 47.5469 56 48.3869 55.673 49.0287C55.3854 49.5932 54.9265 50.0521 54.362 50.3397C53.7202 50.6667 52.8802 50.6667 51.2 50.6667H12.8C11.1198 50.6667 10.2798 50.6667 9.63803 50.3397C9.07354 50.0521 8.6146 49.5932 8.32698 49.0287C8 48.3869 8 47.5469 8 45.8667V21.3334Z"
                  fill="#03B5EA"
                />
                <path
                  d="M8 17.3334C8 15.4478 8 14.5049 8.58579 13.9192C9.17157 13.3334 10.1144 13.3334 12 13.3334H25.0098C25.8273 13.3334 26.2361 13.3334 26.6036 13.4856C26.9711 13.6379 27.2602 13.9269 27.8382 14.5049L34.6667 21.3334H8V17.3334Z"
                  fill="#03B5EA"
                />
              </svg>

              <span className="quic-acess-file ps-2">
                <b>AI Library</b>
              </span>
              <h6 className="quic-acess-file ps-2" style={{ fontSize: "9px" }}>
                Last Modified 12/12/2023
              </h6>
            </div>

            <div
              className="folder border border-#B3B3B3 flex-col justify-center"
              style={{ width: "19%", height: "110px", borderRadius: "10px" }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 21.3334H51.2C52.8802 21.3334 53.7202 21.3334 54.362 21.6604C54.9265 21.948 55.3854 22.4069 55.673 22.9714C56 23.6131 56 24.4532 56 26.1334V45.8667C56 47.5469 56 48.3869 55.673 49.0287C55.3854 49.5932 54.9265 50.0521 54.362 50.3397C53.7202 50.6667 52.8802 50.6667 51.2 50.6667H12.8C11.1198 50.6667 10.2798 50.6667 9.63803 50.3397C9.07354 50.0521 8.6146 49.5932 8.32698 49.0287C8 48.3869 8 47.5469 8 45.8667V21.3334Z"
                  fill="#03B5EA"
                />
                <path
                  d="M8 17.3334C8 15.4478 8 14.5049 8.58579 13.9192C9.17157 13.3334 10.1144 13.3334 12 13.3334H25.0098C25.8273 13.3334 26.2361 13.3334 26.6036 13.4856C26.9711 13.6379 27.2602 13.9269 27.8382 14.5049L34.6667 21.3334H8V17.3334Z"
                  fill="#03B5EA"
                />
              </svg>

              <span className="quic-acess-file ps-2">
                <b>Ploicies</b>
              </span>
              <h6 className="quic-acess-file ps-2" style={{ fontSize: "9px" }}>
                Last Modified 12/12/2023
              </h6>
            </div>

            <div
              className="folder border border-#B3B3B3 flex-col justify-center"
              style={{ width: "19%", height: "110px", borderRadius: "10px" }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 21.3334H51.2C52.8802 21.3334 53.7202 21.3334 54.362 21.6604C54.9265 21.948 55.3854 22.4069 55.673 22.9714C56 23.6131 56 24.4532 56 26.1334V45.8667C56 47.5469 56 48.3869 55.673 49.0287C55.3854 49.5932 54.9265 50.0521 54.362 50.3397C53.7202 50.6667 52.8802 50.6667 51.2 50.6667H12.8C11.1198 50.6667 10.2798 50.6667 9.63803 50.3397C9.07354 50.0521 8.6146 49.5932 8.32698 49.0287C8 48.3869 8 47.5469 8 45.8667V21.3334Z"
                  fill="#03B5EA"
                />
                <path
                  d="M8 17.3334C8 15.4478 8 14.5049 8.58579 13.9192C9.17157 13.3334 10.1144 13.3334 12 13.3334H25.0098C25.8273 13.3334 26.2361 13.3334 26.6036 13.4856C26.9711 13.6379 27.2602 13.9269 27.8382 14.5049L34.6667 21.3334H8V17.3334Z"
                  fill="#03B5EA"
                />
              </svg>

              <span className="quic-acess-file ps-2">
                <b>Shared Files</b>
              </span>
              <h6 className="quic-acess-file ps-2" style={{ fontSize: "9px" }}>
                Last Modified 12/12/2023
              </h6>
            </div>
          </div>

          {/* Recent Files  */}
          <div className="Recent Files">
            <div className="flex justify-between items-center p-1">
              <div className="Heading">
                <h2 className="recent-files text-xl my-4">
                  <b>Recent Files</b>
                </h2>
              </div>
              <div className="icons">
                <svg
                  width="55"
                  height="15"
                  viewBox="0 0 55 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="8" height="7" fill="#909EAB" />
                  <rect x="9" width="8" height="7" fill="#909EAB" />
                  <rect x="9" y="8" width="8" height="7" fill="#909EAB" />
                  <rect x="37" width="3" height="3" fill="#03B5EA" />
                  <rect x="37" y="12" width="3" height="3" fill="#03B5EA" />
                  <rect x="37" y="6" width="3" height="3" fill="#03B5EA" />
                  <rect x="42" width="13" height="3" fill="#03B5EA" />
                  <rect x="42" y="12" width="13" height="3" fill="#03B5EA" />
                  <rect x="42" y="6" width="13" height="3" fill="#03B5EA" />
                  <rect y="8" width="8" height="7" fill="#909EAB" />
                </svg>
              </div>
            </div>
            <table>
              <tr className="table-heaing">
                <div className="flex items-center">
                  <th className="pl-10 flex gap-1 items-center">
                    Modified
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16L4.64645 16.3536L5 16.7071L5.35355 16.3536L5 16ZM5.5 1C5.5 0.723858 5.27614 0.5 5 0.5C4.72386 0.5 4.5 0.723858 4.5 1L5.5 1ZM0.646447 12.3536L4.64645 16.3536L5.35355 15.6464L1.35355 11.6464L0.646447 12.3536ZM5.35355 16.3536L9.35355 12.3536L8.64645 11.6464L4.64645 15.6464L5.35355 16.3536ZM5.5 16L5.5 1L4.5 1L4.5 16L5.5 16Z"
                        fill="black"
                      />
                    </svg>
                  </th>
                  {/* <svg
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16L4.64645 16.3536L5 16.7071L5.35355 16.3536L5 16ZM5.5 1C5.5 0.723858 5.27614 0.5 5 0.5C4.72386 0.5 4.5 0.723858 4.5 1L5.5 1ZM0.646447 12.3536L4.64645 16.3536L5.35355 15.6464L1.35355 11.6464L0.646447 12.3536ZM5.35355 16.3536L9.35355 12.3536L8.64645 11.6464L4.64645 15.6464L5.35355 16.3536ZM5.5 16L5.5 1L4.5 1L4.5 16L5.5 16Z"
                      fill="black"
                    />
                  </svg> */}
                </div>
                <th>Location</th>
                <th>Owner</th>
                <th></th>
              </tr>

              <tr className="table-data">
                <div className="table-data-img flex items-center gap-2">
                  <img className="recentfiles-img" src={Image7} alt="" />

                  <td>Tremebhdh.png</td>
                </div>
                <td>Project</td>
                <td>Gabrill Gabrio</td>
                <td>
                  <svg
                    width="22"
                    height="6"
                    viewBox="0 0 22 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="19" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="11" cy="3" r="3" fill="#B3B3B3" />
                  </svg>
                </td>
              </tr>

              <tr className="table-data">
                <div className="table-data-img flex items-center gap-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 34 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="34" height="33" rx="5" fill="#40A04D" />
                    <path
                      d="M8.33558 21.18C7.67558 21.18 7.12558 21.008 6.68558 20.664C6.24958 20.32 5.94358 19.856 5.76758 19.272L7.19558 18.93C7.23958 19.174 7.36758 19.384 7.57958 19.56C7.79158 19.736 8.02558 19.824 8.28158 19.824C8.44958 19.824 8.62758 19.78 8.81558 19.692C9.00358 19.6 9.14358 19.454 9.23558 19.254C9.29158 19.126 9.32358 18.974 9.33158 18.798C9.34358 18.618 9.34958 18.41 9.34958 18.174V12.36H10.8136V18.174C10.8136 18.442 10.8116 18.678 10.8076 18.882C10.8076 19.082 10.7876 19.272 10.7476 19.452C10.7116 19.628 10.6376 19.81 10.5256 19.998C10.2896 20.406 9.98158 20.706 9.60158 20.898C9.22158 21.086 8.79958 21.18 8.33558 21.18ZM12.6193 21V12.36H16.1893C16.2733 12.36 16.3813 12.364 16.5133 12.372C16.6453 12.376 16.7673 12.388 16.8793 12.408C17.3793 12.484 17.7913 12.65 18.1153 12.906C18.4433 13.162 18.6853 13.486 18.8413 13.878C19.0013 14.266 19.0813 14.698 19.0813 15.174C19.0813 15.646 19.0013 16.078 18.8413 16.47C18.6813 16.858 18.4373 17.18 18.1093 17.436C17.7853 17.692 17.3753 17.858 16.8793 17.934C16.7673 17.95 16.6433 17.962 16.5073 17.97C16.3753 17.978 16.2693 17.982 16.1893 17.982H14.0653V21H12.6193ZM14.0653 16.632H16.1293C16.2093 16.632 16.2993 16.628 16.3993 16.62C16.4993 16.612 16.5913 16.596 16.6753 16.572C16.9153 16.512 17.1033 16.406 17.2393 16.254C17.3793 16.102 17.4773 15.93 17.5333 15.738C17.5933 15.546 17.6233 15.358 17.6233 15.174C17.6233 14.99 17.5933 14.802 17.5333 14.61C17.4773 14.414 17.3793 14.24 17.2393 14.088C17.1033 13.936 16.9153 13.83 16.6753 13.77C16.5913 13.746 16.4993 13.732 16.3993 13.728C16.2993 13.72 16.2093 13.716 16.1293 13.716H14.0653V16.632ZM23.8474 21.18C23.2874 21.18 22.7614 21.082 22.2694 20.886C21.7814 20.686 21.3514 20.394 20.9794 20.01C20.6114 19.626 20.3234 19.156 20.1154 18.6C19.9074 18.04 19.8034 17.4 19.8034 16.68C19.8034 15.736 19.9794 14.93 20.3314 14.262C20.6834 13.59 21.1654 13.076 21.7774 12.72C22.3894 12.36 23.0794 12.18 23.8474 12.18C24.9114 12.18 25.7534 12.428 26.3734 12.924C26.9974 13.416 27.4194 14.108 27.6394 15L26.1634 15.234C25.9994 14.722 25.7314 14.314 25.3594 14.01C24.9874 13.702 24.5134 13.548 23.9374 13.548C23.3574 13.54 22.8754 13.666 22.4914 13.926C22.1074 14.186 21.8174 14.552 21.6214 15.024C21.4294 15.496 21.3334 16.048 21.3334 16.68C21.3334 17.312 21.4294 17.862 21.6214 18.33C21.8134 18.794 22.1014 19.156 22.4854 19.416C22.8734 19.676 23.3574 19.81 23.9374 19.818C24.3734 19.822 24.7554 19.744 25.0834 19.584C25.4114 19.42 25.6794 19.174 25.8874 18.846C26.0954 18.514 26.2354 18.1 26.3074 17.604H24.7834V16.47H27.8434C27.8514 16.534 27.8574 16.628 27.8614 16.752C27.8654 16.876 27.8674 16.95 27.8674 16.974C27.8674 17.79 27.7054 18.516 27.3814 19.152C27.0614 19.784 26.6014 20.28 26.0014 20.64C25.4014 21 24.6834 21.18 23.8474 21.18Z"
                      fill="white"
                    />
                  </svg>

                  <td>Background.jpg</td>
                </div>
                <td>Project</td>
                <td>Mark Stewart</td>
                <td>
                  <svg
                    width="22"
                    height="6"
                    viewBox="0 0 22 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="19" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="11" cy="3" r="3" fill="#B3B3B3" />
                  </svg>
                </td>
              </tr>

              <tr className="table-data">
                <div className="table-data-img flex items-center gap-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 34 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="34" height="33" rx="5" fill="#1B8A96" />
                    <path
                      d="M6.46869 21L3.94269 12.36H5.46069L7.18269 18.6L8.89869 12.372L10.4167 12.36L12.1387 18.6L13.8547 12.36H15.3727L12.8527 21H11.4247L9.65469 14.856L7.89669 21H6.46869ZM16.3517 21V12.36H21.9317V13.716H17.7977V15.846H21.2117V17.202H17.7977V19.644H21.9317V21H16.3517ZM23.3713 21V12.36H26.9413C27.0253 12.36 27.1333 12.364 27.2653 12.372C27.3973 12.376 27.5193 12.388 27.6313 12.408C28.1313 12.484 28.5433 12.65 28.8672 12.906C29.1953 13.162 29.4373 13.486 29.5933 13.878C29.7533 14.266 29.8333 14.698 29.8333 15.174C29.8333 15.646 29.7533 16.078 29.5933 16.47C29.4333 16.858 29.1893 17.18 28.8613 17.436C28.5373 17.692 28.1273 17.858 27.6313 17.934C27.5193 17.95 27.3953 17.962 27.2593 17.97C27.1273 17.978 27.0213 17.982 26.9413 17.982H24.8173V21H23.3713ZM24.8173 16.632H26.8813C26.9613 16.632 27.0513 16.628 27.1513 16.62C27.2513 16.612 27.3433 16.596 27.4273 16.572C27.6673 16.512 27.8553 16.406 27.9913 16.254C28.1313 16.102 28.2293 15.93 28.2853 15.738C28.3453 15.546 28.3753 15.358 28.3753 15.174C28.3753 14.99 28.3453 14.802 28.2853 14.61C28.2293 14.414 28.1313 14.24 27.9913 14.088C27.8553 13.936 27.6673 13.83 27.4273 13.77C27.3433 13.746 27.2513 13.732 27.1513 13.728C27.0513 13.72 26.9613 13.716 26.8813 13.716H24.8173V16.632Z"
                      fill="white"
                    />
                  </svg>

                  <td>Slider.web</td>
                </div>
                <td>Project</td>
                <td>Owner</td>
                <td>
                  <svg
                    width="22"
                    height="6"
                    viewBox="0 0 22 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="19" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="11" cy="3" r="3" fill="#B3B3B3" />
                  </svg>
                </td>
              </tr>

              <tr className="table-data">
                <div className="table-data-img flex items-center gap-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 34 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="34" height="33" rx="5" fill="#F0615C" />
                    <path
                      d="M6.66617 21V12.36H10.2362C10.3202 12.36 10.4282 12.364 10.5602 12.372C10.6922 12.376 10.8142 12.388 10.9262 12.408C11.4262 12.484 11.8382 12.65 12.1622 12.906C12.4902 13.162 12.7322 13.486 12.8882 13.878C13.0482 14.266 13.1282 14.698 13.1282 15.174C13.1282 15.646 13.0482 16.078 12.8882 16.47C12.7282 16.858 12.4842 17.18 12.1562 17.436C11.8322 17.692 11.4222 17.858 10.9262 17.934C10.8142 17.95 10.6902 17.962 10.5542 17.97C10.4222 17.978 10.3162 17.982 10.2362 17.982H8.11217V21H6.66617ZM8.11217 16.632H10.1762C10.2562 16.632 10.3462 16.628 10.4462 16.62C10.5462 16.612 10.6382 16.596 10.7222 16.572C10.9622 16.512 11.1502 16.406 11.2862 16.254C11.4262 16.102 11.5242 15.93 11.5802 15.738C11.6402 15.546 11.6702 15.358 11.6702 15.174C11.6702 14.99 11.6402 14.802 11.5802 14.61C11.5242 14.414 11.4262 14.24 11.2862 14.088C11.1502 13.936 10.9622 13.83 10.7222 13.77C10.6382 13.746 10.5462 13.732 10.4462 13.728C10.3462 13.72 10.2562 13.716 10.1762 13.716H8.11217V16.632ZM14.3302 21V12.36H17.0842C17.1562 12.36 17.2982 12.362 17.5102 12.366C17.7262 12.37 17.9342 12.384 18.1342 12.408C18.8182 12.496 19.3962 12.74 19.8682 13.14C20.3442 13.536 20.7042 14.042 20.9482 14.658C21.1922 15.274 21.3142 15.948 21.3142 16.68C21.3142 17.412 21.1922 18.086 20.9482 18.702C20.7042 19.318 20.3442 19.826 19.8682 20.226C19.3962 20.622 18.8182 20.864 18.1342 20.952C17.9382 20.976 17.7322 20.99 17.5162 20.994C17.3002 20.998 17.1562 21 17.0842 21H14.3302ZM15.8002 19.638H17.0842C17.2042 19.638 17.3562 19.634 17.5402 19.626C17.7282 19.618 17.8942 19.6 18.0382 19.572C18.4462 19.496 18.7782 19.314 19.0342 19.026C19.2902 18.738 19.4782 18.388 19.5982 17.976C19.7222 17.564 19.7842 17.132 19.7842 16.68C19.7842 16.212 19.7222 15.772 19.5982 15.36C19.4742 14.948 19.2822 14.602 19.0222 14.322C18.7662 14.042 18.4382 13.864 18.0382 13.788C17.8942 13.756 17.7282 13.738 17.5402 13.734C17.3562 13.726 17.2042 13.722 17.0842 13.722H15.8002V19.638ZM22.7326 21V12.36H27.9346V13.806H24.1786V15.96H27.2146V17.4H24.1786V21H22.7326Z"
                      fill="white"
                    />
                  </svg>

                  <td>Test History1.pdf</td>
                </div>
                <td>Project</td>
                <td>John Smith</td>
                <td>
                  <svg
                    width="22"
                    height="6"
                    viewBox="0 0 22 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="19" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="11" cy="3" r="3" fill="#B3B3B3" />
                  </svg>
                </td>
              </tr>

              <tr className="table-data">
                <div className="table-data-img flex items-center gap-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 34 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="34" height="33" rx="5" fill="#F7BB26" />
                    <path
                      d="M8.10781 21V20.802L12.3678 13.716H8.40781V12.36H14.8698V12.564L10.6338 19.638H14.7678V21H8.10781ZM16.4248 21V12.36H17.8708V21H16.4248ZM19.6681 21V12.36H23.2381C23.3221 12.36 23.4301 12.364 23.5621 12.372C23.6941 12.376 23.8161 12.388 23.9281 12.408C24.4281 12.484 24.8401 12.65 25.1641 12.906C25.4921 13.162 25.7341 13.486 25.8901 13.878C26.0501 14.266 26.1301 14.698 26.1301 15.174C26.1301 15.646 26.0501 16.078 25.8901 16.47C25.7301 16.858 25.4861 17.18 25.1581 17.436C24.8341 17.692 24.4241 17.858 23.9281 17.934C23.8161 17.95 23.6921 17.962 23.5561 17.97C23.4241 17.978 23.3181 17.982 23.2381 17.982H21.1141V21H19.6681ZM21.1141 16.632H23.1781C23.2581 16.632 23.3481 16.628 23.4481 16.62C23.5481 16.612 23.6401 16.596 23.7241 16.572C23.9641 16.512 24.1521 16.406 24.2881 16.254C24.4281 16.102 24.5261 15.93 24.5821 15.738C24.6421 15.546 24.6721 15.358 24.6721 15.174C24.6721 14.99 24.6421 14.802 24.5821 14.61C24.5261 14.414 24.4281 14.24 24.2881 14.088C24.1521 13.936 23.9641 13.83 23.7241 13.77C23.6401 13.746 23.5481 13.732 23.4481 13.728C23.3481 13.72 23.2581 13.716 23.1781 13.716H21.1141V16.632Z"
                      fill="white"
                    />
                  </svg>

                  <td>Get Started.zip</td>
                </div>
                <td>Project</td>
                <td>California</td>
                <td>
                  <svg
                    width="22"
                    height="6"
                    viewBox="0 0 22 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="19" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="11" cy="3" r="3" fill="#B3B3B3" />
                  </svg>
                </td>
              </tr>
              <tr className="table-data">
                <div className="table-data-img flex items-center gap-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 34 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="34" height="33" rx="5" fill="#383785" />
                    <path
                      d="M9.09073 21.18C8.45873 21.18 7.88873 21.07 7.38073 20.85C6.87673 20.63 6.46073 20.316 6.13273 19.908C5.80873 19.496 5.60273 19.008 5.51473 18.444L7.01473 18.216C7.14273 18.728 7.40473 19.124 7.80073 19.404C8.20073 19.684 8.66073 19.824 9.18073 19.824C9.48873 19.824 9.77873 19.776 10.0507 19.68C10.3227 19.584 10.5427 19.444 10.7107 19.26C10.8827 19.076 10.9687 18.85 10.9687 18.582C10.9687 18.462 10.9487 18.352 10.9087 18.252C10.8687 18.148 10.8087 18.056 10.7287 17.976C10.6527 17.896 10.5527 17.824 10.4287 17.76C10.3087 17.692 10.1687 17.634 10.0087 17.586L7.77673 16.926C7.58473 16.87 7.37673 16.796 7.15273 16.704C6.93273 16.608 6.72273 16.478 6.52273 16.314C6.32673 16.146 6.16473 15.934 6.03673 15.678C5.91273 15.418 5.85073 15.098 5.85073 14.718C5.85073 14.162 5.99073 13.696 6.27073 13.32C6.55473 12.94 6.93473 12.656 7.41073 12.468C7.89073 12.28 8.42273 12.188 9.00673 12.192C9.59873 12.196 10.1267 12.298 10.5907 12.498C11.0547 12.694 11.4427 12.98 11.7547 13.356C12.0667 13.732 12.2867 14.186 12.4147 14.718L10.8607 14.988C10.7967 14.684 10.6727 14.426 10.4887 14.214C10.3087 13.998 10.0867 13.834 9.82273 13.722C9.56273 13.61 9.28473 13.55 8.98873 13.542C8.70073 13.538 8.43273 13.582 8.18473 13.674C7.94073 13.762 7.74273 13.89 7.59073 14.058C7.44273 14.226 7.36873 14.422 7.36873 14.646C7.36873 14.858 7.43273 15.032 7.56073 15.168C7.68873 15.3 7.84673 15.406 8.03473 15.486C8.22673 15.562 8.42073 15.626 8.61673 15.678L10.1647 16.11C10.3767 16.166 10.6147 16.242 10.8787 16.338C11.1427 16.434 11.3967 16.568 11.6407 16.74C11.8847 16.912 12.0847 17.138 12.2407 17.418C12.4007 17.698 12.4807 18.054 12.4807 18.486C12.4807 18.934 12.3867 19.328 12.1987 19.668C12.0147 20.004 11.7647 20.284 11.4487 20.508C11.1327 20.732 10.7707 20.9 10.3627 21.012C9.95873 21.124 9.53473 21.18 9.09073 21.18ZM15.4891 21L12.7651 12.36H14.2531L16.5331 19.596L18.8431 12.36H20.3311L17.6071 21H15.4891ZM24.5622 21.18C24.0022 21.18 23.4762 21.082 22.9842 20.886C22.4962 20.686 22.0662 20.394 21.6942 20.01C21.3262 19.626 21.0382 19.156 20.8302 18.6C20.6222 18.04 20.5182 17.4 20.5182 16.68C20.5182 15.736 20.6942 14.93 21.0462 14.262C21.3982 13.59 21.8802 13.076 22.4922 12.72C23.1042 12.36 23.7942 12.18 24.5622 12.18C25.6262 12.18 26.4682 12.428 27.0882 12.924C27.7122 13.416 28.1342 14.108 28.3542 15L26.8782 15.234C26.7142 14.722 26.4462 14.314 26.0742 14.01C25.7022 13.702 25.2282 13.548 24.6522 13.548C24.0722 13.54 23.5902 13.666 23.2062 13.926C22.8222 14.186 22.5322 14.552 22.3362 15.024C22.1442 15.496 22.0482 16.048 22.0482 16.68C22.0482 17.312 22.1442 17.862 22.3362 18.33C22.5282 18.794 22.8162 19.156 23.2002 19.416C23.5882 19.676 24.0722 19.81 24.6522 19.818C25.0882 19.822 25.4702 19.744 25.7982 19.584C26.1262 19.42 26.3942 19.174 26.6022 18.846C26.8102 18.514 26.9502 18.1 27.0222 17.604H25.4982V16.47H28.5582C28.5662 16.534 28.5722 16.628 28.5762 16.752C28.5802 16.876 28.5822 16.95 28.5822 16.974C28.5822 17.79 28.4202 18.516 28.0962 19.152C27.7762 19.784 27.3162 20.28 26.7162 20.64C26.1162 21 25.3982 21.18 24.5622 21.18Z"
                      fill="white"
                    />
                  </svg>

                  <td>Add-24px(2).svg</td>
                </div>
                <td>Project</td>
                <td>John Smith</td>
                <td>
                  <svg
                    width="22"
                    height="6"
                    viewBox="0 0 22 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="19" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="11" cy="3" r="3" fill="#B3B3B3" />
                  </svg>
                </td>
              </tr>
              <tr className="table-data">
                <div className="table-data-img flex items-center gap-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 34 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="34" height="33" rx="5" fill="#34979F" />
                    <path
                      d="M4.73844 21V12.36H6.18444V15.996H10.2764V12.36H11.7164V21H10.2764V17.352H6.18444V21H4.73844ZM15.4746 21V13.716H12.6786V12.36H19.7166V13.716H16.9206V21H15.4746ZM20.6759 21V12.36H21.9779L24.9659 18.48L27.9539 12.36H29.2559V21H27.9059V15.462L25.2539 21H24.6779L22.0319 15.462V21H20.6759Z"
                      fill="white"
                    />
                  </svg>

                  <td>My Site.htm</td>
                </div>
                <td>Project</td>
                <td>John Smith</td>
                <td>
                  <svg
                    width="22"
                    height="6"
                    viewBox="0 0 22 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="19" cy="3" r="3" fill="#B3B3B3" />
                    <circle cx="11" cy="3" r="3" fill="#B3B3B3" />
                  </svg>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div
          className="w-3/12 p-3 flex justify-center items-center"
          style={{ border: "1px solid #DBDBDB", width: "18.5%" }}
        >
          <img src={Image6} alt="" style={{ width: "85%" }} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Files;
