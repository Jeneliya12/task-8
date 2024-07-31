import Header from "../components/header.jsx";
import Main from "../components/main.jsx";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <div>
      <Header age={26} bio="I am Jenny" />
      <Main />
      <Footer name="Jeneliya Gurung" year={2024} />
    </div>
  );
}

export default Home;
