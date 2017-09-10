<template>
  <div class="view">
    <div class="container pt-4">
      <div class="row justify-content-center">
          <div class="col-6 text-center">
            <div class="card bg-light" v-for="el in secret">
              <div class="card-body">
                {{el.cipher}}
              </div>
            </div>
          </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'view',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      secret: "",
    }
  },
  created(){
    this.$http.get('http://localhost:3000/api/rsa/dec').then(function(data){
      console.log(data.body)
      this.secret=data.body
    })
  }
}
</script>

<style scoped>

</style>
