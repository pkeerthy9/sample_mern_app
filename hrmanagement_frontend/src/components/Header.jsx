import{Link} from "react-router-dom"

function Header(){

    return(
        <div >
            <Link to="/">Home</Link>
            <Link to="/About">About us</Link>
            <Link to="/Contact">Contact us</Link>

        </div>
    )
}

export default Header