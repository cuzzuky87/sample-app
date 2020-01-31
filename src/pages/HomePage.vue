<template>
  <div class="home">
    <Kalendar :configuration="calendar_settings" :events="events" />
  </div>
</template>

<script>
import { Kalendar } from "kalendar-vue";

export default {
  name: "HomePage",
  components: { Kalendar },
  data: () => ({
    events: [],
    calendar_settings: {
      style: "material_design",
      view_type: "week",
      cell_height: 15,
      scrollToNow: false,
      current_day: new Date(),
      read_only: false,
      day_starts_at: 8,
      day_ends_at: 22,
      overlap: false,
      hide_dates: [],
      hide_days: [],
      past_event_creation: false
    }
  }),
  mounted() {
    this.$kalendar.getEvents();
  },
  methods: {
    getEvents() {
      const events = [];
      fetch("http://127.0.0.1/api/v1/events/")
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
        .catch(err => console.log(err));

      this.events = events;
    }
  }
};
</script>
