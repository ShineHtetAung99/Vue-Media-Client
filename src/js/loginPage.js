import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "LoginPage",

    data () {
        return {
            userData: {
                email: '',
                password: '',
            },
            userStatus: false,
        };
    },

    computed: {
        ...mapGetters(["storageToken","storageUserData"]),
    },

    methods: {
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

        login() {
            axios.post("http://localhost:8000/api/user/login", this.userData).then((response) => {
                if (response.data.token == null) {
                    this.userStatus = true;
                } else {
                    this.userStatus = false;
                    this.storeUserInfo(response);
                    this.home();
                }
            }).catch((error) => {
                console.log(error);
            });
        },

        storeUserInfo(response) {
            this.$store.dispatch("setToken", response.data.token);
            this.$store.dispatch("setUserData", response.data.user);
        },

    },

    mounted () {
        this.userData = {};
    },

}