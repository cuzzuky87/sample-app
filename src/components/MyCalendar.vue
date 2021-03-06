<template>
  <v-row>
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn @click="setToday()">Today</v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn class="white--text blue darken-2" @click="showAddEventDialog()">Add Events</v-btn>
        </v-toolbar>
      </v-sheet>
      <addEventDialog ref="dialog" @update="getEvents"></addEventDialog>
      <v-sheet height="700">
        <v-calendar
          ref="calendar"
          v-model="focus"
          :now="today"
          :value="today"
          :events="events"
          type="week"
          @click:event="showEvent"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <form id="eventInfo">
              <v-toolbar :color="primary">
                <v-btn icon @click="editing = !editing" :disabled="!editable">
                  <v-icon v-if="!editing">mdi-pencil</v-icon>
                  <v-icon v-else>mdi-check-bold</v-icon>
                </v-btn>
                <v-toolbar-title
                  v-if="!editing"
                  v-html="selectedEvent.name"
                  @dblclick="editing = !editing"
                ></v-toolbar-title>
                <input
                  type="text"
                  id="eventTitle"
                  name="eventTitle"
                  v-else
                  v-model="selectedEvent.name"
                  class="updateform"
                />
                <v-spacer></v-spacer>
                <v-btn icon @click="deleteEvent()">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <label for>ユーザ：</label>
                <span v-html="selectedEvent.userName"></span>
              </v-card-text>
              <v-card-text>
                <label for="eventDescription">詳細</label>
                <br />
                <span v-if="!editing" v-html="selectedEvent.description"></span>
                <input
                  type="textarea"
                  id="eventDescription"
                  name="eventDescription"
                  v-else
                  v-model="selectedEvent.description"
                  class="updateform"
                />
              </v-card-text>
              <v-card-text>
                <label for="eventStart">開始</label>
                <span v-if="!editing" v-html="selectedEvent.start"></span>
                <span v-else>
                  <input
                    type="datetime-local"
                    id="eventStart"
                    name="eventStart"
                    v-model="selectedEvent.start"
                    class="updateform"
                  />
                </span>
              </v-card-text>
              <v-card-text>
                <label for="eventEnd">終了</label>
                <span v-if="!editing" v-html="selectedEvent.end"></span>
                <span v-else>
                  <input
                    type="datetime-local"
                    id="eventEnd"
                    name="eventEnd"
                    v-model="selectedEvent.end"
                    class="updateform"
                  />
                </span>
              </v-card-text>
              <v-card-actions>
                <v-btn v-if="editing" @click="doneEdit()">Done</v-btn>
                <v-btn text color="secondary" @click="selectedOpen=false">Cancel</v-btn>
              </v-card-actions>
            </form>
          </v-card>
        </v-menu>
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

.updateform {
  border-bottom: 1px solid rgb(63, 63, 63);
}
</style>

<script>
import AddEventDialog from "./AddEventDialog";
import api from "../services/api";

export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: "",
    events: [],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    editing: false,
    editable: false,
    dialog: false,
    start: null,
    end: null
  }),
  components: {
    addEventDialog: AddEventDialog
  },
  computed: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }

      // const startMonth = this.monthFormatter(start);
      // const endMonth = this.monthFormatter(end);
      this.monthFormatter(start);
      this.monthFormatter(end);
      const m1 = start.month + "月";
      const m2 = end.month + "月";
      const suffixMonth = m1 === m2 ? "" : m2;
      const startYear = start.year + "年";
      const endYear = end.year + "年";
      const suffixYear = startYear === endYear ? "" : endYear;

      const startDay = start.day + "日";
      const endDay = end.day + "日";

      return `${m1} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC+09:00",
        month: "long"
      });
    }
  },
  mounted() {
    this.$refs.calendar.checkChange();
    this.$refs.calendar.scrollToTime("08:00");
    this.getEvents();
  },
  methods: {
    setToday() {
      this.focus = this.today;
    },
    getEvents() {
      const events = [];
      api({
        method: "get",
        url: "/events/"
      })
        .then(res => {
          res.data.forEach(e => {
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
        .catch(err => console.log(err));
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
        this.editing = false;
        this.canEdit();
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    showAddEventDialog() {
      this.$refs.dialog.open();
    },
    canEdit() {
      console.log(this.$store.getters["auth/userId"]);
      console.log(this.selectedEvent.userId);
      this.$store.getters["auth/userId"] === this.selectedEvent.userId
        ? (this.editable = true)
        : (this.editable = false);
    },
    doneEdit() {
      const editEvent = {
        title: this.selectedEvent.name,
        description: this.selectedEvent.description,
        start_at: this.selectedEvent.start,
        end_at: this.selectedEvent.end
      };
      api
        .put(`events/${this.selectedEvent.id}/`, editEvent)
        .then(res => console.log(res))
        .catch(err => console.log(err));

      this.editable = false;
    },
    deleteEvent() {
      const selectedEvent = this.selectedEvent;
      const events = this.events;
      const index = events.indexOf(v => v.id === selectedEvent.id);
      api
        .delete(`events/${this.selectedEvent.id}/`)
        .then(() => events.splice(index, 1))
        .catch(err => console.log(err));
      this.selectedOpen = false;
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    }
  }
};
</script>
