import logo from '../../assets/images/logo.png'
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-row items-center drop-shadow-lg">
            <a href="#" className="px-8 hidden sm:inline" onClick={() => navigate("/")}>
                <img src={logo} alt="Chuck Norris Logo"/>
            </a>
            <a href="#" onClick={() => navigate("/")}
               className="px-5 sm:px-0 text-xl md:text-4xl leading-8 font-extrabold tracking-tight text-gray-900"> CHUCK
                NORRIS FACTS </a>
        </div>
    )
}

export default Header
