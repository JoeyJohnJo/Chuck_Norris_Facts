import {Field, ObjectType} from "type-graphql";

@ObjectType()
export default class Joke {

    @Field((_) => [String!]!)
    categories: string[]

    @Field()
    created_at: string

    @Field()
    icon_url: string

    @Field()
    id: string

    @Field()
    updated_at: string

    @Field()
    url: string

    @Field()
    value: string
}
