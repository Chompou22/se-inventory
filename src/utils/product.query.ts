import gql from 'graphql-tag';

// 1. Create Product Mutation
export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
      productName
      price
      quantity
      importDate
      expireDate
    }
  }
`;

// 2. Update Product Mutation
export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProduct($id: Int!, $updateProductInput: UpdateProductInput!) {
    updateProduct(id: $id, updateProductInput: $updateProductInput) {
      id
      productName
      price
      quantity
    }
  }
`;

// 3. Remove Product Mutation
export const REMOVE_PRODUCT_MUTATION = gql`
  mutation RemoveProduct($id: Int!) {
    removeProduct(id: $id) {
      id
      productName
    }
  }
`;

// 4. Find All Products Query
export const FIND_ALL_PRODUCTS_QUERY = gql`
  query FindAllProducts {
    findAllProducts {
      id
      productName
      price
      quantity
    }
  }
`;

// 5. Find Single Product by ID Query
export const FIND_PRODUCT_QUERY = gql`
  query FindProduct($id: Int!) {
    findProduct(id: $id) {
      id
      productName
      price
      quantity
    }
  }
`;
