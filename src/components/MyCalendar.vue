<template>
  <div>
    <v-sheet height="64">
      <v-toolbar flat color="white">
        <v-btn outlined class="mr-4">Today</v-btn>
        <v-btn fab text small color="grey darken-2">
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab text small color="grey darken-2">
          <v-icon small>mdi-chevron-right</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="mr-6">
          add Events
        </v-btn>
      </v-toolbar>
    </v-sheet>
    <v-sheet>
      <v-calendar ref="mycalendar" :value="today" color="primary" type="week">
        <!-- the events at the top (all-day) -->
        <template v-slot:dayHeader="{ date }">
          <template v-for="event in eventsMap[date]">
            <!-- all day events don't have time -->
            <div
              v-if="!event.time"
              :key="event.title"
              class="my-event"
              @click="open(event)"
              v-html="event.title"
            ></div>
          </template>
        </template>
        <!-- the events at the bottom (timed) -->
        <template v-slot:dayBody="{ date, timeToY, minutesToPixels }">
          <template v-for="event in eventsMap[date]">
            <!-- timed events -->
            <div
              v-if="event.time"
              :key="event.title"
              :style="{
                top: timeToY(event.time) + 'px',
                height: minutesToPixels(event.duration) + 'px'
              }"
              class="my-event with-time"
              @click="open(event)"
              v-html="event.title"
            ></div>
          </template>
        </template>
      </v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import api from "../store";

export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    now: new Date().toISOString().substr(0, 10),
    events: [
      {
        title: "Weekly Meeting",
        date: "2019-01-26",
        time: "09:00",
        duration: 45
      },
      {
        title: "Thomas' Birthday",
        date: "2019-01-27"
      },
      {
        title: "Mash Potatoes",
        date: "2019-01-28",
        time: "12:30",
        duration: 180
      }
    ]
  }),
  computed: {
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.data] = map[e.date] || []).push(e));
      return map;
    }
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    open(event) {
      alert(event.title);
    },
    getEvents: function() {
      const fetchedEvents = [];
      api({
        method: "get",
        url: "events/"
      })
        .then(res => {
          res.data.forEach(e => fetchedEvents.push(e));
          this.events = fetchedEvents;
        })
        .catch(alert("error"));
    }
  }
};
</script>
