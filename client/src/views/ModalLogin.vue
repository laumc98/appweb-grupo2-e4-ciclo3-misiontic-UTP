<template>
  <div class="container">
    <div v-show="showModal" class="modal-mask"> 
      <div class="modal-wrapper">
        <div class="modal-dialog" style="margin: 0">
          <div class="modal-content" style="padding: 0; box-sizing: content-box; height: 100vh">
           <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('closeLogin')"></button>
          </div>
          <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('closeLogin')">Close</button>
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
    props: ['showModal'],
    data(){
        return{
        }
    },

}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  right:0%;
  height: 100%;
}
</style>

