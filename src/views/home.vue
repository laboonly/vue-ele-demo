<template>
  <div class="home-content">
    <div class="category">
      <el-carousel trigger="click">
        <el-carousel-item class="category-list">
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>美食</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>美食</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>美食</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>美食</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>美食</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>美食</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>美食</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>美食</figcaption>
            </figure>
          </router-link>
        </el-carousel-item>
        <el-carousel-item class="category-list">
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>甜品</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>甜品</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>甜品</figcaption>
            </figure>
          </router-link>
          <router-link :to="{path: '/food'}" class="link_to_food">
            <figure>
                <img src='@/assets/image/food.jpg'>
                <figcaption>甜品</figcaption>
            </figure>
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/footer'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="less" scoped>
  .category-list {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px 10px;
    margin-top: 50px;
  }
  .link_to_food {
    display: block;
  }
  figure {
    margin-bottom: 20px;
    text-align: center;
    img {
      width: 85px;
      height: 85px;
    }
    figcaption {
      font-size: 18px;
    }
  }

</style>
