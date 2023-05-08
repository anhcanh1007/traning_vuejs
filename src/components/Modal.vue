<template>
<div class="modal" @click="onCloseModal">
  <div class="modal-dialog">
    <div class="modal-content" :class="{ 'bg-purple': theme === 'contact'}">
      <div class="modal-header">
        <!-- {{ title }} -->
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <!-- {{ content }} -->
        <slot></slot>
    </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</div>

</template>
<script>
    export default{
  methods: {
    onCloseModal(){
        this.$emit('cancel')
    }
  },
        props: {
            title: {
                type: String,
                required: true, //dòng này có nghĩa là ở mỗi component khác khi sử dụng component này đều cần phải bổ sung props title
            },
            content: {
                type: String,
                default: "", //dòng này có nghĩa là ở mỗi component khi sử dụng component này thì props content không bắt buộc phải có
            },
            theme: {
                type: String,
                default: 'example',
                validator(value){
                    return ['example', 'sales', 'contact'].includes(value);
                }
            }
        }
    }
</script>

<style lang="css">
.modal{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: rgba(0,0,0,.2);
}

.modal-dialog {
    position: relative;
    width: auto;
    margin: 4.75rem;
    pointer-events: none;
}
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 0.3rem;
    outline: 0;
}
.bg-purple {
    background-color: purple;
}
.modal-header{
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}
.modal-body{
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
}
.modal-footer{
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
}
</style>