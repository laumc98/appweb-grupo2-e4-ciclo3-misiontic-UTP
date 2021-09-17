<template>
  <footer class="footer">
    <section class="footer__div-logo">
      <img class="footer__div-logo-img" src="@/assets/Logo_app.png" alt="" />
    </section>
    <section class="footer__navbar">
      <div class="footer__nabvar-links-pages">
        <nav>
          Nuestras páginas
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
      <div class="footer__nabvar-links-services">
        <nav>
          El programa
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
      <div class="footer__boletin">
          Boletin de eventos
          <form class = "form" action="">
              <label for=""></label>
              <input type="text"> 
              <input type="button" value="Suscribase">
          </form>
      </div>
      <div class="footer__social-links">
          <div class="footer__social-links-contacto">
              <p>8990898</p>
              <p>correo</p>
              <p>direccion</p>
              <p>ciudad</p>
          </div>
          <div class="footer__social-links-networks">
              <a href="linkeind"><p class="mdi mdi-linkedin"></p></a>
              <a href="instagram"><p class="mdi mdi-instagram"></p></a>
              <a href="facebook"><p class="mdi mdi-facebook"></p></a>
              <a href="twitter"><p class="mdi mdi-twitter"></p></a>
          </div>
      </div>
      
    </section>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.footer {
  background: $color-footer;

  .footer__div-logo {
    display: flex;
    justify-content: left;
    .footer__div-logo-img {
      width: 200px;
      margin: 20px;
    }
  }

  .footer__navbar {
    display: grid;
    grid-template-columns: 0.2fr 0.2fr 0.3fr 0.3fr;
    color: $color-text-footer;
    
    .footer__social-links{
        .footer__social-links-contacto{
            margin: 0 50px;
            border-radius:42% 0% 30% 0% / 52% 0% 60% 0% ;
            background:$color-footer-section-contacto;
            padding-right: 5rem;
            padding-block: 2rem;
            
            p{
                text-align: right;
                margin: 0;
            }
        }
        .footer__social-links-networks{
            padding: 10px 5px;
            display: flex;
            justify-content: center;

            a {
                font-size: 2rem;
                margin: 0 10px;
            }
            p{
                color: $color-text-footer;
            }

        }
    }
  }
}
</style>