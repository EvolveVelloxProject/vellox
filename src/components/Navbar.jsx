import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                        stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="navbar-text">
                <span className="navbar-title">Data Alchemist</span>
                <span className="navbar-subtitle">Public Data Insight Generator</span>
            </div>
        </nav>
    )
}

export default Navbar
