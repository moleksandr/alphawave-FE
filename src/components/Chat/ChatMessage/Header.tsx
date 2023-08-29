import { useState, useRef } from 'react';
import { Avatar } from "../../Avatar";
import { Modal } from '../../Modal';


const Header = (props: any) => {
    const { user, channel, inviteToTheChannel, inviteToTheTeam } = props;
    const inputElement: any = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('system_user system_admin');
    const options = [
        { value: 'Admin', id: 'system_user system_admin' },
        { value: 'Member', id: 'system_user' }
    ]

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const inviteToChannel = () => {
        if (inputElement.current.value) {
            inviteToTheChannel(inputElement?.current?.value)
            setIsModalOpen(false);
        }
    }

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const inviteToTeam = () => {
        if (inputElement.current.value) {
            inviteToTheTeam(inputElement?.current?.value, selectedOption)
            setIsModalOpen(false);
        }
    }

    if (user.username) {
        return (
            <>
                <div className="pb-2 grid grid-cols-2">
                    <div className="flex items-center cursor-pointer" onClick={openModal}>
                        <Avatar avatarUrl={user.url} username={user.first_name} size={60} />
                        <span key={user?.first_name + ' ' + user?.last_name} className="px-2 text-xl font-bold">
                            {user?.first_name + ' ' + user?.last_name}
                        </span>
                    </div>
                </div>
                {/* Invite to Team Modal */}
                {isModalOpen ? <div className="flex justify-center items-center h-screen">
                    <Modal isOpen={isModalOpen} onClose={closeModal} setIsModalOpen={setIsModalOpen}>
                        <div>
                            <p className="text-md mb-4 bg-sky-500 text-white p-2 pl-4">Invite People to Your Team</p>
                            <p className='text-xs pl-4 text-gray-500'>To:</p>
                            <textarea className='resize-none overflow-hidden w-90 h-24 ml-4 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-sky-500' style={{ width: '95%' }} placeholder='i.e john@yahoo.com' ref={inputElement} />
                            <div className='mt-4'>
                                <label className='text-md pl-4 text-gray-500'>User Role: </label>
                                <select
                                    id="selectOption"
                                    name="selectOption"
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                    className="text-md mt-1 text-gray-500 shadow-sm border-gray-900 rounded-md"
                                >
                                    {options.map((option) => <option value={option.id}>{option.value}</option>)}
                                </select>
                            </div>
                            <div className='flex justify-end items-end'>
                                <button
                                    onClick={closeModal}
                                    className="py-3 px-4 rounded text-gray-500"
                                >
                                    Cancel
                                </button>
                                {'     '}
                                <button
                                    onClick={inviteToTeam}
                                    className="mb-2 mr-2 py-1 px-5 rounded bg-sky-500 hover:bg-gray-700 text-white font-bold"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div> : ''}
            </>

        )
    } else {
        return (
            <>
                <div className="pb-2 grid grid-cols-2">
                    <div className="flex items-center">
                        <Avatar avatarUrl={channel.url} username={channel.name} size={60} />
                        <span key={channel.name} className="px-2 text-xl font-bold">
                            {channel.name}
                        </span>
                    </div>
                    <div className="flex justify-end mt-3 cursor-pointer" onClick={openModal}>
                        <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M29.6852 8.28934C29.6852 12.8908 26.0169 16.5804 21.442 16.5804C16.8671 16.5804 13.1988 12.8908 13.1988 8.28934C13.1988 3.68611 16.8671 0 21.442 0C26.0169 0 29.6852 3.68611 29.6852 8.28934ZM21.4418 31.3333C14.7224 31.3333 8.985 30.268 8.985 26.007C8.985 21.7441 14.6856 20.64 21.4418 20.64C28.1612 20.64 33.8987 21.7053 33.8987 25.9681C33.8987 30.2292 28.1981 31.3333 21.4418 31.3333ZM33.2076 8.43888C33.2076 10.7846 32.5079 12.9698 31.2805 14.7864C31.1542 14.9733 31.2664 15.2256 31.4891 15.2644C31.796 15.3173 32.1134 15.3472 32.436 15.3561C35.6537 15.4407 38.5417 13.3578 39.3396 10.222C40.5214 5.56407 37.0512 1.38236 32.6324 1.38236C32.152 1.38236 31.6925 1.43351 31.2454 1.52522C31.184 1.53933 31.1192 1.56755 31.0841 1.62222C31.042 1.68924 31.0736 1.77919 31.1156 1.83739C32.443 3.70867 33.2076 5.99088 33.2076 8.43888ZM38.5363 18.6287C40.6984 19.0537 42.1205 19.9215 42.7096 21.1825C43.2076 22.2178 43.2076 23.4188 42.7096 24.4524C41.8084 26.4083 38.9028 27.0362 37.7736 27.1984C37.5403 27.2337 37.3527 27.0309 37.3773 26.7963C37.9542 21.3765 33.3653 18.8068 32.1781 18.216C32.1273 18.1895 32.1168 18.1489 32.122 18.1243C32.1255 18.1066 32.1466 18.0784 32.1852 18.0731C34.754 18.0255 37.5158 18.3782 38.5363 18.6287ZM10.6475 15.3559C10.9701 15.3471 11.2857 15.3188 11.5944 15.2642C11.8171 15.2254 11.9293 14.9732 11.803 14.7862C10.5756 12.9696 9.87593 10.7844 9.87593 8.43869C9.87593 5.99069 10.6405 3.70848 11.9679 1.8372C12.0099 1.779 12.0397 1.68905 11.9994 1.62203C11.9643 1.56912 11.8977 1.53914 11.8381 1.52503C11.3892 1.43332 10.9298 1.38217 10.4493 1.38217C6.03051 1.38217 2.56034 5.56388 3.74395 10.2218C4.54179 13.3576 7.4298 15.4405 10.6475 15.3559ZM10.9607 18.1232C10.9659 18.1497 10.9554 18.1885 10.9063 18.2167C9.71744 18.8076 5.12854 21.3772 5.70544 26.7953C5.72999 27.0316 5.54412 27.2327 5.3109 27.1992C4.18165 27.0369 1.27611 26.409 0.37481 24.4531C-0.124937 23.4178 -0.124937 22.2185 0.37481 21.1832C0.963985 19.9222 2.38432 19.0545 4.54638 18.6277C5.56867 18.379 8.32867 18.0262 10.8993 18.0739C10.9379 18.0792 10.9572 18.1074 10.9607 18.1232Z" fill="#787878" />
                        </svg>
                        <svg className="mb-6" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9747 5.86667H8.55042V3.49642C8.55042 2.4845 7.73886 1.65942 6.7389 1.65942C5.74101 1.65942 4.92738 2.4845 4.92738 3.49642V5.86667H2.5072C1.50724 5.86667 0.695679 6.69174 0.695679 7.70366C0.695679 8.71559 1.50724 9.54066 2.5072 9.54066H4.92738V11.913C4.92738 12.9249 5.74101 13.75 6.7389 13.75C7.73886 13.75 8.55042 12.9249 8.55042 11.913V9.54066H10.9747C11.9726 9.54066 12.7863 8.71559 12.7863 7.70366C12.7863 6.69174 11.9726 5.86667 10.9747 5.86667Z" fill="#787878" />
                            <path d="M10.9747 5.86667H8.55042V3.49642C8.55042 2.4845 7.73886 1.65942 6.7389 1.65942C5.74101 1.65942 4.92738 2.4845 4.92738 3.49642V5.86667H2.5072C1.50724 5.86667 0.695679 6.69174 0.695679 7.70366C0.695679 8.71559 1.50724 9.54066 2.5072 9.54066H4.92738V11.913C4.92738 12.9249 5.74101 13.75 6.7389 13.75C7.73886 13.75 8.55042 12.9249 8.55042 11.913V9.54066H10.9747C11.9726 9.54066 12.7863 8.71559 12.7863 7.70366C12.7863 6.69174 11.9726 5.86667 10.9747 5.86667" stroke="white" strokeWidth="1.36232" />
                        </svg>
                    </div>
                </div>
                {/* Invite to Channel Modal */}
                {isModalOpen ? <div className="flex justify-center items-center h-screen">
                    <Modal isOpen={isModalOpen} onClose={closeModal} setIsModalOpen={setIsModalOpen}>
                        <div>
                            <p className="text-md mb-4 bg-sky-500 text-white p-2 pl-4">Invite People to Your Channel</p>
                            <p className='text-xs pl-4 text-gray-500'>To:</p>
                            <textarea className='resize-none overflow-hidden w-90 h-24 ml-4 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-sky-500' style={{ width: '95%' }} placeholder='i.e john@yahoo.com' ref={inputElement} />
                            <div className='flex justify-end items-end'>
                                <button
                                    onClick={closeModal}
                                    className="py-3 px-4 rounded text-gray-500"
                                >
                                    Cancel
                                </button>
                                {'     '}
                                <button
                                    onClick={inviteToChannel}
                                    className="mb-2 mr-2 py-1 px-5 rounded bg-sky-500 hover:bg-gray-700 text-white font-bold"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div> : ''}
            </>

        )
    }
}

export default Header;