<template>
    <div class="my-table">
        <div class="table-toolbar">
            <nav class="nav">
              <a class="nav-link disabled" href="#"><i class="my-icon fa fa-file-text-o" ></i>新建仪表板</a>
              <a class="nav-link disabled" href="#"><i class="my-icon fa fa-folder-open-o" ></i>新建文件夹</a>
              <a class="nav-link disabled" href="#"><i class="my-icon fa fa-send-o" ></i>移动到</a>
            </nav>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th class="checkbox-col">
                <input type="checkbox"/>
              </th>
              <th>仪表盘</th>
              <th style="text-align:right;color:#3d4d66;">
                <i class="my-icon fa fa-list"></i>
                <i class="my-icon fa fa-th-large"></i>
                <i class="my-icon fa fa-sort-amount-desc"></i>
              </th>
            </tr>
          </thead>
          <tbody>

            <!-- 此处循环生成 -->
            <tr v-for="(item,index) in currentPageData" :key="index">
              <td class="checkbox-col"><input type="checkbox" v-model="item.isSelect"/></td>
              <td><i class="my-icon fa" :class="{'fa-file-text-o':!item.folder,'fa-folder-open-o':item.folder}"></i>{{item.name}}</td>
              <td align="right">{{item.lastUpdateTime|dateFormat}}</td>
            </tr>

          </tbody>
        </table>
        <div class="table-pagination">
            <nav class="pull-right" aria-label="">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>

                <!-- 此处循环生成 -->
                <li v-for="(item,index) in pageIndexList" :key="index" @click="pageIndex=index" class="page-item"><a class="page-link" href="#">{{index+1}}</a></li>


                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
        </div>
    </div>
</template>

<script>

    export default{
        name:'dashboard',
        data:function(){
            this.$http.get('/data/dashboard.json').then((res)=>{
                this.list=res.data.data;
            })
            return {
                list:[],
                pageIndex:0,
                pageSize:10
            }
        },
        computed:{
            allData(){
                return this.list
            },
            currentPageData(){
                return this.list.slice(this.pageIndex*this.pageSize,this.pageIndex*this.pageSize+this.pageSize)
            },
            pageIndexList(){
                let pageNum= Math.ceil(this.list.length/this.pageSize)
                let res=[]
                while(pageNum-->0){
                    res.unshift(pageNum)
                }
                return res
            }
        },
        filters:{
            dateFormat(val){
                let res='';
                switch(typeof val){
                    case 'number' : res =  new Date(val).Format('yyyy-MM-dd hh:mm:ss'); break;
                    default: res =  val.Format('yyyy-MM-dd hh:mm:ss')
                }
                return res;
            }
        }

    }

</script>

<style scoped>
.my-table{
    overflow: auto;
    height: 100%;
}
.checkbox-col{
    width:20px;
}
.my-icon {
    font-size:14px;
    margin:0 4px;
}
.fa-file-text-o{
    color:#13cd66;
}
.fa-folder-open-o{
    color:#faaa39;
}
.fa-send-o{
    color:#3685f2;
}
table-toolbar{
    line-height:40px;
}
</style>