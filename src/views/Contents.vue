<template>
    <div>
        <img src="../assets/img/content.png" style="width:100%;height:100%;position:absolute;z-index:-1;"/>

        <div class="area-left">
            <div style="position:absolute;left:0px;top:0px;right:0;height:60px;line-height:60px;" >
                <ul>
                    <li class="fa fa-list-ui"></li>
                    <li class="fa fa-start-o"></li>
                    <li class="fa fa-share-alt"></li>
                </ul>
            </div>

            <my-tree :list="list" style="position:absolute;left:0;top:60px;"></my-tree>
        </div>
        <div class="area-right">
            <div style="position:absolute;top:0px;left:0;right:0px;height:30px;">

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
                list:[]
            }
        },
        methods:{

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

button.btn.btn-default{
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    position: relative;
    color:#fff;
    border-radius:15px !import;
}

button.btn.select{
    background-color: #3296F5;
    color: #ffffff;
}
</style>