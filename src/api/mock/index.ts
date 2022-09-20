import Mock from 'mockjs';

import { v1StoreGoodsIndex } from './v1/store/goods/index'

Mock.mock('/v1/store/goods/index', 'get', v1StoreGoodsIndex)