<template>
    <div>

        <div class="area-left">
            <div style="position:absolute;left:0px;top:0px;right:0;height:60px;line-height:30px; padding: 16px 14px 0px;" >
                <ul class="s-tabs">
                    <li class="fa fa-list-ul" :class="{active:activeIndex==0}" @click="activeIndex=0"></li>
                    <li class="fa fa-star-o" :class="{active:activeIndex==1}" @click="activeIndex=1"></li>
                    <li class="fa fa-share-alt" :class="{active:activeIndex==2}" @click="activeIndex=2"></li>
                </ul>
                <i class="fa fa-search" style="margin:0 10px 0 20px"></i>
                <i class="fa fa-lock"></i>
            </div>

            <div style="position:absolute;left:0;top:60px;right:0px;bottom:0px;padding:0 10px;">
                <!-- 动态显示区1 -->
                <my-tree v-show='activeIndex==0' :list="list" @onSelect="onSelect"></my-tree>

                <!-- 动态显示区2 -->
                <ul v-show="activeIndex==1" class="s-list">
                    <li><i class="fa fa-file-text-o"></i>地产公司销售监控</li>
                    <li><i class="fa fa-file-text-o"></i>产品销售分析</li>
                </ul>

                <!-- 动态显示区3 -->
                <select v-show="activeIndex==2" style="width: 100%; background: transparent;">
                    <option>请选择...</option>
                </select>
            </div>
        </div>
        <div class="area-right">
            <div class="my-tabs" style="position:absolute;top:0px;left:0;right:0px;height:30px;background:#21304C;">
                <router-link tag="div" class="my-tab" to="/home/contents/index" ><i class="fa fa-home"></i></router-link>
                <router-link tag="div" class="my-tab" v-for="(item,index) in $store.state.treeSelectList" :key="index" :to="'/home/contents/'+item.id" > {{item.text}} </router-link>
            </div>

            <div style="position:absolute;top:30px;left:0;right:0px;bottom:0px;">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        name:'contents',
        components:{
            'my-tree': ()=>import('../components/MyTree.vue')
        },
        data:function(){
            this.$http.get('/data/tree01.json').then(res=>{
                this.list=this.listToTree(res.data.data.sort((a,b)=>a.sortIndex-b.sortIndex),'decision-directory-root')
            })
            return {
                activeIndex:0,
                list:[]
            }
        },
        methods:{
            onSelect(node){
                alert(node.name)
            },

            listToTree(data,parentId){
                var itemArr=[];
                for(var i=0;i<data.length;i++){
                    var node=data[i];
                     if(node.pId==parentId ){
                        var newNode={id:node.id, text:node.text, path:node.path, children:this.listToTree(data,node.id)};
                        itemArr.push(newNode);
                     }
                }
                return itemArr.length==0 ? null:itemArr;
            }
        }
    }


</script>

<style scoped>
*{color:#fff}

.area-left{
    width: 240px;
    height: 100%;
    position: absolute;
    left: 0;
    background:#21304c;
}

.area-right{
    position:absolute;
    left:240px;
    top:0px;
    right:0px;
    bottom:0px;
}

ul.s-tabs {
    color: #3296F5;
    white-space: nowrap;
    background: rgba(50,150,245,0.1);
    display: inline-block;
    height: 30px;
    margin: 0;
    padding: 0;
    border-radius: 15px;
}

ul.s-tabs>li {
    display: inline-block;
    width: 50px;
    height: 30px;
    vertical-align: top;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
}

ul.s-tabs>li.active{
    background-color: #3296F5;
    color:#fff;
}


ul.s-list>li {
    line-height: 36px;
    padding-left: 10px;
}
ul.s-list>li>i{
    width:16px;
}

.my-tabs {
    white-space:nowrap;
    font-size:0px;
}
.my-tab {
    height: 100%;
    display: inline-block;
    padding: 0 16px;
    font-size: 12px;
    line-height: 30px;
    border-right:#333;
}
.my-tab>li {
    font-size: 16px;
}
.my-tab.active {
    background:#223E65;
}
</style>