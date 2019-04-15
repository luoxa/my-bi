<template>
  <ul class="my-tree">
    <li v-for="item in list"
      @click.stop="select(item)"
      :key='item.id'
      :class="{'select':isSelect(item.id),'notLeaf':item.children,'isLeaf':!item.children}">
      <span :style="{'padding-left':left+'px'}">
        <i class="fa icon1" :class="{'fa-caret-right':item.children && !isSelect(item.id), 'fa-caret-down':item.children && isSelect(item.id)}">
        </i><i class="fa icon2" :class="{'fa-folder-open-o':item.children, 'fa-file-text-o':!item.children}">
        </i><span>{{item.text}}</span>
      </span>
      <my-tree v-if="item.children" :list="item.children" :left="left+leftAdd" :left-add="leftAdd"></my-tree>
    </li>
  </ul>
</template>

<script>
    export default {
        name:'my-tree',
        props:{
            'list':Array,
            'left':{
                type:Number,
                default:10
            },
            'leftAdd':{
                type:Number,
                default:10
            }
        },
        data:function(){
          return {selectId:null}
        },
        methods:{
            select(item){
              this.selectId = item.id==this.selectId&&item.children ? "":item.id;

              if(!item.children){
                this.$store.commit('treeSelect',item.id)
                this.$router.push({path:`/home/contents/${item.id}`})
              }
            },
            isSelect(id){
                return id == this.selectId;
            }
        }
    }

</script>

<style scoped lang="less">
  .my-tree{
    width: 100%;
    height: 100%;
    padding-left: 0;
    color:#EDF3FA;
  }
  .my-tree li{
    height:36px;
    line-height: 36px;
    white-space:nowrap;
    overflow:hidden;
  }
  .my-tree li>span{
    width:100%;
    display:block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }
  .my-tree li.select.notLeaf{
      height:auto;
  }
  .my-tree li.select.isLeaf>span{
      background:rgba(50,150,245,0.15);
      color:#3296F5;
  }
  .my-tree li>span:hover{
      background:rgba(50,150,245,0.05);
  }
  .my-tree li>span>.icon1{
      width: 12px;
  }
  .my-tree li>span>.icon2{
      margin: 0 6px;
  }
</style>