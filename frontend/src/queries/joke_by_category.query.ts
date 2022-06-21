import {gql} from "@apollo/client";

const joke_by_category = gql(`query RandomJokeWithCategory($category: String!) {
  randomJokeWithCategory(category: $category) {
    created_at
    value
  }
}`)

export default joke_by_category
