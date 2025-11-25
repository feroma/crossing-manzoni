<template>
  <div id="booking-modal" class="bg-gray-5">

    <header class="header w-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="logo d-none d-sm-block">
            <img src="~/assets/images/crossing_manzoni_LOGO_1x.png" class="img-fluid">
          </div>
          <!--          <language-switcher/>-->
          <close @click.native.stop.prevent="toggleModal" class="ml-auto"/>
        </div>
      </div>
    </header>

    <div class="booking-modal-content text-gray-1">
      <div class="container p-gutter">
        <div class="row align-items-center justify-content-center">
          <div class="booking-column">
            <h2 class="text-center">
              {{labels[0]}}
            </h2>
            <div class="alert-message" v-if="alert">
              <span>{{ alert }}</span>
            </div>
            <!--   /////////////// mobile-->
            <no-ssr>
              <div class="d-block d-md-none">
            <div class="booking-date2">

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
              <div class="p">{{ labels[1] }}</div>
            </div>


            <div class="booking-date2">

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
              <div class="p">{{ labels[2] }}</div>

            </div>
              </div>
            </no-ssr>

            <!--   /////////////// DESKTOP-->
            <div class="d-none d-md-block">
              <div class="d-flex flex-wrap w-100">

                <div class="booking-date2">
                  <div class="h1b mb-0 text-serif">
                    {{ formatDate(selectedDate.start) }}
                  </div>
                  <div class="p">
                    {{labels[1]}}
                  </div>
                </div>
                <div class="booking-date2">
                  <div class="h1b mb-0 text-serif">
                    {{ formatDate(selectedDate.end) }}
                  </div>
                  <div class="p">
                    {{labels[2]}}
                  </div>
                </div>

              </div>

            <no-ssr v-if="$screens">
              <v-date-picker
                v-model="selectedDate"
                @input="closeAlert"
                @drag="closeAlert"
                :min-date="new Date()"
                :columns="layout.columns"
                :rows="layout.rows"
                :is-expanded="layout.isExpanded"
                color="orange"
                :locale="currentLang"
                is-dark
                is-range
              />
            </no-ssr>

            </div>

            <!--   /////////////// DESKTOP-->

            <div class="d-flex flex-wrap w-100">
              <div class="booking-date">
                <div class="h1b mb-0 text-serif">

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
                <div class="p">
                  {{labels[3]}}
                </div>
              </div>

              <div class="booking-date">
                <div class="h1b mb-0 text-serif">

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
                <div class="p">
                  {{labels[4]}}
                </div>
              </div>
              <div class="booking-date">
                <div class="h1b mb-0 text-serif">
                  <select
                    v-model="childrens"
                    @click="closeAlert"
                    class="custom-select">
                    <option
                      v-for="option in options"
                      :value="option">{{ option }}
                    </option>
                  </select>
                </div>
                <div class="p">
                  {{labels[5]}}
                </div>
              </div>
            </div>
            <div class="text-center">
              <a href="#"
                 @click.stop.prevent="submitForm"
                 class="d-inline-block">
                <arrow-label
                  :label="labels[6]"
                  textClass="text-white text-uppercase"/>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: "Booking",
  data () {
    return {
      date1: new Date(),
      selectedDate: {
        start: null,
        end: null
      },
      adults: 1,
      childrens: 0,
      tot_rooms: 1,
      options: [0, 1, 2, 3, 4, 5, 6],
      room_options: [1, 2, 3, 4, 5, 6, 7],
      show: false,
      alert: false
    }
  },

  watch: {
    'selectedDate.start' (newVal, OldVal) {
      if (newVal !== OldVal) {
        let start = new Date(this.selectedDate.start)
        let end = new Date(this.selectedDate.end)
        if (end <= start) {
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
  components: {},
  computed: {
    minEnd(){
      let start = new Date(this.selectedDate.start)
      if(!this.selectedDate.start){
        start = new Date()
      }
      start.setDate(start.getDate() + 1)
      return  start
    },
    colors () {
      return {
        highlight: {
          color: 'orange',
          fillMode: 'light'
        }
      }
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
          'Check Availabilty'
        ],
        it: [
          'Prenota ora',
          'Arrivo',
          'Partenza',
          'Camere',
          'Adulti',
          'Bambini',
          'Controlla disponibilità'
        ]
      }

      return l[this.currentLang]
    },
    layout () {
      return this.$screens(
        {
          // Default layout for mobile
          default: {
            columns: 1,
            rows: 1,
            isExpanded: true
          },
          // Override for large screens
          lg: {
            columns: 2,
            rows: 1,
            isExpanded: true
          }
        }
      )
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
    toggleModal () {
      this.$store.commit('TOGGLE_BOOKING')
    },
    closeAlert () {
      this.alert = false
    },
    submitForm () {
      let alertMessage = ''
      let error = false
      if (!this.adults) {
        error = true
        alertMessage += 'Please, indicate at least the number of adults'
      }
      if (error) {
        this.alert = alertMessage
      }

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
