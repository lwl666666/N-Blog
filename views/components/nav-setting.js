<div class="nav-setting">
  <div class="ui buttons">
    <div class="ui floating dropdown button">
      <i class="icon bars"></i>
      <div class="menu">
        <% if (user) { %>
          <a class="item" href="/posts?author=<%= user._id %>">个人主页</a>
          <div class="divider"></div>
          <a class="item" href="/posts/create">发表文章</a>
          <a class="item" href="/signout">登出</a>
        <% } else { %>
          <a class="item" href="/signin">登录</a>
          <a class="item" href="/signup">注册</a>
        <% } %>
      </div>
    </div>
  </div>
</div>
