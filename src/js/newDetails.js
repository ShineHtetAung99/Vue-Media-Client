import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name: 'NewsDetails',
    data () {
        return {
            postId: 0,
            posts: {},
            tokenStatus: false,
            viewCount: 0,
        };
    },

    computed: {
        ...mapGetters(["storageToken","storageUserData"]),
    },
    
    methods: {
        loadPost (id) {
            let post = {
                postId: id
            };
            axios.post("http://localhost:8000/api/post/details", post).then((response) => {             
                    if (response.data.post.image != null) {
                        response.data.post.image = "http://127.0.0.1:8000/postImage/" + response.data.post.image;
                    } else {
                        response.data.post.image = "http://127.0.0.1:8000/defaultImage/default.png";
                    }               
                this.posts = response.data.post;
            }).catch((error) => {
                console.log(error);
            });
        },

        back() {
            this.$router.push({
                name: "home",
            });
        },

        home() {
            this.$router.push({
                name: "home",
            });
        },

        loginPage() {
            this.$router.push({
                name: "loginPage",
            });
        },

        logout() {
            this.$store.dispatch("setToken", null);
            this.loginPage();
        },

        checkToken() {
            if (this.storageToken != null && this.storageToken != undefined && this.storageToken != "") {
                this.tokenStatus = true;
            } else {
                this.tokenStatus = false;
            }
        },

        viewCountLoad() {
            let data = {
                user_id: this.storageUserData.id,
                post_id: this.$route.params.newsId,
            };
            axios.post("http://localhost:8000/api/post/actionLog", data).then((response) => {
                this.viewCount = response.data.post.length
            });
        },

    },
    
    mounted() {
        this.viewCountLoad();
        this.checkToken();
        this.postId = this.$route.params.newsId;
        this.loadPost(this.postId);
    },
}
