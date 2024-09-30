const model = {
    app: {
        loggedInUserID: null,
        pages: ["mainPage", "moviePage", "filterPage", "profilePage", "editProfile"],
        currentPage: "mainPage",
        genres: ["Sci-Fi", "Action"]
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
        movies: [
            {
                movieName: "Avatar",
                genre: [1 , 2],
                rating: 930,
                commnents: "Denne filmen var bra",
                plot: `A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.`,
                picture: "path",
                trailer: "path",
                length: 162,
            },
                
        ],

        profile: [
            {
                name: "Kaja",
                email: "kaja@film.no",
                tlf: null,
                location: null,
                bio: "Jeg liker filmer",
                profilePicture: "path",
            }
        ]
    },

}