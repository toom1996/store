<template>
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
</template>
