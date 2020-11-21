<template>
  <div>
      <div style="display:flex;">
          <img v-for="image in home.images" :key="image" alt="something descriptive" :src="image" width="200" height="150"/>
      </div>
      {{ home.title }}
      {{home.privePerNight}} / night <br/>
      <img src="/images/marker.svg" height="20" width="20"/> {{home.location.address}} {{home.location.city}} {{home.location.state}} <br/>
      <img src="/images/star.svg" height="20" width="20"/>{{home.reviewValue}}<br/>
      {{home.guests}} guests, {{home.bedrooms}} bedrooms, {{home.beds}} beds, {{home.bathrooms}} bathrooms<br/>
      
      </div>
</template>
<script>
import homes from "~/data/homes";
export default {
    head(){
        return{
            title:this.home.tile,
        }
    },
        data(){
            return{
                home:{}
            }
        
    },
    created(){
        const home = homes.find((home) => home.objectID == this.$route.params.id)

        this.home = home
    }
};
</script>