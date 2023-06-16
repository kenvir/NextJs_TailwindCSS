import Banner from "../components/Home/Banner";
import Introduction from "../components/Home/Introduction";
import Partner from "../components/Home/Partner";
import Wallet from "../components/Home/Wallet";

function Home() {
  return (
    <div>
      <Banner />
      <Wallet />
      <Introduction />
      <Partner />
    </div>
  );
}

export default Home;
