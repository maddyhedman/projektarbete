<template>
 <div>
     <h1>{{cardClass}}</h1>
  </div> 
</template>

<script>
export default {
    props: {cardClass: String},
    

}
</script>

<style>
.cardClass{
    position: absolute;
}
</style>