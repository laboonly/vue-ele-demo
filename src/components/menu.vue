<template>
    <div class="menu-content">
        <div class="right login">
            <p><span>登录</span>|<span>注册</span></p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
    .menu-content {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        height: 1.95rem;
        z-index: 100;
        background-color: #3190e8;
        padding: 0 0.25rem;
    }
    .right {
        float: right;
    }
    .login {
        width: 200px;
        text-align: right;
        font-size: 0.65rem;
        p {
            line-height: 1.95rem;
            color: #FFFFFF;
            span { color: #FFFFFF; }
        }
    }
</style>
