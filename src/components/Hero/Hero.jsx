import './Hero.css'

function Hero() {
    // The Hero section is the main landing area of the page
    // It contains the main heading, quick description, and a call-to-action button
    return (
        <section className="hero">
            <p className="hero-tagline">
                <span className="hero-sparkle">✦</span>
                Powered by Simplicity
                <span className="hero-sparkle">✦</span>
            </p>

            <h1 className="hero-heading">
                <span className="word-gradient">See</span> what your data
                <br />
                <span className="word-accent">really</span> means
            </h1>

            <p className="hero-subtitle">
                Drop a CSV and watch it transform into a living, breathing visual story.
                No setup. No complexity. Just clarity.
            </p>

            <div className="hero-actions">
                <a href="#upload" className="hero-cta">
                    <span className="cta-icon">⬆</span>
                    Get Started
                </a>
            </div>

            <div className="hero-stats">
                <div className="stat">
                    <span className="stat-value">CSV</span>
                    <span className="stat-label">File Support</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                    <span className="stat-value">Instant</span>
                    <span className="stat-label">Processing</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                    <span className="stat-value">Free</span>
                    <span className="stat-label">Always</span>
                </div>
            </div>
        </section>
    )
}

export default Hero
