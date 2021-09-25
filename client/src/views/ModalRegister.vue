<template>
  <div class="container">
    <div v-show="showModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog">
          <div class="modal-content">
           <div class="modal-header">
              <h2
                class="text1"
              >
              Registrate
              </h2>
              <p></p>
              <h6
                class="text2"
              >
              Es rápido y fácil
              </h6>
          </div>
          <div class="modal-body">
            <form class="row g-3">
              <div class="col-md-6">
                <input type="email" class="form-control" placeholder="Nombre">
              </div>
              <div class="col-md-6">
                <input type="password" class="form-control" placeholder="Apellido">
              </div>
              <div class="col-12">
                <input type="text" class="form-control" placeholder="Correo Electronico">
              </div>
              <div class="col-12">
                <input type="text" class="form-control" placeholder="Número de Identificación">
              </div>
              <div class="col-12">
                <input type="text" class="form-control" placeholder="Ingresa una Contraseña">
              </div>
              <div class="col-12">
                <input type="text" class="form-control" placeholder="Repite la contraseña">
              </div>
              <div class="col-12">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$emit('closeRegister')">Registrate</button>
              </div>
            </form>
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
    props: ['showModal'],
    data(){
        return{
        }
    },

}
</script>

<style lang="scss" scoped>

@import url("https://fonts.googleapis.com/css2?family=Allerta&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

.modal-mask {
  position: fixed;
  left: 25%;
  right: 25%;
  top:9%;
  bottom: 5%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: absolute;
}

.modal-header {
  background: rgba(239, 239, 239, 0.38);
  border-radius: 20px 20px 0px 0px;
  height: 110px;
  width: 647px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 80.63%;
  border-radius: [object Object]px;
}

.modal-content {
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  height: 489px;
  width: 647px;
  left: 0px;
  top: 4px;
  border-radius: 20px;
}

.modal-body {
  padding-left: 70px;
  padding-right: 70px;
}

.text1 {
  position: absolute;
  left: 3.86%;
  right: 66.77%;
  top: 1.76%;
  bottom: 90.14%;
  font-family: Allerta;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 46px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}

.text2 {
  position: absolute;
  left: 3.86%;
  right: 77.43%;
  top: 15.74%;
  bottom: 84.86%;
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}

.form-control {
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: left;
  text-align:left;
  color: #A6A4A4;
  background: rgba(248, 248, 248, 0.88);
  border: 1px solid #A6A4A4;
  box-sizing: border-box;
  border-radius: 5px;
}

.btn-primary {
  font-family: Allerta;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  height: 51px;
  width: 313px;
  left: 167px;
  top: 275px;
  border-radius: 20px;
  padding: 10px;
  background: #43BDD4;
  border-radius: 20px;
}

</style>