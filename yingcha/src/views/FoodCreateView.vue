<template>
  <div>
    <h1>user님만의 꿀조합을 알려주세요!</h1>
    <food-create-form :article="article" action="create"></food-create-form>
  </div>
</template>

<script>
import FoodCreateForm from '@/components/foodcreate/FoodCreateForm.vue'


export default {
  name: 'FoodCreateView',
  components:{
    FoodCreateForm,
  },
  data() {
    return {
      article :{
        pk: null,
        title: '',
        content: '',
      }
    }
  },
}
</script>

<style>

</style>