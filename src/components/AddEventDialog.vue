<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Input Event Info</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="title" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="description" row-height="24px"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  type="datetime-local"
                  label="start"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                ><v-text-field
                  type="datetime-local"
                  label="end"
                  required
                ></v-text-field
              ></v-col>
            </v-row>
            <v-btn @click="close()">Cancel</v-btn>
            <v-btn></v-btn>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    }
  }
};
</script>
