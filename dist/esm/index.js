import e from"react";import n,{css as r,createGlobalStyle as t,keyframes as a}from"styled-components";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(){return o=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},o.apply(this,arguments)};function i(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var s,l=n.button(s||(s=i(["\n    border: 0;\n    line-height: 1;\n    font-size: 15px;\n    cursor: pointer;\n    font-weight: 700;\n    font-weight: bold;\n    border-radius: 3px;\n    display: inline-block;\n    padding: ",";\n    color: ",";\n    background-color: ",";\n    opacity: ",";\n    &:hover {\n      background-color: ",";\n    }\n    &:active {\n        border: solid 2px #1b116e;\n        padding: ",";\n    }\n"],["\n    border: 0;\n    line-height: 1;\n    font-size: 15px;\n    cursor: pointer;\n    font-weight: 700;\n    font-weight: bold;\n    border-radius: 3px;\n    display: inline-block;\n    padding: ",";\n    color: ",";\n    background-color: ",";\n    opacity: ",";\n    &:hover {\n      background-color: ",";\n    }\n    &:active {\n        border: solid 2px #1b116e;\n        padding: ",";\n    }\n"])),(function(e){return"small"===e.size?"7px 25px 8px":"medium"===e.size?"9px 30px 11px":"14px 30px 16px"}),(function(e){return e.primary?"#1b116e":"#ffffff"}),(function(e){return e.primary?"#6bedb5":"#1b116e"}),(function(e){return e.disabled?.5:1}),(function(e){return e.primary?"#55bd90":"#6bedb5"}),(function(e){return"small"===e.size?"5px 23px 6px":"medium"===e.size?"7px 28px 9px":"12px 28px 14px"})),d=function(n){var r=n.size,t=n.primary,a=n.disabled,i=n.text,s=n.onClick,d=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r}(n,["size","primary","disabled","text","onClick"]);return e.createElement(l,o({type:"button",onClick:s,primary:t,disabled:a,size:r},d),i)};function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,n){return f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},f(e,n)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function m(e,n,r){return m=c()?Reflect.construct:function(e,n,r){var t=[null];t.push.apply(t,n);var a=new(Function.bind.apply(e,t));return r&&f(a,r.prototype),a},m.apply(null,arguments)}function g(e){var n="function"==typeof Map?new Map:void 0;return g=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return m(e,arguments,u(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),f(t,e)},g(e)}var b={1:"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",2:"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",3:"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",4:"Couldn't generate valid rgb string from %s, it returned %s.\n\n",5:"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",6:"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",7:"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",8:"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",9:"Please provide a number of steps to the modularScale helper.\n\n",10:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",11:'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',12:'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',13:'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',14:'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',15:'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',16:"You must provide a template to this method.\n\n",17:"You passed an unsupported selector state to this method.\n\n",18:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",19:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",20:"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:"fontFace expects a name of a font-family.\n\n",24:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",25:"fontFace expects localFonts to be an array.\n\n",26:"fontFace expects fileFormats to be an array.\n\n",27:"radialGradient requries at least 2 color-stops to properly render.\n\n",28:"Please supply a filename to retinaImage() as the first argument.\n\n",29:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",32:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",33:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",34:"borderRadius expects a radius value as a string or number as the second argument.\n\n",35:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',36:"Property must be a string value.\n\n",37:"Syntax Error at %s.\n\n",38:"Formula contains a function that needs parentheses at %s.\n\n",39:"Formula is missing closing parenthesis at %s.\n\n",40:"Formula has too many closing parentheses at %s.\n\n",41:"All values in a formula must have the same unit or be unitless.\n\n",42:"Please provide a number of steps to the modularScale helper.\n\n",43:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",44:"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",45:"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",46:"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",47:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",48:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",49:"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",50:"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",51:"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",52:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",53:"fontFace expects localFonts to be an array.\n\n",54:"fontFace expects fileFormats to be an array.\n\n",55:"fontFace expects a name of a font-family.\n\n",56:"linearGradient requries at least 2 color-stops to properly render.\n\n",57:"radialGradient requries at least 2 color-stops to properly render.\n\n",58:"Please supply a filename to retinaImage() as the first argument.\n\n",59:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:"Property must be a string value.\n\n",62:"borderRadius expects a radius value as a string or number as the second argument.\n\n",63:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',64:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",65:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",66:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",67:"You must provide a template to this method.\n\n",68:"You passed an unsupported selector state to this method.\n\n",69:'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',70:'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',71:'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',72:'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',73:"Please provide a valid CSS variable.\n\n",74:"CSS variable not found and no default was provided.\n\n",75:"important requires a valid style object, got a %s instead.\n\n",76:"fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",77:'remToPx expects a value in "rem" but you provided it in "%s".\n\n',78:'base must be set in "px" or "%" but you set it in "%s".\n'};function h(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t,a=n[0],o=[];for(t=1;t<n.length;t+=1)o.push(n[t]);return o.forEach((function(e){a=a.replace(/%[a-z]/,e)})),a}var y=function(e){var n,r;function t(n){var r;if("production"===process.env.NODE_ENV)r=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this;else{for(var t=arguments.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];r=e.call(this,h.apply(void 0,[b[n]].concat(a)))||this}return p(r)}return r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,f(n,r),t}(g(Error));function v(e){return Math.round(255*e)}function x(e,n,r){return v(e)+","+v(n)+","+v(r)}function w(e,n,r,t){if(void 0===t&&(t=x),0===n)return t(r,r,r);var a=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*n,i=o*(1-Math.abs(a%2-1)),s=0,l=0,d=0;a>=0&&a<1?(s=o,l=i):a>=1&&a<2?(s=i,l=o):a>=2&&a<3?(l=o,d=i):a>=3&&a<4?(l=i,d=o):a>=4&&a<5?(s=i,d=o):a>=5&&a<6&&(s=o,d=i);var p=r-o/2;return t(s+p,l+p,d+p)}var k={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var F=/^#[a-fA-F0-9]{6}$/,S=/^#[a-fA-F0-9]{8}$/,z=/^#[a-fA-F0-9]{3}$/,P=/^#[a-fA-F0-9]{4}$/,I=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,j=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,_=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,O=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function E(e){if("string"!=typeof e)throw new y(3);var n=function(e){if("string"!=typeof e)return e;var n=e.toLowerCase();return k[n]?"#"+k[n]:e}(e);if(n.match(F))return{red:parseInt(""+n[1]+n[2],16),green:parseInt(""+n[3]+n[4],16),blue:parseInt(""+n[5]+n[6],16)};if(n.match(S)){var r=parseFloat((parseInt(""+n[7]+n[8],16)/255).toFixed(2));return{red:parseInt(""+n[1]+n[2],16),green:parseInt(""+n[3]+n[4],16),blue:parseInt(""+n[5]+n[6],16),alpha:r}}if(n.match(z))return{red:parseInt(""+n[1]+n[1],16),green:parseInt(""+n[2]+n[2],16),blue:parseInt(""+n[3]+n[3],16)};if(n.match(P)){var t=parseFloat((parseInt(""+n[4]+n[4],16)/255).toFixed(2));return{red:parseInt(""+n[1]+n[1],16),green:parseInt(""+n[2]+n[2],16),blue:parseInt(""+n[3]+n[3],16),alpha:t}}var a=I.exec(n);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=j.exec(n.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var i=_.exec(n);if(i){var s="rgb("+w(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",l=I.exec(s);if(!l)throw new y(4,n,s);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var d=O.exec(n.substring(0,50));if(d){var p="rgb("+w(parseInt(""+d[1],10),parseInt(""+d[2],10)/100,parseInt(""+d[3],10)/100)+")",f=I.exec(p);if(!f)throw new y(4,n,p);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+d[4])}}throw new y(5)}var C=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function R(e){var n=e.toString(16);return 1===n.length?"0"+n:n}function D(e,n,r){if("number"==typeof e&&"number"==typeof n&&"number"==typeof r)return C("#"+R(e)+R(n)+R(r));if("object"==typeof e&&void 0===n&&void 0===r)return C("#"+R(e.red)+R(e.green)+R(e.blue));throw new y(6)}function M(e,n,r,t){if("string"==typeof e&&"number"==typeof n){var a=E(e);return"rgba("+a.red+","+a.green+","+a.blue+","+n+")"}if("number"==typeof e&&"number"==typeof n&&"number"==typeof r&&"number"==typeof t)return t>=1?D(e,n,r):"rgba("+e+","+n+","+r+","+t+")";if("object"==typeof e&&void 0===n&&void 0===r&&void 0===t)return e.alpha>=1?D(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new y(7)}var A,q,T,Y,$,H,B,G,N,L,U={primary:"#FF4785",secondary:"#1EA7FD",tertiary:"#DDDDDD",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F8F8F8",light:"#F3F3F3",mediumlight:"#EEEEEE",medium:"#DDDDDD",mediumdark:"#999999",dark:"#666666",darker:"#444444",darkest:"#333333",border:"rgba(0,0,0,.1)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00"},V={padding:{small:10,medium:20,large:30},borderRadius:{small:5,default:10}},J={type:{primary:'"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',code:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'},weight:{regular:"400",bold:"700",extrabold:"800",black:"900"},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},K=r(A||(A=i(["\n  padding: 0 ","px;\n  @media (min-width: ","px) {\n    margin: 0 ","%;\n  }\n  @media (min-width: ","px) {\n    margin: 0 ","%;\n  }\n  @media (min-width: ","px) {\n    margin: 0 ","%;\n  }\n  @media (min-width: ","px) {\n    margin: 0 ","%;\n  }\n"],["\n  padding: 0 ","px;\n  @media (min-width: ","px) {\n    margin: 0 ","%;\n  }\n  @media (min-width: ","px) {\n    margin: 0 ","%;\n  }\n  @media (min-width: ","px) {\n    margin: 0 ","%;\n  }\n  @media (min-width: ","px) {\n    margin: 0 ","%;\n  }\n"])),V.padding.medium,600,5.55555,1200,11.1111,1800,16.66665,2400,22.2222),Q=r(q||(q=i(["\n  border: 1px solid ",";\n  border-radius: ","px;\n  transition: background 150ms ease-out, border 150ms ease-out,\n    transform 150ms ease-out;\n\n  &:hover,\n  &.__hover {\n    border-color: ",";\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  &:active,\n  &.__active {\n    border-color: ",";\n    transform: translate3d(0, 0, 0);\n  }\n"],["\n  border: 1px solid ",";\n  border-radius: ","px;\n  transition: background 150ms ease-out, border 150ms ease-out,\n    transform 150ms ease-out;\n\n  &:hover,\n  &.__hover {\n    border-color: ",";\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  &:active,\n  &.__active {\n    border-color: ",";\n    transform: translate3d(0, 0, 0);\n  }\n"])),U.border,V.borderRadius.small,M(U.secondary,.5),M(U.secondary,1)),W=Object.freeze({__proto__:null,background:{app:"#F6F9FC",appInverse:"#7A8997",positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF"},color:U,spacing:V,typography:J,breakpoint:600,pageMargin:5.55555,pageMargins:K,hoverEffect:Q}),X=r(T||(T=i(["\n  font-family: ",";\n  font-size: ","px;\n  color: ",";\n\n  margin: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: ",";\n    margin: 0;\n    padding: 0;\n  }\n\n  button,\n  input,\n  textarea,\n  select {\n    font-family: ",";\n  }\n\n  sub,\n  sup {\n    font-size: 0.8em;\n  }\n\n  sub {\n    bottom: -0.2em;\n  }\n\n  sup {\n    top: -0.2em;\n  }\n\n  b,\n  em {\n    font-weight: ",";\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid ",";\n    clear: both;\n    margin-bottom: 1.25rem;\n  }\n\n  code,\n  pre {\n    font-family: ",";\n    font-size: ","px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    display: inline-block;\n    padding-left: 2px;\n    padding-right: 2px;\n    vertical-align: baseline;\n    color: ",";\n  }\n\n  pre {\n    line-height: 18px;\n    padding: 11px 1rem;\n    white-space: pre-wrap;\n    background: rgba(0, 0, 0, 0.05);\n    color: ",";\n    border-radius: 3px;\n    margin: 1rem 0;\n  }\n\n  &.ReactModal__Body--open {\n    overflow: hidden;\n    &.hide-intercom #intercom-container {\n      display: none;\n    }\n  }\n\n  .ReactModalPortal > div {\n    opacity: 0;\n  }\n\n  .ReactModalPortal .ReactModal__Overlay {\n    transition: all 200ms ease-in;\n\n    &--after-open {\n      opacity: 1;\n    }\n    &--before-close {\n      opacity: 0;\n    }\n  }\n"],["\n  font-family: ",";\n  font-size: ","px;\n  color: ",";\n\n  margin: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: ",";\n    margin: 0;\n    padding: 0;\n  }\n\n  button,\n  input,\n  textarea,\n  select {\n    font-family: ",";\n  }\n\n  sub,\n  sup {\n    font-size: 0.8em;\n  }\n\n  sub {\n    bottom: -0.2em;\n  }\n\n  sup {\n    top: -0.2em;\n  }\n\n  b,\n  em {\n    font-weight: ",";\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid ",";\n    clear: both;\n    margin-bottom: 1.25rem;\n  }\n\n  code,\n  pre {\n    font-family: ",";\n    font-size: ","px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    display: inline-block;\n    padding-left: 2px;\n    padding-right: 2px;\n    vertical-align: baseline;\n    color: ",";\n  }\n\n  pre {\n    line-height: 18px;\n    padding: 11px 1rem;\n    white-space: pre-wrap;\n    background: rgba(0, 0, 0, 0.05);\n    color: ",";\n    border-radius: 3px;\n    margin: 1rem 0;\n  }\n\n  &.ReactModal__Body--open {\n    overflow: hidden;\n    &.hide-intercom #intercom-container {\n      display: none;\n    }\n  }\n\n  .ReactModalPortal > div {\n    opacity: 0;\n  }\n\n  .ReactModalPortal .ReactModal__Overlay {\n    transition: all 200ms ease-in;\n\n    &--after-open {\n      opacity: 1;\n    }\n    &--before-close {\n      opacity: 0;\n    }\n  }\n"])),J.type.primary,J.size.s3,U.darkest,J.weight.regular,J.type.primary,J.weight.bold,U.border,J.type.code,J.size.s2-1,U.secondary,U.darkest),Z=t(Y||(Y=i(["\n  body {\n    ","\n  }\n  // prevent mouse-clicks from focusing elements\n  // this removes the ugly blue outline\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n"],["\n  body {\n    ","\n  }\n  // prevent mouse-clicks from focusing elements\n  // this removes the ugly blue outline\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n"])),X),ee=Object.freeze({__proto__:null,bodyStyles:X,fontUrl:"https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap",GlobalStyle:Z}),ne=a($||($=i(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"],["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]))),re=a(H||(H=i(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n"],["\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n"]))),te=a(B||(B=i(["\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n"],["\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n"]))),ae=a(G||(G=i(["\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n"],["\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n"]))),oe=a(N||(N=i(["\n  0% { transform:rotate(-3deg) }\n  1.68421% { transform:rotate(3deg) }\n  2.10526% { transform:rotate(6deg) }\n  3.78947% { transform:rotate(-6deg) }\n  4.21053% { transform:rotate(-6deg) }\n  5.89474% { transform:rotate(6deg) }\n  6.31579% { transform:rotate(6deg) }\n  8% { transform:rotate(-6deg) }\n  8.42105% { transform:rotate(-6deg) }\n  10.10526% { transform:rotate(6deg) }\n  10.52632% { transform:rotate(6deg) }\n  12.21053% { transform:rotate(-6deg) }\n  12.63158% { transform:rotate(-6deg) }\n  14.31579% { transform:rotate(6deg) }\n  15.78947% { transform:rotate(0deg) }\n  100% { transform:rotate(0deg) }\n"],["\n  0% { transform:rotate(-3deg) }\n  1.68421% { transform:rotate(3deg) }\n  2.10526% { transform:rotate(6deg) }\n  3.78947% { transform:rotate(-6deg) }\n  4.21053% { transform:rotate(-6deg) }\n  5.89474% { transform:rotate(6deg) }\n  6.31579% { transform:rotate(6deg) }\n  8% { transform:rotate(-6deg) }\n  8.42105% { transform:rotate(-6deg) }\n  10.10526% { transform:rotate(6deg) }\n  10.52632% { transform:rotate(6deg) }\n  12.21053% { transform:rotate(-6deg) }\n  12.63158% { transform:rotate(-6deg) }\n  14.31579% { transform:rotate(6deg) }\n  15.78947% { transform:rotate(0deg) }\n  100% { transform:rotate(0deg) }\n"]))),ie=r(L||(L=i(["\n  animation: "," 1.5s ease-in-out infinite;\n  background: ",";\n  color: transparent;\n  cursor: progress;\n"],["\n  animation: "," 1.5s ease-in-out infinite;\n  background: ",";\n  color: transparent;\n  cursor: progress;\n"])),re,U.mediumlight),se=Object.freeze({__proto__:null,easing:{rubber:"cubic-bezier(0.175, 0.885, 0.335, 1.05)"},rotate360:ne,glow:re,float:te,jiggle:ae,shake:oe,inlineGlow:ie});export{d as Button,se as animation,ee as global,W as styles};
//# sourceMappingURL=index.js.map
