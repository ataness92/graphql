export default {
    Query: {
        user: (root, args) => {
            return {
                _id: "82123jkasdh",
                email: "test@abv.bg",
                password: "123456",
            }
        },
        users: () => {
            return [{
                _id: "82123jkasdh",
                email: "test@abv.bg",
                password: "123456",
            }, {
                _id: "naka",
                email: "ness@abv.bg",
                password: "123",
            }]
        }
    }
} 