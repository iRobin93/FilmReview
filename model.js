const model = {
    app: {
        loggedInUserID: null,
        pages: ["mainPage", "moviePage", "filterPage", "profilePage", "editProfile"],
        currentPage: "mainPage",
        filterBy: [
            {
                id: 1,
                genre: "Sci-Fi",
            },
            {
                id: 2,
                genre: "Fantasy",
            },

        ]
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
        filmer: 
        [
            {
                id: 1,
                movieName: "Avatar",
                genre: [1, 2],
                year: "2002",
                length: 162,
                comments: ["Denne filmen var veldig bra"],
                rating: 930,
                picture: "path",
                trailer: "path",
                infoText: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",

            }
        ],

        profile:
        [
           {
            id: 1,
            firstName: "Kaja",
            lastName: "Kortfilm",
            tlf: "",
            bio: "Tekst her",
            picture: "path",
            email: "kaja@email.no",
            place: "",
            genres: ["Horror", "Fantasy", "Drama"],

        } ,
        
        ] ,
    },

}