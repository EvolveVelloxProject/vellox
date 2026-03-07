import './Footer.css'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="footer-logo">Vellox</span>
                    <span className="footer-dot">•</span>
                    <span className="footer-tagline">Transform Data into Insight</span>
                </div>
                <p className="footer-copy">
                    © {year} Vellox. Built with React.
                </p>
            </div>
        </footer>
    )
}

export default Footer
