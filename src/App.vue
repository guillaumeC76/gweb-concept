<template>
  <div id="nav">
    <router-link to="/"><img src="assets/logo.png" alt="logo gweb-concept"></router-link>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/projet">Votre projet</router-link> |
    <router-link to="/offres">Nos offres</router-link>
    <h1>Gweb-concept</h1>
    <p class="slogan">La réactivité au service de votre activité</p>
    <p class="explication">Création de sites web personnalisés et design</p>
  </div>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
  @import url("https://fonts.googleapis.com/css2?family=Graduate&display=swap");

  #nav {
    padding: 30px;
    background-image: url(assets/Bulle.png);
    height: 450px;
    text-align: center;

    a {
      font-family: "Graduate", cursive;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 0 50px;
      font-weight: bold;
      color: #ffffff;
      text-decoration: none;
      transition: 0.5s;

      &.router-link-exact-active {
        color: #ac0809;
      }
      &:hover {
        color: #ac0809;
        transition: 0.5s;
      }
    }

    h1 {
      color: #ac0809;
      text-transform: uppercase;
      padding: 70px 0 40px 0;
      font-size: 3em;
      font-family: "Graduate", cursive;
      letter-spacing: 2px;
    }

    .slogan {
      color: #ffffff;
      font-size: 2.2em;
    }

    .explication {
      color: #ffffff73;
      font-size: 1.4em;
    }
  }
}
</style>
