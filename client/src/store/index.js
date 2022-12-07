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
                    detail: "Věž tvaru trubkovitého stožáru ovinutého schodištěm, měří celkem 36 metrů, vyhlídková plošina se nachází ve výšce 21 metrů a přístup k ní zajišťuje 98 točitých schodů. Nabízí pěkné výhledy na území přírodního parku Džbán, křivoklátské lesy, horu Říp, Milešovsku, Klínovec, vidět je také část Nového Strašecí. Na ochozu rozhledny jsou umístěny informační tabule, které vám při vyhlídce napomohou v orientaci. Zajímavostí je jistě to, že rozhledna byla vybrána do ankety o nejhezčí rozhlednu Prahy a Středočeského kraje a ze sedmi finalistek se na základě hlasování veřejnosti umístila na čtvrtém místě.",
                    duration: 3,
                    elevation: 326,
                    difficulty: 2,
                    distance: 12.7,
                    rating: 1,
                    givenRating: null,
                    created: new Date("2022-02-08T19:39:00Z"),
                    createdBy: {
                        id: 1,
                        userName: "Tomáš Rafoun"
                    },
                    images: [
                        "trip1_1.jpg"
                    ],
                    inBackpack: false
                },
                {
                    id: 2,
                    title: "Naučná stezka Zámecký park Kačina",
                    location: "Svatý Mikuláš, Kutná Hora",
                    detail: "Naučná stezka prochází přírodně krajinářským zámeckým parkem kolem zámku Kačina u Kutné Hory. Seznamuje s historií zámku, zámeckého parku a obory, jejich budováním, údržbou, obnovou, zajímavými stavebními či jinými prvky nebo např. s místní sbírkou historických odrůd růží. Dvě zastávky představují sloh klasicismus a způsob architektonického vyjádření a přetváření celé okolní krajiny v jeho duchu.",
                    duration: 4,
                    elevation: 15,
                    difficulty: 1,
                    distance: 1.1,
                    rating: 4,
                    givenRating: null,
                    created: new Date("2022-04-01T11:58:00Z"),
                    createdBy: {
                        id: 3,
                        userName: "Adam Juřík"
                    },
                    images: [
                        "trip2_1.jpg",
                        "trip2_2.jpg"
                    ],
                    inBackpack: false
                },
                {
                    id: 3,
                    title: "Rozhledna Kelčský Javorník",
                    location: "Kelčský Javorník, Rajnochovice",
                    detail: "Nová rozhledna byla postavena dle návrhu ing. Ondreje Balážika a architektky Marty Balážikové. Věž se skládá z centrálního ocelové sloupu s točitým schodištěm. Vnější obložení rozhledny tvoří 12 ohýbaných modřínových lamel, jejichž půdorys připromíná hodinový ciferník. Po dobu výstupu může návštěvník sledovat okolí skrze lamely. Každý jedenáctý stupeň ze 156 schodů tvoří zastavení s vyhlídkou. Poslední stupeň je hlavní vyhlídková plošina.",
                    duration: 7,
                    elevation: 969,
                    difficulty: 4,
                    distance: 18.4,
                    rating: 3,
                    givenRating: null,
                    created: new Date("2022-05-24T15:23:00Z"),
                    createdBy: {
                        id: 4,
                        userName: "Božena Samková"
                    },
                    images: [
                        "trip3_1.jpg",
                        "trip3_2.jpg",
                        "trip3_3.jpg"
                    ],
                    inBackpack: true
                },
                {
                    id: 4,
                    title: "Vlčí Jámy, bývalé cínové doly",
                    location: "Blatenský vrch, Horní Blatná",
                    detail: "Vlčí jámy jsou přírodní památka v Krušných horách v Karlovarském kraji. Nachází se na jihozápadním úbočí Blatenského vrchu severovýchodně od města Horní Blatná v katastrálním území obce Potůčky.",
                    duration: 2,
                    elevation: 360,
                    difficulty: 2,
                    distance: 4.8,
                    rating: 4,
                    givenRating: null,
                    created: new Date("2022-06-08T11:21:00Z"),
                    createdBy: {
                        id: 5,
                        userName: "Adéla Plachá"
                    },
                    images: [
                        "trip4_1.jpg",
                        "trip4_2.jpg"
                    ],
                    inBackpack: false
                },
                {
                    id: 5,
                    title: "E3: Cheb – Javorníky",
                    location: "Pomezí, Cheb",
                    detail: "Trasa E3 ze španělského Santiaga de Compostela k bulharskému pobřeží Černého moře protíná české hranice v oblasti Krušných hor a prochází přes NP České Švýcarsko, Lužické a Jizerské hory. Po krátkém odskočení do Polska se k nám vrací v oblasti Králického Sněžníku a přes Jeseníky a Beskydy pokračuje směrem na Slovensko.",
                    duration: 200,
                    elevation: 7355,
                    difficulty: 8,
                    distance: 575,
                    rating: 4,
                    givenRating: null,
                    created: new Date("2022-07-04T10:33:00Z"),
                    createdBy: {
                        id: 6,
                        userName: "Tomáš Zvrhlý"
                    },
                    images: [
                        "trip5_1.jpg",
                        "trip5_2.jpg",
                        "trip5_3.jpg"
                    ],
                    inBackpack: false
                },
                {
                    id: 6,
                    title: "Hrad Hartenštejn",
                    location: "Bochov, Karlovy Vary",
                    detail: "Hartenštejn je zřícenina pozdně gotického hradu poblíž Bochova asi 16 km jihovýchodně od Karlových Varů. Od roku 1964 je chráněn jako kulturní památka. Zřícenina stojí asi jeden kilometr jižně od Bochova v nadmořské výšce 730 metrů a je přístupná odbočkou z červeně značené turistické značky.",
                    duration: 2,
                    elevation: 113,
                    difficulty: 2,
                    distance: 3,
                    rating: 3,
                    givenRating: null,
                    created: new Date("2022-08-08T16:44:00Z"),
                    createdBy: {
                        id: 3,
                        userName: "Adam Juřík"
                    },
                    images: [
                        "trip6_1.jpg",
                        "trip6_2.jpg",
                        "trip6_3.jpg"
                    ],
                    inBackpack: false
                },
                {
                    id: 7,
                    title: "Cesta hrdinů SNP",
                    location: "Dukelský průsmyk, Vyšný Komárnik",
                    detail: "Cesta hrdinů SNP je značená turistická cesta na Slovensku, která vede z Dukelského průsmyku na severovýchodu země až na hrad Devín na západní hranici s Rakouskem. Její celková délka podle uváděných zdrojů kolísá mezi 750–770 kilometry. Částečně zasahuje i na území Česka.",
                    duration: 300,
                    elevation: 30000,
                    difficulty: 9,
                    distance: 772.1,
                    rating: 5,
                    givenRating: null,
                    created: new Date("2022-09-24T20:07:00Z"),
                    createdBy: {
                        id: 1,
                        userName: "Tomáš Rafoun"
                    },
                    images: [
                        "trip7_1.jpg",
                        "trip7_2.jpg",
                        "trip7_3.jpg"
                    ],
                    inBackpack: false
                },
                {
                    id: 8,
                    title: "Černé jezero",
                    location: "Železná Ruda, Klatovy",
                    detail: "Černé jezero je největší ledovcové jezero na Šumavě a zároveň i největší jezero v České republice, pokud nepočítáme vodní plochy vzniklé s přispěním člověka. Má rozlohu 18,47 hektaru. Leží v nadmořské výšce 1008 metrů a jeho maximální hloubka dosahuje 39,8 metru. Vzniklo v poslední době ledové.",
                    duration: 3,
                    elevation: 102,
                    difficulty: 2,
                    distance: 7.6,
                    rating: 5,
                    givenRating: null,
                    created: new Date("2022-11-01T09:00:00Z"),
                    createdBy: {
                        id: 7,
                        userName: "Eduard Müller"
                    },
                    images: [
                        "trip8_1.jpg",
                        "trip8_2.jpg"
                    ],
                    inBackpack: true
                },
                {
                    id: 9,
                    title: "Sky Bridge 721",
                    location: "Velká Morava, Dolní Morava",
                    detail: "Sky Bridge 721 je visutá lávka v masivu Králického Sněžníku v části Velká Morava obce Dolní Morava v okrese Ústí nad Orlicí v Pardubickém kraji. Vede od chaty Slaměnka ve Velké Moravě v sedle pod vrchem Slamník přes Mlýnské údolí s Mlýnským potokem na hřeben Chlumu.",
                    duration: 1,
                    elevation: 15,
                    difficulty: 1,
                    distance: 0.9,
                    rating: 2,
                    givenRating: null,
                    created: new Date("2022-11-11T08:05:00Z"),
                    createdBy: {
                        id: 8,
                        userName: "Filip Krasoň"
                    },
                    images: [
                        "trip9_1.jpg",
                        "trip9_2.jpg"
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