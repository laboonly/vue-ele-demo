<template>
  <div class="shop-content">
      <div class="shop-banner">
          <div class="filter-img"></div>
          <div class="back-icon"><svg-icon icon-class="back"></svg-icon><br/></div>
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
              <div class="nav">
                  <span class="active">商品</span>
              </div>
              <div class="nav"><span>评价</span></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    @import '../style/mixin';
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
</style>