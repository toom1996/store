import Mock from 'mockjs'

export const v1StoreGoodsIndex = function () {
    const data = Mock.mock({
        'goods|10-50':[{
            id:'@integer(1, 100)',
            name:'@title(10,30)',
            address:"@image('25,25','#fff','#e35ef1','png','TEST')"
        }]
    })
    return {
        data: data
    }
}