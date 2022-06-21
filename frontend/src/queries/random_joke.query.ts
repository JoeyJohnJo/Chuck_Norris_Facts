import {gql} from "@apollo/client";

const randomJoke = gql(`query  {
  randomJoke {
    updated_at
    value
  }
}`)

export default randomJoke
