export default `

    type User{
        _id: String!
        email: String!
        password: String!
    }

    type Query {
        user(_id: String!): User
        users:[User]
    }

`