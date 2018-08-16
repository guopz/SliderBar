let data = [
  {
    path: '/home',
    name: '浩克后台数据统计',
    icon: 'el-icon-menu',
  },
  {
    path: '/finance?name=1',
    name: '金融统计',
    icon: 'el-icon-location',
    children: [
      {
        path: '/department/1311',
        name: '第一营业部',
        children: [
          {
            path: '/region/1312',
            name: '一区一区一区一区',
          }
        ]
      },{
        path: '/department/1313',
        name: '第二营业部',
      }
    ]
  },
  {
    path: '/clue',
    name: '线索统计',
    icon: 'el-icon-menu',
    children: [
      {
        path: '/xs',
        name: '第一营业部',
      }
    ]
  },
  {
    path: '/car',
    name: '车辆统计',
    icon: 'el-icon-location',
    children: [
      {
        path: '/cl',
        name: '第一营业部',
      }
    ]
  }
]
export default data;

const myData = [
  {
    id: '1',
    menuName: '基础管理',
    menuCode: '10'
  },
  {
    id: '2',
    menuName: '商品管理',
    menuCode: ''
  },
  {
    id: '3',
    menuName: '订单管理',
    menuCode: '30',
    children: [
      {
        menuName: '订单列表',
        menuCode: '31'
      },
      {
        menuName: '退货列表',
        menuCode: '32',
        children: []
      }
    ]
  },
  {
    id: '4',
    menuName: '商家管理',
    menuCode: '',
    children: []
  }
];

const myData1 = [
  {
    parentId: '1',
    menuName: '基础管理',
    menuCode: '10'
  },
  {
    id: '2',
    menuName: '商品管理',
    menuCode: ''
  },
  {
    id: '3',
    menuName: '订单管理',
    menuCode: '30',
    children: [
      {
        menuName: '订单列表',
        menuCode: '31'
      },
      {
        menuName: '退货列表',
        menuCode: '32',
        children: []
      }
    ]
  },
  {
    id: '4',
    menuName: '商家管理',
    menuCode: '',
    children: []
  }
];

const subMenuData1 = {
  parentId: '4',
  children: [
    {
      menuName: '用户管理',
      menuCode: '11'
    },
    {
      id: '12',
      menuName: '角色管理',
      menuCode: '12',
      children: [
        {
          menuName: '管理员',
          menuCode: '121'
        },
        {
          menuName: 'CEO',
          menuCode: '122'
        },
        {
          menuName: 'CFO',
          menuCode: '123'
        },
        {
          menuName: 'COO',
          menuCode: '124'
        },
        {
          menuName: '普通人',
          menuCode: '124'
        }
      ]
    },
    {
      menuName: '权限管理',
      menuCode: '13'
    }
  ]
};

const subMenuData2 = {
  parentId: '2',
  children: [
    {
      menuName: '商品一',
      menuCode: '21'
    },
    {
      id: '22',
      menuName: '商品二',
      menuCode: '22',
      children: [
        {
          menuName: '子类商品1',
          menuCode: '221'
        },
        {
          menuName: '子类商品2',
          menuCode: '222'
        }
      ]
    }
  ]
};

export { myData, myData1, subMenuData1, subMenuData2 };
