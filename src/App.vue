<template>
  <div id="nav">
    <router-link to="/" class="logo"
      ><img src="@/assets/logo.png" alt="logo gweb-concept"
    /></router-link>
    <div class="center">
      <h1>Gweb-concept</h1>
      <p class="slogan">La réactivité au service de votre activité</p>
      <p class="explication">Création de sites web personnalisés et design</p>
    </div>
    <div class="bulles_infos">
      <div class="info">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="bottom-bottom"
          class="titre"
        >
          <img src="@/assets/website.svg" alt="website" />
          <h2>Site Web</h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="bottom-bottom"
          class="titre"
        >
          <img src="@/assets/seo.svg" alt="seo" />
          <h2>SEO</h2>
        </div>
      </div>
      <div class="info">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="bottom-bottom"
          class="titre"
        >
          <img src="@/assets/commerce.svg" alt="commerce" />
          <h2>e-Commerce</h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="bottom-bottom"
          class="titre"
        >
          <img src="@/assets/digital.svg" alt="digital" />
          <h2>site vitrine</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  @import url("https://fonts.googleapis.com/css2?family=Graduate&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");

  #nav {
    text-align: center;
    background-image: url("assets/head.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    height: 2230px;
    overflow-x: hidden;

    .logo {
      display: block;
      float: left;
      margin: 0;

      img {
        position: absolute;
        width: 80px;
        display: block;
        float: left;
        top: 30px;
        left: 30px;
      }
    }

    .center {
      width: 50%;

      h1 {
        color: #ac0809;
        text-transform: uppercase;
        padding: 350px 0 30px 0;
        font-size: 4em;
        font-family: "Graduate", cursive;
        letter-spacing: 2px;
        font-weight: 400;
        margin: 0;
      }

      .slogan {
        color: #81a9e0;
        font-size: 2em;
        font-family: "Roboto", sans-serif;
      }

      .explication {
        color: #81a9e0;
        font-size: 1.2em;
        font-family: "Roboto", sans-serif;
      }
    }

    .bulles_infos {
      display: flex;
      align-items: center;
      align-content: flex-end;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 10% 0 0;
      margin-top: 650px;

      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        padding: 20px 10%;

        .titre {
          img {
            width: 100%;
          }

          h2 {
            font-family: "Roboto", sans-serif;
            font-size: 2.2em;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
