import React from "react";
import { Col, Row } from "react-bootstrap";
import StyledWrapper from "./StyledWtapper";

const BookSearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <Row className="px-3 py-3">
      <Col>
        <StyledWrapper>
          <div className="group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
              </g>
            </svg>
            <input
              id="query"
              className="input"
              type="search"
              placeholder="Search for books by title"
              name="searchbar"
              value={searchQuery}
              onChange={onSearchChange}
            />
          </div>
        </StyledWrapper>
      </Col>
    </Row>
  );
};

export default BookSearchBar;
