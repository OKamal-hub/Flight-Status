<template>
    <div class="container mt-5 ml-3">
        <div class="row">
            <div class="col-sm-12 col-md-9 col-lg-7">
                <h2 class="mb-3">Welcome!</h2>
                <p class="mb-5">Flight App is the leader in providing advanced, accurate, actionable data and insights
                    that inform every aviation decision.
                </p>
                <p class="mb-3">Get your flight details</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-9 col-lg-7">
                <div class="card">
                    <div class="card-body">

                        <!-- Flight Form -->
                        <form @submit.prevent="getDetails">
                            <div class="form-group row">
                                <label for="flight_number" class="col-sm-3 col-form-label">Flight Number<span
                                        class="star">*</span></label>
                                <div class="col-sm-5">
                                    <input type="text" :class="{'is-invalid': errors}" class="form-control"
                                           id="flight_number" placeholder="(e.g. TK815)" v-model="flightNumber">

                                    <!-- Error Messages -->
                                    <div v-if="errors">
                                         <span class="text-danger" v-for="error in errors.flight_iata" :key="error">
                                                    {{ error}}
                                         </span>
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <button type="submit" class="btn btn-dark">Search Flight</button>
                                </div>
                            </div>

                            <div v-if="invalidData">
                                <span class="text-danger">{{ invalidData}}</span>
                            </div>

                            <!-- Loader -->
                            <div class="ml-5 loader" v-if="loading">
                                <img src="../../../assets/loader.gif" alt="" width="50" height="50">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Flight Details -->
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
                loading: false,
                invalidData: null
            };
        },

        methods: {
            getDetails() {
                this.details = null;
                this.loading = true;
                this.errors = null;
                this.invalidData = null;

                //Request Flight Details From the API
                axios.post('https://flight-track-app.herokuapp.com/api/flights', {
                    flight_iata: this.flightNumber,
                }).then(response => {
                    this.details = response.data.flight_details;
                    this.errors = null;
                    this.invalidData = null;
                }).catch(error => {
                    if (error.response.status === 500) {
                        this.invalidData = 'Sorry, no results were found.';
                    } else {
                        this.errors = error.response.data.errors;
                        this.invalidData = null;
                    }

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

    .star {
        color: red;
        padding-left: 3px;
    }

    .loader {
        display: inline-block;
    }

    .form-control:focus {
        border-color: #34353e;
        box-shadow: 0 0 0 0.2rem #34353e;
    }

    @media screen and (max-width: 571px) {
        button {
            margin-top: 16px;
        }
    }

</style>