const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// 选择网页中所有的collapsible类(现在就一个), 如果他们被点击了(一个div被点击),
// 就会切换状态--如果没有c--e就加上, 如果有就舍去
