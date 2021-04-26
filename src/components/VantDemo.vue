<template>
    <div class="vantDemo">
        <h1>Hello World</h1>
        <div>
            <van-button type="primary">{{ buttonObject.primary }}</van-button>
            <van-button type="info">{{ buttonObject.info }}</van-button>
            <van-button type="default" v-on:click="count++">您点击了 {{ count }} 次</van-button>
            <van-button type="warning">{{ buttonObject.warning }}</van-button>
            <van-button type="danger">{{ buttonObject.danger }}</van-button>
        </div>
    </div>
</template>

<script>

export default {
    name: "VantDemo",
    props: {
        msg: String,
        buttonObject: Object
    },
    data() {
        return {
            count: 0,
            buttonGroup: {
                primary: "主要按钮",
                info: "信息按钮",
                default: "默认按钮",
                warning: "警告按钮",
                danger: "危险按钮"
            }
        }
    },
    created() {
        // this.buttonGroup = this.buttonObject
    },
    computed(){

    }
}
</script>

<style scoped>

</style>