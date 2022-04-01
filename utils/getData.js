import { request, GraphQLClient, gql } from 'graphql-request';

const getData = (query, variable = {}) => {
  const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

  const graphQuery = gql`
    ${query}
  `;

  return client.request(graphQuery, variable);
};

export default getData;
