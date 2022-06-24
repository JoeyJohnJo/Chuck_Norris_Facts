import {gql} from "@apollo/client";

const home_page_query = gql(`
query Query($category: String!) {
  categories
  randomJoke {
    created_at
    value
  }
  randomJokeWithCategory(category: $category) {
    created_at
    value
  }
}
`)

export default home_page_query
