const Card = Vue.component("card", {
    template: "#card",
    props: ["title"]
});

const SectionCard = Vue.component("section-card", {
    template: "#section-card",
    props: ["title", "link"]
});

const BlogArticle = Vue.component("blog-article", {
    template: "#blog-article",
    props: ["cover"]
});

new Vue({
    el: "#app",
    components: { Card, SectionCard, BlogArticle },
    data() {
        return {
            tags: [
                "rnb",
                "hip-hop",
                "rap",
                "90s",
                "santa monica",
                "mix tape",
                "albums",
                "dj",
                "clubs",
                "singles",
                "top 20"
            ],
            showForm: false,
            friends: [],
            comments: [
                "Another good tape mix bruh! No 12",
                "My favorite girl group was Total",
                "Aaliyah was a goddess",
                "Tape-Mix 11 is my fav yo!!",
                "Favorite male singer - R Kelly",
                "I can't sleep at night, I toss and turn",
                "What happened to Da Brat?",
                "I've got the complete set Tape-Mix 1 - 11",
                "Yo, Xscape is coming. Tickets sell fast",
                "Hey Bobby, what's up?"
            ]
        };
    },
    methods: {
        getFriends: function () {
            fetch(
                "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=10"
            )
                .then((res) => res.json())
                .then((data) => {
                    //console.log(data.results);
                    let obj;
                    let v = this;
                    data.results.map((f) => {
                        obj = {
                            name: f.name.first,
                            photo: f.picture.large,
                            thumb: f.picture.thumbnail
                        };
                        v.friends.push(obj);
                    });
                })
                .catch((err) => console.error(err));
        }
    },
    mounted() {
        this.getFriends();
    }
});
