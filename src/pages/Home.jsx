import Layout from "../components/Layout.jsx";
import PlayerPage from "../components/PlayerPage.jsx";

function Home({ players, letters, setLetters }) {
  return (
    <>
      <Layout players={players} />
      <PlayerPage />
    </>
  );
}

export default Home;
