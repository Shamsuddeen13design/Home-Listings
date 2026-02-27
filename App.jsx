import './App.css'

function App() {
  return (
    <div className="landing">
      <header className="header">
        <h1>Home Listings</h1>
        <nav>
          <a href="#deals">Deals</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <button className="favourites-button">Favourites</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Find your dream home</h2>
            <p>Search for a property with ease.</p>
            <button>Get Started</button>
          </div>
        </section>

        <section className="deals">
          <h2>Best Deals Today</h2>
          <div className="listing-grid">
            <div className="listing-card">
              <img src="/mud-house.png" alt="House 1" />
              <h3>Mud House</h3>
              <p>₦250,000 - 2 beds, 1 bath</p>
              <button className="add-to-favorites-btn">Add to Favorites</button>
            </div>
            <div className="listing-card">
              <img src="/terrace.png" alt="House 2" />
              <h3>Terrace</h3>
              <p>₦350,000 - 3 beds, 2 baths</p>
              <button className="add-to-favorites-btn">Add to Favorites</button>
            </div>
            <div className="listing-card">
              <img src="/duplex.png" alt="House 3" />
              <h3>Duplex</h3>
              <p>₦750,000 - 4 beds, 3 baths</p>
              <button className="add-to-favorites-btn">Add to Favorites</button>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="feature">
            <h3>Easy Search</h3>
            <p>Filter by price, location, and more.</p>
          </div>
          <div className="feature">
            <h3>Secure</h3>
            <p>Your information is safe with us.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>We're here to help anytime.</p>
          </div>
        </section>

        
      </main>

      <footer id="contact">
        <p>
          Contact us at <a href="mailto:mshamsuddeen300@gmail.com">mshamsuddeen300@gmail.com</a>
        </p>
      </footer>
    </div>
  )
}

export default App
