(()=>{"use strict";const e=()=>{const e=document.createElement("div");return{addImg:(t,n)=>{const a=document.createElement("img");a.src=t,a.alt=n,e.appendChild(a)},addLabel:(t,n,a)=>{const r=document.createElement(t);a&&r.classList.add(a),r.textContent=n,e.appendChild(r)},addInput:(t,n,a)=>{const r=document.createElement("input");r.setAttribute("type",t),n&&r.setAttribute("name",n),a&&(r.value=a),e.appendChild(r)},addSelect:t=>{const n=document.createElement("select");return t&&n.setAttribute("name",t),e.appendChild(n),{addOption:(e,t)=>{const a=document.createElement("option");a.setAttribute("value",e),a.style.backgroundImage="url('./IMG/flag0.png')",a.textContent=t,n.appendChild(a)}}},addTextArea:(t,n)=>{const a=document.createElement("textarea");a.rows=3,t&&a.setAttribute("name",t),n&&(a.value=n),e.appendChild(a)},addButton:(t,n)=>{const a=document.createElement("button");return a.textContent=t,a.setAttribute("value",n),e.appendChild(a),a},getWrapper:t=>(t&&e.classList.add(t),e)}};function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function a(e){t(1,arguments);var a=n(e),r=a.getTime();return r}function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function i(e){t(1,arguments);var a=n(e),r=a.getFullYear(),i=a.getMonth(),o=new Date(0);return o.setFullYear(r,i+1,0),o.setHours(0,0,0,0),o.getDate()}function o(e,a){t(2,arguments);var o=n(e),d=r(a),s=o.getFullYear(),u=o.getDate(),c=new Date(0);c.setFullYear(s,d,15),c.setHours(0,0,0,0);var l=i(c);return o.setMonth(d,Math.min(u,l)),o}function d(e,a){if(t(2,arguments),"object"!=typeof a||null===a)throw new RangeError("values parameter must be an object");var i=n(e);return isNaN(i)?new Date(NaN):(null!=a.year&&i.setFullYear(a.year),null!=a.month&&(i=o(i,a.month)),null!=a.date&&i.setDate(r(a.date)),null!=a.hours&&i.setHours(r(a.hours)),null!=a.minutes&&i.setMinutes(r(a.minutes)),null!=a.seconds&&i.setSeconds(r(a.seconds)),null!=a.milliseconds&&i.setMilliseconds(r(a.milliseconds)),i)}function s(e){t(1,arguments);var a=n(e);return!isNaN(a)}var u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function c(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var l,m={date:c({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:c({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:c({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},p={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var d=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=a.match(o);if(!d)return null;var s,u=d[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(c):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(c),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(u.length)}}}const f={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof u[e]?u[e]:1===t?u[e].one:u[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:m,formatRelative:function(e,t,n,a){return p[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(l.matchPattern);if(!r)return null;var i=r[0],o=n.match(l.parsePattern);if(!o)return null;var d=l.valueCallback?l.valueCallback(o[0]):o[0];return{value:d=a.valueCallback?a.valueCallback(d):d,rest:n.slice(i.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function y(e,a){t(2,arguments);var i=n(e).getTime(),o=r(a);return new Date(i+o)}function w(e,n){t(2,arguments);var a=r(n);return y(e,-a)}function v(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}const b=function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return v("yy"===t?a%100:a,t.length)},W=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):v(n+1,2)},M=function(e,t){return v(e.getUTCDate(),t.length)},C=function(e,t){return v(e.getUTCHours()%12||12,t.length)},T=function(e,t){return v(e.getUTCHours(),t.length)},x=function(e,t){return v(e.getUTCMinutes(),t.length)},E=function(e,t){return v(e.getUTCSeconds(),t.length)},S=function(e,t){var n=t.length,a=e.getUTCMilliseconds();return v(Math.floor(a*Math.pow(10,n-3)),t.length)};var I=864e5;function k(e){t(1,arguments);var a=1,r=n(e),i=r.getUTCDay(),o=(i<a?7:0)+i-a;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function D(e){t(1,arguments);var a=n(e),r=a.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=k(i),d=new Date(0);d.setUTCFullYear(r,0,4),d.setUTCHours(0,0,0,0);var s=k(d);return a.getTime()>=o.getTime()?r+1:a.getTime()>=s.getTime()?r:r-1}function L(e){t(1,arguments);var n=D(e),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=k(a);return r}var P=6048e5;function q(e,a){t(1,arguments);var i=a||{},o=i.locale,d=o&&o.options&&o.options.weekStartsOn,s=null==d?0:r(d),u=null==i.weekStartsOn?s:r(i.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=n(e),l=c.getUTCDay(),m=(l<u?7:0)+l-u;return c.setUTCDate(c.getUTCDate()-m),c.setUTCHours(0,0,0,0),c}function U(e,a){t(1,arguments);var i=n(e,a),o=i.getUTCFullYear(),d=a||{},s=d.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:r(u),l=null==d.firstWeekContainsDate?c:r(d.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(o+1,0,l),m.setUTCHours(0,0,0,0);var p=q(m,a),g=new Date(0);g.setUTCFullYear(o,0,l),g.setUTCHours(0,0,0,0);var h=q(g,a);return i.getTime()>=p.getTime()?o+1:i.getTime()>=h.getTime()?o:o-1}function O(e,n){t(1,arguments);var a=n||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,d=null==o?1:r(o),s=null==a.firstWeekContainsDate?d:r(a.firstWeekContainsDate),u=U(e,n),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var l=q(c,n);return l}var N=6048e5;function Y(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+v(i,2)}function G(e,t){return e%60==0?(e>0?"-":"+")+v(Math.abs(e)/60,2):B(e,t)}function B(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+v(Math.floor(r/60),2)+n+v(r%60,2)}const F={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return b(e,t)},Y:function(e,t,n,a){var r=U(e,a),i=r>0?r:1-r;return"YY"===t?v(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):v(i,t.length)},R:function(e,t){return v(D(e),t.length)},u:function(e,t){return v(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return v(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return v(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return W(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return v(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,a,r,i){var o=function(e,a){t(1,arguments);var r=n(e),i=q(r,a).getTime()-O(r,a).getTime();return Math.round(i/N)+1}(e,i);return"wo"===a?r.ordinalNumber(o,{unit:"week"}):v(o,a.length)},I:function(e,a,r){var i=function(e){t(1,arguments);var a=n(e),r=k(a).getTime()-L(a).getTime();return Math.round(r/P)+1}(e);return"Io"===a?r.ordinalNumber(i,{unit:"week"}):v(i,a.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):M(e,t)},D:function(e,a,r){var i=function(e){t(1,arguments);var a=n(e),r=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var i=a.getTime(),o=r-i;return Math.floor(o/I)+1}(e);return"Do"===a?r.ordinalNumber(i,{unit:"dayOfYear"}):v(i,a.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return v(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return v(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return v(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return C(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):T(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):v(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):v(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):x(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):E(e,t)},S:function(e,t){return S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return G(r);case"XXXX":case"XX":return B(r);case"XXXXX":case"XXX":default:return B(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return G(r);case"xxxx":case"xx":return B(r);case"xxxxx":case"xxx":default:return B(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Y(r,":");case"OOOO":default:return"GMT"+B(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Y(r,":");case"zzzz":default:return"GMT"+B(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return v(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return v((a._originalDate||e).getTime(),t.length)}};function A(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function H(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const z={p:H,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return A(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",A(r,t)).replace("{{time}}",H(i,t))}};var j=6e4;function X(e){return e.getTime()%j}function Q(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var a=n>0?(j+X(t))%j:X(t);return n*j+a}var R=["D","DD"],$=["YY","YYYY"];function J(e){return-1!==R.indexOf(e)}function _(e){return-1!==$.indexOf(e)}function V(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var K=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ee=/^'([^]*?)'?$/,te=/''/g,ne=/[a-zA-Z]/;function ae(e,a,i){t(2,arguments);var o=String(a),d=i||{},u=d.locale||f,c=u.options&&u.options.firstWeekContainsDate,l=null==c?1:r(c),m=null==d.firstWeekContainsDate?l:r(d.firstWeekContainsDate);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=u.options&&u.options.weekStartsOn,g=null==p?0:r(p),h=null==d.weekStartsOn?g:r(d.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var y=n(e);if(!s(y))throw new RangeError("Invalid time value");var v=Q(y),b=w(y,v),W={firstWeekContainsDate:m,weekStartsOn:h,locale:u,_originalDate:y},M=o.match(Z).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,z[t])(e,u.formatLong,W):e})).join("").match(K).map((function(t){if("''"===t)return"'";var n=t[0];if("'"===n)return re(t);var r=F[n];if(r)return!d.useAdditionalWeekYearTokens&&_(t)&&V(t,a,e),!d.useAdditionalDayOfYearTokens&&J(t)&&V(t,a,e),r(b,t,u.localize,W);if(n.match(ne))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return t})).join("");return M}function re(e){return e.match(ee)[1].replace(te,"'")}let ie=d(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0}),oe=function(e,a){t(1,arguments);var i=a||{},o=i.locale,d=o&&o.options&&o.options.weekStartsOn,s=null==d?0:r(d),u=null==i.weekStartsOn?s:r(i.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=n(e),l=c.getDay(),m=(l<u?7:0)+l-u;return c.setDate(c.getDate()-m),c.setHours(0,0,0,0),c}(ie,{weekStartsOn:1}),de=function(e,a){t(1,arguments);var i=a||{},o=i.locale,d=o&&o.options&&o.options.weekStartsOn,s=null==d?0:r(d),u=null==i.weekStartsOn?s:r(i.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=n(e),l=c.getDay(),m=6+(l<u?-7:0)-(l-u);return c.setDate(c.getDate()+m),c.setHours(23,59,59,999),c}(ie,{weekStartsOn:1}),se=ae(ie,"EEEE MMM dd yyyy"),ue=ae(oe,"EEEE MMM dd yyyy"),ce=ae(de,"EEEE MMM dd yyyy"),le=e=>ae(new Date(e),"EEEE MMM dd yyyy"),me=e=>d(new Date(e),{hours:0,minutes:0,seconds:0,milliseconds:0});const pe=(()=>{const e=()=>JSON.parse(localStorage.getItem("data")),t=e(),n=()=>t.sort(((e,t)=>{let n=new Date(e.deadline),a=new Date(t.deadline);if(n>a)return 1;if(n<a)return-1;if(n=a){let n=e.priority,a=t.priority;if(n>a)return-1;if(n<a)return 1}return 0}));return{view:e,initialize:()=>{null==localStorage.getItem("data")&&localStorage.setItem("data","[]")},addItem:()=>{let e={title:document.querySelector(".title input").value,description:document.querySelector(".description input").value,deadline:document.querySelector(".deadline input").value,priority:document.querySelector(".priorityWrapper .selected").dataset.priority,notes:document.querySelector(".notes textarea").value};t.push(e),n(),localStorage.setItem("data",JSON.stringify(t))},sortItems:n,removeItem:e=>{n().splice(e,1),n(),localStorage.setItem("data",JSON.stringify(t))},editItem:e=>{const a=document.querySelector(".title input").value,r=document.querySelector(".description input").value,i=document.querySelector(".deadline input").value,o=document.querySelector(".priorityWrapper .selected").dataset.priority,d=document.querySelector(".notes textarea").value;let s=t[e];s.title=a,s.description=r,s.deadline=i,s.priority=o,s.notes=d,n(),localStorage.setItem("data",JSON.stringify(t))},getTodayItems:()=>n().filter((e=>a(me(e.deadline))<=a(ie))),getWeeklyItems:()=>n().filter((e=>a(me(e.deadline))<=a(de)))}})();function ge(){const t=document.createElement("div"),n=e();n.addLabel("h1","This Week"),n.addLabel("h3",`${ue} - ${ce}`);const a=e();he(a.getWrapper());const r=e();return r.addButton("+","+"),t.append(n.getWrapper("titleBox"),a.getWrapper("itemsWrapper"),r.getWrapper("addNewTask")),t.classList.add("weekBox"),t}function he(t){pe.getWeeklyItems().length>=1&&pe.getWeeklyItems().forEach((n=>{const r=document.createElement("div");r.dataset.index=pe.sortItems().indexOf(n);const i=e();i.addLabel("h5",`${n.title}`,"itemTitle"),i.addLabel("h5",`DEADLINE: ${le(n.deadline)}`,"itemDeadline"),a(me(n.deadline))<a(ie)&&i.getWrapper().classList.add("expired");const o=e();0==n.priority?o.addImg("./IMG/flag0.png"):1==n.priority?o.addImg("./IMG/flag1.png"):o.addImg("./IMG/flag2.png");const d=document.createElement("div");d.classList.add("itemInteractions");const s=e();s.addImg("./IMG/edit.png");const u=e();u.addImg("./IMG/delete.png"),u.getWrapper().addEventListener("click",(()=>{be(r.dataset.index),he(t)})),s.getWrapper().addEventListener("click",(()=>{ve(r.dataset.index)})),d.append(s.getWrapper("editItem"),u.getWrapper("deleteItem")),r.append(o.getWrapper("itemPriority"),i.getWrapper("itemInfo"),d),r.classList.add("singleItem"),t.append(r)}))}function fe(){const t=document.createElement("div"),n=e();n.addLabel("h1","Today"),n.addLabel("h3",`${se}`);const a=e();ye(a.getWrapper());const r=e();return r.addButton("+","+"),t.append(n.getWrapper("titleBox"),a.getWrapper("itemsWrapper"),r.getWrapper("addNewTask")),t.classList.add("todayBox"),t}function ye(t){pe.getTodayItems().length>=1&&pe.getTodayItems().forEach((n=>{const r=document.createElement("div");r.dataset.index=pe.sortItems().indexOf(n);const i=e();i.addLabel("h5",`${n.title}`,"itemTitle"),i.addLabel("h5",`DEADLINE: ${le(n.deadline)}`,"itemDeadline"),a(me(n.deadline))<a(ie)&&i.getWrapper().classList.add("expired");const o=e();0==n.priority?o.addImg("./IMG/flag0.png"):1==n.priority?o.addImg("./IMG/flag1.png"):o.addImg("./IMG/flag2.png");const d=document.createElement("div");d.classList.add("itemInteractions");const s=e();s.addImg("./IMG/edit.png");const u=e();u.addImg("./IMG/delete.png"),u.getWrapper().addEventListener("click",(()=>{be(r.dataset.index),ye(t)})),s.getWrapper().addEventListener("click",(()=>{ve(r.dataset.index)})),d.append(s.getWrapper("editItem"),u.getWrapper("deleteItem")),r.append(o.getWrapper("itemPriority"),i.getWrapper("itemInfo"),d),r.classList.add("singleItem"),t.append(r)}))}function we(){const t=document.querySelector(".mainBox");document.querySelector(".addNewTask button").addEventListener("click",(()=>{t.removeChild(t.lastChild),t.appendChild(function(){const t=document.createElement("div");let n=e();n.addLabel("h1","Task Editor");let a=e();a.addLabel("h3","Title"),a.addInput("text","title");let r=e();r.addLabel("h3","Description"),r.addInput("text","description");let i=e();i.addLabel("h3","Deadline"),i.addInput("date","deadline");let o=e();o.addLabel("h3","Priority");let d=document.createElement("div");d.classList.add("priorityWrapper");let s=e();s.getWrapper().dataset.priority=0,s.addImg("./IMG/flag0.png","Low Priority Flag");let u=e();u.getWrapper().dataset.priority=1,u.addImg("./IMG/flag1.png","Medium Priority Flag");let c=e();c.getWrapper().dataset.priority=2,c.addImg("./IMG/flag2.png","High Priority Flag"),d.append(s.getWrapper("selected"),u.getWrapper(),c.getWrapper()),o.getWrapper().appendChild(d);let l=e();l.addLabel("h3","Notes"),l.addTextArea("notes");let m=e();m.addButton("SUBMIT","submitTask");let p=e();return p.getWrapper().append(a.getWrapper("title"),r.getWrapper("description"),i.getWrapper("deadline"),o.getWrapper("priority"),l.getWrapper("notes"),m.getWrapper("buttons")),t.append(n.getWrapper("containerTitle"),p.getWrapper("containerContent")),t.classList.add("textForm"),t}()),We(),function(){const e=document.querySelector(".textForm .buttons button"),t=document.querySelector(".mainBox");e.addEventListener("click",(()=>{const e=document.querySelector(".title input").value,n=document.querySelector(".deadline input").value,a=document.querySelector(".title"),r=document.querySelector(".deadline"),i=document.querySelector(".title p"),o=document.querySelector(".deadline p");if(i&&a.removeChild(i),o&&r.removeChild(o),""==e){const e=document.createElement("p");e.textContent="Enter a valid title",a.appendChild(e)}if(""==n){const e=document.createElement("p");e.textContent="Enter a valid deadline",r.appendChild(e)}""!=n&&""!=e&&(pe.addItem(),t.removeChild(t.lastChild),t.append(Me()),we())}))}()}))}function ve(t){const n=document.querySelector(".mainBox");n.removeChild(n.lastChild),n.appendChild(function(t){const n=document.createElement("div");let a=pe.sortItems()[t],r=e();r.addLabel("h1","Task Editor");let i=e();i.addLabel("h3","Title"),i.addInput("text","title",`${a.title}`);let o=e();o.addLabel("h3","Description"),o.addInput("text","description",`${a.description}`);let d=e();d.addLabel("h3","Deadline"),d.addInput("date","deadline",`${a.deadline}`);let s=e();s.addLabel("h3","Priority");let u=document.createElement("div");u.classList.add("priorityWrapper");let c=e();c.getWrapper().dataset.priority=0,c.addImg("./IMG/flag0.png","Low Priority Flag");let l=e();l.getWrapper().dataset.priority=1,l.addImg("./IMG/flag1.png","Medium Priority Flag");let m=e();m.getWrapper().dataset.priority=2,m.addImg("./IMG/flag2.png","High Priority Flag"),u.append(0==a.priority?c.getWrapper("selected"):c.getWrapper(),1==a.priority?l.getWrapper("selected"):l.getWrapper(),2==a.priority?m.getWrapper("selected"):m.getWrapper()),s.getWrapper().appendChild(u);let p=e();p.addLabel("h3","Notes"),p.addTextArea("notes",`${a.notes}`);let g=e();g.addButton("SUBMIT","submitTask");let h=e();return h.getWrapper().append(i.getWrapper("title"),o.getWrapper("description"),d.getWrapper("deadline"),s.getWrapper("priority"),p.getWrapper("notes"),g.getWrapper("buttons")),n.append(r.getWrapper("containerTitle"),h.getWrapper("containerContent")),n.classList.add("textForm"),n}(t)),We(),document.querySelector(".textForm .buttons button").addEventListener("click",(()=>{const e=document.querySelector(".title input").value,a=document.querySelector(".deadline input").value,r=document.querySelector(".title"),i=document.querySelector(".deadline"),o=document.querySelector(".title p"),d=document.querySelector(".deadline p");if(o&&r.removeChild(o),d&&i.removeChild(d),""==e){const e=document.createElement("p");e.textContent="Enter a valid title",r.appendChild(e)}if(""==a){const e=document.createElement("p");e.textContent="Enter a valid deadline",i.appendChild(e)}""!=a&&""!=e&&(pe.editItem(t),n.removeChild(n.lastChild),n.append(Me()),we())}))}function be(e){const t=document.querySelector(".itemsWrapper");if(t)for(pe.removeItem(e);t.firstChild;)t.removeChild(t.lastChild)}function We(){const e=document.querySelectorAll(".priorityWrapper div");e&&e.forEach((t=>t.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("selected"))),t.classList.add("selected")}))))}function Me(){const t=document.createElement("div"),n=e();n.addLabel("h1","Archive");const a=e();Ce(a.getWrapper());const r=e();return r.addButton("+","+"),t.append(n.getWrapper("titleBox"),a.getWrapper("itemsWrapper"),r.getWrapper("addNewTask")),t.classList.add("archiveBox"),t}function Ce(t){pe.sortItems().length>=1&&pe.sortItems().forEach((n=>{const r=document.createElement("div");r.dataset.index=pe.sortItems().indexOf(n);const i=e();i.addLabel("h5",`${n.title}`,"itemTitle"),i.addLabel("h5",`DEADLINE: ${le(n.deadline)}`,"itemDeadline"),a(me(n.deadline))<a(ie)&&i.getWrapper().classList.add("expired");const o=e();0==n.priority?o.addImg("./IMG/flag0.png"):1==n.priority?o.addImg("./IMG/flag1.png"):o.addImg("./IMG/flag2.png");const d=document.createElement("div");d.classList.add("itemInteractions");const s=e();s.addImg("./IMG/edit.png");const u=e();u.addImg("./IMG/delete.png"),u.getWrapper().addEventListener("click",(()=>{be(r.dataset.index),Ce(t)})),s.getWrapper().addEventListener("click",(()=>{ve(r.dataset.index)})),d.append(s.getWrapper("editItem"),u.getWrapper("deleteItem")),r.append(o.getWrapper("itemPriority"),i.getWrapper("itemInfo"),d),r.classList.add("singleItem"),t.append(r)}))}const Te=document.querySelector(".content");pe.initialize(),function(){const t=document.createElement("div"),n=function(){const t=document.createElement("div"),n=e();n.addImg("./IMG/archive.png","archive icon"),n.addLabel("p","Archive");const a=e();a.addImg("./IMG/today.png","today icon"),a.addLabel("p","Today");const r=e();return r.addImg("./IMG/week.png","week icon"),r.addLabel("p","This week"),t.append(n.getWrapper("archive"),a.getWrapper("today"),r.getWrapper("thisWeek")),t.classList.add("sidebar"),t}(),a=Me(),r=function(){const e=document.createElement("div");return e.classList.add("mainBox"),e}();r.appendChild(a),t.append(n,r),t.classList.add("homeWrapper"),Te.appendChild(t)}(),function(){const e=document.querySelector(".sidebar .archive"),t=document.querySelector(".sidebar .thisWeek"),n=document.querySelector(".sidebar .today"),a=document.querySelector(".mainBox");e.addEventListener("click",(()=>{a.removeChild(a.lastChild),a.append(Me()),we()})),t.addEventListener("click",(()=>{a.removeChild(a.lastChild),a.append(ge()),we()})),n.addEventListener("click",(()=>{a.removeChild(a.lastChild),a.append(fe()),we()}))}(),we()})();