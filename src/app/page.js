import Header from "../layout/Header.js";
import Footer from "../layout/Footer.js";
import Banner from "../components/OverView/OverView.js";
import Information from "../components/Information/Information.js";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Banner />
      <Information />
      <Footer />
    </main>
  );
}
