<template>
    <div class="container mt-5 ml-3">
        <div class="row">
            <div class="col-sm-7">
                <h2 class="mb-3">Welcome!</h2>
                <p class="mb-5">Flight App is the leader in providing advanced, accurate, actionable data and insights that inform every aviation decision.</p>
                <p class="mb-3">Get your flight details</p>

                <div class="card">
                    <div class="card-body">
                        <form class="form-inline" @submit.prevent="getDetails">
                            <div class="form-group mx-sm-3 mb-2">
                                <label for="flight_number">FlightNumber:</label>
                                <input type="text" :class="{'is-invalid': errors}" class="form-control ml-2" id="flight_number" placeholder="(e.g. UA2402)" v-model="flightNumber">
                            </div>
                               <button type="submit" class="btn btn-dark mb-2">Search Flight</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div v-if="details">
        <flight-details :flight="details"></flight-details>
    </div>
</template>

<script>
    import axios from "axios";
    import FlightDetails from './FlightDetails';

    export default {
        components: {
            FlightDetails
        },

        data() {
            return {
              flightNumber: '',
              details: null,
              errors: null
            };
        },

        methods: {
          getDetails() {
              this.details = null;

              axios.post('https://flight-track-app.herokuapp.com/api/flights',{
                  flight_iata: this.flightNumber,
              }).then(response => {
                  this.details = response.data.flight_details;
                  this.errors = null;
              }).catch(error => {
                  this.errors = error.response.data.errors;
              });
          }
        },

    }
</script>

<style scoped>
    p {
        color: #fff;
        font-size: 20px;
    }
</style>