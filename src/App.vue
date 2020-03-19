<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="indigo">
        <v-toolbar-title>Calendar</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn depressed color="blue" v-if="isLoggedIn" @click="logout()">
          ログアウト
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content>
        <v-container class="fill-height">
          <v-row>
            <v-col justify="center">
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    }
  },
  methods: {
    logout() {
      console.log(this);
      this.$store.dispatch("auth/logout");
      this.$router.replace("/login");
    }
  }
};
</script>