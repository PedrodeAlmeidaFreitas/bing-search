import { Link, useNavigate } from "react-router-dom";
import SearchInput from "../common/search-input/search-input";
import styles from "./home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const sendToResults = (searchText: string) => {
    navigate("/search-result", { state: { searchText } });
  };

  return (
    <section className={styles.Home}>
      <section className={styles.Logo}>
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </section>
      <SearchInput handleChange={sendToResults} />
    </section>
  );
};

export default Home;
