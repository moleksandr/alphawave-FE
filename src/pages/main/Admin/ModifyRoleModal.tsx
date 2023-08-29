import { useEffect, useRef } from "react";
import formatFileSize from "../../../utils/bytes";
import { IFile } from "../../../types/index";

type ModifyRoleModalProps = {
  onClose?: () => void;
};

const ModifyRoleModal = (props: ModifyRoleModalProps) => {
  const { onClose } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose && onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 text-black text-[14px]">
      <div className="fixed inset-0 bg-black opacity-80"></div>
      <div
        className="justify-center bg-white rounded-lg z-50 min-w-[500px] min-h-[550px] px-6 py-3"
        ref={modalRef}
      >
        <div className="flex flex-col border-[5px] border-[#09B4EB] rounded rounded-[10px] px-3 py-5 gap-3">
          <div className="flex flex-col">
            <h3 className="text-[16px] font-bold">Modify Roles</h3>
            <span>Select which roles this user has.</span>
            <div className="flex py-2 gap-10">
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <input type="checkbox" className="mr-1" />
                  <span>Admin</span>
                </div>
                <div className="flex">
                  <input type="checkbox" className="mr-1" />
                  <span>Manager</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <input type="checkbox" className="mr-1" />
                  <span>Editor</span>
                </div>
                <div className="flex">
                  <input type="checkbox" className="mr-1" />
                  <span>Viewer</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <input type="checkbox" className="mr-1" />
                  <span>Auditor</span>
                </div>
                <div className="flex">
                  <input type="checkbox" className="mr-1" />
                  <span>Contributor</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[16px] font-bold">Job Title</h3>
            <span>Update your email address for login and notifications.</span>
            <span className="ml-4">
              <span className="font-bold">Current Job Title: </span>
              Chief Meow Officer
              <a className="ml-2 text-blue-400">Edit</a>
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[16px] font-bold">Change Name</h3>
            <span>Option to update your name as it appears on this site.</span>
            <span className="ml-4">
              <span className="font-bold">Current Name: </span>
              Gabriela Garrido
              <a className="ml-2 text-blue-400">Edit</a>
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[16px] font-bold">Email Address</h3>
            <span>Update your email address for login and notifications.</span>
            <span className="ml-4">
              <span className="font-bold">Current Email Address: </span>
              gabrielagarrido85@yahoo.com
              <a className="ml-2 text-blue-400">Edit</a>
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[16px] font-bold">Display Name</h3>
            <span>
              Option to change your first name to a preferred name or nickname.
            </span>
            <span className="ml-4">
              <span className="font-bold">Display Name: </span>
              <input
                type="text"
                className="border border-gray-400 rounded rounded-[5px] w-60 px-2 py-1"
              ></input>
            </span>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="w-20 mr-3 bg-white px-3 py-2 px-rounded rounded-[5px]"
            >
              Cancel
            </button>
            <button
              type="button"
              className="w-20 bg-[#09B4EB] text-white px-3 py-2 rounded rounded-[5px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyRoleModal;
