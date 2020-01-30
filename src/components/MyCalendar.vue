<template>
  <v-row>
    <v-col>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
//import api from "../store";

export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    events: []
  }),
  mounted() {
    this.getEvents();
  },
  methods: {
    getEvents() {
      const events = [];
      fetch("http://127.0.0.1:8000/api/v1/events/")
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            console.log("ng");
          }
        })
        .then(res => {
          res.forEach(e => {
            events.push(e);
          });
        })
        .catch(err => console.log("error in post" + err));
      this.events = events;
    }
  }
};
</script>
