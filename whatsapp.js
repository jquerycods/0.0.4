//<![CDATA[
var whatsurl = window.location.href;
var whattitle=encodeURIComponent(document.title);
var whattitle_esc=unescape(whattitle);
document.write('<span style="display:block;font-size: 18px;font-weight: 500;margin-bottom:5px">Whatsapp ile paylaş : </span>\
<a href="whatsapp://send" data-text="'+whattitle_esc+'" data-href="' + whatsurl + '" class="wa_btn wa_btn_l" style="display:none" title="Whatsapp ile paylaş">\
Share</a>\
');
if(typeof wabtn4fg==="undefined"){wabtn4fg=1;h=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript";s.src="http://yourjavascript.com/0015517398/whatsapp-button.js";h.appendChild(s);}
//]]>
// Çizgi Film Hkayeleri URL=(http://cizgifilmhikayeleri.blogspot.com.tr/)
// Blogger Eklentileri URL=(http://bloggereklentileri.blogspot.com.tr/)
// Manuel Şablon URL=(http://manuelsablon.blogspot.com.tr/)
// İTunes Tema URL=(http://itunestema.blogspot.com.tr/)
//<![CDATA[
$(document).ready(function()
{
if($("#mycredit").attr("href")!="http://cizgifilmhikayeleri.blogspot.com.tr/")
{
window.location.href="http://cizgifilmhikayeleri.blogspot.com.tr/";
}
});
//]]>