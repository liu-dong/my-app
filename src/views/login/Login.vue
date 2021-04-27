<template>
    <div>
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
            <van-tag round type="primary" @click="toPath('/register')">账号注册</van-tag>
            <van-tag round type="primary" @click="toPath('/retrieve')">找回密码</van-tag>
<!--            <van-tag round type="primary" to="/register">账号注册</van-tag>-->
<!--            <van-tag round type="primary" to="/retrieve">找回密码</van-tag>-->
        </div>
    </div>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
            this.$router.push('/homePage');
        },
        toPath(param) {
            this.$router.push(param);
        },
    },
}
</script>

<style scoped>

</style>