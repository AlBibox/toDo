(()=>{"use strict";const t=()=>{const t=document.createElement("div");return{addImg:(e,n)=>{const r=document.createElement("img");r.src=e,r.alt=n,t.appendChild(r)},addLabel:(e,n)=>{const r=document.createElement(e);r.textContent=n,t.appendChild(r)},addInput:(e,n,r)=>{const a=document.createElement("input");a.setAttribute("type",e),n&&a.setAttribute("name",n),r&&a.setAttribute("value",r),t.appendChild(a)},addSelect:e=>{const n=document.createElement("select");return e&&n.setAttribute("name",e),t.appendChild(n),{addOption:(t,e)=>{const r=document.createElement("option");r.setAttribute("value",t),r.textContent=e,n.appendChild(r)}}},addTextArea:e=>{const n=document.createElement("textarea");n.rows=3,e&&n.setAttribute("name",e),t.appendChild(n)},addButton:(e,n)=>{const r=document.createElement("button");return r.textContent=e,r.setAttribute("value",n),t.appendChild(r),r},getWrapper:e=>(e&&t.classList.add(e),t)}};function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(t){e(1,arguments);var r=n(t);return!isNaN(r)}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var o,u={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,d=a.width?String(a.width):t.defaultWidth;r=t.values[d]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function c(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var d,s=u[0],c=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(c)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(c):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(c),d=t.valueCallback?t.valueCallback(d):d,{value:d=a.valueCallback?a.valueCallback(d):d,rest:r.slice(s.length)}}}const l={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(t,e,n,r){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(o.matchPattern);if(!a)return null;var i=a[0],u=n.match(o.parsePattern);if(!u)return null;var d=o.valueCallback?o.valueCallback(u[0]):u[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(i.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function h(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(t,r){e(2,arguments);var a=n(t).getTime(),i=h(r);return new Date(a+i)}function f(t,n){e(2,arguments);var r=h(n);return m(t,-r)}function g(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const w=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return g("yy"===e?r%100:r,e.length)},p=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):g(n+1,2)},v=function(t,e){return g(t.getUTCDate(),e.length)},b=function(t,e){return g(t.getUTCHours()%12||12,e.length)},y=function(t,e){return g(t.getUTCHours(),e.length)},T=function(t,e){return g(t.getUTCMinutes(),e.length)},C=function(t,e){return g(t.getUTCSeconds(),e.length)},M=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return g(Math.floor(r*Math.pow(10,n-3)),e.length)};var x=864e5;function D(t){e(1,arguments);var r=1,a=n(t),i=a.getUTCDay(),o=(i<r?7:0)+i-r;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function W(t){e(1,arguments);var r=n(t),a=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=D(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var d=D(u);return r.getTime()>=o.getTime()?a+1:r.getTime()>=d.getTime()?a:a-1}function S(t){e(1,arguments);var n=W(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=D(r);return a}var E=6048e5;function P(t,r){e(1,arguments);var a=r||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:h(o),d=null==a.weekStartsOn?u:h(a.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=n(t),c=s.getUTCDay(),l=(c<d?7:0)+c-d;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function k(t,r){e(1,arguments);var a=n(t,r),i=a.getUTCFullYear(),o=r||{},u=o.locale,d=u&&u.options&&u.options.firstWeekContainsDate,s=null==d?1:h(d),c=null==o.firstWeekContainsDate?s:h(o.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,c),l.setUTCHours(0,0,0,0);var m=P(l,r),f=new Date(0);f.setUTCFullYear(i,0,c),f.setUTCHours(0,0,0,0);var g=P(f,r);return a.getTime()>=m.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function U(t,n){e(1,arguments);var r=n||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:h(i),u=null==r.firstWeekContainsDate?o:h(r.firstWeekContainsDate),d=k(t,n),s=new Date(0);s.setUTCFullYear(d,0,u),s.setUTCHours(0,0,0,0);var c=P(s,n);return c}var q=6048e5;function O(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+g(i,2)}function L(t,e){return t%60==0?(t>0?"-":"+")+g(Math.abs(t)/60,2):Y(t,e)}function Y(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+g(Math.floor(a/60),2)+n+g(a%60,2)}const N={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return w(t,e)},Y:function(t,e,n,r){var a=k(t,r),i=a>0?a:1-a;return"YY"===e?g(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):g(i,e.length)},R:function(t,e){return g(W(t),e.length)},u:function(t,e){return g(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return g(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return g(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return p(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return g(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,r,a,i){var o=function(t,r){e(1,arguments);var a=n(t),i=P(a,r).getTime()-U(a,r).getTime();return Math.round(i/q)+1}(t,i);return"wo"===r?a.ordinalNumber(o,{unit:"week"}):g(o,r.length)},I:function(t,r,a){var i=function(t){e(1,arguments);var r=n(t),a=D(r).getTime()-S(r).getTime();return Math.round(a/E)+1}(t);return"Io"===r?a.ordinalNumber(i,{unit:"week"}):g(i,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v(t,e)},D:function(t,r,a){var i=function(t){e(1,arguments);var r=n(t),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var i=r.getTime(),o=a-i;return Math.floor(o/x)+1}(t);return"Do"===r?a.ordinalNumber(i,{unit:"dayOfYear"}):g(i,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return g(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return g(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return g(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):g(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):g(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):C(t,e)},S:function(t,e){return M(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return L(a);case"XXXX":case"XX":return Y(a);case"XXXXX":case"XXX":default:return Y(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return L(a);case"xxxx":case"xx":return Y(a);case"xxxxx":case"xxx":default:return Y(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+O(a,":");case"OOOO":default:return"GMT"+Y(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+O(a,":");case"zzzz":default:return"GMT"+Y(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return g(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return g((r._originalDate||t).getTime(),e.length)}};function A(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function B(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const I={p:B,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return A(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",A(a,e)).replace("{{time}}",B(i,e))}};var z=6e4;function F(t){return t.getTime()%z}function G(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(z+F(e))%z:F(e);return n*z+r}var X=["D","DD"],j=["YY","YYYY"];function H(t){return-1!==X.indexOf(t)}function Q(t){return-1!==j.indexOf(t)}function R(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$=/^'([^]*?)'?$/,K=/''/g,V=/[a-zA-Z]/;function Z(t,a,i){e(2,arguments);var o=String(a),u=i||{},d=u.locale||l,s=d.options&&d.options.firstWeekContainsDate,c=null==s?1:h(s),m=null==u.firstWeekContainsDate?c:h(u.firstWeekContainsDate);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=d.options&&d.options.weekStartsOn,w=null==g?0:h(g),p=null==u.weekStartsOn?w:h(u.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var v=n(t);if(!r(v))throw new RangeError("Invalid time value");var b=G(v),y=f(v,b),T={firstWeekContainsDate:m,weekStartsOn:p,locale:d,_originalDate:v},C=o.match(_).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,I[e])(t,d.formatLong,T):t})).join("").match(J).map((function(e){if("''"===e)return"'";var n=e[0];if("'"===n)return tt(e);var r=N[n];if(r)return!u.useAdditionalWeekYearTokens&&Q(e)&&R(e,a,t),!u.useAdditionalDayOfYearTokens&&H(e)&&R(e,a,t),r(y,e,d.localize,T);if(n.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return e})).join("");return C}function tt(t){return t.match($)[1].replace(K,"'")}let et=Z(new Date,"EEEE MMM dd yyyy");const nt=(()=>{let t=[];return{list:t,addNewItem:()=>{let e={title:document.querySelector(".title input").value,description:document.querySelector(".description input").value,dueDate:document.querySelector(".dueDate input").value,priority:document.querySelector(".priority select").selectedOptions[0].value,notes:document.querySelector(".notes textarea").value};t.push(e),t.sort(((t,e)=>{let n=new Date(t.dueDate),r=new Date(e.dueDate);if(n>r)return 1;if(n<r)return-1;if(n=r){let n=t.priority,r=e.priority;if(n>r)return-1;if(n<r)return 1}return 0}))}}})(),rt=document.querySelector(".content");function at(){const e=document.createElement("div");let n=t();n.addLabel("h1","Today");let r=t();r.addLabel("h4",`${et}`);let a=t();return a.addButton("+","+"),e.append(n.getWrapper("title"),r.getWrapper("date"),function(){let e=nt.list;const n=document.createElement("div");return e.length>=1&&e.forEach((r=>{if(a=r.dueDate,Z(new Date(a),"EEEE MMM dd yyyy")==et){const a=document.createElement("div"),i=t();i.addLabel("h5",`${r.title}`);const o=t();o.addImg("./IMG/flag.png");const u=document.createElement("div");u.classList.add("itemInteractions");const d=t();d.addImg("./IMG/edit.png");const s=t();s.addImg("./IMG/archive.png"),s.getWrapper().dataset.index=e.indexOf(r),u.append(d.getWrapper("editItem"),s.getWrapper("archiveItem")),a.append(o.getWrapper("itemPriority"),i.getWrapper("itemTitle"),u),a.classList.add("singleItem"),n.append(a)}var a})),n.classList.add("itemsWrapper"),n}(),a.getWrapper("addTask")),e.classList.add("todayBox"),e}!function(){const e=document.createElement("div"),n=function(){const e=document.createElement("div"),n=t();n.addImg("./IMG/today.png","today icon"),n.addLabel("p","Today");const r=t();return r.addImg("./IMG/week.png","week icon"),r.addLabel("p","This week"),e.append(n.getWrapper("today"),r.getWrapper("thisWeek")),e.classList.add("sidebar"),e}(),r=at(),a=function(){const t=document.createElement("div");return t.classList.add("mainBox"),t}();a.appendChild(r),e.append(n,a),e.classList.add("homeWrapper"),rt.appendChild(e)}(),function e(){const n=document.querySelector(".mainBox"),r=document.querySelector(".todayBox"),a=document.querySelector(".textForm");r&&document.querySelector(".todayBox button").addEventListener("click",(()=>{n.removeChild(r),n.appendChild(function(){const e=document.createElement("div");let n=t();n.addLabel("h3","Title"),n.addInput("text","title");let r=t();r.addLabel("h3","Description"),r.addInput("text","description");let a=t();a.addLabel("h3","Due Date"),a.addInput("date","dueDate");let i=t();i.addLabel("h3","Priority");let o=i.addSelect("priority");o.addOption("0","0"),o.addOption("1","1"),o.addOption("2","2");let u=t();u.addLabel("h3","Notes"),u.addTextArea("notes");let d=t();return d.addButton("ADD TASK","addTask"),e.append(n.getWrapper("title"),r.getWrapper("description"),a.getWrapper("dueDate"),i.getWrapper("priority"),u.getWrapper("notes"),d.getWrapper("buttons")),e.classList.add("textForm"),e}()),e()})),a&&document.querySelector(".textForm .buttons button").addEventListener("click",(()=>{nt.addNewItem(),n.removeChild(a),n.appendChild(at()),e()}))}()})();