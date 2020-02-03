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
          type="week"
          @click:event="showEvent"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="primary">
              <v-btn icon @click="editing = !editing">
                <v-icon v-if="!editing">mdi-pencil</v-icon>
                <v-icon v-else>mdi-check-bold</v-icon></v-btn
              >
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>mdi-dots-vertical</v-icon></v-btn></v-toolbar
            >
            <v-card-text
              ><span v-html="selectedEvent.description"></span><br />
            </v-card-text>
            <v-card-text
              ><span v-html="selectedEvent.start"></span><br />
              <span v-html="selectedEvent.end"></span
            ></v-card-text>
            <v-card-actions
              ><v-btn text color="secondary" @click="selectedOpen = false"
                >Cancel</v-btn
              ></v-card-actions
            ></v-card
          ></v-menu
        >
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
    events: [],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    editing: true
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
            events.push({
              id: e.id,
              name: e.title,
              description: e.description,
              userId: e.user.id,
              userName: e.user.display_name,
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
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    }
  }
};
</script>
