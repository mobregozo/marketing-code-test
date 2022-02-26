import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { render } from "@testing-library/react";
import { makeExecutableSchema } from "@graphql-tools/schema";
import React from "react";

const fakeProduct = {
  id: "1",
  name: "Energy saving light bulb",
  power: "25W",
  description:
    "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
  price: 1299,
  quantity: 4,
  brand: "Philips",
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  modelCode: "E27 ES",
  colour: "Cool daylight",
  imgUrl: "https://i.ibb.co/2nzwxnQ/bulb.png",
};

const typeDefs = `
  type Product {
    id: ID!
    name: String!
    power: String!
    description: String!
    price: Int!
    quantity: Int!
    brand: String!
    weight: Float!
    height: Float!
    width: Float!
    length: Float!
    modelCode: String!
    colour: String!
    imgUrl: String!
  }

  type Query {
    product(productId: ID): Product!
  }
`;

const schema = makeExecutableSchema({ typeDefs });

export const renderMock = (component: React.FC) => {
  const mockSchema = addMocksToSchema({
    schema,
    resolvers: {
      Query: {
        product: () => fakeProduct,
      },
    },
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema: mockSchema }),
    cache: new InMemoryCache(),
  });

  return render(<ApolloProvider client={client}>{component}</ApolloProvider>);
};
