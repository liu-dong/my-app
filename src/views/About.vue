<template>
    <div class="about">
        <h1>This is an about page</h1>
        <vant-demo :buttonObject="buttonObject"></vant-demo>
    </div>
</template>
<script>
import VantDemo from "@/components/VantDemo";

export default {
    name: "Login",
    components: {VantDemo},
    data() {
        return {
            buttonObject:{
                primary:"主要按钮1",
                info:"信息按钮",
                default:"默认按钮",
                warning:"警告按钮",
                danger:"危险按钮"
            }
        };
    },
}
</script>