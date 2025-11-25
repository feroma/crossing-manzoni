<template>
  <div id="booking-row" class="p-3 w-100 d-none d-md-block">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between w-100  pl-3 pr-0 rounded">
        <no-ssr>
          <div>
            <div class="p">{{ labels[1] }}</div>
            <v-date-picker
              color="orange"
              :locale="currentLang"
              is-dark
              :min-date="new Date()"
              v-model="selectedDate.start">
              <template v-slot="{ inputValue, togglePopover }">
                <input
                  class="custom-textfield"
                  @click="togglePopover()"
                  :value="inputValue"
                  readonly
                />
              </template>
            </v-date-picker>
          </div>


          <div>
            <div class="p">{{ labels[2] }}</div>
            <v-date-picker
              color="orange"
              :locale="currentLang"
              is-dark
              :min-date="minEnd"
              v-model="selectedDate.end">
              <template v-slot="{ inputValue, togglePopover }">
                <input
                  class="custom-textfield"
                  @click="togglePopover()"
                  :value="inputValue"
                  readonly
                />
              </template>
            </v-date-picker>
          </div>

          <div>
            <div class="p">{{ labels[3] }}</div>
            <select
              v-model="tot_rooms"
              @click="closeAlert"
              class="custom-select">
              <option
                v-for="option in room_options"
                :value="option">{{ option }}
              </option>

            </select>

          </div>


          <div>
            <div class="p">{{ labels[4] }}</div>
            <select
              v-model="adults"
              @click="closeAlert"
              class="custom-select">
              <option
                v-for="option in options"
                :value="option">{{ option }}
              </option>
            </select>
          </div>
          <div>
            <div class="p">{{ labels[5] }}</div>
            <select
              v-model="childrens"
              @click="closeAlert"
              class="custom-select">
              <option
                value="0">0
              </option>
              <option
                v-for="option in options"
                :value="option">{{ option }}
              </option>
            </select>
          </div>

          <div class="mr-0">
            <a href="#"
               @click.stop.prevent="submitForm"
               class="book-link mb-0">
              {{ labels[6] }}
            </a>
          </div>
        </no-ssr>
      </div>
    </div>


  </div>

</template>

<script>


export default {
  name: "BookingRow",
  data () {
    return {
      selectedDate: {
        start: null,
        end: null
      },
      show: false,
      adults: 1,
      childrens: 0,
      tot_rooms: 1,
      options: [1, 2, 3, 4, 5, 6],
      room_options: [1, 2, 3, 4, 5, 6, 7],
      alert: false
    }
  },

  watch: {
    'selectedDate.start' (newVal, OldVal) {
      if (newVal !== OldVal) {
        let start = new Date(this.selectedDate.start)
        let end = new Date(this.selectedDate.end)



        if (end <= start ) {
         /* console.clear()
          console.log(
            {start,end, startIso, endIso}
          )*/
          end = start;
          end.setDate(start.getDate() + 1)
          this.selectedDate.end = end

        }
      }
    },
  },
  created () {
    if (!this.selectedDate.start) {
      this.selectedDate.start = new Date()
    }
    if (!this.selectedDate.end) {
      let today = new Date()
      let tomorrow = new Date()
      tomorrow.setDate(today.getDate() + 1)
      this.selectedDate.end = tomorrow
    }
  },
  computed: {
    minEnd(){
      let start = new Date(this.selectedDate.start)
      if(!this.selectedDate.start){
        start = new Date()
      }
      start.setDate(start.getDate() + 1)
      return  start
    },
    labels () {
      const l = {
        en: [
          'Book Now – Plan Your Stay',
          'Arrive',
          'Departure',
          'Rooms',
          'Adults',
          'Childrens',
          'Book now'
        ],
        it: [
          'Prenota ora',
          'Arrivo',
          'Partenza',
          'Camere',
          'Adulti',
          'Bambini',
          'Prenota ora'
        ]
      }

      return l[this.currentLang]
    }
  },
  methods: {
    formatDate (date) {
      if (this.currentLang === 'en') {
        return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate()
        //return date.getFullYear()+'.'+(date.getMonth()+1)+'.'+date.getDate()
      } else {
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
      }

    },
    closeAlert () {
      this.alert = false
    },
    checkform () {
      let error = false
      if (!this.adults || !this.rooms) {
        error = true

      }
      return error
    },
    submitForm () {
      let start = new Date(this.selectedDate.start)
      let end = new Date(this.selectedDate.end)
      let url = 'https://reservations.verticalbooking.com/premium/index2.html'
      let langPref = this.currentLang === 'en' ? 'eng' : 'ita'

      const submitData = {
        tot_camere: this.tot_rooms,
        tot_adulti: this.adults,
        tot_bambini: this.childrens,
        gg: start.getDate(),
        mm: start.getMonth() + 1,
        aa: start.getFullYear(),
        ggf: end.getDate(),
        mmf: end.getMonth() + 1,
        aaf: end.getFullYear(),
        // notti_1:1,
        // headvar:'ok',

        id_style: 20424,
        lingua_int: langPref,
        id_albergo: 26980,
        dc: 5519,
        countryCode: 'IT'
        // adulti1:this.adults,
        // bambini1:this.childrens,
      }
      //console.clear();
      console.log(submitData)

      const params = new URLSearchParams(submitData)
      let u = url + '?' + params.toString()
      window.open(u, '_blank', 'noreferrer')
    }
  },
  props: {}

}
</script>

<style scoped>

</style>
