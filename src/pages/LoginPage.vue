<template>
  <v-card outlined>
    <v-card-text>
      <v-form ref="LoginForm" v-model="valid" :lazy-validation="lazy">
        <v-text-field
          v-model="model.email"
          :counter="128"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="model.password"
          :counter="32"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-btn block @click="login" :loading="loading">ログイン</v-btn>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    emailRules: [
      v => !!v || "入力が必須の項目です",
      v => (v && v.length <= 32) || "32文字以内で入力してください",
      v =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "メールアドレスの形式が不正です"
    ],
    passwordRules: [
      v => !!v || "入力が必須の項目です",
      v =>
        (v && v.length > 8 && v.length <= 32) ||
        "パスワードは8桁以上32桁以内で入力してください"
    ],
    model: {
      email: "",
      password: ""
    }
  }),

  methods: {
    login() {
      if (this.$refs.LoginForm.validate()) {
        this.loading = true;
      }
    }
  }
};
</script>
