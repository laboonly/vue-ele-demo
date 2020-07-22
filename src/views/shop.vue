<template>
  <div class="shop-content">
      <div class="shop-banner">
          <div class="filter-img"></div>
          <div class="back-icon" @click="goBack()"><svg-icon icon-class="back"></svg-icon><br/></div>
          <div class="right-icon"><svg-icon icon-class="right"></svg-icon><br/></div>
          <div class="flx shop-banner-content">
            <el-image
                class="img-bg"
                :src="require(`@/assets/image/food.jpg`)"
                :fit="cover"></el-image>
            <div class="banner-text">
                <h1>霸气盖码饭</h1>
                <p><span>商家配送</span> / <span>分钟送达</span> / <span>配送费￥5</span> </p>
                <p>公告: 欢迎光临，用餐高峰期请提前下单，谢谢。</p>
            </div>
          </div>
      </div>
      <div class="shop-detail-content">
          <div class="show-type">
              <div class="nav"><span :class=" changShowType == 'food' ? 'active' : ''" @click="changShowType = 'food'">商品</span></div>
              <div class="nav"><span :class=" changShowType == 'rating' ? 'active' : ''" @click="changShowType = 'rating'">评价</span></div>
          </div>
          <transition name="fade-choose">
            <div class="food-content" v-show="changShowType == 'food'">
                <div class="food-content-top">
                    <div class="food-menu" ref="wrapper">
                        <ul>
                            <li :class="{activity_menu: 0 == menuIndex}"  @click="chooseMenu(0)">热销榜</li>
                            <li>折扣榜</li>
                            <li>热销榜</li>
                            <li>折扣榜</li>
                            <li>热销榜</li>
                            <li>折扣榜</li>
                            <li>热销榜</li>
                            <li>折扣榜</li>
                            <li>热销榜</li>
                            <li>折扣榜</li>
                            <li>热销榜</li>
                            <li>折扣榜</li>
                            <li>热销榜</li>
                            <li>折扣榜</li>
                        </ul>
                    </div>
                    <div class="foods-list">
                        <ul>
                            <li>
                                <header>
                                    <section>
                                        <strong class="header-title">热销榜</strong>
                                        <span class="header-description">热销来袭</span>
                                    </section>
                                    <section class="more-button">
                                        <svg-icon icon-class="more"></svg-icon>
                                    </section>
                                </header>
                                <div class="foods-card-list">
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button show-choose">选择规格</div>
                                    </div>
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button"><svg-icon icon-class="add"></svg-icon></div>
                                    </div>
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button"><svg-icon icon-class="add"></svg-icon></div>
                                    </div>
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button"><svg-icon icon-class="add"></svg-icon></div>
                                    </div>
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button"><svg-icon icon-class="add"></svg-icon></div>
                                    </div>
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button"><svg-icon icon-class="add"></svg-icon></div>
                                    </div>
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button"><svg-icon icon-class="add"></svg-icon></div>
                                    </div>
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button"><svg-icon icon-class="add"></svg-icon></div>
                                    </div>
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button"><svg-icon icon-class="add"></svg-icon></div>
                                    </div>
                                    <div class="foods-card">
                                        <el-image
                                        class="img-bg"
                                        :src="require(`@/assets/image/food.jpg`)"
                                        :fit="cover"></el-image>
                                        <div class="foods-card-text">
                                            <h3>椰果奶茶</h3>
                                            <p class="description">主要原料: 椰果</p>
                                            <p class="description">月售339 好评率88%</p>
                                            <p class="sala"><span>5.7折</span></p>
                                            <p class="price"><span class="rmb">￥</span><span>7.9</span> <span class="rmb">￥</span><span>13.9</span></p>
                                        </div>
                                        <div class="add-button"><svg-icon icon-class="add"></svg-icon></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </transition>
          <transition name="fade-choose">
            <div class="rating-content" v-show="changShowType == 'rating'">

            </div>
          </transition>
      </div>
      <div class="buy-cart-content">
          <div class="cart-icon-num">
              <div class="cart-icon">
                  <svg-icon icon-class="cart"></svg-icon>
              </div>
              <div class="cart-num">
                  <p>￥ 0.00</p>
                  <p>配送费￥5</p>
              </div>
          </div>
          <div class="gotopay">
              <span class="pay-button">还差￥20起送</span>
          </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      changShowType: 'food',
      menuIndex: 0,
      scroll: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    chooseMenu (index) {
      this.menuIndex = index
      // menuIndexChange解决运动时listenScroll依然监听的bug
      this.menuIndexChange = false
      // this.foodScroll.scrollTo(0, -this.shopListTop[index], 400);
      // this.foodScroll.on('scrollEnd', () => {
      //     this.menuIndexChange = true;
      // })
    }
  }
}
</script>

<style lang="less" scoped>
    @import '../style/mixin';
    .shop-content {
        position: relative;
    }
    .shop-banner {
        position: relative;
    }
    .filter-img {
        width: 100%;
        height: 100%;
        .allcover();
        background-image: url('../assets/image/food.jpg');
        filter: blur(10px);
    }
    .back-icon {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        z-index: 99;
        color: @fc;
    }
    .right-icon {
        position: absolute;
        top: 1.5rem;
        right: 0.5rem;
        z-index: 99;
        color: @fc;
    }
    .shop-banner-content {
        padding: 0.4rem 0 0.4rem 0.4rem;
        z-index: 9;
    }
    .img-bg {
        .bis();
        .borderRadius(0.15rem);
        margin-right: 0.3rem;
        width: 2.9rem;
        height: 2.9rem;

    }
    .banner-text {
        flex-shrink: 1;
        z-index: 9;
        h1 {
            color: @fc;
            font-size: 0.8rem;
            width: 100%;
            font-weight: bold;
            margin-bottom: 0.3rem;
        }
        p {
            font-size: 0.5rem;
            color: @fc;
            margin-bottom: 0.3rem;
            span {
                color: @fc;
            }
        }
    }

    .show-type {
        display: flex;
        justify-content: center;
        text-align: center;
        background-color: #fff;
        padding: .6rem 0 .6rem;
        border-bottom: 1px solid #ebebeb;
        border-top: 1px solid #ebebeb;
        .nav {
            flex: 1;
            color: #666;
            font-size: 0.65rem;
            span {
                padding: 0.2rem 0.1rem;
                // border-bottom: 0.12rem solid #fff;
            }
        }
        .active {
            color: @blue;
            border-bottom: 0.12rem solid @blue;
        }
    }
    .fade-choose-enter-active, .fade-choose-leave-active {
        transition: opacity .5s;
    }
    .fade-choose-leave, .fade-choose-leave-active {
        display: none;
    }
    .fade-choose-enter, .fade-choose-leave-active {
        opacity: 0;
    }
    .food-content-top {
        display: flex;
        flex: 1;
        // overflow: hidden;
        // position: relative;
        // height: calc(100% - 6.4rem);
    }
    .food-menu {
        height: calc(100% - 6.4rem);
        overflow: hidden;
        ul {
            width: 3.8rem;
            background-color: #F5F5F5;
            li {
                padding: 0.7rem 0.3rem;
                border-bottom: 0.025rem solid #ededed;
                box-sizing: border-box;
                position: relative;
                font-size: 0.6rem;
                color: #666;
                font-weight: bold;
            }
            .activity_menu {
                border-left: 0.15rem solid #3190e8;
                background-color: #fff;
            }
        }
    }
    .foods-list {
        flex: 4;
        overflow-y: hidden;
        height: calc(100% - 6.4rem);
        header {
            width: 100%;
            padding: 0.4rem 0.4rem;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .header-title {
                font-size: 0.7rem;
                color: #666;
                font-weight: bold;
            }
            .header-description {
                font-size: 0.5rem;
                color: #999;
                width: 30%;
                overflow: hidden;
            }
            .more-button {
                font-size: 1rem;
                color: #999;
            }
        }
        .foods-card {
            background-color: @fc;
            padding: .6rem .4rem;
            border-bottom: 1px solid #f8f8f8;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: flex-start;
            .add-button {
                position: absolute;
                right: 0.5rem;
                bottom: 0.5rem;
                color: @blue;
                font-size: 0.9rem;
            }
            .show-choose {
                font-size: 0.55rem;
                color: #fff;
                padding: .1rem .2rem;
                background-color: #3190e8;
                border-radius: 0.2rem;
                border: 1px solid #3190e8;
            }
            .img-bg {
                .bis();
                .borderRadius(0.15rem);
                margin-right: 0.3rem;
                width: 2rem;
                height: 2rem;
            }
            .foods-card-text {
                h3 {
                    font-size: 0.7rem;
                    color: #333;
                }
                .description {
                    font-size: 0.5rem;
                    color: #999;
                    line-height: .6rem;
                }
                .sala {
                    span {
                        color: rgb(241, 136, 79);
                        border-color: rgb(240, 115, 115);
                        font-size: .3rem;
                        border: 1px solid currentColor;
                        border-radius: 0.3rem;
                        padding: .08rem;
                        display: inline-block;
                        -webkit-transform: scale(0.8);
                        transform: scale(0.8);
                        // margin-left: -0.35rem;
                    }
                }
                .price {
                    .rmb {
                        font-size: 0.4rem;
                        color: #f60;
                        margin-right: .05rem;
                    }
                    span {
                        font-size: 0.6rem;
                        color: #f60;
                        font-weight: bold;
                        margin-right: .3rem;
                    }

                }
            }
        }
    }
    .buy-cart-content {
        position: fixed;
        background-color: #3d3d3f;
        bottom: 0;
        left: 0;
        z-index: 13;
        display: -webkit-flex;
        display: flex;
        width: 100%;
        height: 2rem;
        .cart-icon-num {
            .cart-icon {
                display: flex;
                justify-content: center;
                background-color: #3d3d3f;
                position: absolute;
                padding: .4rem;
                border: 0.18rem solid #444;
                border-radius: 50%;
                left: .5rem;
                top: -.7rem;
                color: @fc;
            }
            .cart-num {
                position: absolute;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                left: 3.5rem;
                p {
                    &:nth-of-type(1){
                        font-size: 0.8rem;
                        font-weight: bold;
                        margin-bottom: 0.1rem;
                    }
                    &:nth-of-type(2){
                        font-size: 0.4rem;
                    }
                    color: @fc;
                }
            }
        }
        .gotopay {
            position: absolute;
            right: 0;
            background-color: #535356;
            width: 5rem;
            height: 100%;
            text-align: center;
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: center;
            align-items: center;
            -webkit-justify-content: center;
            justify-content: center;
            .pay-button {
                font-size: 0.7rem;
                color: #fff;
                font-weight: bold;
            }

        }
    }
</style>
