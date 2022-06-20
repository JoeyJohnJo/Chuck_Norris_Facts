import {useState} from "react";

const TabBar = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <ul className="flex flex-wrap border-b border-gray-200">
            <li className="mr-2">
                <a href="#" aria-current="page"
                   className="inline-block bg-gray-100 text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center active">Profile</a>
            </li>
            <li className="mr-2">
                <a href="#"
                   className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center">Dashboard</a>
            </li>
            <li className="mr-2">
                <a href="#"
                   className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center">Settings</a>
            </li>
            <li className="mr-2">
                <a href="#"
                   className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center">Contacts</a>
            </li>
        </ul>
    )
}

export default TabBar
