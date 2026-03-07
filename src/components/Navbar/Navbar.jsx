import VelloxLogo from '../VelloxLogo/VelloxLogo'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar" id="top">
            <div className="navbar-brand">
                <VelloxLogo size={38} />
                <div className="navbar-text">
                    <span className="navbar-title">Vellox</span>
                    <span className="navbar-subtitle">Transform Data into Insight</span>
                </div>
            </div>
            <div className="navbar-links">
                <a href="#upload" className="nav-link nav-link-cta">Upload CSV</a>
            </div>
        </nav>
    )
}

export default Navbar
