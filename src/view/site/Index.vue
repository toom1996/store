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
    <div class="nav">
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
                class="ml-md flex md:hidden items-center whitespace-nowrap"
                data-nav-target="hooks"
                data-dropdown="search"
                >icon</a
              ><a
                href="https://hbx.com/cn/login"
                class="ml-md hidden md:flex items-center"
                ><span id="nav-login-text">icon</span></a
              ><a
                href="https://hbx.com/cn/faq"
                class="ml-md hidden lg:flex items-center"
                data-nav-target="hooks"
                data-dropdown="help"
                ><span id="nav-help-text">icon</span></a
              ><a
                href="https://hbx.com/cn/cart"
                class="ml-md flex items-center whitespace-nowrap"
                data-nav-target="hooks"
                data-dropdown="cart"
                ><span id="nav-bag-text">icosafsfsfsafsdfffffffffffffffffffffffffffffffffffffffffffn</span
                ><!----></a
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
  </div>
</template>
<style scoped>
.float-header {
  border-bottom-width: 1px;
  height: 60px;
  text-transform: uppercase;
  z-index: 20;
}
</style>