import Mock from 'mockjs';
import { mockFetch } from 'mockjs-fetch';

const provinceCityData = {
  北京: ['北京市'],
  上海: ['上海市'],
  广东: ['广州市', '深圳市', '佛山市', '佛门市'], // 开个玩笑，广东其实没有佛门和佛山
  河北: ['石家庄市', '邯郸市', '保定市'],
  浙江: ['宁波', '杭州', '台州', '温州', '绍兴', '湖州'],
  // ... 其他省市数据
};
const useType = {
  家具: ['桌子', '沙发', '椅子', '床'],
  办公用品: ['笔', '纸张', '橡皮'],
};
export const userData = Mock.mock('/data/list', 'post', {
  describe: '标准交叉表数据。',
  fields: {
    rows: ['province', 'city'],
    // rows: ['province', 'city', 'type', 'sub_type'],
    columns: ['type', 'sub_type'],
    values: ['number'],
    // valueInCols: true,
  },
  'data|1000': [
    {
      number: '@integer(200,3000)',
      'province|1': Object.keys(provinceCityData),
      img: '@image()',
      'city|1': function () {
        const n = Math.floor(
          provinceCityData[this.province].length * Math.random(),
        );
        return provinceCityData[this.province][n];
      },
      'type|1': Object.keys(useType),
      sub_type: function () {
        const n = Math.floor(useType[this.type].length * Math.random());
        return useType[this.type][n];
      },
    },
  ],
});

export const userData1 = Mock.mock('/data/get', {
  name: 123,
});
mockFetch(Mock);
