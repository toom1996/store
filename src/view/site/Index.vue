<template>
  <div>
    <div
      class="
        block
        px-md
        text-sm text-center text-white
        font-normal
        uppercase
        bg-black
        py-2.5
        px-2.5
      "
    >
      <div
        data-controller="promotion-bar"
        class="flex justify-center items-center w-full"
      >
        <div class="opacity-100 text-xs leading-none">
          TOP MESSAGE!。<a href="/cn/terms" class="underline pl-sm">详情见此</a>
        </div>
      </div>
    </div>
    <div class="nav sticky top-0 z-50 bg-white">
      <header class="float-header">
        <div class="container px-md md:px-xl">
          <div class="flex">
            <nav
              class="
                hidden
                md:flex
                w-2/5
                md:w-auto md:flex-grow-0
                items-center
                text-base
              "
            >
              <div
                id="hamburger-menu"
                class="cursor-pointer flex items-center w-lg h-lg"
                data-action="click->nav#toggleMenu"
              >
                123
              </div>
            </nav>
            <nav
              id="section-nav"
              class="
                hidden
                md:flex
                flex-grow flex-nowrap
                items-stretch
                text-base
              "
              itemtype="http://www.schema.org/SiteNavigationElement"
            >
              <a
                href="https://hbx.com/cn/men"
                id="nav-men"
                class="relative px-2.5 flex items-center"
                data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip"
                itemprop="url"
                data-nav-target="hooks links"
                data-dropdown="men"
                data-level1-value="men"
                ><span itemprop="name">男装</span></a
              ><a
                href="https://hbx.com/cn/women"
                id="nav-women"
                class="relative px-2.5 flex items-center"
                data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip"
                itemprop="url"
                data-nav-target="hooks links"
                data-dropdown="women"
                data-level1-value="women"
                ><span itemprop="name">女装</span></a
              ><a
                href="https://hbx.com/cn/life"
                id="nav-life"
                class="relative px-2.5 flex items-center"
                data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip"
                itemprop="url"
                data-nav-target="hooks links"
                data-dropdown="life"
                data-level1-value="life"
                ><span itemprop="name">生活</span></a
              ><a
                href="https://hbx.com/cn/archives"
                id="nav-archives"
                class="relative px-2.5 flex items-center"
                data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip"
                itemprop="url"
                data-nav-target="hooks links"
                data-dropdown="archives"
                data-level1-value="archives"
                ><span itemprop="name">中古逸品</span></a
              ><a
                href="https://hbx.com/cn/drops"
                id="nav-drops"
                data-nav-target="links"
                itemprop="url"
                class="relative px-2.5 flex items-center"
                ><span itemprop="name">特别发售</span></a
              ><a
                href="https://hbx.com/cn/sale"
                id="nav-sale"
                class="relative px-2.5 flex items-center"
                data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip"
                itemprop="url"
                data-nav-target="hooks links"
                data-dropdown="sale"
                data-level1-value="sale"
                ><span itemprop="name">折扣商品</span></a
              ><a
                href="#"
                class="relative px-2.5 flex items-center hidden"
                id="nav-more"
                data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip"
                data-nav-target="hooks links"
                data-dropdown="more"
                data-level1-value="more"
                ><span>更多</span></a
              >
            </nav>
            <nav
              id="section-user"
              class="
                w-2/5
                md:w-auto
                flex flex-grow-0 flex-nowrap
                justify-end
                items-center
              "
            >
              <div
                class="ml-md hidden md:flex items-center whitespace-nowrap"
                style="flex-grow: 4"
              >
                <div
                  class="
                    search-suggestion
                    leading-tight
                    text-xs
                    flex flex-col
                    w-full
                  "
                  data-v-4e908c8f=""
                >
                  <!-- Form -->
                  <form
                    id="form-search"
                    action="https://hbx.com/cn/men/search"
                    class="flex items-center border pr-xs h-full"
                    data-v-4e908c8f=""
                  >
                    <input
                      type="text"
                      name="q"
                      autocomplete="off"
                      placeholder="搜索"
                      class="border-0 h-full"
                      style="flex-grow: 1"
                    /><!--v-if-->icon
                  </form>
                </div>
              </div>
              <a
                href="https://hbx.com/cn/faq"
                class="ml-md hidden lg:flex items-center"
                data-nav-target="hooks"
                data-dropdown="help"
                ><QuestionMarkCircleIcon class="h-6 w-6" /></a
              ><a
                href="https://hbx.com/cn/cart"
                class="ml-md flex items-center whitespace-nowrap"
                data-nav-target="hooks"
                data-dropdown="cart"
                ><span id="nav-bag-text"
                  ><UserCircleIcon class="h-6 w-6" /></span></a
              ><a
                href="https://hbx.com/cn/settings"
                class="ml-md hidden md:flex items-center"
                ><img
                  src="https://hbx.com/build/shop/images/flags/cn.1b2b4e5f.jpg"
                  alt="CNY"
                  class="mr-xs border"
                  style="
                    width: 21px;
                    height: 12px;
                    margin-top: 25px;
                    margin-bottom: 24px;
                  "
                /><span>CNY</span></a
              >
              <div class="ml-md md:hidden flex items-center whitespace-nowrap">
                <div
                  id="hamburger-menu"
                  class="cursor-pointer flex items-center w-lg h-lg"
                  data-action="click->nav#toggleMenu"
                >
                  icon
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
    <div class="container swiper-container px-0 pt-7">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div>
            <img
              src="https://aliyun-img.hypebeast.cn/https%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fhbx%2F202209%2F1663923733_20_Off_Selected_Regular-Priced_Items_Sale_SC_Banner_1-1600X900.jpg?q=85"
              class="w-full"
              alt="闪电促销：低至8折"
              width="100"
              height="900"
            />
            safsdfsfsf
          </div> </swiper-slide
        ><swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide
        ><swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide
        ><swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide
        ><swiper-slide>Slide 8</swiper-slide
        ><swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
    <footer
      id="hbx-footer"
      class="uppercase py-7 text-xs border-t border-black"
      data-controller="footer"
      data-action="load@window->footer#loadComponents"
      data-v-app=""
    >
      <div class="container px-md md:px-xl">
        <div
          class="
            main-section
            grid grid-cols-1
            gap-0
            sm:gap-xl
            lg:gap-xl
            sm:grid-cols-2
            lg:grid-cols-4
            pt-xs
            sm:pt-0
          "
        ></div>
        <div class="flex justify-between flex-wrap sm:mt-lg leading-tight">
          <ul
            class="font-bold mb-md hidden md:flex flex-row space-x-lg"
            itemtype="http://schema.org/SiteNavigationElement"
          >
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
              <a itemprop="url" href="https://hbx.com/cn/referral"
                >客户推荐计划</a
              >
            </li>
            <li itemprop="name">
              <a itemprop="url" href="https://hbx.com/cn/affiliates"
                >联属营销计划</a
              >
            </li>
          </ul>
          <div class="copyright text-left lg:text-right">
            <div class="flex flex-row flex-wrap md:justify-end">
              <span class="pr-xs"
                >2022
                <a href="https://hypebeast.ltd/">Hypebeast Limited</a>
                版权所有</span
              ><a href="https://hbx.com/cn/terms" class="pr-xs">网站声明</a
              ><a href="https://hbx.com/cn/privacy" class="pr-xs">隐私政策</a
              ><a href="https://hbx.com/cn/gdpr">gdpr</a>
            </div>
            <span
              >HBX® is a registered trademark of Hypebeast Hong Kong Ltd.</span
            >
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
} from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

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