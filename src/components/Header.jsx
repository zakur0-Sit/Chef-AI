import logo from "../assets/icons/chef-ai-icon.png"

function Header() {
    return(
        <header className="w-full h-22 flex items-center justify-center gap-4">
            <img src={logo} alt="Logo" className="h-14"/>
            <h2 className="text-2xl">Chef AI</h2>
        </header>
    )
}

export default Header;