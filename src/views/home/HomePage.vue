<template>
    <div class="homePage">
        <van-grid :gutter="10">
            <van-grid-item v-for="item in gridGroup" :key="item.id"
                           :icon="item.menuIcon" :text="item.menuName"
                           :to="item.menuUrl"
            />
        </van-grid>
    </div>
</template>

<script>

export default {
    name: 'HomePage',
    data() {
        return {
            gridGroup: [
                {
                    menuName: "人员管理",
                    menuIcon: "user-o",
                    menuUrl: "/personList",
                    id: "3c00fad6e46f4142804b1421190ab2a2"
                },{
                    menuName: "账号管理",
                    menuIcon: "user-circle-o",
                    menuUrl: "/accountList",
                    id: "3c00fad6e46f4142804b1421190ab2a2"
                },{
                    menuName: "角色管理",
                    menuIcon: "manager",
                    menuUrl: "/roleList",
                    id: "3c00fad6e46f4142804b1421190ab2a2"
                },{
                    menuName: "商品管理",
                    menuIcon: "photo-o",
                    menuUrl: "/productList",
                    id: "3c00fad6e46f4142804b1421190ab2a2"
                },
            ]
        }
    }
}
</script>
<style>

</style>