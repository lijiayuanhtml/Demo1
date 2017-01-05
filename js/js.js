window.onload = function(){
	//一开始加载的图片数据
	var initdata = {'data':[
							{minisrc : 'img/1.jpg',largesrc : 'img/1.large.jpg'},
							{minisrc : 'img/2.jpg',largesrc : 'img/2.large.jpg'},
							{minisrc : 'img/3.jpg',largesrc : 'img/3.large.jpg'},
							{minisrc : 'img/4.jpg',largesrc : 'img/4.large.jpg'},
							{minisrc : 'img/5.jpg',largesrc : 'img/5.large.jpg'},
							{minisrc : 'img/6.jpg',largesrc : 'img/6.large.jpg'},
							{minisrc : 'img/7.jpg',largesrc : 'img/7.large.jpg'},
							{minisrc : 'img/8.jpg',largesrc : 'img/8.large.jpg'},
							{minisrc : 'img/9.jpg',largesrc : 'img/9.large.jpg'},
							{minisrc : 'img/10.jpg',largesrc : 'img/10.large.jpg'},
							{minisrc : 'img/11.jpg',largesrc : 'img/11.large.jpg'},
							{minisrc : 'img/12.jpg',largesrc : 'img/12.large.jpg'},
							{minisrc : 'img/13.jpg',largesrc : 'img/13.large.jpg'},
							{minisrc : 'img/14.jpg',largesrc : 'img/14.large.jpg'},
							{minisrc : 'img/15.jpg',largesrc : 'img/15.large.jpg'},
							{minisrc : 'img/16.jpg',largesrc : 'img/16.large.jpg'},
							{minisrc : 'img/17.jpg',largesrc : 'img/17.large.jpg'},
							{minisrc : 'img/1.jpg',largesrc : 'img/1.large.jpg'},
							{minisrc : 'img/2.jpg',largesrc : 'img/2.large.jpg'},
							{minisrc : 'img/3.jpg',largesrc : 'img/3.large.jpg'},
							{minisrc : 'img/4.jpg',largesrc : 'img/4.large.jpg'},
							{minisrc : 'img/5.jpg',largesrc : 'img/5.large.jpg'},
							{minisrc : 'img/6.jpg',largesrc : 'img/6.large.jpg'},
							{minisrc : 'img/7.jpg',largesrc : 'img/7.large.jpg'},
							{minisrc : 'img/8.jpg',largesrc : 'img/8.large.jpg'},
							{minisrc : 'img/9.jpg',largesrc : 'img/9.large.jpg'},
							{minisrc : 'img/10.jpg',largesrc : 'img/10.large.jpg'},
							{minisrc : 'img/11.jpg',largesrc : 'img/11.large.jpg'},
							{minisrc : 'img/12.jpg',largesrc : 'img/12.large.jpg'},
							{minisrc : 'img/13.jpg',largesrc : 'img/13.large.jpg'},
							{minisrc : 'img/14.jpg',largesrc : 'img/14.large.jpg'},
							{minisrc : 'img/15.jpg',largesrc : 'img/15.large.jpg'},
							{minisrc : 'img/16.jpg',largesrc : 'img/16.large.jpg'},
							{minisrc : 'img/17.jpg',largesrc : 'img/17.large.jpg'},
							{minisrc : 'img/1.jpg',largesrc : 'img/1.large.jpg'},
							{minisrc : 'img/2.jpg',largesrc : 'img/2.large.jpg'},
							{minisrc : 'img/3.jpg',largesrc : 'img/3.large.jpg'},
							{minisrc : 'img/4.jpg',largesrc : 'img/4.large.jpg'},
							{minisrc : 'img/5.jpg',largesrc : 'img/5.large.jpg'},
							{minisrc : 'img/6.jpg',largesrc : 'img/6.large.jpg'},
							{minisrc : 'img/7.jpg',largesrc : 'img/7.large.jpg'},
							{minisrc : 'img/8.jpg',largesrc : 'img/8.large.jpg'},
							{minisrc : 'img/9.jpg',largesrc : 'img/9.large.jpg'},
							{minisrc : 'img/10.jpg',largesrc : 'img/10.large.jpg'},
							{minisrc : 'img/11.jpg',largesrc : 'img/11.large.jpg'},
							{minisrc : 'img/12.jpg',largesrc : 'img/12.large.jpg'},
							{minisrc : 'img/13.jpg',largesrc : 'img/13.large.jpg'},
							{minisrc : 'img/14.jpg',largesrc : 'img/14.large.jpg'},
							{minisrc : 'img/15.jpg',largesrc : 'img/15.large.jpg'},
							{minisrc : 'img/16.jpg',largesrc : 'img/16.large.jpg'},
							{minisrc : 'img/17.jpg',largesrc : 'img/17.large.jpg'}
						]};
	//下拉加载的图片数据
	var loadingdata = {'data':[
							{minisrc : 'img/1.jpg',largesrc : 'img/1.large.jpg'},
							{minisrc : 'img/2.jpg',largesrc : 'img/2.large.jpg'},
							{minisrc : 'img/3.jpg',largesrc : 'img/3.large.jpg'},
							{minisrc : 'img/4.jpg',largesrc : 'img/4.large.jpg'},
							{minisrc : 'img/5.jpg',largesrc : 'img/5.large.jpg'},
							{minisrc : 'img/6.jpg',largesrc : 'img/6.large.jpg'},
							{minisrc : 'img/7.jpg',largesrc : 'img/7.large.jpg'},
							{minisrc : 'img/8.jpg',largesrc : 'img/8.large.jpg'},
							{minisrc : 'img/9.jpg',largesrc : 'img/9.large.jpg'}
						]};
	//瀑布流布局

	function waterfall(opt){
		this.wrap = opt.dom;
		this.initdata = opt.initdata;		//初始图片列表
		this.loadingdata = opt.loadingdata;	//
		this.latestdata = opt.initdata;
		this.init();
		this.renderDOM(this.initdata);
		this.bindDOM(this.loadingdata);
	}
	waterfall.prototype.init = function(){
		this.screenW = document.documentElement.clientWidth;   //一屏宽度
		this.num = 4;		//一行图片数
	}
	waterfall.prototype.renderDOM = function(data){
		var padding = 2,	//间距
			picW = Math.floor((this.screenW - padding*3)/this.num),   //一张图片的宽度
			wrap = this.wrap,
			loaded = 0;
			//console.log(this.screenW)
		for(var i = 0; i < data.length; i++){
			(function(i){
				var li = document.createElement('li');
				li.style.width = picW + 'px';
				li.style.paddingBottom = 2 +'px';
				li.style.paddingRight = 2 +'px';
				if ( i >0 && i % 3 == 0) {
					li.style.paddingRight = 0 + 'px';   //最右边不要paddding
				}
				wrap.appendChild(li);			//添加li元素到ul
				var imgobj = new Image();
				imgobj.onload = function(){
					var cvs = document.createElement('canvas');
					var picH = this.height*picW/this.width;
					li.style.height = picH + 'px';
					cvs.width = picW;				//设置canvas的宽
					cvs.height = picH;				//设置canvas的高
					var ctx = cvs.getContext('2d');
					ctx.drawImage(imgobj,0,0,picW,picH);
					li.appendChild(cvs);			//添加canvas元素到li
					loaded++;
				}
				imgobj.onerror = function(){
					this.src = 'img/17.jpg';		//如果请求图片错误，使用默认图片
				}
				imgobj.src = data[i].minisrc;  //请求图片地址
				li.setAttribute('data',data[i].largesrc);
			})(i);
		}

		var timer = setInterval(function(){
			if (loaded == data.length) {		//判断图片是否都加载完了
				window.clearInterval(timer);	//加载完就释放计时器
				var lis = wrap.getElementsByTagName('li'),
					col = 4,		//列数
					colH = [];		//记录高度
				for(var j = 0; j < lis.length; j++){
					if (j < col) {
						colH.push(lis[j].offsetHeight);
					}else{
						var minH = Math.min.apply(null,colH),  //求得最小高度
							minIndex = null;
						for(var n in colH){
							if (colH[n] == minH ) {
								minIndex = n;		//求得最小高度的index
							}
						}
						lis[j].style.position = 'absolute';
						lis[j].style.left = lis[minIndex].offsetLeft + 'px';
						lis[j].style.top = minH + 'px';
						colH[minIndex] += lis[j].offsetHeight;		//把新添加的元素的高度加进去
					}
					
				}
			}
		},20);
	}
	waterfall.prototype.bindDOM = function(data){
		var self = this;
		window.onscroll = function(){
			if (checkscroll()) {
				waterfall.prototype.renderDOM.call(self,data);
			}
		}
		function checkscroll(){
			var lis = document.getElementById('imglist').getElementsByTagName('li'),
				scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
				winH = window.innerHeight;
			if(winH + scrollTop > lis[lis.length-1].offsetTop+lis[lis.length-1].offsetHeight/2){
				return true;
			}else{
				return false;
			}
		}
	}


	//初始化瀑布流
	new waterfall({dom : document.getElementById('imglist'),
					initdata : initdata.data,
					loadingdata : loadingdata.data});

	// var imgArr = wtf.latestdata;	//不断更新的图片列表数组



	//查看大图
	function Slider(opt){
		this.listwrap = opt.imglist; //小图容器
		this.bigwrap = opt.bigwrap;  //大图容器
		this.init();
		this.renderDOM();
		this.bindDOM();
	}
	Slider.prototype.init = function (argument) {
		this.screenW = $(window).width();
	}
	Slider.prototype.renderDOM = function (argument) {
		// body...
	}
	Slider.prototype.bindDOM = function () {
		var wrap = this.bigwrap,
			ul = $('#album'),
			index = 0,
			self = this;
			var initialScale = 1;
	 var currentScale= 1;
	 var dx,dy,offx = 0; offy = 0;

		ul.on('tap','li',function(e){
			e.stopPropagation();
			wrap.fadeIn();
			index = $(this).index();
			self.goIndex(index);
			
		});
		
		wrap.find('ul').on('tap',function () {
			wrap.fadeOut();
			$(this).empty();
		});
		wrap.on('touchstart',function(e){
			e.preventDefault();
		});
		touch.on(wrap,'dragstart', function(e){
			e.preventDefault();
			self.startTime = new Date()*1;
		});
		touch.on(wrap,'drag',function(e){
			self.offsetX = e.x;
			for(var i = 0; i < wrap.find('li').length; i++){
				wrap.find('li').css({'webkitTransition':'-webkit-transform 0s ease-out'});
				wrap.find('li').eq(i).css({'webkitTransform':'translate3d('+((i-self.n)*self.screenW+self.offsetX)+'px, 0, 0)'});
			}
		});
		touch.on(wrap,'dragend',function(e){
			self.endTime = new Date()*1;
			if(self.endTime - self.startTime > 300){

				if(self.offsetX >= self.screenW/6){
					self.goIndex('-1');
					//console.log('-1')
				}else if(self.offsetX < 0 && self.offsetX < - self.screenW/6){
					self.goIndex('+1');
					//console.log('+1')
				}else{
					self.goIndex('0');
					//console.log('0')
				}
				//console.log('slow')
			}else{
				//优化
				//快速移动也能使得翻页
				if(self.offsetX > 50){
					self.goIndex('-1');
					//console.log('-1')
				}else if(self.offsetX < -50){
					self.goIndex('+1');
					//console.log('+1')
				}else{
					self.goIndex('0');
					//console.log('0')
				}
				//console.log('fast')
			}
		});
		// touch.on(wrap, 'pinchstart', function(ev) {
		//      ev.preventDefault();
		//  });
		 
		//  touch.on(wrap, 'pinch', function(ev) {
		//      currentScale = ev.scale - 1;
		//      currentScale = initialScale + currentScale;
		//      currentScale = currentScale > 5 ? 5 : currentScale; //自己调节可以放大的最大倍数
		//      currentScale = currentScale < 0.1 ? 0.1 : currentScale; //自己调节可以缩小的最小倍数
		//      this.style.webkitTransform = "translate3d(" + offx + "," + offy + ",0)"+" "+"scale(" + currentScale + ")";
		     
		//  });
		//  touch.on(wrap, 'pinchend', function(ev) {
		//      initialScale = currentScale;
		//  });

	}
	Slider.prototype.goIndex = function(idx){
		var wrap = this.bigwrap.find('ul'),
			miniPic = this.listwrap.find('li'),
			self = this;
		self.cidx;	//记录
		self.n = 1;
			
		//如果是数字
		if (typeof idx == 'number') {
			
			self.cidx = idx;
			if (miniPic[idx-1]) {
				createEle(idx-1);
			}
			if (!miniPic[idx-1]) {
				wrap.append($("<li></li>"));
			}
			createEle(idx);
			if (miniPic[idx+1]) {
				createEle(idx+1);
			}
			if (!miniPic[idx+1]) {
				wrap.append($("<li></li>"));
			}
			
		}
		

		//如果是字符串
		if (typeof idx == 'string') {
			//console.log('string')
			
			if (idx*1 < 0) {
				if (miniPic[self.cidx+idx*1-1]) {    //上上一张图片存在
					createEle(self.cidx+idx*1-1,true);
					self.cidx -= 1;
					wrap.find('li').last().remove();
				}
				else if(!miniPic[self.cidx+idx*1-1]&&(self.cidx+idx*1==0)){
					wrap.prepend($("<li></li>"));
					self.cidx -= 1;
					wrap.find('li').last().remove();
				}
			}
			if (idx*1 > 0) {
				if (miniPic[self.cidx+idx*1+1]) {
					createEle(self.cidx+idx*1+1);
					self.cidx += 1;
					wrap.find('li').first().remove();
				}
				else if(!miniPic[self.cidx+idx*1+1]&&(self.cidx+idx*1==miniPic.length-1)){
					wrap.append($("<li></li>"));
					self.cidx += 1;
					wrap.find('li').first().remove();
				}
			}
			console.log(self.cidx)

		}
		for(var i = 0; i < wrap.find('li').length; i++){
			wrap.find('li').css({'webkitTransition':'-webkit-transform 0.2s ease-out'});
			wrap.find('li').eq(i).css({'webkitTransform':'translate3d('+(i-self.n)*self.screenW+'px, 0, 0)'});
		}

		function createEle(imgindex,bol){
			var new_li = $("<li></li>"),
				winH = $(window).height(),
				winW = $(window).width(),
				winK = winH/winW;
			if (bol) {
				wrap.prepend(new_li);
			}else{
				wrap.append(new_li);
			}
			
			var imgobj = new Image();
			imgobj.src = miniPic[imgindex].getAttribute('data');
			imgobj.onload = function(){
				if ($(this).height()/$(this).width() > winK) {
					$(this).height(winH);
				}else{
					$(this).width(winW);
				}
				new_li.append($(this));
			}

		}
	}
	//初始化查看大图
	new Slider({ imglist : $('#imglist'),
				 bigwrap : $('#showBigPic')});

	function toolbar(){
		touch.on($('#showBigPic'),'pinchin',function(){
			$('#toolbar').addClass('on');
		});
		touch.on($('#showBigPic'),'pinchout',function(){
			$('#toolbar').removeClass('on');
		})

	}
	toolbar();


	//猜猜游戏
	function Guest(){
		this.init();
		this.renderDOM();
		this.bindDOM();
	}
	Guest.prototype.init = function(){
		this.radius = 50;
	}
	Guest.prototype.renderDOM = function(){
		var self = this;
		var canvas = document.getElementById('game_canvas');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		var ctx = canvas.getContext('2d');
		var savecanvas = document.getElementById('save');	//用于保存改变宽高后的图片，以传到drawImage()中时能获得正确的宽高。
		var ctx2 = savecanvas.getContext('2d');
		var timer = null,
			clipOptions = {},   //可视区域的属性
			rotAngle = 0;
		var img = $('#blur-image')[0],
			theTop,theLeft;
		$('#gameStart').on('tap',function(e){
			e.stopPropagation();
			e.preventDefault();
			$('#gamewrap').show();
			
			img.src = $('#showBigPic').find('ul').find('li').eq(1).find('img').attr('src');
			img.onload = function(){

				var imgk = this.width/this.height;
				var wink = window.innerWidth/window.innerHeight;
				console.log(this.width,this.height)
				if (imgk < wink) {	//高瘦型，宽拉长到窗口宽
					this.height = this.height*window.innerWidth/this.width;
					this.width = window.innerWidth;
				}
				if (imgk > wink) {	//矮胖型，高拉长到窗口高
					this.width = this.width*window.innerHeight/this.height;
					this.height = window.innerHeight;
				}
				this.style.left = window.innerWidth/2-this.width/2+'px';  //设置图片位置
				this.style.top = window.innerHeight/2-this.height/2+'px';
				theLeft = window.innerWidth/2-this.width/2;			//记录
				theTop = window.innerHeight/2-this.height/2;
				console.log( 'thisW:'+this.width,'thisH:'+this.height,'theLeft:'+theLeft,'thetop:'+theTop)
				
				savecanvas.width = this.width;
				savecanvas.height = this.height;
				ctx2.drawImage(this,0,0,savecanvas.width,savecanvas.height);
				
				initCanvas();
			}
		});
		$('#gamewrap').on('touchstart',function(e){
			e.preventDefault();
		})
		$('#show').on('tap',function(e){
			e.stopPropagation();
			e.preventDefault();
			show();
		});
		$('#reset').on('tap',function(e){
			e.stopPropagation();
			e.preventDefault();
			reset();
		});
		$('#quit').on('tap',function(e){
			e.stopPropagation();
			e.preventDefault();
			reset();
			$('#gamewrap').fadeOut();
		});
		function initCanvas(){
			var shape = ['round','star'];
			clipOptions.x = Math.random()*(window.innerWidth-2*self.radius)+self.radius;
			clipOptions.y = Math.random()*(window.innerHeight-2*self.radius)+self.radius;
			clipOptions.shape = shape[Math.floor(Math.random()*2)];
			draw();
		}
		function show(){
			console.log('show')
			clearInterval(timer);
			timer = setInterval(function(){
				
				//rotAngle += 1;
				draw();
				//console.log('running')
				if (clipOptions.shape == 'star') {
					self.radius += 15;
					if (self.radius > 5*Math.max(canvas.width,canvas.height) ) {
						clearInterval(timer);
					}
				}
				else if(clipOptions.shape == 'round'){
					self.radius += 5;
					if(self.radius > 2*Math.max(canvas.width,canvas.height) ) {
						clearInterval(timer);
					}
				}
				
			},30);
		}

		function draw(){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.save();
			setclip(clipOptions);
			ctx.drawImage(savecanvas,Math.abs(theLeft),Math.abs(theTop),window.innerWidth,window.innerHeight,
							0,0,canvas.width,canvas.height);
			ctx.restore();
		}

		function setclip(opt){
			ctx.save();
			//ctx.rotate(rotAngle/180*Math.PI);
			ctx.beginPath();
			if (opt.shape == 'round') {
				console.log('round')
				ctx.arc(opt.x,opt.y,self.radius,0,Math.PI*2);
			}else if (opt.shape == 'star') {
				console.log('star')
				for(var i = 0; i < 5; i++){
					ctx.lineTo(Math.cos((18+i*72)/180*Math.PI)*self.radius+opt.x,
								-Math.sin((18+i*72)/180*Math.PI)*self.radius+opt.y);
					ctx.lineTo(Math.cos((54+i*72)/180*Math.PI)*self.radius/3+opt.x,
								-Math.sin((54+i*72)/180*Math.PI)*self.radius/3+opt.y);
					
				}
				ctx.closePath();

			}
			ctx.lineWidth = 3;
			ctx.strokeStyle = 'blue';
			ctx.stroke();
			ctx.restore();
			
			ctx.clip();
		}
		function reset(){
			clearInterval(timer);
			self.radius = 50;
			//rotAngle = 0;
			initCanvas();
		}
	}
	Guest.prototype.bindDOM = function(){

	}

	//初始化
	new Guest();


	//编辑图片
	function editImage(){
		
		console.log()
		this.init();
		this.renderDOM();
		this.bindDOM();


	}

	editImage.prototype.init = function(){
		this.editwrap = $('#editcanvasBg');
		this.editcanvas = $('#editcanvas');
		this.clipwrap = $('#clipcanvasBg');
		this.clipcanvas = $('#clipcanvas');
		this.writingcanvas = $('#writingcanvas');
	}
	editImage.prototype.renderDOM = function(){
		var self = this,
			canvas = document.getElementById('editcanvas'),
			ctx = canvas.getContext('2d'),
			img = new Image(),
			imgW,imgH,theLeft,theTop,offX = 0,offY = 0,delX = 0,delY = 0,
			initialScale = 1,currentScale = 1,imgcurrentW,imgcurrentH;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		var	clipcanvas = document.getElementById('clipcanvas'),
			ctx2 = clipcanvas.getContext('2d');
		var setTimer;
		clipcanvas.width = window.innerWidth;
		clipcanvas.height = window.innerHeight;
		$('#editStart').on('tap',function(){
			$('#editwrap').fadeIn();
			clearInterval(setTimer);
			setTimer = setTimeout(function(){
				$('#editbar').hide();
			},5000);
			img.src = $('#showBigPic').find('ul').find('li').eq(1).find('img').attr('src');
			img.onload = function(){
				var imgk = this.width/this.height;
				var wink = window.innerWidth/window.innerHeight;
				console.log(this.width,this.height)
				if (imgk < wink) {	//高瘦型，宽拉长到窗口宽
					this.height = this.height*window.innerWidth/this.width;
					this.width = window.innerWidth;
				}
				if (imgk > wink) {	//矮胖型，高拉长到窗口高
					this.width = this.width*window.innerHeight/this.height;
					this.height = window.innerHeight;
				}
				theLeft = window.innerWidth/2-this.width/2;			//记录
				theTop = window.innerHeight/2-this.height/2;
				imgW = this.width;
				imgH = this.height;
				ctx.drawImage(this,theLeft,theTop,this.width,this.height);
			}
		});

		//离开屏幕5秒后自动隐藏按钮
		this.editcanvas.on('touchstart',function(ev) {
			clearInterval(setTimer);
			ev.preventDefault();
			$('#editbar').show();
			setTimer = setTimeout(function(){
				$('#editbar').hide();
			},5000);
		});

		//缩放图片
		 touch.on(this.editcanvas, 'pinchstart', function(ev) {
		     ev.preventDefault();
		 });
		 
		 touch.on(this.editcanvas, 'pinch', function(ev) {
		     currentScale = ev.scale - 1;
		     currentScale = initialScale + currentScale;
		     currentScale = currentScale > 3 ? 3 : currentScale; //放大的最大倍数
		     currentScale = currentScale < 0.2 ? 0.2 : currentScale; //缩小的最小倍数
		     imgcurrentW = imgW * currentScale;
		     imgcurrentH = imgH * currentScale;
		     theLeft = canvas.width/2 - imgcurrentW/2;
		     theTop = canvas.height/2 - imgcurrentH/2;
		     currentLeft = theLeft + delX ;
		     currentTop = theTop + delY ;
		     ctx.clearRect(0,0,canvas.width,canvas.height);
	         ctx.drawImage(img,currentLeft,currentTop,imgcurrentW,imgcurrentH);
	         // ctx.arc(currentLeft+imgcurrentW/2,currentTop+imgcurrentH/2,5,0,Math.PI*2);
	         // ctx.lineWidth = 2;
	         // ctx.stroke();
		 });
		 touch.on(this.editcanvas, 'pinchend', function(ev) {
		     initialScale = currentScale; 
		 });

		//移动图片
		touch.on(this.editcanvas,'dragstart',function(ev){
			ev.stopPropagation();
		 	ev.preventDefault();
		 });
		touch.on(this.editcanvas, 'drag', function (ev) {
		 	
		 	ev.preventDefault();
	        offX = ev.x;
	        offY = ev.y;
	        imgcurrentW = imgW * currentScale;
		    imgcurrentH = imgH * currentScale;
	     	theLeft = canvas.width/2 - imgcurrentW/2;
		    theTop = canvas.height/2 - imgcurrentH/2;
		    
		    currentLeft = theLeft + delX + offX;
		    currentTop = theTop + delY + offY;
		     ctx.clearRect(0,0,canvas.width,canvas.height);
	         ctx.drawImage(img,currentLeft,currentTop,imgcurrentW,imgcurrentH);
	         // ctx.arc(currentLeft+imgcurrentW/2,currentTop+imgcurrentH/2,5,0,Math.PI*2);
	         // ctx.lineWidth = 2;
	         // ctx.stroke();
	    });
	    touch.on(this.editcanvas, 'dragend', function (ev) {
	        delX += offX;
		    delY += offY;
	    });
		
		
		
	    //裁剪图片
		var startX,startY,curX,curY,squareW,squareH,isfinishclip = false,isinside = false,
			deltaX = 0, deltaY = 0,fx = 0,fy = 0,moveX = 0,moveY = 0,oldX = 0,oldY = 0,cliped = false,
			clipbarTimer;
		this.clipcanvas.on('touchstart',function(e){
			e.stopPropagation();
			e.preventDefault();
			if (!cliped) {
				startX = e.originalEvent.targetTouches[0].pageX;
				startY = e.originalEvent.targetTouches[0].pageY;
				if (isfinishclip == true) {
					console.log('run');
					ctx2.save();
					ctx2.beginPath();
					ctx2.rect(oldX+deltaX,oldY+deltaY,squareW,squareH);
					if (ctx2.isPointInPath(startX,startY)) {
						console.log('run');
						isinside = true;

					}else{
						isinside = false;
						console.log('outside')
					}
					ctx2.restore();
				}else{
					console.log('run');
					oldX = e.originalEvent.targetTouches[0].pageX;   //记录最初的起始坐标。
					oldY = e.originalEvent.targetTouches[0].pageY;
					console.log(oldX,oldY)
				}
			}else{
				clearInterval(clipbarTimer);
				$('#exitclip').show();
				$('#reclip').show();
				$('#finishclip').show();
				clipbarTimer = setTimeout(function(){
					$('#exitclip').hide();
					$('#reclip').hide();
					$('#finishclip').hide();
				},5000);
			}
			
			
		});
		this.clipcanvas.on('touchmove',function(e){
			if (!cliped) {
				if (isfinishclip == true) {
					console.log('run');
					if (isinside == true){
						console.log('run');
						curX = e.originalEvent.targetTouches[0].pageX;
						curY = e.originalEvent.targetTouches[0].pageY;
						moveX = curX - startX;
						moveY = curY - startY;
						ctx2.clearRect(0,0,clipcanvas.width,clipcanvas.height);
						ctx2.save();
						//ctx2.rect(oldX+deltaX+moveX,oldY+deltaY+moveY,squareW,squareH);
						ctx2.beginPath();
						ctx2.moveTo(oldX+deltaX+moveX,oldY+deltaY+moveY);
						ctx2.lineTo(oldX+deltaX+moveX+squareW,oldY+deltaY+moveY);
						ctx2.lineTo(oldX+deltaX+moveX+squareW,oldY+deltaY+moveY+squareH);
						ctx2.lineTo(oldX+deltaX+moveX,oldY+deltaY+moveY+squareH);
						ctx2.closePath();
						ctx2.clip();
						ctx2.drawImage(canvas,0,0,clipcanvas.width,clipcanvas.height);
						ctx2.restore();
					}else{
						moveX = 0;
						moveY = 0;
					}
				
				}else{
					console.log('run');
					curX = e.originalEvent.targetTouches[0].pageX;
					curY = e.originalEvent.targetTouches[0].pageY;
					fx = curX - startX;
					fy = curY - startY;
					ctx2.clearRect(0,0,clipcanvas.width,clipcanvas.height);
					ctx2.save();
					ctx2.beginPath();
					ctx2.moveTo(startX,startY);
					if (fx>0 && fy>0) {
						squareW = fx;
						squareH = fy;
						ctx2.lineTo(curX,curY-fy);
						ctx2.lineTo(curX,curY);
						ctx2.lineTo(startX,curY);
					}
					ctx2.closePath();
					ctx2.clip();
					ctx2.drawImage(canvas,0,0,clipcanvas.width,clipcanvas.height);
					ctx2.restore();
				}
			}
			
			
		});
		this.clipcanvas.on('touchend',function(e){
			if (!cliped) {
				if (isfinishclip == true) {
					console.log('run');
					deltaX += moveX;
					deltaY += moveY;
					console.log(deltaX,deltaY)
				}
				if (fx>0 && fy>0){
					console.log('run');
					isfinishclip = true;
				}
			}
		});
		

		//写字
		var writecanvas = document.getElementById('writingcanvas'),
			ctx3 = writecanvas.getContext('2d');
		writingcanvas.width = window.innerWidth;
		writingcanvas.height = window.innerHeight;
		var lastX = 0,lastY = 0,writebarTimer,writed = false;
		this.writingcanvas.on('touchstart',function(e){
			e.preventDefault();
			clearInterval(writebarTimer);
			if (!writed) {
				lastX = e.originalEvent.targetTouches[0].pageX;
				lastY = e.originalEvent.targetTouches[0].pageY;
			}else{
				$('#writebar').show();
				writebarTimer = setTimeout(function(){
					$('#writebar').hide();
				},5000);
			}
			
			
		});
		this.writingcanvas.on('touchmove',function(e){
			if (!writed) {
				var nowX = e.originalEvent.targetTouches[0].pageX;
				var nowY = e.originalEvent.targetTouches[0].pageY;
				ctx3.beginPath();
				ctx3.moveTo(lastX,lastY);
				ctx3.lineTo(nowX,nowY);
				ctx3.lineWidth = 3;
				ctx3.strokeStyle = 'red';
				ctx3.lineCap = 'round';
				ctx3.lineJoin = 'round';
				ctx3.stroke();
				lastX = nowX;
				lastY = nowY;
			}
			
		});
		this.writingcanvas.on('touchend',function(e){
			
		});


		
		$('#write').on('tap',function(){
			$('#editbar').hide();
			self.writingcanvas.show();
			ctx3.drawImage(canvas,0,0,writingcanvas.width,writingcanvas.height);
			clearInterval(writebarTimer);
			$('#writebar').show();
		});

		$('#finishwrite').on('tap',function(){
			writed = true;
			$('#writebar').hide();
		});
		$('#rewrite').on('tap',function(){
			writed = false;
			ctx3.clearRect(0,0,writingcanvas.width,writingcanvas.height);
			ctx3.drawImage(canvas,0,0,writingcanvas.width,writingcanvas.height);
		});
		$('#exitwrite').on('tap',function(){
			writed = false;
			$('#writebar').hide();
			self.writingcanvas.hide();
			ctx3.clearRect(0,0,writingcanvas.width,writingcanvas.height);
		});




		$('#back').on('tap',function(){
			offX = 0;offY = 0;delX = 0;delY = 0;
			initialScale = 1;currentScale = 1;
			$('#editwrap').fadeOut();
		});
		$('#clip').on('tap',function(){
			self.editwrap.addClass('blur');
			clearInterval(clipbarTimer);
			$('#editbar').hide();
			self.clipwrap.show();
			$('#exitclip').show();
			$('#reclip').show();
			$('#finishclip').show();
		});

		
		$('#reclip').on('tap',function(e){
			ctx2.clearRect(0,0,clipcanvas.width,clipcanvas.height);
			isfinishclip = false;isinside = false;cliped = false;
			deltaX = 0; deltaY = 0;fx = 0;fy = 0;moveX = 0;moveY = 0;oldX = 0;oldY = 0;
			self.editwrap.show();
		});

		$('#finishclip').on('tap',function(e){
			cliped = true;
			self.editwrap.hide();
			$('#exitclip').hide();
			$('#reclip').hide();
			$('#finishclip').hide();
		});

		$('#exitclip').on('tap',function(e){
			ctx2.clearRect(0,0,clipcanvas.width,clipcanvas.height);
			isfinishclip = false;isinside = false;cliped = false;
			deltaX = 0; deltaY = 0;fx = 0;fy = 0;moveX = 0;moveY = 0;oldX = 0;oldY = 0;
			$('#exitclip').hide();
			$('#reclip').hide();
			$('#finishclip').hide();
			self.clipwrap.hide();
			self.editwrap.removeClass('blur').show();
		});


		


	    
	}
	editImage.prototype.bindDOM = function(){
		
	}

	new editImage();
}