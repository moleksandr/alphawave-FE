const Groups = (props: any) => {
    const { groups } = props;
    return (
        <div className="groups">
            <div className="flex justify-end mr-3">
                <button>
                    ...
                </button>
            </div>
            <div className="mt-2 mb-2 grid grid-cols-2">
                <div><p>Groups</p></div>
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
                        {groups?.map((group: string, index: number) => (
                            <li key={index} className="text-white py-1 text-sm">
                                {group}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Groups;