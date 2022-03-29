import { request, GraphQLClient, gql } from 'graphql-request';

const getData = (query) => {
  const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

  const graphQuery = gql`
    ${query}
  `;

  return client.request(graphQuery);
};

export default getData;
