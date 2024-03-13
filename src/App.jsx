import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header/>
      <main className="container py-4">
        <h1 className="display-3">Lastest Listings</h1>
        <div>
          <img
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid rounded"
          />
          <h3>A small house in yellow springs</h3>
          <p>Entrie loft . 2 guests . 1 bedroom . 1 bed . 1 bath</p>
          <p>
            Enjoy your stay in this stylish loft apartment located in the heart
            of the city. Close of restaurants, shops, and attraction, it's the
            perfect base for exploring the city.
          </p>
          <p>$120 per night</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1434434319959-1f886517e1fe?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid rounded"
          />
          <h3>Taiwan's Wuling Farm</h3>
          <p>Entrie villa . 6 guests . 3 bedroom . 3 bed . 2 bath</p>
          <p>
            Visiting Taiwan's Wuling Farm offers the iconic Snow Mountain
            trailhead and serene alpine pond, a scenic and popular destination
            for nature enthusiasts.
          </p>
          <p>$300 per night</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}
