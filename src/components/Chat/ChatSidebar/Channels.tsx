const Channels = (props: any) => {
    const { projects, showProjects, selectedProject, setActiveChannel } = props;
    return (<div className="channels">
        <div className="flex justify-end mr-3">
            <button>
                ...
            </button>
        </div>
        <div className="mt-2 mb-2 grid grid-cols-2">
            <div><p>Channels</p></div>
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
                className="rounded-lg px-2 py-1 z-10"
            >
                <ul>
                    {projects?.map((project: any) => (
                        <li key={project.id} className="text-white py-1 text-sm">
                            <span className="text-white cursor-pointer" onClick={() => showProjects(project.id)}>
                                {selectedProject === project.id ? 'v ' : '> '}
                            </span>
                            <button onClick={() => setActiveChannel(project)}>{project.name}</button>

                            {selectedProject === project.id && (
                                <ul>
                                    {project.list.map((item: string, index: number) => (
                                        <li key={index} className="text-white py-2 text-sm">- {item}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>)
}

export default Channels;