<template>
	<div>	
	  <div class="app-head">
	  	<div class="app-head-inner">
	  		<img class="head-logo" src="../assets/logo.png" alt="">
	  		<div class="head-nav">
	  			<ul class="nav-list">
	  				<li>登录</li>
	  				<li class="nav-pile">|</li>
	  				<li>注册</li>
	  				<li class="nav-pile">|</li>
	  				<li>关于</li>
	  			</ul>
	  		</div>
	  	</div>
	  </div>
	  <div class="app-content">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	  </div>
	  <div class="app-foot">
		<p>2017年田野的练习demo</p>
	  </div>
	</div>
</template>
 
<script>
export default {
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: [],
    }
  }
}
</script>
  
<style lang="scss" type="text/css">
/* 有需求加scoped */
	body, dl, dd, h1, h2, h3, h4, h5, h6, p, form,ul,li{margin:0;}
	ul,input { padding:0;}
	ol,li{margin:0; padding:0;}
	table { border-collapse: collapse; border-spacing: 0 }
	fieldset, img { border: 0 }
	address, caption, cite, code, dfn, em, strong, th, var { font-style: normal; font-weight: normal }
	ol, ul { list-style: none }
	del, ins { text-decoration: none }
	caption, th { text-align: left }
	h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
	input, button, textarea, select { font-size: 100% }
	q:before, q:after { content: '' }
	addr, acronym { border: 0; font-variant: normal }
	sub, sup { font-size: 75%; line-height: 0; position: relative; }
	sub { top: -0.5em; }
	sup { bottom: -0.25em; }
	/*CLEARFIX
	-------------------------------------------------------------- */
	.clearfix:after { content: ""; display: block; height: 0; clear: both; visibility: hidden; }
	.clearfix { display: inline-block; }
	* html .clearfix { height: 1%; }
	.clearfix { display: block;}
	/*FONT
	-------------------------------------------------------------- */
	body { font:12px/1.5 "Arial","\5FAE\8F6F\96C5\9ED1","\5b8b\4f53", sans-serif; color: #000; background:#fff; }
	a{color:#333; text-decoration: none;}
	//a:hover{color: #e91c35;}
	//a:active{color: #e91c35;}
	.fb { font-weight: 700 }
	.fn { font-weight: 400 }
	.unl { text-decoration: underline }
	.no_unl { text-decoration: none }
	/*POSITION
	-------------------------------------------------------------- */
	.tl { text-align: left }
	.tc { text-align: center }
	.tr { text-align: right }
	.bc { margin-left: auto; margin-right: auto }
	.fl { float: left; display: inline }
	.fr { float: right; display: inline }
	.vm { vertical-align: middle; }
	.vt { vertical-align: top }
	.pr { position: relative }
	.pa { position: absolute }
	.abs-right { position: absolute; right: 0 }
	.abs-left { position: absolute; left: 0 }
	.hidden { visibility: hidden }
	.none { display: none !important;}
	
	/* 主体样式i */
	body{ font-size: 14px; }
	.app-head{ background: #363636; color: #b2b2b2; height: 90px; line-height: 90px; width: 1200px; margin:0 auto; }
	.app-head-inner{ width: 1200px; margin: 0 auto; 
		img{ width: 50px; margin-top: 20px; }
	}
	.head-logo{ float: left; padding-left: 20px; }
	.head-nav{ float: right; 
		ul{ overflow: hidden; padding-right:20px; }
		li{ cursor: pointer; float: left; }
	}
	.nav-pile{ padding: 0 10px; }
	.app-foot{ text-align: center; height: 80px; width: 1200px; margin: 0 auto; line-height: 80px; background-color: #e3e4e8; clear: both; margin-top: 30px; }
	.container{ width: 1200px; margin: 0 auto; text-align: center; }
</style>