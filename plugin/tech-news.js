function _0x3f30(){const _0x2b620a=['get','../command','description','axios','aea4ce0e9a2d4ae382a59dbbe6f5de4a','\x0a\x0a➣\x20⚠️\x20','title','1888FraQbF','data','search','3981EpGlwX','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','sendMessage','855191HJKpGH','1178GuQhEm','min','length','Get\x20the\x20latest\x20buisness\x20news\x20headlines.','2206135gizhqy','\x0a➣\x20📰\x20','Could\x20not\x20fetch\x20news.\x20Please\x20try\x20again\x20later.','log','urlToImage','url','4207332kHGEit','2469172Faovfw','17297784nAmRQD','15302YXjuiY','tech','error','Article\x20URL:'];_0x3f30=function(){return _0x2b620a;};return _0x3f30();}function _0x374f(_0x2b847d,_0x3ed6eb){const _0x3f309c=_0x3f30();return _0x374f=function(_0x374f8c,_0x44a67b){_0x374f8c=_0x374f8c-0x1ea;let _0x26b4fb=_0x3f309c[_0x374f8c];return _0x26b4fb;},_0x374f(_0x2b847d,_0x3ed6eb);}const _0x3271c6=_0x374f;(function(_0x30b7b6,_0x2cd016){const _0x41980f=_0x374f,_0x1ce472=_0x30b7b6();while(!![]){try{const _0x8e722d=-parseInt(_0x41980f(0x205))/0x1+parseInt(_0x41980f(0x206))/0x2*(-parseInt(_0x41980f(0x202))/0x3)+parseInt(_0x41980f(0x1f2))/0x4+-parseInt(_0x41980f(0x1eb))/0x5+parseInt(_0x41980f(0x1f1))/0x6+parseInt(_0x41980f(0x1f4))/0x7*(-parseInt(_0x41980f(0x1ff))/0x8)+parseInt(_0x41980f(0x1f3))/0x9;if(_0x8e722d===_0x2cd016)break;else _0x1ce472['push'](_0x1ce472['shift']());}catch(_0x4c5e6f){_0x1ce472['push'](_0x1ce472['shift']());}}}(_0x3f30,0x9ddae));const axios=require(_0x3271c6(0x1fb)),{cmd}=require(_0x3271c6(0x1f9));cmd({'pattern':_0x3271c6(0x1f5),'desc':_0x3271c6(0x1ea),'category':_0x3271c6(0x201),'react':'📰','filename':__filename},async(_0x53742f,_0x2eced2,_0x5968a7,{from:_0x3068be,reply:_0x31cb10})=>{const _0xa30f50=_0x3271c6;try{const _0x1a89a2=_0xa30f50(0x1fc),_0x4f53c2=await axios[_0xa30f50(0x1f8)]('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+_0x1a89a2),_0x2d7b0c=_0x4f53c2[_0xa30f50(0x200)]['articles'];if(!_0x2d7b0c[_0xa30f50(0x208)])return _0x31cb10('No\x20news\x20articles\x20found.');for(let _0x3d069b=0x0;_0x3d069b<Math[_0xa30f50(0x207)](_0x2d7b0c['length'],0x5);_0x3d069b++){const _0x1729b2=_0x2d7b0c[_0x3d069b];let _0x364744=_0xa30f50(0x1ec)+_0x1729b2[_0xa30f50(0x1fe)]+_0xa30f50(0x1fd)+_0x1729b2[_0xa30f50(0x1fa)]+'\x0a\x0a➣\x20🔗\x20'+_0x1729b2[_0xa30f50(0x1f0)]+_0xa30f50(0x203);console[_0xa30f50(0x1ee)](_0xa30f50(0x1f7),_0x1729b2[_0xa30f50(0x1ef)]),_0x1729b2[_0xa30f50(0x1ef)]?await _0x53742f[_0xa30f50(0x204)](_0x3068be,{'image':{'url':_0x1729b2['urlToImage']},'caption':_0x364744}):await _0x53742f[_0xa30f50(0x204)](_0x3068be,{'text':_0x364744});};}catch(_0x2eea64){console[_0xa30f50(0x1f6)]('Error\x20fetching\x20news:',_0x2eea64),_0x31cb10(_0xa30f50(0x1ed));}});