import Layout from "../components/Layout.jsx";
import PlayerPage from "../components/PlayerPage.jsx";

function Home({ players, letterValue }) {
  return (
    <>
      <Layout players={players} />
      <PlayerPage letterValue={letterValue} />
    </>
  );
}

export default Home;
