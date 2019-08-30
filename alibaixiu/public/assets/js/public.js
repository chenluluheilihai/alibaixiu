  // 获取到搜索表单 并为其添加表单提交事件
  $('.search form').on('submit', function() {
      var keys = $(this).find('.keys').val();
      location.href = "/search.html?key=" + keys;
      return false;
  });