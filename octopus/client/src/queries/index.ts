import { gql } from "@apollo/client";

export default gql`
  query getProductById($id: ID!) {
    product(productId: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      modelCode
      colour
      imgUrl
    }
  }
`;
