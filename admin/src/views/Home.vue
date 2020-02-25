<template>
  <el-container  style="height: 100vh;">
    <el-aside width="200px"  style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>内容
          </template>
          <el-menu-item-group>
            <template slot="title">幻灯片</template>
            <el-menu-item index="/slide/list">幻灯片列表</el-menu-item>
            <el-menu-item index="/slide/edit">新建幻灯片</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">商品</template>
            <el-menu-item index="/item/list">商品列表</el-menu-item>
            <el-menu-item index="/item/edit">新建商品</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">账户</template>
            <el-menu-item index="/account/list">账号列表</el-menu-item>
            <el-menu-item index="/account/edit">新建账号</el-menu-item>
          </el-menu-item-group>
        </el-submenu>       
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-main>
        <router-view :key='$route.path'></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {}
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
