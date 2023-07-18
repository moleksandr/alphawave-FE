// Dependencies
import React, { useState } from 'react';
import {Avatar} from "../../Avatar";

// Export component
const ChatLink = (props: any) => {
    const [hovered, setHovered] = useState(false);

    let color = '#dfdfdf';
    if (props.bold) color = 'white';
    if (hovered) color = 'yellow';

    return (
        <div className={`cursor-pointer w-full flex items-center ${props.is_direct_chat ? 'py-[7px]' : 'py-[5px]'}`}>
            {props.avatar ? (
                <Avatar className={'mr-[6px]'} avatarUrl={props.avatar} size={30} shadow />
            ) : (
                <img className="w-3 h-3" src="/images/icons/caret-right.svg" alt={'caret right'} />
            )}
            <div
                className="ml-[3px] flex-1 text-white text-base font-medium"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    ...{
                        color,
                        fontWeight: props.bold ? '900' : '500',
                        fontSize: props.bold ? '18px' : '17px',
                    }
                }}
                onClick={() => props.onClick()}
            >
                {props.title}
            </div>
        </div>
    )
}

export default ChatLink;
