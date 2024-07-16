import logo from "../assets/projects/kevinRushLogo.png"; 
const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo"/>
            </div>
        </nav>
    )
}
export default Navbar;