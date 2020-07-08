<template>
    <div class="footer">
        <ul>
            <li><span class="icon"><svg-icon icon-class="ele"  /></span>ele</li>
            <li><span><svg-icon icon-class="found"  /></span>ele</li>
            <li><svg-icon icon-class="ele" />ele</li>
            <li><svg-icon icon-class="ele" />ele</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'footer'
}
</script>

<style lang="less" scoped>
    .footer {
        position: fixed;
        bottom: 0;
        background-color: #333;
        width: 100%;
        height: 100px;
        color: #FFFFFF;
        padding: 20px 20px;
    }
    ul {
        li {
            float: left;
            color: #FFFFFF;
        }
    }
    .icon {
        color: #1296db;
        font-size: 30px;
    }
</style>
