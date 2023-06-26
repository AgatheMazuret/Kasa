import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header.js'

function Blank(){
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default Blank;