function createUnityInstance(t,n,l){function d(e,t){if(!d.aborted&&n.showBanner)return"error"==t&&(d.aborted=!0),n.showBanner(e,t);switch(t){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function r(e){var t=e.reason||e.error,n=t?t.toString():e.message||e.reason||"",r=t&&t.stack?t.stack.toString():"";(n+="\n"+(r=r.startsWith(n)?r.substring(n.length):r).trim())&&u.stackTraceRegExp&&u.stackTraceRegExp.test(n)&&b(n,e.filename||t&&(t.fileName||t.sourceURL)||"",e.lineno||t&&(t.lineNumber||t.line)||0)}function e(e,t,n){var r=e[t];void 0!==r&&r||(console.warn('Config option "'+t+'" is missing or empty. Falling back to default value: "'+n+'". Consider updating your WebGL template to include the missing config option.'),e[t]=n)}l=l||function(){};var o,u={canvas:t,webglContextAttributes:{preserveDrawingBuffer:!1,powerPreference:2},streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,t){e=window.setInterval(e,t);return this.intervals[e]=!0,e},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&-1!=e.indexOf("wasm streaming compile failed")&&(-1!=e.toLowerCase().indexOf("mime")?d('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+u.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):d('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+u.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return e},disabledCanvasEvents:["contextmenu","dragstart"]};for(o in e(n,"companyName","Unity"),e(n,"productName","WebGL Player"),e(n,"productVersion","1.0"),n)u[o]=n[o];u.streamingAssetsUrl=new URL(u.streamingAssetsUrl,document.URL).href;var i=u.disabledCanvasEvents.slice();function a(e){e.preventDefault()}i.forEach(function(e){t.addEventListener(e,a)}),window.addEventListener("error",r),window.addEventListener("unhandledrejection",r);var s="",f="";function c(e){document.webkitCurrentFullScreenElement===t?t.style.width&&(s=t.style.width,f=t.style.height,t.style.width="100%",t.style.height="100%"):s&&(t.style.width=s,t.style.height=f,f=s="")}document.addEventListener("webkitfullscreenchange",c),u.deinitializers.push(function(){for(var e in u.disableAccessToMediaDevices(),i.forEach(function(e){t.removeEventListener(e,a)}),window.removeEventListener("error",r),window.removeEventListener("unhandledrejection",r),document.removeEventListener("webkitfullscreenchange",c),u.intervals)window.clearInterval(e);u.intervals={}}),u.QuitCleanup=function(){for(var e=0;e<u.deinitializers.length;e++)u.deinitializers[e]();u.deinitializers=[],"function"==typeof u.onQuit&&u.onQuit()};var h={Module:u,SetFullscreen:function(){if(u.SetFullscreen)return u.SetFullscreen.apply(u,arguments);u.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){if(u.SendMessage)return u.SendMessage.apply(u,arguments);u.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(e,t){u.shouldQuit=!0,u.onQuit=e})},GetMemoryInfo:function(){var e=u._getMemInfo();return{totalWASMHeapSize:u.HEAPU32[e>>2],usedWASMHeapSize:u.HEAPU32[1+(e>>2)],totalJSHeapSize:u.HEAPF64[1+(e>>3)],usedJSHeapSize:u.HEAPF64[2+(e>>3)]}}};function b(e,t,n){-1==e.indexOf("fullscreen error")&&(u.startupErrorHandler?u.startupErrorHandler(e,t,n):u.errorHandler&&u.errorHandler(e,t,n)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),b.didShowErrorMessage||(-1!=(e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e).indexOf("DISABLE_EXCEPTION_CATCHING")?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":-1!=e.indexOf("Cannot enlarge memory arrays")?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":-1==e.indexOf("Invalid array buffer length")&&-1==e.indexOf("Invalid typed array length")&&-1==e.indexOf("out of memory")&&-1==e.indexOf("could not allocate memory")||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),b.didShowErrorMessage=!0)))}function g(e,t){if("symbolsUrl"!=e){var n=u.downloadProgress[e],r=(n=n||(u.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof t||"progress"!=t.type&&"load"!=t.type||(n.started||(n.started=!0,n.lengthComputable=t.lengthComputable),n.total=t.total,n.loaded=t.loaded,"load"==t.type&&(n.finished=!0)),0),o=0,i=0,a=0,s=0;for(e in u.downloadProgress){if(!(n=u.downloadProgress[e]).started)return;i++,n.lengthComputable?(r+=n.loaded,o+=n.total,a++):n.finished||s++}l(.9*(i?(i-s-(o?a*(o-r)/o:0))/i:0))}}u.SystemInfo=function(){var e,t,n,r,o=navigator.userAgent+" ",i=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]];function a(e,t,n){return(e=RegExp(e,"i").exec(t))&&e[n]}for(var s=0;s<i.length;++s)if(t=a(i[s][0]+"[/ ](.*?)[ \\)]",o,1)){e=i[s][1];break}"Safari"==e&&(t=a("Version/(.*?) ",o,1)),"Internet Explorer"==e&&(t=a("rv:(.*?)\\)? ",o,1)||t);for(var l=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_\\.]+)","MacOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],d=0;d<l.length;++d)if(f=a(l[d][0],o,1)){n=l[d][1],f=f.replace(/_/g,".");break}var f={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"}[f]||f,u=((u=document.createElement("canvas"))&&(gl=u.getContext("webgl2"),glVersion=gl?2:0,gl||(gl=u&&u.getContext("webgl"))&&(glVersion=1),gl&&(r=gl.getExtension("WEBGL_debug_renderer_info")&&gl.getParameter(37446)||gl.getParameter(7937))),"undefined"!=typeof SharedArrayBuffer),c="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile;return{width:screen.width,height:screen.height,userAgent:o.trim(),browser:e||"Unknown browser",browserVersion:t||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:n||"Unknown OS",osVersion:f||"Unknown OS Version",gpu:r||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:glVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:u,hasWasm:c,hasWasmThreads:!1}}(),u.abortHandler=function(e){return b(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),u.readBodyWithProgress=function(i,a,s){var e=i.body?i.body.getReader():void 0,l=void 0!==i.headers.get("Content-Length"),d=function(e,t){if(!t)return 0;var t=e.headers.get("Content-Encoding"),n=parseInt(e.headers.get("Content-Length"));switch(t){case"br":return Math.round(5*n);case"gzip":return Math.round(4*n);default:return n}}(i,l),f=new Uint8Array(d),u=[],c=0,h=0;return l||console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),function o(){return void 0===e?i.arrayBuffer().then(function(e){var t=new Uint8Array(e);return a({type:"progress",response:i,total:e.length,loaded:0,lengthComputable:l,chunk:s?t:null}),t}):e.read().then(function(e){if(e.done){if(c===d)return f;if(c<d)return f.slice(0,c);for(var t=new Uint8Array(c),n=(t.set(f,0),h),r=0;r<u.length;++r)t.set(u[r],n),n+=u[r].length;return t}return c+e.value.length<=f.length?(f.set(e.value,c),h=c+e.value.length):u.push(e.value),c+=e.value.length,a({type:"progress",response:i,total:Math.max(d,c),loaded:c,lengthComputable:l,chunk:s?e.value:null}),o()})}().then(function(e){return a({type:"load",response:i,total:e.length,loaded:e.length,lengthComputable:l,chunk:null}),i.parsedBody=e,i})},u.fetchWithProgress=function(e,t){var n=function(){};return t&&t.onProgress&&(n=t.onProgress),fetch(e,t).then(function(e){return u.readBodyWithProgress(e,n,t.enableStreamingDownload)})};var m={gzip:{require:function(e){var t,n={"inflate.js":function(e,t,n){"use strict";var u=e("./zlib/inflate"),c=e("./utils/common"),h=e("./utils/strings"),b=e("./zlib/constants"),r=e("./zlib/messages"),o=e("./zlib/zstream"),i=e("./zlib/gzheader"),g=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;if(t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0,(e=u.inflateInit2(this.strm,t.windowBits))!==b.Z_OK)throw new Error(r[e]);this.header=new i,u.inflateGetHeader(this.strm,this.header)}function s(e,t){if((t=new a(t)).push(e,!0),t.err)throw t.msg||r[t.err];return t.result}a.prototype.push=function(e,t){var n,r,o,i,a,s=this.strm,l=this.options.chunkSize,d=this.options.dictionary,f=!1;if(this.ended)return!1;r=t===~~t?t:!0===t?b.Z_FINISH:b.Z_NO_FLUSH,"string"==typeof e?s.input=h.binstring2buf(e):"[object ArrayBuffer]"===g.call(e)?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new c.Buf8(l),s.next_out=0,s.avail_out=l),(n=u.inflate(s,b.Z_NO_FLUSH))===b.Z_NEED_DICT&&d&&(a="string"==typeof d?h.string2buf(d):"[object ArrayBuffer]"===g.call(d)?new Uint8Array(d):d,n=u.inflateSetDictionary(this.strm,a)),n===b.Z_BUF_ERROR&&!0===f&&(n=b.Z_OK,f=!1),n!==b.Z_STREAM_END&&n!==b.Z_OK)return this.onEnd(n),!(this.ended=!0)}while(!s.next_out||0!==s.avail_out&&n!==b.Z_STREAM_END&&(0!==s.avail_in||r!==b.Z_FINISH&&r!==b.Z_SYNC_FLUSH)||("string"===this.options.to?(a=h.utf8border(s.output,s.next_out),o=s.next_out-a,i=h.buf2string(s.output,a),s.next_out=o,s.avail_out=l-o,o&&c.arraySet(s.output,s.output,a,o,0),this.onData(i)):this.onData(c.shrinkBuf(s.output,s.next_out))),0===s.avail_in&&0===s.avail_out&&(f=!0),(0<s.avail_in||0===s.avail_out)&&n!==b.Z_STREAM_END);return(r=n===b.Z_STREAM_END?b.Z_FINISH:r)===b.Z_FINISH?(n=u.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===b.Z_OK):r!==b.Z_SYNC_FLUSH||(this.onEnd(b.Z_OK),!(s.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===b.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=a,n.inflate=s,n.inflateRaw=function(e,t){return(t=t||{}).raw=!0,s(e,t)},n.ungzip=s},"utils/common.js":function(e,t,n){"use strict";var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array,o=(n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){if(e.length!==t){if(e.subarray)return e.subarray(0,t);e.length=t}return e},{arraySet:function(e,t,n,r,o){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),o);else for(var i=0;i<r;i++)e[o+i]=t[n+i]},flattenChunks:function(e){for(var t,n,r,o=0,i=0,a=e.length;i<a;i++)o+=e[i].length;for(r=new Uint8Array(o),i=t=0,a=e.length;i<a;i++)n=e[i],r.set(n,t),t+=n.length;return r}}),i={arraySet:function(e,t,n,r,o){for(var i=0;i<r;i++)e[o+i]=t[n+i]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,o)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,i))},n.setTyped(r)},"utils/strings.js":function(e,t,n){"use strict";var l=e("./common"),o=!0,i=!0;try{String.fromCharCode.apply(null,[0])}catch(e){o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){i=!1}for(var d=new l.Buf8(256),r=0;r<256;r++)d[r]=252<=r?6:248<=r?5:240<=r?4:224<=r?3:192<=r?2:1;function f(e,t){if(t<65537&&(e.subarray&&i||!e.subarray&&o))return String.fromCharCode.apply(null,l.shrinkBuf(e,t));for(var n="",r=0;r<t;r++)n+=String.fromCharCode(e[r]);return n}d[254]=d[254]=1,n.string2buf=function(e){for(var t,n,r,o,i=e.length,a=0,s=0;s<i;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<i&&56320==(64512&(r=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(r-56320),s++),a+=n<128?1:n<2048?2:n<65536?3:4;for(t=new l.Buf8(a),s=o=0;o<a;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<i&&56320==(64512&(r=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(r-56320),s++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return f(e,e.length)},n.binstring2buf=function(e){for(var t=new l.Buf8(e.length),n=0,r=t.length;n<r;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){for(var n,r,o=t||e.length,i=new Array(2*o),a=0,s=0;s<o;)if((n=e[s++])<128)i[a++]=n;else if(4<(r=d[n]))i[a++]=65533,s+=r-1;else{for(n&=2===r?31:3===r?15:7;1<r&&s<o;)n=n<<6|63&e[s++],r--;1<r?i[a++]=65533:n<65536?i[a++]=n:(n-=65536,i[a++]=55296|n>>10&1023,i[a++]=56320|1023&n)}return f(i,a)},n.utf8border=function(e,t){for(var n=(t=(t=t||e.length)>e.length?e.length:t)-1;0<=n&&128==(192&e[n]);)n--;return!(n<0)&&0!==n&&n+d[e[n]]>t?n:t}},"zlib/inflate.js":function(e,t,n){"use strict";var T=e("../utils/common"),R=e("./adler32"),O=e("./crc32"),I=e("./inffast"),P=e("./inftrees"),z=0,F=-2,N=1,r=852,o=592;function H(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function i(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new T.Buf16(320),this.work=new T.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=N,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new T.Buf32(r),t.distcode=t.distdyn=new T.Buf32(o),t.sane=1,t.back=-1,z):F}function s(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):F}function l(e,t){var n,r;return!e||!e.state||(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t))?F:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,s(e))}function d(e,t){var n;return e?(n=new i,(e.state=n).window=null,(n=l(e,t))!==z&&(e.state=null),n):F}var Z,D,M=!0;function W(e,t,n,r){var o;return null===(e=e.state).window&&(e.wsize=1<<e.wbits,e.wnext=0,e.whave=0,e.window=new T.Buf8(e.wsize)),r>=e.wsize?(T.arraySet(e.window,t,n-e.wsize,e.wsize,0),e.wnext=0,e.whave=e.wsize):(r<(o=e.wsize-e.wnext)&&(o=r),T.arraySet(e.window,t,n-r,o,e.wnext),(r-=o)?(T.arraySet(e.window,t,n-r,r,0),e.wnext=r,e.whave=e.wsize):(e.wnext+=o,e.wnext===e.wsize&&(e.wnext=0),e.whave<e.wsize&&(e.whave+=o))),0}n.inflateReset=s,n.inflateReset2=l,n.inflateResetKeep=a,n.inflateInit=function(e){return d(e,15)},n.inflateInit2=d,n.inflate=function(e,t){var n,r,o,i,a,s,l,d,f,u,c,h,b,g,m,p,w,v,k,y,_,x,S,E,C=0,U=new T.Buf8(4),B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return F;12===(n=e.state).mode&&(n.mode=13),a=e.next_out,o=e.output,l=e.avail_out,i=e.next_in,r=e.input,s=e.avail_in,d=n.hold,f=n.bits,u=s,c=l,x=z;e:for(;;)switch(n.mode){case N:if(0===n.wrap)n.mode=13;else{for(;f<16;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if(2&n.wrap&&35615===d)U[n.check=0]=255&d,U[1]=d>>>8&255,n.check=O(n.check,U,2,0),f=d=0,n.mode=2;else if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&d)<<8)+(d>>8))%31)e.msg="incorrect header check",n.mode=30;else if(8!=(15&d))e.msg="unknown compression method",n.mode=30;else{if(f-=4,_=8+(15&(d>>>=4)),0===n.wbits)n.wbits=_;else if(_>n.wbits){e.msg="invalid window size",n.mode=30;break}n.dmax=1<<_,e.adler=n.check=1,n.mode=512&d?10:12,f=d=0}}break;case 2:for(;f<16;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if(n.flags=d,8!=(255&n.flags)){e.msg="unknown compression method",n.mode=30;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=30;break}n.head&&(n.head.text=d>>8&1),512&n.flags&&(U[0]=255&d,U[1]=d>>>8&255,n.check=O(n.check,U,2,0)),f=d=0,n.mode=3;case 3:for(;f<32;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}n.head&&(n.head.time=d),512&n.flags&&(U[0]=255&d,U[1]=d>>>8&255,U[2]=d>>>16&255,U[3]=d>>>24&255,n.check=O(n.check,U,4,0)),f=d=0,n.mode=4;case 4:for(;f<16;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}n.head&&(n.head.xflags=255&d,n.head.os=d>>8),512&n.flags&&(U[0]=255&d,U[1]=d>>>8&255,n.check=O(n.check,U,2,0)),f=d=0,n.mode=5;case 5:if(1024&n.flags){for(;f<16;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}n.length=d,n.head&&(n.head.extra_len=d),512&n.flags&&(U[0]=255&d,U[1]=d>>>8&255,n.check=O(n.check,U,2,0)),f=d=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&((h=s<(h=n.length)?s:h)&&(n.head&&(_=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),T.arraySet(n.head.extra,r,i,h,_)),512&n.flags&&(n.check=O(n.check,r,h,i)),s-=h,i+=h,n.length-=h),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===s)break e;for(h=0;_=r[i+h++],n.head&&_&&n.length<65536&&(n.head.name+=String.fromCharCode(_)),_&&h<s;);if(512&n.flags&&(n.check=O(n.check,r,h,i)),s-=h,i+=h,_)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===s)break e;for(h=0;_=r[i+h++],n.head&&_&&n.length<65536&&(n.head.comment+=String.fromCharCode(_)),_&&h<s;);if(512&n.flags&&(n.check=O(n.check,r,h,i)),s-=h,i+=h,_)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;f<16;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if(d!==(65535&n.check)){e.msg="header crc mismatch",n.mode=30;break}f=d=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;f<32;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}e.adler=n.check=H(d),f=d=0,n.mode=11;case 11:if(0===n.havedict)return e.next_out=a,e.avail_out=l,e.next_in=i,e.avail_in=s,n.hold=d,n.bits=f,2;e.adler=n.check=1,n.mode=12;case 12:if(5===t||6===t)break e;case 13:if(n.last)d>>>=7&f,f-=7&f,n.mode=27;else{for(;f<3;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}switch(n.last=1&d,--f,3&(d>>>=1)){case 0:n.mode=14;break;case 1:var A,A=L=void 0,L=n;if(M){for(Z=new T.Buf32(512),D=new T.Buf32(32),A=0;A<144;)L.lens[A++]=8;for(;A<256;)L.lens[A++]=9;for(;A<280;)L.lens[A++]=7;for(;A<288;)L.lens[A++]=8;for(P(1,L.lens,0,288,Z,0,L.work,{bits:9}),A=0;A<32;)L.lens[A++]=5;P(2,L.lens,0,32,D,0,L.work,{bits:5}),M=!1}if(L.lencode=Z,L.lenbits=9,L.distcode=D,L.distbits=5,n.mode=20,6!==t)break;d>>>=2,f-=2;break e;case 2:n.mode=17;break;case 3:e.msg="invalid block type",n.mode=30}d>>>=2,f-=2}break;case 14:for(d>>>=7&f,f-=7&f;f<32;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if((65535&d)!=(d>>>16^65535)){e.msg="invalid stored block lengths",n.mode=30;break}if(n.length=65535&d,f=d=0,n.mode=15,6===t)break e;case 15:n.mode=16;case 16:if(h=n.length){if(0===(h=l<(h=s<h?s:h)?l:h))break e;T.arraySet(o,r,i,h,a),s-=h,i+=h,l-=h,a+=h,n.length-=h}else n.mode=12;break;case 17:for(;f<14;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if(n.nlen=257+(31&d),d>>>=5,f-=5,n.ndist=1+(31&d),d>>>=5,f-=5,n.ncode=4+(15&d),d>>>=4,f-=4,286<n.nlen||30<n.ndist){e.msg="too many length or distance symbols",n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;f<3;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}n.lens[B[n.have++]]=7&d,d>>>=3,f-=3}for(;n.have<19;)n.lens[B[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,S={bits:n.lenbits},x=P(0,n.lens,0,19,n.lencode,0,n.work,S),n.lenbits=S.bits,x){e.msg="invalid code lengths set",n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;p=(C=n.lencode[d&(1<<n.lenbits)-1])>>>16&255,w=65535&C,!((m=C>>>24)<=f);){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if(w<16)d>>>=m,f-=m,n.lens[n.have++]=w;else{if(16===w){for(E=m+2;f<E;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if(d>>>=m,f-=m,0===n.have){e.msg="invalid bit length repeat",n.mode=30;break}_=n.lens[n.have-1],h=3+(3&d),d>>>=2,f-=2}else if(17===w){for(E=m+3;f<E;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}_=0,h=3+(7&(d>>>=m)),d>>>=3,f=f-m-3}else{for(E=m+7;f<E;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}_=0,h=11+(127&(d>>>=m)),d>>>=7,f=f-m-7}if(n.have+h>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=30;break}for(;h--;)n.lens[n.have++]=_}}if(30===n.mode)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=30;break}if(n.lenbits=9,S={bits:n.lenbits},x=P(1,n.lens,0,n.nlen,n.lencode,0,n.work,S),n.lenbits=S.bits,x){e.msg="invalid literal/lengths set",n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,S={bits:n.distbits},x=P(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,S),n.distbits=S.bits,x){e.msg="invalid distances set",n.mode=30;break}if(n.mode=20,6===t)break e;case 20:n.mode=21;case 21:if(6<=s&&258<=l){e.next_out=a,e.avail_out=l,e.next_in=i,e.avail_in=s,n.hold=d,n.bits=f,I(e,c),a=e.next_out,o=e.output,l=e.avail_out,i=e.next_in,r=e.input,s=e.avail_in,d=n.hold,f=n.bits,12===n.mode&&(n.back=-1);break}for(n.back=0;p=(C=n.lencode[d&(1<<n.lenbits)-1])>>>16&255,w=65535&C,!((m=C>>>24)<=f);){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if(p&&0==(240&p)){for(v=m,k=p,y=w;p=(C=n.lencode[y+((d&(1<<v+k)-1)>>v)])>>>16&255,w=65535&C,!(v+(m=C>>>24)<=f);){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}d>>>=v,f-=v,n.back+=v}if(d>>>=m,f-=m,n.back+=m,n.length=w,0===p){n.mode=26;break}if(32&p){n.back=-1,n.mode=12;break}if(64&p){e.msg="invalid literal/length code",n.mode=30;break}n.extra=15&p,n.mode=22;case 22:if(n.extra){for(E=n.extra;f<E;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}n.length+=d&(1<<n.extra)-1,d>>>=n.extra,f-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;p=(C=n.distcode[d&(1<<n.distbits)-1])>>>16&255,w=65535&C,!((m=C>>>24)<=f);){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if(0==(240&p)){for(v=m,k=p,y=w;p=(C=n.distcode[y+((d&(1<<v+k)-1)>>v)])>>>16&255,w=65535&C,!(v+(m=C>>>24)<=f);){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}d>>>=v,f-=v,n.back+=v}if(d>>>=m,f-=m,n.back+=m,64&p){e.msg="invalid distance code",n.mode=30;break}n.offset=w,n.extra=15&p,n.mode=24;case 24:if(n.extra){for(E=n.extra;f<E;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}n.offset+=d&(1<<n.extra)-1,d>>>=n.extra,f-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=30;break}n.mode=25;case 25:if(0===l)break e;if(n.offset>(h=c-l)){if((h=n.offset-h)>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=30;break}b=h>n.wnext?(h-=n.wnext,n.wsize-h):n.wnext-h,h>n.length&&(h=n.length),g=n.window}else g=o,b=a-n.offset,h=n.length;for(l-=h=l<h?l:h,n.length-=h;o[a++]=g[b++],--h;);0===n.length&&(n.mode=21);break;case 26:if(0===l)break e;o[a++]=n.length,l--,n.mode=21;break;case 27:if(n.wrap){for(;f<32;){if(0===s)break e;s--,d|=r[i++]<<f,f+=8}if(c-=l,e.total_out+=c,n.total+=c,c&&(e.adler=n.check=(n.flags?O:R)(n.check,o,c,a-c)),c=l,(n.flags?d:H(d))!==n.check){e.msg="incorrect data check",n.mode=30;break}f=d=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;f<32;){if(0===s)break e;s--,d+=r[i++]<<f,f+=8}if(d!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=30;break}f=d=0}n.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;default:return F}return e.next_out=a,e.avail_out=l,e.next_in=i,e.avail_in=s,n.hold=d,n.bits=f,(n.wsize||c!==e.avail_out&&n.mode<30&&(n.mode<27||4!==t))&&W(e,e.output,e.next_out,c-e.avail_out)?(n.mode=31,-4):(u-=e.avail_in,c-=e.avail_out,e.total_in+=u,e.total_out+=c,n.total+=c,n.wrap&&c&&(e.adler=n.check=(n.flags?O:R)(n.check,o,c,e.next_out-c)),e.data_type=n.bits+(n.last?64:0)+(12===n.mode?128:0)+(20===n.mode||15===n.mode?256:0),(0==u&&0===c||4===t)&&x===z?-5:x)},n.inflateEnd=function(e){var t;return e&&e.state?((t=e.state).window&&(t.window=null),e.state=null,z):F},n.inflateGetHeader=function(e,t){return e&&e.state&&0!=(2&(e=e.state).wrap)?((e.head=t).done=!1,z):F},n.inflateSetDictionary=function(e,t){var n,r=t.length;return!e||!e.state||0!==(n=e.state).wrap&&11!==n.mode?F:11===n.mode&&R(1,t,r,0)!==n.check?-3:W(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,z)},n.inflateInfo="pako inflate (from Nodeca project)"},"zlib/constants.js":function(e,t,n){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},"zlib/messages.js":function(e,t,n){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},"zlib/zstream.js":function(e,t,n){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},"zlib/gzheader.js":function(e,t,n){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},"zlib/adler32.js":function(e,t,n){"use strict";t.exports=function(e,t,n,r){for(var o=65535&e|0,i=e>>>16&65535|0,a=0;0!==n;){for(n-=a=2e3<n?2e3:n;i=i+(o=o+t[r++]|0)|0,--a;);o%=65521,i%=65521}return o|i<<16|0}},"zlib/crc32.js":function(e,t,n){"use strict";var s=function(){for(var e=[],t=0;t<256;t++){for(var n=t,r=0;r<8;r++)n=1&n?3988292384^n>>>1:n>>>1;e[t]=n}return e}();t.exports=function(e,t,n,r){var o=s,i=r+n;e^=-1;for(var a=r;a<i;a++)e=e>>>8^o[255&(e^t[a])];return-1^e}},"zlib/inffast.js":function(e,t,n){"use strict";t.exports=function(e,t){var n,r,o,i,a,s,l=e.state,d=e.next_in,f=e.input,u=d+(e.avail_in-5),c=e.next_out,h=e.output,b=c-(t-e.avail_out),g=c+(e.avail_out-257),m=l.dmax,p=l.wsize,w=l.whave,v=l.wnext,k=l.window,y=l.hold,_=l.bits,x=l.lencode,S=l.distcode,E=(1<<l.lenbits)-1,C=(1<<l.distbits)-1;e:do{for(_<15&&(y+=f[d++]<<_,_+=8,y+=f[d++]<<_,_+=8),n=x[y&E];;){if(y>>>=r=n>>>24,_-=r,0==(r=n>>>16&255))h[c++]=65535&n;else{if(!(16&r)){if(0==(64&r)){n=x[(65535&n)+(y&(1<<r)-1)];continue}if(32&r){l.mode=12;break e}e.msg="invalid literal/length code",l.mode=30;break e}for(o=65535&n,(r&=15)&&(_<r&&(y+=f[d++]<<_,_+=8),o+=y&(1<<r)-1,y>>>=r,_-=r),_<15&&(y+=f[d++]<<_,_+=8,y+=f[d++]<<_,_+=8),n=S[y&C];;){if(y>>>=r=n>>>24,_-=r,!(16&(r=n>>>16&255))){if(0==(64&r)){n=S[(65535&n)+(y&(1<<r)-1)];continue}e.msg="invalid distance code",l.mode=30;break e}if(i=65535&n,_<(r&=15)&&(y+=f[d++]<<_,(_+=8)<r&&(y+=f[d++]<<_,_+=8)),m<(i+=y&(1<<r)-1)){e.msg="invalid distance too far back",l.mode=30;break e}if(y>>>=r,_-=r,(r=c-b)<i){if(w<(r=i-r)&&l.sane){e.msg="invalid distance too far back",l.mode=30;break e}if(s=k,(a=0)===v){if(a+=p-r,r<o){for(o-=r;h[c++]=k[a++],--r;);a=c-i,s=h}}else if(v<r){if(a+=p+v-r,(r-=v)<o){for(o-=r;h[c++]=k[a++],--r;);if(a=0,v<o){for(o-=r=v;h[c++]=k[a++],--r;);a=c-i,s=h}}}else if(a+=v-r,r<o){for(o-=r;h[c++]=k[a++],--r;);a=c-i,s=h}for(;2<o;)h[c++]=s[a++],h[c++]=s[a++],h[c++]=s[a++],o-=3;o&&(h[c++]=s[a++],1<o&&(h[c++]=s[a++]))}else{for(a=c-i;h[c++]=h[a++],h[c++]=h[a++],h[c++]=h[a++],2<(o-=3););o&&(h[c++]=h[a++],1<o&&(h[c++]=h[a++]))}break}}break}}while(d<u&&c<g);y&=(1<<(_-=(o=_>>3)<<3))-1,e.next_in=d-=o,e.next_out=c,e.avail_in=d<u?u-d+5:5-(d-u),e.avail_out=c<g?g-c+257:257-(c-g),l.hold=y,l.bits=_}},"zlib/inftrees.js":function(e,t,n){"use strict";var I=e("../utils/common"),P=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],z=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],F=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],N=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,r,o,i,a,s){for(var l,d,f,u,c,h,b,g,m,p=s.bits,w=0,v=0,k=0,y=0,_=0,x=0,S=0,E=0,C=0,U=0,B=null,A=0,L=new I.Buf16(16),T=new I.Buf16(16),R=null,O=0,w=0;w<=15;w++)L[w]=0;for(v=0;v<r;v++)L[t[n+v]]++;for(_=p,y=15;1<=y&&0===L[y];y--);if(y<_&&(_=y),0===y)o[i++]=20971520,o[i++]=20971520,s.bits=1;else{for(k=1;k<y&&0===L[k];k++);for(_<k&&(_=k),w=E=1;w<=15;w++)if((E=(E<<=1)-L[w])<0)return-1;if(0<E&&(0===e||1!==y))return-1;for(T[1]=0,w=1;w<15;w++)T[w+1]=T[w]+L[w];for(v=0;v<r;v++)0!==t[n+v]&&(a[T[t[n+v]]++]=v);if(h=0===e?(B=R=a,19):1===e?(B=P,A-=257,R=z,O-=257,256):(B=F,R=N,-1),w=k,c=i,S=v=U=0,f=-1,u=(C=1<<(x=_))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(m=a[v]<h?(g=0,a[v]):a[v]>h?(g=R[O+a[v]],B[A+a[v]]):(g=96,0),l=1<<(b=w-S),k=d=1<<x;o[c+(U>>S)+(d-=l)]=b<<24|g<<16|m|0,0!==d;);for(l=1<<w-1;U&l;)l>>=1;if(U=0!==l?(U&l-1)+l:0,v++,0==--L[w]){if(w===y)break;w=t[n+a[v]]}if(_<w&&(U&u)!==f){for(c+=k,E=1<<(x=w-(S=0===S?_:S));x+S<y&&!((E-=L[x+S])<=0);)x++,E<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;o[f=U&u]=_<<24|x<<16|c-i|0}}0!==U&&(o[c+U]=w-S<<24|64<<16|0),s.bits=_}return 0}}};for(t in n)n[t].folder=t.substring(0,t.lastIndexOf("/")+1);function r(e,t){var n=t.match(/^\//)?null:e?t.match(/^\.\.?\//)?o(e.folder+t):i(e,t):o(t);if(n)return n.exports||(n.parent=e,n(r.bind(null,n),n,n.exports={})),n.exports;throw"module not found: "+t}var o=function(e){var t=[];return(e=e.split("/").every(function(e){return".."==e?t.pop():"."==e||""==e||t.push(e)})?t.join("/"):null)?n[e]||n[e+".js"]||n[e+"/index.js"]:null},i=function(e,t){return e?o(e.folder+"node_modules/"+t)||i(e.parent,t):null};return r(null,e)},decompress:function(e){this.exports||(this.exports=this.require("inflate.js"));try{return this.exports.inflate(e)}catch(e){}},hasUnityMarker:function(e){var t=10,n="UnityWeb Compressed Content (gzip)";if(t>e.length||31!=e[0]||139!=e[1])return!1;var r=e[3];if(4&r){if(t+2>e.length)return!1;if((t+=2+e[t]+(e[t+1]<<8))>e.length)return!1}if(8&r){for(;t<e.length&&e[t];)t++;if(t+1>e.length)return!1;t++}return 16&r&&String.fromCharCode.apply(null,e.subarray(t,t+n.length+1))==n+"\0"}}};function p(n){g(n);var e=u.fetchWithProgress,t=u[n],t=/file:\/\//.exec(t)?"same-origin":void 0;return e(u[n],{method:"GET",companyName:u.companyName,productName:u.productName,productVersion:u.productVersion,control:"no-store",mode:t,onProgress:function(e){g(n,e)}}).then(function(e){return a=e.parsedBody,s=u[n],new Promise(function(e,t){try{for(var n in m){var r,o,i;if(m[n].hasUnityMarker(a))return s&&console.log('You can reduce startup time if you configure your web server to add "Content-Encoding: '+n+'" response header when serving "'+s+'" file.'),(r=m[n]).worker||(o=URL.createObjectURL(new Blob(["this.require = ",r.require.toString(),"; this.decompress = ",r.decompress.toString(),"; this.onmessage = ",function(e){e={id:e.data.id,decompressed:this.decompress(e.data.compressed)};postMessage(e,e.decompressed?[e.decompressed.buffer]:[])}.toString(),"; postMessage({ ready: true });"],{type:"application/javascript"})),r.worker=new Worker(o),r.worker.onmessage=function(e){e.data.ready?URL.revokeObjectURL(o):(this.callbacks[e.data.id](e.data.decompressed),delete this.callbacks[e.data.id])},r.worker.callbacks={},r.worker.nextCallbackId=0),i=r.worker.nextCallbackId++,r.worker.callbacks[i]=e,void r.worker.postMessage({id:i,compressed:a},[a.buffer])}e(a)}catch(e){t(e)}});var a,s}).catch(function(e){var t="Failed to download file "+u[n];"file:"==location.protocol?d(t+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.","error"):console.error(t)})}function w(){Promise.all([p("frameworkUrl").then(function(e){var s=URL.createObjectURL(new Blob([e],{type:"application/javascript"}));return new Promise(function(i,e){var a=document.createElement("script");a.src=s,a.onload=function(){if("undefined"==typeof unityFramework||!unityFramework){var e,t=[["br","br"],["gz","gzip"]];for(e in t){var n,r=t[e];if(u.frameworkUrl.endsWith("."+r[0]))return n="Unable to parse "+u.frameworkUrl+"!","file:"==location.protocol?void d(n+" Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.","error"):(n+=' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: '+r[1]+'" present. Check browser Console and Devtools Network tab to debug.',"br"==r[0]&&"http:"==location.protocol&&(r=-1!=["localhost","127.0.0.1"].indexOf(location.hostname)?"":"Migrate your server to use HTTPS.",n=/Firefox/.test(navigator.userAgent)?"Unable to parse "+u.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. '+r+' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.':"Unable to parse "+u.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'),void d(n,"error"))}d("Unable to parse "+u.frameworkUrl+"! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)","error")}var o=unityFramework;unityFramework=null,a.onload=null,URL.revokeObjectURL(s),i(o)},a.onerror=function(e){d("Unable to load file "+u.frameworkUrl+"! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)","error")},document.body.appendChild(a),u.deinitializers.push(function(){document.body.removeChild(a)})})}),p("codeUrl")]).then(function(e){u.wasmBinary=e[1],e[0](u)});var e=p("dataUrl");u.preRun.push(function(){u.addRunDependency("dataUrl"),e.then(function(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=0,r="UnityWebData1.0\0";if(!String.fromCharCode.apply(null,e.subarray(n,n+r.length))==r)throw"unknown data format";var o=t.getUint32(n+=r.length,!0);for(n+=4;n<o;){var i=t.getUint32(n,!0),a=(n+=4,t.getUint32(n,!0)),s=(n+=4,t.getUint32(n,!0)),l=(n+=4,String.fromCharCode.apply(null,e.subarray(n,n+s)));n+=s;for(var d=0,f=l.indexOf("/",d)+1;0<f;d=f,f=l.indexOf("/",d)+1)u.FS_createPath(l.substring(0,d),l.substring(d,f-1),!0,!0);u.FS_createDataFile(l,null,e.subarray(i,i+a),!0,!0,!0)}u.removeRunDependency("dataUrl")})})}return new Promise(function(e,t){u.SystemInfo.hasWebGL?u.SystemInfo.hasWasm?(1==u.SystemInfo.hasWebGL&&u.print('Warning: Your browser does not support "WebGL 2" Graphics API, switching to "WebGL 1"'),u.startupErrorHandler=t,l(0),u.postRun.push(function(){l(1),delete u.startupErrorHandler,e(h)}),w()):t("Your browser does not support WebAssembly."):t("Your browser does not support WebGL.")})}