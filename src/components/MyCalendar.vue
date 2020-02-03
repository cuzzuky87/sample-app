<template>
  <v-row>
    <v-col>
      <v-btn fab text small color="grey darken-2" @click="prev">
        <v-icon small>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn fab text small color="grey darken-2" @click="next">
        <v-icon small>mdi-chevron-right</v-icon>
      </v-btn>
      <v-sheet height="700">
        <v-calendar
          ref="calendar"
          v-model="forcus"
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

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>

<script>
export default {
  data: () => ({
    today: "2020-02-03",
    forcus: "2020-02-03",
    events: [
      {
        name: "Weekly Meeting",
        start: "2019-01-07 09:00",
        end: "2019-01-07 10:00"
      },
      {
        name: "Thomas' Birthday",
        start: "2019-01-10"
      },
      {
        name: "Mash Potatoes",
        start: "2019-01-09 12:30",
        end: "2019-01-09 15:30"
      }
    ]
  }),
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
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
            const userId = e.user.id;
            const userDisplayName = e.user.display_name;
            const tempUser = {
              id: userId,
              displayName: userDisplayName
            };
            events.push({
              id: e.id,
              name: e.title,
              description: e.description,
              user: tempUser,
              start: e.start_at.substr(0, 16),
              end: e.end_at.substr(0, 16)
            });
          });
        })
        .catch(err => console.log("error in post" + err));
      this.events = events;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    }
  }
};
</script>
