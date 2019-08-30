// // 退出
$('#loginout').on('click', function() {
    var isConfirm = confirm('你真的要退出吗？');
    if (isConfirm) {
        $.ajax({
            type: 'post',
            url: '/login',
            success: function(res) {
                location.href = "login.html";
            },
            error: function() {
                alert('退出失败');
            }
        })
    }
});

// //展示用户相关信息
$.ajax({
    type: 'get',
    url: '/users/' + userId,
    success: function(res) {
        $('.avatar').attr('src', res.avatar)
        $('.profile .name').html(res.nickName)
    }
});