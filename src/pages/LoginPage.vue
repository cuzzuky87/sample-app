<template>
  <div class="login-page">
    <v-card class="elevation-1 pa-3 login-card">
      <v-card-text>
        <div class="layout column align-center">
          <h1 class="flex my-4 primary--text font-weight-bold">ログイン</h1>
        </div>
        <v-form ref="loginForm">
          <v-text-field
            append-icon="person"
            name="login"
            label="メールアドレス"
            type="text"
            v-model="model.email"
            :counter="128"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            append-icon="lock"
            name="password"
            label="パスワード"
            id="password"
            type="password"
            v-model="model.password"
            :counter="32"
            :rules="passwordRules"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <div class="login-btn">
        <v-btn block color="primary" @click="login" :loading="loading"
          >ログイン</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
};
</script>
