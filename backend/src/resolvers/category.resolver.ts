import {Query, Resolver} from "type-graphql";
const axios = require('axios');
const config = require('config');

@Resolver()
export class CategoryResolver {

  url = config.get('api');

  @Query((_) => String)
  async getCategories() {
    return "testing"
  }
}
