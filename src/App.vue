<template>
    <app-header></app-header>
    <app-home></app-home>
    <app-footer></app-footer>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppHome from './components/AppHome';

export default {
  name: 'App',
  components: {
      AppHeader,
      AppHome,
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
        height: auto;
    }

    h1, h2,  h4 {
        color: #fff;
    }
</style>

