let ValueConverter;
/**
 * Compares 2 values for equality.
 * @param a Value 1
 * @param b Value 2
 * @param typeSafeOrOptions A boolean or option object to define how the values should be compared.
 * If it is a boolean, a value of false will perform a type unsafe comparison, i.e. 1 == "1", while
 * a value of true will cause the function to only consider the values equal if their types are also equal.
 * @preserve (Part of the public API)
 */
function _tchmi_equal(a,b,typeSafeOrOptions=!0){if(a===b)return!0;if(null===a||null===b)return!1;let options={convertPrimitives:!1,compareDates:!1};"boolean"==typeof typeSafeOrOptions?options.convertPrimitives=!typeSafeOrOptions:(options.convertPrimitives=typeSafeOrOptions.convertPrimitives??!1,options.compareMaps=typeSafeOrOptions.compareMaps,options.compareSets=typeSafeOrOptions.compareSets,options.compareDates=typeSafeOrOptions.compareDates??!1);let typeA=typeof a,typeB=typeof b;if(typeA!==typeB){if(options.convertPrimitives)switch(typeA){case"boolean":switch(typeB){case"number":return a==b;case"string":return a.toString()===b.toLowerCase()}break;case"number":switch(typeB){case"boolean":return a==b;case"string":return""!==b&&a==b}break;case"string":switch(typeB){case"boolean":return a.toLowerCase()===b.toString();case"number":return""!==a&&a==b}}return!1}if("number"===typeA&&isNaN(a)&&isNaN(b))return!0;if(a instanceof Map&&b instanceof Map&&options.compareMaps){if(a.size!==b.size)return!1;const aIterator=a.entries(),bIterator=b.entries();let aResult=aIterator.next(),bResult=bIterator.next();for(;!aResult.done&&!bResult.done;){const[aKey,aValue]=aResult.value,[bKey,bValue]=bResult.value;if(options.compareMaps.deepCompareKeys){if(!_tchmi_equal(aKey,bKey,typeSafeOrOptions))return!1}else if(aKey!==bKey)return!1;if(options.compareMaps.deepCompareValues){if(!_tchmi_equal(aValue,bValue,typeSafeOrOptions))return!1}else if(aValue!==bValue)return!1;aResult=aIterator.next(),bResult=bIterator.next()}return!0}if(a instanceof Set&&b instanceof Set&&options.compareSets){if(a.size!==b.size)return!1;const aIterator=a.values(),bIterator=b.values();let aResult=aIterator.next(),bResult=bIterator.next();for(;!aResult.done&&!bResult.done;){if(options.compareSets.deepCompareValues){if(!_tchmi_equal(aResult.value,bResult.value,typeSafeOrOptions))return!1}else if(aResult.value!==bResult.value)return!1;aResult=aIterator.next(),bResult=bIterator.next()}return!0}if(a instanceof Date&&b instanceof Date&&options.compareDates)return a.valueOf()===b.valueOf();if("object"!==typeA||__tchmi_is_instanced_object(a)||__tchmi_is_instanced_object(b))return!1;let aIsArray=Array.isArray(a);if(aIsArray!==Array.isArray(b))return!1;if(aIsArray){let length=a.length;if(length!==b.length)return!1;for(let i=0;i<length;i++)if(!_tchmi_equal(a[i],b[i],typeSafeOrOptions))return!1;return!0}if(Object.keys(a).length!==Object.keys(b).length)return!1;for(let key in a){if(!b.hasOwnProperty(key))return!1;if(!_tchmi_equal(a[key],b[key],typeSafeOrOptions))return!1}return!0}import("./ValueConverter.js").then(module=>{ValueConverter=module}),window.tchmi_decode_control_characters=
/**
 * Converts string "\t"/"\n" (symbol world) to tab/newline (HTML world).
 * This supports escaping with "\\n"
 *
 * Some controls converted newline to space in all released tchmi versions.
 * So this helper can do this with the options.newlineToSpace, but
 * do not use that parameter for new controls.
 *
 * You also probably do not need options.preserveBackslash for controls.
 *
 * @param text The text to escape
 * @param options options
 * @returns The decoded representation of parameter text.
 * @preserve (Part of the public API)
 */
function(text,options){if(!text)return"";const newlineToSpace="boolean"==typeof options?options:options?.newlineToSpace??!1,preserveBackslash="boolean"!=typeof options&&(options?.preserveBackslash??!1);if("string"!=typeof text){if("function"!=typeof text.toString)return text;text=text.toString()}if(!text.includes("\\")&&!newlineToSpace)return text;newlineToSpace&&(text=text.replace(/^\\n|([^\\])\\n/g,"$1 ").replace(/^\\r|([^\\])\\r/g,"$1 "));let decoded="",prevIndex=0,index=text.indexOf("\\");for(;-1!==index;){decoded+=text.slice(prevIndex,index);let nextChar=text.charAt(index+1);switch(nextChar){case"n":decoded+="\n";break;case"r":decoded+="\r";break;case"t":decoded+="\t";break;case"\\":preserveBackslash&&"n"!==text.charAt(index+2)&&"r"!==text.charAt(index+2)&&"t"!==text.charAt(index+2)?decoded+="\\\\":decoded+="\\";break;default:decoded+=nextChar}prevIndex=index+2,index=text.indexOf("\\",prevIndex)}return decoded+=text.slice(prevIndex),decoded}
/**
 * Converts tab/newline (HTML world) to string "\t"/"\n" (symbol world).
 * This supports escaping with "\\t"
 *
 * @param text The text to encode
 * @returns The encoded representation of parameter text.
 * @preserve (Part of the public API)
 */,window.tchmi_encode_control_characters=function(text){if(!text)return"";if("string"!=typeof text){if("function"!=typeof text.toString)return text;text=text.toString()}return text.replace(/\\/gm,"\\\\").replace(/\n/gm,"\\n").replace(/\r/gm,"\\r").replace(/\t/gm,"\\t")}
/**
 * Encodes HTML
 * @param html The html to encode
 * @returns The encoded representation of parameter html.
 * @preserve (Part of the public API)
 */,window.tchmi_encode_html=function(html){"string"!=typeof html&&"function"==typeof html.toString&&(html=html.toString());return String(html).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}
/**
 * Decodes HTML
 * @param text The text to decode
 * @returns The decoded representation of parameter text.
 * "&#176;!\"&#167;$%&/()=?~#|&#233;&#232;€…™&#174;&#169;"
 * "°     !\"§     $%&/()=?~#|é     è     €…™®     ©"
 * @preserve (Part of the public API)
 */,window.tchmi_decode_html=function(text){"string"!=typeof text&&"function"==typeof text.toString&&(text=text.toString());return String(text).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#228;/g,"ä").replace(/&#196;/g,"Ä").replace(/&#246;/g,"ö").replace(/&#214;/g,"Ö").replace(/&#252;/g,"ü").replace(/&#220;/g,"Ü").replace(/&#223;/g,"ß").replace(/&#233;/g,"é").replace(/&#232;/g,"è").replace(/&#176;/g,"°").replace(/&#167;/g,"§").replace(/&#174;/g,"®").replace(/&#169;/g,"©").replace(/&#181;/g,"µ")}
/**
 * Encodes parts of uris including most reserved characters but will not encode '/' in path or '?', '&' and '=' in search parameters for example.
 * Only path will be encoded by default. Encoding of serch parameter values or hash can be activated optionally.
 * @param uri Uri
 * @param options Options
 * @param options.encodePath Is true by default. When true the path (except '/') will be encoded.
 * @param options.encodeSearchParams Is false by default. When true search parameter values will be encoded by default.
 * @param options.encodeHash Is false by default. When true the hash value will be encoded (except first '#') by default.
 * @preserve (Part of the public API)
 */,window.tchmi_encode_uri_components=function(uri,options){const url=new URL(uri,"http://a");let pathNew="";pathNew=options&&!1===options?.encodePath?url.pathname:url.pathname.split("/").map(pathToken=>encodeURIComponent(decodeURI(pathToken))).join("/");"http://a"===url.origin&&!uri.startsWith("/")&&pathNew.startsWith("/")&&(pathNew=pathNew.substring(1,pathNew.length));let searchNew="";if(options&&!0===options.encodeSearchParams&&url.search){let searchTokens=url.search.split("&"),searchTokensPrepared=[];for(let searchToken of searchTokens){let searchTokenTokens=searchToken.split("=");searchTokensPrepared.push(searchTokenTokens[0]+"="+encodeURIComponent(searchTokenTokens[1]))}searchNew=searchTokensPrepared.join("&")}else searchNew=url.search;let hashNew="";hashNew=options&&!0===options.encodeHash&&url.hash?"#"+encodeURIComponent(url.hash.substring(1,url.hash.length)):url.hash;return("http://a"!==url.origin?url.origin:"")+pathNew+searchNew+hashNew}
/**
 * Converts formatted text to formatted html.
 * @param text The text which contains the formatting placeholders which shall be encoded.
 * @returns The encoded representation of parameter text.
 * @preserve (Part of the public API)
 */,window.tchmi_text_to_html=function(text){"string"!=typeof text&&"function"==typeof text.toString&&(text=text.toString());let res=text,eSpacesCount=0;for(let i=res.length-1,ii=0;i>=ii;i--){if(" "!==res[i])break;eSpacesCount++}res=res.substr(0,res.length-eSpacesCount),res=res.replace(/\\s\\s/g," &nbsp;"),res=res.replace(/  /g," &nbsp;"),res=res.replace(/\\t/g,"&nbsp;&nbsp;&nbsp;");let eSpacesParts=[];for(let i=0,ii=eSpacesCount;i<ii;i++)i%2==0?eSpacesParts.push("&nbsp;"):eSpacesParts.push(" ");for(let i=eSpacesParts.length-1,ii=0;i>=ii;i--)res+=eSpacesParts[i];return res=res.replace(/\\r\\n/g,"<br/>"),res=res.replace(/\\n/g,"<br/>"),res}
/**
 * Decode base64 strings
 * Attention: JS strings are UTF16!
 * Consider using this API for UTF8 support:
 * new TcHmi.Base64BinaryReader(input).readString()
 * @param input String to decode
 * @returns Returns the String or null
 * @preserve (Part of the public API)
 */,window.tchmi_base64decode=function(input){"string"!=typeof input&&"function"==typeof input.toString&&(input=input.toString());return window.atob(input)}
/**
 * Encode base64 strings
 * Attention: JS strings are UTF16!
 * Consider using this API for UTF8 support:
 * new TcHmi.Base64BinaryWriter().writeString(input).getEncodedString()
 * @param input String to encode
 * @returns Returns the String or null
 * @preserve (Part of the public API)
 */,window.tchmi_base64encode=function(input){"string"!=typeof input&&"function"==typeof input.toString&&(input=input.toString());return window.btoa(input)}
/**
 * Creates a Guid string.
 * @returns Guid
 * @preserve (Part of the public API)
 */,window.tchmi_create_guid=function(){if(window.crypto.randomUUID)return window.crypto.randomUUID();let d=performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){let r=(d+16*Math.random())%16|0;return d=Math.floor(d/16),("x"===c?r:7&r|8).toString(16)})},window.tchmi_equal=_tchmi_equal,window.tchmi_clone_object=
/**
 * Clones the data {Object} in param obj and returns a clone of it.
 * This function will not create clones of objects based on a prototype definition (like class instances) and function references
 * and return the original reference instead.
 * String, null, undefined are returned directly as they are immutable / handled by value.
 * @param obj The object to clone.
 * @param options Options to define what should be cloned and how it should be cloned.
 * @param options.cloneMaps If set, maps will be cloned. Otherwise maps will be returned unchanged.
 * @param options.cloneMaps.deepCloneKeys Set to true to also clone map keys. Otherwise map keys will be reference equal to the keys in the original map.
 * @param options.cloneMaps.deepCloneValues Set to true to also clone map values. Otherwise map values will be reference equal to the values in the original map.
 * @param options.cloneSets If set, sets will be cloned. Otherwise sets will be returned unchanged.
 * @param options.cloneSets.deepCloneValues Set to true to also clone set values. Otherwise set values will be reference equal to the values in the original set.
 * @param options.cloneDates If true, dates will be cloned. Otherwise dates will be returned unchanged.
 * @param options.resolveRecursiveReferences If true, the function will keep track of all objects that are cloned and thus be able to detect and properly clone recursive references.
 * @returns Clone of param obj.
 * @template T defines the type of the target object
 * @preserve (Part of the public API)
 */
function(obj,options){const clonedObjects=new Map,clone=function(value){const valueType=typeof value;if("function"===valueType)return value;if(options?.resolveRecursiveReferences){const clonedValue=clonedObjects.get(value);if(clonedValue)return clonedValue}if(options){if(options.cloneMaps&&value instanceof Map){const result=new Map;options?.resolveRecursiveReferences&&clonedObjects.set(value,result);for(const[key,member]of value)result.set(options.cloneMaps.deepCloneKeys?clone(key):key,options.cloneMaps.deepCloneValues?clone(member):member);return result}if(options.cloneSets&&value instanceof Set){const result=new Set;options?.resolveRecursiveReferences&&clonedObjects.set(value,result);for(const member of value)result.add(options.cloneSets.deepCloneValues?clone(member):member);return result}if(options.cloneDates&&value instanceof Date){const result=new Date(value.valueOf());return options?.resolveRecursiveReferences&&clonedObjects.set(value,result),result}}if(null===value||"object"!==valueType||__tchmi_is_instanced_object(value))return value;if(Array.isArray(value)){const result=[];options?.resolveRecursiveReferences&&clonedObjects.set(value,result);for(let[i,elem]of value.entries())i in value?result.push(clone(elem)):result.length++;return result}{const result={};options?.resolveRecursiveReferences&&clonedObjects.set(value,result);for(let key in value)result[key]=clone(value[key]);return result}};return clone(obj)},window.tchmi_compare_object=function _tchmi_compare_object(o1,o2,entryPath){if(__tchmi_is_instanced_object(o1)||__tchmi_is_instanced_object(o2))return null;let res=[];entryPath??="";for(const p in o1)if(void 0!==o1[p]&&null!==o1[p]&&void 0!==o2[p]&&null!==o2[p]&&"object"==typeof o1[p]&&"object"==typeof o2[p])if(Array.isArray(o1)){const subDirtyPath=_tchmi_compare_object(o1[p],o2[p],entryPath+"["+p+"]");if(null===subDirtyPath)return null;res=res.concat(subDirtyPath)}else{const subDirtyPath=_tchmi_compare_object(o1[p],o2[p],entryPath+"::"+p);if(null===subDirtyPath)return null;res=res.concat(subDirtyPath)}else _tchmi_equal(o1[p],o2[p])||(Array.isArray(o1)?res.push(entryPath+"["+p+"]"):res.push(entryPath+"::"+p));for(const p in o2)void 0!==o2[p]&&void 0===o1[p]&&(Array.isArray(o2)?res.push(entryPath+"["+p+"]"):res.push(entryPath+"::"+p));return res}
/**
 * Unify a path string.
 * Replace all backslashes with slashes, replace multiple slashes with single slashes except ://, remove leading slash.
 * @param path The path.
 * @returns Unified path.
 * @preserve (Part of the public API)
 */,window.tchmi_path=function(path){if("string"==typeof path){if(path.startsWith("data:")||path.startsWith("file:")||path.startsWith("http://")||path.startsWith("https://")||path.startsWith("ws://")||path.startsWith("wss://"))return new URL(path).toString();let tokens=path.replace(/\\+/g,"/").split("/");for(let i=0,ii=tokens.length;i<ii;i++){let token=tokens[i];if(""===token)tokens.splice(i,1),i--;else if("."===token)tokens.splice(i,1),i--;else if(".."===token){let tokenprev=tokens[i-1];tokenprev&&".."!==tokenprev&&(tokens.splice(i,1),tokens.splice(i-1,1),i-=2)}}return tokens.join("/")}return path}
/**
 * Converts a String to a valid CSS id pattern by escaping all reserved characters.
 * @param id The target id.
 * @returns Converted id.
 * @preserve (Part of the public API)
 */,window.tchmi_css_escape_selector=function(id){if(CSS&&CSS.escape)return CSS.escape(id);return jQuery.escapeSelector(id)}
/**
 * tchmi_escape_regex
 * @param text text to escape
 * @preserve (Part of the public API)
 */,window.tchmi_escape_regex=function(text){"string"!=typeof text&&"function"==typeof text.toString&&(text=text.toString());return text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},window.tchmi_format_string=function(formatString,...args){let formattedString="",index=0;for(let i=0,ii=formatString.length;i<ii;i++)if("{"===formatString[i])if("{"===formatString[i+1])formattedString+="{",i++;else{let end=formatString.indexOf("}",i),placeholder=formatString.substring(i+1,end),regEx=/(?:([0-9]\d*)\||\(([^\)]+)\))?(\+)?(0|'[^|])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/.exec(placeholder);if(null!==regEx){let regExDescription={placeholder:regEx[0],parameterIndex:regEx[1],key:regEx[2],sign:regEx[3],charToAddBefore:regEx[4],align:regEx[5],lengthToAdd:regEx[6],decimal:regEx[7],type:regEx[8]},indexNow=index;if(null===regEx[8]||void 0===regEx[0]){formattedString+=regEx[1],i=end,index++;continue}null!==regExDescription.parameterIndex&&void 0!==regExDescription.parameterIndex&&(indexNow=parseInt(regExDescription.parameterIndex,10));let arg=args[indexNow],decimal=null!==regEx?parseInt(regExDescription.decimal,10):void 0;switch(regExDescription.type){case"d":case"i":case"u":arg=parseInt(arg,10);break;case"o":arg=parseInt(arg,10).toString(8);break;case"x":arg=parseInt(arg,10).toString(16);break;case"X":arg=parseInt(arg,10).toString(16).toUpperCase();break;case"f":arg="number"!=typeof decimal||Number.isNaN(decimal)?parseFloat(arg):parseFloat(arg).toFixed(decimal);break;case"e":arg="number"!=typeof decimal||Number.isNaN(decimal)?parseFloat(arg).toExponential():parseFloat(arg).toExponential(decimal);break;case"g":arg="number"!=typeof decimal||Number.isNaN(decimal)?parseFloat(arg):String(Number(arg.toPrecision(decimal)));break;case"s":arg=null===arg?"null":void 0===arg?"undefined":ValueConverter?ValueConverter.toString(arg,""):String(arg),"number"!=typeof decimal||Number.isNaN(decimal)||(arg=arg.substring(0,decimal));break;case"b":arg=parseInt(arg,10).toString(2);break;case"t":arg=ValueConverter?ValueConverter.toBoolean(arg):Boolean(arg),null===arg&&(arg=void 0),arg=decimal?arg.substring(0,decimal):arg;break;case"T":arg=null===arg?"null":typeof arg,"number"!=typeof decimal||Number.isNaN(decimal)||(arg=arg.substring(0,decimal));break;case"v":arg=null===arg?"null":void 0===arg?"undefined":arg.valueOf(),"number"!=typeof decimal||Number.isNaN(decimal)||(arg=arg.substring(0,decimal));break;case"j":arg=JSON.stringify(arg,null,regExDescription.lengthToAdd?parseInt(regExDescription.lengthToAdd,10):0)}if(/[j]/.exec(regExDescription.type))formattedString+=arg;else{let isPositive,sign,isNumber=/[d-g,i]/.test(regExDescription.type);isNumber&&(isPositive=arg>=0),!isNumber||isPositive&&!regExDescription.sign||isNaN(arg)?sign="":(sign=isPositive?"+":"",arg=arg.toString().replace(regExDescription.sign,""));let char=regExDescription.charToAddBefore?"0"===regExDescription.charToAddBefore?"0":regExDescription.charToAddBefore.charAt(1):" ",charLength=parseInt(regExDescription.lengthToAdd,10)-(sign+arg).length,charToAdd=regExDescription.lengthToAdd&&charLength>0?Array(charLength+1).join(char):"";formattedString+=regExDescription.align?sign+arg+charToAdd:"0"===char?sign+charToAdd+arg:charToAdd+sign+arg}index++,i=end}else{let onlyNumber=/([0-9]\d*)/.exec(placeholder);if(null!==onlyNumber){formattedString+=args[onlyNumber[0]],i=end}}}else"}"===formatString[i]?"}"===formatString[i+1]&&(formattedString+="}",i++):formattedString+=formatString[i];return formattedString},window.tchmi_compare_version=function(a,b){let tokensA=a.split("."),tokensB=b.split(".");if(tokensA.length!==tokensB.length)throw new Error(`Version range mismatch. Both version strings must have the same range. Value a: ${a}, Value b: ${b}`);for(let i=0;i<tokensA.length;i++){let tokenA=tokensA[i],tokenB=tokensB[i],numA=parseInt(tokenA,10),numB=parseInt(tokenB,10);if(numA<numB)return-1;if(numA>numB)return 1}return 0};export const __tchmi_is_instanced_object=function(obj){if(null===obj||"object"!=typeof obj)return!1;void 0===__tchmi_is_instanced_object.__objectPrototype&&(__tchmi_is_instanced_object.__objectPrototype=Object.getPrototypeOf({})),void 0===__tchmi_is_instanced_object.__arrayPrototype&&(__tchmi_is_instanced_object.__arrayPrototype=Object.getPrototypeOf([]));let proto=Object.getPrototypeOf(obj);return null!==proto&&proto!==__tchmi_is_instanced_object.__objectPrototype&&proto!==__tchmi_is_instanced_object.__arrayPrototype};