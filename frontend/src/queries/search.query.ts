import {gql} from "@apollo/client";

const search_joke = gql(`query Search($q: String!) {
  search(q: $q) {
    value
    created_at
    categories
  }
}`)

export default search_joke
