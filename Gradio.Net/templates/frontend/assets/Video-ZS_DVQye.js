import{r as B}from"./file-url-cVETAVBK.js";const C=new Error("failed to get response body reader"),S=new Error("failed to complete download"),M="Content-Length",V=async(a,i)=>{const t=await fetch(a);let e;try{const p=parseInt(t.headers.get(M)||"-1"),c=t.body?.getReader();if(!c)throw C;const f=[];let d=0;for(;;){const{done:s,value:x}=await c.read(),u=x?x.length:0;if(s){if(p!=-1&&p!==d)throw S;i&&i({url:a,total:p,received:d,delta:u,done:s});break}f.push(x),d+=u,i&&i({url:a,total:p,received:d,delta:u,done:s})}const h=new Uint8Array(d);let g=0;for(const s of f)h.set(s,g),g+=s.length;e=h.buffer}catch(p){console.log("failed to send download progress event: ",p),e=await t.arrayBuffer()}return e},R=async(a,i,t=!1,e)=>{const p=t?await V(a,e):await(await fetch(a)).arrayBuffer(),c=new Blob([p],{type:i});return URL.createObjectURL(c)};var n;(function(a){a.LOAD="LOAD",a.EXEC="EXEC",a.WRITE_FILE="WRITE_FILE",a.READ_FILE="READ_FILE",a.DELETE_FILE="DELETE_FILE",a.RENAME="RENAME",a.CREATE_DIR="CREATE_DIR",a.LIST_DIR="LIST_DIR",a.DELETE_DIR="DELETE_DIR",a.ERROR="ERROR",a.DOWNLOAD="DOWNLOAD",a.PROGRESS="PROGRESS",a.LOG="LOG",a.MOUNT="MOUNT",a.UNMOUNT="UNMOUNT"})(n||(n={}));const P=(()=>{let a=0;return()=>a++})(),W=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),G=new Error("called FFmpeg.terminate()");class X{#t=null;#e={};#a={};#o=[];#l=[];loaded=!1;#p=()=>{this.#t&&(this.#t.onmessage=({data:{id:i,type:t,data:e}})=>{switch(t){case n.LOAD:this.loaded=!0,this.#e[i](e);break;case n.MOUNT:case n.UNMOUNT:case n.EXEC:case n.WRITE_FILE:case n.READ_FILE:case n.DELETE_FILE:case n.RENAME:case n.CREATE_DIR:case n.LIST_DIR:case n.DELETE_DIR:this.#e[i](e);break;case n.LOG:this.#o.forEach(p=>p(e));break;case n.PROGRESS:this.#l.forEach(p=>p(e));break;case n.ERROR:this.#a[i](e);break}delete this.#e[i],delete this.#a[i]})};#i=({type:i,data:t},e=[],p)=>this.#t?new Promise((c,f)=>{const d=P();this.#t&&this.#t.postMessage({id:d,type:i,data:t},e),this.#e[d]=c,this.#a[d]=f,p?.addEventListener("abort",()=>{f(new DOMException(`Message # ${d} was aborted`,"AbortError"))},{once:!0})}):Promise.reject(W);on(i,t){i==="log"?this.#o.push(t):i==="progress"&&this.#l.push(t)}off(i,t){i==="log"?this.#o=this.#o.filter(e=>e!==t):i==="progress"&&(this.#l=this.#l.filter(e=>e!==t))}load=(i={},{signal:t}={})=>(this.#t||(this.#t=new Worker(new URL(""+new URL("worker-DJ3jufjD.js",import.meta.url).href,import.meta.url),{type:"module"}),this.#p()),this.#i({type:n.LOAD,data:i},void 0,t));exec=(i,t=-1,{signal:e}={})=>this.#i({type:n.EXEC,data:{args:i,timeout:t}},void 0,e);terminate=()=>{const i=Object.keys(this.#a);for(const t of i)this.#a[t](G),delete this.#a[t],delete this.#e[t];this.#t&&(this.#t.terminate(),this.#t=null,this.loaded=!1)};writeFile=(i,t,{signal:e}={})=>{const p=[];return t instanceof Uint8Array&&p.push(t.buffer),this.#i({type:n.WRITE_FILE,data:{path:i,data:t}},p,e)};mount=(i,t,e)=>{const p=[];return this.#i({type:n.MOUNT,data:{fsType:i,options:t,mountPoint:e}},p)};unmount=i=>{const t=[];return this.#i({type:n.UNMOUNT,data:{mountPoint:i}},t)};readFile=(i,t="binary",{signal:e}={})=>this.#i({type:n.READ_FILE,data:{path:i,encoding:t}},void 0,e);deleteFile=(i,{signal:t}={})=>this.#i({type:n.DELETE_FILE,data:{path:i}},void 0,t);rename=(i,t,{signal:e}={})=>this.#i({type:n.RENAME,data:{oldPath:i,newPath:t}},void 0,e);createDir=(i,{signal:t}={})=>this.#i({type:n.CREATE_DIR,data:{path:i}},void 0,t);listDir=(i,{signal:t}={})=>this.#i({type:n.LIST_DIR,data:{path:i}},void 0,t);deleteDir=(i,{signal:t}={})=>this.#i({type:n.DELETE_DIR,data:{path:i}},void 0,t)}const H={"3g2":"video/3gpp2","3gp":"video/3gpp","3gpp":"video/3gpp","3mf":"model/3mf",aac:"audio/aac",ac:"application/pkix-attr-cert",adp:"audio/adpcm",adts:"audio/aac",ai:"application/postscript",aml:"application/automationml-aml+xml",amlx:"application/automationml-amlx+zip",amr:"audio/amr",apng:"image/apng",appcache:"text/cache-manifest",appinstaller:"application/appinstaller",appx:"application/appx",appxbundle:"application/appxbundle",asc:"application/pgp-keys",atom:"application/atom+xml",atomcat:"application/atomcat+xml",atomdeleted:"application/atomdeleted+xml",atomsvc:"application/atomsvc+xml",au:"audio/basic",avci:"image/avci",avcs:"image/avcs",avif:"image/avif",aw:"application/applixware",bdoc:"application/bdoc",bin:"application/octet-stream",bmp:"image/bmp",bpk:"application/octet-stream",btf:"image/prs.btif",btif:"image/prs.btif",buffer:"application/octet-stream",ccxml:"application/ccxml+xml",cdfx:"application/cdfx+xml",cdmia:"application/cdmi-capability",cdmic:"application/cdmi-container",cdmid:"application/cdmi-domain",cdmio:"application/cdmi-object",cdmiq:"application/cdmi-queue",cer:"application/pkix-cert",cgm:"image/cgm",cjs:"application/node",class:"application/java-vm",coffee:"text/coffeescript",conf:"text/plain",cpl:"application/cpl+xml",cpt:"application/mac-compactpro",crl:"application/pkix-crl",css:"text/css",csv:"text/csv",cu:"application/cu-seeme",cwl:"application/cwl",cww:"application/prs.cww",davmount:"application/davmount+xml",dbk:"application/docbook+xml",deb:"application/octet-stream",def:"text/plain",deploy:"application/octet-stream",dib:"image/bmp","disposition-notification":"message/disposition-notification",dist:"application/octet-stream",distz:"application/octet-stream",dll:"application/octet-stream",dmg:"application/octet-stream",dms:"application/octet-stream",doc:"application/msword",dot:"application/msword",dpx:"image/dpx",drle:"image/dicom-rle",dsc:"text/prs.lines.tag",dssc:"application/dssc+der",dtd:"application/xml-dtd",dump:"application/octet-stream",dwd:"application/atsc-dwd+xml",ear:"application/java-archive",ecma:"application/ecmascript",elc:"application/octet-stream",emf:"image/emf",eml:"message/rfc822",emma:"application/emma+xml",emotionml:"application/emotionml+xml",eps:"application/postscript",epub:"application/epub+zip",exe:"application/octet-stream",exi:"application/exi",exp:"application/express",exr:"image/aces",ez:"application/andrew-inset",fdf:"application/fdf",fdt:"application/fdt+xml",fits:"image/fits",g3:"image/g3fax",gbr:"application/rpki-ghostbusters",geojson:"application/geo+json",gif:"image/gif",glb:"model/gltf-binary",gltf:"model/gltf+json",gml:"application/gml+xml",gpx:"application/gpx+xml",gram:"application/srgs",grxml:"application/srgs+xml",gxf:"application/gxf",gz:"application/gzip",h261:"video/h261",h263:"video/h263",h264:"video/h264",heic:"image/heic",heics:"image/heic-sequence",heif:"image/heif",heifs:"image/heif-sequence",hej2:"image/hej2k",held:"application/atsc-held+xml",hjson:"application/hjson",hlp:"application/winhlp",hqx:"application/mac-binhex40",hsj2:"image/hsj2",htm:"text/html",html:"text/html",ics:"text/calendar",ief:"image/ief",ifb:"text/calendar",iges:"model/iges",igs:"model/iges",img:"application/octet-stream",in:"text/plain",ini:"text/plain",ink:"application/inkml+xml",inkml:"application/inkml+xml",ipfix:"application/ipfix",iso:"application/octet-stream",its:"application/its+xml",jade:"text/jade",jar:"application/java-archive",jhc:"image/jphc",jls:"image/jls",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpf:"image/jpx",jpg:"image/jpeg",jpg2:"image/jp2",jpgm:"image/jpm",jpgv:"video/jpeg",jph:"image/jph",jpm:"image/jpm",jpx:"image/jpx",js:"text/javascript",json:"application/json",json5:"application/json5",jsonld:"application/ld+json",jsonml:"application/jsonml+json",jsx:"text/jsx",jt:"model/jt",jxr:"image/jxr",jxra:"image/jxra",jxrs:"image/jxrs",jxs:"image/jxs",jxsc:"image/jxsc",jxsi:"image/jxsi",jxss:"image/jxss",kar:"audio/midi",ktx:"image/ktx",ktx2:"image/ktx2",less:"text/less",lgr:"application/lgr+xml",list:"text/plain",litcoffee:"text/coffeescript",log:"text/plain",lostxml:"application/lost+xml",lrf:"application/octet-stream",m1v:"video/mpeg",m21:"application/mp21",m2a:"audio/mpeg",m2v:"video/mpeg",m3a:"audio/mpeg",m4a:"audio/mp4",m4p:"application/mp4",m4s:"video/iso.segment",ma:"application/mathematica",mads:"application/mads+xml",maei:"application/mmt-aei+xml",man:"text/troff",manifest:"text/cache-manifest",map:"application/json",mar:"application/octet-stream",markdown:"text/markdown",mathml:"application/mathml+xml",mb:"application/mathematica",mbox:"application/mbox",md:"text/markdown",mdx:"text/mdx",me:"text/troff",mesh:"model/mesh",meta4:"application/metalink4+xml",metalink:"application/metalink+xml",mets:"application/mets+xml",mft:"application/rpki-manifest",mid:"audio/midi",midi:"audio/midi",mime:"message/rfc822",mj2:"video/mj2",mjp2:"video/mj2",mjs:"text/javascript",mml:"text/mathml",mods:"application/mods+xml",mov:"video/quicktime",mp2:"audio/mpeg",mp21:"application/mp21",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mp4a:"audio/mp4",mp4s:"application/mp4",mp4v:"video/mp4",mpd:"application/dash+xml",mpe:"video/mpeg",mpeg:"video/mpeg",mpf:"application/media-policy-dataset+xml",mpg:"video/mpeg",mpg4:"video/mp4",mpga:"audio/mpeg",mpp:"application/dash-patch+xml",mrc:"application/marc",mrcx:"application/marcxml+xml",ms:"text/troff",mscml:"application/mediaservercontrol+xml",msh:"model/mesh",msi:"application/octet-stream",msix:"application/msix",msixbundle:"application/msixbundle",msm:"application/octet-stream",msp:"application/octet-stream",mtl:"model/mtl",musd:"application/mmt-usd+xml",mxf:"application/mxf",mxmf:"audio/mobile-xmf",mxml:"application/xv+xml",n3:"text/n3",nb:"application/mathematica",nq:"application/n-quads",nt:"application/n-triples",obj:"model/obj",oda:"application/oda",oga:"audio/ogg",ogg:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",omdoc:"application/omdoc+xml",onepkg:"application/onenote",onetmp:"application/onenote",onetoc:"application/onenote",onetoc2:"application/onenote",opf:"application/oebps-package+xml",opus:"audio/ogg",otf:"font/otf",owl:"application/rdf+xml",oxps:"application/oxps",p10:"application/pkcs10",p7c:"application/pkcs7-mime",p7m:"application/pkcs7-mime",p7s:"application/pkcs7-signature",p8:"application/pkcs8",pdf:"application/pdf",pfr:"application/font-tdpfr",pgp:"application/pgp-encrypted",pkg:"application/octet-stream",pki:"application/pkixcmp",pkipath:"application/pkix-pkipath",pls:"application/pls+xml",png:"image/png",prc:"model/prc",prf:"application/pics-rules",provx:"application/provenance+xml",ps:"application/postscript",pskcxml:"application/pskc+xml",pti:"image/prs.pti",qt:"video/quicktime",raml:"application/raml+yaml",rapd:"application/route-apd+xml",rdf:"application/rdf+xml",relo:"application/p2p-overlay+xml",rif:"application/reginfo+xml",rl:"application/resource-lists+xml",rld:"application/resource-lists-diff+xml",rmi:"audio/midi",rnc:"application/relax-ng-compact-syntax",rng:"application/xml",roa:"application/rpki-roa",roff:"text/troff",rq:"application/sparql-query",rs:"application/rls-services+xml",rsat:"application/atsc-rsat+xml",rsd:"application/rsd+xml",rsheet:"application/urc-ressheet+xml",rss:"application/rss+xml",rtf:"text/rtf",rtx:"text/richtext",rusd:"application/route-usd+xml",s3m:"audio/s3m",sbml:"application/sbml+xml",scq:"application/scvp-cv-request",scs:"application/scvp-cv-response",sdp:"application/sdp",senmlx:"application/senml+xml",sensmlx:"application/sensml+xml",ser:"application/java-serialized-object",setpay:"application/set-payment-initiation",setreg:"application/set-registration-initiation",sgi:"image/sgi",sgm:"text/sgml",sgml:"text/sgml",shex:"text/shex",shf:"application/shf+xml",shtml:"text/html",sieve:"application/sieve",sig:"application/pgp-signature",sil:"audio/silk",silo:"model/mesh",siv:"application/sieve",slim:"text/slim",slm:"text/slim",sls:"application/route-s-tsid+xml",smi:"application/smil+xml",smil:"application/smil+xml",snd:"audio/basic",so:"application/octet-stream",spdx:"text/spdx",spp:"application/scvp-vp-response",spq:"application/scvp-vp-request",spx:"audio/ogg",sql:"application/sql",sru:"application/sru+xml",srx:"application/sparql-results+xml",ssdl:"application/ssdl+xml",ssml:"application/ssml+xml",stk:"application/hyperstudio",stl:"model/stl",stpx:"model/step+xml",stpxz:"model/step-xml+zip",stpz:"model/step+zip",styl:"text/stylus",stylus:"text/stylus",svg:"image/svg+xml",svgz:"image/svg+xml",swidtag:"application/swid+xml",t:"text/troff",t38:"image/t38",td:"application/urc-targetdesc+xml",tei:"application/tei+xml",teicorpus:"application/tei+xml",text:"text/plain",tfi:"application/thraud+xml",tfx:"image/tiff-fx",tif:"image/tiff",tiff:"image/tiff",toml:"application/toml",tr:"text/troff",trig:"application/trig",ts:"video/mp2t",tsd:"application/timestamped-data",tsv:"text/tab-separated-values",ttc:"font/collection",ttf:"font/ttf",ttl:"text/turtle",ttml:"application/ttml+xml",txt:"text/plain",u3d:"model/u3d",u8dsn:"message/global-delivery-status",u8hdr:"message/global-headers",u8mdn:"message/global-disposition-notification",u8msg:"message/global",ubj:"application/ubjson",uri:"text/uri-list",uris:"text/uri-list",urls:"text/uri-list",vcard:"text/vcard",vrml:"model/vrml",vtt:"text/vtt",vxml:"application/voicexml+xml",war:"application/java-archive",wasm:"application/wasm",wav:"audio/wav",weba:"audio/webm",webm:"video/webm",webmanifest:"application/manifest+json",webp:"image/webp",wgsl:"text/wgsl",wgt:"application/widget",wif:"application/watcherinfo+xml",wmf:"image/wmf",woff:"font/woff",woff2:"font/woff2",wrl:"model/vrml",wsdl:"application/wsdl+xml",wspolicy:"application/wspolicy+xml",x3d:"model/x3d+xml",x3db:"model/x3d+fastinfoset",x3dbz:"model/x3d+binary",x3dv:"model/x3d-vrml",x3dvz:"model/x3d+vrml",x3dz:"model/x3d+xml",xaml:"application/xaml+xml",xav:"application/xcap-att+xml",xca:"application/xcap-caps+xml",xcs:"application/calendar+xml",xdf:"application/xcap-diff+xml",xdssc:"application/dssc+xml",xel:"application/xcap-el+xml",xenc:"application/xenc+xml",xer:"application/patch-ops-error+xml",xfdf:"application/xfdf",xht:"application/xhtml+xml",xhtml:"application/xhtml+xml",xhvml:"application/xv+xml",xlf:"application/xliff+xml",xm:"audio/xm",xml:"text/xml",xns:"application/xcap-ns+xml",xop:"application/xop+xml",xpl:"application/xproc+xml",xsd:"application/xml",xsf:"application/prs.xsf+xml",xsl:"application/xml",xslt:"application/xml",xspf:"application/xspf+xml",xvm:"application/xv+xml",xvml:"application/xv+xml",yaml:"text/yaml",yang:"application/yang",yin:"application/yin+xml",yml:"text/yaml",zip:"application/zip"};function F(a){let i=(""+a).trim().toLowerCase(),t=i.lastIndexOf(".");return H[~t?i.substring(++t):i]}const gi=a=>{let i=["B","KB","MB","GB","PB"],t=0;for(;a>1024;)a/=1024,t++;let e=i[t];return a.toFixed(1)+" "+e},hi=()=>!0;function J(a,{autoplay:i}){async function t(){i&&await a.play()}return a.addEventListener("loadeddata",t),{destroy(){a.removeEventListener("loadeddata",t)}}}async function vi(){const a=new X,i="https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm";return await a.load({coreURL:await R(`${i}/ffmpeg-core.js`,"text/javascript"),wasmURL:await R(`${i}/ffmpeg-core.wasm`,"application/wasm")}),a}async function bi(a,i,t,e){const p=e.src,c=F(e.src)||"video/mp4",f=await R(p,c),h=await(await fetch(f)).blob(),g=K(c)||"mp4",s=`input.${g}`,x=`output.${g}`;try{if(i===0&&t===0)return h;await a.writeFile(s,new Uint8Array(await h.arrayBuffer()));let u=["-i",s,...i!==0?["-ss",i.toString()]:[],...t!==0?["-to",t.toString()]:[],"-c:a","copy",x];await a.exec(u);const E=await a.readFile(x);return new Blob([E],{type:`video/${g}`})}catch(u){return console.error("Error initializing FFmpeg:",u),h}}const K=a=>({"video/mp4":"mp4","video/webm":"webm","video/ogg":"ogv","video/quicktime":"mov","video/x-msvideo":"avi","video/x-matroska":"mkv","video/mpeg":"mpeg","video/3gpp":"3gp","video/3gpp2":"3g2","video/h261":"h261","video/h263":"h263","video/h264":"h264","video/jpeg":"jpgv","video/jpm":"jpm","video/mj2":"mj2","video/mpv":"mpv","video/vnd.ms-playready.media.pyv":"pyv","video/vnd.uvvu.mp4":"uvu","video/vnd.vivo":"viv","video/x-f4v":"f4v","video/x-fli":"fli","video/x-flv":"flv","video/x-m4v":"m4v","video/x-ms-asf":"asf","video/x-ms-wm":"wm","video/x-ms-wmv":"wmv","video/x-ms-wmx":"wmx","video/x-ms-wvx":"wvx","video/x-sgi-movie":"movie","video/x-smv":"smv"})[a]||null,{SvelteComponent:Y,action_destroyer:Q,add_render_callback:Z,assign:k,attr:j,binding_callbacks:$,create_slot:ii,detach:y,element:L,exclude_internal_props:D,flush:b,get_all_dirty_from_scope:ti,get_slot_changes:ai,init:ei,insert:_,is_function:oi,listen:v,raf:li,run_all:pi,safe_not_equal:si,space:ni,src_url_equal:I,toggle_class:O,transition_in:mi,transition_out:ci,update_slot_base:di}=window.__gradio__svelte__internal,{createEventDispatcher:ri}=window.__gradio__svelte__internal;function xi(a){let i,t,e,p,c,f=!1,d,h=!0,g,s,x,u;const E=a[16].default,r=ii(E,a,a[15],null);function w(){cancelAnimationFrame(d),e.paused||(d=li(w),f=!0),a[17].call(e)}return{c(){i=L("div"),i.innerHTML='<span class="load-wrap svelte-1y0s5gv"><span class="loader svelte-1y0s5gv"></span></span>',t=ni(),e=L("video"),r&&r.c(),j(i,"class","overlay svelte-1y0s5gv"),O(i,"hidden",!a[9]),I(e.src,p=a[10])||j(e,"src",p),e.muted=a[4],e.playsInline=a[5],j(e,"preload",a[6]),e.autoplay=a[7],e.controls=a[8],j(e,"data-testid",c=a[12]["data-testid"]),j(e,"crossorigin","anonymous"),a[1]===void 0&&Z(()=>a[18].call(e))},m(o,m){_(o,i,m),_(o,t,m),_(o,e,m),r&&r.m(e,null),a[20](e),s=!0,x||(u=[v(e,"loadeddata",a[11].bind(null,"loadeddata")),v(e,"click",a[11].bind(null,"click")),v(e,"play",a[11].bind(null,"play")),v(e,"pause",a[11].bind(null,"pause")),v(e,"ended",a[11].bind(null,"ended")),v(e,"mouseover",a[11].bind(null,"mouseover")),v(e,"mouseout",a[11].bind(null,"mouseout")),v(e,"focus",a[11].bind(null,"focus")),v(e,"blur",a[11].bind(null,"blur")),v(e,"timeupdate",w),v(e,"durationchange",a[18]),v(e,"play",a[19]),v(e,"pause",a[19]),Q(g=J.call(null,e,{autoplay:a[7]??!1}))],x=!0)},p(o,[m]){(!s||m&512)&&O(i,"hidden",!o[9]),r&&r.p&&(!s||m&32768)&&di(r,E,o,o[15],s?ai(E,o[15],m,null):ti(o[15]),null),(!s||m&1024&&!I(e.src,p=o[10]))&&j(e,"src",p),(!s||m&16)&&(e.muted=o[4]),(!s||m&32)&&(e.playsInline=o[5]),(!s||m&64)&&j(e,"preload",o[6]),(!s||m&128)&&(e.autoplay=o[7]),(!s||m&256)&&(e.controls=o[8]),(!s||m&4096&&c!==(c=o[12]["data-testid"]))&&j(e,"data-testid",c),!f&&m&1&&!isNaN(o[0])&&(e.currentTime=o[0]),f=!1,m&4&&h!==(h=o[2])&&e[h?"pause":"play"](),g&&oi(g.update)&&m&128&&g.update.call(null,{autoplay:o[7]??!1})},i(o){s||(mi(r,o),s=!0)},o(o){ci(r,o),s=!1},d(o){o&&(y(i),y(t),y(e)),r&&r.d(o),a[20](null),x=!1,pi(u)}}}function ui(a,i,t){let{$$slots:e={},$$scope:p}=i,{src:c=void 0}=i,{muted:f=void 0}=i,{playsinline:d=void 0}=i,{preload:h=void 0}=i,{autoplay:g=void 0}=i,{controls:s=void 0}=i,{currentTime:x=void 0}=i,{duration:u=void 0}=i,{paused:E=void 0}=i,{node:r=void 0}=i,{processingVideo:w=!1}=i,o,m;const T=ri();function A(){x=this.currentTime,t(0,x)}function N(){u=this.duration,t(1,u)}function U(){E=this.paused,t(2,E)}function q(l){$[l?"unshift":"push"](()=>{r=l,t(3,r)})}return a.$$set=l=>{t(12,i=k(k({},i),D(l))),"src"in l&&t(13,c=l.src),"muted"in l&&t(4,f=l.muted),"playsinline"in l&&t(5,d=l.playsinline),"preload"in l&&t(6,h=l.preload),"autoplay"in l&&t(7,g=l.autoplay),"controls"in l&&t(8,s=l.controls),"currentTime"in l&&t(0,x=l.currentTime),"duration"in l&&t(1,u=l.duration),"paused"in l&&t(2,E=l.paused),"node"in l&&t(3,r=l.node),"processingVideo"in l&&t(9,w=l.processingVideo),"$$scope"in l&&t(15,p=l.$$scope)},a.$$.update=()=>{if(a.$$.dirty&24576){t(10,o=c),t(14,m=c);const l=c;B(l).then(z=>{m===l&&t(10,o=z)})}},i=D(i),[x,u,E,r,f,d,h,g,s,w,o,T,i,c,m,p,e,A,N,U,q]}class Ei extends Y{constructor(i){super(),ei(this,i,ui,xi,si,{src:13,muted:4,playsinline:5,preload:6,autoplay:7,controls:8,currentTime:0,duration:1,paused:2,node:3,processingVideo:9})}get src(){return this.$$.ctx[13]}set src(i){this.$$set({src:i}),b()}get muted(){return this.$$.ctx[4]}set muted(i){this.$$set({muted:i}),b()}get playsinline(){return this.$$.ctx[5]}set playsinline(i){this.$$set({playsinline:i}),b()}get preload(){return this.$$.ctx[6]}set preload(i){this.$$set({preload:i}),b()}get autoplay(){return this.$$.ctx[7]}set autoplay(i){this.$$set({autoplay:i}),b()}get controls(){return this.$$.ctx[8]}set controls(i){this.$$set({controls:i}),b()}get currentTime(){return this.$$.ctx[0]}set currentTime(i){this.$$set({currentTime:i}),b()}get duration(){return this.$$.ctx[1]}set duration(i){this.$$set({duration:i}),b()}get paused(){return this.$$.ctx[2]}set paused(i){this.$$set({paused:i}),b()}get node(){return this.$$.ctx[3]}set node(i){this.$$set({node:i}),b()}get processingVideo(){return this.$$.ctx[9]}set processingVideo(i){this.$$set({processingVideo:i}),b()}}export{Ei as V,hi as a,J as b,vi as l,gi as p,bi as t};
//# sourceMappingURL=Video-ZS_DVQye.js.map