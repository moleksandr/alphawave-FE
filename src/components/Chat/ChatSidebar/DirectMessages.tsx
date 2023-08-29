import { Avatar } from "../../Avatar";

const DirectMessage = (props: any) => {

    const { users, activeUser, getUser } = props;

    return (
        <div className="direct_message">
            <div className="flex justify-end mr-3">
                <button>
                    ...
                </button>
            </div>
            <div className="mt-2 mb-2 grid grid-cols-2">
                <div><p>Direct Messages</p></div>
                <div className="flex justify-end">
                    <button className="bg-white rounded-full p-2">
                        <svg
                            className="w-4 h-4 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="rounded-lg py-1 px-2"
                >
                    <ul>
                        {users?.map((user: any, index: number) => {
                            if (user?.id !== activeUser.id) {
                                return (
                                    <li key={index} className="flex items-center">
                                        <Avatar avatarUrl={user?.url} username={user?.first_name} />
                                        <span key={user?.first_name + ' ' + user?.last_name} className="text-white py-1 px-2 text-sm">
                                            <button onClick={() => getUser(user.username)}>{user?.first_name + ' ' + user?.last_name}</button>
                                        </span>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default DirectMessage;