import { ReactElement, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IBing } from "../../core/interfaces/Bing/IBing";
import { BingService } from "../../core/services/bing.service";
import Loading from "../common/loading/loading";
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
      return <Loading />;
    }
    return response.webPages.value.map((page) => (
      <div key={page.name}>
        <a
          className={styles.SearchResultItemLink}
          href={page.url}
          target="_blank"
          rel="noreferrer"
        >
          <Row>
            <p className={styles.SearchResultItemTitle}>{page.name}</p>
            <p className={styles.SearchResultItemLink}>{page.url}</p>
            {page.thumbnailUrl ? (
              <>
                <Col lg={2}>
                  <img src={page.thumbnailUrl} alt={page.name} />
                </Col>
                <Col lg={10}>
                  <p className={styles.SearchResultItemDescription}>
                    {page.snippet}
                  </p>
                </Col>
              </>
            ) : (
              <Col>
                <p className={styles.SearchResultItemDescription}>
                  {page.snippet}
                </p>
              </Col>
            )}
          </Row>
        </a>
        <Row className={styles.SearchResultItemDeepLink}>
          {page.deepLinks ? (
            page.deepLinks.map((deepLinks, index) => (
              <a
                className={styles.SearchResultItemDeepLinkItem}
                href={deepLinks.url}
                key={`deep-link-${index}`}
              >
                {deepLinks.name}
              </a>
            ))
          ) : (
            <></>
          )}
        </Row>
      </div>
    ));
  };

  return (
    <div>
      <section className={styles.SearchResultHeader}>
        <div>
          <Link to="/">
            <img className={styles.SearchResultLogo} src="/logo.png" alt="" />
          </Link>
        </div>
        <SearchInput initialValue="123" handleChange={() => {}} />
      </section>
      <section className={styles.SearchResultText}>
        <Container>
          <Row>
            <Col>
              <p>
                Looking for results for: <b className="Bold">{}</b>
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
