import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Countries from 'components/Countries';
import Categories from 'components/Categories';
import NewsList from 'components/NewsList';

const NewsPage = ({ match }) => {
  const [country, setCountry] = useState('kr');
  const onSelect = useCallback(
    selectedCountry => setCountry(selectedCountry),
    [],
  );
  const category = match.params.category || 'all';

  return (
    <>
      <Countries country={country} onSelect={onSelect} />
      <Categories />
      <NewsList category={category} country={country} />
    </>
  );
};

NewsPage.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

NewsPage.defaultProps = {
  match: null,
};

export default NewsPage;
