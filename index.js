window.onload=function(){
	var body=document.getElementById('body');
	body.onmousedown=function(e){
		e.preventDefault();
	};
	var sence1=document.getElementById('sence1');
	var title1=document.getElementById('title1');
	var r=Math.floor(Math.random()*255);
	var g=Math.floor(Math.random()*255);
	var b=Math.floor(Math.random()*255);

// 计算器-------------------------------------------
	title1.style.background='rgb('+r+','+g+','+b+')';
	title1.innerHTML='计算器';
	// 竖屏计算器---------------------------------------------
	var calculator1=document.getElementById('calculator1');
	var sc1=document.getElementById('screen1');
	var nums1=document.getElementsByClassName('num1');
	var op1=document.getElementsByClassName('operation1');
	var mc1=document.getElementById('mc1'),
		mjia1=document.getElementById('m+1'),
		mjian1=document.getElementById('m-1'),
		mr1=document.getElementById('mr1'),
		cunchu1=[];
	var firstNumber1='',secondNumber1='',o1='';
	// var arr1=[];
	for(i=0;i<nums1.length;i++){
		nums1[i].index=i;
		nums1[i].onclick=function(){
			if(!o1){
				if(firstNumber1==''&&this.innerHTML=='.'){
					return;
				}
				if(this.innerHTML=='.'&&firstNumber1.indexOf('.')!=-1){ 
					return;
				}
				firstNumber1+=nums1[this.index].innerHTML;
				sc1.innerHTML=Number(firstNumber1);
				// arr1.push(Number(firstNumber1));
				return;
			}else{
				if(secondNumber1==''&&this.innerHTML=='.'){
					return;
				}
				if(this.innerHTML=='.'&&secondNumber1.indexOf('.')!=-1){ 
					return;
				}
				secondNumber1+=nums1[this.index].innerHTML;
				sc1.innerHTML=Number(secondNumber1);
				// arr1.push(Number(secondNumber1));
				// console.log(arr1);
				return;
			}	
		};
	}
	var ac1=document.getElementById('ac1');
	ac1.onclick=function(){
		sc1.innerHTML=0;
		firstNumber1=secondNumber1=o1='';
		arr1=[];
	};
	var zF=document.getElementById('zF');   //正负
	zF.onclick=function(){
		if(Number(firstNumber1)>0){
			sc1.innerHTML=-Number(firstNumber1);
			if(o1==''){
				firstNumber1=-Number(firstNumber1);
			}else{
				secondNumber1=-Number(firstNumber1);
			}
		}else{
			sc1.innerHTML=Math.abs(Number(firstNumber1));
			if(o1==''){
				firstNumber1=-Number(firstNumber1);
			}else{
				secondNumber1=-Number(firstNumber1);
			}
		}
	};
	for(i=0;i<op1.length;i++){
		op1[i].index=i;
		op1[i].onclick=function(){
			o1=op1[this.index].innerHTML;
			// arr1.push(o1);
		}
	}
	var equl1=document.getElementById('denghao1');
	equl1.onclick=function(){
		if(o1=='+'){
			sc1.innerHTML=Number(firstNumber1)+Number(secondNumber1);
		}
		if(o1=='-'){
			sc1.innerHTML=Number(firstNumber1)-Number(secondNumber1);
		}
		if(o1=='*'){
			sc1.innerHTML=Number(firstNumber1)*Number(secondNumber1);
		}
		if(o1=='/'){
			if(Number(secondNumber1)==0){
				sc1.innerHTML='除数不能为0!';
			}else{
				sc1.innerHTML=Number(firstNumber1)/Number(secondNumber1);
			}
		}
		firstNumber1=sc1.innerHTML;
		secondNumber1=o1='';
		// ----------------M-----------------------------
		// cunchu1.push(Number(sc1.innerHTML));
		// mr1.onclick=function(){
		// 	if(!cunchu1.length){return;}
		// 	sc1.innerHTML=cunchu1[0];
		// };
		// mjia1.onclick=function(){
		// 	for(var i=0;i<cunchu1.length;i++){
		// 		sc1.innerHTML=Number(sc1.innerHTML)+Number(cunchu1[i]);
		// 	}		
		// };
		// mjian1.onclick=function(){
		// 	for(var i=0;i<cunchu1.length;i++){
		// 		sc1.innerHTML=Number(sc1.innerHTML)-Number(cunchu1[i]);
		// 	}
		// };
		// mc1.onclick=function(){
		// 	cunchu1=[];
		// 	console.log(cunchu1);
		// 	sc1.innerHTML=0;
		// };
		// -------------------------------------------------------------------
		// for(var i=0;i<arr1.length;i++){
		// 	if(i%2!=0&&typeof(arr1[i])!='number'){
		// 		console.log(1);
		// 	}
		// }
		// console.log(arr1);
	};
	// 获取系统当前时间
	var clock2=document.getElementById('clock1');
	var clock2=document.getElementById('clock2');
	systemTime=function(){
	var myDate=new Date();
	var hh=myDate.getHours();
	var mm=myDate.getMinutes();
	mm=extra(mm);
	clock1.innerHTML=hh+":"+mm; 
	clock2.innerHTML=hh+":"+mm; 
	};
	setInterval('systemTime()',1000);
	extra=function(x){
		if (x<10) {
			return '0'+x;
		}else{
			return x;
		}
	};
	// 计算器(横屏)-------------------------------------------
	var sence2=document.getElementById('sence2');
	var title2=document.getElementById('title2');
	r=Math.floor(Math.random()*255);
	g=Math.floor(Math.random()*255);
	b=Math.floor(Math.random()*255);
	title2.style.background='rgb('+r+','+g+','+b+')';
	title2.innerHTML='计算器';
	// 横屏计算器---------------------------------------------------------
	var calculator2=document.getElementById('calculator2');
	var nums2=document.getElementsByClassName('num2');
	var op2=document.getElementsByClassName('operation2');
	var sc2=document.getElementById('screen2');
	var mc2=document.getElementById('mc2'),
		mjia2=document.getElementById('m+2'),
		mjian2=document.getElementById('m-2'),
		mr2=document.getElementById('mr2'),
		cunchu2=[];
	var firstNumber2='',secondNumber2='',o2='';       //o2 
	for(i=0;i<nums2.length;i++){
		nums2[i].index=i;
		nums2[i].onclick=function(){
			if(!o2){
				if(firstNumber2==''&&this.innerHTML=='.'){
					return;
				}
				if(this.innerHTML=='.'&&firstNumber2.indexOf('.')!='-1'){
					return;
				}
				firstNumber2+=nums2[this.index].innerHTML;
				sc2.innerHTML=Number(firstNumber2);
				return;
			}else{
				if(secondNumber2==''&&this.innerHTML=='.'){
					return;
				}
				if(this.innerHTML=='.'&&secondNumber2.indexOf('.')!='-1'){
					return;
				}
				secondNumber2+=nums2[this.index].innerHTML;
				sc2.innerHTML=Number(secondNumber2);
				return;
			}	
		};
	}
	var ac2=document.getElementById('ac2');
	ac2.onclick=function(){
		sc2.innerHTML=0;
		firstNumber2=secondNumber2=o2='';
	};
	var jiecheng=document.getElementById('jiecheng');
	jiecheng.onclick=function(){
		var ss=1;
		for(var n=Number(firstNumber2);n>0;n--){
			ss*=n;
		}
		sc2.innerHTML=ss;
		firstNumber2=secondNumber2=o2='';

	};
	var rad=document.getElementById('rad');
	rad.onclick=function(){
		sc2.innerHTML=Math.PI/180*Number(firstNumber2);
		if(o2==''){
			firstNumber2=Math.PI/180*Number(firstNumber2);
		}else{
			secondNumber2=Math.PI/180*Number(secondNumber2);
		}
	};
	var pai=document.getElementById('pai');
	pai.onclick=function(){
		sc2.innerHTML=Math.PI;
		if(o2==''){
			firstNumber2=Math.PI;
		}else{
			secondNumber2=Math.PI;
		}
	};
	var rand=document.getElementById('rand');
	rand.onclick=function(){
		sc2.innerHTML=Math.random();
	};
	var x2=document.getElementsByClassName('x2');
	var r2='',result2='';
	for(i=0;i<x2.length;i++){
		x2.index=i;
		x2[i].onclick=function(){
			result2=this.innerHTML.trim();
			if(Number(firstNumber2)!=''&&o2==''){
				if(result2=='%'){
					sc2.innerHTML=firstNumber2*0.01;
					firstNumber2*=0.01;
				}
				if(result2=='1/x'){
					sc2.innerHTML=1/Number(firstNumber2);
				}	
				if(result2=='x^2'){
					sc2.innerHTML=Math.pow(Number(firstNumber2),2);
				}	
				if(result2=='x^3'){
					sc2.innerHTML=Math.pow(Number(firstNumber2),3);
				}
				if(result2=='+/-'){
					if(Number(firstNumber2)>0){
						sc2.innerHTML=-Number(firstNumber2);
						if(o2==''){
							firstNumber2=-Number(firstNumber2);
						}else{
							secondNumber2=-Number(firstNumber2);
						}
					}else{
						sc2.innerHTML=Math.abs(Number(firstNumber2));
						if(o2==''){
							firstNumber2=-Number(firstNumber2);
						}else{
							secondNumber2=-Number(firstNumber2);
						}
					}
				}	
				if(result2=='sqrt'){
					sc2.innerHTML=Math.sqrt(Number(firstNumber2));
				}
				if(result2=='ln'){
					sc2.innerHTML=Math.log(Number(firstNumber2));
				}
				if(result2=='log'){
					sc2.innerHTML=Math.log10(Number(firstNumber2));
				}	
				if(result2=='e^x'){
					sc2.innerHTML=Math.pow(Math.E,Number(firstNumber2));
				}
				if(result2=='sin'){
					r2=Math.sin(Math.PI/180*Number(firstNumber2));
					sc2.innerHTML=Number(r2.toFixed(5));
				}	
				if(result2=='cos'){
					r2=Math.cos(Math.PI/180*Number(firstNumber2));
					sc2.innerHTML=Number(r2.toFixed(5));
				}
				if(result2=='tan'){
					r2=Math.tan(Math.PI/180*Number(firstNumber2));
					sc2.innerHTML=Number(r2.toFixed(5));
				}
				if(result2=='sinh'){
					r2=Math.sinh(Math.PI/180*Number(firstNumber2));
					sc2.innerHTML=Number(r2.toFixed(5));
				}	
				if(result2=='cosh'){
					r2=Math.cosh(Math.PI/180*Number(firstNumber2));
					sc2.innerHTML=Number(r2.toFixed(5));
				}	
				if(result2=='tanh'){
					r2=Math.tanh(Math.PI/180*Number(firstNumber2));
					sc2.innerHTML=Number(r2.toFixed(5));
				}
			}				
		};
	}	
	for(i=0;i<op2.length;i++){
		op2[i].index=i;
		op2[i].onclick=function(){
			o2=op2[this.index].innerHTML;
		};
	}
	var equl2=document.getElementById('denghao2');
	equl2.onclick=function(){
		if(o2=='+'){
			sc2.innerHTML=Number(firstNumber2)+Number(secondNumber2);
		}
		if(o2=='-'){
			sc2.innerHTML=Number(firstNumber2)-Number(secondNumber2);
		}
		if(o2=='*'){
			sc2.innerHTML=Number(firstNumber2)*Number(secondNumber2);
		}
		if(o2=='/'){
			if(Number(secondNumber2)==0){
				sc2.innerHTML='除数不能为0!';
			}else{
				sc2.innerHTML=Number(firstNumber2)/Number(secondNumber2);
			}	
		}
		if(o2=='x^y'){
			sc2.innerHTML=Math.pow(Number(firstNumber2),Number(secondNumber2));
		}
		if(o2=='x√y'){
			sc2.innerHTML=Math.pow(Number(secondNumber2),1/Number(firstNumber2));
		}
		if(o2=='EE'){
			sc2.innerHTML=Number(firstNumber2)*Math.pow(10,Number(secondNumber2));
		}
		firstNumber2=sc2.innerHTML;
		secondNumber2=o2='';
		// ----------------M-----------------------------
		// cunchu2.push(Number(sc2.innerHTML));
		// mr2.onclick=function(){
		// 	if(!cunchu2.length){return;}
		// 	sc2.innerHTML=cunchu2[0];
		// };
		// mjia2.onclick=function(){
		// 	for(var i=0;i<cunchu2.length;i++){
		// 		sc2.innerHTML=Number(sc2.innerHTML)+Number(cunchu2[i]);
		// 	}		
		// };
		// mjian2.onclick=function(){
		// 	for(var i=0;i<cunchu2.length;i++){
		// 		sc2.innerHTML=Number(sc2.innerHTML)-Number(cunchu2[i]);
		// 	}
		// };
		// mc2.onclick=function(){
		// 	cunchu2=[];
		// 	sc2.innerHTML=0;
		// };
		// -------------------------------------------------------------------
	};
	var sence=document.getElementsByClassName('sence');
	var fixBig=document.getElementById('fixBig');
	var fixTips=document.getElementsByClassName('fixTips');
	var start,end,timerId3,xishu=1;
	for (i = 0; i < sence.length; i++) {
		fixTips[i].index=i;
		fixTips[i].onclick=function(){
		//注意getBoundingClientRect()的书写
			end=sence[this.index].offsetTop-fixBig.getBoundingClientRect().top; 
			start=document.body.scrollTop;
			var cha=Math.abs(start-end)/30;
			if(start>end){
				xishu=-1;
			}else{
				xishu=1;
			}
			clearInterval(timerId3);
			timerId3=setInterval(function(){
				document.body.scrollTop=start;
				start+=xishu*cha;
				if((xishu>0)?(start>end):(start<end)){
					clearInterval(timerId3);
				}
			},10);
		};
	}
















};