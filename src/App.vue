<template>
  <div id="app">
    <v-app>
      <v-app-bar app class="blue darken-3">
        <v-toolbar-title>
          <span class="white--text test--lighten--5">Calendar</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn depressed color="blue" v-if="isLoggedIn" @click="logout()">
          <span class="white--text">ログアウト</span>
          <v-icon color="white">mdi-logout-variant</v-icon>
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