<template>
    <div class="container mt-5 ml-3">
        <div class="row">
            <div class="col-sm-12 col-md-9 col-lg-7">
                <h2 class="mb-3">Welcome!</h2>
                <p class="mb-5">Flight App is the leader in providing advanced, accurate, actionable data and insights
                    that inform every aviation decision.</p>
                <p class="mb-3">Get your flight details</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-9 col-lg-7">
                <div class="card">
                    <div class="card-body">
                        <form class="form-inline mb-2 ml-3" @submit.prevent="getDetails">
                            <label for="flight_number" class="ml-3">Flight Number:</label>
                            <input type="text" :class="{'is-invalid': errors}" class="form-control ml-2"
                                   id="flight_number" placeholder="(e.g. TK815)" v-model="flightNumber">
                            <button type="submit" class="btn btn-dark ml-3">Search Flight</button>
                            <div v-if="loading" class="ml-5">
                                <img src="../assets/loader.gif" alt="" width="50" height="50">
                            </div>
                        </form>

                        <div v-if="errors">
                            <ul>
                                <li class="text-danger" v-for="error in errors" :key="error">
                                    {{ error[0]}}
                                </li>
                            </ul>
                        </div>

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
                errors: null,
                loading: false
            };
        },

        methods: {
            getDetails() {
                this.details = null;
                this.loading = true;

                axios.post('http://flight-app.test/api/flights', {
                    flight_iata: this.flightNumber,
                }).then(response => {
                    this.details = response.data.flight_details;
                    this.errors = null;
                }).catch(error => {
                    this.errors = error.response.data.errors;
                }).then(() => this.loading = false);

            }
        },

    }
</script>

<style scoped>
    p {
        color: #fff;
        font-size: 20px;
    }

    input {
        width: 35%!important;
    }
</style>