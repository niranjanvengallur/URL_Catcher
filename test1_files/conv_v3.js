var _bright3=new Object({C_NAME:"BE_CLA3",BE_URL:"edge.bredg.com/brightedge3.php",BE_SURL:"edge.bredg.com/brightedge3.php",TIMEOUT:6*31*24*60*60*1000,S_TIMEOUT:30*60*1000,VERSION:"3.6",_initialize:function(a){_bright3.id=a;_bright3.domain="";_bright3.path="";_bright3.goal="";_bright3.goalvalue="";_bright3.pagetype="";_bright3.customMetricList=[];_bright3.customDimensionList=[];_bright3.linkerEnabled=false;_bright3.locationOverride="";_bright3.referrerOverride="";_bright3.maxUrlLength=200000;if(this.getBrowserName()=="IE"){_bright3.maxUrlLength=2000}return _bright3},_setPageURL:function(a){_bright3.locationOverride=a},_setPageReferrer:function(a){_bright3.referrerOverride=a},_setTimeout:function(a){_bright3.TIMEOUT=a},_setSessionTimeout:function(a){_bright3.S_TIMEOUT=a},_setDomain:function(a){_bright3.domain=a},_setDomainPath:function(a){_bright3.path=a},_setCustomDimensionValue:function(a,b){if(a>=_bright3.customDimensionList.length){_bright3.customDimensionList.push(null)}_bright3.customDimensionList[a]=b},_setCustomMetricValue:function(a,b){if(a>=_bright3.customMetricList.length){_bright3.customMetricList.push(null)}_bright3.customMetricList[a]=b},_copyDomainPath:function(b){var a=this.getCookie(_bright3.C_NAME);if(a.length>0){this.setCookie(_bright3.C_NAME,a,_bright3.TIMEOUT,_bright3.domain,b)}},_setGoal:function(b,a){_bright3.goal=b;_bright3.goalvalue=a},_setPageType:function(a){_bright3.pagetype=a},_enableCrossDomainTracking:function(a){_bright3.linkerEnabled=a},_trackCrossDomain:function(a){if(!a||a==""){return}if(_bright3.linkerEnabled){document.location.href=this.linkerUrl(a)}else{document.location.href=a}},_trackCrossDomain_ByPost:function(a){if(!a||!a.action||a.action==""){return}if(_bright3.linkerEnabled){a.action=this.linkerUrl(a.action)}else{a.action=a.action}},_trackBright:function(){var k="http://"+_bright3.BE_URL;if("https:"==document.location.protocol){k="https://"+_bright3.BE_SURL}var l=location.href;if(_bright3.locationOverride.length>0){l=_bright3.locationOverride;_bright3.locationOverride=""}else{if(window.location&&window.location.href){l=window.location.href}}var e=document.referrer;if(_bright3.referrerOverride.length>0){e=_bright3.referrerOverride;_bright3.referrerOverride=""}else{if(window.document&&window.document.referrer){e=window.document.referrer}}var y=document.title;var j=this.getmetaContents("description");var b=this.getmetaContents("keywords");var o={};o.id=_bright3.id;o.url=l;o.ref=e;o.cg=_bright3.goal;o.cgv=_bright3.goalvalue;o.cptv=_bright3.pagetype;if(_bright3.customDimensionList.length>0){o.cd=JSON.stringify(_bright3.customDimensionList)}if(_bright3.customMetricList.length>0){o.cm=JSON.stringify(_bright3.customMetricList)}o.title=y;o.metadesc=j;o.metakeywords=b;var q=true;var m=this.getCookie(_bright3.C_NAME);if(_bright3.path!=""){var c=l.substring(l.indexOf(document.domain)+document.domain.length);if(this.getBrowserName()=="Firefox"){c+="/"}var w=c.indexOf(_bright3.path);if(w==-1&&m.length<=0){q=false}}if(_bright3.domain!=""&&(document.domain.indexOf(_bright3.domain)==-1&&!(document.domain.charAt(0)!="."&&_bright3.domain.charAt(0)=="."&&_bright3.domain.substr(1)==document.domain))){q=false}if(q){var p=false;if(_bright3.linkerEnabled){if(l&&l!=""&&l.indexOf("p_id=")>-1){m=l;p=true}}var t=this.parseCookie(m,"p_id=","&");var f=this.parseCookie(m,"s_id=","&");var r=this.parseCookie(m,"s_expire=","&");var n=this.parseCookie(m,"bn=","&");var g=this.parseCookie(m,"bv=","&");n=parseInt(n)+1;g=_bright3.VERSION;var a=new Date();if(!p){if(m.length>0){if(r<=a.getTime()){f=this.generateUniqID(_bright3.id);n=1}}else{t=this.generateUniqID(_bright3.id);f=this.generateUniqID(_bright3.id);n=1}}var s=new Date(a.getTime()+_bright3.S_TIMEOUT);r=s.getTime();var h="p_id="+escape(t)+"&bn="+escape(n)+"&bv="+escape(g)+"&s_expire="+escape(r)+"&s_id="+escape(f);this.setCookie(_bright3.C_NAME,h,_bright3.TIMEOUT,_bright3.domain,_bright3.path)}var u=false;m=this.getCookie(_bright3.C_NAME);if(m.length>0){u=true}if(u){o.p_id=this.parseCookie(m,"p_id=","&");o.s_id=this.parseCookie(m,"s_id=","&");o.bn=this.parseCookie(m,"bn=","&");o.bv=this.parseCookie(m,"bv=","&")}if(u){var v=new Array("id","p_id","url","ref","cg","cgv","cptv","cd","cm","bn","bv","title","metadesc","metakeywords","s_id")}else{var v=new Array("id","url","ref","cg","cgv","cptv","cd","cm","title","metadesc","metakeywords")}var d=this.createURL(k,o,v);if(d.length>_bright3.maxUrlLength){d=this.truncURL(k,o,v)}var x=new Image(1,1);x.src=d;x.onload=function(){}},parseCookie:function(g,a,e){if(!g||g==""||!a||a==""||!e||e==""){return""}var d,f,b,h="";d=g.indexOf(a);b=a.indexOf("=")+1;if(d>-1){f=g.indexOf(e,d);if(f<0){f=g.length}h=g.substring((d+b),f)}return unescape(h)},linkerUrl:function(e){var c=this.getCookie(_bright3.C_NAME);var f=e.indexOf("?");var a=e.length+c.length+1;if(c.length>0){if(f>-1){url=e+"&"+c}else{url=e+"?"+c}}else{url=e}if(a>_bright3.maxUrlLength){var d={};d.p_id=this.parseCookie(c,"p_id=","&");d.s_id=this.parseCookie(c,"s_id=","&");d.be_n=this.parseCookie(c,"be_n=","&");d.be_v=this.parseCookie(c,"be_v=","&");d.s_expire=this.parseCookie(c,"s_expire=","&");var b=new Array("p_id","be_n","be_v","s_expire","s_id");url=this.truncURL(e,d,b)}return url},truncURL:function(c,e,a){for(var d in e){if(e[d]){e[d]=e[d]+"";e[d]=e[d].substring(0,450)}}result_url=this.createURL(c,e,a);var b=a.length-1;while(result_url.length>_bright3.maxUrlLength){a.splice(a.length-1,1);result_url=this.createURL(c,e,a);if(a.length<=1){break}}return result_url},createURL:function(b,d,a){for(i=0;i<a.length;i++){var c=a[i];if(!(c in d)){continue}var e=b.indexOf("?");if((c=="cg"||c=="cgv"||c=="cptv")&&d[a[i]]==""){continue}if(e>-1){b=b+"&"}else{b=b+"?"}b=b+a[i]+"="+escape(d[a[i]])}return b},getmetaContents:function(c){var a=document.getElementsByTagName("meta");for(i=0;i<a.length;i++){if(a[i].name==null){continue}if((a[i].name).toLowerCase()==c.toLowerCase()){var b=a[i].content;if(b.length>255){b=b.substring(0,255)}return b}}return""},setCookie:function(a,d,c,b,f){var e=new Date();e.setTime(e.getTime()+c);document.cookie=a+"="+escape(d)+"; expires="+e.toGMTString()+"; "+this.getPath(f)+"; "+this.getDomain(b)},getPath:function(b){var a="";if(b!=""){a=b}else{a="/"}a="path="+a;return a},getDomain:function(a){var b="";if(a!=""){b=a}else{if(window.document.domain){b=window.document.domain}else{if(document.domain){b=document.domain}}}if(b!=""){b="domain="+b}return b},getCookie:function(a){if(document.cookie.length>0){c_begin=document.cookie.indexOf(a+"=");if(c_begin!=-1){c_begin=c_begin+a.length+1;c_end=document.cookie.indexOf(";",c_begin);if(c_end==-1){c_end=document.cookie.length}return unescape(document.cookie.substring(c_begin,c_end))}}return""},get36base:function(b){var a=b.charCodeAt(0);a=(a<=57)?a-22:a-65;return a},get36char:function(a){a=(a<10)?a+48:a+55;return String.fromCharCode(a)},encodeString:function(e){var c,a="";for(var d=e.length-1;d>=0;d--){c=(this.get36base(e.charAt(d))*17)%36;c=this.get36char(c);a=a+c}return a},hashString:function(d){var b=0,c=1;for(var a=d.length-1;a>=0;a--){b=d.charCodeAt(a);b=(b*b*b)&268435455;c=c<<6+c*b}return c},generateUniqID:function(a){var d=this.hashString(navigator.userAgent);var c=Math.floor(Math.random(d)*524288)+Math.floor(Math.random()*524288);var b=(new Date()).getTime();var e=a+c+b;e=this.encodeString(e);return e},getBrowserName:function(){var c=navigator.userAgent;var a,b;var d="";if((b=c.indexOf("MSIE"))!=-1){d="IE"}else{if((b=c.indexOf("Opera"))!=-1){d="Opera"}else{if((b=c.indexOf("Chrome"))!=-1){d="Chrome"}else{if((b=c.indexOf("Safari"))!=-1){d="Safari"}else{if((b=c.indexOf("Firefox"))!=-1){d="Firefox"}else{if((a=c.lastIndexOf(" ")+1)<(b=c.lastIndexOf("/"))){d=c.substring(a,b);if(d.toLowerCase()==d.toUpperCase()){d=navigator.appName}}}}}}}return d}});try{var scriptTag=document.querySelector('script[data-id="bec"]');if(scriptTag!=null){var org_id=scriptTag.getAttribute("org-id");var betrack=_bright3._initialize(org_id);var domain=scriptTag.getAttribute("domain");if(domain!=null){betrack._setDomain(domain)}var domainPath=scriptTag.getAttribute("domain-path");if(domainPath!=null){betrack._setDomainPath(domainPath)}var timeout=scriptTag.getAttribute("timeout");if(timeout!=null){betrack._setTimeout(timeout)}var sessionTmeout=scriptTag.getAttribute("session-timeout");if(sessionTmeout!=null){betrack._setSessionTimeout(sessionTmeout)}var sessionTmeout=scriptTag.getAttribute("session-timeout");if(sessionTmeout!=null){betrack._setSessionTimeout(sessionTmeout)}var goal=scriptTag.getAttribute("goal");var goalvalue=scriptTag.getAttribute("goalvalue");if(goal!=null&&goalvalue!=null){betrack._setGoal(goal,goalvalue)}var maximum_custom_variables=10;var maximum_custom_metrics=maximum_custom_variables;for(i=0;i<maximum_custom_variables;i++){var customdimension_value=scriptTag.getAttribute("custom-dimension"+i);if(customdimension_value!=null){betrack._setCustomDimensionValue(i,customdimension_value)}}for(i=0;i<maximum_custom_metrics;i++){var custommetric_value=scriptTag.getAttribute("custom-metric"+i);if(custommetric_value!=null){betrack._setCustomMetricValue(i,custommetric_value)}}var deferCallback=scriptTag.getAttribute("defer-callback");if(deferCallback==null||(deferCallback!="t"&&deferCallback!="1")){betrack._trackBright()}window.betrack=betrack}}catch(err){};