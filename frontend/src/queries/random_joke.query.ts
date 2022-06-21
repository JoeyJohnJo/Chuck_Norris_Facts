import {gql} from "@apollo/client";

const random_joke = gql(`query  {
  randomJoke {
    created_at
    value
  }
}`)

export default random_joke
