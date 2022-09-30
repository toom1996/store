<template>
  <div>
    <div class="
        block
        px-md
        text-sm text-center text-white
        font-normal
        uppercase
        bg-black
        py-2.5
        px-2.5
      ">
      <div data-controller="promotion-bar" class="flex justify-center items-center w-full">
        <div class="opacity-100 text-xs leading-none">
          TOP MESSAGE!。<a href="/cn/terms" class="underline pl-sm">详情见此</a>
        </div>
      </div>
    </div>
    <MainHeader/>
    <div class="container">
      body
    </div>
    <footer id="hbx-footer" class="uppercase py-7 text-xs border-t border-black" data-controller="footer"
      data-action="load@window->footer#loadComponents" data-v-app="">
      <div class="container px-md md:px-xl">
        <div class="
            main-section
            grid grid-cols-1
            gap-0
            sm:gap-xl
            lg:gap-xl
            sm:grid-cols-2
            lg:grid-cols-4
            pt-xs
            sm:pt-0
          "></div>
        <div class="flex justify-between flex-wrap sm:mt-lg leading-tight">
          <ul class="font-bold mb-md hidden md:flex flex-row space-x-lg"
            itemtype="http://schema.org/SiteNavigationElement">
            <li itemprop="name">
              <a itemprop="url" href="https://hbx.com/cn/about">关于</a>
            </li>
            <li itemprop="name">
              <a itemprop="url" href="https://hbx.com/cn/stores">零售店</a>
            </li>
            <li itemprop="name">
              <a itemprop="url" href="https://hbx.com/cn/faq">帮助</a>
            </li>
            <li itemprop="name">
              <a itemprop="url" href="https://hbx.com/cn/pro">HBX Pro</a>
            </li>
            <li itemprop="name">
              <a itemprop="url" href="https://hbx.com/cn/referral">客户推荐计划</a>
            </li>
            <li itemprop="name">
              <a itemprop="url" href="https://hbx.com/cn/affiliates">联属营销计划</a>
            </li>
          </ul>
          <div class="copyright text-left lg:text-right">
            <div class="flex flex-row flex-wrap md:justify-end">
              <span class="pr-xs">2022
                <a href="https://hypebeast.ltd/">Hypebeast Limited</a>
                版权所有</span><a href="https://hbx.com/cn/terms" class="pr-xs">网站声明</a><a href="https://hbx.com/cn/privacy"
                class="pr-xs">隐私政策</a><a href="https://hbx.com/cn/gdpr">gdpr</a>
            </div>
            <span>HBX® is a registered trademark of Hypebeast Hong Kong Ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import {
  UserCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/outline";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import MainHeader from "@/components/headers/MainHeader.vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
export default {
  components: {
    UserCircleIcon,
    QuestionMarkCircleIcon,
    Swiper,
    SwiperSlide,
    MainHeader
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.float-header {
  border-bottom-width: 1px;
  height: 60px;
  text-transform: uppercase;
  z-index: 20;
  border-color: #000;
}

.container {
  margin-left: auto;
  margin-right: auto;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
</style>