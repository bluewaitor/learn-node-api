/**
 * Created by bluewaitor on 15/9/29.
 */
var assert = require('assert');

/**
 * assert.fail(actual, expected, message, operator)
 * 定义一个错误(目前理解是这样的-.-)
 */
//assert.fail(1,true,'message','==');

/**
 * assert(value[, message]), assert.ok(value[, message])
 * 判断第一个参数是不是真值
 * 假值的情况下会报错
 */
//assert.ok(false, 'false不是真值');
//assert.ok('',"空字符串不是真值");
//assert.ok(0,'0不是真值');
//assert.ok(null,'null不是真值');
//assert.ok(undefined,'undefined不是真值');
//assert.ok(NaN, 'NaN不是真值');
/**
 * 真值的情况下是不会报错的
 */
//assert.ok(true, '我是真值我不会报错');
//assert.ok([], '我也是真值');
//assert.ok({}, '我也是真值');
//assert.ok('0', '我也是真值');
//assert.ok('null', '我也是真值');
//assert.ok('false', '我也是真值');
//assert.ok('undefined', '我也是真值');
//assert(0, "我做的工作和ok是一样的");
//assert(1, "我做的工作和ok是一样的");
/**
 * 由此可以看出JavaScript中的假值有 [ false, '', 0, null, undefined, NaN ] 这6个, 其他都是真值
 * 包括 空数组,空对象,函数,正则等等, '0','null','false','undefined', 这些也都是真值
 */
function log(message){
    console.log(message);
}
//log(false == ''); //true
//log(false == 0); //true
//log(false == null); //false
//log(false == undefined); //false
//log(false == NaN); //false

//log(null == ''); //false
//log(null == 0); //false
//log(null == undefined); //true
//log(null == NaN); //false

//log(undefined == 0); //false
//log(undefined == ''); //false
//log(undefined == NaN); //false

//log(0 == ''); //true
//log(0 == NaN); //false
//log(0 == []); //false

//log('' == NaN);//false

/**
 * false 除了和自身比较为 true 外，和 0，"" 比较也为 true
 * null 只和 undefined 比较时为 true， 反过来 undefined 也仅和 null 比较为 true，没有第二个
 * 0 除了和 false 比较为 true，还有空字符串 ''" 和空数组 []
 * 空字符串 '' 除了和 false 比较为 true，还有一个数字 0
 */

/**
 * assert.equal(actual, expected[, message])
 * 判断两个值是否相等,相当于==操作
 */
//assert.equal(1,1,"1相等1");
//assert.equal(1,2,"1不等于2");

/**
 * assert.notEqual(actual, expected[, message])
 * 判断两个值是否不相等,相当于!=操作
 */
//assert.notEqual(1,2,"1和2不相等");
//assert.notEqual(1,1,"1和1是相等的");

/**
 * assert.deepEqual(actual, expected[, message])
 * 深度匹配测试,与equal差不多,测试的是可以枚举的
 */
//assert.deepEqual(1,1,'1==1');
//assert.deepEqual(1,2,'1!=2');

/**
 * assert.notDeepEqual(actual, expected[, message])
 * 与assert.notDeepEqual相反
 */
//assert.notDeepEqual(1,1,"1==1");
//assert.notDeepEqual(1,2,"1!=2");

/**
 * assert.strictEqual(actual, expected[, message])
 * 相等于===操作
 */
//assert.strictEqual(1,1,"1===1");
//assert.strictEqual(1,"1","1!=='1'"); 整数1与字符1不相等

/**
 * assert.notStrictEqual(actual, expected[, message])
 * 与assert.strictEqual相反,相当于!==操作
 */
//assert.notStrictEqual(1,1,"1===1");
//assert.notStrictEqual(1,"1","1!=='1'");


/**
 * assert.deepStrictEqual(actual, expected[, message])
 * 原始值相比较
 */
//assert.deepStrictEqual(1,1,"1===1");
//assert.deepStrictEqual(1,"1","1!=='1'");

/**
 * assert.notDeepStrictEqual(actual, expected[, message])
 * 与assert.deepStrictEqual相反
 */
//assert.notDeepStrictEqual(1,1,"1===1");
//assert.notDeepStrictEqual(1,"1",'1!=="1"');

/**
 * assert.throws(block[, error][, message])
 * 抛出block中的错误
 */
//assert.throws(
//    function() {
//        throw new Error("Wrong value");
//    },
//    Error
//);//不抛出错误

//assert.throws(
//    function() {
//        throw new Date();
//    },
//    Error
//);
//assert.js:315
//throw actual;
//^
//Thu Nov 05 2015 17:13:52 GMT+0800 (中国标准时间)

//正则验证,通过则不抛出错误,不通过则抛出错误
//assert.throws(
//    function() {
//        throw new Error("Wrong value");
//    },
//    /value/
//);

//assert.throws(
//    function() {
//        throw new Error("Wrong valxxue");
//    },
//    /value/
//);

//自定义函数处理错误
//assert.throws(
//    function() {
//        throw new Error("Wrong value");
//    },
//    function(err) {
//        if ( (err instanceof Error) && /value/.test(err) ) {
//            return true;
//        }
//    },
//    "unexpected error"
//);
//验证不通过
//assert.throws(
//    function() {
//        throw new Error("Wrong value");
//    },
//    function(err) {
//        if ( (err instanceof Error) && /val1ue/.test(err) ) {
//            return true;
//        }
//    },
//    "unexpected error"
//);

/**
 * assert.doesNotThrow(block[, error][, message])
 * 预期block不抛出错误
 */
//assert.doesNotThrow(
//    function() {
//        throw new TypeError("Wrong value");
//    },
//    SyntaxError
//); //因为throw错误了,所以会在控制台上输出错误信息

//assert.doesNotThrow(
//    function() {
//        console.log("我不抛出错误");
//    },
//    SyntaxError
//);

//assert.doesNotThrow(
//    function() {
//        throw new TypeError("Wrong value");
//    },
//    TypeError
//);


/**
 * assert.ifError(value)
 * true的时候抛出,false的时候不抛出
 */

//assert.ifError(true);
//assert.ifError(false);