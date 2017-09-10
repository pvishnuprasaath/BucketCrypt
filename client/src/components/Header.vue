<template>
  <div class="hello ">
    <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#">BucketCrypt</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <router-link to="/" class="nav-link">Home</span></router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/view" class="nav-link">View</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .router-link-active{
   color:darkcyan;
 }
</style>
