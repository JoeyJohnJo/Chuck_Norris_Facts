import {Query, Resolver} from "type-graphql";

const axios = require('axios');
const config = require('config');



@Resolver()
export class CategoryResolver {

  categories = `${config.get('api')}/jokes/categories`

  @Query((_) => [String])
  async getCategories() {
    return (await axios.get(this.categories)).data
  }
}
