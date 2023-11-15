export default {
  // 轮播图
  getUsers: (config: any) => {
    return {
      data: [
        {
          name: "zs",
          age: "18",
        },
        {
          name: "ls",
          age: "19",
        },
        {
          name: "ww",
          age: "20",
        },
      ],
      status: 200,
      msg: "请求成功",
    };
  },
};
