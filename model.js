const model = {
    app: {
        loggedInUserID: null,
        pages: ["mainPage", "moviePage", "filterPage", "profilePage", "editProfile"],
        currentPage: "mainPage",
    },

    input: {
        inputMoviePage: {
            comment: null,
            rating: null,
        },

        inputEditProfilePage: {
            name: null,
            email: null,
            tlf: null,
            location: null,
            bio: null,
            profilePicture: null,
        },

    },

    data: {
        filmer: [
            {
                movieName: "Avatar",
                genre: ["Sci-Fi", "Action"]
            }

        ]
    },

}