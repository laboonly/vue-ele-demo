<template>
  <div class="home-content">
    <div class="category">
      <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
              <div class="category-list">
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
              </div>
          </swiper-slide>
          <swiper-slide>
              <div class="category-list">
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
              </div>
          </swiper-slide>
      </swiper>
    </div>
    <div class="shops-content">
      <h3>附近商家</h3>
      <div class="shops-list">
        <div class="shops-card">
          <div class="bg-img" :style="{'backgroundImage': 'url(' + require(`@/assets/image/food.jpg`) + ')'}"></div>
          <div class="card-text">
            <div class="header">
              <h2><span class="brand">品牌</span>效果演示</h2>
              <section>
                <p><span>保</span><span>准</span><span>票</span></p>
              </section>
            </div>
            <div class="rate">
              <section>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
                <span>月售106单</span>
              </section>
              <section>
                <span>蜂鸟专送</span><span>准时达</span>
              </section>
            </div>
            <div class="shop-info">
              <section>
                <p>￥20起送 / 配送费约￥5</p>
              </section>
              <section>
                <p><span>1818.7公里</span> / <span>19小时17分钟</span></p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/footer'

export default {
  components: {
    Footer
  },
  data () {
    return {
      value: 3.7, // 评分
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .home-content {
    background-color: #F5F5F5;
  }
  .category {
    background-color: #FFFFFF;
  }
  .category-list {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px 10px;
    margin-top: 50px;
    overflow: hidden;
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
  .shops-content {
    margin-top: 20px;
    padding: 20px 0;
    background-color: #FFFFFF;
    h3 {
      padding: 0 20px;
    }
    .shops-list {
      margin-top: 20px;
    }

  }
  .shops-card {
    display: flex;
    justify-content: flex-start;
    padding: 20px 20px;
    .bg-img {
      flex-shrink: 0;
      width: 2.7rem;
      height: 2.7rem;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px;
    }
    .card-text {
      padding-left: 10px;
      flex-grow: 2;
      .header {
        display: flex;
        justify-content: space-between;
      }
      h2 {
        font-size: 0.65rem;
        font-weight: 600;
        vertical-align: middle;
        .brand {
          background-color: #ffd930;
          font-size: 0.5rem;
          border-radius: 4px;
          margin-right: 0.2rem;
          padding: 0.1rem 0.1rem;
        }
      }
      .el-rate {
        display: inline-block;
      }
      .rate {
        margin: 0.52rem 0;
        display: flex;
        justify-content: space-between;
      }
      .shop-info {
        display: flex;
        justify-content: space-between;
        p {
          font-size: 0.4rem;
        }
      }
      span {
        font-size: 0.4rem;
      }
    }
  }
</style>
<style lang="less">
  .el-rate__icon {
      font-size: 0.4rem;
      margin-right: 0.2rem;
      color: #C0C4CC;
      -webkit-transition: .3s;
      transition: .3s;
  }
</style>>
