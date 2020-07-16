<template>
    <div class="footer">
        <ul>
            <li class="active">
                <svg-icon icon-class="ele"></svg-icon><br/>
                <span>外卖</span>
            </li>
            <li>
                <svg-icon icon-class="faxian"></svg-icon><br/>
                <span>发现</span>
            </li>
            <li>
                <svg-icon icon-class="dingdan"></svg-icon><br/>
                <span>订单</span>
            </li>
            <li>
                <svg-icon icon-class="wode"></svg-icon><br/>
                <span>我的</span>
            </li>
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
        width: 100%;
        height: 1.95rem;
        border-top: 1px solid #DCDFE6;
        background-color: #FFFFFF;
        color: #FFFFFF;
        padding: 0.25rem 0.15rem;
    }
    ul {
        display: flex;
        justify-content: space-between;
        li {
            color: #C0C4CC;
            width: 40px;
            text-align: center;
            cursor: pointer;
            font-size: 0.45rem;
            .svg-icon {
                color: #3190e8;
                font-size: 0.85rem;
            }
            span {
                color: #C0C4CC;
            }
        }

        .active {
            color: #3190e8;
            span {
                color: #3190e8;
            }
        }
    }

</style>
