<template>
    <div class="container mt-5 ml-3">
        <div class="row">
            <div class="col-sm-12 col-md-9 col-lg-7">
                <p class="mb-3">The Flight App was built to provide a simple way of accessing global aviation data for real-time and historical flights.</p>
                <p class="mb-5">
                    You just need to provide your flight number (e.g. QR405) to get your flight details and status.
                    <router-link class="try" :to="{name: 'Home'}"><strong>Try it now!</strong></router-link>
                </p>

                <h2 class="mb-3">Technologies Used</h2>
                <p>Flight App is a single page application (SPA) that was built using the latest web technologies and frameworks:</p>
                <ul>
                    <li><i class="fab fa-vuejs"></i> Vue 3 framework for the front-end.</li>
                    <li><i class="fab fa-laravel"></i> Laravel 8 framework for the back-end.</li>
                    <li><i class="fab fa-bootstrap"></i> Bootstrap 4 library for styling.</li>
                </ul>

                <p class="mt-5">View the source code on Github:
                    <a href="https://github.com/OKamal-hub/Flight-Status" class="try"><strong>Front-End</strong></a>
                    /
                    <a class="try" href="https://github.com/OKamal-hub/Flight-App"><strong>Back-End</strong></a>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    p {
        color: #fff;
        font-size: 20px;
    }

    li {
        color: #fff;
        font-size: 20px;
        margin-bottom: 8px;
    }

    i {
        font-size: 25px;
    }

    .try {
        color: #34353e;
        text-decoration: none;
    }

</style>