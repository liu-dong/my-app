<template>
    <div class="vantDemo">
        <h1>Hello World</h1>
        <van-cell-group>
            <van-cell title="单元格" value="内容"></van-cell>
            <van-cell title="单元格" value="内容"></van-cell>
        </van-cell-group>
    </div>
</template>

<script>

export default {
    name: "VantDemo",
    props: {
        msg: String
    }
}
</script>

<style scoped>

</style>