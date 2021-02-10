<template>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

export default {
  name: 'App',
  components: {
      AppHeader,
      AppFooter,
  }
}
</script>

<style>
    body {
        font-family: 'Cairo', sans-serif;
        background-image: url("./assets/images/bg-body.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        max-width: 100%;
        height: 100%;
        position: relative;
    }

    h1, h2{
        color: #fff;
    }
</style>

