Bridge.ready((function(){if(window.hasOwnProperty("Newtonsoft")&&Newtonsoft.hasOwnProperty("Json")){t.prototype.toString=function(){return JSON.stringify(this.raw)};var e=Newtonsoft.Json.JsonConvert.DeserializeObject;Newtonsoft.Json.JsonConvert.DeserializeObject=function(n,r,o,s,i,a){if(null===n)return null;if(Bridge.isArray(null,r)&&2===r.$rank){var f="string"==typeof n?JSON.parse(n):n,l=f.length,u=f[0].length;return System.Array.create(0,f,r.$elementType,[l,u])}return"object"==typeof n&&"System.Object"===r.$$fullname?new t(n):e.call(Newtonsoft.Json.JsonConvert,n,r,o,s,i,a)}}function t(e){this.raw=e}}));