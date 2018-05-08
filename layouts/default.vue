<style lang="less">
    body,html{
      height: 100%;
      overflow: auto;
    }
    .layout{
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-breadcrumb{
        padding: 10px 15px 0;
    }

    .layout-content{
        overflow: auto;
        background: #fff;
        border-radius: 4px;
        position: absolute;
        bottom: 50px;
        /* width: 100%; */
        top: 85px;
        left: 15px;
        right: 15px;
    }
    .layout-content-main{
        // padding: 10px;
        height: 100%;
       
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
        height: 100vh;
        overflow: auto;
		// position: fixed;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
		// position: fixed;
        .open-sidebar{
            float:left;
        }
        .user {
            float:right;
        }
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .layout-text{
      display: inline-block;
      margin-left: 10px;
    }

    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
          <Col :span="spanLeft" class="layout-menu-left">
            <Menu :active-name="getActiveName()" theme="dark" width="auto">
              <div class="layout-logo-left"></div>
              <MenuItem 
                :name="item.toPath" 
                v-for="item in navs({iconSize:iconSize})"
                :key="item.id"
              >
                <nuxt-link :to="item.toPath">
                  <Icon :type="item.iconType" :size="item.iconSize"></Icon>
                  <span  class="layout-text">{{item.label}}</span>
                </nuxt-link> 
              </MenuItem>
            </Menu>
          </Col>
          <Col :span="spanRight">
            <div class="layout-header">
              <Menu mode="horizontal"  active-name="1" class="nav">
                <MenuItem name="0">
                  <Button type="text" @click="toggleClick" >
                    <Icon type="navicon" size="32"></Icon>
                  </Button>
                </MenuItem>
                <MenuItem name="1">
                    首页
                </MenuItem>
                <Submenu name="3" class="user">
                    <template slot="title">
                      <!-- <Avatar icon="person" size="large" /> -->
                      阿豪
                    </template>
                    <MenuGroup title="基本信息">
                        <MenuItem name="3-4">个人中心</MenuItem>
                        <MenuItem name="3-5">退出</MenuItem>
                    </MenuGroup>
                </Submenu>
                
              </Menu>
            </div>
            <div class="layout-content">
              <div class="layout-content-main">
                <nuxt/>
              </div>
            </div>
              <div class="layout-copy">
                <!-- &copy;  2011~2016 36氪 | 京ICP备12031756号 | 京公网安备11010802012285号 -->
              </div>
          </Col>
        </Row>
    </div>
</template>
<script>
import navData from '../config/nav'
  export default {
     transition: 'bounce',
    data () {
      return {
        spanLeft: 5,
        spanRight: 19,
        navs:navData,
        activePath:'false',
      }
    },
    computed: {
      iconSize () {
       
        return this.spanLeft === 5 ? 14 : 24
      }
    },
    methods: {
		toggleClick () {
			if (this.spanLeft === 5) {
			this.spanLeft = 2
			this.spanRight = 22
			} else {
			this.spanLeft = 5
			this.spanRight = 19
			}
		},
		getActiveName(){
		
			if(typeof window === "undefined" ){
				return ;
			}
			let allName = this.navs({iconSize:this.iconSize});
    		 	let activePath = window.location.pathname;
      
			for (var i = 0; i < allName.length; i++) {
				if(allName[i].toPath === activePath){
					return allName[i].toPath;
				}
      }
      return '/demo/vuePdf'
		}
    }
  }
</script>
