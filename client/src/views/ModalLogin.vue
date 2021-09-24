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
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="$emit('closeLogin')"
              ></button>
            </div>
            <div class="modal-body d-flex">
              <div class="modal-icon-cuenta">
                <h2 class="mdi mdi-account-outline align-baseline fs-4"></h2>
              </div>

              <div class="modal-formulario ps-3">
                <h2
                  style="font-family: 'Allerta', sans-serif; text-align: start"
                  class="fs-5"
                >
                  <strong style="align-self: center">Mi Cuenta</strong>
                </h2>
                <h6
                  syle="font-family: 'Abel', sans-serif; text-align: start"
                  >
                  Ingresa con email y contraseña
                </h6>
                <form>
                    <div class="mb-3">
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-4">
                      <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="$emit('closeLogin')"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Save changes</button>
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
    return {};
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
  left: 915px;
  top: 0px;
}

.modal-content {
  background: #efefef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.icon-user {
  fill: "currentColor";
  transform-origin: 50% 50%;
  transform: scale(2);
}
</style>
