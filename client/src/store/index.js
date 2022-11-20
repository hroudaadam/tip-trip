import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            user: null,
            trips: [
                {
                    id: 1,
                    title: "Rozhledna Mackova hora",
                    location: "Nové Strašecí",
                    detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Vivamus ac leo pretium faucibus. Integer tempor. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aenean fermentum risus id tortor.",
                    duration: 3,
                    elevation: 326,
                    difficulty: 2,
                    distance: 12.7,
                    rating: 4,
                    givenRating: null,
                    created: new Date("2022-11-01T09:00:00Z"),
                    createdBy: {
                        id: 1,
                        userName: "Tomáš Rafoun"
                    },
                    images: [
                        "trip1.jpg"
                    ],
                    inBackpack: false
                },
                {
                    id: 2,
                    title: "Vrabinec a Velký Chlum",
                    location: "Těchlovice, Děčín",
                    detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Vivamus ac leo pretium faucibus. Integer tempor. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aenean fermentum risus id tortor.",
                    duration: 4,
                    elevation: 147,
                    difficulty: 1,
                    distance: 16.2,
                    rating: 3,
                    givenRating: null,
                    created: new Date("2022-10-28T13:45:00Z"),
                    createdBy: {
                        id: 2,
                        userName: "Jana Lekná"
                    },
                    images: [
                        "trip2.jpg"
                    ],
                    inBackpack: false
                },
                {
                    id: 3,
                    title: "Rozhledna Mackova hora",
                    location: "Nové Strašecí",
                    detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Vivamus ac leo pretium faucibus. Integer tempor. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aenean fermentum risus id tortor.",
                    duration: 3,
                    elevation: 326,
                    difficulty: 2,
                    distance: 12.7,
                    rating: 3,
                    givenRating: null,
                    created: new Date("2022-11-01T09:00:00Z"),
                    createdBy: {
                        id: 1,
                        userName: "Tomáš Rafoun"
                    },
                    images: [
                        "trip1.jpg",
                        "trip2.jpg"
                    ],
                    inBackpack: false
                },
                {
                    id: 4,
                    title: "Rozhledna Mackova hora",
                    location: "Nové Strašecí",
                    detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Vivamus ac leo pretium faucibus. Integer tempor. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aenean fermentum risus id tortor.",
                    duration: 3,
                    elevation: 326,
                    difficulty: 2,
                    distance: 12.7,
                    rating: 3,
                    givenRating: null,
                    created: new Date("2022-11-01T09:00:00Z"),
                    createdBy: {
                        id: 1,
                        userName: "Tomáš Rafoun"
                    },
                    images: [
                        "trip1.jpg",
                        "trip2.jpg"
                    ],
                    inBackpack: false
                }
            ]
        };
    },
    getters: {
        isSignedIn: (state) => {
            return state.user != null;
        },
        tripById: (state) => (tripId) => {
            return state.trips.find((t) => t.id == tripId);
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    }
});

export default store;