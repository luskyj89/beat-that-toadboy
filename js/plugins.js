// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*
* Uses the built in easing capabilities added In jQuery 1.1
* to offer multiple easing options
*
* TERMS OF USE - jQuery Easing
*
* Open source under the BSD License.
*
* Copyright Â© 2008 George McGinley Smith
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this list of
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list
* of conditions and the following disclaimer in the documentation and/or other materials
* provided with the distribution.
*
* Neither the name of the author nor the names of contributors may be used to endorse
* or promote products derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
*  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
*  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
*  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
*  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
* OF THE POSSIBILITY OF SUCH DAMAGE.
*
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/*
*
* TERMS OF USE - EASING EQUATIONS
*
* Open source under the BSD License.
*
* Copyright Â© 2001 Robert Penner
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this list of
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list
* of conditions and the following disclaimer in the documentation and/or other materials
* provided with the distribution.
*
* Neither the name of the author nor the names of contributors may be used to endorse
* or promote products derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
*  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
*  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
*  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
*  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
* OF THE POSSIBILITY OF SUCH DAMAGE.
*
*/


/*!
* The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
* Copyright (c) 2014 Edson Hilios
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){return function(b){var c=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(c)for(var e=0,f=c.length;f>e;++e){var g=c[e].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),i=new RegExp(g[0]),j=g[1]||"",k=g[3]||"",l=null;g=g[2],h.hasOwnProperty(g)&&(l=h[g],l=Number(a[l])),null!==l&&("!"===j&&(l=d(k,l)),""===j&&10>l&&(l="0"+l.toString()),b=b.replace(i,l.toString()))}return b=b.replace(/%%/,"%")}}function d(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),1===Math.abs(b)?d:c}var e=100,f=[],g=[];g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var h={Y:"years",m:"months",w:"weeks",d:"days",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},i=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)),this.setFinalDate(c),this.start()};a.extend(i.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},e)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},pause:function(){this.stop.call(this)},resume:function(){this.start.call(this)},remove:function(){this.stop(),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){return 0===this.$el.closest("html").length?void this.remove():(this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)},void(0===this.totalSecsLeft?(this.stop(),this.dispatchEvent("finish")):this.dispatchEvent("update")))},dispatchEvent:function(b){var d=a.Event(b+".countdown");d.finalDate=this.finalDate,d.offset=a.extend({},this.offset),d.strftime=c(this.offset),this.$el.trigger(d)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];i.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new i(this,b[0],b[1])})}});


/**
* @preserve Copyright 2011 Syd Lawrence ( www.sydlawrence.com ).
* Version: 0.2
*
* Licensed under MIT and GPLv2.
*
* Usage: $('body').videoBG(options);
*
*/

(function( $ ){

    $.fn.videoBG = function( selector, options ) {

        var options = {};
        if (typeof selector == "object") {
            options = $.extend({}, $.fn.videoBG.defaults, selector);
        }
        else if (!selector) {
            options = $.fn.videoBG.defaults;
        }
        else {
            return $(selector).videoBG(options);
        }

        var container = $(this);

        // check if elements available otherwise it will cause issues
        if (!container.length)
            return;

            // container to be at least relative
            if (container.css('position') == 'static' || !container.css('position'))
                container.css('position','relative');

                // we need a width
                if (options.width == 0)
                    options.width = container.width();

                    // we need a height
                    if (options.height == 0)
                        options.height = container.height();

                        // get the wrapper
                        var wrap = $.fn.videoBG.wrapper();
                        wrap.height(options.height)
                        .width(options.width);

                        // if is a text replacement
                        if (options.textReplacement) {

                            // force sizes
                            options.scale = true;

                            // set sizes and forcing text out
                            container.width(options.width)
                            .height(options.height)
                            .css('text-indent','-9999px');
                        }
                        else {

                            // set the wrapper above the video
                            wrap.css('z-index',options.zIndex+1);
                        }

                        // move the contents into the wrapper
                        wrap.html(container.clone(true));

                        // get the video
                        var video = $.fn.videoBG.video(options);

                        // if we are forcing width / height
                        if (options.scale) {

                            // overlay wrapper
                            wrap.height(options.height)
                            .width(options.width);

                            // video
                            video.height(options.height)
                            .width(options.width);
                        }

                        // add it all to the container
                        container.html(wrap);
                        container.append(video);

                        return video.find("video")[0];
                    }

                    // set to fullscreen
                    $.fn.videoBG.setFullscreen = function($el) {
                        var windowWidth = $(window).width(),
                        windowHeight = $(window).height();

                        $el.css('min-height',0).css('min-width',0);
                        $el.parent().width(windowWidth).height(windowHeight);
                        // if by width
                        if (windowWidth / windowHeight > $el.aspectRatio) {
                            $el.width(windowWidth).height('auto');
                            // shift the element up
                            var height = $el.height();
                            var shift = (height - windowHeight) / 2;
                            if (shift < 0) shift = 0;
                            $el.css("top",-shift);
                        } else {
                            $el.width('auto').height(windowHeight);
                            // shift the element left
                            var width = $el.width();
                            var shift = (width - windowWidth) / 2;
                            if (shift < 0) shift = 0;
                            $el.css("left",-shift);

                            // this is a hack mainly due to the iphone
                            if (shift === 0) {
                                var t = setTimeout(function() {
                                    $.fn.videoBG.setFullscreen($el);
                                },500);
                            }
                        }

                        $('body > .videoBG_wrapper').width(windowWidth).height(windowHeight);

                    }

                    // get the formatted video element
                    $.fn.videoBG.video = function(options) {

                        $('html, body').scrollTop(-1);

                        // video container
                        var $div = $('<div/>');
                        $div.addClass('videoBG')
                        .css('position',options.position)
                        .css('z-index',options.zIndex)
                        .css('top',0)
                        .css('left',0)
                        .css('height',options.height)
                        .css('width',options.width)
                        .css('opacity',options.opacity)
                        .css('overflow','hidden');

                        // video element
                        var $video = $('<video/>');
                        $video.css('position','absolute')
                        .css('z-index',options.zIndex)
                        .attr('poster',options.poster)
                        .css('top',0)
                        .css('left',0)
                        .css('min-width','100%')
                        .css('min-height','100%');

                        if (options.autoplay) {
                            $video.attr('autoplay',options.autoplay);
                        }

                        // if fullscreen
                        if (options.fullscreen) {
                            $video.bind('canplay',function() {
                                // set the aspect ratio
                                $video.aspectRatio = $video.width() / $video.height();
                                $.fn.videoBG.setFullscreen($video);
                            })

                            // listen out for screenresize
                            var resizeTimeout;
                            $(window).resize(function() {
                                clearTimeout(resizeTimeout);
                                resizeTimeout = setTimeout(function() {
                                    $.fn.videoBG.setFullscreen($video);
                                },100);
                            });
                            $.fn.videoBG.setFullscreen($video);
                        }


                        // video standard element
                        var v = $video[0];

                        // if meant to loop
                        if (options.loop) {
                            loops_left = options.loop;

                            // cant use the loop attribute as firefox doesnt support it
                            $video.bind('ended', function(){

                                // if we have some loops to throw
                                if (loops_left)
                                    // replay that bad boy
                                    v.play();

                                    // if not forever
                                    if (loops_left !== true)
                                        // one less loop
                                        loops_left--;
                                    });
                                }

                                // when can play, play
                                $video.bind('canplay', function(){

                                    if (options.autoplay)
                                        // replay that bad boy
                                        v.play();

                                    });


                                    // if supports video
                                    if ($.fn.videoBG.supportsVideo()) {

                                        // supports webm
                                        if ($.fn.videoBG.supportType('webm')){

                                            // play webm
                                            $video.attr('src',options.webm);
                                        }
                                        // supports mp4
                                        else if ($.fn.videoBG.supportType('mp4')) {

                                            // play mp4
                                            $video.attr('src',options.mp4);

                                            //	$video.html('<source src="'.options.mp4.'" />');

                                        }
                                        // throw ogv at it then
                                        else {

                                            // play ogv
                                            $video.attr('src',options.ogv);
                                        }

                                    }



                                    // image for those that dont support the video
                                    var $img = $('<img/>');
                                    $img.attr('src',options.poster)
                                    .css('position','absolute')
                                    .css('z-index',options.zIndex)
                                    .css('top',0)
                                    .css('left',0)
                                    .css('min-width','100%')
                                    .css('min-height','100%');

                                    // add the image to the video
                                    // if suuports video
                                    if ($.fn.videoBG.supportsVideo()) {
                                        // add the video to the wrapper
                                        $div.html($video);
                                    }

                                    // nope - whoa old skool
                                    else {

                                        // add the image instead
                                        $div.html($img);
                                    }

                                    // if text replacement
                                    if (options.textReplacement) {

                                        // force the heights and widths
                                        $div.css('min-height',1).css('min-width',1);
                                        $video.css('min-height',1).css('min-width',1);
                                        $img.css('min-height',1).css('min-width',1);

                                        $div.height(options.height).width(options.width);
                                        $video.height(options.height).width(options.width);
                                        $img.height(options.height).width(options.width);
                                    }

                                    if ($.fn.videoBG.supportsVideo()) {
                                        v.play();
                                    }
                                    return $div;
                                }

                                // check if suuports video
                                $.fn.videoBG.supportsVideo = function() {
                                    return (document.createElement('video').canPlayType);
                                }

                                // check which type is supported
                                $.fn.videoBG.supportType = function(str) {

                                    // if not at all supported
                                    if (!$.fn.videoBG.supportsVideo())
                                        return false;

                                        // create video
                                        var v = document.createElement('video');

                                        // check which?
                                        switch (str) {
                                            case 'webm' :
                                                return (v.canPlayType('video/webm; codecs="vp8, vorbis"'));
                                                break;
                                                case 'mp4' :
                                                    return (v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
                                                    break;
                                                    case 'ogv' :
                                                        return (v.canPlayType('video/ogg; codecs="theora, vorbis"'));
                                                        break;
                                                    }
                                                    // nope
                                                    return false;
                                                }

                                                // get the overlay wrapper
                                                $.fn.videoBG.wrapper = function() {
                                                    var $wrap = $('<div/>');
                                                    $wrap.addClass('videoBG_wrapper')
                                                    .css('position','absolute')
                                                    .css('top',0)
                                                    .css('left',0);
                                                    return $wrap;
                                                }

                                                // these are the defaults
                                                $.fn.videoBG.defaults = {
                                                    mp4:'',
                                                    ogv:'',
                                                    webm:'',
                                                    poster:'',
                                                    autoplay:true,
                                                    loop:true,
                                                    scale:false,
                                                    position:"absolute",
                                                    opacity:1,
                                                    textReplacement:false,
                                                    zIndex:0,
                                                    width:0,
                                                    height:0,
                                                    fullscreen:false,
                                                    imgFallback:true
                                                }

                                            })( jQuery );
