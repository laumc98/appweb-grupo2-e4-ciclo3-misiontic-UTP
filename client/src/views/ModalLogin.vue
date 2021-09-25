<template>
  <div class="container">
    <div v-show="showModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog" style="margin: 0">
          <div
            class="modal-content"
            style="padding: 0; box-sizing: content-box; height: 100vh"
          >
            <div class="modal-header">
              <!--<h5 class="modal-title" id="exampleModalLabel">Mi Cuenta</h5>-->
            </div>
            <div class="modal-body d-flex">
              <div class="modal-icon-cuenta">
                <h2 class="mdi mdi-account-outline align-baseline fs-2"></h2>
              </div>

              <div class="modal-formulario ps-3; p-2 flex-grow-1 bd-highlight">
                <h2
                  style="font-family: 'Allerta', sans-serif; text-align: start"
                  class="fs-5"
                >
                  <strong style="align-self: center">Mi Cuenta</strong>
                </h2>
                <p></p>
                <h6
                  class="text-start"
                >
                  Ingresa con usuario y contraseña
                </h6>
                <form>
                    <div class="mb-3">
                      <input class="form-control" type="text" placeholder="Ingresa tu nombre de usuario" syle="font-family: 'Abel', sans-serif">
                    </div>
                    <div class="mb-3">
                      <input class= "form-control" type="text" placeholder="Ingresa tu contraseña" syle="font-family: 'Abel', sans-serif">
                    </div>
                </form>
                <p></p>
                <h6
                class="text-start"
                >
                <router-link to="" class="routerlink">Olvidaste tu contraseña</router-link>
                </h6>
                <p></p>
                <div class="d-grid gap-2">
                  <button 
                  class="btn btn-primary" 
                  type="button"
                  >
                  Entrar
                  </button>
                  <button 
                  class="btn btn-secondary" 
                  type="button"
                  data-bs-dismiss="modal"
                  @click="$emit('closeLogin')"
                  >
                  <i class="mdi mdi-arrow-left"></i>
                  Volver
                  </button>
                <p></p>
                <h6
                class="text-start"
                >
                <a class="routerlink" @click="$emit('openRegister')">¿No tienes una cuenta? Creala ahora</a>
                </h6>
                <p></p>
                <p></p>
                <div class="text-center">
                  <img class="footer__div-logo-img" src="@/assets/Logo_MuevetexPuntos.png" alt="" />
                </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModal"],
  data() {
    return{
    isOpenModalRegister: false,
    };
  },
  methods:{
    toggleToRegister(){
      this.isOpenModalRegister =  true;
    },
  },
};
</script>

<style lang="scss" scoped>

@import url("https://fonts.googleapis.com/css2?family=Allerta&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  //right:0%;
  //height: 100%;
  position: absolute;
  width: 451px;
  height: 881px;
  right: 0;
  top: 0px;
}

.modal-content {
  background: #efefef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.btn-primary {
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  background: #FF5A60;
  border-radius: 20px;
  border: none;
}

.btn-secondary {
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #43BDD4;
  background: #FFFFFF;
  border: 1px solid #43BDD4;
  box-sizing: border-box;
  border-radius: 20px;
}

.bi-arrow-left-short {
  color: #43BDD4;
}

.routerlink {
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
  color: #000000;
}

.text-start{
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #000000;
}

.footer__div-logo-img {
  width: 200px;
  margin: 20px;
}

</style>
