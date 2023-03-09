import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BingService } from "../../core/services/bing.service";
import SearchInput from "../common/search-input/search-input";
import styles from "./search-result.module.css";

const SearchResult = () => {
  const service = new BingService();
  const { state } = useLocation();

  useEffect(() => {
    service.getSearchResults();
  });

  return (
    <div>
      <section className={styles.SearchResultHeader}>
        <Link to="/">
          <img className={styles.SearchResultLogo} src="/logo.png" alt="" />
        </Link>
        <SearchInput initialValue={state?.searchText} handleChange={() => {}} />
      </section>
      <section className={styles.SearchResultText}>
        <Container>
          <Row>
            <Col>
              <p>
                Looking for results for:{" "}
                <b className="Bold">{state?.searchText}qweqwe</b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>resultados</Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SearchResult;
