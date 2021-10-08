<template>
  <div id="nav">
    <router-link to="/" class="logo"
      ><img src="@/assets/logo.png" alt="logo gweb-concept"
    /></router-link>
    <div class="flex">
      <router-link to="/"><span>Accueil</span></router-link>
      <router-link to="/projet"><span>Votre projet</span></router-link>
      <router-link to="/offres"><span>Nos offres</span></router-link>
    </div>
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

  #nav {
    padding: 30px;
    background-image: url(assets/bulle.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 470px;
    text-align: center;

    .logo {
      display: block;
      float: left;
      margin: 0;

      img {
        position: absolute;
        width: 80px;
        display: block;
        float: left;
      }
    }

    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 37px 0 0 0;

      a {
        text-decoration: none;
        font-family: "Graduate", cursive;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0 80px;
        font-weight: bold;
        color: #ffffff;
        transition: 0.5s;

        &.router-link-exact-active {
          color: #ac0809;
        }
        &:hover {
          color: #ac0809;
          transition: 0.5s;
        }
      }
    }

    h1 {
      color: #ac0809;
      text-transform: uppercase;
      padding: 50px 0 30px 0;
      font-size: 3em;
      font-family: "Graduate", cursive;
      letter-spacing: 2px;
      font-weight: 300;
    }

    .slogan {
      color: #ffffff;
      font-size: 2em;
      font-family: 'Roboto', sans-serif;
    }

    .explication {
      color: #ffffff73;
      font-size: 1.2em;
      font-family: 'Roboto', sans-serif;
    }
  }
}
</style>
