// 热门推荐
$.ajax({
    type: 'get',
    url: '/posts/recommend',
    success: function(res) {
        // console.log(res);  
        var tmp = `
        {{each data}}
        <li>
            <a href="detail.html?id={{$value._id}}">
            <img src="{{$value.thumbnail}}" alt="">
            <span>{{$value.title}}</span>
            </a>
        </li>
        {{/each}}
        `;
        var str = template.render(tmp, { data: res });
        $('#recommend').html(str);
        // console.log(str);
    }
})

$.ajax({
    type: 'get',
    url: '/posts/random',
    success: function(response) {
        var randomTpl = `
			{{each data}}
			<li>
			  <a href="detail.html?id={{$value._id}}">
			    <p class="title">{{$value.title}}</p>
			    <p class="reading">阅读({{$value.meta.views}})</p>
			    <div class="pic">
			      <img src="{{$value.thumbnail}}" alt="">
			    </div>
			  </a>
			</li>
			{{/each}}
		`;
        var html = template.render(randomTpl, { data: response });
        $('#randomBox').html(html)
    }
})


$.ajax({
    type: 'get',
    url: '/categories',
    success: function(response) {
        var navTpl = `
			{{each data}}
			<li>
				<a href="list.html?categoryId={{$value._id}}">
					<i class="fa {{$value.className}}"></i>{{$value.title}}
				</a>
			</li>
			{{/each}}
		`;
        var html = template.render(navTpl, { data: response });
        // $('#navBox').html(html)
        // $('#topNavBox').html(html)
        $('.nav_item').html(html)
    }
})