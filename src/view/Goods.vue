<template>
    <div class="container">
      <section class="flex selection-container">
        <div style="width: 400px" class="filter-container">FILTER</div>
        <div class="goods-container">
          <div class="discription">
            <h2>Short Sleeve Baby One-Piece</h2>
            <h3>
              Being a hipster. Not just for people with beards and flannel shirts.
            </h3>
          </div>
          <div class="goods-result">
            <div class="result-description">
              Short Sleeve Baby One-Pieces37,603 Results
            </div>
            <div class="goods-body flex flex-wrap">
              <div
                class="item"
                v-for="(item, index) in container['goods']"
                :key="index"
              >
                <div class="item-img">
                  <img
                    class="img-1"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fe8%2F34%2F02%2Fe834028fa4b313a1607872736437ef2d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665584025&t=70559e1f70e5e6b78a0af3da44daafbd"
                  />
                </div>
                <div class="item-name">
                  {{ item.name }}
                </div>
                <div class="item-price">From $23.23</div>
                <ul>
                  <li>
                    <a
                      href="#0"
                      class="tooltip-1"
                      data-toggle="tooltip"
                      data-placement="left"
                      title=""
                      data-original-title="Add to favorites"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      class="tooltip-1"
                      data-toggle="tooltip"
                      data-placement="left"
                      title=""
                      data-original-title="Add to compare"
                      ><i class="ti-control-shuffle"></i
                      ><span>Add to compare</span></a
                    >
                  </li>
                  <li>
                    <a
                      href="#0"
                      class="tooltip-1"
                      data-toggle="tooltip"
                      data-placement="left"
                      title=""
                      data-original-title="Add to cart"
                      ><i class="ti-shopping-cart"></i><span>Add to cart</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  <script>
  import { v1StoreGoodsIndex } from "@/api/mock/v1/store/goods/index";
  import { reactive } from "@vue/reactivity";
  export default {
    name: "Goods",
    components: {
    },
    setup() {
      console.log('3333333')
      const container = reactive({
        goods: [],
      });
  
      return {
        container,
      };
    },
    created() {
      console.log(123213123131232)
      v1StoreGoodsIndex().then((e) => {
        this.container.goods = e.data.goods;
      });
    },
  };
  </script>
  <style scoped>
  .img-1 {
    width: 100%;
    transition: transform 0.25s ease-in-out;
    display: block;
  }
  
  .img-1:hover {
    transform: scale(1.2);
  }
  .item {
    box-sizing: border-box;
    flex: 0 0 25%;
    max-width: 25%;
    padding-right: 5px !important;
    padding-left: 5px !important;
    margin-bottom: 25px;
    position: relative;
  }
  .item-img {
    overflow: hidden;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  .item-name {
    text-overflow: ellipsis;
  
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  
    display: -moz-box;
    -moz-line-clamp: 2;
    -moz-box-orient: vertical;
  
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
  .item-price {
    color: #004dda;
    font-weight: 500;
    font-size: 16px;
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  .selection-container {
    display: flex;
    flex-wrap: wrap;
  }
  .filter-container {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .goods-container {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .goods-body {
    min-width: 960px;
  }
  .item ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 18px;
    font-size: 1.125rem;
    line-height: 1;
    z-index: 2;
  }
  </style>