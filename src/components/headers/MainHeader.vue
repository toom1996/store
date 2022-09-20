<template>
    <div class="header-main">
      <div class="top">
        <div class="float-left flex">
          <h1 class="float-left logo">LOGO</h1>
          <input type="text" placeholder="搜索.." />
        </div>
        <div class="float-right flex">
          <p class="m-0">SIGNUP</p>
          /
          <p class="m-0">SIGNIN</p>
        </div>
      </div>
      <div class="nav-middle">
        <div class="nav-list flex space-between">
          <!-- <div data-nav="home" v-for="(item, index) in header['top-nav']" :key="index"> -->
            <a href="javascript:void(0);">m<span></span></a>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  .header-main {
    overflow: hidden;
    background-color: gray;
  }
  .top {
    height: 60px;
    display: flex;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    margin: 0;
  }
  
  .nav-middle .nav-list {
    background-color: #fff;
    height: 60px;
    padding: 0 56px;
  }
  </style>