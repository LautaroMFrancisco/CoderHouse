<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <h1>Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="username"
                label="Username"
                id="username"
                type="username"
                v-model="username"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                v-model="email"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="pink" type="submit" @click="registerUser">
                >Sign Up</v-btn
              >
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const axios = require("axios");
export default {
  name: "SignUp",
  data: () => ({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    cart: [],
  }),
  methods: {
    registerUser() {
      axios({
        method: "get",
        url: "https://61b6bfeec95dd70017d40fec.mockapi.io/users",
      }).then((response) => {
        const userResponse = response.data.find(
          (userID) => userID.email === this.email
        );
        if (userResponse)
          return this.$swal("Tehee!", "Email is already in use", "error");
        if (this.password !== this.confirmPassword)
          return this.$swal("Tehee!", "Password does not match", "error");
        const user = {
          username: this.username,
          email: this.email,
          password: this.password,
          cart: [],
          admin: false,
        };
        axios({
          method: "post",
          url: "https://61b6bfeec95dd70017d40fec.mockapi.io/users",
          data: user,
        }).catch(function (error) {
          console.log(error);
        });
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped></style>
