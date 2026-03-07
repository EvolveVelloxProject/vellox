import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <p className="hero-tagline">
                <span className="hero-sparkle">✨</span>
                Transmute Raw Data Into Insight
                <span className="hero-sparkle">✨</span>
            </p>
            <h1 className="hero-heading">
                <span className="word-see">See</span> what your data{' '}
                <br />
                <span className="word-really">really</span> means
            </h1>
            <p className="hero-subtitle">
                Drop a CSV and watch it transform into a living visual story
            </p>
        </section>
    )
}

export default Hero
