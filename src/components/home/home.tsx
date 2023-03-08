import { ReactElement, useState } from "react";
import Form from "react-bootstrap/Form";
import "./home.css";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  const getIconInput = (): ReactElement => {
    if (searchText) {
      return <img src="/icons/close.svg" alt="" />;
    }
    return <img src="/icons/search.svg" alt="" />;
  };

  return (
    <section className="Home">
      <section className="Logo">
        <img src="/logo.png" alt="" />
      </section>
      <section className="SearchBar">
        <Form.Control
          onChange={handleChange}
          value={searchText}
          type="text"
          id=""
          aria-describedby="passwordHelpBlock"
        />
        <div className="iconSearch">{getIconInput()}</div>
      </section>
    </section>
  );
};

export default Home;
