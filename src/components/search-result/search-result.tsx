import { ReactElement, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IBing } from "../../core/interfaces/Bing/IBing";
import { BingService } from "../../core/services/bing.service";
import SearchInput from "../common/search-input/search-input";
import styles from "./search-result.module.css";

const SearchResult = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<IBing>({} as IBing);
  const service = new BingService();
  // const { state } = useLocation();
  // let response!: IBingResponse;

  const fetchAPI = async () => {
    return await service.getSearchResults("123");
  };

  const fetchedData = () => {
    return Object.keys(response).length > 0;
  };

  useEffect(() => {
    if (!fetchedData() && !isLoading) {
      setIsLoading(true);
      fetchAPI().then((resp) => setResponse(resp.data));
    }
  }, []);

  const getSearchItems = (): ReactElement | ReactElement[] => {
    if (!fetchedData()) {
      return (
        <Row>
          <Col>
            <p>Loading... "{process.env.REACT_APP_BING_URL}"</p>
          </Col>
        </Row>
      );
    }
    console.log(response);
    // return <></>;
    return response.webPages.value.map((page) => (
      <a href={page.url} key={page.name}>
        <div key={page.name}>
          <p className={styles.SearchResultItemTitle}>{page.name}</p>
          <p className={styles.SearchResultItemLink}>{page.url}</p>
          <Col>
            {page.thumbnailUrl ? (
              <img src={page.thumbnailUrl} alt={page.name} />
            ) : (
              <></>
            )}
          </Col>
          <Col>
            <p className={styles.SearchResultItemDescription}>{page.snippet}</p>
          </Col>
          <Row>
            {page.deepLinks ? (
              page.deepLinks.map((deepLinks) => (
                <a href={deepLinks.url}>{deepLinks.name}</a>
              ))
            ) : (
              <></>
            )}
          </Row>
        </div>
      </a>
    ));
  };

  return (
    <div>
      <section className={styles.SearchResultHeader}>
        <Link to="/">
          <img className={styles.SearchResultLogo} src="/logo.png" alt="" />
        </Link>
        <SearchInput initialValue="123" handleChange={() => {}} />
      </section>
      <section className={styles.SearchResultText}>
        <Container>
          <Row>
            <Col>
              <p>
                Looking for results for: <b className="Bold">{}qweqwe</b>
              </p>
            </Col>
          </Row>
          {getSearchItems()}
        </Container>
      </section>
    </div>
  );
};

export default SearchResult;
