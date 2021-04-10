import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewsItem from 'components/NewsItem';
import axios from 'axios';
import usePromise from 'lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category, country }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://news-api-hseoy.herokuapp.com/news?country=${country}${query}`,
    );
  }, [category, country]);

  if (loading) {
    return <NewsListBlock>Loading ...</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>ERROR!</NewsListBlock>;
  }

  const { articles } = response.data;

  if (articles.length === 0) {
    return <NewsListBlock>There are no article</NewsListBlock>;
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

NewsList.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string.isRequired,
};

NewsList.defaultProps = {
  category: 'all',
};

export default NewsList;
