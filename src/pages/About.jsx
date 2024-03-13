import Header from "../component/Header";
import Footer from "../component/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1 className="display-3">About Airbnb</h1>
        <p>
          Airbnb was born in 2007 when two Hosts welcomed three guests to their
          San Francisco home, and has since grown to over 5 million Hosts who
          have welcomed over 1.5 billion guest arrivals in almost every country
          across the globe.
        </p>
        <p>
          Every day, Hosts offer unique stays and experiences that make it
          possible for guests to connect with communities in a more authentic
          way.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
