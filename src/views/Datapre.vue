<template>
    <div>
        <h2 style="line-height:50px;height:50px;background:#f7f8fa;padding:0 10px;">
            <span style="font-size:16px;color:#999;">数据列表</span>

            <div class="pull-right">
                <a><i class="fa fa-chain" style="color:#3685f2;width:16px;"></i>关联视图</a>
            </div>
        </h2>

        <dl v-for="(item,index) in list" :key="index" :class="{min: !item._open}">
            <dt v-if="item.name!='__no_group__'" @click="item._open=!item._open">
                <i class="fa" :class="{'fa-caret-right':!item._open,'fa-caret-down':item._open}"></i>{{item.name}}
            </dt>
            <dd v-for="child in item.packs" :key="child.id">
                <i class="fa fa-file-text"></i>
                <span>{{child.tableCount}}</span>
                <p>{{child.name}}</p>
            </dd>
            <dd v-if="item.name=='__no_group__'">
                <i class="fa fa-file-text"></i>
                <span>{{item.myAnalysisTables.length}}</span>
                <p>我的自助数据集</p>
            </dd>
        </dl>
    </div>
</template>

<script>

    export default{
        name:'datapre',
        data:function(){
            this.$http.get('/data/datapre.json').then((res)=>{
                this.list=res.data.data.map((item)=> Object.assign(item,{_open:true}) ) ;
            })
            return {list:[]};
        }

    }

</script>

<style scoped>

dt {
    line-height: 40px;
    margin: 0 8px 8px 8px;
}

dt:hover{
    background:#f7f8fa;
}

dt>i{
    width: 20px;
    text-align: center;
}

dd {
    display: inline-block;
    margin: 4px 8px;
    background: #f7f8fa;
    width: 150px;
    height: 130px;
    position: relative;
}

dd:hover {
    background-color: #fff;
    -webkit-box-shadow: 0 2px 8px 0 rgba(61,77,102,.15);
    -moz-box-shadow: 0 2px 8px 0 rgba(61,77,102,.15);
    box-shadow: 0 2px 8px 0 rgba(61,77,102,.15);
}

dd>i {
    font-size: 64px;
    color: #faaa39;
    display: block;
    line-height: 130px;
    text-align: center;
}

dd>p {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    line-height: 36px;
}

dd>span {
    position: absolute;
    bottom: 30px;
    right: 53px;
    color: #ffffff;
}

dl {
    padding: 4px 10px;
}

.min>dd{
    display:none;
}

</style>