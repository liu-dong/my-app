<template>
    <div>
        <div>
            <vant-demo buttonName="按钮"></vant-demo>
        </div>
        <div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">提交</van-button>
                </div>
            </van-form>
        </div>
        <div>
            <vant-demo buttonName="主要按钮"></vant-demo>
        </div>
    </div>
</template>

<script>
import VantDemo from "@/components/VantDemo";
export default {
    name: "Login",
    components: {VantDemo},
    data() {
        return {
            username: '',
            password: '',
            buttonObject:{
                primary:"主要按钮",
                info:"信息按钮",
                default:"默认按钮",
                warning:"警告按钮",
                danger:"危险按钮",
            }
        };
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
    },
}
</script>

<style scoped>

</style>