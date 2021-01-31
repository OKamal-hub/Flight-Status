<template>
    <nav class="navbar navbar-expand-lg navbar-dark static-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <router-link :to="{name: 'Home'}">
                    <h1 class="main-logo"><span class="color">F</span>light App</h1>
                </router-link>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'Home'}">
                            Home<span></span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'About'}">
                            About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'Contact'}">
                            Contact
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .color {
        color: #343a40;
    }

    a {
        text-decoration: none;
    }

    .router-link-active {
        color: white;
        font-weight: bold;
    }

    .main-logo {
        letter-spacing: 5px;
        font-size: 50px;
    }
</style>