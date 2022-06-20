import React from "react";

const SearchBar: React.FC<{ className?: string }> = props => {

    const containerStyles = "mt-1 relative rounded-full shadow-sm"

    return (
        <div className={props.className ? props.className + " " + containerStyles : containerStyles}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">🔍</span>
            </div>
            <input
                type="text"
                name="search"
                id="search"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-full text-gray-900"
                placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                    className="hover:text-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-900 sm:text-sm rounded-full">
                    GO
                </button>
            </div>
        </div>
    )
}


export default SearchBar
