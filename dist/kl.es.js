var o=function(o,t){void 0===t&&(t={}),this.color=o||"#000",this.options=t};o.prototype.match=function(o,t,n){void 0===n&&(n=function(o){return o});var r=o.split(t),i=r.length;if(2>i)return o;for(var s=this.options.customCSS,c=1;i>c;++c)r[c]="<span "+(s?'class="'+s+'"':"")+' style="color:'+this.color+'">'+n(t)+"</span>"+r[c];return r.join("")};export default o;
