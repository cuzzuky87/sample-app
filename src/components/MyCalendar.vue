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
      <v-calendar
        ref="mycalendar"
        v-model="focus"
        color="primary"
        :events="events"
        :event-color="getEventColor"
        :now="today"
        type="week"
      >
      </v-calendar>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {
    this.$refs.mycalendar.scrollToTime("09:00");
  }
};
</script>
