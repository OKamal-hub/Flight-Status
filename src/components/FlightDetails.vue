<template>
    <div class="container mt-4 ml-3">
        <div class="row">
            <div class="col-sm-12 col-md-9 col-lg-7">
                <div class="card">
                    <div class="card-header">
                        <strong>{{ flight.flight.iata}}</strong>
                        <br>{{ flight.airline.name }} ({{ flight.airline.iata }})
                        <p class="float-right status">{{ flight.flight_status}}</p>
                    </div>
                    <div class="card-body">
                        <div class="departure text-center">
                            <p class="title">Departure</p>
                            <p class="mt-2"><strong>{{ flight.departure.airport }}</strong></p>
                            <p class="mt-2">{{ flight.departure.estimated }}</p>
                        </div>
                        <div class="arrival text-center">
                            <p class="title">Arrival</p>
                            <p class="mt-2"><strong>{{ flight.arrival.airport }}</strong></p>
                            <p class="mt-2">{{ flight.arrival.estimated }}</p>
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        <strong>Departure Timezone:</strong> <span>{{ flight.departure.timezone }}</span>
                        <span class="circle">.</span>
                        <strong>Arrival Timezone:</strong> <span>{{ flight.arrival.timezone }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['flight']
    }
</script>

<style scoped>
    .circle {
        font-size: 20px;
        color: #777;
        margin-left: 8px;
        margin-right: 8px;
    }

    .departure {
        border-right: 1px solid grey;
        display: inline-block;
        width: 50%;
    }

    .arrival {
        display: inline-block;
        width: 50%;
    }

    .title {
        background: rgba(0,0,0,.03);
        padding: 5px 0;
        border-radius: 50px;
    }

    .departure .title {
        margin-right: 10px;
    }

    .arrival .title {
        margin-left: 10px;
    }

    .status {
        background: #34353e;
        color: #fff;
        padding: 27px;
        position: absolute;
        top: 0;
        right: 0px;
        border-radius: 3px;
    }
</style>