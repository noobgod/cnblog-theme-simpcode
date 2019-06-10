# cnblog-theme-simpcode

一款简单干净的博客园主题，示例博客：https://www.cnblogs.com/noobgod/。

# 一、准备

在开始之前，必须要确保你已经申请了博客园 JS 权限，具体申请过程就不详细介绍了，读者自行网上搜索，很简单的。

本皮肤如果经常逛博客的读者应该很熟悉，很多博主都在使用。最原始的皮肤主人也无从考证了。这个皮肤是博主自己整理调整出来的，并添加了一些易用的功能例如目录，代码高亮等。

# 二、开始

博客皮肤默认选择`SimpleMermory`



# 三、页面定制CSS代码

`page.css`，将里面的内容 Copy 到 `页面定制css代码` 框中，同时将选项`禁用模板默认CSS`勾上。

![Alt text](./1560177336698.png)

如果需要修改博客上面的那个头像，可定位到如下css 代码进行修改：

```css
#header::before {
    background-image: url(//images.cnblogs.com/cnblogs_com/noobgod/1307057/o_20190602-13474.jpg);
    background-size: contain;
    border: 0 solid #fff;
    border-radius: 150px;
    box-shadow: 0 -1px 12px -4px #000;
    content: " ";
    display: block;
    height: 150px;
    margin-bottom: 20px;
    margin-left: 50%;
    position: relative;
    transform: translate3d(-50%, 50%, 0px);
    width: 150px;
}
```

将代码中 `background-image` 的 url 图片路径修改为读者自己的就可以了。

# 四、博客侧边栏公告

侧边栏公告是针对侧边的公告栏进行个性化定制的，在这里可以将自己的微信公众号、个人博客、浏览量等相关信息发布在上面。

![Alt text](./1560177395730.png)

具体的css 代码是 `sideBar.html`，将里面的内容 Copy 进代码框中即可。当然代码中的信息是博主我的，所以需要你们自行替换下。

# 五、页首Html代码

页首代码我这里没有添加很多额外的功能，只添加了一个 Github的丝带链接，就是右上角的Github图片，点击之后跳转博主的Github。

![Alt text](./1560177887296.png)

对应的代码是 `pageHeading.html`，同样读者需要执行替换成自己的Github 链接。

# 六、页脚Html代码

页脚的内容主要涉及到两个，一个是博文中图片的点击放大效果，一个是博文的目录效果。对应的代码是`pageFoot.html`.

![Alt text](./1560178118941.png)

读者可以直接将代码复制过去使用，也可以将其中涉及到的两个 js 文件上传到自己的博客文件中，然后替换成自己的。

其中：`jajian.catalog.js` 和  `jajian.catalog.css` 是文章目录的 js 文件和 css 文件。
`img.enlarge.js`是博文图片点击放大的 js 文件。

喜欢的读者不妨点解个 `star`和收藏，后面会不定期更新。



