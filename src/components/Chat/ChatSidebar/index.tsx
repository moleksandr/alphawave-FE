import { useState } from "react";

import SearchBox from "./SearchBox";
import Channels from "./Channels";
import Groups from "./Groups";
import DirectMessages from "./DirectMessages";

const SideBar = (props: any) => {

    const { projects, groups, users, activeUser, getUser, setActiveChannel } = props;

    const [selectedProject, setSelectedProject] = useState('');

    const showProjects = (projectName: string) => {
        if (selectedProject === projectName) {
            setSelectedProject("")
        } else {
            setSelectedProject(projectName);
        }
    }

    return (
        <div className="w-1/4 h-90 overflow-y-scroll bg-gradient-to-r from-brandBlueDark to-brandBlue p-4 my-6 ml-6 mr-3 rounded-lg  text-white">
            <SearchBox placeholder="Search" />
            <Channels projects={projects} showProjects={showProjects} selectedProject={selectedProject} setActiveChannel={setActiveChannel} />
            <Groups groups={groups} />
            <DirectMessages users={users} activeUser={activeUser} getUser={getUser} />
        </div>)
}

export default SideBar;