//依赖jquery

// deerSprite = new createDeerSprite();
var el = $('.deer'), step = 1, timeID1, flowerSprite, title2Sprite, titleSprite, title3Sprite;

var soundID = $('#myAudio')[0];
var soundImg = $('#sound_image')
document.addEventListener("WeixinJSBridgeReady", function () {
    document.getElementById('myAudio').play();
}, false);
document.addEventListener('DOMContentLoaded', function () {//网页音频直接播放
    function audioAutoPlay() {
        soundID.play();
        $(".sound-rotate").addClass("sound-rotate");
        document.addEventListener("WeixinJSBridgeReady", function () {//兼容ios
            soundID.play();
            $(".sound-rotate").addClass("sound-rotate");
        }, false);
        document.addEventListener('YixinJSBridgeReady', function() {
            soundID.play();
            $(".sound-rotate").addClass("sound-rotate");
        }, false);
    }
   audioAutoPlay();
});

soundImg.click(function () {
    autoPlay();
});
function autoPlay() {
    if(soundID.paused){
        soundID.play();// 播放
        $(".kmh-19-sound").addClass("sound-rotate");
    }else{
        soundID.pause();
        $(".kmh-19-sound").removeClass("sound-rotate");
    }
}

$(function () {
    // var soundID = $('#myAudio');
    // soundID.play();// 播放
    // setTimeout(autoPlay(),1000);
});
$('.start').click(function () {
    if (step == 0) {
        step = 1
        clearInterval(timeID1);
        $('#newYearCar1').toggleClass('newyearcarStart');
    } else if (step == 1) {
        // autoPlay();
        $('.start').hide();
        $('.pop1').fadeIn(1000);
        setTimeout(function(){$('.pop1').fadeOut(1000);$('.pop2').fadeIn(1000);},3000);
        step = 0;
        timeID1 = setInterval(function(){el.toggleClass('deer_frame2');},100);
        $('#newYearCar1').toggleClass('newyearcarStart');
        $('#tittle1').toggleClass('tittleStart');
    
        $('.bg').animate({left: '-0px'}, 15000);
        $('.deer_group').animate({left: '-640px'}, 15000, 'linear', deerGroup);
    
        //星星
        new createStarSprite(1,{'top':'10px','left':'0px','scale':0.2,'rotate':'0deg'});
        new createStarSprite(2,{'top':'0px','left':'60px','scale':0.25,'rotate':'10deg'});
        new createStarSprite(3,{'top':'320px','left':'120px','scale':0.2,'rotate':'20deg'});
        new createStarSprite(4,{'top':'250px','left':'260px','scale':0.25,'rotate':'30deg'});
        new createStarSprite(5,{'top':'20px','left':'480px','scale':0.3,'rotate':'40deg'});
        new createStarSprite(6,{'top':'320px','left':'410px','scale':0.25,'rotate':'50deg'});
        new createStarSprite(7,{'top':'390px','left':'500px','scale':0.4,'rotate':'60deg'});
        new createStarSprite(8,{'top':'80px','left':'520px','scale':0.35,'rotate':'70deg'});
        new createStarSprite(9,{'top':'420px','left':'30px','scale':0.4,'rotate':'80deg'});
        
    }
});

$('.openGift').click(function () {
    clearInterval(createOpenGiftSprite.timeID1);
    $('#tittle1').removeClass('tittleStart');
    $('#title2').addClass('title3Start');
    $('.animation1').hide();
    $('.animation2').show();
    // $('#title3').addClass('title3Start');
    animation2();
});

function deerGroup() {
    createOpenGiftSprite();
    clearInterval(timeID1);
    $('#newYearCar1').removeClass('newyearcarStart');
}

/*星星*/
function createStarSprite(id,option)
{
    this.el = $('#star'+id);
    this.minWidth = 115;
    this.maxWidth = 115;
    this.initScale = option.scale ? option.scale : 1;
    this.minScale = option.minScale ? option.minScale : option.scale/1.2;
    this.maxScale = option.maxScale ? option.maxScale : option.scale*1.2;
    this.initRotate = option.rotate ? option.rotate : '0deg';
    this.perChangeScale = (this.initScale-this.minScale)/5;
    this.el.css('-webkit-transform','scale('+this.initScale+') rotate('+this.initRotate+')');
    this.currentScale = this.initScale;
    this.el.css('top',option.top);
    this.el.css('left',option.left);
    var starSprite = this;
    this.timeID1 = setInterval(function(){
        if(starSprite.currentScale>starSprite.maxScale || starSprite.currentScale<starSprite.minScale)
        {
            starSprite.perChangeScale = -starSprite.perChangeScale;
        }
        starSprite.currentScale = starSprite.currentScale+starSprite.perChangeScale;
        starSprite.el.css('-webkit-transform','scale('+starSprite.currentScale+') rotate('+starSprite.initRotate+')');
        starSprite.el.css('transform','scale('+starSprite.currentScale+') rotate('+starSprite.initRotate+')');
    },100);
}

/*  拆礼物按钮 */
function createOpenGiftSprite()
{
    this.el = $('.openGift');
    this.el.show();
    this.minWidth = 134;
    this.maxWidth = 168;
    this.currentWidth = this.minWidth;
    this.changePosition = 0;
    this.perChangePosition = 2;
    var openGiftSprite = this;
    this.timeID1 = setInterval(function()
    {
        if(openGiftSprite.currentWidth>openGiftSprite.maxWidth || openGiftSprite.currentWidth<openGiftSprite.minWidth)
        {
            openGiftSprite.perChangePosition = -openGiftSprite.perChangePosition;
        }
        openGiftSprite.currentWidth = openGiftSprite.currentWidth+openGiftSprite.perChangePosition;
        openGiftSprite.changePosition = openGiftSprite.changePosition+openGiftSprite.perChangePosition;
        openGiftSprite.el.css('top',parseInt(openGiftSprite.el.css('top'),10)-openGiftSprite.perChangePosition/2+'px');
        openGiftSprite.el.css('left',parseInt(openGiftSprite.el.css('left'),10)-openGiftSprite.perChangePosition/2+'px');
        openGiftSprite.el.css('width',openGiftSprite.currentWidth+'px');
        openGiftSprite.el.css('height',openGiftSprite.currentWidth+'px');
    },100);
}

/*  花  */
function createFlowersSprite(number)
{
    this.flowerResArr = new Array();
    this.flowerResArr[0] = ['flower_1.png','flower_4.png','flower_6.png','flower_7.png','flower_8.png','flower_10.png','flower_11.png','flower_12.png','flower_14.png'];
    this.flowerResArr[1] = ['flower_2.png','flower_3.png','flower_4.png','flower_5.png','flower_7.png','flower_8.png','flower_9.png','flower_10.png','flower_12.png','flower_13.png'];
    this.flowerCountsPerTime = number;
    this.flowerArr = new Array();
    this.middlePosition = 220;
    this.topWidth = 350;
    this.leftWidth = this.middlePosition;
    this.createFlowerAnimation = function(){
        for(i=0;i<this.flowerCountsPerTime;i++)
        {
            this.flowerArr[i]= document.createElement('img');
            this.flowerArr[i].style.position = 'absolute';
            
            //alert(i%2);
            if(i%2==0)
            {
                this.leftWidth = this.middlePosition-i*6;
            }else{
                this.leftWidth = this.middlePosition+i*6;
            }
            if(this.leftWidth<=this.middlePosition)
            {
                this.flowerArr[i].src = 'img/'+this.flowerResArr[0][(parseInt(Math.random()*9)%9)];
            }else{
                this.flowerArr[i].src = 'img/'+this.flowerResArr[1][(parseInt(Math.random()*10)%10)];
            }
            this.flowerArr[i].style.top = this.topWidth+'px';
            this.flowerArr[i].style.left = this.leftWidth+'px';
            $('.animation2 .flower').append(this.flowerArr[i]);
            $(this.flowerArr[i]).animate({'top':'-300px','left':this.leftWidth<=this.middlePosition ? this.leftWidth-80-(i*65)+'px' : this.leftWidth+80+(i*65)+'px'},2000,'swing',function(){$(this).remove();});
        }
    };
    flowerSprite = this;
    this.timeID1 = setInterval(function(){flowerSprite.createFlowerAnimation(number);},200);
}


function animation2()
{
    flowerSprite = new createFlowersSprite(10);
    title2Sprite = new createTitleSprite(2,{isVibrate:false});
    var titleStep = 0;
    $('#title2').animate({'opacity':1,'top':'30px'},{'step':function(now,fx){if(fx.prop=='opacity'){titleStep++;}if(titleStep%2==0 && fx.prop=='opacity'){$(this).css('-webkit-transform','scale('+now+')');}},'duration':3000});
    setTimeout(function(){animation3();},3000);
}

function createTitleSprite(id,option)
{
    this.duration1 = 100;
    this.el = $('#title'+id);
    this.rotate = 0;
    this.perRotate = 0.1;
    this.minRotate = -1;
    this.maxRotate = 1;
    titleSprite = this;
    if(option.isVibrate)
    {
        this.timeID1 = setInterval(function()
        {
            if(titleSprite.minRotate<titleSprite.rotate && titleSprite.rotate<titleSprite.maxRotate)
            {
                titleSprite.rotate = titleSprite.rotate+titleSprite.perRotate;
            }else if(titleSprite.rotate>=titleSprite.maxRotate)
            {
                titleSprite.perRotate = -0.1;
                titleSprite.rotate = titleSprite.rotate+titleSprite.perRotate;
            }else if(titleSprite.rotate<=titleSprite.minRotate)
            {
                titleSprite.perRotate = 0.1;
                titleSprite.rotate = titleSprite.rotate+titleSprite.perRotate;
            }
            titleSprite.el.css('-webkit-transform','rotate('+titleSprite.rotate+'deg)');
        },this.duration1);
    }
}

function animation3()
{
    clearInterval(flowerSprite.timeID1);
    clearInterval(title2Sprite.timeID1);
    setTimeout(function(){$('.animation2').fadeOut();$('.animation3').fadeIn();},1500);
    title3Sprite = new createTitleSprite(3,{isVibrate:true});
    $('.goto_flower').click(function(){
        //location.href='http://sun-air.net/wechat/event_20131230_2.html';
    });
    $('.share_help_entry').click(function(){
        $('.card_help').fadeIn(500);
    });
    $('.card_help').click(function(){
        $('.card_help').fadeOut(500);
    });
}
