import Header from "../header/index.jsx";
import Landing from "../landing/index.jsx";
import Cards from "../card/index.jsx";
import Footer from "../footer/index.jsx";
import "./home-page.css";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default HomePage