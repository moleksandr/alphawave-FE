const SearchBox = (props: any) => {
    const { placeholder } = props;
    return (
        <div className="flex items-center rounded-md border p-2 bg-bgColorGrey bg-opacity-80">
            <svg
                className="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 18a7 7 0 100-14 7 7 0 000 14z"
                ></path>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35"
                ></path>
            </svg>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-transparent focus:outline-none"
            />
        </div>
    )
}

export default SearchBox;