import {Query, Resolver} from "type-graphql";

const axios = require('axios');
const config = require('config');


@Resolver()
export class CategoryResolver {

    categoriesUrl = `${config.get('api')}/jokes/categories`

    @Query((_) => [String])
    async categories() {
        return (await axios.get(this.categoriesUrl)).data
    }
}
