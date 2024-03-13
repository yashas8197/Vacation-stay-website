import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Stays() {
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1 className="display-3">Featured Stays</h1>
        <div className="card mb-3" style={{ maxWidth: "1000px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">white-house-spring</h5>
                <p className="card-text">
                  A myth emerged that during the rebuilding of the structure
                  after the Burning of Washington, white paint was applied to
                  mask the burn damage it had suffered, giving the building its
                  namesake hue.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="row g-0 my-3">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Wondering the suburbs on England</h5>
                <p className="card-text">
                  In the United Kingdom and Ireland, the term suburb simply
                  refers to a residential area outside the city center,
                  regardless of administrative boundaries.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="row g-0 my-3">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Wondering the suburbs on England</h5>
                <p className="card-text">
                  Bromley Hall is an early Tudor period manor house in
                  Bromley-by-Bow, Tower Hamlets, London. Located on the
                  Blackwall Tunnel northern approach road, it is now owned and
                  restored by Leaside Regeneration.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 30 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="row g-0 my-3">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Summer house of Henri Ford</h5>
                <p className="card-text">
                  Summer house of Henri Ford, part of the Edison and Ford winter
                  estate. Henri Ford and Thomas Edison were good friends and
                  bought adjacent houses in Fort Myers Florida. These houses are
                  now a museum.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 10 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
