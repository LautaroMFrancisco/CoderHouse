<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <h1>Sign In</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                v-model="emailValue"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="passwordValue"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="pink" type="submit" @click="login">Sign In</v-btn>
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
  name: "SignIn",
  data: () => ({
    emailValue: "",
    passwordValue: "",
  }),
  methods: {
    login() {
      axios({
        method: "get",
        url: "https://61b6bfeec95dd70017d40fec.mockapi.io/users",
      }).then((response) => {
        const data = response.data;
        const user = data.find(
          (userMail) => userMail.email === this.emailValue
        );
        if (
          user.email === this.emailValue &&
          user.password === this.passwordValue
        ) {
          this.$store.dispatch("setUserAuth");
          if (user.admin === true) this.$store.dispatch("setAdminAuth");
          this.$swal(
            "Successfully!",
            "You have successfully signed in",
            "success"
          );
          this.$router.push(`/products/${user.id}`);
          this.$store.dispatch("adminAuth");
        } else {
          return this.$swal(
            "Tehee!",
            "Username or password is invalid",
            "error"
          );
        }
      });
    },
  },
};
</script>

<style scoped></style>
