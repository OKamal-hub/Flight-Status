<template>
    <nav class="navbar navbar-expand-lg navbar-dark static-top">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'Home'}">
                <h1 class="main-logo"><span class="logo-color">F</span>light App</h1>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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
    .main-logo {
        font-family: 'Philosopher', sans-serif;
        letter-spacing: 3px;
        font-size: 50px;
    }

    .logo-color {
        color: #343a40;
    }

    a {
        text-decoration: none;
    }

    .nav-item {
        font-size: 18px;
    }

    .router-link-active {
        color: white;
        font-weight: bold;
    }
</style>