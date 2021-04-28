<template>
    <div>
        <van-nav-bar
            left-arrow
            left-text="返回"
            right-text="按钮"
            title="人员列表"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch"/>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <p>刷新次数: {{ count }}</p>
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <van-cell>
                    <van-col span="3">序号</van-col>
                    <van-col span="3">姓名</van-col>
                    <van-col span="3">年龄</van-col>
                    <van-col span="3">性别</van-col>
                    <van-col span="3">手机号</van-col>
                    <van-col span="3">邮箱</van-col>
                    <van-col span="3">现住址</van-col>
                    <van-col span="3">创建时间</van-col>
                </van-cell>
                <van-cell v-for="(item,index) in list" :key="item.id">
                    <van-col span="3">{{ index + 1 }}</van-col>
                    <van-col span="3">{{ item.name }}</van-col>
                    <van-col span="3">{{ item.age }}</van-col>
                    <van-col span="3">{{ item.sex }}</van-col>
                    <van-col span="3">{{ item.phone }}</van-col>
                    <van-col span="3">{{ item.email }}</van-col>
                    <van-col span="3">{{ item.presentAddress }}</van-col>
                    <van-col span="3">{{ item.createTime }}</van-col>
                </van-cell>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>

import {Toast} from "vant";

export default {
    name: "PersonList",
    data() {
        return {
            personInfo: {
                "code": 200,
                "success": true,
                "message": "查询成功",
                "data": [
                    {
                        "id": "3e0468155a3f4679b060c904d6cc8d42",
                        "companyId": "6d5fd38adaed4049aaf7b9eec4726e62",
                        "name": "刘东",
                        "identityCard": "201909221449",
                        "age": 23,
                        "birthdate": "1996-10-07",
                        "sex": 0,
                        "phone": "15170519059",
                        "email": "964708273@qq.com",
                        "presentAddress": "广东省广州市",
                        "nativePlace": "江西丰城",
                        "individualResume": "超级管理员",
                        "createTime": "2019-09-22 06:52:02",
                        "updateTime": null,
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "56339ad1808744fda899167232b35729",
                        "companyId": "112ea259542f4af3b5375df54ebbb70c",
                        "name": "刘东1",
                        "identityCard": "362202202010121324",
                        "age": 25,
                        "birthdate": null,
                        "sex": 0,
                        "phone": null,
                        "email": null,
                        "presentAddress": null,
                        "nativePlace": null,
                        "individualResume": null,
                        "createTime": "2020-10-12 07:29:20",
                        "updateTime": null,
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "58e1f32220854523997bfd9a6305df04",
                        "companyId": "暂未入职",
                        "name": "刘东2",
                        "identityCard": "362202202010121324",
                        "age": 25,
                        "birthdate": null,
                        "sex": 0,
                        "phone": null,
                        "email": null,
                        "presentAddress": null,
                        "nativePlace": null,
                        "individualResume": null,
                        "createTime": "2020-10-12 07:29:34",
                        "updateTime": null,
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "600e5cff674e4594819674f624b3cf0c",
                        "companyId": "112ea259542f4af3b5375df54ebbb70c",
                        "name": "刘东3",
                        "identityCard": "362202202010121324",
                        "age": 25,
                        "birthdate": null,
                        "sex": 0,
                        "phone": null,
                        "email": null,
                        "presentAddress": null,
                        "nativePlace": null,
                        "individualResume": null,
                        "createTime": "2020-10-12 05:34:15",
                        "updateTime": "2020-10-12T13:45:21.000+00:00",
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "71e89c7c6aef45d7982ab733f7ec76ab",
                        "companyId": "暂未入职",
                        "name": "刘东4",
                        "identityCard": "362202202010121324",
                        "age": 25,
                        "birthdate": null,
                        "sex": 0,
                        "phone": "15170511111",
                        "email": null,
                        "presentAddress": null,
                        "nativePlace": null,
                        "individualResume": null,
                        "createTime": "2020-10-12 07:32:19",
                        "updateTime": "2020-11-27T04:39:48.000+00:00",
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "7ba92ef0dab542e6bd1061770e11c4cb",
                        "companyId": "112ea259542f4af3b5375df54ebbb70c",
                        "name": "刘东5",
                        "identityCard": "362202202010121324",
                        "age": 25,
                        "birthdate": null,
                        "sex": 0,
                        "phone": "15170510000",
                        "email": null,
                        "presentAddress": null,
                        "nativePlace": null,
                        "individualResume": null,
                        "createTime": "2020-10-12 07:34:57",
                        "updateTime": "2020-11-27T04:39:00.000+00:00",
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "8699634f0a344f9da713ac7d91c90e21",
                        "companyId": "暂未入职",
                        "name": "刘东6",
                        "identityCard": "362202202010121324",
                        "age": 25,
                        "birthdate": null,
                        "sex": 0,
                        "phone": null,
                        "email": null,
                        "presentAddress": null,
                        "nativePlace": null,
                        "individualResume": null,
                        "createTime": "2020-10-12 06:21:59",
                        "updateTime": null,
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "8b80f924f19746e6bdfc18964f81e33d",
                        "companyId": "暂未入职",
                        "name": "君不语",
                        "identityCard": "202011281301",
                        "age": 25,
                        "birthdate": "2020-11-27",
                        "sex": 0,
                        "phone": "15170512222",
                        "email": null,
                        "presentAddress": "中央圣域",
                        "nativePlace": "黄泉界",
                        "individualResume": "问君君不语",
                        "createTime": "2020-11-28 05:01:26",
                        "updateTime": "2020-11-28T06:06:33.000+00:00",
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "9f0774f7d43c4b4ca1b75cf330da9999",
                        "companyId": "112ea259542f4af3b5375df54ebbb70c",
                        "name": "刘东7",
                        "identityCard": "362202202010121329",
                        "age": 25,
                        "birthdate": null,
                        "sex": 0,
                        "phone": null,
                        "email": null,
                        "presentAddress": null,
                        "nativePlace": null,
                        "individualResume": null,
                        "createTime": "2020-10-12 05:29:26",
                        "updateTime": "2020-10-12T13:45:21.000+00:00",
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "a4950c6b5da3414b81be3379a9c7c492",
                        "companyId": "暂未入职",
                        "name": "刘东8",
                        "identityCard": "202010111950",
                        "age": 25,
                        "birthdate": "1996-10-17",
                        "sex": 0,
                        "phone": "16620419059",
                        "email": "15170519059",
                        "presentAddress": "广东广州",
                        "nativePlace": "江西丰城",
                        "individualResume": "年与时驰，意与日去",
                        "createTime": "2020-10-11 12:30:03",
                        "updateTime": "2020-10-11T12:30:03.000+00:00",
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "b7baaee0c1e1493d9eec5f833c7bb51a",
                        "companyId": "暂未入职",
                        "name": "刘",
                        "identityCard": "362202202010121541",
                        "age": 25,
                        "birthdate": null,
                        "sex": 0,
                        "phone": "1510000000",
                        "email": null,
                        "presentAddress": null,
                        "nativePlace": null,
                        "individualResume": null,
                        "createTime": "2020-10-12 07:48:39",
                        "updateTime": "2020-11-27T04:38:05.000+00:00",
                        "createUserId": null,
                        "updateUserId": null
                    },
                    {
                        "id": "efb6f0eb3ba541429d80e83f1cb80e7c",
                        "companyId": "112ea259542f4af3b5375df54ebbb70c",
                        "name": "刘东9",
                        "identityCard": "362202202010121324",
                        "age": 25,
                        "birthdate": null,
                        "sex": 0,
                        "phone": null,
                        "email": null,
                        "presentAddress": null,
                        "nativePlace": null,
                        "individualResume": null,
                        "createTime": "2020-10-12 06:31:27",
                        "updateTime": "2020-10-12T13:45:21.000+00:00",
                        "createUserId": null,
                        "updateUserId": null
                    }
                ],
                "total": 0
            },
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
            count: 0,
            pageSize: 5,
            value: '',
        };
    },
    methods: {
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            this.list = [];
            // 加载状态结束
            this.refreshing = false;

            for (let i = 0; i < this.pageSize; i++) {
                if (i === this.personInfo.data.length) {
                    break;
                }
                this.list.push(this.personInfo.data[i]);
            }
            this.loading = false;

            if (this.list.length >= this.personInfo.data.length) {
                this.finished = true;
            }
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.pageSize += 5;
            this.loading = true;
            this.onLoad();
            this.count++;
            Toast('刷新成功');
        },
        onSearch(val) {
            Toast(val);
        },
        onClickLeft() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        onClickRight() {
            Toast('按钮');
        },
    },
}
</script>

<style scoped>

</style>