<template>
  <div>
      <div class="form-group ">
       <input :type="inputtype" class="form-control" :placeholder="userplaceholder " id="UserName" v-model="inputvalue" @keyup="dtatemit">
       <i :class="faicon"></i>
     </div>
  </div>
</template>

<script>
export default {
name:'textBoxComponent',
props: ["inputtype", "userplaceholder", "faicon"],
    data() {
            return {
                inputvalue:null,
            }
    },
    methods:{
            dtatemit(){
                this.$emit("datavalue", this.inputvalue);

            }
    },
    mounted(){
        this.dtatemit()
    }

}
</script>

<style>

</style>