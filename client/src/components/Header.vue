<template>
  <header class="header navbar bg-light">
    <div class="header__navbar-brand navbar-brand">
      <router-link to="/">
        <img
          class="header__navbar-brand-image"
          src="@/assets/Logo_app.png"
          alt=""
        />
      </router-link>
    </div>
    <div class="header__navbar_nav">
      <nav class="">
        <ul class="header__navbar_links">
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/eventos">Eventos</router-link>
          </li>
          <li>
            <router-link to="/premios">Premios</router-link>
          </li>
          <li>
            <router-link to="/contactenos">Contactenos</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header__section-login">
      <button class="header__btn-login">Ingresar</button>
      <button class="header__btn-register">Registrate</button>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  padding: 5px 50px;
  display: grid;
  grid-template-columns: 0.75fr 1fr 0.5fr;

  box-shadow: 0rem 0.5rem 1rem $color-header-shadow;

  ul {
    list-style: none;
  }
  li {
    font-family: "Mallanna", sans-serif;
    font-size: 1.4rem;
    a {
      text-decoration: none;
      color: $color-text-header;
      &.router-link-exact-active {
        color: $color-link-active;
      }
      &.disable {
        color: gray;
        font-weight: normal;
      }
    }
  }

  .header__navbar-brand {
    display: inline-flex;
    justify-content: left;
    .header__navbar-brand-image {
      width: 150px;
    }
  }
  .header__navbar_nav {
    display: flex;
justify-content: right;
    .header__navbar_links {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0;

      li {
        margin-left: 50px;
      }
    }
  }
  .header__section-login {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 40px;
    button {
      width: 7.5rem;
      margin: 0 10px;
      border-radius: 50rem;
          font-family: "Mallanna", sans-serif;
    font-size: 1.3rem;
    }
    .header__btn-login {
      border: 2px $color-salmon solid;
      background: $color-salmon;
      color: white;
    }
    .header__btn-register {
      border: 2px $color-salmon solid;
      background: white;
      color: $color-text-header;
    }
  }
}
</style>