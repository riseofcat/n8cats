if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'game'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'game'.");
}
if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
  throw new Error("Error loading module 'game'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'game'.");
}
var game = function (_, Kotlin, $module$kotlinx_serialization_runtime_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var getCallableRef = Kotlin.getCallableRef;
  var numberToInt = Kotlin.numberToInt;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var reversed = Kotlin.kotlin.ranges.reversed_zf1xzc$;
  var step = Kotlin.kotlin.ranges.step_xsgg7u$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var equals = Kotlin.equals;
  var Pair = Kotlin.kotlin.Pair;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var properties = Kotlin.kotlin.properties;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toList = Kotlin.kotlin.text.toList_gw00vp$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var hashSetOf = Kotlin.kotlin.collections.hashSetOf_i5x0yv$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var average = Kotlin.kotlin.collections.average_plj8ka$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var Collection = Kotlin.kotlin.collections.Collection;
  var toBoxedChar = Kotlin.toBoxedChar;
  var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
  var throwCCE = Kotlin.throwCCE;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_j4ogox$;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_j4ogox$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var experimental = Kotlin.kotlin.coroutines.experimental;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_gexuht$;
  var takeWhile = Kotlin.kotlin.sequences.takeWhile_euau3h$;
  var sum = Kotlin.kotlin.sequences.sum_j17fkc$;
  var contains_0 = Kotlin.kotlin.sequences.contains_9h40j2$;
  var throwUPAE = Kotlin.throwUPAE;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nayhkp$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var List = Kotlin.kotlin.collections.List;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var sum_0 = Kotlin.kotlin.collections.sum_plj8ka$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var get_kotlin = Kotlin.kotlin.js.get_kotlin_2sk2mx$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var get_lastIndex = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  var Comparator = Kotlin.kotlin.Comparator;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var ClosedRange = Kotlin.kotlin.ranges.ClosedRange;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var union = Kotlin.kotlin.collections.union_q4559j$;
  var intersect = Kotlin.kotlin.collections.intersect_q4559j$;
  var UnknownFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException;
  var SerialClassDescImpl = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.SerialClassDescImpl;
  var KSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.KSerializer;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var JSON_0 = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.JSON;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var toByte = Kotlin.toByte;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var getKClass = Kotlin.getKClass;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var math = Kotlin.kotlin.math;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var Any = Object;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var min = Kotlin.kotlin.collections.min_exjks8$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var Throwable = Error;
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  var CBOR = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.cbor.CBOR;
  var internal = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var ArrayListSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer;
  var abs_0 = Kotlin.kotlin.math.abs_za3lpa$;
  var Comparable = Kotlin.kotlin.Comparable;
  Common$Companion$createWebSocket$ObjectLiteral.prototype = Object.create(LibWebSocket.prototype);
  Common$Companion$createWebSocket$ObjectLiteral.prototype.constructor = Common$Companion$createWebSocket$ObjectLiteral;
  testFirst$lambda$A_1.prototype = Object.create(testFirst$lambda$S.prototype);
  testFirst$lambda$A_1.prototype.constructor = testFirst$lambda$A_1;
  testFirst$lambda$B.prototype = Object.create(testFirst$lambda$A_7.prototype);
  testFirst$lambda$B.prototype.constructor = testFirst$lambda$B;
  testFirst$lambda$TD.prototype = Object.create(testFirst$lambda$Tag.prototype);
  testFirst$lambda$TD.prototype.constructor = testFirst$lambda$TD;
  testFirst$lambda$TR.prototype = Object.create(testFirst$lambda$Tag.prototype);
  testFirst$lambda$TR.prototype.constructor = testFirst$lambda$TR;
  testFirst$lambda$TABLE.prototype = Object.create(testFirst$lambda$Tag.prototype);
  testFirst$lambda$TABLE.prototype.constructor = testFirst$lambda$TABLE;
  testFirst$lambda$B_0.prototype = Object.create(testFirst$lambda$A_16.prototype);
  testFirst$lambda$B_0.prototype.constructor = testFirst$lambda$B_0;
  testFirst$lambda$Child.prototype = Object.create(testFirst$lambda$Parent.prototype);
  testFirst$lambda$Child.prototype.constructor = testFirst$lambda$Child;
  Expr$Num.prototype = Object.create(Expr.prototype);
  Expr$Num.prototype.constructor = Expr$Num;
  Expr$Sum.prototype = Object.create(Expr.prototype);
  Expr$Sum.prototype.constructor = Expr$Sum;
  Mode.prototype = Object.create(Enum.prototype);
  Mode.prototype.constructor = Mode;
  EmptyGameScreen.prototype = Object.create(Game.prototype);
  EmptyGameScreen.prototype.constructor = EmptyGameScreen;
  GameSounds.prototype = Object.create(Enum.prototype);
  GameSounds.prototype.constructor = GameSounds;
  PieceType.prototype = Object.create(Enum.prototype);
  PieceType.prototype.constructor = PieceType;
  TetriesScreen.prototype = Object.create(Game.prototype);
  TetriesScreen.prototype.constructor = TetriesScreen;
  DrawMode.prototype = Object.create(Enum.prototype);
  DrawMode.prototype.constructor = DrawMode;
  Game$ImgSprite.prototype = Object.create(Game$Sprite.prototype);
  Game$ImgSprite.prototype.constructor = Game$ImgSprite;
  Game$GenSprite.prototype = Object.create(Game$Sprite.prototype);
  Game$GenSprite.prototype.constructor = Game$GenSprite;
  SizeType$FixedWidth.prototype = Object.create(SizeType.prototype);
  SizeType$FixedWidth.prototype.constructor = SizeType$FixedWidth;
  SizeType$FixedHeight.prototype = Object.create(SizeType.prototype);
  SizeType$FixedHeight.prototype.constructor = SizeType$FixedHeight;
  KeyCode.prototype = Object.create(Enum.prototype);
  KeyCode.prototype.constructor = KeyCode;
  DType.prototype = Object.create(Enum.prototype);
  DType.prototype.constructor = DType;
  FixedWidth.prototype = Object.create(View.prototype);
  FixedWidth.prototype.constructor = FixedWidth;
  MassPower$BlendFactor.prototype = Object.create(Enum.prototype);
  MassPower$BlendFactor.prototype.constructor = MassPower$BlendFactor;
  Mode_0.prototype = Object.create(Enum.prototype);
  Mode_0.prototype.constructor = Mode_0;
  Key.prototype = Object.create(Enum.prototype);
  Key.prototype.constructor = Key;
  FixedWidth_0.prototype = Object.create(View_0.prototype);
  FixedWidth_0.prototype.constructor = FixedWidth_0;
  PerformanceTest$Key.prototype = Object.create(Enum.prototype);
  PerformanceTest$Key.prototype.constructor = PerformanceTest$Key;
  Mode_1.prototype = Object.create(Enum.prototype);
  Mode_1.prototype.constructor = Mode_1;
  LibWebSocket$State.prototype = Object.create(Enum.prototype);
  LibWebSocket$State.prototype.constructor = LibWebSocket$State;
  libObj$logObj$LogMode.prototype = Object.create(Enum.prototype);
  libObj$logObj$LogMode.prototype.constructor = libObj$logObj$LogMode;
  function Gen() {
    Gen_instance = this;
  }
  Gen.prototype.date = function () {
    return '09:54:42 21-April-2018';
  };
  Gen.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Gen',
    interfaces: []
  };
  var Gen_instance = null;
  function Gen_getInstance() {
    if (Gen_instance === null) {
      new Gen();
    }
    return Gen_instance;
  }
  function Common() {
    Common$Companion_getInstance();
  }
  function Common$Companion() {
    Common$Companion_instance = this;
  }
  Common$Companion.prototype.createConcurrentList_287e2$ = function () {
    return ArrayList_init();
  };
  Common$Companion.prototype.createConcurrentHashMap_q3lmfv$ = function () {
    return HashMap_init();
  };
  function Common$Companion$createWebSocket$ObjectLiteral(closure$webSocket, closure$createTime) {
    this.closure$webSocket = closure$webSocket;
    this.closure$createTime = closure$createTime;
    LibWebSocket.call(this);
  }
  function Common$Companion$createWebSocket$ObjectLiteral$addListener$lambda(closure$l) {
    return function (e) {
      closure$l.onOpen();
    };
  }
  function Common$Companion$createWebSocket$ObjectLiteral$addListener$lambda_0(closure$l) {
    return function (e) {
      if (Kotlin.isType(e, MessageEvent))
        closure$l.onMessage_61zpoe$(toString(e.data));
    };
  }
  function Common$Companion$createWebSocket$ObjectLiteral$addListener$lambda_1(closure$l) {
    return function (e) {
      closure$l.onClose();
    };
  }
  Common$Companion$createWebSocket$ObjectLiteral.prototype.addListener_32v6ym$ = function (l) {
    this.closure$webSocket.onopen = Common$Companion$createWebSocket$ObjectLiteral$addListener$lambda(l);
    this.closure$webSocket.onmessage = Common$Companion$createWebSocket$ObjectLiteral$addListener$lambda_0(l);
    this.closure$webSocket.onclose = Common$Companion$createWebSocket$ObjectLiteral$addListener$lambda_1(l);
  };
  Common$Companion$createWebSocket$ObjectLiteral.prototype.connect = function () {
  };
  Common$Companion$createWebSocket$ObjectLiteral.prototype.close = function () {
    this.closure$webSocket.close();
  };
  Common$Companion$createWebSocket$ObjectLiteral.prototype.send_61zpoe$ = function (message) {
    this.closure$webSocket.send(message);
  };
  Object.defineProperty(Common$Companion$createWebSocket$ObjectLiteral.prototype, 'state', {
    get: function () {
      switch (this.closure$webSocket.readyState) {
        case 0:
          return compareTo(minus(lib.time, this.closure$createTime), new Duration(Kotlin.Long.fromInt(10000))) < 0 ? LibWebSocket$State$CONNECTING_getInstance() : LibWebSocket$State$TIMEOUT_getInstance();
        case 1:
          return LibWebSocket$State$OPEN_getInstance();
        case 2:
          return LibWebSocket$State$CLOSING_getInstance();
        case 3:
          return LibWebSocket$State$CLOSED_getInstance();
        default:return LibWebSocket$State$CLOSE_getInstance();
      }
    }
  });
  Common$Companion$createWebSocket$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [LibWebSocket]
  };
  Common$Companion.prototype.createWebSocket_h6sd2a$ = function (host, port, path) {
    var createTime = lib.time;
    var webSocket = new WebSocket('ws://' + host + ':' + port + '/' + path);
    webSocket.onopen;
    return new Common$Companion$createWebSocket$ObjectLiteral(webSocket, createTime);
  };
  Object.defineProperty(Common$Companion.prototype, 'timeMs', {
    get: function () {
      return Kotlin.Long.fromNumber((new Date()).getTime());
    }
  });
  Common$Companion.prototype.getStackTraceString_tcv7n7$ = function (t) {
    return '[js] ' + toString(t.message);
  };
  Common$Companion.prototype.getCodeLineInfo_za3lpa$ = function (depth) {
    return '[js]';
  };
  Common$Companion.prototype.measureNanoTime_o14v8n$ = function (block) {
    var start = lib.time;
    block();
    return minus(lib.time, start).ms.multiply(Kotlin.Long.fromInt(1000000));
  };
  Common$Companion.prototype.permormanceNowMs = function () {
    return performance.now();
  };
  Common$Companion.prototype.urlGet_61zpoe$ = function (url) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);
    return req.responseText;
  };
  Common$Companion.prototype.callApply_238ayt$ = function ($receiver, functionName, args) {
    var tmp$;
    return (tmp$ = $receiver[functionName]) != null ? tmp$.apply($receiver, args) : null;
  };
  Common$Companion.prototype.random = function () {
    return Math.random();
  };
  Common$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Common$Companion_instance = null;
  function Common$Companion_getInstance() {
    if (Common$Companion_instance === null) {
      new Common$Companion();
    }
    return Common$Companion_instance;
  }
  Common.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Common',
    interfaces: []
  };
  function breakpoint(info) {
    if (info === void 0)
      info = '';
    println('breakpoint ' + toString(info));
  }
  function ExecuteMe() {
  }
  ExecuteMe.prototype.execute_o14v8n$ = function (f) {
    f();
    return this;
  };
  ExecuteMe.prototype.notExecute_o14v8n$ = function (f) {
    return this;
  };
  Object.defineProperty(ExecuteMe.prototype, 'e', {
    get: function () {
      return getCallableRef('execute', function ($receiver, f) {
        return $receiver.execute_o14v8n$(f);
      }.bind(null, this));
    }
  });
  Object.defineProperty(ExecuteMe.prototype, 'ne', {
    get: function () {
      return getCallableRef('notExecute', function ($receiver, f) {
        return $receiver.notExecute_o14v8n$(f);
      }.bind(null, this));
    }
  });
  ExecuteMe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExecuteMe',
    interfaces: []
  };
  function Log(s) {
    this.s = s;
  }
  Log.prototype.info_s8jyv4$ = function (a) {
    println('[Info] ' + this.s + ': ' + toString(a));
  };
  Log.prototype.error_s8jyv4$ = function (a) {
    println('[Error] ' + this.s + ': ' + toString(a));
  };
  Log.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Log',
    interfaces: []
  };
  function info($receiver, l) {
    l.info_s8jyv4$($receiver);
  }
  function error($receiver, l) {
    l.error_s8jyv4$($receiver);
  }
  function rnd(min, max) {
    return numberToInt(min + Math.random() * (max - min + 1 | 0));
  }
  function rnd_0($receiver, max) {
    return rnd($receiver, max);
  }
  function get_rnd($receiver) {
    return rnd(1, $receiver);
  }
  function testFirst$lambda() {
    (new Log('log1')).info_s8jyv4$(123);
    info(123, new Log('log2'));
    return Unit;
  }
  function testFirst$lambda_0() {
    return Unit;
  }
  function testFirst$lambda_1() {
    var tmp$;
    tmp$ = step(reversed(new IntRange(1 - 5 | 0, 11 + 2 | 0)), 2).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      print(i.toString() + ',');
    }
    until(1, 10);
    step(downTo(100, 1), 2);
    new CharRange(65, 90);
    !(1 <= 3 && 3 <= 10);
    contains(['a', 'b', 'c'], 'a');
    var tmp$_0;
    tmp$_0 = (new IntRange(1, 10)).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
    }
    return Unit;
  }
  function testFirst$lambda_2() {
    var a = null;
    if (!(typeof a === 'string'))
      '';
    else if (equals(a, a.length > 10))
      '';
    else if (!(typeof a === 'number'))
      '';
    else if (a >= 1 && a <= 10)
      '';
    else
      a.length;
    return Unit;
  }
  function testFirst$lambda$A() {
  }
  testFirst$lambda$A.prototype.toString = function () {
    return 'instanceA';
  };
  testFirst$lambda$A.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda$anyAnswer(value) {
    if (typeof value === 'number')
      return 'integer';
    else if (typeof value === 'string')
      return 'text length ' + value.length;
    else if (Kotlin.isType(value, testFirst$lambda$A))
      return 'classA';
    else
      return 'unknown or null';
  }
  function testFirst$lambda_3() {
    var anyAnswer = testFirst$lambda$anyAnswer;
    for (var index = 0; index < 5; index++) {
      var tmp$;
      switch (get_rnd(4)) {
        case 1:
          tmp$ = 123;
          break;
        case 2:
          tmp$ = 'Two';
          break;
        case 3:
          tmp$ = new testFirst$lambda$A();
          break;
        default:tmp$ = null;
          break;
      }
      var $receiver = tmp$;
      info(toString($receiver) + ' is ' + anyAnswer($receiver), new Log(''));
    }
    return Unit;
  }
  function testFirst$lambda$lambda() {
    return 1 + 1 | 0;
  }
  function testFirst$lambda_4() {
    var funRef = testFirst$lambda$lambda;
    info(funRef.toString() + ' = ' + funRef(), new Log('function refference'));
    return Unit;
  }
  function testFirst$lambda_5() {
    var tmp$;
    var m = mapOf([new Pair(1, 'one'), to(2, 'two')]);
    m.get_11rb$(1);
    tmp$ = m.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
    }
    return Unit;
  }
  function testFirst$lambda$A_0() {
  }
  testFirst$lambda$A_0.prototype.component1 = function () {
    return 'str';
  };
  testFirst$lambda$A_0.prototype.component2 = function () {
    return 1;
  };
  testFirst$lambda$A_0.prototype.plus_dtl57e$ = function (other) {
    return this;
  };
  testFirst$lambda$A_0.prototype.plus_za3lpa$ = function (other) {
    return this;
  };
  testFirst$lambda$A_0.prototype.times_mx4ult$ = function (scale) {
    return this;
  };
  testFirst$lambda$A_0.prototype.unaryMinus = function () {
    return this;
  };
  testFirst$lambda$A_0.prototype.unaryPlus = function () {
    return this;
  };
  testFirst$lambda$A_0.prototype.inc = function () {
    return this;
  };
  testFirst$lambda$A_0.prototype.get_za3lpa$ = function (index) {
    return this;
  };
  testFirst$lambda$A_0.prototype.get_vux9f0$ = function (i, j) {
    return this;
  };
  testFirst$lambda$A_0.prototype.set_6t2rgq$ = function (index, value) {
  };
  testFirst$lambda$A_0.prototype.contains_s8jyv4$ = function (a) {
    return true;
  };
  function testFirst$lambda$A$iterator$ObjectLiteral() {
  }
  testFirst$lambda$A$iterator$ObjectLiteral.prototype.hasNext = function () {
    return true;
  };
  testFirst$lambda$A$iterator$ObjectLiteral.prototype.next = function () {
    return 'str';
  };
  testFirst$lambda$A$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  testFirst$lambda$A_0.prototype.iterator = function () {
    return new testFirst$lambda$A$iterator$ObjectLiteral();
  };
  testFirst$lambda$A_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_6() {
    var a = (new testFirst$lambda$A_0()).unaryPlus().plus_dtl57e$((new testFirst$lambda$A_0()).unaryMinus());
    a = a.plus_dtl57e$(new testFirst$lambda$A_0());
    var tmp$ = new testFirst$lambda$A_0();
    var v1 = tmp$.component1()
    , v2 = tmp$.component2();
    return Unit;
  }
  function testFirst$lambda$ClassAndFunction() {
  }
  testFirst$lambda$ClassAndFunction.prototype.invoke_yhszz7$ = function (args) {
    return 123;
  };
  testFirst$lambda$ClassAndFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassAndFunction',
    interfaces: []
  };
  function testFirst$lambda_7() {
    var c = new testFirst$lambda$ClassAndFunction();
    var i = c.invoke_yhszz7$(['', 1.0]);
    return Unit;
  }
  function testFirst$lambda$DependencyHandler() {
  }
  testFirst$lambda$DependencyHandler.prototype.compile_61zpoe$ = function (coordinate) {
    println('Added dependency on ' + coordinate);
  };
  testFirst$lambda$DependencyHandler.prototype.invoke_his5pp$ = function (body) {
    body(this);
  };
  testFirst$lambda$DependencyHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DependencyHandler',
    interfaces: []
  };
  function testFirst$lambda$lambda_0($receiver) {
    $receiver.compile_61zpoe$('org.jetbrains.kotlin:kotlin-reflect:1.0.0');
    return Unit;
  }
  function testFirst$lambda_8() {
    var dependencies = new testFirst$lambda$DependencyHandler();
    dependencies.compile_61zpoe$('org.jetbrains.kotlin:kotlin-stdlib:1.0.0');
    dependencies.invoke_his5pp$(testFirst$lambda$lambda_0);
    return Unit;
  }
  function testFirst$lambda$S() {
  }
  testFirst$lambda$S.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'S',
    interfaces: []
  };
  function testFirst$lambda$A_1() {
    testFirst$lambda$S.call(this);
    this.f_16re1w$_0 = new testFirst$lambda$A$DelegateA(this);
  }
  var testFirst$lambda$A$f_metadata = new PropertyMetadata('f');
  Object.defineProperty(testFirst$lambda$A_1.prototype, 'f', {
    get: function () {
      return this.f_16re1w$_0.getValue_ealjly$(this, testFirst$lambda$A$f_metadata);
    },
    set: function (f) {
      this.f_16re1w$_0.setValue_a4owz8$(this, testFirst$lambda$A$f_metadata, f);
    }
  });
  function testFirst$lambda$A$DelegateA($outer) {
    this.$outer = $outer;
  }
  testFirst$lambda$A$DelegateA.prototype.getValue_ealjly$ = function (ref, prop) {
    return 'get Value from DelegateA';
  };
  testFirst$lambda$A$DelegateA.prototype.setValue_a4owz8$ = function (ref, prop, value) {
  };
  testFirst$lambda$A$DelegateA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegateA',
    interfaces: []
  };
  testFirst$lambda$A_1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: [testFirst$lambda$S]
  };
  function testFirst$lambda_9() {
    return Unit;
  }
  function testFirst$lambda_10() {
    var list = plus_0(plus(listOf(['a', 'b']), 'c'), listOf(['d', 'e']));
    return Unit;
  }
  function testFirst$lambda_11() {
    15 & 240;
    15 | 240;
    1 << 4;
    return Unit;
  }
  function testFirst$lambda$ж(й) {
    return ensureNotNull(null);
  }
  function testFirst$lambda$lambda_1() {
    return Unit;
  }
  function testFirst$lambda$lambda_2() {
    return Unit;
  }
  function testFirst$lambda_12() {
    var ж = testFirst$lambda$ж;
    ж(testFirst$lambda$lambda_1)(testFirst$lambda$lambda_2);
    return Unit;
  }
  function testFirst$lambda_13() {
    var a = null;
    if (typeof a === 'function')
      a();
    return Unit;
  }
  function testFirst$lambda$foo1() {
    println('foo1');
  }
  function testFirst$lambda$foo2$lambda() {
    println('foo2');
    return Unit;
  }
  function testFirst$lambda$foo2() {
    return testFirst$lambda$foo2$lambda;
  }
  function testFirst$lambda_14() {
    var foo1 = testFirst$lambda$foo1;
    var foo2 = testFirst$lambda$foo2;
    foo1();
    foo2();
    foo2()();
    return Unit;
  }
  function testFirst$lambda$A_2(v1, v2) {
    this.v1 = v1;
    this.v2 = v2;
  }
  testFirst$lambda$A_2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  testFirst$lambda$A_2.prototype.component1 = function () {
    return this.v1;
  };
  testFirst$lambda$A_2.prototype.component2 = function () {
    return this.v2;
  };
  testFirst$lambda$A_2.prototype.copy_bm4lxs$ = function (v1, v2) {
    return new testFirst$lambda$A_2(v1 === void 0 ? this.v1 : v1, v2 === void 0 ? this.v2 : v2);
  };
  testFirst$lambda$A_2.prototype.toString = function () {
    return 'A(v1=' + Kotlin.toString(this.v1) + (', v2=' + Kotlin.toString(this.v2)) + ')';
  };
  testFirst$lambda$A_2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v1) | 0;
    result = result * 31 + Kotlin.hashCode(this.v2) | 0;
    return result;
  };
  testFirst$lambda$A_2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.v1, other.v1) && Kotlin.equals(this.v2, other.v2)))));
  };
  function testFirst$lambda_15() {
    var a = new testFirst$lambda$A_2('v1', 1);
    var v1 = a.component1()
    , v2 = a.component2();
    a.copy_bm4lxs$(void 0, 123);
    a.hashCode();
    return Unit;
  }
  function testFirst$lambda$A_3() {
    this.s_16rdqp$_0 = lazy(testFirst$lambda$A$s$lambda);
  }
  Object.defineProperty(testFirst$lambda$A_3.prototype, 's', {
    get: function () {
      return this.s_16rdqp$_0.value;
    }
  });
  function testFirst$lambda$A$s$lambda() {
    println('computed');
    return 'str value';
  }
  testFirst$lambda$A_3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_16() {
    (new testFirst$lambda$A_3()).s;
    (new testFirst$lambda$A_3()).s;
    return Unit;
  }
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  Delegates$observable$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral.prototype.constructor = Delegates$observable$ObjectLiteral;
  function Delegates$observable$ObjectLiteral(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  Delegates$vetoable$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  Delegates$vetoable$ObjectLiteral.prototype.constructor = Delegates$vetoable$ObjectLiteral;
  function Delegates$vetoable$ObjectLiteral(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$vetoable$ObjectLiteral.prototype.beforeChange_jxtfl0$ = function (property, oldValue, newValue) {
    return this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$vetoable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function testFirst$lambda$A_4() {
    this.v1_y7ja1j$_0 = new Delegates$observable$ObjectLiteral(testFirst$lambda$A$v1$lambda, 'init value');
    this.v2_y7ja2e$_0 = new Delegates$vetoable$ObjectLiteral(testFirst$lambda$A$v2$lambda, 'init value');
  }
  var testFirst$lambda$A$v1_metadata = new PropertyMetadata('v1');
  Object.defineProperty(testFirst$lambda$A_4.prototype, 'v1', {
    get: function () {
      return this.v1_y7ja1j$_0.getValue_lrcp0p$(this, testFirst$lambda$A$v1_metadata);
    },
    set: function (v1) {
      this.v1_y7ja1j$_0.setValue_9rddgb$(this, testFirst$lambda$A$v1_metadata, v1);
    }
  });
  var testFirst$lambda$A$v2_metadata = new PropertyMetadata('v2');
  Object.defineProperty(testFirst$lambda$A_4.prototype, 'v2', {
    get: function () {
      return this.v2_y7ja2e$_0.getValue_lrcp0p$(this, testFirst$lambda$A$v2_metadata);
    },
    set: function (v2) {
      this.v2_y7ja2e$_0.setValue_9rddgb$(this, testFirst$lambda$A$v2_metadata, v2);
    }
  });
  function testFirst$lambda$A$v1$lambda(d, old, new_0) {
    println('observable ' + old + ' -> ' + new_0);
    return Unit;
  }
  function testFirst$lambda$A$v2$lambda(d, old, new_0) {
    println('vetoable ' + old + ' -> ' + new_0);
    return false;
  }
  testFirst$lambda$A_4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_17() {
    var a = new testFirst$lambda$A_4();
    a.v1 = 'new value1';
    a.v1 = 'new value2';
    a.v2 = 'new value1';
    a.v2 = 'new value2';
    return Unit;
  }
  function testFirst$lambda$A_5() {
    this.v_16rdo4$_0 = properties.Delegates.notNull_30y1fr$();
  }
  var testFirst$lambda$A$v_metadata = new PropertyMetadata('v');
  Object.defineProperty(testFirst$lambda$A_5.prototype, 'v', {
    get: function () {
      return this.v_16rdo4$_0.getValue_lrcp0p$(this, testFirst$lambda$A$v_metadata);
    },
    set: function (v) {
      this.v_16rdo4$_0.setValue_9rddgb$(this, testFirst$lambda$A$v_metadata, v);
    }
  });
  testFirst$lambda$A_5.prototype.init_61zpoe$ = function (value) {
    this.v = value;
    return this;
  };
  testFirst$lambda$A_5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_18() {
    (new testFirst$lambda$A_5()).init_61zpoe$('value1').v;
    return Unit;
  }
  function testFirst$lambda$User(map) {
    this.map = map;
    this.name_uwmimf$_0 = this.map;
    this.age_5kmzxf$_0 = this.map;
  }
  var testFirst$lambda$User$name_metadata = new PropertyMetadata('name');
  var getOrImplicitDefault = Kotlin.kotlin.collections.getOrImplicitDefault_t9ocha$;
  Object.defineProperty(testFirst$lambda$User.prototype, 'name', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.name_uwmimf$_0, testFirst$lambda$User$name_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
  });
  var testFirst$lambda$User$age_metadata = new PropertyMetadata('age');
  Object.defineProperty(testFirst$lambda$User.prototype, 'age', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.age_5kmzxf$_0, testFirst$lambda$User$age_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
  });
  testFirst$lambda$User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  function testFirst$lambda_19() {
    new testFirst$lambda$User(mapOf([to('name', 'John Doe'), to('age', 25)]));
    return Unit;
  }
  function testFirst$lambda$length(s) {
    return s.length;
  }
  function testFirst$lambda$goodSize(len) {
    return len > 1;
  }
  function testFirst$lambda$compose$lambda(closure$f, closure$g) {
    return function (x) {
      return closure$f(closure$g(x));
    };
  }
  function testFirst$lambda$compose(f, g) {
    return testFirst$lambda$compose$lambda(f, g);
  }
  function testFirst$lambda_20() {
    var length = testFirst$lambda$length;
    var goodSize = testFirst$lambda$goodSize;
    var compose = testFirst$lambda$compose;
    var oddLength = compose(getCallableRef('goodSize', function (len) {
      return goodSize(len);
    }), getCallableRef('length', function (s) {
      return length(s);
    }));
    var $receiver = listOf(['a', 'ab', 'abc']);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (oddLength(element))
        destination.add_11rb$(element);
    }
    println(destination);
    return Unit;
  }
  function testFirst$lambda$A_6(i, s) {
    this.i = i;
    this.s = s;
  }
  testFirst$lambda$A_6.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  testFirst$lambda$A_6.prototype.component1 = function () {
    return this.i;
  };
  testFirst$lambda$A_6.prototype.component2 = function () {
    return this.s;
  };
  testFirst$lambda$A_6.prototype.copy_yhbofj$ = function (i, s) {
    return new testFirst$lambda$A_6(i === void 0 ? this.i : i, s === void 0 ? this.s : s);
  };
  testFirst$lambda$A_6.prototype.toString = function () {
    return 'A(i=' + Kotlin.toString(this.i) + (', s=' + Kotlin.toString(this.s)) + ')';
  };
  testFirst$lambda$A_6.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.i) | 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    return result;
  };
  testFirst$lambda$A_6.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.i, other.i) && Kotlin.equals(this.s, other.s)))));
  };
  function testFirst$lambda_21() {
    var $receiver = listOf([new testFirst$lambda$A_6(1, 'One'), new testFirst$lambda$A_6(2, 'Two'), new testFirst$lambda$A_6(3, 'Three')]);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if (((tmp$_0 = element.i) != null ? tmp$_0 : -1 % 2) !== 0)
        destination.add_11rb$(element);
    }
    maxBy$break: do {
      var iterator = destination.iterator();
      if (!iterator.hasNext()) {
        null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      var tmp$_1;
      var maxValue = (tmp$_1 = maxElem.i) != null ? tmp$_1 : kotlin_js_internal_IntCompanionObject.MIN_VALUE;
      while (iterator.hasNext()) {
        var e = iterator.next();
        var tmp$_2;
        var v = (tmp$_2 = e.i) != null ? tmp$_2 : kotlin_js_internal_IntCompanionObject.MIN_VALUE;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
    }
     while (false);
    return Unit;
  }
  function testFirst$lambda$lambda_3(i) {
    return (i * 10 | 0).toString();
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function testFirst$lambda_22() {
    joinToString(listOf([1, 2, 3]), '; ', void 0, void 0, void 0, void 0, testFirst$lambda$lambda_3);
    var $receiver = listOf([1, 2, 3]);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(Kotlin.imul(item, item));
    }
    var $receiver_0 = listOf([2, 4, 6]);
    var all$result;
    all$break: do {
      var tmp$_0;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (!(element % 2 === 0)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    var всеЧётные = all$result;
    var $receiver_1 = listOf([-1, 1, 2]);
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver_1, Collection) && $receiver_1.isEmpty()) {
        false;
        break any$break;
      }
      tmp$_1 = $receiver_1.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (element_0 < 0) {
          true;
          break any$break;
        }
      }
      false;
    }
     while (false);
    var $receiver_2 = listOf([1, 2, 3]);
    var destination_0 = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = $receiver_2.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      var key = 'key ' + element_1;
      var tmp$_0_0;
      var value = destination_0.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination_0.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element_1);
    }
    var tmp$_3;
    tmp$_3 = destination_0.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_2 = tmp$_3.next();
      element_2.key;
      element_2.value;
    }
    var $receiver_3 = listOf(['abc', 'def']);
    var destination_1 = ArrayList_init();
    var tmp$_4;
    tmp$_4 = $receiver_3.iterator();
    while (tmp$_4.hasNext()) {
      var element_3 = tmp$_4.next();
      var list_0 = toList(element_3);
      addAll(destination_1, list_0);
    }
    println(destination_1);
    return Unit;
  }
  function testFirst$lambda_23() {
    var tmp$;
    try {
      tmp$ = toInt('123');
    }
     catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        tmp$ = 0;
      }
       else
        throw e;
    }
    var result = tmp$;
    return Unit;
  }
  function testFirst$lambda_24() {
    hashMapOf([to('a', 123)]);
    arrayListOf([1, 2, 3]);
    println(hashSetOf([1, 1, 2]).size);
    setOf([1, 1, 2]).contains_11rb$(2);
    average(listOf([1, 2, 3]));
    return Unit;
  }
  function testFirst$lambda$hello($receiver) {
    if ($receiver != null) {
      return 'hello ' + $receiver.toString();
    }
     else {
      return "null can't say hello";
    }
  }
  function testFirst$lambda$hello_0(closure$hello) {
    return function closure$hello_0($receiver) {
      if ($receiver != null) {
        var result = new StringBuilder('[');
        var i = 0;
        for (var tmp$ = $receiver.iterator(); tmp$.hasNext(); ++i) {
          var v = tmp$.next();
          if (i > 0)
            result.append_s8itvh$(44);
          var csq = closure$hello(v);
          result.append_gw00v9$(csq);
        }
        result.append_s8itvh$(93);
        return result;
      }
       else if (false) {
        return closure$hello_0(null);
      }
       else {
        var a = null;
        return closure$hello(a);
      }
    };
  }
  function testFirst$lambda$sayHi(closure$hello, closure$hello_0) {
    return function ($receiver) {
      if ($receiver == null || Kotlin.isType($receiver, Collection)) {
        println(closure$hello($receiver));
      }
       else {
        println(closure$hello_0($receiver));
      }
    };
  }
  function testFirst$lambda_25() {
    var hello = testFirst$lambda$hello;
    var hello_0 = testFirst$lambda$hello_0(hello);
    var sayHi = testFirst$lambda$sayHi(hello_0, hello);
    sayHi(listOf([1, 2, null, 'A', toBoxedChar(66)]));
    var coll = null;
    sayHi(coll);
    return Unit;
  }
  function testFirst$lambda_26() {
    listOf(['\u044F\u0431\u043B\u043E\u043A\u0438', '\u0433\u0440\u0443\u0448\u0438', '\u0431\u0430\u043D\u0430\u043D\u044B']);
    return Unit;
  }
  function testFirst$lambda$stringArgs$lambda$lambda(closure$index, closure$element) {
    return function () {
      closure$index;
      return closure$element.length;
    };
  }
  function testFirst$lambda$stringArgs(a) {
    var b = a;
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== b.length; ++tmp$) {
      var item = b[tmp$];
      testFirst$lambda$stringArgs$lambda$lambda((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item);
    }
  }
  function testFirst$lambda$floatArgs(f) {
  }
  function testFirst$lambda$lambda_4() {
    var array = new Float32Array(10);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = i + 0.5;
    }
    return array;
  }
  function testFirst$lambda$lambda_5() {
    return function () {
      'usage:';
      var f = new Float32Array([1.0, 2.0]);
      var tmp$;
      new Float32Array(toTypedArray(f));
      var result = Kotlin.isType(tmp$ = f, Float32Array) ? tmp$ : throwCCE();
      return result;
    };
  }
  var Array_0 = Array;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function testFirst$lambda_27() {
    var stringArgs = testFirst$lambda$stringArgs;
    var array = Array_0(3);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = 'str ' + i;
    }
    var arr = array;
    stringArgs(arr.concat(arr));
    stringArgs(copyToArray(listOf(['a', 'b', 'c'])).slice());
    var floatArgs = testFirst$lambda$floatArgs;
    floatArgs(toFloatArray(listOf([1.0, 2.0])).slice());
    var f = new Float32Array([1.5, 3.14]);
    var tmp$_0;
    new Float32Array(toTypedArray(f));
    var result = Kotlin.isType(tmp$_0 = f, Float32Array) ? tmp$_0 : throwCCE();
    var float32Arr = result;
    (new Log('FloatArray(10, { it.toFloat()+0.5f }) to JS:')).info_s8jyv4$(testFirst$lambda$lambda_4);
    breakpoint('after print function');
    (new Log('print function with varargs toTypedArray()')).info_s8jyv4$(testFirst$lambda$lambda_5());
    breakpoint('after print function');
    return Unit;
  }
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  function testFirst$lambda_28() {
    var toRegex$result;
    toRegex$result = Regex_init('\\.|-');
    var $receiver = '12.345-6.A';
    toRegex$result.split_905azu$($receiver, 0);
    return Unit;
  }
  function testFirst$lambda$parsePath1(path) {
    var directory = substringBeforeLast(path, '/');
    var fullName = substringAfterLast(path, '/');
    var fileName = substringBeforeLast(fullName, '.');
    var extension = substringAfterLast(fullName, '.');
    println('Dir: ' + directory + ', name: ' + fileName + ', ext: ' + extension);
  }
  function testFirst$lambda$parsePath2(path) {
    var regex = Regex_init('(.+)/(.+)\\.(.+)');
    var matchResult = regex.matchEntire_6bul2c$(path);
    if (matchResult != null) {
      var tmp$ = matchResult.destructured;
      var directory = tmp$.match.groupValues.get_za3lpa$(1);
      var filename = tmp$.match.groupValues.get_za3lpa$(2);
      var extension = tmp$.match.groupValues.get_za3lpa$(3);
      println('Dir: ' + directory + ', name: ' + filename + ', ext: ' + extension);
    }
  }
  function testFirst$lambda_29() {
    var parsePath1 = testFirst$lambda$parsePath1;
    var parsePath2 = testFirst$lambda$parsePath2;
    var path = '/Users/yole/kotlin-book/chapter.adoc';
    parsePath1(path);
    parsePath2(path);
    return Unit;
  }
  function testFirst$lambda_30() {
    var str = trimMargin('\n                \u0439abc\n                ', '\u0439');
    str.length;
    println(str);
    var str2 = trimIndent('\n        abc\n        def\n      ');
    str2.length;
    println(str2);
    breakpoint();
    return Unit;
  }
  function testFirst$lambda$A_7(arg1, arg2) {
    this.arg2_cfvjhm$_0 = arg2;
    this.value1 = null;
    this.value1 = arg1;
  }
  Object.defineProperty(testFirst$lambda$A_7.prototype, 'arg2', {
    get: function () {
      return this.arg2_cfvjhm$_0;
    }
  });
  testFirst$lambda$A_7.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda$B(arg1, arg2) {
    testFirst$lambda$A_7.call(this, arg1, arg2);
  }
  Object.defineProperty(testFirst$lambda$B.prototype, 'arg2', {
    get: function () {
      return 'overriden value';
    }
  });
  testFirst$lambda$B.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'B',
    interfaces: [testFirst$lambda$A_7]
  };
  function testFirst$lambda_31() {
    return Unit;
  }
  function testFirst$lambda$A_8() {
    this.counter_ui53ye$_0 = 0;
  }
  Object.defineProperty(testFirst$lambda$A_8.prototype, 'counter', {
    get: function () {
      return this.counter_ui53ye$_0;
    },
    set: function (counter) {
      this.counter_ui53ye$_0 = counter;
    }
  });
  testFirst$lambda$A_8.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_32() {
    return Unit;
  }
  function testFirst$lambda$A_9(m) {
    if (m === void 0)
      m = HashMap_init();
    this.m = m;
  }
  Object.defineProperty(testFirst$lambda$A_9.prototype, 'entries', {
    get: function () {
      return this.m.entries;
    }
  });
  Object.defineProperty(testFirst$lambda$A_9.prototype, 'keys', {
    get: function () {
      return this.m.keys;
    }
  });
  Object.defineProperty(testFirst$lambda$A_9.prototype, 'size', {
    get: function () {
      return this.m.size;
    }
  });
  Object.defineProperty(testFirst$lambda$A_9.prototype, 'values', {
    get: function () {
      return this.m.values;
    }
  });
  testFirst$lambda$A_9.prototype.clear = function () {
    return this.m.clear();
  };
  testFirst$lambda$A_9.prototype.containsKey_11rb$ = function (key) {
    return this.m.containsKey_11rb$(key);
  };
  testFirst$lambda$A_9.prototype.containsValue_11rc$ = function (value) {
    return this.m.containsValue_11rc$(value);
  };
  testFirst$lambda$A_9.prototype.get_11rb$ = function (key) {
    return this.m.get_11rb$(key);
  };
  testFirst$lambda$A_9.prototype.isEmpty = function () {
    return this.m.isEmpty();
  };
  testFirst$lambda$A_9.prototype.put_xwzc9p$ = function (key, value) {
    return this.m.put_xwzc9p$(key, value);
  };
  testFirst$lambda$A_9.prototype.putAll_a2k3zr$ = function (from) {
    return this.m.putAll_a2k3zr$(from);
  };
  testFirst$lambda$A_9.prototype.remove_11rb$ = function (key) {
    return this.m.remove_11rb$(key);
  };
  testFirst$lambda$A_9.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: [MutableMap]
  };
  function testFirst$lambda_33() {
    (new testFirst$lambda$A_9()).put_xwzc9p$(1, '123');
    return Unit;
  }
  function testFirst$lambda$DSL() {
    this.a = 'A';
  }
  testFirst$lambda$DSL.prototype.f_ntkd9n$ = function (init) {
    init(this);
    return this;
  };
  testFirst$lambda$DSL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DSL',
    interfaces: []
  };
  function testFirst$lambda$lambda_6($receiver) {
    $receiver.a;
    return Unit;
  }
  function testFirst$lambda_34() {
    (new testFirst$lambda$DSL()).f_ntkd9n$(testFirst$lambda$lambda_6);
    return Unit;
  }
  function testFirst$lambda$Animated() {
  }
  testFirst$lambda$Animated.prototype.stopAnimating = function () {
  };
  testFirst$lambda$Animated.prototype.animateTwice = function () {
  };
  function testFirst$lambda$Animated$Inner($outer) {
    this.$outer = $outer;
  }
  testFirst$lambda$Animated$Inner.prototype.getOuterReference = function () {
    return this.$outer;
  };
  testFirst$lambda$Animated$Inner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inner',
    interfaces: []
  };
  testFirst$lambda$Animated.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Animated',
    interfaces: []
  };
  function testFirst$lambda_35() {
    return Unit;
  }
  function testFirst$lambda$lambda_7() {
    return 'some';
  }
  function testFirst$lambda$lambda_8() {
    return 'some';
  }
  function testFirst$lambda$f2() {
    return 'some';
  }
  function testFirst$lambda_36() {
    var a1 = testFirst$lambda$lambda_7();
    var a2 = 'some';
    var f1 = testFirst$lambda$lambda_8;
    f1();
    var f2 = testFirst$lambda$f2;
    f2();
    return Unit;
  }
  function testFirst$lambda$A_10(str) {
    this.str = str;
  }
  testFirst$lambda$A_10.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_37() {
    var refA = getCallableRef('A', function (str) {
      return new testFirst$lambda$A_10(str);
    });
    var a1 = refA('abc');
    return Unit;
  }
  function testFirst$lambda$lambda_9(continuation_0, suspended) {
    var instance = new Coroutine$testFirst$lambda$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$testFirst$lambda$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$i = void 0;
  }
  Coroutine$testFirst$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$testFirst$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$testFirst$lambda$lambda.prototype.constructor = Coroutine$testFirst$lambda$lambda;
  Coroutine$testFirst$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$i = 1;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i > 10) {
              this.state_0 = 5;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = testSuspendFun(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 5:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function testFirst$lambda$ObjectLiteral() {
  }
  testFirst$lambda$ObjectLiteral.prototype.resume_11rb$ = function (value) {
  };
  Object.defineProperty(testFirst$lambda$ObjectLiteral.prototype, 'context', {
    get: function () {
      return experimental.EmptyCoroutineContext;
    }
  });
  testFirst$lambda$ObjectLiteral.prototype.resumeWithException_tcv7n7$ = function (e) {
    console.log('Coroutine failed: ' + e);
  };
  testFirst$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Continuation]
  };
  function testFirst$lambda_38() {
    var block = testFirst$lambda$lambda_9;
    if (false) {
      println(' --- COROUTINES UNDER THE HOOD --- ');
      println(block);
      println(' --- COROUTINES UNDER THE HOOD --- ');
    }
    startCoroutine(block, new testFirst$lambda$ObjectLiteral());
    return Unit;
  }
  function testFirst$lambda_39() {
    var variable1 = 'Kotlin variable';
    var const1 = 'Kotlin constant';
    console.log('inside js code you can use Kotlin constant');
    return Unit;
  }
  function testFirst$lambda$lambda_10(it) {
    return it + 1 | 0;
  }
  function testFirst$lambda$lambda_11(it) {
    return it <= 100;
  }
  function testFirst$lambda_40() {
    var naturalNumbers = generateSequence(0, testFirst$lambda$lambda_10);
    var numbersTo100 = takeWhile(naturalNumbers, testFirst$lambda$lambda_11);
    println(sum(numbersTo100));
    var b = contains_0(naturalNumbers, 123);
    return Unit;
  }
  function testFirst$lambda_41() {
    return Unit;
  }
  function testFirst$lambda$A_11() {
    this.p = 'property';
  }
  testFirst$lambda$A_11.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_42() {
    var $receiver = new testFirst$lambda$A_11();
    $receiver.p;
    $receiver.p;
    (new testFirst$lambda$A_11()).p;
    var $receiver_0 = new StringBuilder();
    $receiver_0.append_gw00v9$('this ');
    $receiver_0.append_gw00v9$('is ');
    $receiver_0.append_gw00v9$('StringBuilder');
    $receiver_0.toString();
    return Unit;
  }
  function testFirst$lambda$A_12() {
    this.i = 123;
  }
  testFirst$lambda$A_12.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_43() {
    var tmp$, tmp$_0, tmp$_1;
    var a = 'wrong value';
    var result1 = (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = a, testFirst$lambda$A_12) ? tmp$ : null) != null ? tmp$_0.i : null) != null ? tmp$_1 : -1;
    breakpoint();
    return Unit;
  }
  function testFirst$lambda$A_13() {
    this.v_16rdo4$_0 = this.v_16rdo4$_0;
  }
  Object.defineProperty(testFirst$lambda$A_13.prototype, 'v', {
    get: function () {
      if (this.v_16rdo4$_0 == null)
        return throwUPAE('v');
      return this.v_16rdo4$_0;
    },
    set: function (v) {
      this.v_16rdo4$_0 = v;
    }
  });
  testFirst$lambda$A_13.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_44() {
    (new testFirst$lambda$A_13()).v;
    return Unit;
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function testFirst$lambda_45() {
    ' ' == null || isBlank(' ');
    'small'.toUpperCase();
    var coerceIn_0 = coerceIn(140, new IntRange(1, 100));
    breakpoint();
    return Unit;
  }
  function testFirst$lambda$nothingFun() {
    throw Exception_init('some exception');
  }
  function testFirst$lambda$lambda_12(closure$nothingFun) {
    return function (v) {
      if (typeof v === 'string') {
        return v;
      }
       else {
        return closure$nothingFun();
      }
    };
  }
  function testFirst$lambda_46() {
    var nothingFun = testFirst$lambda$nothingFun;
    var inferType = testFirst$lambda$lambda_12(nothingFun);
    inferType('abc').toUpperCase();
    try {
      inferType(123).toUpperCase();
    }
     catch (e) {
      if (!Kotlin.isType(e, Exception))
        throw e;
    }
    return Unit;
  }
  function testFirst$lambda_47() {
    var tmp$ = listOf(['a', 'b']);
    var a = tmp$.get_za3lpa$(0);
    var b = tmp$.get_za3lpa$(1);
    var c = tmp$.get_za3lpa$(2);
    return Unit;
  }
  function testFirst$lambda$lambda_13() {
    return;
  }
  function testFirst$lambda_48() {
    label: testFirst$lambda$lambda_13;
    label2: for (var i = 1; i <= 10; i++) {
      break label2;
    }
    var tmp$;
    tmp$ = (new IntRange(1, 10)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
    }
    var $receiver = new StringBuilder();
    $receiver.append_gw00v9$(listOf([1, 2, 3]).toString());
    println($receiver);
    return Unit;
  }
  function testFirst$lambda$max(first, second) {
    return Kotlin.compareTo(first, second) > 0 ? first : second;
  }
  function testFirst$lambda$ensureTrailingPeriod(seq) {
    if (!endsWith(seq, 46)) {
      seq.append_s8itvh$(46);
    }
  }
  function testFirst$lambda$printSum(c) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = c, List) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw IllegalArgumentException_init('List is expected');
    }
    var intList = tmp$_0;
    println(sum_0(intList));
  }
  function testFirst$lambda_49() {
    var max = testFirst$lambda$max;
    println(max('kotlin', 'java'));
    var ensureTrailingPeriod = testFirst$lambda$ensureTrailingPeriod;
    println((ensureTrailingPeriod(new StringBuilder('Hello World')), Unit));
    var printSum = testFirst$lambda$printSum;
    printSum(listOf([1, 2, 3]));
    println(typeof 'abc' === 'string');
    println(typeof 123 === 'string');
    var $receiver = listOf(['one', 2, 'three']);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (typeof element === 'string')
        destination.add_11rb$(element);
    }
    return Unit;
  }
  function testFirst$lambda$copyData(source, destination) {
    var tmp$;
    tmp$ = source.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item);
    }
  }
  function testFirst$lambda$copyData2(source, destination) {
    var tmp$;
    tmp$ = source.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item);
    }
  }
  function testFirst$lambda$copyData3(source, destination) {
    var tmp$;
    tmp$ = source.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item);
    }
  }
  function testFirst$lambda_50() {
    var copyData = testFirst$lambda$copyData;
    var copyData2 = testFirst$lambda$copyData2;
    var copyData3 = testFirst$lambda$copyData3;
    return Unit;
  }
  function testFirst$lambda$A_14(b) {
    if (b === void 0)
      b = 123;
    this.b = b;
  }
  testFirst$lambda$A_14.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda_51() {
    var class1 = PrimitiveClasses$stringClass;
    var class2 = get_kotlin(get_js(Kotlin.getKClassFromExpression('str')));
    class1.simpleName;
    var a = new testFirst$lambda$A_14();
    getPropertyCallableRef('b', 1, function ($receiver) {
      return $receiver.b;
    }, function ($receiver, value) {
      $receiver.b = value;
    }).get(a);
    return Unit;
  }
  function testFirst$lambda$lambda_14($receiver) {
    $receiver.append_gw00v9$('!');
    return Unit;
  }
  function testFirst$lambda_52() {
    var appendExcl = testFirst$lambda$lambda_14;
    appendExcl(new StringBuilder('abc'));
    return Unit;
  }
  function testFirst$lambda$Tag(name) {
    this.name = name;
    this.children_0 = ArrayList_init();
  }
  testFirst$lambda$Tag.prototype.doInit_0 = function (child, init) {
    init(child);
    this.children_0.add_11rb$(child);
  };
  testFirst$lambda$Tag.prototype.toString = function () {
    return '<' + this.name + '>' + joinToString(this.children_0, '') + '<\/' + this.name + '>';
  };
  testFirst$lambda$Tag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tag',
    interfaces: []
  };
  function testFirst$lambda$TD() {
    testFirst$lambda$Tag.call(this, 'td');
  }
  testFirst$lambda$TD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TD',
    interfaces: [testFirst$lambda$Tag]
  };
  function testFirst$lambda$TR() {
    testFirst$lambda$Tag.call(this, 'tr');
  }
  testFirst$lambda$TR.prototype.td_5hxnei$ = function (init) {
    this.doInit_0(new testFirst$lambda$TD(), init);
  };
  testFirst$lambda$TR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TR',
    interfaces: [testFirst$lambda$Tag]
  };
  function testFirst$lambda$TABLE() {
    testFirst$lambda$Tag.call(this, 'table');
  }
  testFirst$lambda$TABLE.prototype.tr_ltol4$ = function (init) {
    this.doInit_0(new testFirst$lambda$TR(), init);
  };
  testFirst$lambda$TABLE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TABLE',
    interfaces: [testFirst$lambda$Tag]
  };
  function testFirst$lambda$table(init) {
    var $receiver = new testFirst$lambda$TABLE();
    init($receiver);
    return $receiver;
  }
  function testFirst$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function testFirst$lambda$lambda$lambda($receiver) {
    $receiver.td_5hxnei$(testFirst$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function testFirst$lambda$lambda_15($receiver) {
    for (var i = 1; i <= 2; i++) {
      $receiver.tr_ltol4$(testFirst$lambda$lambda$lambda);
    }
    return Unit;
  }
  function testFirst$lambda_53() {
    var table = testFirst$lambda$table;
    info(table(testFirst$lambda$lambda_15), new Log('DSL'));
    return Unit;
  }
  function testFirst$lambda_54() {
    (new Log('round')).info_s8jyv4$(get_round(1.6));
    return Unit;
  }
  function testFirst$lambda$indexOfMax(a) {
    var destination = ArrayList_init(a.length);
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== a.length; ++tmp$) {
      var item = a[tmp$];
      destination.add_11rb$(new Pair((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
    }
    var maxBy$result;
    maxBy$break: do {
      var iterator = destination.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      var maxValue = maxElem.second;
      while (iterator.hasNext()) {
        var e = iterator.next();
        var v = e.second;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
     while (false);
    var maxBy = maxBy$result;
    return maxBy != null ? maxBy.first : null;
  }
  function testFirst$lambda_55() {
    var indexOfMax = testFirst$lambda$indexOfMax;
    return Unit;
  }
  var reversed_0 = Kotlin.kotlin.text.reversed_gw00vp$;
  function testFirst$lambda$isPalindrome(s) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (false) {
      var tmp$_3;
      return equals(s, reversed_0(Kotlin.isCharSequence(tmp$_3 = s) ? tmp$_3 : throwCCE()).toString());
    }
     else {
      tmp$ = get_indices(s);
      tmp$_0 = tmp$.first;
      tmp$_1 = tmp$.last;
      tmp$_2 = tmp$.step;
      for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
        if (s.charCodeAt(i) !== s.charCodeAt(get_lastIndex(s) - i | 0)) {
          return false;
        }
      }
      return true;
    }
  }
  function testFirst$lambda_56() {
    var isPalindrome = testFirst$lambda$isPalindrome;
    return Unit;
  }
  function testFirst$lambda$ObjectLiteral_0() {
  }
  testFirst$lambda$ObjectLiteral_0.prototype.compare = function (a, b) {
    return a % 2 - b % 2 | 0;
  };
  testFirst$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Comparator]
  };
  function testFirst$lambda_57() {
    info(sortedWith(listOf([1, 2, 3, 4, 5, 6, 7]), new testFirst$lambda$ObjectLiteral_0()), new Log('Comparator'));
    return Unit;
  }
  function testFirst$lambda$A_15() {
    this.start_lyr71c$_0 = 1;
  }
  Object.defineProperty(testFirst$lambda$A_15.prototype, 'start', {
    get: function () {
      return this.start_lyr71c$_0;
    }
  });
  Object.defineProperty(testFirst$lambda$A_15.prototype, 'endInclusive', {
    get: function () {
      return 10;
    }
  });
  testFirst$lambda$A_15.prototype.contains_mef7kx$ = function (value) {
    return ClosedRange.prototype.contains_mef7kx$.call(this, value);
  };
  testFirst$lambda$A_15.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: [ClosedRange]
  };
  function testFirst$lambda$rangeTo($receiver, other) {
    return new testFirst$lambda$A_15();
  }
  function testFirst$lambda_58() {
    info((new testFirst$lambda$A_15()).contains_mef7kx$(5), new Log('5 in A()'));
    var rangeTo = testFirst$lambda$rangeTo;
    info(rangeTo(123, 'abc').contains_mef7kx$(5), new Log('5 in 123..abc'));
    return Unit;
  }
  function testFirst$lambda$MyDate() {
  }
  testFirst$lambda$MyDate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MyDate',
    interfaces: []
  };
  function testFirst$lambda$DateRange(start, end) {
    this.start = start;
    this.end = end;
  }
  function testFirst$lambda$DateRange$iterator$ObjectLiteral() {
  }
  testFirst$lambda$DateRange$iterator$ObjectLiteral.prototype.next = function () {
    return ensureNotNull(null);
  };
  testFirst$lambda$DateRange$iterator$ObjectLiteral.prototype.hasNext = function () {
    return false;
  };
  testFirst$lambda$DateRange$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  testFirst$lambda$DateRange.prototype.iterator = function () {
    return new testFirst$lambda$DateRange$iterator$ObjectLiteral();
  };
  testFirst$lambda$DateRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateRange',
    interfaces: [Iterable]
  };
  function testFirst$lambda_59() {
    return Unit;
  }
  function testFirst$lambda$A_16(v) {
    this.v = v;
  }
  testFirst$lambda$A_16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function testFirst$lambda$B_0() {
    breakpoint('init block 1');
    println('val a = 123 also');
    this.a = 123;
    breakpoint('init block 2');
  }
  testFirst$lambda$B_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'B',
    interfaces: [testFirst$lambda$A_16]
  };
  function testFirst$lambda$testFirst$lambda$B_init(v, $this) {
    $this = $this || Object.create(testFirst$lambda$B_0.prototype);
    testFirst$lambda$A_16.call($this, v);
    testFirst$lambda$B_0.call($this);
    breakpoint('secondary constructor');
    return $this;
  }
  function testFirst$lambda_60() {
    testFirst$lambda$testFirst$lambda$B_init('v');
    return Unit;
  }
  function testFirst$lambda$printInc(closure$increment) {
    return function (s) {
      println((closure$increment.v = closure$increment.v + 1 | 0, closure$increment.v).toString() + ' + ' + s);
    };
  }
  function testFirst$lambda$Parent(closure$printInc) {
    this.a_0 = closure$printInc('4 Parent.a');
    closure$printInc('5 Parent.init');
    this.b_0 = closure$printInc('6 Parent.b');
  }
  testFirst$lambda$Parent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parent',
    interfaces: []
  };
  function testFirst$lambda$testFirst$lambda$Parent_init(closure$printInc, arg, $this) {
    if (arg === void 0)
      arg = closure$printInc('3 Parent primary constructor default argument');
    $this = $this || Object.create(testFirst$lambda$Parent.prototype);
    testFirst$lambda$Parent.call($this, closure$printInc);
    closure$printInc('7 Parent primary constructor');
    return $this;
  }
  function testFirst$lambda$Child(closure$printInc) {
    this.a = closure$printInc('8 Child.a');
    closure$printInc('9 Child.init 1');
    this.b = closure$printInc('10 Child.b');
    closure$printInc('11 Child.init 2');
  }
  testFirst$lambda$Child.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Child',
    interfaces: [testFirst$lambda$Parent]
  };
  function testFirst$lambda$testFirst$lambda$Child_init(closure$printInc, arg, $this) {
    if (arg === void 0)
      arg = closure$printInc('2 Child primary constructor default argument');
    $this = $this || Object.create(testFirst$lambda$Child.prototype);
    testFirst$lambda$testFirst$lambda$Parent_init(closure$printInc, $this);
    testFirst$lambda$Child.call($this, closure$printInc);
    closure$printInc('12 Child primary constructor');
    return $this;
  }
  function testFirst$lambda$testFirst$lambda$Child_init_0(closure$printInc, arg, arg2, $this) {
    if (arg2 === void 0)
      arg2 = closure$printInc('1 Child secondary constructor default argument');
    $this = $this || Object.create(testFirst$lambda$Child.prototype);
    testFirst$lambda$testFirst$lambda$Child_init(closure$printInc, $this);
    closure$printInc('13 Child secondary constructor');
    return $this;
  }
  function testFirst$lambda_61() {
    var increment = {v: 0};
    var printInc = testFirst$lambda$printInc(increment);
    testFirst$lambda$testFirst$lambda$Child_init_0(printInc, 1);
    return Unit;
  }
  function testFirst$lambda_62() {
    var a = setOf([1, 2]);
    var b = setOf([2, 3]);
    info(union(a, b), new Log('union'));
    info(intersect(a, b), new Log('intersect'));
    breakpoint();
    return Unit;
  }
  function testFirst$lambda$noInlineFun(f) {
    f();
  }
  function testFirst$lambda$withReturn$lambda() {
    return;
  }
  function testFirst$lambda$withReturn(closure$noInlineFun) {
    return function () {
      closure$noInlineFun(testFirst$lambda$withReturn$lambda);
      return;
    };
  }
  function testFirst$lambda_63() {
    var noInlineFun = testFirst$lambda$noInlineFun;
    var withReturn = testFirst$lambda$withReturn(noInlineFun);
    return Unit;
  }
  function testFirst$lambda$JsonObj(a, b) {
    this.a = a;
    this.b = b;
  }
  testFirst$lambda$JsonObj.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonObj',
    interfaces: []
  };
  testFirst$lambda$JsonObj.prototype.component1 = function () {
    return this.a;
  };
  testFirst$lambda$JsonObj.prototype.component2 = function () {
    return this.b;
  };
  testFirst$lambda$JsonObj.prototype.copy_9sobi5$ = function (a, b) {
    return new testFirst$lambda$JsonObj(a === void 0 ? this.a : a, b === void 0 ? this.b : b);
  };
  testFirst$lambda$JsonObj.prototype.toString = function () {
    return 'JsonObj(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + ')';
  };
  testFirst$lambda$JsonObj.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    return result;
  };
  testFirst$lambda$JsonObj.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b)))));
  };
  function testFirst$lambda_64() {
    var obj = JSON.parse('{"a":"str", "b": 3.14}');
    breakpoint('json obj');
    return Unit;
  }
  function testFirst$lambda$longValueMinus1(value) {
    return value.subtract(Kotlin.Long.fromInt(1));
  }
  function testFirst$lambda_65() {
    var longValueMinus1 = testFirst$lambda$longValueMinus1;
    var longMax = new Kotlin.Long(-1, 2147483647);
    println('longMax = 9223372036854775807');
    println('longMax-1 = ' + longValueMinus1(new Kotlin.Long(-1, 2147483647)));
    var randomLong = new Kotlin.Long(1431655765, 357913941);
    println('randomLong = 1537228672809129301');
    println('randomLong-1 = ' + longValueMinus1(new Kotlin.Long(1431655765, 357913941)));
    println(getCallableRef('testLong', function () {
      var longMax = new Kotlin.Long(-1, 2147483647);
      println('longMax = 9223372036854775807');
      println('longMax-1 = ' + longValueMinus1(new Kotlin.Long(-1, 2147483647)));
      var randomLong = new Kotlin.Long(1431655765, 357913941);
      println('randomLong = 1537228672809129301');
      println('randomLong-1 = ' + longValueMinus1(new Kotlin.Long(1431655765, 357913941)));
      return Unit;
    }));
    kotlin_js_internal_IntCompanionObject.MAX_VALUE;
    breakpoint('Long and Int');
    return Unit;
  }
  function testFirst$lambda$Data(a) {
    testFirst$lambda$Data$Companion_getInstance();
    this.a = a;
  }
  function testFirst$lambda$Data$Companion() {
    testFirst$lambda$Data$Companion_instance = this;
  }
  testFirst$lambda$Data$Companion.prototype.serializer = function () {
    return testFirst$lambda$Data$$serializer_getInstance();
  };
  testFirst$lambda$Data$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var testFirst$lambda$Data$Companion_instance = null;
  function testFirst$lambda$Data$Companion_getInstance() {
    if (testFirst$lambda$Data$Companion_instance === null) {
      new testFirst$lambda$Data$Companion();
    }
    return testFirst$lambda$Data$Companion_instance;
  }
  function testFirst$lambda$Data$$serializer() {
    this.serialClassDesc_6uhcca$_0 = new SerialClassDescImpl('domain.testFirst.<anonymous>.Data');
    this.serialClassDesc.addElement_61zpoe$('a');
    testFirst$lambda$Data$$serializer_instance = this;
  }
  Object.defineProperty(testFirst$lambda$Data$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_6uhcca$_0;
    }
  });
  testFirst$lambda$Data$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 0, obj.a);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  testFirst$lambda$Data$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return testFirst$lambda$testFirst$lambda$Data_init(bitMask0, local0, null);
  };
  testFirst$lambda$Data$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var testFirst$lambda$Data$$serializer_instance = null;
  function testFirst$lambda$Data$$serializer_getInstance() {
    if (testFirst$lambda$Data$$serializer_instance === null) {
      new testFirst$lambda$Data$$serializer();
    }
    return testFirst$lambda$Data$$serializer_instance;
  }
  function testFirst$lambda$testFirst$lambda$Data_init(seen, a, serializationConstructorMarker) {
    var $this = Object.create(testFirst$lambda$Data.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('a');
    else
      $this.a = a;
    return $this;
  }
  testFirst$lambda$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  testFirst$lambda$Data.prototype.component1 = function () {
    return this.a;
  };
  testFirst$lambda$Data.prototype.copy_za3lpa$ = function (a) {
    return new testFirst$lambda$Data(a === void 0 ? this.a : a);
  };
  testFirst$lambda$Data.prototype.toString = function () {
    return 'Data(a=' + Kotlin.toString(this.a) + ')';
  };
  testFirst$lambda$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  testFirst$lambda$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.a, other.a))));
  };
  function testFirst$lambda$Box(boxed) {
    testFirst$lambda$Box$Companion_getInstance();
    this.boxed = boxed;
  }
  function testFirst$lambda$Box$Companion() {
    testFirst$lambda$Box$Companion_instance = this;
  }
  testFirst$lambda$Box$Companion.prototype.serializer_swdriu$ = function (typeSerial0) {
    return testFirst$lambda$Box$testFirst$lambda$Box$$serializer_init(typeSerial0);
  };
  testFirst$lambda$Box$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var testFirst$lambda$Box$Companion_instance = null;
  function testFirst$lambda$Box$Companion_getInstance() {
    if (testFirst$lambda$Box$Companion_instance === null) {
      new testFirst$lambda$Box$Companion();
    }
    return testFirst$lambda$Box$Companion_instance;
  }
  function testFirst$lambda$Box$$serializer() {
    this.serialClassDesc_xy0qg5$_0 = new SerialClassDescImpl('domain.testFirst.<anonymous>.Box');
    this.serialClassDesc.addElement_61zpoe$('boxed');
  }
  Object.defineProperty(testFirst$lambda$Box$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_xy0qg5$_0;
    }
  });
  testFirst$lambda$Box$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, [this.typeSerial0]);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, this.typeSerial0, obj.boxed);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  testFirst$lambda$Box$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, [this.typeSerial0]);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, this.typeSerial0) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, this.typeSerial0, local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return testFirst$lambda$testFirst$lambda$Box_init(bitMask0, local0, null);
  };
  function testFirst$lambda$Box$testFirst$lambda$Box$$serializer_init(typeSerial0) {
    var $this = new testFirst$lambda$Box$$serializer();
    $this.typeSerial0 = typeSerial0;
    return $this;
  }
  testFirst$lambda$Box$$serializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  function testFirst$lambda$testFirst$lambda$Box_init(seen, boxed, serializationConstructorMarker) {
    var $this = Object.create(testFirst$lambda$Box.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('boxed');
    else
      $this.boxed = boxed;
    return $this;
  }
  testFirst$lambda$Box.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Box',
    interfaces: []
  };
  testFirst$lambda$Box.prototype.component1 = function () {
    return this.boxed;
  };
  testFirst$lambda$Box.prototype.copy_11rb$ = function (boxed) {
    return new testFirst$lambda$Box(boxed === void 0 ? this.boxed : boxed);
  };
  testFirst$lambda$Box.prototype.toString = function () {
    return 'Box(boxed=' + Kotlin.toString(this.boxed) + ')';
  };
  testFirst$lambda$Box.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.boxed) | 0;
    return result;
  };
  testFirst$lambda$Box.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.boxed, other.boxed))));
  };
  function testFirst$lambda_66() {
    var dataSerial = testFirst$lambda$Data$Companion_getInstance().serializer();
    var boxedDataSerial = testFirst$lambda$Box$Companion_getInstance().serializer_swdriu$(dataSerial);
    var boxedData = new testFirst$lambda$Box(new testFirst$lambda$Data(123));
    var str = JSON_0.Companion.stringify_jsy488$(boxedDataSerial, boxedData);
    var boxedData2 = JSON_0.Companion.parse_67noqb$(boxedDataSerial, str);
    println('boxedData2.boxed.a = ' + boxedData2.boxed.a);
    if (boxedData != null ? boxedData.equals(boxedData2) : null)
      println('boxedData == boxedData2');
    return Unit;
  }
  function testFirst() {
    (new ExecuteMe()).ne(testFirst$lambda).ne(testFirst$lambda_0).ne(testFirst$lambda_1).e(testFirst$lambda_2).e(testFirst$lambda_3).e(testFirst$lambda_4).e(testFirst$lambda_5).e(testFirst$lambda_6).ne(testFirst$lambda_7).e(testFirst$lambda_8).e(testFirst$lambda_9).e(testFirst$lambda_10).ne(testFirst$lambda_11).ne(testFirst$lambda_12).ne(testFirst$lambda_13).ne(testFirst$lambda_14).e(testFirst$lambda_15).e(testFirst$lambda_16).e(testFirst$lambda_17).e(testFirst$lambda_18).e(testFirst$lambda_19).e(testFirst$lambda_20).e(testFirst$lambda_21).e(testFirst$lambda_22).e(testFirst$lambda_23).e(testFirst$lambda_24).e(testFirst$lambda_25).ne(testFirst$lambda_26).e(testFirst$lambda_27).ne(testFirst$lambda_28).ne(testFirst$lambda_29).e(testFirst$lambda_30).e(testFirst$lambda_31).e(testFirst$lambda_32).e(testFirst$lambda_33).e(testFirst$lambda_34).ne(testFirst$lambda_35).e(testFirst$lambda_36).e(testFirst$lambda_37).e(testFirst$lambda_38).e(testFirst$lambda_39).e(testFirst$lambda_40).ne(testFirst$lambda_41).e(testFirst$lambda_42).e(testFirst$lambda_43).ne(testFirst$lambda_44).e(testFirst$lambda_45).e(testFirst$lambda_46).ne(testFirst$lambda_47).e(testFirst$lambda_48).e(testFirst$lambda_49).e(testFirst$lambda_50).e(testFirst$lambda_51).e(testFirst$lambda_52).e(testFirst$lambda_53).e(testFirst$lambda_54).e(testFirst$lambda_55).e(testFirst$lambda_56).e(testFirst$lambda_57).e(testFirst$lambda_58).ne(testFirst$lambda_59).e(testFirst$lambda_60).e(testFirst$lambda_61).e(testFirst$lambda_62).e(testFirst$lambda_63).e(testFirst$lambda_64).e(testFirst$lambda_65).e(testFirst$lambda_66);
  }
  function get_round($receiver) {
    return numberToInt($receiver + 0.5);
  }
  function testSuspendFun(continuation) {
    print('inside suspend fun ');
  }
  function Clickable() {
  }
  Clickable.prototype.showOff = function () {
    println("I'm clickable!");
  };
  Clickable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Clickable',
    interfaces: []
  };
  function Focusable() {
  }
  Focusable.prototype.setFocus_6taknv$ = function (b) {
    println('I ' + (b ? 'got' : 'lost') + ' focus.');
  };
  Focusable.prototype.showOff = function () {
    println("I'm focusable!");
  };
  Focusable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Focusable',
    interfaces: []
  };
  function Button() {
  }
  Button.prototype.click = function () {
    println('I was clicked');
  };
  Button.prototype.showOff = function () {
    Clickable.prototype.showOff.call(this);
    Focusable.prototype.showOff.call(this);
  };
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [Focusable, Clickable]
  };
  function User() {
  }
  Object.defineProperty(User.prototype, 'nickname', {
    get: function () {
      return substringBefore(this.email, 64);
    }
  });
  User.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'User',
    interfaces: []
  };
  function Expr() {
  }
  function Expr$Num(value) {
    Expr.call(this);
    this.value = value;
  }
  Expr$Num.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Num',
    interfaces: [Expr]
  };
  function Expr$Sum(left, right) {
    Expr.call(this);
    this.left = left;
    this.right = right;
  }
  Expr$Sum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sum',
    interfaces: [Expr]
  };
  Expr.prototype.eval_ybzzz$ = function (e) {
    if (Kotlin.isType(e, Expr$Num))
      return e.value;
    else if (Kotlin.isType(e, Expr$Sum))
      return this.eval_ybzzz$(e.right) + this.eval_ybzzz$(e.left) | 0;
    else
      return Kotlin.noWhenBranchMatched();
  };
  Expr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Expr',
    interfaces: []
  };
  function Singletone() {
    Singletone_instance = this;
    this.a = 1;
  }
  Singletone.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Singletone',
    interfaces: []
  };
  var Singletone_instance = null;
  function Singletone_getInstance() {
    if (Singletone_instance === null) {
      new Singletone();
    }
    return Singletone_instance;
  }
  function f($receiver) {
  }
  function _1() {
    f(Singletone_getInstance());
  }
  function WithCompanion() {
    WithCompanion$Companion_getInstance();
  }
  WithCompanion.prototype.f = function () {
    WithCompanion$Companion_getInstance().a;
  };
  function WithCompanion$Companion() {
    WithCompanion$Companion_instance = this;
    this.a = 'abc';
  }
  WithCompanion$Companion.prototype.invoke_61zpoe$ = function (str) {
    return new WithCompanion();
  };
  WithCompanion$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WithCompanion$Companion_instance = null;
  function WithCompanion$Companion_getInstance() {
    if (WithCompanion$Companion_instance === null) {
      new WithCompanion$Companion();
    }
    return WithCompanion$Companion_instance;
  }
  WithCompanion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WithCompanion',
    interfaces: []
  };
  function _2() {
    WithCompanion$Companion_getInstance().a;
    WithCompanion$Companion_getInstance().a;
    new WithCompanion();
    WithCompanion$Companion_getInstance().invoke_61zpoe$('companion call');
  }
  function Mode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Mode_initFields() {
    Mode_initFields = function () {
    };
    Mode$MASS_POWER_instance = new Mode('MASS_POWER', 0);
    Mode$PERFORMANCE_instance = new Mode('PERFORMANCE', 1);
    Mode$DOT_instance = new Mode('DOT', 2);
    Mode$EXPERIMENTS_instance = new Mode('EXPERIMENTS', 3);
    Mode$EMPTY_instance = new Mode('EMPTY', 4);
    Mode$TETRIS_instance = new Mode('TETRIS', 5);
    Mode$FRACTAL1_instance = new Mode('FRACTAL1', 6);
    Mode$FRACTAL2_instance = new Mode('FRACTAL2', 7);
  }
  var Mode$MASS_POWER_instance;
  function Mode$MASS_POWER_getInstance() {
    Mode_initFields();
    return Mode$MASS_POWER_instance;
  }
  var Mode$PERFORMANCE_instance;
  function Mode$PERFORMANCE_getInstance() {
    Mode_initFields();
    return Mode$PERFORMANCE_instance;
  }
  var Mode$DOT_instance;
  function Mode$DOT_getInstance() {
    Mode_initFields();
    return Mode$DOT_instance;
  }
  var Mode$EXPERIMENTS_instance;
  function Mode$EXPERIMENTS_getInstance() {
    Mode_initFields();
    return Mode$EXPERIMENTS_instance;
  }
  var Mode$EMPTY_instance;
  function Mode$EMPTY_getInstance() {
    Mode_initFields();
    return Mode$EMPTY_instance;
  }
  var Mode$TETRIS_instance;
  function Mode$TETRIS_getInstance() {
    Mode_initFields();
    return Mode$TETRIS_instance;
  }
  var Mode$FRACTAL1_instance;
  function Mode$FRACTAL1_getInstance() {
    Mode_initFields();
    return Mode$FRACTAL1_instance;
  }
  var Mode$FRACTAL2_instance;
  function Mode$FRACTAL2_getInstance() {
    Mode_initFields();
    return Mode$FRACTAL2_instance;
  }
  Mode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function Mode$values() {
    return [Mode$MASS_POWER_getInstance(), Mode$PERFORMANCE_getInstance(), Mode$DOT_getInstance(), Mode$EXPERIMENTS_getInstance(), Mode$EMPTY_getInstance(), Mode$TETRIS_getInstance(), Mode$FRACTAL1_getInstance(), Mode$FRACTAL2_getInstance()];
  }
  Mode.values = Mode$values;
  function Mode$valueOf(name) {
    switch (name) {
      case 'MASS_POWER':
        return Mode$MASS_POWER_getInstance();
      case 'PERFORMANCE':
        return Mode$PERFORMANCE_getInstance();
      case 'DOT':
        return Mode$DOT_getInstance();
      case 'EXPERIMENTS':
        return Mode$EXPERIMENTS_getInstance();
      case 'EMPTY':
        return Mode$EMPTY_getInstance();
      case 'TETRIS':
        return Mode$TETRIS_getInstance();
      case 'FRACTAL1':
        return Mode$FRACTAL1_getInstance();
      case 'FRACTAL2':
        return Mode$FRACTAL2_getInstance();
      default:throwISE('No enum constant domain.Mode.' + name);
    }
  }
  Mode.valueOf_61zpoe$ = Mode$valueOf;
  function main(args) {
    var tmp$, tmp$_0;
    switch (Mode$MASS_POWER_getInstance().name) {
      case 'MASS_POWER':
        new MassPower();
        break;
      case 'EXPERIMENTS':
        testFirst();
        console.info('hi console');
        break;
      case 'EMPTY':
        (tmp$_0 = (tmp$ = document.body) != null ? tmp$.style : null) != null ? (tmp$_0.backgroundColor = '#242') : null;
        new EmptyGameScreen();
        break;
      case 'TETRIS':
        new TetriesScreen();
        break;
      case 'FRACTAL1':
        (new Fractal1(new HTMLElements())).render();
        break;
      case 'FRACTAL2':
        (new Fractal2(new HTMLElements())).render();
        break;
      case 'DOT':
        (new Dots(new HTMLElements())).render();
        break;
      case 'PERFORMANCE':
        new PerformanceTest();
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  }
  function Dots(html) {
    this.html_0 = html;
    this.shaderProgram_0 = createWebGLProgram(this.html_0.webgl, '\nattribute vec2 a_position;\nvarying vec2 v_pos;\nuniform vec2 u_scale;\nvoid main(void) {\n  v_pos = a_position*u_scale;\n  gl_Position = vec4(a_position, 0.0, 1.0);\n//  gl_PointSize = 10.0;\n}\n', '\nprecision mediump float;\nvarying vec2 v_pos;\nuniform int u_length;\nconst int max_length = gl_MaxVertexUniformVectors/4;\nuniform vec3 u_color[max_length];\nuniform vec2 u_dot[max_length];\nvoid main(void) {\n  vec3 clr = vec3(0.0,0.0,0.0);\n  for(int i=0;i < max_length;i++) {\n    vec3 c = u_color[i];\n    if(c.r + c.g + c.b == 0.0) break;\n     clr = clr + 0.01/distance(v_pos, u_dot[i])*c;\n  }\n  gl_FragColor = vec4(clr, 1.0);\n}\n');
    var list = ArrayList_init(10);
    for (var index = 0; index < 10; index++) {
      list.add_11rb$(new Dot());
    }
    this.dots = list;
    var $receiver = this.html_0.webgl;
    var tmp$;
    $receiver.useProgram(this.shaderProgram_0);
    $receiver.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, (tmp$ = $receiver.createBuffer()) != null ? tmp$ : lib.log.fatalError_nez7ok$('Unable to create webgl buffer!'));
    var location = $receiver.getAttribLocation(this.shaderProgram_0, 'a_position');
    $receiver.enableVertexAttribArray(location);
    $receiver.vertexAttribPointer(location, 2, WebGLRenderingContext.FLOAT, false, 2 * 4 | 0, 0);
  }
  function Dots$render$lambda(this$Dots) {
    return function (it) {
      this$Dots.render();
      return Unit;
    };
  }
  Dots.prototype.render = function () {
    this.html_0.resize();
    var x = this.html_0.webgl.canvas.width;
    var y = this.html_0.webgl.canvas.height;
    var $receiver = this.html_0.webgl;
    clear($receiver);
    $receiver.uniform2f($receiver.getUniformLocation(this.shaderProgram_0, 'u_scale'), x / y > 1 ? x / y : 1.0, y / x > 1 ? y / x : 1.0);
    var tmp$ = $receiver.getUniformLocation(this.shaderProgram_0, 'u_color');
    var $receiver_0 = this.dots;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(listOf([item.color.getR(), item.color.getG(), item.color.getB()]));
    }
    $receiver.uniform3fv(tmp$, copyToArray(flatten(destination)));
    var tmp$_1 = $receiver.getUniformLocation(this.shaderProgram_0, 'u_dot');
    var $receiver_1 = this.dots;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_2;
    tmp$_2 = $receiver_1.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(listOf([item_0.pos.getX(), item_0.pos.getY()]));
    }
    $receiver.uniform2fv(tmp$_1, copyToArray(flatten(destination_0)));
    $receiver.uniform1i($receiver.getUniformLocation(this.shaderProgram_0, 'u_length'), 1);
    $receiver.bufferData(WebGLRenderingContext.ARRAY_BUFFER, FULLSCREEN_VERTICES, WebGLRenderingContext.STATIC_DRAW);
    $receiver.drawArrays(WebGLRenderingContext.TRIANGLES, 0, 6);
    window.requestAnimationFrame(Dots$render$lambda(this));
  };
  Dots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dots',
    interfaces: []
  };
  function clear($receiver) {
    $receiver.clearColor(1.0, 1.0, 1.0, 1.0);
    $receiver.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
  }
  function rnd_1(min, max) {
    return min + Math.random() * (max - min);
  }
  function Pos(x, y, periodX, periodY, dx, dy) {
    if (x === void 0)
      x = rnd_1(-1.0, 1.0);
    if (y === void 0)
      y = rnd_1(-1.0, 1.0);
    if (periodX === void 0)
      periodX = rnd_1(0.1, 5.0);
    if (periodY === void 0)
      periodY = rnd_1(0.1, 5.0);
    if (dx === void 0)
      dx = rnd_1(0.0, 0.5);
    if (dy === void 0)
      dy = rnd_1(0.0, 0.5);
    this.x = x;
    this.y = y;
    this.periodX = periodX;
    this.periodY = periodY;
    this.dx = dx;
    this.dy = dy;
  }
  var Math_0 = Math;
  Pos.prototype.getX = function () {
    var tmp$ = this.x;
    var tmp$_0 = this.dx;
    var x = get_time() / this.periodX;
    return tmp$ + tmp$_0 * Math_0.sin(x);
  };
  Pos.prototype.getY = function () {
    var tmp$ = this.y;
    var tmp$_0 = this.dy;
    var x = get_time() / this.periodY;
    return tmp$ + tmp$_0 * Math_0.sin(x);
  };
  Pos.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pos',
    interfaces: []
  };
  function Color(r, g, b, periodR, dr) {
    if (r === void 0)
      r = rnd_1(0.5, 1.0);
    if (g === void 0)
      g = rnd_1(0.5, 1.0);
    if (b === void 0)
      b = rnd_1(0.5, 1.0);
    if (periodR === void 0)
      periodR = rnd_1(0.1, 5.0);
    if (dr === void 0)
      dr = rnd_1(0.0, 0.5);
    this.r = r;
    this.g = g;
    this.b = b;
    this.periodR = periodR;
    this.dr = dr;
  }
  Color.prototype.getR = function () {
    var tmp$ = this.r;
    var tmp$_0 = this.dr;
    var x = get_time() / this.periodR;
    return tmp$ + tmp$_0 * Math_0.sin(x);
  };
  Color.prototype.getG = function () {
    return this.g;
  };
  Color.prototype.getB = function () {
    return this.b;
  };
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  function Dot(pos, color) {
    if (pos === void 0)
      pos = new Pos();
    if (color === void 0)
      color = new Color();
    this.pos = pos;
    this.color = color;
  }
  Dot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dot',
    interfaces: []
  };
  function get_time() {
    return (new Date()).getTime() / 1000.0;
  }
  function EmptyGameScreen() {
    Game.call(this, new SizeType$FixedWidth(1200.0, 800.0, 1400.0), new RGBA(0.0, 0.0, 0.5, 0.5));
    this.$delegate_k164ao$_0 = new EmptyInputProcessor();
    this.sprites_0 = new Game$SpriteBatch(this);
    this.x = 0.0;
    this.y = 0.0;
  }
  EmptyGameScreen.prototype.loadResources = function () {
  };
  EmptyGameScreen.prototype.unloadResources = function () {
    this.textures.dispose();
  };
  EmptyGameScreen.prototype.update_dleff0$ = function (time, delta) {
    var tmp$, tmp$_0;
    if ((tmp$ = this.clearColor) != null) {
      var x = time / 3;
      tmp$.r = Math_0.sin(x);
    }
    if ((tmp$_0 = this.clearColor) != null) {
      var x_0 = time / 5;
      tmp$_0.g = Math_0.sin(x_0);
    }
    var x_1 = time * 1.5;
    this.x = 400.0 + Math_0.sin(x_1) * 300.0;
    var tmp$_1 = this.view.gameHeight / 2.0;
    var x_2 = time * 2.5;
    this.y = tmp$_1 + Math_0.cos(x_2) * 300.0;
  };
  EmptyGameScreen.prototype.render = function () {
    this.sprites_0.draw_p8tr0q$(new Game$ImgSprite(this, new Game$ImgTexData('img/smiley.png')), this.x, this.y, 0.3);
    this.sprites_0.render();
    this.drawText_k35s1u$(300.0, this.view.gameHeight / 2.0, 'Hello!' + Gen_getInstance().date(), 'bold 30pt Arial', 'rgba(255,255,0,0.75)');
  };
  EmptyGameScreen.prototype.keyDown_za3lpa$ = function (keyCode) {
    return this.$delegate_k164ao$_0.keyDown_za3lpa$(keyCode);
  };
  EmptyGameScreen.prototype.keyPressed_za3lpa$ = function (charCode) {
    return this.$delegate_k164ao$_0.keyPressed_za3lpa$(charCode);
  };
  EmptyGameScreen.prototype.keyUp_za3lpa$ = function (keyCode) {
    return this.$delegate_k164ao$_0.keyUp_za3lpa$(keyCode);
  };
  EmptyGameScreen.prototype.pointerClick_nhq4am$ = function (pointer, x, y) {
    return this.$delegate_k164ao$_0.pointerClick_nhq4am$(pointer, x, y);
  };
  EmptyGameScreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyGameScreen',
    interfaces: [Game, InputProcessor]
  };
  var SPEED;
  var radius;
  var vertexShader;
  var fragmentShader;
  function Fractal1Data(x, y, offsetX, offsetY, scaleX, scaleY, offset) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (offsetX === void 0)
      offsetX = 0.0;
    if (offsetY === void 0)
      offsetY = 0.0;
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = 1.0;
    if (offset === void 0)
      offset = 0.0;
    this.x = x;
    this.y = y;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.offset = offset;
  }
  Fractal1Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fractal1Data',
    interfaces: []
  };
  function Fractal1(html) {
    this.html = html;
    this.start = (new Date()).getTime();
    this.webgl = this.html.webgl;
    var tmp$;
    this.attribBuffer = (tmp$ = this.webgl.createBuffer()) != null ? tmp$ : lib.log.fatalError_nez7ok$('Unable to create webgl buffer!');
    this.shaderProgram = new ShaderProgram(this.webgl, DType$TRIANGLE_getInstance(), vertexShader, fragmentShader, [new VertextAttributeInfo('a_position', 2)], Fractal1$shaderProgram$lambda);
  }
  function Fractal1$render$lambda(this$Fractal1) {
    return function (it) {
      this$Fractal1.render();
      return Unit;
    };
  }
  Fractal1.prototype.render = function () {
    this.html.resize();
    this.webgl.clearColor(1.0, 1.0, 1.0, 1.0);
    this.webgl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
    var time = (this.start - (new Date()).getTime()) / 500.0 * SPEED;
    var tmp$ = this.shaderProgram;
    var tmp$_0 = this.attribBuffer;
    var x = time / 31;
    var tmp$_1 = 0.28 + Math_0.sin(x) / 100.0;
    var x_0 = time / 23.07;
    var tmp$_2 = 0.008 + Math_0.cos(x_0) / 100.0;
    var tmp$_3 = void 0;
    var tmp$_4 = void 0;
    var x_1 = time / 10.0;
    var tmp$_5 = 1.3 - Math_0.sin(x_1) * 0.5;
    var x_2 = time / 10.0;
    tmp$.begin_v6ru81$(tmp$_0, new Fractal1Data(tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, 1.3 - Math_0.sin(x_2) * 0.5, 0.0));
    this.webgl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, FULLSCREEN_VERTICES, WebGLRenderingContext.DYNAMIC_DRAW);
    this.webgl.drawArrays(this.shaderProgram.drawType.glDrawType, 0, 6);
    this.shaderProgram.end();
    window.requestAnimationFrame(Fractal1$render$lambda(this));
  };
  function Fractal1$shaderProgram$lambda(it) {
    it.program.setUniform2f_ai6r6m$('u_julia', it.data.x, it.data.y);
    it.program.setUniform4f_64vbwm$('u_viewWindow', it.data.offsetX, it.data.offsetY, it.data.scaleX, it.data.scaleY);
    it.program.setUniform1f_io5o9c$('u_offset', it.data.offset);
    return Unit;
  }
  Fractal1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fractal1',
    interfaces: []
  };
  var vertexShader_0;
  var fragmentShader_0;
  function Fractal2Data(offsetX, offsetY) {
    if (offsetX === void 0)
      offsetX = 0.0;
    if (offsetY === void 0)
      offsetY = 0.0;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
  Fractal2Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fractal2Data',
    interfaces: []
  };
  function Fractal2(html) {
    this.html = html;
    this.start = (new Date()).getTime();
    this.webgl = this.html.webgl;
    this.shaderProgram = new ShaderProgram(this.webgl, DType$TRIANGLE_getInstance(), vertexShader_0, fragmentShader_0, [new VertextAttributeInfo('a_position', 2)], Fractal2$shaderProgram$lambda);
    var tmp$;
    this.attribBuffer = (tmp$ = this.webgl.createBuffer()) != null ? tmp$ : lib.log.fatalError_nez7ok$('Unable to create webgl buffer!');
  }
  function Fractal2$render$lambda(this$Fractal2) {
    return function (it) {
      this$Fractal2.render();
      return Unit;
    };
  }
  Fractal2.prototype.render = function () {
    this.html.resize();
    this.webgl.clearColor(1.0, 1.0, 1.0, 1.0);
    this.webgl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
    var time = (this.start - (new Date()).getTime()) / 1000.0;
    this.shaderProgram.begin_v6ru81$(this.attribBuffer, new Fractal2Data(Math_0.sin(time), Math_0.cos(time)));
    this.webgl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, FULLSCREEN_VERTICES, WebGLRenderingContext.DYNAMIC_DRAW);
    this.webgl.drawArrays(this.shaderProgram.drawType.glDrawType, 0, 6);
    this.shaderProgram.end();
    window.requestAnimationFrame(Fractal2$render$lambda(this));
  };
  function Fractal2$shaderProgram$lambda(it) {
    it.program.setUniform4f_kjn4ou$('u_viewWindow', it.data.offsetX, it.data.offsetY, 0.0, 0.0);
    return Unit;
  }
  Fractal2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fractal2',
    interfaces: []
  };
  var LIGHT;
  var NORMAL;
  var DARK;
  var SHADOW;
  var SATURATION;
  function Block() {
    Block_instance = this;
  }
  Block.prototype.create_mx4ult$ = function (hue) {
    var array = new Uint8Array((4 * 8 | 0) * 8 | 0);
    var light = Color_getInstance().hslToRgb_y2kzbl$(hue, SATURATION, LIGHT);
    var normal = Color_getInstance().hslToRgb_y2kzbl$(hue, SATURATION, NORMAL);
    var dark = Color_getInstance().hslToRgb_y2kzbl$(hue, SATURATION, DARK);
    for (var index = 0; index <= 7; index++) {
      array.set([toByte(light[0]), toByte(light[1]), toByte(light[2]), toByte(255)], 4 * ((index * 8 | 0) + 0 | 0) | 0);
      array.set([toByte(dark[0]), toByte(dark[1]), toByte(dark[2]), toByte(255)], 4 * ((index * 8 | 0) + 7 | 0) | 0);
    }
    for (var index_0 = 1; index_0 <= 6; index_0++) {
      array.set([toByte(light[0]), toByte(light[1]), toByte(light[2]), toByte(255)], 4 * ((0 * 8 | 0) + index_0 | 0) | 0);
      array.set([toByte(dark[0]), toByte(dark[1]), toByte(dark[2]), toByte(255)], 4 * ((7 * 8 | 0) + index_0 | 0) | 0);
    }
    for (var x = 1; x <= 6; x++) {
      for (var y = 1; y <= 6; y++) {
        array.set([toByte(normal[0]), toByte(normal[1]), toByte(normal[2]), toByte(255)], 4 * ((y * 8 | 0) + x | 0) | 0);
      }
    }
    return array;
  };
  Block.prototype.createGrey_mx4ult$ = function (lightness) {
    var array = new Uint8Array((4 * 8 | 0) * 8 | 0);
    var light = Color_getInstance().hslToRgb_y2kzbl$(0.0, 0.0, lightness + 0.1);
    var normal = Color_getInstance().hslToRgb_y2kzbl$(0.0, 0.0, lightness);
    var dark = Color_getInstance().hslToRgb_y2kzbl$(0.0, 0.0, lightness - 0.1);
    for (var index = 0; index <= 7; index++) {
      array.set([toByte(light[0]), toByte(light[1]), toByte(light[2]), toByte(255)], 4 * ((index * 8 | 0) + 0 | 0) | 0);
      array.set([toByte(dark[0]), toByte(dark[1]), toByte(dark[2]), toByte(255)], 4 * ((index * 8 | 0) + 7 | 0) | 0);
    }
    for (var index_0 = 1; index_0 <= 6; index_0++) {
      array.set([toByte(light[0]), toByte(light[1]), toByte(light[2]), toByte(255)], 4 * ((0 * 8 | 0) + index_0 | 0) | 0);
      array.set([toByte(dark[0]), toByte(dark[1]), toByte(dark[2]), toByte(255)], 4 * ((7 * 8 | 0) + index_0 | 0) | 0);
    }
    for (var x = 1; x <= 6; x++) {
      for (var y = 1; y <= 6; y++) {
        array.set([toByte(normal[0]), toByte(normal[1]), toByte(normal[2]), toByte(255)], 4 * ((y * 8 | 0) + x | 0) | 0);
      }
    }
    return array;
  };
  Block.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Block',
    interfaces: []
  };
  var Block_instance = null;
  function Block_getInstance() {
    if (Block_instance === null) {
      new Block();
    }
    return Block_instance;
  }
  function Color_0() {
    Color_instance = this;
  }
  Color_0.prototype.hslToRgb_y2kzbl$ = function (h, s, l) {
    var r;
    var g;
    var b;
    if (s === 0.0) {
      b = l;
      g = b;
      r = g;
    }
     else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = this.hueToRgb_y2kzbl$(p, q, h + 1.0 / 3.0);
      g = this.hueToRgb_y2kzbl$(p, q, h);
      b = this.hueToRgb_y2kzbl$(p, q, h - 1.0 / 3.0);
    }
    var rgb = new Int32Array([numberToInt(r * 255), numberToInt(g * 255), numberToInt(b * 255)]);
    return rgb;
  };
  Color_0.prototype.hueToRgb_y2kzbl$ = function (p, q, t) {
    var lt = t;
    if (lt < 0.0) {
      lt += 1.0;
    }
    if (lt > 1.0) {
      lt -= 1.0;
    }
    if (lt < 1.0 / 6.0) {
      return p + (q - p) * 6.0 * lt;
    }
    if (lt < 1.0 / 2.0) {
      return q;
    }
    if (lt < 2.0 / 3.0) {
      return p + (q - p) * (2.0 / 3.0 - lt) * 6.0;
    }
    return p;
  };
  Color_0.prototype.rgbToHsl_qt1dr2$ = function (pR, pG, pB) {
    var r = pR / 255.0;
    var g = pG / 255.0;
    var b = pB / 255.0;
    var max = r > g && r > b ? r : g > b ? g : b;
    var min = r < g && r < b ? r : g < b ? g : b;
    var h;
    var s;
    var l;
    l = (max + min) / 2.0;
    if (max === min) {
      s = 0.0;
      h = s;
    }
     else {
      var d = max - min;
      s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);
      if (r > g && r > b)
        h = (g - b) / d + (g < b ? 6.0 : 0.0);
      else if (g > b)
        h = (b - r) / d + 2.0;
      else
        h = (r - g) / d + 4.0;
      h /= 6.0;
    }
    var hsl = new Float32Array([h, s, l]);
    return hsl;
  };
  Color_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Color',
    interfaces: []
  };
  var Color_instance = null;
  function Color_getInstance() {
    if (Color_instance === null) {
      new Color_0();
    }
    return Color_instance;
  }
  function GameSounds(name, ordinal, file, defaultVolume, channels) {
    Enum.call(this);
    this.file = file;
    this.defaultVolume = defaultVolume;
    this.channels = channels;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameSounds_initFields() {
    GameSounds_initFields = function () {
    };
    GameSounds$ROTATE_instance = new GameSounds('ROTATE', 0, 'sounds/SFX_PieceRotateLR.mp3', 1.0, 1);
    GameSounds$ROTATE_FAIL_instance = new GameSounds('ROTATE_FAIL', 1, 'sounds/SFX_PieceRotateFail.mp3', 1.0, 1);
    GameSounds$TICK_instance = new GameSounds('TICK', 2, 'sounds/SFX_PieceSoftDrop.mp3', 1.0, 1);
    GameSounds$SINGLE_instance = new GameSounds('SINGLE', 3, 'sounds/SFX_SpecialLineClearSingle.mp3', 1.0, 1);
    GameSounds$DOUBLE_instance = new GameSounds('DOUBLE', 4, 'sounds/SFX_SpecialLineClearDouble.mp3', 1.0, 1);
    GameSounds$TRIPLE_instance = new GameSounds('TRIPLE', 5, 'sounds/SFX_SpecialLineClearTriple.mp3', 1.0, 1);
    GameSounds$Companion_getInstance();
  }
  var GameSounds$ROTATE_instance;
  function GameSounds$ROTATE_getInstance() {
    GameSounds_initFields();
    return GameSounds$ROTATE_instance;
  }
  var GameSounds$ROTATE_FAIL_instance;
  function GameSounds$ROTATE_FAIL_getInstance() {
    GameSounds_initFields();
    return GameSounds$ROTATE_FAIL_instance;
  }
  var GameSounds$TICK_instance;
  function GameSounds$TICK_getInstance() {
    GameSounds_initFields();
    return GameSounds$TICK_instance;
  }
  var GameSounds$SINGLE_instance;
  function GameSounds$SINGLE_getInstance() {
    GameSounds_initFields();
    return GameSounds$SINGLE_instance;
  }
  var GameSounds$DOUBLE_instance;
  function GameSounds$DOUBLE_getInstance() {
    GameSounds_initFields();
    return GameSounds$DOUBLE_instance;
  }
  var GameSounds$TRIPLE_instance;
  function GameSounds$TRIPLE_getInstance() {
    GameSounds_initFields();
    return GameSounds$TRIPLE_instance;
  }
  GameSounds.prototype.play_yrwdxb$ = function (volume) {
    if (volume === void 0)
      volume = null;
    Sounds_getInstance().play_ajzga7$(this.name, volume);
  };
  GameSounds.prototype.pause = function () {
    Sounds_getInstance().pause_61zpoe$(this.name);
  };
  function GameSounds$Companion() {
    GameSounds$Companion_instance = this;
  }
  GameSounds$Companion.prototype.loadAll = function () {
    var tmp$, tmp$_0;
    tmp$ = GameSounds$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var sound = tmp$[tmp$_0];
      Sounds_getInstance().load_5myiwc$(sound.name, sound.file, sound.defaultVolume, sound.channels);
    }
  };
  GameSounds$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameSounds$Companion_instance = null;
  function GameSounds$Companion_getInstance() {
    GameSounds_initFields();
    if (GameSounds$Companion_instance === null) {
      new GameSounds$Companion();
    }
    return GameSounds$Companion_instance;
  }
  GameSounds.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameSounds',
    interfaces: [Enum]
  };
  function GameSounds$values() {
    return [GameSounds$ROTATE_getInstance(), GameSounds$ROTATE_FAIL_getInstance(), GameSounds$TICK_getInstance(), GameSounds$SINGLE_getInstance(), GameSounds$DOUBLE_getInstance(), GameSounds$TRIPLE_getInstance()];
  }
  GameSounds.values = GameSounds$values;
  function GameSounds$valueOf(name) {
    switch (name) {
      case 'ROTATE':
        return GameSounds$ROTATE_getInstance();
      case 'ROTATE_FAIL':
        return GameSounds$ROTATE_FAIL_getInstance();
      case 'TICK':
        return GameSounds$TICK_getInstance();
      case 'SINGLE':
        return GameSounds$SINGLE_getInstance();
      case 'DOUBLE':
        return GameSounds$DOUBLE_getInstance();
      case 'TRIPLE':
        return GameSounds$TRIPLE_getInstance();
      default:throwISE('No enum constant domain.tetris.GameSounds.' + name);
    }
  }
  GameSounds.valueOf_61zpoe$ = GameSounds$valueOf;
  function Piece() {
    this.type = PieceType$values()[numberToInt(Math.random() * PieceType$values().length)];
    this.orientation = 0;
    this.x = 5;
    this.y = 21;
  }
  Piece.prototype.moveLeft = function () {
    this.x = this.x - 1 | 0;
  };
  Piece.prototype.moveRight = function () {
    this.x = this.x + 1 | 0;
  };
  Piece.prototype.moveDown = function () {
    this.y = this.y - 1 | 0;
  };
  Piece.prototype.canMoveDown_bwh3i6$ = function (playfield) {
    var tmp$;
    var result = true;
    var positions = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$ = 0; tmp$ !== positions.length; ++tmp$) {
      var pos = positions[tmp$];
      if ((this.y + pos.second - 1 | 0) < 0 || (this.x + pos.first | 0) < 0 || (this.x + pos.first | 0) > 9) {
        return false;
      }
      result = result & equals(playfield[this.y + pos.second - 1 | 0][this.x + pos.first | 0], ' ');
    }
    return result;
  };
  Piece.prototype.canMoveLeft_bwh3i6$ = function (playfield) {
    var tmp$;
    var result = true;
    var positions = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$ = 0; tmp$ !== positions.length; ++tmp$) {
      var pos = positions[tmp$];
      if ((this.y + pos.second | 0) < 0 || (this.y + pos.second | 0) > 21 || (this.x + pos.first - 1 | 0) < 0 || (this.x + pos.first - 1 | 0) > 9) {
        return false;
      }
      result = result & equals(playfield[this.y + pos.second | 0][this.x + pos.first - 1 | 0], ' ');
    }
    return result;
  };
  Piece.prototype.canMoveRight_bwh3i6$ = function (playfield) {
    var tmp$;
    var result = true;
    var positions = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$ = 0; tmp$ !== positions.length; ++tmp$) {
      var pos = positions[tmp$];
      if ((this.y + pos.second | 0) < 0 || (this.y + pos.second | 0) > 21 || (this.x + pos.first + 1 | 0) < 0 || (this.x + pos.first + 1 | 0) > 9) {
        return false;
      }
      result = result & equals(playfield[this.y + pos.second | 0][this.x + pos.first + 1 | 0], ' ');
    }
    return result;
  };
  Piece.prototype.canTurn_bwh3i6$ = function (playfield) {
    var tmp$;
    var result = true;
    var newOrient = this.orientation + 1 | 0;
    if (newOrient > 3) {
      newOrient = newOrient - 4 | 0;
    }
    var positions = this.type.getPositions_za3lpa$(newOrient);
    for (tmp$ = 0; tmp$ !== positions.length; ++tmp$) {
      var pos = positions[tmp$];
      if ((this.y + pos.second | 0) < 0 || (this.y + pos.second | 0) > 21 || (this.x + pos.first | 0) < 0 || (this.x + pos.first | 0) > 9) {
        return false;
      }
      result = result & equals(playfield[this.y + pos.second | 0][this.x + pos.first | 0], ' ');
    }
    return result;
  };
  Piece.prototype.turn = function () {
    this.orientation = this.orientation + 1 | 0;
    if (this.orientation > 3) {
      this.orientation = this.orientation - 4 | 0;
    }
  };
  Piece.prototype.nextPiece_bwh3i6$ = function (playfield) {
    var tmp$, tmp$_0;
    tmp$ = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var pos = tmp$[tmp$_0];
      playfield[pos.second + this.y | 0][pos.first + this.x | 0] = this.type.name;
    }
    this.orientation = 0;
    this.x = 5;
    this.y = 21;
    this.type = PieceType$values()[numberToInt(Math.random() * PieceType$values().length)];
  };
  Piece.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Piece',
    interfaces: []
  };
  function PieceType(name, ordinal, positions) {
    Enum.call(this);
    this.positions = positions;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PieceType_initFields() {
    PieceType_initFields = function () {
    };
    PieceType$I_instance = new PieceType('I', 0, [to(0, 0), to(-1, 0), to(1, 0), to(2, 0)]);
    PieceType$J_instance = new PieceType('J', 1, [to(0, 0), to(-1, 0), to(1, 0), to(1, 1)]);
    PieceType$L_instance = new PieceType('L', 2, [to(0, 0), to(-1, 0), to(-1, 1), to(1, 0)]);
    PieceType$O_instance = new PieceType('O', 3, [to(0, 0), to(1, 0), to(0, 1), to(1, 1)]);
    PieceType$S_instance = new PieceType('S', 4, [to(0, 0), to(1, 0), to(0, -1), to(-1, -1)]);
    PieceType$T_instance = new PieceType('T', 5, [to(0, 0), to(-1, 0), to(1, 0), to(0, -1)]);
    PieceType$Z_instance = new PieceType('Z', 6, [to(0, 0), to(-1, 0), to(0, -1), to(1, -1)]);
  }
  var PieceType$I_instance;
  function PieceType$I_getInstance() {
    PieceType_initFields();
    return PieceType$I_instance;
  }
  var PieceType$J_instance;
  function PieceType$J_getInstance() {
    PieceType_initFields();
    return PieceType$J_instance;
  }
  var PieceType$L_instance;
  function PieceType$L_getInstance() {
    PieceType_initFields();
    return PieceType$L_instance;
  }
  var PieceType$O_instance;
  function PieceType$O_getInstance() {
    PieceType_initFields();
    return PieceType$O_instance;
  }
  var PieceType$S_instance;
  function PieceType$S_getInstance() {
    PieceType_initFields();
    return PieceType$S_instance;
  }
  var PieceType$T_instance;
  function PieceType$T_getInstance() {
    PieceType_initFields();
    return PieceType$T_instance;
  }
  var PieceType$Z_instance;
  function PieceType$Z_getInstance() {
    PieceType_initFields();
    return PieceType$Z_instance;
  }
  PieceType.prototype.getPositions_za3lpa$ = function (orientation) {
    var tmp$;
    var array = Array_0(this.positions.length);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = to(0, 0);
    }
    var result = array;
    tmp$ = result.length - 1 | 0;
    for (var index = 0; index <= tmp$; index++) {
      switch (orientation) {
        case 0:
          result[index] = to(this.positions[index].first, this.positions[index].second);
          break;
        case 1:
          result[index] = to(this.positions[index].second, -this.positions[index].first | 0);
          break;
        case 2:
          result[index] = to(-this.positions[index].first | 0, -this.positions[index].second | 0);
          break;
        case 3:
          result[index] = to(-this.positions[index].second | 0, this.positions[index].first);
          break;
      }
    }
    return result;
  };
  PieceType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PieceType',
    interfaces: [Enum]
  };
  function PieceType$values() {
    return [PieceType$I_getInstance(), PieceType$J_getInstance(), PieceType$L_getInstance(), PieceType$O_getInstance(), PieceType$S_getInstance(), PieceType$T_getInstance(), PieceType$Z_getInstance()];
  }
  PieceType.values = PieceType$values;
  function PieceType$valueOf(name) {
    switch (name) {
      case 'I':
        return PieceType$I_getInstance();
      case 'J':
        return PieceType$J_getInstance();
      case 'L':
        return PieceType$L_getInstance();
      case 'O':
        return PieceType$O_getInstance();
      case 'S':
        return PieceType$S_getInstance();
      case 'T':
        return PieceType$T_getInstance();
      case 'Z':
        return PieceType$Z_getInstance();
      default:throwISE('No enum constant domain.tetris.PieceType.' + name);
    }
  }
  PieceType.valueOf_61zpoe$ = PieceType$valueOf;
  function Score(score) {
    if (score === void 0)
      score = 0;
    this.score = score;
  }
  Score.prototype.linesRemoved_za3lpa$ = function (lines) {
    var linesLeft = lines;
    var points = 100;
    while (linesLeft > 0) {
      this.score = this.score + points | 0;
      linesLeft = linesLeft - 1 | 0;
      points = points + 100 | 0;
    }
  };
  Score.prototype.tick = function () {
    this.score = this.score + 1 | 0;
  };
  Score.prototype.formatted = function () {
    var result = this.score.toString();
    while (result.length < 5) {
      result = '0' + result;
    }
    return result;
  };
  Score.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Score',
    interfaces: []
  };
  function TetriesScreen() {
    Game.call(this, new SizeType$FixedWidth(800.0, 1600.0, 1600.0));
    this.sprites = new Game$SpriteBatch(this);
    var array = Array_0(22);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array_0(10);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = ' ';
      }
      array[i] = array_0;
    }
    this.playfield = array;
    this.blocks = mapOf([to('I', new Game$GenSprite(this, new Game$GenTexData(8, 8, 0.5, getCallableRef('create', function ($receiver, hue) {
      return $receiver.create_mx4ult$(hue);
    }.bind(null, Block_getInstance()))))), to('J', new Game$GenSprite(this, new Game$GenTexData(8, 8, 0.625, getCallableRef('create', function ($receiver, hue) {
      return $receiver.create_mx4ult$(hue);
    }.bind(null, Block_getInstance()))))), to('L', new Game$GenSprite(this, new Game$GenTexData(8, 8, 0.0625, getCallableRef('create', function ($receiver, hue) {
      return $receiver.create_mx4ult$(hue);
    }.bind(null, Block_getInstance()))))), to('O', new Game$GenSprite(this, new Game$GenTexData(8, 8, 0.125, getCallableRef('create', function ($receiver, hue) {
      return $receiver.create_mx4ult$(hue);
    }.bind(null, Block_getInstance()))))), to('S', new Game$GenSprite(this, new Game$GenTexData(8, 8, 0.25, getCallableRef('create', function ($receiver, hue) {
      return $receiver.create_mx4ult$(hue);
    }.bind(null, Block_getInstance()))))), to('T', new Game$GenSprite(this, new Game$GenTexData(8, 8, 0.75, getCallableRef('create', function ($receiver, hue) {
      return $receiver.create_mx4ult$(hue);
    }.bind(null, Block_getInstance()))))), to('Z', new Game$GenSprite(this, new Game$GenTexData(8, 8, 0.0, getCallableRef('create', function ($receiver, hue) {
      return $receiver.create_mx4ult$(hue);
    }.bind(null, Block_getInstance())))))]);
    this.fullscreen = new Game$ImgSprite(this, new Game$ImgTexData('img/fullscreen.png'));
    this.windowed = new Game$ImgSprite(this, new Game$ImgTexData('img/windowed.png'));
    this.timePerTick = 1.0;
    this.timeTillNextTick = this.timePerTick;
    this.score = new Score();
    this.shadowColor = Color_getInstance().hslToRgb_y2kzbl$(0.125, SATURATION, SHADOW);
    this.textColor = Color_getInstance().hslToRgb_y2kzbl$(0.125, SATURATION, LIGHT);
    this.gameOver = false;
    this.music = null;
    this.greySize = 10;
    var array_1 = Array_0(this.greySize);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = new Game$GenSprite(this, new Game$GenTexData(8, 8, i_1 / this.greySize, getCallableRef('createGrey', function ($receiver, lightness) {
        return $receiver.createGrey_mx4ult$(lightness);
      }.bind(null, Block_getInstance()))));
    }
    this.greyBlocks = array_1;
    this.deltaY = 0;
    this.piece = new Piece();
  }
  TetriesScreen.prototype.keyPressed_za3lpa$ = function (charCode) {
  };
  TetriesScreen.prototype.keyDown_za3lpa$ = function (keyCode) {
  };
  TetriesScreen.prototype.keyUp_za3lpa$ = function (keyCode) {
  };
  TetriesScreen.prototype.pointerClick_nhq4am$ = function (pointer, x, y) {
    if (x > 720 && x < 800 && y > 1520 && y < 1600)
      this.view.switchFullscreen();
    else {
      if (y < 400)
        this.moveDown_0();
      else if (y > 1200)
        this.turn_0();
      else if (x < 400)
        this.moveLeft_0();
      else
        this.moveRight_0();
    }
  };
  TetriesScreen.prototype.loadResources = function () {
    GameSounds$Companion_getInstance().loadAll();
    this.music = Music_getInstance().play_1truf$('music/Tetris.mp3', 0.1, true);
  };
  TetriesScreen.prototype.unloadResources = function () {
    this.textures.clear();
  };
  TetriesScreen.prototype.moveDown_0 = function () {
    if (this.piece.canMoveDown_bwh3i6$(this.playfield)) {
      this.piece.moveDown();
      this.score.tick();
      GameSounds$TICK_getInstance().play_yrwdxb$();
    }
  };
  TetriesScreen.prototype.turn_0 = function () {
    if (this.piece.canTurn_bwh3i6$(this.playfield)) {
      this.piece.turn();
      GameSounds$ROTATE_getInstance().play_yrwdxb$();
    }
     else {
      GameSounds$ROTATE_FAIL_getInstance().play_yrwdxb$();
    }
  };
  TetriesScreen.prototype.moveLeft_0 = function () {
    if (this.piece.canMoveLeft_bwh3i6$(this.playfield)) {
      this.piece.moveLeft();
      GameSounds$TICK_getInstance().play_yrwdxb$();
    }
  };
  TetriesScreen.prototype.moveRight_0 = function () {
    if (this.piece.canMoveRight_bwh3i6$(this.playfield)) {
      this.piece.moveRight();
      GameSounds$TICK_getInstance().play_yrwdxb$();
    }
  };
  TetriesScreen.prototype.checkInput_0 = function (delta) {
    if (this.keys.wasPressed_5wr77w$(KeyCode$DOWN_getInstance().keyCode, delta * 1000)) {
      this.moveDown_0();
    }
     else if (this.keys.wasPressed_5wr77w$(KeyCode$UP_getInstance().keyCode, delta * 1000)) {
      this.turn_0();
    }
     else if (this.keys.wasPressed_5wr77w$(KeyCode$LEFT_getInstance().keyCode, delta * 1000)) {
      this.moveLeft_0();
    }
     else if (this.keys.wasPressed_5wr77w$(KeyCode$RIGHT_getInstance().keyCode, delta * 1000)) {
      this.moveRight_0();
    }
  };
  TetriesScreen.prototype.update_dleff0$ = function (time, delta) {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = document.body) != null ? tmp$.style : null) != null ? (tmp$_0.backgroundColor = '#ddd') : null;
    var tick = false;
    this.timeTillNextTick -= delta;
    while (this.timeTillNextTick < 0.0) {
      this.timeTillNextTick += this.timePerTick;
      tick = true;
    }
    if (this.gameOver) {
      return;
    }
    this.checkInput_0(delta);
    if (tick) {
      if (!this.piece.canMoveDown_bwh3i6$(this.playfield)) {
        if (this.piece.y === 21) {
          this.gameOver = true;
        }
         else {
          this.nextPiece_0();
        }
      }
      this.tick();
    }
    this.deltaY = this.deltaY + numberToInt(delta * 80.0) | 0;
    while (this.deltaY > 320) {
      this.deltaY = this.deltaY - 320 | 0;
    }
  };
  TetriesScreen.prototype.nextPiece_0 = function () {
    this.piece.nextPiece_bwh3i6$(this.playfield);
    this.removeFilledLines_0();
  };
  TetriesScreen.prototype.tick = function () {
    if (this.piece.canMoveDown_bwh3i6$(this.playfield)) {
      this.piece.moveDown();
    }
    this.score.tick();
  };
  TetriesScreen.prototype.drawGrey_0 = function (x, y, c) {
    this.sprites.draw_p8tr0q$(this.greyBlocks[c], 40.0 + x * 80.0, (-this.deltaY | 0) + 40.0 + y * 80.0, 10.0);
  };
  TetriesScreen.prototype.render = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    for (var x = 0; x <= 2; x++) {
      for (var y = 0; y <= 5; y++) {
        var xx = x * 4 | 0;
        var yy = y * 4 | 0;
        this.drawGrey_0(xx + 0 | 0, yy + 0 | 0, 4);
        this.drawGrey_0(xx + 1 | 0, yy + 0 | 0, 4);
        this.drawGrey_0(xx + 1 | 0, yy + 1 | 0, 4);
        this.drawGrey_0(xx + 2 | 0, yy + 0 | 0, 4);
        this.drawGrey_0(xx + 0 | 0, yy + 1 | 0, 3);
        this.drawGrey_0(xx + 0 | 0, yy + 2 | 0, 3);
        this.drawGrey_0(xx + 1 | 0, yy + 2 | 0, 3);
        this.drawGrey_0(xx + 0 | 0, yy + 3 | 0, 3);
        this.drawGrey_0(xx + 1 | 0, yy + 3 | 0, 1);
        this.drawGrey_0(xx + 2 | 0, yy + 3 | 0, 1);
        this.drawGrey_0(xx + 2 | 0, yy + 2 | 0, 1);
        this.drawGrey_0(xx + 3 | 0, yy + 3 | 0, 1);
        this.drawGrey_0(xx + 3 | 0, yy + 0 | 0, 2);
        this.drawGrey_0(xx + 3 | 0, yy + 1 | 0, 2);
        this.drawGrey_0(xx + 2 | 0, yy + 1 | 0, 2);
        this.drawGrey_0(xx + 3 | 0, yy + 2 | 0, 2);
      }
    }
    this.sprites.render();
    var y_0 = 40.0;
    tmp$ = this.playfield.length - 1 | 0;
    for (var line = 0; line <= tmp$; line++) {
      var x_0 = 40.0;
      tmp$_0 = this.playfield[line];
      for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
        var char = tmp$_0[tmp$_1];
        var block = this.blocks.get_11rb$(char);
        if (block != null) {
          this.sprites.draw_p8tr0q$(block, x_0, y_0, 10.0);
        }
        x_0 += 80.0;
      }
      y_0 += 80.0;
    }
    var px = this.piece.x * 80.0 + 40.0;
    var py = this.piece.y * 80.0 + 40.0;
    var block_0 = this.blocks.get_11rb$(this.piece.type.name);
    if (block_0 != null) {
      tmp$_2 = this.piece.type.getPositions_za3lpa$(this.piece.orientation);
      for (tmp$_3 = 0; tmp$_3 !== tmp$_2.length; ++tmp$_3) {
        var position = tmp$_2[tmp$_3];
        this.sprites.draw_p8tr0q$(block_0, px + position.first * 80.0, py + position.second * 80.0, 10.0);
      }
    }
    if (this.view.isFullscreen()) {
      this.sprites.draw_p8tr0q$(this.windowed, 760.0, 1560.0, 0.25);
    }
     else {
      this.sprites.draw_p8tr0q$(this.fullscreen, 760.0, 1560.0, 0.25);
    }
    this.sprites.render();
    var fs = this.score.formatted();
    this.drawText_k35s1u$(10.0, -58.0, fs, 'bold 48pt Arial', 'rgba(' + this.shadowColor[0] + ', ' + this.shadowColor[1] + ', ' + this.shadowColor[2] + ', 1)');
    this.drawText_k35s1u$(7.0, -55.0, fs, 'bold 48pt Arial', 'rgba(' + this.textColor[0] + ', ' + this.textColor[1] + ', ' + this.textColor[2] + ', 0.9)');
    if (this.gameOver) {
      this.drawText_k35s1u$(53.0, 803.0, 'GAME OVER!', 'bold 80pt Arial', 'rgba(55,0,0,1)');
      this.drawText_k35s1u$(50.0, 800.0, 'GAME OVER!', 'bold 80pt Arial', 'rgba(255,0,0,0.9)');
    }
  };
  TetriesScreen.prototype.removeFilledLines_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var toRemove = ArrayList_init();
    for (var y = 0; y <= 21; y++) {
      var empty = false;
      for (var x = 0; x <= 9; x++) {
        if (equals(this.playfield[y][x], ' ')) {
          empty = true;
          break;
        }
      }
      if (!empty) {
        toRemove.add_11rb$(y);
      }
    }
    var linesRemoved = 0;
    while (!toRemove.isEmpty()) {
      var line = toRemove.removeAt_za3lpa$(0) - linesRemoved | 0;
      for (var y_0 = line; y_0 <= 20; y_0++) {
        this.playfield[y_0] = this.playfield[y_0 + 1 | 0];
      }
      var tmp$_5 = this.playfield;
      var array = Array_0(10);
      var tmp$_6;
      tmp$_6 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_6; i++) {
        array[i] = ' ';
      }
      tmp$_5[21] = array;
      linesRemoved = linesRemoved + 1 | 0;
      this.timePerTick *= 0.95;
    }
    this.score.linesRemoved_za3lpa$(linesRemoved);
    switch (linesRemoved) {
      case 0:
        break;
      case 1:
        GameSounds$SINGLE_getInstance().play_yrwdxb$();
        (tmp$_0 = (tmp$ = document.body) != null ? tmp$.style : null) != null ? (tmp$_0.backgroundColor = '#ff0') : null;
        break;
      case 2:
        GameSounds$DOUBLE_getInstance().play_yrwdxb$();
        (tmp$_2 = (tmp$_1 = document.body) != null ? tmp$_1.style : null) != null ? (tmp$_2.backgroundColor = '#f80') : null;
        break;
      default:GameSounds$TRIPLE_getInstance().play_yrwdxb$();
        (tmp$_4 = (tmp$_3 = document.body) != null ? tmp$_3.style : null) != null ? (tmp$_4.backgroundColor = '#f00') : null;
        break;
    }
  };
  TetriesScreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetriesScreen',
    interfaces: [Game]
  };
  function MapData() {
    this.version = 1;
    this.properties = HashMap_init();
    this.layers = null;
    this.tilesets = null;
    this.height = 0;
    this.width = 0;
    this.nextobjectid = 0;
    this.orientation = 'orthogonal';
    this.renderorder = 'right-down';
    this.tileheight = 0;
    this.tilewidth = 0;
  }
  MapData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapData',
    interfaces: []
  };
  function MapLayer() {
    this.properties = HashMap_init();
    this.data = null;
    this.encoding = '';
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.name = '';
    this.opacity = 1.0;
    this.type = '';
    this.visible = true;
    this.draworder = '';
  }
  MapLayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapLayer',
    interfaces: []
  };
  function MapTileset() {
    this.properties = HashMap_init();
    this.firstgid = 0;
    this.image = '';
    this.imageheight = 0;
    this.imagewidth = 0;
    this.margin = 0;
    this.name = '';
    this.spacing = 0;
    this.tilecount = 0;
    this.tileheight = 0;
    this.tilewidth = 0;
    this.tileproperties = HashMap_init();
  }
  MapTileset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapTileset',
    interfaces: []
  };
  function TilesetIndex(texture, tcLeft, tcTop, tcRight, tcBottom, scale) {
    this.texture = texture;
    this.tcLeft = tcLeft;
    this.tcTop = tcTop;
    this.tcRight = tcRight;
    this.tcBottom = tcBottom;
    this.scale = scale;
  }
  TilesetIndex.prototype.render_dleff0$ = function (x, y) {
    var tmp$;
    return (tmp$ = this.texture) != null ? (tmp$.queueTileDraw_nkj9yk$(x, y, this.tcLeft, this.tcTop, this.tcRight, this.tcBottom, this.scale), Unit) : null;
  };
  TilesetIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TilesetIndex',
    interfaces: []
  };
  function TilesetIndex_init($this) {
    $this = $this || Object.create(TilesetIndex.prototype);
    TilesetIndex.call($this, null, 0.0, 0.0, 0.0, 0.0, 0.0);
    return $this;
  }
  function Matrix4() {
    this.matrix_8be2vx$ = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.temp_8be2vx$ = new Float32Array(16);
    this.translateMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.scaleMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.rotateXMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.rotateYMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.rotateZMatrix_0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
  }
  Matrix4.prototype.get = function () {
    return this.matrix_8be2vx$;
  };
  Matrix4.prototype.toFloat32Arr = function () {
    return new Float32Array(toTypedArray(this.get()));
  };
  Matrix4.prototype.mul_ky62hk$ = function (other) {
    this.mul_0(other.get());
  };
  Matrix4.prototype.set_q3cr5i$ = function (values) {
    if (values.length !== 16) {
      throw IllegalArgumentException_init('Matrix size should be 16!');
    }
    this.matrix_8be2vx$ = values;
  };
  Matrix4.prototype.setPerspectiveProjection_7b5o5w$ = function (angle, imageAspectRatio, near, far) {
    var r = angle / 180.0 * Math.PI;
    var f = 1.0 / Math.tan(r / 2.0);
    this.matrix_8be2vx$[0] = f / imageAspectRatio;
    this.matrix_8be2vx$[1] = 0.0;
    this.matrix_8be2vx$[2] = 0.0;
    this.matrix_8be2vx$[3] = 0.0;
    this.matrix_8be2vx$[4] = 0.0;
    this.matrix_8be2vx$[5] = f;
    this.matrix_8be2vx$[6] = 0.0;
    this.matrix_8be2vx$[7] = 0.0;
    this.matrix_8be2vx$[8] = 0.0;
    this.matrix_8be2vx$[9] = 0.0;
    this.matrix_8be2vx$[10] = -(far + near) / (far - near);
    this.matrix_8be2vx$[11] = -1.0;
    this.matrix_8be2vx$[12] = 0.0;
    this.matrix_8be2vx$[13] = 0.0;
    this.matrix_8be2vx$[14] = -(2.0 * far * near) / (far - near);
    this.matrix_8be2vx$[15] = 0.0;
  };
  Matrix4.prototype.setOrthographicProjection_w8lrqs$ = function (left, right, bottom, top, near, far) {
    this.matrix_8be2vx$[0] = 2.0 / (right - left);
    this.matrix_8be2vx$[1] = 0.0;
    this.matrix_8be2vx$[2] = 0.0;
    this.matrix_8be2vx$[3] = 0.0;
    this.matrix_8be2vx$[4] = 0.0;
    this.matrix_8be2vx$[5] = 2.0 / (top - bottom);
    this.matrix_8be2vx$[6] = 0.0;
    this.matrix_8be2vx$[7] = 0.0;
    this.matrix_8be2vx$[8] = 0.0;
    this.matrix_8be2vx$[9] = 0.0;
    this.matrix_8be2vx$[10] = -2.0 / (far - near);
    this.matrix_8be2vx$[11] = 0.0;
    this.matrix_8be2vx$[12] = -(right + left) / (right - left);
    this.matrix_8be2vx$[13] = -(top + bottom) / (top - bottom);
    this.matrix_8be2vx$[14] = -(far + near) / (far - near);
    this.matrix_8be2vx$[15] = 1.0;
  };
  Matrix4.prototype.setToIdentity = function () {
    this.matrix_8be2vx$[0] = 1.0;
    this.matrix_8be2vx$[1] = 0.0;
    this.matrix_8be2vx$[2] = 0.0;
    this.matrix_8be2vx$[3] = 0.0;
    this.matrix_8be2vx$[4] = 0.0;
    this.matrix_8be2vx$[5] = 1.0;
    this.matrix_8be2vx$[6] = 0.0;
    this.matrix_8be2vx$[7] = 0.0;
    this.matrix_8be2vx$[8] = 0.0;
    this.matrix_8be2vx$[9] = 0.0;
    this.matrix_8be2vx$[10] = 1.0;
    this.matrix_8be2vx$[11] = 0.0;
    this.matrix_8be2vx$[12] = 0.0;
    this.matrix_8be2vx$[13] = 0.0;
    this.matrix_8be2vx$[14] = 0.0;
    this.matrix_8be2vx$[15] = 1.0;
  };
  Matrix4.prototype.mul_0 = function (other) {
    if (other.length !== 16)
      throw IllegalArgumentException_init('Matrix size should be 16!');
    this.temp_8be2vx$[0] = this.matrix_8be2vx$[0] * other[0] + this.matrix_8be2vx$[1] * other[4] + this.matrix_8be2vx$[2] * other[8] + this.matrix_8be2vx$[3] * other[12];
    this.temp_8be2vx$[1] = this.matrix_8be2vx$[0] * other[1] + this.matrix_8be2vx$[1] * other[5] + this.matrix_8be2vx$[2] * other[9] + this.matrix_8be2vx$[3] * other[13];
    this.temp_8be2vx$[2] = this.matrix_8be2vx$[0] * other[2] + this.matrix_8be2vx$[1] * other[6] + this.matrix_8be2vx$[2] * other[10] + this.matrix_8be2vx$[3] * other[14];
    this.temp_8be2vx$[3] = this.matrix_8be2vx$[0] * other[3] + this.matrix_8be2vx$[1] * other[7] + this.matrix_8be2vx$[2] * other[11] + this.matrix_8be2vx$[3] * other[15];
    this.temp_8be2vx$[4] = this.matrix_8be2vx$[4] * other[0] + this.matrix_8be2vx$[5] * other[4] + this.matrix_8be2vx$[6] * other[8] + this.matrix_8be2vx$[7] * other[12];
    this.temp_8be2vx$[5] = this.matrix_8be2vx$[4] * other[1] + this.matrix_8be2vx$[5] * other[5] + this.matrix_8be2vx$[6] * other[9] + this.matrix_8be2vx$[7] * other[13];
    this.temp_8be2vx$[6] = this.matrix_8be2vx$[4] * other[2] + this.matrix_8be2vx$[5] * other[6] + this.matrix_8be2vx$[6] * other[10] + this.matrix_8be2vx$[7] * other[14];
    this.temp_8be2vx$[7] = this.matrix_8be2vx$[4] * other[3] + this.matrix_8be2vx$[5] * other[7] + this.matrix_8be2vx$[6] * other[11] + this.matrix_8be2vx$[7] * other[15];
    this.temp_8be2vx$[8] = this.matrix_8be2vx$[8] * other[0] + this.matrix_8be2vx$[9] * other[4] + this.matrix_8be2vx$[10] * other[8] + this.matrix_8be2vx$[11] * other[12];
    this.temp_8be2vx$[9] = this.matrix_8be2vx$[8] * other[1] + this.matrix_8be2vx$[9] * other[5] + this.matrix_8be2vx$[10] * other[9] + this.matrix_8be2vx$[11] * other[13];
    this.temp_8be2vx$[10] = this.matrix_8be2vx$[8] * other[2] + this.matrix_8be2vx$[9] * other[6] + this.matrix_8be2vx$[10] * other[10] + this.matrix_8be2vx$[11] * other[14];
    this.temp_8be2vx$[11] = this.matrix_8be2vx$[8] * other[3] + this.matrix_8be2vx$[9] * other[7] + this.matrix_8be2vx$[10] * other[11] + this.matrix_8be2vx$[11] * other[15];
    this.temp_8be2vx$[12] = this.matrix_8be2vx$[12] * other[0] + this.matrix_8be2vx$[13] * other[4] + this.matrix_8be2vx$[14] * other[8] + this.matrix_8be2vx$[15] * other[12];
    this.temp_8be2vx$[13] = this.matrix_8be2vx$[12] * other[1] + this.matrix_8be2vx$[13] * other[5] + this.matrix_8be2vx$[14] * other[9] + this.matrix_8be2vx$[15] * other[13];
    this.temp_8be2vx$[14] = this.matrix_8be2vx$[12] * other[2] + this.matrix_8be2vx$[13] * other[6] + this.matrix_8be2vx$[14] * other[10] + this.matrix_8be2vx$[15] * other[14];
    this.temp_8be2vx$[15] = this.matrix_8be2vx$[12] * other[3] + this.matrix_8be2vx$[13] * other[7] + this.matrix_8be2vx$[14] * other[11] + this.matrix_8be2vx$[15] * other[15];
    this.matrix_8be2vx$[0] = this.temp_8be2vx$[0];
    this.matrix_8be2vx$[1] = this.temp_8be2vx$[1];
    this.matrix_8be2vx$[2] = this.temp_8be2vx$[2];
    this.matrix_8be2vx$[3] = this.temp_8be2vx$[3];
    this.matrix_8be2vx$[4] = this.temp_8be2vx$[4];
    this.matrix_8be2vx$[5] = this.temp_8be2vx$[5];
    this.matrix_8be2vx$[6] = this.temp_8be2vx$[6];
    this.matrix_8be2vx$[7] = this.temp_8be2vx$[7];
    this.matrix_8be2vx$[8] = this.temp_8be2vx$[8];
    this.matrix_8be2vx$[9] = this.temp_8be2vx$[9];
    this.matrix_8be2vx$[10] = this.temp_8be2vx$[10];
    this.matrix_8be2vx$[11] = this.temp_8be2vx$[11];
    this.matrix_8be2vx$[12] = this.temp_8be2vx$[12];
    this.matrix_8be2vx$[13] = this.temp_8be2vx$[13];
    this.matrix_8be2vx$[14] = this.temp_8be2vx$[14];
    this.matrix_8be2vx$[15] = this.temp_8be2vx$[15];
  };
  Matrix4.prototype.translate_y2kzbl$ = function (x, y, z) {
    this.translateMatrix_0[12] = x;
    this.translateMatrix_0[13] = y;
    this.translateMatrix_0[14] = z;
    this.mul_0(this.translateMatrix_0);
  };
  Matrix4.prototype.scale_y2kzbl$ = function (x, y, z) {
    this.scaleMatrix_0[0] = x;
    this.scaleMatrix_0[5] = y;
    this.scaleMatrix_0[10] = z;
    this.mul_0(this.scaleMatrix_0);
  };
  Matrix4.prototype.rotateX_mx4ult$ = function (angle) {
    this.rotateXMatrix_0[5] = Math.cos(angle);
    this.rotateXMatrix_0[6] = -Math.sin(angle);
    this.rotateXMatrix_0[9] = Math.sin(angle);
    this.rotateXMatrix_0[10] = Math.cos(angle);
    this.mul_0(this.rotateXMatrix_0);
  };
  Matrix4.prototype.rotateY_mx4ult$ = function (angle) {
    this.rotateYMatrix_0[0] = Math.cos(angle);
    this.rotateYMatrix_0[2] = Math.sin(angle);
    this.rotateYMatrix_0[8] = -Math.sin(angle);
    this.rotateYMatrix_0[10] = Math.cos(angle);
    this.mul_0(this.rotateYMatrix_0);
  };
  Matrix4.prototype.rotateZ_mx4ult$ = function (angle) {
    this.rotateZMatrix_0[0] = Math.cos(angle);
    this.rotateZMatrix_0[1] = Math.sin(angle);
    this.rotateZMatrix_0[4] = -Math.sin(angle);
    this.rotateZMatrix_0[5] = Math.cos(angle);
    this.mul_0(this.rotateZMatrix_0);
  };
  Matrix4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix4',
    interfaces: []
  };
  function DrawMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DrawMode_initFields() {
    DrawMode_initFields = function () {
    };
    DrawMode$LINEAR_instance = new DrawMode('LINEAR', 0);
    DrawMode$NEAREST_instance = new DrawMode('NEAREST', 1);
  }
  var DrawMode$LINEAR_instance;
  function DrawMode$LINEAR_getInstance() {
    DrawMode_initFields();
    return DrawMode$LINEAR_instance;
  }
  var DrawMode$NEAREST_instance;
  function DrawMode$NEAREST_getInstance() {
    DrawMode_initFields();
    return DrawMode$NEAREST_instance;
  }
  DrawMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DrawMode',
    interfaces: [Enum]
  };
  function DrawMode$values() {
    return [DrawMode$LINEAR_getInstance(), DrawMode$NEAREST_getInstance()];
  }
  DrawMode.values = DrawMode$values;
  function DrawMode$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return DrawMode$LINEAR_getInstance();
      case 'NEAREST':
        return DrawMode$NEAREST_getInstance();
      default:throwISE('No enum constant kuden.DrawMode.' + name);
    }
  }
  DrawMode.valueOf_61zpoe$ = DrawMode$valueOf;
  function HTMLElements() {
    var $receiver = createElement(document, 'div', getKClass(HTMLElement));
    $receiver.setAttribute('style', 'position: absolute; left: 0px; top: 0px;');
    this.container = $receiver;
    this.canvas2d = null;
    this.webgl = null;
    this.webGlCanvas_0 = createCanvas(document, 'position: absolute; left: 0px; top: 0px;');
    var tmp$, tmp$_0, tmp$_1;
    ensureNotNull(document.body).appendChild(this.container);
    this.container.appendChild(this.webGlCanvas_0);
    var webglcanvas = (tmp$ = this.webGlCanvas_0.getContext('webgl')) != null ? tmp$ : this.webGlCanvas_0.getContext('experimental-webgl');
    if (webglcanvas != null)
      this.webgl = Kotlin.isType(tmp$_0 = webglcanvas, WebGLRenderingContext) ? tmp$_0 : throwCCE();
    else
      lib.log.fatalError_nez7ok$("Your browser doesn't seem to support webgl!" + toString(webglcanvas));
    var $receiver_0 = createCanvas(document, 'position: absolute; left: 0px; top: 0px; z-index: 10; width: 1000px; height: 500px;');
    this.container.appendChild($receiver_0);
    this.canvas2d = Kotlin.isType(tmp$_1 = $receiver_0.getContext('2d'), CanvasRenderingContext2D) ? tmp$_1 : throwCCE();
  }
  HTMLElements.prototype.resize = function () {
    if (this.webGlCanvas_0.width !== window.innerWidth || this.webGlCanvas_0.height !== window.innerHeight) {
      this.webGlCanvas_0.width = window.innerWidth;
      this.webGlCanvas_0.height = window.innerHeight;
      this.webgl.viewport(0, 0, this.webGlCanvas_0.width, this.webGlCanvas_0.height);
    }
  };
  HTMLElements.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HTMLElements',
    interfaces: []
  };
  function InputProcessor() {
  }
  InputProcessor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InputProcessor',
    interfaces: []
  };
  function EmptyInputProcessor() {
  }
  EmptyInputProcessor.prototype.pointerClick_nhq4am$ = function (pointer, x, y) {
  };
  EmptyInputProcessor.prototype.keyDown_za3lpa$ = function (keyCode) {
  };
  EmptyInputProcessor.prototype.keyPressed_za3lpa$ = function (charCode) {
  };
  EmptyInputProcessor.prototype.keyUp_za3lpa$ = function (keyCode) {
  };
  EmptyInputProcessor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyInputProcessor',
    interfaces: [InputProcessor]
  };
  function RGBA(r, g, b, a) {
    if (a === void 0)
      a = 1.0;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  RGBA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBA',
    interfaces: []
  };
  RGBA.prototype.component1 = function () {
    return this.r;
  };
  RGBA.prototype.component2 = function () {
    return this.g;
  };
  RGBA.prototype.component3 = function () {
    return this.b;
  };
  RGBA.prototype.component4 = function () {
    return this.a;
  };
  RGBA.prototype.copy_7b5o5w$ = function (r, g, b, a) {
    return new RGBA(r === void 0 ? this.r : r, g === void 0 ? this.g : g, b === void 0 ? this.b : b, a === void 0 ? this.a : a);
  };
  RGBA.prototype.toString = function () {
    return 'RGBA(r=' + Kotlin.toString(this.r) + (', g=' + Kotlin.toString(this.g)) + (', b=' + Kotlin.toString(this.b)) + (', a=' + Kotlin.toString(this.a)) + ')';
  };
  RGBA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.g) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  RGBA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.g, other.g) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.a, other.a)))));
  };
  function Game(sizeType, clearColor) {
    if (clearColor === void 0)
      clearColor = null;
    this.clearColor = clearColor;
    this.html_725dha$_kcuokc$_0 = lazy(Game$html$lambda);
    this.view = new Game$View(sizeType);
    this.textures = new Game$Textures(this);
    this.start_ayksbt$_0 = (new Date()).getTime();
    this.currentTime_716zbv$_0 = this.start_ayksbt$_0;
    this.currentDelta_cklouu$_0 = 0.0;
    this.pause_99clzp$_0 = false;
    this.fps_vunx1a$_0 = 0;
    this.fpsCount_cohu8z$_0 = 0;
    this.fpsCountTime_6i2t7u$_0 = 0.0;
    this.focus_4qa2er$_0 = true;
    this.keys = new Game$Keys(this, this);
    window.onfocus = Game_init$lambda(this);
    window.onblur = Game_init$lambda_0(this);
    window.onresize = Game_init$lambda_1(this);
    window.onload = Game_init$lambda_2(this);
    this.loadResources();
    window.requestAnimationFrame(getCallableRef('gameLoop', function ($receiver, наверноеDeltaTime) {
      return $receiver.gameLoop_ej9m2z$_0(наверноеDeltaTime), Unit;
    }.bind(null, this)));
    this.imgCache_fc2h0q$_0 = HashMap_init();
    this.imgLoading_fw434$_0 = HashSet_init();
    this.genCache_ib6rnb$_0 = HashMap_init();
  }
  Object.defineProperty(Game.prototype, 'html_725dha$_0', {
    get: function () {
      return this.html_725dha$_kcuokc$_0.value;
    }
  });
  Object.defineProperty(Game.prototype, 'gl', {
    get: function () {
      return this.html_725dha$_0.webgl;
    }
  });
  Game.prototype.resize_y549g5$_0 = function () {
    this.view.updateView();
    this.gl.canvas.width = numberToInt(this.view.gameWidth);
    this.gl.canvas.height = numberToInt(this.view.gameHeight);
    this.html_725dha$_0.canvas2d.canvas.width = numberToInt(this.view.gameWidth);
    this.html_725dha$_0.canvas2d.canvas.height = numberToInt(this.view.gameHeight);
    this.gl.viewport(0, 0, numberToInt(this.view.gameWidth), numberToInt(this.view.gameHeight));
    this.gl.canvas.setAttribute('style', 'position: absolute; left: ' + this.view.borderLeft + 'px; top: ' + this.view.borderTop + 'px; z-index: 5; width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;');
    this.html_725dha$_0.canvas2d.canvas.setAttribute('style', 'position: absolute; left: ' + this.view.borderLeft + 'px; top: ' + this.view.borderTop + 'px; z-index: 10; width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;');
  };
  Game.prototype.gameLoop_ej9m2z$_0 = function (наверноеDeltaTime) {
    var $this = lib;
    saveInvoke_klfg04$break: do {
      try {
        if (false)
          this.resize_y549g5$_0();
        if (!this.pause_99clzp$_0) {
          this.html_725dha$_0.canvas2d.clearRect(0.0, 0.0, this.view.gameWidth, this.view.gameHeight);
          if (this.clearColor != null) {
            this.gl.clearColor(this.clearColor.r, this.clearColor.g, this.clearColor.b, this.clearColor.a);
            this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
          }
          this.gl.enable(WebGLRenderingContext.BLEND);
          this.gl.blendFunc(WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
          var time = (new Date()).getTime();
          this.currentDelta_cklouu$_0 = (time - this.currentTime_716zbv$_0) / 1000.0;
          this.currentTime_716zbv$_0 = time;
          var timeInSeconds = (this.currentTime_716zbv$_0 - this.start_ayksbt$_0) / 1000.0;
          this.fpsCountTime_6i2t7u$_0 += this.currentDelta_cklouu$_0;
          this.fpsCount_cohu8z$_0 = this.fpsCount_cohu8z$_0 + 1 | 0;
          while (this.fpsCountTime_6i2t7u$_0 > 1.0) {
            this.fps_vunx1a$_0 = this.fpsCount_cohu8z$_0;
            this.fpsCountTime_6i2t7u$_0 -= 1.0;
            this.fpsCount_cohu8z$_0 = 0;
          }
          if (this.focus_4qa2er$_0)
            this.update_dleff0$(timeInSeconds, this.currentDelta_cklouu$_0);
          this.render();
        }
        window.requestAnimationFrame(getCallableRef('gameLoop', function ($receiver, наверноеDeltaTime) {
          return $receiver.gameLoop_ej9m2z$_0(наверноеDeltaTime), Unit;
        }.bind(null, this)));
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          $this.log.error_nez7ok$('save invoke fail', e);
          null;
          break saveInvoke_klfg04$break;
        }
         else
          throw e;
      }
    }
     while (false);
  };
  Game.prototype.drawText_k35s1u$ = function (x, y, message, font, fillStyle) {
    if (font === void 0)
      font = 'bold 24pt Arial';
    if (fillStyle === void 0)
      fillStyle = 'white';
    var yy = y;
    var xx = x;
    if (yy < 0)
      yy += this.view.gameHeight;
    if (xx < 0)
      xx += this.view.gameWidth;
    yy = this.view.gameHeight - yy;
    this.html_725dha$_0.canvas2d.fillStyle = fillStyle;
    this.html_725dha$_0.canvas2d.font = font;
    this.html_725dha$_0.canvas2d.fillText(message, x, yy);
  };
  function Game$Sprite() {
  }
  Game$Sprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sprite',
    interfaces: []
  };
  function Game$ImgSprite($outer, imgTex) {
    this.$outer = $outer;
    Game$Sprite.call(this);
    this.imgTex_0 = imgTex;
  }
  function Game$ImgSprite$get_Game$ImgSprite$texture$lambda$lambda(this$Game, this$ImgSprite) {
    return function (it) {
      var $receiver = this$Game.imgCache_fc2h0q$_0;
      var key = this$ImgSprite.imgTex_0;
      $receiver.put_xwzc9p$(key, it);
      return Unit;
    };
  }
  Object.defineProperty(Game$ImgSprite.prototype, 'texture', {
    get: function () {
      var $receiver = this.$outer.imgCache_fc2h0q$_0.get_11rb$(this.imgTex_0);
      this.$outer;
      var this$Game = this.$outer;
      if ($receiver == null) {
        if (!this$Game.imgLoading_fw434$_0.contains_11rb$(this.imgTex_0)) {
          this$Game.imgLoading_fw434$_0.add_11rb$(this.imgTex_0);
          this$Game.textures.get_b0sixs$(this.imgTex_0, Game$ImgSprite$get_Game$ImgSprite$texture$lambda$lambda(this$Game, this));
        }
      }
      return $receiver;
    }
  });
  Game$ImgSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImgSprite',
    interfaces: [Game$Sprite]
  };
  function Game$GenSprite($outer, genTex) {
    this.$outer = $outer;
    Game$Sprite.call(this);
    this.genTex_0 = genTex;
  }
  Object.defineProperty(Game$GenSprite.prototype, 'texture', {
    get: function () {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this.$outer.genCache_ib6rnb$_0.get_11rb$(this.genTex_0)) != null)
        tmp$_0 = tmp$;
      else {
        var $receiver = this.$outer.textures.get_kw5fg4$(this.genTex_0);
        this.$outer;
        var $receiver_0 = this.$outer.genCache_ib6rnb$_0;
        var key = this.genTex_0;
        $receiver_0.put_xwzc9p$(key, $receiver);
        tmp$_0 = $receiver;
      }
      return tmp$_0;
    }
  });
  Game$GenSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GenSprite',
    interfaces: [Game$Sprite]
  };
  function Game$SpriteBatch($outer) {
    this.$outer = $outer;
  }
  Game$SpriteBatch.prototype.draw_p8tr0q$ = function (sprite, x, y, scale, rotation) {
    if (scale === void 0)
      scale = 1.0;
    if (rotation === void 0)
      rotation = 0.0;
    var tmp$;
    return (tmp$ = sprite.texture) != null ? (tmp$.queueDraw_7b5o5w$(x, y, scale, rotation), Unit) : null;
  };
  Game$SpriteBatch.prototype.render = function () {
    this.$outer.textures.render();
  };
  Game$SpriteBatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteBatch',
    interfaces: []
  };
  function Game$View(sizeType, drawMode) {
    if (drawMode === void 0)
      drawMode = DrawMode$LINEAR_getInstance();
    this.sizeType_0 = sizeType;
    this.drawMode = drawMode;
    this.proectionMatrix = new Matrix4();
    this.updateView();
  }
  Object.defineProperty(Game$View.prototype, 'gameWidth', {
    get: function () {
      return this.sizeType_0.getWidth_mx4ult$(window.innerWidth / window.innerHeight);
    }
  });
  Object.defineProperty(Game$View.prototype, 'gameHeight', {
    get: function () {
      return this.sizeType_0.getHeight_mx4ult$(window.innerWidth / window.innerHeight);
    }
  });
  Game$View.prototype.requestFullscreen = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    (tmp$ = document.body) != null ? callApply(tmp$, 'requestFullscreen', []) : null;
    (tmp$_0 = document.body) != null ? callApply(tmp$_0, 'webkitRequestFullscreen', []) : null;
    (tmp$_1 = document.body) != null ? callApply(tmp$_1, 'mozRequestFullScreen', []) : null;
    (tmp$_2 = document.body) != null ? callApply(tmp$_2, 'msRequestFullscreen', []) : null;
  };
  Game$View.prototype.exitFullscreen = function () {
    callApply(document, 'exitFullscreen', []);
    callApply(document, 'mozCancelFullScreen', []);
    callApply(document, 'webkitExitFullscreen', []);
  };
  Game$View.prototype.switchFullscreen = function () {
    this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen();
  };
  Game$View.prototype.isFullscreen = function () {
    return !equals(undefined, document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
  };
  Game$View.prototype.updateView = function () {
    this.proectionMatrix.setOrthographicProjection_w8lrqs$(0.0, this.gameWidth, 0.0, this.gameHeight, -0.1, -100.0);
  };
  Object.defineProperty(Game$View.prototype, 'windowWidth', {
    get: function () {
      return min_1(window.innerWidth, window.innerHeight * this.gameWidth / this.gameHeight);
    }
  });
  Object.defineProperty(Game$View.prototype, 'windowHeight', {
    get: function () {
      return min_1(window.innerHeight, window.innerWidth * this.gameHeight / this.gameWidth);
    }
  });
  Object.defineProperty(Game$View.prototype, 'borderLeft', {
    get: function () {
      return (window.innerWidth - this.windowWidth) / 2;
    }
  });
  Object.defineProperty(Game$View.prototype, 'borderTop', {
    get: function () {
      return (window.innerHeight - this.windowHeight) / 2;
    }
  });
  Game$View.prototype.screenToGameCoordX_mx4ult$ = function (screenX) {
    return (screenX - this.borderLeft) * this.gameWidth / this.windowWidth;
  };
  Game$View.prototype.screenToGameCoordY_mx4ult$ = function (screenY) {
    return this.gameHeight - (screenY - this.borderTop) * this.gameHeight / this.windowHeight;
  };
  Game$View.prototype.gameToScreenCoordX_mx4ult$ = function (gameX) {
    return gameX / this.gameWidth * this.windowWidth + this.borderLeft;
  };
  Game$View.prototype.gameToScreenCoordY_mx4ult$ = function (gameY) {
    return this.gameHeight - gameY / this.gameHeight * this.windowHeight + this.borderTop;
  };
  Game$View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: []
  };
  function Game$Textures($outer) {
    this.$outer = $outer;
    this.textures_0 = ArrayList_init();
    this.shaderProgram_0 = new ShaderProgram(this.$outer.gl, DType$TRIANGLE_getInstance(), vertxSrc, fragmSrc, [new VertextAttributeInfo('a_position', 2), new VertextAttributeInfo('a_boundingBox', 2), new VertextAttributeInfo('a_texCoord', 2), new VertextAttributeInfo('a_scale', 1), new VertextAttributeInfo('a_rotation', 1)], Game$Textures$shaderProgram$lambda);
  }
  function Game$Textures$load$lambda$lambda(closure$callback, this$Game, closure$img, this$Textures) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = this$Game.gl.createTexture()) != null ? tmp$ : lib.log.fatalError_nez7ok$("Couldn't create webgl texture!");
      closure$callback(this$Textures.temp1_1_0(tmp$_0, closure$img));
      return Unit;
    };
  }
  Game$Textures.prototype.load_0 = function (filename, callback) {
    var $receiver = createElement(document, 'img', getKClass(HTMLImageElement));
    this.$outer;
    $receiver.onload = Game$Textures$load$lambda$lambda(callback, this.$outer, $receiver, this);
    $receiver.src = filename;
  };
  Game$Textures.prototype.create_38alav$ = function (image) {
    var tmp$;
    return this.temp1_1_0((tmp$ = this.$outer.gl.createTexture()) != null ? tmp$ : lib.log.fatalError_nez7ok$("Couldn't create webgl texture!"), image);
  };
  Game$Textures.prototype.temp0_0 = function (texture) {
    this.$outer.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
    this.$outer.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);
  };
  Game$Textures.prototype.temp1_1_0 = function (texture, image) {
    this.$outer;
    var this$Game = this.$outer;
    this.temp0_0(texture);
    this$Game.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, image);
    return this.temp2_0(texture, image.width, image.height);
  };
  Game$Textures.prototype.temp1_2_0 = function (texture, width, height, imageBuf) {
    this.temp0_0(texture);
    this.$outer.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, width, height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, imageBuf);
    return this.temp2_0(texture, width, height);
  };
  Game$Textures.prototype.temp2_0 = function (webGlTexture, width, height) {
    var param = this.$outer.view.drawMode === DrawMode$NEAREST_getInstance() ? WebGLRenderingContext.NEAREST : WebGLRenderingContext.LINEAR;
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, param);
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, param);
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
    this.$outer.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
    var $receiver = new Game$Texture(this.$outer, webGlTexture, this.shaderProgram_0, width, height);
    this.textures_0.add_11rb$($receiver);
    return $receiver;
  };
  Game$Textures.prototype.create_0 = function (width, height, imageBuf) {
    var tmp$;
    return this.temp1_2_0((tmp$ = this.$outer.gl.createTexture()) != null ? tmp$ : lib.log.fatalError_nez7ok$("Couldn't create webgl texture!"), width, height, imageBuf);
  };
  Game$Textures.prototype.get_b0sixs$ = function (imgTex, f) {
    this.load_0(imgTex.url, f);
  };
  Game$Textures.prototype.get_kw5fg4$ = function (genTex) {
    return this.create_0(genTex.width, genTex.height, genTex.f(genTex.t));
  };
  Game$Textures.prototype.render = function () {
    var tmp$;
    tmp$ = this.textures_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.render();
    }
  };
  Game$Textures.prototype.dispose = function () {
    var $receiver = this.textures_0;
    this.$outer;
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.$outer.gl.deleteTexture(element.glTexture);
    }
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  Game$Textures.prototype.clear = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  function Game$Textures$shaderProgram$lambda(it) {
    it.program.setUniform1i_bm4lxs$('u_sampler', 0);
    it.program.setUniformMatrix4fv_pphpxd$('u_projectionView', it.data.vMatrix.toFloat32Arr());
    it.program.setUniform1i_bm4lxs$('u_test_array_size', 5);
    it.program.setUniform1fv_i4grub$('u_arr[0]', [0.1, 0.1]);
    return Unit;
  }
  Game$Textures.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Textures',
    interfaces: []
  };
  function Game$ImgTexData(url) {
    this.url = url;
  }
  Game$ImgTexData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImgTexData',
    interfaces: []
  };
  Game$ImgTexData.prototype.component1 = function () {
    return this.url;
  };
  Game$ImgTexData.prototype.copy_61zpoe$ = function (url) {
    return new Game$ImgTexData(url === void 0 ? this.url : url);
  };
  Game$ImgTexData.prototype.toString = function () {
    return 'ImgTexData(url=' + Kotlin.toString(this.url) + ')';
  };
  Game$ImgTexData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Game$ImgTexData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.url, other.url))));
  };
  function Game$GenTexData(width, height, t, f) {
    this.width = width;
    this.height = height;
    this.t = t;
    this.f = f;
  }
  Game$GenTexData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GenTexData',
    interfaces: []
  };
  Game$GenTexData.prototype.component1 = function () {
    return this.width;
  };
  Game$GenTexData.prototype.component2 = function () {
    return this.height;
  };
  Game$GenTexData.prototype.component3 = function () {
    return this.t;
  };
  Game$GenTexData.prototype.component4 = function () {
    return this.f;
  };
  Game$GenTexData.prototype.copy_qeqvzt$ = function (width, height, t, f) {
    return new Game$GenTexData(width === void 0 ? this.width : width, height === void 0 ? this.height : height, t === void 0 ? this.t : t, f === void 0 ? this.f : f);
  };
  Game$GenTexData.prototype.toString = function () {
    return 'GenTexData(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + (', t=' + Kotlin.toString(this.t)) + (', f=' + Kotlin.toString(this.f)) + ')';
  };
  Game$GenTexData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.t) | 0;
    result = result * 31 + Kotlin.hashCode(this.f) | 0;
    return result;
  };
  Game$GenTexData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.t, other.t) && Kotlin.equals(this.f, other.f)))));
  };
  function Game$Texture($outer, glTexture, shaderProgram, width, height) {
    this.$outer = $outer;
    this.glTexture = glTexture;
    this.width = width;
    this.height = height;
    this.shaderProgramMesh = new ShaderProgram$ShaderProgramMesh(shaderProgram);
    this.left = (-this.width | 0) / 2.0;
    this.right = this.width / 2.0;
    this.bottom = (-this.height | 0) / 2.0;
    this.top = this.height / 2.0;
  }
  Game$Texture.prototype.queueDraw_7b5o5w$ = function (x, y, scale, rotation) {
    if (scale === void 0)
      scale = 1.0;
    if (rotation === void 0)
      rotation = 0.0;
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.left, this.bottom, 0.0, 0.0, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.left, this.top, 0.0, 1.0, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.right, this.top, 1.0, 1.0, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.right, this.top, 1.0, 1.0, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.right, this.bottom, 1.0, 0.0, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.left, this.bottom, 0.0, 0.0, scale, rotation]));
    if (this.shaderProgramMesh.remaining() < 36)
      this.render();
  };
  Game$Texture.prototype.queueTileDraw_nkj9yk$ = function (x, y, tcLeft, tcTop, tcRight, tcBottom, scale, rotation) {
    if (scale === void 0)
      scale = 1.0;
    if (rotation === void 0)
      rotation = 0.0;
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.left, this.bottom, tcLeft, tcBottom, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.left, this.top, tcLeft, tcTop, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.right, this.top, tcRight, tcTop, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.right, this.top, tcRight, tcTop, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.right, this.bottom, tcRight, tcBottom, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, this.left, this.bottom, tcLeft, tcBottom, scale, rotation]));
    if (this.shaderProgramMesh.remaining() < 36)
      this.render();
  };
  Game$Texture.prototype.queueTileDraw_6xtfaa$ = function (x, y, horCount, verCount, frame, scale, rotation) {
    if (scale === void 0)
      scale = 1.0;
    if (rotation === void 0)
      rotation = 0.0;
    var tcw = 1.0 / horCount;
    var tch = 1.0 / verCount;
    var tcx = frame % horCount * tcw;
    var tcy = 1.0 - tch * frame / horCount;
    var left = (-(this.width / horCount | 0) | 0) / 2.0;
    var right = (this.width / horCount | 0) / 2.0;
    var bottom = (-(this.height / verCount | 0) | 0) / 2.0;
    var top = (this.height / verCount | 0) / 2.0;
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, left, bottom, tcx, tcy - tch, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, left, top, tcx, tcy, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, right, top, tcx + tcw, tcy, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, right, top, tcx + tcw, tcy, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, right, bottom, tcx + tcw, tcy - tch, scale, rotation]));
    this.shaderProgramMesh.queue_8cqhcw$(new Float32Array([x, y, left, bottom, tcx, tcy - tch, scale, rotation]));
    if (this.shaderProgramMesh.remaining() < 36)
      this.render();
  };
  Game$Texture.prototype.render = function () {
    this.$outer.gl.activeTexture(WebGLRenderingContext.TEXTURE0);
    this.$outer.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.glTexture);
    this.shaderProgramMesh.render_12i0$(new TextureData(this.$outer.view.proectionMatrix, this.glTexture));
  };
  Game$Texture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Texture',
    interfaces: []
  };
  function Game$Keys($outer, inputProcesser) {
    this.$outer = $outer;
    this.inputProcesser = inputProcesser;
    this.keys_0 = HashMap_init();
    var tmp$;
    var body = (tmp$ = document.body) != null ? tmp$ : lib.log.fatalError_nez7ok$("Can't register key events, document.body is null!?");
    body.onkeydown = getCallableRef('keyDown', function ($receiver, key) {
      return $receiver.keyDown_0(key), Unit;
    }.bind(null, this));
    body.onkeyup = getCallableRef('keyUp', function ($receiver, key) {
      return $receiver.keyUp_0(key), Unit;
    }.bind(null, this));
    body.onkeypress = getCallableRef('keyPress', function ($receiver, key) {
      return $receiver.keyPress_0(key), Unit;
    }.bind(null, this));
    body.onclick = getCallableRef('mouseClick', function ($receiver, event) {
      return $receiver.mouseClick_0(event), Unit;
    }.bind(null, this));
    body.onmousedown = getCallableRef('mouseMove', function ($receiver, event) {
      return $receiver.mouseMove_0(event), Unit;
    }.bind(null, this));
    body.onmouseup = getCallableRef('mouseMove', function ($receiver, event) {
      return $receiver.mouseMove_0(event), Unit;
    }.bind(null, this));
    body.onmousemove = getCallableRef('mouseMove', function ($receiver, event) {
      return $receiver.mouseMove_0(event), Unit;
    }.bind(null, this));
  }
  Game$Keys.prototype.keyDown_0 = function (key) {
    if (Kotlin.isType(key, KeyboardEvent)) {
      this.keys_0.put_xwzc9p$(key.keyCode, (new Date()).getTime());
      this.inputProcesser.keyDown_za3lpa$(key.keyCode);
    }
  };
  Game$Keys.prototype.keyUp_0 = function (key) {
    if (Kotlin.isType(key, KeyboardEvent)) {
      this.inputProcesser.keyUp_za3lpa$(key.keyCode);
      this.keys_0.remove_11rb$(key.keyCode);
    }
  };
  Game$Keys.prototype.keyPress_0 = function (key) {
    if (Kotlin.isType(key, KeyboardEvent)) {
      this.inputProcesser.keyPressed_za3lpa$(key.charCode);
    }
  };
  Game$Keys.prototype.mouseClick_0 = function (event) {
    if (Kotlin.isType(event, MouseEvent)) {
      var vx = this.$outer.view.screenToGameCoordX_mx4ult$(getX(event, this.$outer.html_725dha$_0.container));
      var vy = this.$outer.view.screenToGameCoordY_mx4ult$(getY(event, this.$outer.html_725dha$_0.container));
      this.inputProcesser.pointerClick_nhq4am$(event.button, vx, vy);
    }
  };
  Game$Keys.prototype.mouseMove_0 = function (event) {
    if (Kotlin.isType(event, MouseEvent)) {
      var vx = this.$outer.view.screenToGameCoordX_mx4ult$(getX(event, this.$outer.html_725dha$_0.container));
      var vy = this.$outer.view.screenToGameCoordY_mx4ult$(getY(event, this.$outer.html_725dha$_0.container));
    }
  };
  Game$Keys.prototype.wasPressed_5wr77w$ = function (keyCode, delta) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.keys_0.get_11rb$(keyCode)) != null ? tmp$ > (new Date()).getTime() - delta : null) != null ? tmp$_0 : false;
  };
  Game$Keys.prototype.isDown_za3lpa$ = function (keyCode) {
    return this.keys_0.containsKey_11rb$(keyCode);
  };
  Game$Keys.prototype.isDown_mo8z7l$ = function (keyCode) {
    return this.keys_0.containsKey_11rb$(keyCode.keyCode);
  };
  Game$Keys.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Keys',
    interfaces: []
  };
  function Game$html$lambda() {
    return new HTMLElements();
  }
  function Game_init$lambda(this$Game) {
    return function (it) {
      this$Game.focus_4qa2er$_0 = true;
      return '';
    };
  }
  function Game_init$lambda_0(this$Game) {
    return function (it) {
      this$Game.focus_4qa2er$_0 = false;
      return '';
    };
  }
  function Game_init$lambda_1(this$Game) {
    return function (it) {
      this$Game.resize_y549g5$_0();
      return Unit;
    };
  }
  function Game_init$lambda_2(this$Game) {
    return function (it) {
      this$Game.resize_y549g5$_0();
      return Unit;
    };
  }
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: [InputProcessor]
  };
  function SizeType() {
  }
  function SizeType$FixedWidth(width, minHeight, maxHeight) {
    SizeType.call(this);
    this.width = width;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
  }
  SizeType$FixedWidth.prototype.getWidth_mx4ult$ = function (aspectRation) {
    return this.width;
  };
  SizeType$FixedWidth.prototype.getHeight_mx4ult$ = function (aspectRation) {
    return min_0(max_0(this.width / aspectRation, this.minHeight), this.maxHeight);
  };
  SizeType$FixedWidth.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FixedWidth',
    interfaces: [SizeType]
  };
  function SizeType$FixedHeight(height, minWidth, maxWidth) {
    SizeType.call(this);
    this.height = height;
    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
  }
  SizeType$FixedHeight.prototype.getWidth_mx4ult$ = function (aspectRation) {
    return min_0(max_0(this.height * aspectRation, this.minWidth), this.maxWidth);
  };
  SizeType$FixedHeight.prototype.getHeight_mx4ult$ = function (aspectRation) {
    return this.height;
  };
  SizeType$FixedHeight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FixedHeight',
    interfaces: [SizeType]
  };
  SizeType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SizeType',
    interfaces: []
  };
  function TextureData(vMatrix, texture) {
    this.vMatrix = vMatrix;
    this.texture = texture;
  }
  TextureData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureData',
    interfaces: []
  };
  function KeyCode(name, ordinal, keyCode) {
    Enum.call(this);
    this.keyCode = keyCode;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KeyCode_initFields() {
    KeyCode_initFields = function () {
    };
    KeyCode$SHIFT_instance = new KeyCode('SHIFT', 0, 16);
    KeyCode$ESC_instance = new KeyCode('ESC', 1, 27);
    KeyCode$LEFT_instance = new KeyCode('LEFT', 2, 37);
    KeyCode$UP_instance = new KeyCode('UP', 3, 38);
    KeyCode$DOWN_instance = new KeyCode('DOWN', 4, 40);
    KeyCode$RIGHT_instance = new KeyCode('RIGHT', 5, 39);
    KeyCode$SPACE_instance = new KeyCode('SPACE', 6, 32);
    KeyCode$MINUS_instance = new KeyCode('MINUS', 7, 109);
    KeyCode$PLUS_instance = new KeyCode('PLUS', 8, 107);
  }
  var KeyCode$SHIFT_instance;
  function KeyCode$SHIFT_getInstance() {
    KeyCode_initFields();
    return KeyCode$SHIFT_instance;
  }
  var KeyCode$ESC_instance;
  function KeyCode$ESC_getInstance() {
    KeyCode_initFields();
    return KeyCode$ESC_instance;
  }
  var KeyCode$LEFT_instance;
  function KeyCode$LEFT_getInstance() {
    KeyCode_initFields();
    return KeyCode$LEFT_instance;
  }
  var KeyCode$UP_instance;
  function KeyCode$UP_getInstance() {
    KeyCode_initFields();
    return KeyCode$UP_instance;
  }
  var KeyCode$DOWN_instance;
  function KeyCode$DOWN_getInstance() {
    KeyCode_initFields();
    return KeyCode$DOWN_instance;
  }
  var KeyCode$RIGHT_instance;
  function KeyCode$RIGHT_getInstance() {
    KeyCode_initFields();
    return KeyCode$RIGHT_instance;
  }
  var KeyCode$SPACE_instance;
  function KeyCode$SPACE_getInstance() {
    KeyCode_initFields();
    return KeyCode$SPACE_instance;
  }
  var KeyCode$MINUS_instance;
  function KeyCode$MINUS_getInstance() {
    KeyCode_initFields();
    return KeyCode$MINUS_instance;
  }
  var KeyCode$PLUS_instance;
  function KeyCode$PLUS_getInstance() {
    KeyCode_initFields();
    return KeyCode$PLUS_instance;
  }
  KeyCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyCode',
    interfaces: [Enum]
  };
  function KeyCode$values() {
    return [KeyCode$SHIFT_getInstance(), KeyCode$ESC_getInstance(), KeyCode$LEFT_getInstance(), KeyCode$UP_getInstance(), KeyCode$DOWN_getInstance(), KeyCode$RIGHT_getInstance(), KeyCode$SPACE_getInstance(), KeyCode$MINUS_getInstance(), KeyCode$PLUS_getInstance()];
  }
  KeyCode.values = KeyCode$values;
  function KeyCode$valueOf(name) {
    switch (name) {
      case 'SHIFT':
        return KeyCode$SHIFT_getInstance();
      case 'ESC':
        return KeyCode$ESC_getInstance();
      case 'LEFT':
        return KeyCode$LEFT_getInstance();
      case 'UP':
        return KeyCode$UP_getInstance();
      case 'DOWN':
        return KeyCode$DOWN_getInstance();
      case 'RIGHT':
        return KeyCode$RIGHT_getInstance();
      case 'SPACE':
        return KeyCode$SPACE_getInstance();
      case 'MINUS':
        return KeyCode$MINUS_getInstance();
      case 'PLUS':
        return KeyCode$PLUS_getInstance();
      default:throwISE('No enum constant kuden.KeyCode.' + name);
    }
  }
  KeyCode.valueOf_61zpoe$ = KeyCode$valueOf;
  var vertxSrc;
  var fragmSrc;
  function VertexShader() {
  }
  VertexShader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertexShader',
    interfaces: []
  };
  function FragmentShader() {
  }
  FragmentShader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FragmentShader',
    interfaces: []
  };
  function ShaderPog(vertex, fragment) {
  }
  ShaderPog.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShaderPog',
    interfaces: []
  };
  function compileShader($receiver, source, type) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = $receiver.createShader(type)) != null) {
      $receiver.shaderSource(tmp$, source);
      $receiver.compileShader(tmp$);
      if (equals($receiver.getShaderParameter(tmp$, WebGLRenderingContext.COMPILE_STATUS), false))
        lib.log.fatalError_nez7ok$('Unable to compile shader! ' + source + ' ' + toString($receiver.getShaderInfoLog(tmp$)));
      tmp$_1 = tmp$;
    }
     else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? tmp$_0 : lib.log.fatalError_nez7ok$('Unable to request shader from webgl context!');
  }
  function createWebGLProgram($receiver, vertexSrc, fragmentSrc) {
    return createWebGLProgram_0($receiver, compileShader($receiver, vertexSrc, WebGLRenderingContext.VERTEX_SHADER), compileShader($receiver, fragmentSrc, WebGLRenderingContext.FRAGMENT_SHADER));
  }
  function createWebGLProgram_0($receiver, vertex, fragment) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = $receiver.createProgram()) != null) {
      $receiver.attachShader(tmp$, vertex);
      $receiver.attachShader(tmp$, fragment);
      $receiver.linkProgram(tmp$);
      if (equals($receiver.getProgramParameter(tmp$, WebGLRenderingContext.LINK_STATUS), false))
        lib.log.fatalError_nez7ok$('Unable to compile shader program! ' + toString($receiver.getProgramInfoLog(tmp$)));
      tmp$_1 = tmp$;
    }
     else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? tmp$_0 : lib.log.fatalError_nez7ok$('Unable to request shader program from webgl context!');
  }
  function DType(name, ordinal, glDrawType) {
    Enum.call(this);
    this.glDrawType = glDrawType;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DType_initFields() {
    DType_initFields = function () {
    };
    DType$TRIANGLE_instance = new DType('TRIANGLE', 0, WebGLRenderingContext.TRIANGLES);
  }
  var DType$TRIANGLE_instance;
  function DType$TRIANGLE_getInstance() {
    DType_initFields();
    return DType$TRIANGLE_instance;
  }
  DType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DType',
    interfaces: [Enum]
  };
  function DType$values() {
    return [DType$TRIANGLE_getInstance()];
  }
  DType.values = DType$values;
  function DType$valueOf(name) {
    switch (name) {
      case 'TRIANGLE':
        return DType$TRIANGLE_getInstance();
      default:throwISE('No enum constant kuden.DType.' + name);
    }
  }
  DType.valueOf_61zpoe$ = DType$valueOf;
  function VertextAttributeInfo(locationName, numElements) {
    this.locationName = locationName;
    this.numElements = numElements;
    this.location = 0;
    this.offset = 0;
  }
  VertextAttributeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertextAttributeInfo',
    interfaces: []
  };
  function ShaderProgram(webgl, drawType, vertxSrc, fragmSrc, vainf, setter) {
    this.webgl = webgl;
    this.drawType = drawType;
    this.vainf = vainf;
    this.setter = setter;
    this.shaderProgram = createWebGLProgram(this.webgl, vertxSrc, fragmSrc);
    this.drawLength = 0;
    this.verticesBlockSize = 0;
    var tmp$, tmp$_0;
    this.webgl.useProgram(this.shaderProgram);
    var currentSize = 0;
    tmp$ = this.vainf;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var info = tmp$[tmp$_0];
      info.location = this.webgl.getAttribLocation(this.shaderProgram, info.locationName);
      info.offset = currentSize;
      currentSize = currentSize + info.numElements | 0;
    }
    this.verticesBlockSize = currentSize;
    if (equals(this.drawType, DType$TRIANGLE_getInstance()))
      this.drawLength = this.verticesBlockSize * 3 | 0;
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'NOT USED DRAW TYPE');
    }
  }
  ShaderProgram.prototype.begin_v6ru81$ = function (attribBuffer, userdata) {
    var tmp$, tmp$_0;
    this.webgl.useProgram(this.shaderProgram);
    this.webgl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, attribBuffer);
    tmp$ = this.vainf;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var info = tmp$[tmp$_0];
      this.webgl.enableVertexAttribArray(info.location);
      this.webgl.vertexAttribPointer(info.location, info.numElements, WebGLRenderingContext.FLOAT, false, this.verticesBlockSize * 4 | 0, info.offset * 4 | 0);
    }
    this.setter(new ShaderProgram$SetData(this, userdata));
  };
  ShaderProgram.prototype.end = function () {
    var $receiver = this.vainf;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.webgl.disableVertexAttribArray(element.location);
    }
    this.webgl.useProgram(null);
  };
  ShaderProgram.prototype.getAttribLocation_61zpoe$ = function (location) {
    return this.webgl.getAttribLocation(this.shaderProgram, location);
  };
  ShaderProgram.prototype.getUniformLocation_61zpoe$ = function (location) {
    return this.webgl.getUniformLocation(this.shaderProgram, location);
  };
  ShaderProgram.prototype.setUniform1f_9sobi5$ = function (location, value) {
    this.webgl.uniform1f(this.getUniformLocation_61zpoe$(location), value);
  };
  ShaderProgram.prototype.setUniform1fv_i4grub$ = function (location, arr) {
    this.webgl.uniform1fv(this.getUniformLocation_61zpoe$(location), arr);
  };
  ShaderProgram.prototype.setUniform1f_io5o9c$ = function (location, value) {
    this.setUniform1f_9sobi5$(location, value);
  };
  ShaderProgram.prototype.setUniform2f_9xt0da$ = function (location, v1, v2) {
    this.webgl.uniform2f(this.getUniformLocation_61zpoe$(location), v1, v2);
  };
  ShaderProgram.prototype.setUniform2f_ai6r6m$ = function (location, v1, v2) {
    this.setUniform2f_9xt0da$(location, v1, v2);
  };
  ShaderProgram.prototype.setUniform4f_kjn4ou$ = function (location, v1, v2, v3, v4) {
    this.webgl.uniform4f(this.getUniformLocation_61zpoe$(location), v1, v2, v3, v4);
  };
  ShaderProgram.prototype.setUniform4f_64vbwm$ = function (location, v1, v2, v3, v4) {
    this.setUniform4f_kjn4ou$(location, v1, v2, v3, v4);
  };
  ShaderProgram.prototype.setUniform1i_bm4lxs$ = function (location, value) {
    this.webgl.uniform1i(this.getUniformLocation_61zpoe$(location), value);
  };
  ShaderProgram.prototype.setUniformMatrix4fv_pphpxd$ = function (location, value) {
    this.webgl.uniformMatrix4fv(this.getUniformLocation_61zpoe$(location), false, value);
  };
  ShaderProgram.prototype.log_urmqze$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.webgl.getShaderInfoLog($receiver)) != null ? tmp$ : 'no log';
  };
  ShaderProgram.prototype.log_yfn2oh$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.webgl.getProgramInfoLog($receiver)) != null ? tmp$ : 'no log';
  };
  function ShaderProgram$SetData(program, data) {
    this.program = program;
    this.data = data;
  }
  ShaderProgram$SetData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetData',
    interfaces: []
  };
  ShaderProgram$SetData.prototype.component1 = function () {
    return this.program;
  };
  ShaderProgram$SetData.prototype.component2 = function () {
    return this.data;
  };
  ShaderProgram$SetData.prototype.copy_9va37q$ = function (program, data) {
    return new ShaderProgram$SetData(program === void 0 ? this.program : program, data === void 0 ? this.data : data);
  };
  ShaderProgram$SetData.prototype.toString = function () {
    return 'SetData(program=' + Kotlin.toString(this.program) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  ShaderProgram$SetData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.program) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  ShaderProgram$SetData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.program, other.program) && Kotlin.equals(this.data, other.data)))));
  };
  function ShaderProgram$ShaderProgramMesh($outer) {
    this.$outer = $outer;
    this.verticesBuffer = new Float32Array(20000 - 20000 % this.$outer.drawLength | 0);
    var tmp$;
    this.attribBuffer = (tmp$ = this.$outer.webgl.createBuffer()) != null ? tmp$ : lib.log.fatalError_nez7ok$('Unable to create webgl buffer!');
    this.currentIndex = 0;
  }
  ShaderProgram$ShaderProgramMesh.prototype.queue_8cqhcw$ = function (vertices) {
    this.queueArray_o5v4nz$(toTypedArray(vertices));
  };
  ShaderProgram$ShaderProgramMesh.prototype.remaining = function () {
    return this.verticesBuffer.length - this.currentIndex | 0;
  };
  ShaderProgram$ShaderProgramMesh.prototype.bufferFull = function () {
    return this.currentIndex >= this.verticesBuffer.length;
  };
  ShaderProgram$ShaderProgramMesh.prototype.queueArray_o5v4nz$ = function (vertices) {
    this.verticesBuffer.set(vertices, this.currentIndex);
    this.currentIndex = this.currentIndex + vertices.length | 0;
    if (this.bufferFull()) {
      println('Skipped draw call, to many values!');
      this.currentIndex = 0;
    }
  };
  ShaderProgram$ShaderProgramMesh.prototype.render_12i0$ = function (userdata) {
    if (this.currentIndex > 0) {
      if (this.currentIndex % this.$outer.verticesBlockSize !== 0)
        lib.log.fatalError_nez7ok$('Number of vertices not a multiple of the attribute block size!');
      this.$outer.begin_v6ru81$(this.attribBuffer, userdata);
      this.$outer.webgl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, this.verticesBuffer, WebGLRenderingContext.DYNAMIC_DRAW);
      this.$outer.webgl.drawArrays(this.$outer.drawType.glDrawType, 0, this.currentIndex / this.$outer.verticesBlockSize | 0);
      this.currentIndex = 0;
      this.$outer.end();
    }
  };
  ShaderProgram$ShaderProgramMesh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShaderProgramMesh',
    interfaces: []
  };
  ShaderProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShaderProgram',
    interfaces: []
  };
  function Music() {
    Music_instance = this;
    this.playing_0 = HashSet_init();
  }
  function Music$play$lambda$lambda(closure$looping, this$, this$Music) {
    return function (it) {
      if (closure$looping) {
        this$.currentTime = 0.0;
        return this$.play();
      }
       else {
        this$.remove();
        return this$Music.playing_0.remove_11rb$(this$);
      }
    };
  }
  Music.prototype.play_1truf$ = function (url, volume, looping) {
    if (volume === void 0)
      volume = 0.75;
    if (looping === void 0)
      looping = false;
    var $receiver = createElement(document, 'audio', getKClass(HTMLAudioElement));
    $receiver.src = url;
    $receiver.volume = volume;
    $receiver.play();
    $receiver.onended = Music$play$lambda$lambda(looping, $receiver, this);
    return $receiver;
  };
  Music.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Music',
    interfaces: []
  };
  var Music_instance = null;
  function Music_getInstance() {
    if (Music_instance === null) {
      new Music();
    }
    return Music_instance;
  }
  function Sound(url, defaultVolume, numberOfChannels) {
    if (defaultVolume === void 0)
      defaultVolume = 0.75;
    this.defaultVolume_0 = defaultVolume;
    var array = Array_0(numberOfChannels);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = createElement(document, 'audio', getKClass(HTMLAudioElement));
    }
    this.channels_0 = array;
    this.nextChannel_0 = 0;
    var $receiver = this.channels_0;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var element = $receiver[tmp$_0];
      element.src = url;
      element.pause();
      element.load();
      element.volume = this.defaultVolume_0;
    }
  }
  Sound.prototype.pause = function () {
    var $receiver = this.channels_0;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.pause();
    }
  };
  Sound.prototype.play_14dthe$ = function (volume) {
    if (volume === void 0)
      volume = this.defaultVolume_0;
    var it = this.channels_0[this.nextChannel_0];
    it.volume = volume;
    it.currentTime = 0.0;
    it.play();
    this.nextChannel_0 = (this.nextChannel_0 + 1 | 0) % this.channels_0.length;
  };
  Sound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sound',
    interfaces: []
  };
  function Sounds() {
    Sounds_instance = this;
    this.sounds_0 = HashMap_init();
  }
  Sounds.prototype.load_5myiwc$ = function (name, url, volume, channels) {
    if (volume === void 0)
      volume = 0.75;
    if (channels === void 0)
      channels = 1;
    return this.sounds_0.put_xwzc9p$(name, new Sound(url, volume, channels));
  };
  Sounds.prototype.play_ajzga7$ = function (name, volume) {
    if (volume === void 0)
      volume = null;
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.sounds_0.get_11rb$(name)) != null) {
      tmp$.play_14dthe$();
      if (volume != null)
        tmp$.play_14dthe$(volume);
      else
        tmp$.play_14dthe$();
      tmp$_1 = tmp$;
    }
     else
      tmp$_1 = null;
    tmp$_0 = tmp$_1;
    if (tmp$_0 == null) {
      throw IllegalArgumentException_init("Sound '" + name + "' not found, load it first!");
    }
    return tmp$_0;
  };
  Sounds.prototype.pause_61zpoe$ = function (name) {
    var tmp$;
    if (((tmp$ = this.sounds_0.get_11rb$(name)) != null ? (tmp$.pause(), Unit) : null) == null) {
      throw IllegalArgumentException_init("Sound '" + name + "' not found, load it first!");
    }
  };
  Sounds.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Sounds',
    interfaces: []
  };
  var Sounds_instance = null;
  function Sounds_getInstance() {
    if (Sounds_instance === null) {
      new Sounds();
    }
    return Sounds_instance;
  }
  var FOOD_SCALE;
  var TEXT;
  var FAKE_PING;
  var HIDDEN;
  var SLOW_POKE;
  function ImgData(url) {
    this.url = url;
  }
  ImgData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImgData',
    interfaces: []
  };
  ImgData.prototype.component1 = function () {
    return this.url;
  };
  ImgData.prototype.copy_61zpoe$ = function (url) {
    return new ImgData(url === void 0 ? this.url : url);
  };
  ImgData.prototype.toString = function () {
    return 'ImgData(url=' + Kotlin.toString(this.url) + ')';
  };
  ImgData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  ImgData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.url, other.url))));
  };
  function ImgCache(texture) {
    if (texture === void 0)
      texture = null;
    this.texture = texture;
  }
  ImgCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImgCache',
    interfaces: []
  };
  function RenderData(x, y, gameSize, imgData) {
    this.x = x;
    this.y = y;
    this.gameSize = gameSize;
    this.imgData = imgData;
  }
  RenderData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderData',
    interfaces: []
  };
  RenderData.prototype.component1 = function () {
    return this.x;
  };
  RenderData.prototype.component2 = function () {
    return this.y;
  };
  RenderData.prototype.component3 = function () {
    return this.gameSize;
  };
  RenderData.prototype.component4 = function () {
    return this.imgData;
  };
  RenderData.prototype.copy_7oadzn$ = function (x, y, gameSize, imgData) {
    return new RenderData(x === void 0 ? this.x : x, y === void 0 ? this.y : y, gameSize === void 0 ? this.gameSize : gameSize, imgData === void 0 ? this.imgData : imgData);
  };
  RenderData.prototype.toString = function () {
    return 'RenderData(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', gameSize=' + Kotlin.toString(this.gameSize)) + (', imgData=' + Kotlin.toString(this.imgData)) + ')';
  };
  RenderData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.gameSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.imgData) | 0;
    return result;
  };
  RenderData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.gameSize, other.gameSize) && Kotlin.equals(this.imgData, other.imgData)))));
  };
  function View() {
  }
  View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: []
  };
  function FixedWidth(width, minHeight, maxHeight) {
    View.call(this);
    this.width = width;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
  }
  FixedWidth.prototype.getWidth_mx4ult$ = function (aspectRation) {
    return this.width;
  };
  FixedWidth.prototype.getHeight_mx4ult$ = function (aspectRation) {
    return min_0(max_0(this.width / aspectRation, this.minHeight), this.maxHeight);
  };
  FixedWidth.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FixedWidth',
    interfaces: [View]
  };
  function Attr(locationName, numElements) {
    this.locationName = locationName;
    this.numElements = numElements;
  }
  Attr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attr',
    interfaces: []
  };
  Attr.prototype.component1 = function () {
    return this.locationName;
  };
  Attr.prototype.component2 = function () {
    return this.numElements;
  };
  Attr.prototype.copy_bm4lxs$ = function (locationName, numElements) {
    return new Attr(locationName === void 0 ? this.locationName : locationName, numElements === void 0 ? this.numElements : numElements);
  };
  Attr.prototype.toString = function () {
    return 'Attr(locationName=' + Kotlin.toString(this.locationName) + (', numElements=' + Kotlin.toString(this.numElements)) + ')';
  };
  Attr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.locationName) | 0;
    result = result * 31 + Kotlin.hashCode(this.numElements) | 0;
    return result;
  };
  Attr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.locationName, other.locationName) && Kotlin.equals(this.numElements, other.numElements)))));
  };
  function IterAttr(attr, location, offset) {
    this.attr = attr;
    this.location = location;
    this.offset = offset;
  }
  IterAttr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IterAttr',
    interfaces: []
  };
  IterAttr.prototype.component1 = function () {
    return this.attr;
  };
  IterAttr.prototype.component2 = function () {
    return this.location;
  };
  IterAttr.prototype.component3 = function () {
    return this.offset;
  };
  IterAttr.prototype.copy_tshjbi$ = function (attr, location, offset) {
    return new IterAttr(attr === void 0 ? this.attr : attr, location === void 0 ? this.location : location, offset === void 0 ? this.offset : offset);
  };
  IterAttr.prototype.toString = function () {
    return 'IterAttr(attr=' + Kotlin.toString(this.attr) + (', location=' + Kotlin.toString(this.location)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  IterAttr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.attr) | 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  IterAttr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.attr, other.attr) && Kotlin.equals(this.location, other.location) && Kotlin.equals(this.offset, other.offset)))));
  };
  function MassPower(view) {
    if (view === void 0)
      view = new FixedWidth(1000.0, 1000.0, 1000.0);
    this.view = view;
    this.gameScale_trt3k4$_0 = new SmoothByRenderCalls(MassPower$gameScale$lambda(this));
    this.cameraGamePos_jsgx4n$_0 = new CacheByRenderCalls(new XY(), MassPower$cameraGamePos$lambda(this));
    this.html = new HTMLElements();
    this.textureShader = new MassPower$ShaderFull(this, new MassPower$ShaderVertex(this, MASS_POWER_TEXTURE_VERTEX, listOf([new Attr('a_center_x', 1), new Attr('a_center_y', 1), new Attr('a_angle', 1), new Attr('a_game_radius', 1), new Attr('a_relative_radius', 1)])), MASS_POWER_TEXTURE_FRAG);
    this.foodShader = new MassPower$ShaderFull(this, new MassPower$ShaderVertex(this, MASS_POWER_FOOD_VERTEX, listOf([new Attr('a_center_x', 1), new Attr('a_center_y', 1), new Attr('a_angle', 1), new Attr('a_game_radius', 1), new Attr('a_color', 4)])), MASS_POWER_FOOD_FRAG);
    this.backgroundShader = new MassPower$ShaderFull(this, new MassPower$ShaderVertex(this, shader_mesh_default_vert, listOf_0(new Attr('aVertexPosition', 2))), shader_background_stars_frag);
    this.imgCache_0 = HashMap_init();
    this.mousePos = new XY();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = new Tick(0);
    tmp$_0 = new Welcome(new PlayerId(1), lib.time);
    tmp$_1 = new State(mutableListOf([new Car(new PlayerId(1), GameConst_getInstance().DEFAULT_CAR_SIZE * 3 | 0, new XY(), new XY())]));
    tmp$_2 = new Duration(Kotlin.Long.fromInt(10));
    var $receiver = ArrayList_init();
    for (var i = 2; i <= 15; i++) {
      var pid = new PlayerId(i);
      $receiver.add_11rb$(new AllCommand(new Tick(10 + (i * 1 | 0) | 0), pid, new NewCarCommand(pid)));
    }
    this.fakePingClient = new FakePingClient(new ServerPayload(tmp$, tmp$_0, tmp$_1, $receiver, void 0, tmp$_2));
    if (FAKE_PING) {
      tmp$_3 = this.fakePingClient;
    }
     else {
      tmp$_3 = confs_getInstance().current.pingClient();
    }
    this.model = new ClientModel(tmp$_3, SLOW_POKE);
    this.mouseDown = false;
    window.onfocus;
    window.onblur;
    window.onresize = MassPower_init$lambda(this);
    window.onload = MassPower_init$lambda_0(this);
    window.requestAnimationFrame(MassPower_init$lambda_1(this));
    document.onmousemove = MassPower_init$lambda_2(this);
    document.onclick = MassPower_init$lambda_3(this);
    document.onmousedown = MassPower_init$lambda_4(this);
    document.onmouseup = MassPower_init$lambda_5(this);
    document.onkeypress = MassPower_init$lambda_6;
    this.previousTime = this.time;
    this.fps30 = 30.0;
    this.fps500 = 30.0;
    this.defaultBlend = new MassPower$Blend(MassPower$BlendFactor$SRC_ALPHA_getInstance(), MassPower$BlendFactor$ONE_MINUS_SRC_ALPHA_getInstance());
    this.stripBlend = new MassPower$Blend(MassPower$BlendFactor$SRC_ALPHA_getInstance(), true ? MassPower$BlendFactor$ONE_MINUS_SRC_ALPHA_getInstance() : MassPower$BlendFactor$DST_ALPHA_getInstance());
    this.imgBig = new ImgData('img/smiley.png');
    this.imgRed = new ImgData('img/smiley_small_rect_red.png');
    this.imgGreen = new ImgData('img/smiley_small_rect_green.png');
    this.imgBlue = new ImgData('img/smiley_small_rect_blue.png');
    this.imgYellow = new ImgData('img/smiley_small_rect_yellow.png');
    this.imgViolet = new ImgData('img/smiley_small_rect_violet.png');
    this.imgGray = new ImgData('img/smiley_small_rect_gray.png');
    this.imgNonQuadrat = new ImgData('img/rect_long.png');
    this.colors = listOf([this.imgRed, this.imgGreen, this.imgBlue, this.imgYellow, this.imgViolet]);
    this.backOffset = new MassPower$BackOffset(this);
    this.previousMouseDownHandle = lib.time;
    var $receiver_0 = toList_0(new IntRange(0, 9));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_4;
    tmp$_4 = $receiver_0.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination.add_11rb$(this.angle_vux9f0$(item, 10));
    }
    this.radian10 = toFloatArray(destination);
    this.currentShader = null;
    this.uniforms = LinkedHashMap_init();
  }
  MassPower.prototype.get_gameWidth_kpbpt9$ = function ($receiver) {
    return $receiver.getWidth_mx4ult$(window.innerWidth / window.innerHeight) * this.gameScale;
  };
  MassPower.prototype.get_gameHeight_kpbpt9$ = function ($receiver) {
    return $receiver.getHeight_mx4ult$(window.innerWidth / window.innerHeight) * this.gameScale;
  };
  MassPower.prototype.get_windowWidth_kpbpt9$ = function ($receiver) {
    return min_1(window.innerWidth, window.innerHeight * this.get_gameWidth_kpbpt9$($receiver) / this.get_gameHeight_kpbpt9$($receiver));
  };
  MassPower.prototype.get_windowHeight_kpbpt9$ = function ($receiver) {
    return min_1(window.innerHeight, window.innerWidth * this.get_gameHeight_kpbpt9$($receiver) / this.get_gameWidth_kpbpt9$($receiver));
  };
  MassPower.prototype.get_borderLeft_kpbpt9$ = function ($receiver) {
    return (window.innerWidth - this.get_windowWidth_kpbpt9$($receiver)) / 2;
  };
  MassPower.prototype.get_borderTop_kpbpt9$ = function ($receiver) {
    return (window.innerHeight - this.get_windowHeight_kpbpt9$($receiver)) / 2;
  };
  var MassPower$gameScale_metadata = new PropertyMetadata('gameScale');
  Object.defineProperty(MassPower.prototype, 'gameScale', {
    get: function () {
      return this.gameScale_trt3k4$_0.getValue_lrcp0p$(this, MassPower$gameScale_metadata);
    }
  });
  var MassPower$cameraGamePos_metadata = new PropertyMetadata('cameraGamePos');
  Object.defineProperty(MassPower.prototype, 'cameraGamePos', {
    get: function () {
      return this.cameraGamePos_jsgx4n$_0.getValue_lrcp0p$(this, MassPower$cameraGamePos_metadata);
    }
  });
  Object.defineProperty(MassPower.prototype, 'gl', {
    get: function () {
      return this.html.webgl;
    }
  });
  MassPower.prototype.screenToGame_zgo1bu$ = function ($receiver, screen) {
    return new XY((screen.x - this.get_borderLeft_kpbpt9$($receiver)) * this.get_gameWidth_kpbpt9$($receiver) / this.get_windowWidth_kpbpt9$($receiver) - this.get_gameWidth_kpbpt9$($receiver) / 2 + this.cameraGamePos.x, this.get_gameHeight_kpbpt9$($receiver) / 2 - (screen.y - this.get_borderTop_kpbpt9$($receiver)) * this.get_gameHeight_kpbpt9$($receiver) / this.get_windowHeight_kpbpt9$($receiver) + this.cameraGamePos.y);
  };
  MassPower.prototype.get_xy_apx4ki$ = function ($receiver) {
    return new XY(getX($receiver, this.html.container), getY($receiver, this.html.container));
  };
  function MassPower$GameTexture($outer, glTexture, width, height) {
    this.$outer = $outer;
    this.glTexture = glTexture;
    this.width = width;
    this.height = height;
    this.left = (-this.width | 0) / 2.0;
    this.right = this.width / 2.0;
    this.bottom = (-this.height | 0) / 2.0;
    this.top = this.height / 2.0;
  }
  MassPower$GameTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameTexture',
    interfaces: []
  };
  MassPower.prototype.resize_0 = function () {
    this.gl.canvas.width = numberToInt(this.get_windowWidth_kpbpt9$(this.view));
    this.gl.canvas.height = numberToInt(this.get_windowWidth_kpbpt9$(this.view));
    this.html.canvas2d.canvas.width = numberToInt(this.get_windowWidth_kpbpt9$(this.view));
    this.html.canvas2d.canvas.height = numberToInt(this.get_windowWidth_kpbpt9$(this.view));
    this.gl.viewport(0, 0, numberToInt(this.get_windowWidth_kpbpt9$(this.view)), numberToInt(this.get_windowWidth_kpbpt9$(this.view)));
    this.gl.canvas.setAttribute('style', 'position: absolute; left: ' + this.get_borderLeft_kpbpt9$(this.view) + 'px; top: ' + this.get_borderTop_kpbpt9$(this.view) + 'px; z-index: 5; width: ' + this.get_windowWidth_kpbpt9$(this.view) + 'px; height: ' + this.get_windowHeight_kpbpt9$(this.view) + 'px;');
    this.html.canvas2d.canvas.setAttribute('style', 'position: absolute; left: ' + this.get_borderLeft_kpbpt9$(this.view) + 'px; top: ' + this.get_borderTop_kpbpt9$(this.view) + 'px; z-index: 10; width: ' + this.get_windowWidth_kpbpt9$(this.view) + 'px; height: ' + this.get_windowHeight_kpbpt9$(this.view) + 'px;');
    this.setUniformf_vcwmuq$('resolution', new Float32Array([this.get_windowWidth_kpbpt9$(this.view), this.get_windowHeight_kpbpt9$(this.view)]));
  };
  Object.defineProperty(MassPower.prototype, 'time', {
    get: function () {
      return (new Date()).getTime() / 1000.0;
    }
  });
  MassPower.prototype.get_color_e78gx9$ = function ($receiver) {
    var it = this.colors;
    return it.get_za3lpa$($receiver.id % it.size);
  };
  function MassPower$BackOffset($outer) {
    this.$outer = $outer;
    this.previosCameraPos = null;
    this.previousResult = new XY();
  }
  MassPower$BackOffset.prototype.getValue_lvbgq3$ = function (state) {
    var tmp$;
    var result = {v: this.previousResult};
    if ((tmp$ = this.previosCameraPos) != null) {
      this.$outer;
      var $receiver = this.$outer.cameraGamePos;
      var change = $receiver.copy_lu1900$($receiver.x - tmp$.x, $receiver.y - tmp$.y);
      if (change.x > get_width(state) / 2)
        change.x = change.x - get_width(state);
      else if (change.x < -get_width(state) / 2)
        change.x = change.x + get_width(state);
      if (change.y > get_height(state) / 2)
        change.y = change.y - get_height(state);
      else if (change.y < -get_height(state) / 2)
        change.y = change.y + get_height(state);
      var $receiver_0 = result.v;
      var a = times_3(change, 1.0E-4);
      result.v = $receiver_0.copy_lu1900$($receiver_0.x + a.x, $receiver_0.y + a.y);
    }
    this.previousResult = result.v;
    this.previosCameraPos = this.$outer.cameraGamePos;
    return result.v;
  };
  MassPower$BackOffset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackOffset',
    interfaces: []
  };
  function MassPower$gameLoop$lambda$lambda$lambda(angle) {
    return new Float32Array([0.0, 0.0, 0.0, 0.0]);
  }
  function MassPower$gameLoop$lambda$lambda$lambda$lambda(it) {
    return it.size;
  }
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function MassPower$gameLoop$lambda$lambda$lambda$lambda_0(this$MassPower, closure$img, this$) {
    return function (it) {
      var tmp$;
      var texture = (tmp$ = this$MassPower.gl.createTexture()) != null ? tmp$ : lib.log.fatalError_nez7ok$("Couldn't create webgl texture!");
      this$MassPower.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
      this$MassPower.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);
      this$MassPower.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, closure$img);
      this$MassPower.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.NEAREST);
      this$MassPower.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.NEAREST);
      this$MassPower.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
      this$MassPower.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
      this$MassPower.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
      this$.texture = new MassPower$GameTexture(this$MassPower, texture, closure$img.width, closure$img.height);
      return null;
    };
  }
  function MassPower$gameLoop$lambda$lambda$lambda$lambda_1(angle) {
    return new Float32Array([1.0]);
  }
  function MassPower$gameLoop$lambda$lambda$lambda$lambda_2(angle) {
    return new Float32Array([1.75]);
  }
  var Float32Array_0 = Float32Array;
  var WebGLRenderingContext$Companion = WebGLRenderingContext;
  var MassPower$render$lambda = wrapFunction(function () {
    return function (closure$allFloatArgsCount, this$MassPower) {
      return function () {
        var tmp$, tmp$_0, tmp$_1;
        if (closure$allFloatArgsCount <= 0)
          package$lib.lib.log.error_nez7ok$('allFloatArgsCount<=0');
        tmp$_0 = ensureNotNull((tmp$ = this$MassPower.currentShader) != null ? tmp$.blockSize : null);
        if (closure$allFloatArgsCount % tmp$_0 !== 0) {
          package$lib.lib.log.error_nez7ok$('Number of vertices not a multiple of the attribute block size! allFloatArgsCount: ' + closure$allFloatArgsCount + ',  verticesBlockSize: ' + ensureNotNull((tmp$_1 = this$MassPower.currentShader) != null ? tmp$_1.blockSize : null));
        }
        return Unit;
      };
    };
  });
  MassPower.prototype.gameLoop_0 = function (милисекундСоСтараПлюсБездействие) {
    var $this = lib;
    saveInvoke_klfg04$break: do {
      try {
        var tmp$, tmp$_0, tmp$_1, tmp$_2;
        if (compareTo(lib.time, plus_1(this.previousMouseDownHandle, new Duration(Kotlin.Long.fromInt(300)))) > 0) {
          this.previousMouseDownHandle = lib.time;
          if (this.mouseDown) {
            touch(this.model, this.mousePos);
          }
        }
        onRender();
        this.fps30 = (this.fps30 * 30 + 1.0 / (this.time - this.previousTime)) / (30 + 1 | 0);
        this.fps500 = (this.fps500 * 200 + 1.0 / (this.time - this.previousTime)) / (200 + 1 | 0);
        this.previousTime = this.time;
        if (TEXT) {
          var lines = ArrayList_init();
          if (Kotlin.isType(this.model.ping, FakePingClient)) {
            lines.add_11rb$('\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442');
            lines.add_11rb$('\u041D\u0430\u0432\u0435\u0440\u043D\u043E\u0435 \u043F\u043E\u043F\u0430\u043B \u043F\u043E\u0434 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0443');
            lines.add_11rb$('OFFLINE \u0440\u0435\u0436\u0438\u043C');
          }
           else {
            lines.add_11rb$(this.model.ping.state.toString());
            if (!this.model.ping.state.good) {
              this.model.ping.close();
              this.model = new ClientModel(this.fakePingClient);
            }
          }
          lines.add_11rb$('fps: ' + lib.formatDouble_12fank$(this.fps30, 2));
          if (false) {
            lines.add_11rb$('mouse: ' + this.mousePos);
            lines.add_11rb$('fps30: ' + this.fps30);
            lines.add_11rb$(Gen_getInstance().date());
            lines.add_11rb$('realtimeTick: ' + toString(this.model.realtimeTick));
            lines.add_11rb$('serverTime: ' + toString(get_s(this.model.ping.serverTime)));
            lines.add_11rb$('smartPingDelay: ' + toString(this.model.ping.smartPingDelay));
            lines.add_11rb$('size: ' + toString((tmp$ = this.model.calcDisplayState()) != null ? tmp$.size : null));
          }
          this.html.canvas2d.clearRect(0.0, 0.0, this.get_gameWidth_kpbpt9$(this.view), this.get_gameHeight_kpbpt9$(this.view));
          this.html.canvas2d.fillStyle = 'white';
          this.html.canvas2d.font = 'bold 24pt Arial';
          tmp$_0 = lines.size;
          for (var i = 0; i < tmp$_0; i++)
            this.html.canvas2d.fillText(lines.get_za3lpa$(i), 10.0, 10.0 + (50 * (i + 1 | 0) | 0));
        }
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
        var state = this.model.calcDisplayState();
        if (state != null) {
          if ((tmp$_1 = this.model.myCar) != null) {
            this.setUniformf_vcwmuq$('u_game_camera_x', new Float32Array([tmp$_1.pos.x]));
            this.setUniformf_vcwmuq$('u_game_camera_y', new Float32Array([tmp$_1.pos.y]));
          }
          var tmp$_3 = this.backOffset.getValue_lvbgq3$(state);
          var offsetX = tmp$_3.component1()
          , offsetY = tmp$_3.component2();
          this.setUniformf_vcwmuq$('mouse', new Float32Array([offsetX, offsetY]));
        }
        this.setUniformf_vcwmuq$('u_game_width', new Float32Array([this.get_gameWidth_kpbpt9$(this.view)]));
        this.setUniformf_vcwmuq$('u_game_height', new Float32Array([this.get_gameHeight_kpbpt9$(this.view)]));
        this.backgroundShader.activate();
        var pow2in14 = 1024.0 * 2 * 2 * 2 * 2;
        this.setUniformf_vcwmuq$('time', new Float32Array([pow2in14 - lib.pillarTimeS_mx4ult$(2 * pow2in14)]));
        var mode = Mode$TRIANGLE_getInstance();
        var allArgs = new Float32Array([-1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0]);
        var tmp$_4;
        var mesh = true ? Kotlin.isType(tmp$_4 = allArgs, Float32Array_0) ? tmp$_4 : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
        var tmp$_5;
        if (true)
          this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
        this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
        this.gl.drawArrays(mode.glMode, 0, allArgs.length / ensureNotNull((tmp$_5 = this.currentShader) != null ? tmp$_5.blockSize : null) | 0);
        this.foodShader.activate();
        var visibleRadius = this.get_gameWidth_kpbpt9$(this.view) * 0.75;
        if ((tmp$_2 = state != null ? state.foods : null) != null) {
          var tmp$_6;
          tmp$_6 = tmp$_2.iterator();
          while (tmp$_6.hasNext()) {
            var element = tmp$_6.next();
            var xy = calcRenderXY(state, new XY(element.pos.x, element.pos.y), this.cameraGamePos);
            var $receiver = this.cameraGamePos;
            if (get_len($receiver.copy_lu1900$($receiver.x - xy.x, $receiver.y - xy.y)) < visibleRadius) {
              var fan = new MassPower$CircleData(this.defaultBlend, MassPower$gameLoop$lambda$lambda$lambda);
              this.renderCircle10_yxq3cr$(xy.x, xy.y, get_radius(element) * FOOD_SCALE, null, new Float32Array([1.5, 1.5, 1.5, 1.0]), fan);
            }
          }
        }
        this.textureShader.activate();
        var $receiver_0 = ArrayList_init();
        if (state != null) {
          var tmp$_7;
          tmp$_7 = state.reactive.iterator();
          while (tmp$_7.hasNext()) {
            var element_0 = tmp$_7.next();
            $receiver_0.add_11rb$(new RenderData(element_0.pos.x, element_0.pos.y, get_radius(element_0), this.get_color_e78gx9$(element_0.owner)));
          }
          var $receiver_1 = state.cars;
          if ($receiver_1.size > 1) {
            sortWith($receiver_1, new Comparator$ObjectLiteral(compareBy$lambda(MassPower$gameLoop$lambda$lambda$lambda$lambda)));
          }
          var tmp$_8;
          tmp$_8 = $receiver_1.iterator();
          while (tmp$_8.hasNext()) {
            var element_1 = tmp$_8.next();
            $receiver_0.add_11rb$(new RenderData(element_1.pos.x, element_1.pos.y, get_radius(element_1), this.get_color_e78gx9$(element_1.owner)));
          }
        }
        var tmp$_9;
        tmp$_9 = $receiver_0.iterator();
        while (tmp$_9.hasNext()) {
          var element_2 = tmp$_9.next();
          var tmp$_10, tmp$_11;
          var tmp$_12;
          if ((tmp$_10 = this.imgCache_0.get_11rb$(element_2.imgData)) != null)
            tmp$_12 = tmp$_10;
          else {
            var $receiver_2 = new ImgCache();
            var $receiver_3 = this.imgCache_0;
            var key = element_2.imgData;
            $receiver_3.put_xwzc9p$(key, $receiver_2);
            var img = createElement(document, 'img', getKClass(HTMLImageElement));
            img.onload = MassPower$gameLoop$lambda$lambda$lambda$lambda_0(this, img, $receiver_2);
            img.src = element_2.imgData.url;
            tmp$_12 = $receiver_2;
          }
          var cache = tmp$_12;
          if ((tmp$_11 = cache.texture) != null) {
            var fan_0 = new MassPower$CircleData(this.defaultBlend, MassPower$gameLoop$lambda$lambda$lambda$lambda_1);
            var strip = new MassPower$CircleData(this.stripBlend, MassPower$gameLoop$lambda$lambda$lambda$lambda_2);
            if (state != null) {
              var tmp$_13 = calcRenderXY(state, XY_init_0(element_2.x, element_2.y), this.cameraGamePos);
              var x = tmp$_13.component1()
              , y = tmp$_13.component2();
              this.renderCircle10_yxq3cr$(x, y, element_2.gameSize, tmp$_11.glTexture, new Float32Array([0.0]), fan_0, strip);
            }
          }
        }
        if (HIDDEN) {
          this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
          this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
        }
        window.requestAnimationFrame(getCallableRef('gameLoop', function ($receiver, милисекундСоСтараПлюсБездействие) {
          return $receiver.gameLoop_0(милисекундСоСтараПлюсБездействие), Unit;
        }.bind(null, this)));
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          $this.log.error_nez7ok$('save invoke fail', e);
          null;
          break saveInvoke_klfg04$break;
        }
         else
          throw e;
      }
    }
     while (false);
  };
  function MassPower$CircleData(blend, getArr) {
    this.blend = blend;
    this.getArr = getArr;
  }
  MassPower$CircleData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CircleData',
    interfaces: []
  };
  function MassPower$Blend(src, dst) {
    this.src = src;
    this.dst = dst;
  }
  MassPower$Blend.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blend',
    interfaces: []
  };
  MassPower$Blend.prototype.component1 = function () {
    return this.src;
  };
  MassPower$Blend.prototype.component2 = function () {
    return this.dst;
  };
  MassPower$Blend.prototype.copy_nl86e8$ = function (src, dst) {
    return new MassPower$Blend(src === void 0 ? this.src : src, dst === void 0 ? this.dst : dst);
  };
  MassPower$Blend.prototype.toString = function () {
    return 'Blend(src=' + Kotlin.toString(this.src) + (', dst=' + Kotlin.toString(this.dst)) + ')';
  };
  MassPower$Blend.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.src) | 0;
    result = result * 31 + Kotlin.hashCode(this.dst) | 0;
    return result;
  };
  MassPower$Blend.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.src, other.src) && Kotlin.equals(this.dst, other.dst)))));
  };
  function MassPower$BlendFactor(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MassPower$BlendFactor_initFields() {
    MassPower$BlendFactor_initFields = function () {
    };
    MassPower$BlendFactor$SRC_COLOR_instance = new MassPower$BlendFactor('SRC_COLOR', 0, WebGLRenderingContext.SRC_COLOR);
    MassPower$BlendFactor$ONE_MINUS_SRC_COLOR_instance = new MassPower$BlendFactor('ONE_MINUS_SRC_COLOR', 1, WebGLRenderingContext.ONE_MINUS_SRC_COLOR);
    MassPower$BlendFactor$DST_COLOR_instance = new MassPower$BlendFactor('DST_COLOR', 2, WebGLRenderingContext.DST_COLOR);
    MassPower$BlendFactor$ONE_MINUS_DST_COLOR_instance = new MassPower$BlendFactor('ONE_MINUS_DST_COLOR', 3, WebGLRenderingContext.ONE_MINUS_DST_COLOR);
    MassPower$BlendFactor$SRC_ALPHA_instance = new MassPower$BlendFactor('SRC_ALPHA', 4, WebGLRenderingContext.SRC_ALPHA);
    MassPower$BlendFactor$ONE_MINUS_SRC_ALPHA_instance = new MassPower$BlendFactor('ONE_MINUS_SRC_ALPHA', 5, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
    MassPower$BlendFactor$DST_ALPHA_instance = new MassPower$BlendFactor('DST_ALPHA', 6, WebGLRenderingContext.DST_ALPHA);
    MassPower$BlendFactor$ONE_MINUS_DST_ALPHA_instance = new MassPower$BlendFactor('ONE_MINUS_DST_ALPHA', 7, WebGLRenderingContext.ONE_MINUS_DST_ALPHA);
    MassPower$BlendFactor$SRC_ALPHA_SATURATE_instance = new MassPower$BlendFactor('SRC_ALPHA_SATURATE', 8, WebGLRenderingContext.SRC_ALPHA_SATURATE);
  }
  var MassPower$BlendFactor$SRC_COLOR_instance;
  function MassPower$BlendFactor$SRC_COLOR_getInstance() {
    MassPower$BlendFactor_initFields();
    return MassPower$BlendFactor$SRC_COLOR_instance;
  }
  var MassPower$BlendFactor$ONE_MINUS_SRC_COLOR_instance;
  function MassPower$BlendFactor$ONE_MINUS_SRC_COLOR_getInstance() {
    MassPower$BlendFactor_initFields();
    return MassPower$BlendFactor$ONE_MINUS_SRC_COLOR_instance;
  }
  var MassPower$BlendFactor$DST_COLOR_instance;
  function MassPower$BlendFactor$DST_COLOR_getInstance() {
    MassPower$BlendFactor_initFields();
    return MassPower$BlendFactor$DST_COLOR_instance;
  }
  var MassPower$BlendFactor$ONE_MINUS_DST_COLOR_instance;
  function MassPower$BlendFactor$ONE_MINUS_DST_COLOR_getInstance() {
    MassPower$BlendFactor_initFields();
    return MassPower$BlendFactor$ONE_MINUS_DST_COLOR_instance;
  }
  var MassPower$BlendFactor$SRC_ALPHA_instance;
  function MassPower$BlendFactor$SRC_ALPHA_getInstance() {
    MassPower$BlendFactor_initFields();
    return MassPower$BlendFactor$SRC_ALPHA_instance;
  }
  var MassPower$BlendFactor$ONE_MINUS_SRC_ALPHA_instance;
  function MassPower$BlendFactor$ONE_MINUS_SRC_ALPHA_getInstance() {
    MassPower$BlendFactor_initFields();
    return MassPower$BlendFactor$ONE_MINUS_SRC_ALPHA_instance;
  }
  var MassPower$BlendFactor$DST_ALPHA_instance;
  function MassPower$BlendFactor$DST_ALPHA_getInstance() {
    MassPower$BlendFactor_initFields();
    return MassPower$BlendFactor$DST_ALPHA_instance;
  }
  var MassPower$BlendFactor$ONE_MINUS_DST_ALPHA_instance;
  function MassPower$BlendFactor$ONE_MINUS_DST_ALPHA_getInstance() {
    MassPower$BlendFactor_initFields();
    return MassPower$BlendFactor$ONE_MINUS_DST_ALPHA_instance;
  }
  var MassPower$BlendFactor$SRC_ALPHA_SATURATE_instance;
  function MassPower$BlendFactor$SRC_ALPHA_SATURATE_getInstance() {
    MassPower$BlendFactor_initFields();
    return MassPower$BlendFactor$SRC_ALPHA_SATURATE_instance;
  }
  MassPower$BlendFactor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendFactor',
    interfaces: [Enum]
  };
  function MassPower$BlendFactor$values() {
    return [MassPower$BlendFactor$SRC_COLOR_getInstance(), MassPower$BlendFactor$ONE_MINUS_SRC_COLOR_getInstance(), MassPower$BlendFactor$DST_COLOR_getInstance(), MassPower$BlendFactor$ONE_MINUS_DST_COLOR_getInstance(), MassPower$BlendFactor$SRC_ALPHA_getInstance(), MassPower$BlendFactor$ONE_MINUS_SRC_ALPHA_getInstance(), MassPower$BlendFactor$DST_ALPHA_getInstance(), MassPower$BlendFactor$ONE_MINUS_DST_ALPHA_getInstance(), MassPower$BlendFactor$SRC_ALPHA_SATURATE_getInstance()];
  }
  MassPower$BlendFactor.values = MassPower$BlendFactor$values;
  function MassPower$BlendFactor$valueOf(name) {
    switch (name) {
      case 'SRC_COLOR':
        return MassPower$BlendFactor$SRC_COLOR_getInstance();
      case 'ONE_MINUS_SRC_COLOR':
        return MassPower$BlendFactor$ONE_MINUS_SRC_COLOR_getInstance();
      case 'DST_COLOR':
        return MassPower$BlendFactor$DST_COLOR_getInstance();
      case 'ONE_MINUS_DST_COLOR':
        return MassPower$BlendFactor$ONE_MINUS_DST_COLOR_getInstance();
      case 'SRC_ALPHA':
        return MassPower$BlendFactor$SRC_ALPHA_getInstance();
      case 'ONE_MINUS_SRC_ALPHA':
        return MassPower$BlendFactor$ONE_MINUS_SRC_ALPHA_getInstance();
      case 'DST_ALPHA':
        return MassPower$BlendFactor$DST_ALPHA_getInstance();
      case 'ONE_MINUS_DST_ALPHA':
        return MassPower$BlendFactor$ONE_MINUS_DST_ALPHA_getInstance();
      case 'SRC_ALPHA_SATURATE':
        return MassPower$BlendFactor$SRC_ALPHA_SATURATE_getInstance();
      default:throwISE('No enum constant masspower.MassPower.BlendFactor.' + name);
    }
  }
  MassPower$BlendFactor.valueOf_61zpoe$ = MassPower$BlendFactor$valueOf;
  MassPower.prototype.angle_vux9f0$ = function (i, max) {
    return 2 * math.PI * i / max;
  };
  MassPower.prototype.renderCircle10_yxq3cr$ = function (gameX, gameY, gameRadius, texture, center, fan, strip, stripRelativeWidth) {
    if (strip === void 0)
      strip = null;
    if (stripRelativeWidth === void 0)
      stripRelativeWidth = 0.5;
    if (texture != null)
      this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
    var x = gameX;
    var y = gameY;
    var notUsed = 0.0;
    var r0 = 0.0;
    var gr = gameRadius;
    var f0 = fan.getArr(this.radian10[0]);
    var f1 = fan.getArr(this.radian10[1]);
    var f2 = fan.getArr(this.radian10[2]);
    var f3 = fan.getArr(this.radian10[3]);
    var f4 = fan.getArr(this.radian10[4]);
    var f5 = fan.getArr(this.radian10[5]);
    var f6 = fan.getArr(this.radian10[6]);
    var f7 = fan.getArr(this.radian10[7]);
    var f8 = fan.getArr(this.radian10[8]);
    var f9 = fan.getArr(this.radian10[9]);
    this.gl.blendFunc(fan.blend.src.value, fan.blend.dst.value);
    var mode = Mode$TRIANGLE_FAN_getInstance();
    var allArgs = Kotlin.primitiveArrayConcat(new Float32Array([x, y, notUsed, r0]), center, new Float32Array([x, y, this.radian10[0], gr]), f0, new Float32Array([x, y, this.radian10[1], gr]), f1, new Float32Array([x, y, this.radian10[2], gr]), f2, new Float32Array([x, y, this.radian10[3], gr]), f3, new Float32Array([x, y, this.radian10[4], gr]), f4, new Float32Array([x, y, this.radian10[5], gr]), f5, new Float32Array([x, y, this.radian10[6], gr]), f6, new Float32Array([x, y, this.radian10[7], gr]), f7, new Float32Array([x, y, this.radian10[8], gr]), f8, new Float32Array([x, y, this.radian10[9], gr]), f9, new Float32Array([x, y, this.radian10[0], gr]), f0);
    var tmp$;
    var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
    var tmp$_0;
    if (true)
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
    this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
    this.gl.drawArrays(mode.glMode, 0, allArgs.length / ensureNotNull((tmp$_0 = this.currentShader) != null ? tmp$_0.blockSize : null) | 0);
    if (strip != null) {
      var s0 = strip.getArr(this.radian10[0]);
      var s1 = strip.getArr(this.radian10[1]);
      var s2 = strip.getArr(this.radian10[2]);
      var s3 = strip.getArr(this.radian10[3]);
      var s4 = strip.getArr(this.radian10[4]);
      var s5 = strip.getArr(this.radian10[5]);
      var s6 = strip.getArr(this.radian10[6]);
      var s7 = strip.getArr(this.radian10[7]);
      var s8 = strip.getArr(this.radian10[8]);
      var s9 = strip.getArr(this.radian10[9]);
      var stripRadius = (1.0 + stripRelativeWidth) * gr;
      this.gl.blendFunc(strip.blend.src.value, strip.blend.dst.value);
      var mode_0 = Mode$TRIANGLE_STRIP_getInstance();
      var allArgs_0 = Kotlin.primitiveArrayConcat(new Float32Array([x, y, this.radian10[0], gr]), f0, new Float32Array([x, y, this.radian10[0], stripRadius]), s0, new Float32Array([x, y, this.radian10[1], gr]), f1, new Float32Array([x, y, this.radian10[1], stripRadius]), s1, new Float32Array([x, y, this.radian10[2], gr]), f2, new Float32Array([x, y, this.radian10[2], stripRadius]), s2, new Float32Array([x, y, this.radian10[3], gr]), f3, new Float32Array([x, y, this.radian10[3], stripRadius]), s3, new Float32Array([x, y, this.radian10[4], gr]), f4, new Float32Array([x, y, this.radian10[4], stripRadius]), s4, new Float32Array([x, y, this.radian10[5], gr]), f5, new Float32Array([x, y, this.radian10[5], stripRadius]), s5, new Float32Array([x, y, this.radian10[6], gr]), f6, new Float32Array([x, y, this.radian10[6], stripRadius]), s6, new Float32Array([x, y, this.radian10[7], gr]), f7, new Float32Array([x, y, this.radian10[7], stripRadius]), s7, new Float32Array([x, y, this.radian10[8], gr]), f8, new Float32Array([x, y, this.radian10[8], stripRadius]), s8, new Float32Array([x, y, this.radian10[9], gr]), f9, new Float32Array([x, y, this.radian10[9], stripRadius]), s9, new Float32Array([x, y, this.radian10[0], gr]), f0, new Float32Array([x, y, this.radian10[0], stripRadius]), s0);
      var tmp$_1;
      var mesh_0 = true ? Kotlin.isType(tmp$_1 = allArgs_0, Float32Array_0) ? tmp$_1 : throwCCE() : new Float32Array_0(toTypedArray(allArgs_0));
      var tmp$_2;
      if (true)
        this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_0, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode_0.glMode, 0, allArgs_0.length / ensureNotNull((tmp$_2 = this.currentShader) != null ? tmp$_2.blockSize : null) | 0);
    }
  };
  MassPower.prototype.render_57bhe4$ = defineInlineFunction('game.masspower.MassPower.render_57bhe4$', wrapFunction(function () {
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var ensureNotNull = Kotlin.ensureNotNull;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    return function (mode, allArgs) {
      var tmp$;
      var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var tmp$_0;
      if (true)
        this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / ensureNotNull((tmp$_0 = this.currentShader) != null ? tmp$_0.blockSize : null) | 0);
    };
  }));
  MassPower.prototype.render_ytk6jm$ = defineInlineFunction('game.masspower.MassPower.render_ytk6jm$', wrapFunction(function () {
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var ensureNotNull = Kotlin.ensureNotNull;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    return function (mode, allArgs) {
      var tmp$;
      var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var tmp$_0;
      if (true)
        this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / ensureNotNull((tmp$_0 = this.currentShader) != null ? tmp$_0.blockSize : null) | 0);
    };
  }));
  MassPower.prototype.vert_su1nry$ = defineInlineFunction('game.masspower.MassPower.vert_su1nry$', wrapFunction(function () {
    var toList = Kotlin.kotlin.collections.toList_rjqryz$;
    return function ($receiver, args) {
      return $receiver.addAll_brywnq$(toList(args));
    };
  }));
  MassPower.prototype.render_ylnndm$ = defineInlineFunction('game.masspower.MassPower.render_ylnndm$', wrapFunction(function () {
    var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var ensureNotNull = Kotlin.ensureNotNull;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    return function (mode, lambda) {
      var $receiver = ArrayList_init();
      lambda($receiver);
      var allArgs = toFloatArray($receiver);
      var tmp$;
      var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var tmp$_0;
      if (true)
        this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / ensureNotNull((tmp$_0 = this.currentShader) != null ? tmp$_0.blockSize : null) | 0);
    };
  }));
  MassPower.prototype.render_da5qnj$ = defineInlineFunction('game.masspower.MassPower.render_da5qnj$', wrapFunction(function () {
    var ensureNotNull = Kotlin.ensureNotNull;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    return function (mode, mesh, allFloatArgsCount) {
      var tmp$;
      if (true)
        this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allFloatArgsCount / ensureNotNull((tmp$ = this.currentShader) != null ? tmp$.blockSize : null) | 0);
    };
  }));
  MassPower.prototype.setUniformf_vcwmuq$ = function (name, values) {
    this.uniforms.put_xwzc9p$(name, values);
    this._setUniform_z13cpo$(name, values);
  };
  MassPower.prototype._setUniform_z13cpo$ = function (name, values) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.currentShader) != null) {
      var uniformLocation = this.gl.getUniformLocation(tmp$.shaderProgram, name);
      switch (values.length) {
        case 1:
          this.gl.uniform1f(uniformLocation, values[0]);
          break;
        case 2:
          this.gl.uniform2f(uniformLocation, values[0], values[1]);
          break;
      }
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  function MassPower$ShaderVertex($outer, src, attrList) {
    this.$outer = $outer;
    this.src = src;
    this.attrList = attrList;
  }
  MassPower$ShaderVertex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShaderVertex',
    interfaces: []
  };
  function MassPower$ShaderFull($outer, vert, frag) {
    this.$outer = $outer;
    this.vert = vert;
    this.shaderProgram = createWebGLProgram(this.$outer.gl, this.vert.src, frag);
    var $receiver = this.vert.attrList;
    this.$outer;
    var this$MassPower = this.$outer;
    var result = ArrayList_init();
    var currentSize = {v: 0};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      result.add_11rb$(new IterAttr(element, this$MassPower.gl.getAttribLocation(this.shaderProgram, element.locationName), currentSize.v));
      currentSize.v = currentSize.v + element.numElements | 0;
    }
    this.attributes = result;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = this.attributes.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      sum = sum + element_0.attr.numElements | 0;
    }
    this.blockSize = sum;
    var tmp$_1;
    this.buffer = (tmp$_1 = this.$outer.gl.createBuffer()) != null ? tmp$_1 : lib.log.fatalError_nez7ok$('Unable to create webgl buffer!');
  }
  MassPower$ShaderFull.prototype.activate = function () {
    this.$outer.currentShader = this;
    this.$outer.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.buffer);
    this.$outer.gl.useProgram(this.shaderProgram);
    var $receiver = this.$outer.uniforms.entries;
    this.$outer;
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var this$MassPower = this.$outer;
      var k = element.key;
      var v = element.value;
      this$MassPower._setUniform_z13cpo$(k, v);
    }
    var $receiver_0 = this.attributes;
    this.$outer;
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var this$MassPower_0 = this.$outer;
      this$MassPower_0.gl.enableVertexAttribArray(element_0.location);
      var BYTES = Float32Array.BYTES_PER_ELEMENT;
      this$MassPower_0.gl.vertexAttribPointer(element_0.location, element_0.attr.numElements, WebGLRenderingContext.FLOAT, false, Kotlin.imul(this.blockSize, BYTES), Kotlin.imul(element_0.offset, BYTES));
      if (false)
        this$MassPower_0.gl.disableVertexAttribArray(element_0.location);
    }
  };
  MassPower$ShaderFull.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShaderFull',
    interfaces: []
  };
  function MassPower$gameScale$lambda(this$MassPower) {
    return function () {
      var car = this$MassPower.model.myCar;
      if (car != null) {
        var result = 1.5 * lib.Fun.arg0toInf_dleff0$(get_radius_0(car.size), get_radius_0(GameConst_getInstance().DEFAULT_CAR_SIZE)) + 3 * lib.Fun.arg0toInf_lu1900$(get_len(car.speed), 1000.0);
        return Math_0.max(result, 1.0);
      }
       else {
        return 3.0;
      }
    };
  }
  function MassPower$cameraGamePos$lambda(this$MassPower) {
    return function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this$MassPower.model.myCar) != null ? tmp$.pos : null) != null ? tmp$_0.copy_lu1900$() : null;
    };
  }
  function MassPower_init$lambda(this$MassPower) {
    return function (it) {
      this$MassPower.resize_0();
      return Unit;
    };
  }
  function MassPower_init$lambda_0(this$MassPower) {
    return function (it) {
      this$MassPower.resize_0();
      return Unit;
    };
  }
  function MassPower_init$lambda_1(this$MassPower) {
    return function (it) {
      this$MassPower.backgroundShader.activate();
      this$MassPower.textureShader.activate();
      this$MassPower.gl.enable(WebGLRenderingContext.BLEND);
      this$MassPower.gameLoop_0(it);
      return Unit;
    };
  }
  function MassPower_init$lambda_2(this$MassPower) {
    return function (event) {
      if (Kotlin.isType(event, MouseEvent)) {
        this$MassPower.mousePos = this$MassPower.screenToGame_zgo1bu$(this$MassPower.view, this$MassPower.get_xy_apx4ki$(event));
      }
    };
  }
  function MassPower_init$lambda_3(this$MassPower) {
    return function (event) {
      if (Kotlin.isType(event, MouseEvent)) {
        touch(this$MassPower.model, this$MassPower.screenToGame_zgo1bu$(this$MassPower.view, this$MassPower.get_xy_apx4ki$(event)));
      }
    };
  }
  function MassPower_init$lambda_4(this$MassPower) {
    return function (event) {
      this$MassPower.mouseDown = true;
    };
  }
  function MassPower_init$lambda_5(this$MassPower) {
    return function (event) {
      this$MassPower.mouseDown = false;
    };
  }
  function MassPower_init$lambda_6(event) {
    if (Kotlin.isType(event, KeyboardEvent)) {
      var code = event.keyCode;
      var key = Key$Companion_getInstance().getByCode_za3lpa$(code);
    }
  }
  MassPower.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MassPower',
    interfaces: []
  };
  function Mode_0(name, ordinal, glMode) {
    Enum.call(this);
    this.glMode = glMode;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Mode_initFields_0() {
    Mode_initFields_0 = function () {
    };
    Mode$TRIANGLE_instance = new Mode_0('TRIANGLE', 0, WebGLRenderingContext.TRIANGLES);
    Mode$TRIANGLE_FAN_instance = new Mode_0('TRIANGLE_FAN', 1, WebGLRenderingContext.TRIANGLE_FAN);
    Mode$TRIANGLE_STRIP_instance = new Mode_0('TRIANGLE_STRIP', 2, WebGLRenderingContext.TRIANGLE_STRIP);
  }
  var Mode$TRIANGLE_instance;
  function Mode$TRIANGLE_getInstance() {
    Mode_initFields_0();
    return Mode$TRIANGLE_instance;
  }
  var Mode$TRIANGLE_FAN_instance;
  function Mode$TRIANGLE_FAN_getInstance() {
    Mode_initFields_0();
    return Mode$TRIANGLE_FAN_instance;
  }
  var Mode$TRIANGLE_STRIP_instance;
  function Mode$TRIANGLE_STRIP_getInstance() {
    Mode_initFields_0();
    return Mode$TRIANGLE_STRIP_instance;
  }
  Mode_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function Mode$values_0() {
    return [Mode$TRIANGLE_getInstance(), Mode$TRIANGLE_FAN_getInstance(), Mode$TRIANGLE_STRIP_getInstance()];
  }
  Mode_0.values = Mode$values_0;
  function Mode$valueOf_0(name) {
    switch (name) {
      case 'TRIANGLE':
        return Mode$TRIANGLE_getInstance();
      case 'TRIANGLE_FAN':
        return Mode$TRIANGLE_FAN_getInstance();
      case 'TRIANGLE_STRIP':
        return Mode$TRIANGLE_STRIP_getInstance();
      default:throwISE('No enum constant masspower.Mode.' + name);
    }
  }
  Mode_0.valueOf_61zpoe$ = Mode$valueOf_0;
  var renderCalls;
  function onRender() {
    renderCalls = renderCalls + 1 | 0;
  }
  function SmoothByRenderCalls(lambda) {
    this.lambda = lambda;
    this.current = null;
    this.currentRenderCall = null;
  }
  SmoothByRenderCalls.prototype.getValue_lrcp0p$ = function (t, property) {
    var tmp$, tmp$_0;
    if (this.currentRenderCall !== renderCalls) {
      var result = (tmp$ = this.current) != null ? tmp$ : 0.0;
      var target = this.lambda();
      if (target != null) {
        result += (target - result) / 30;
      }
      this.current = result;
      this.currentRenderCall = renderCalls;
    }
    return (tmp$_0 = this.current) != null ? tmp$_0 : 0.0;
  };
  SmoothByRenderCalls.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SmoothByRenderCalls',
    interfaces: []
  };
  function CacheByRenderCalls(defaultValue, lambda) {
    this.defaultValue = defaultValue;
    this.lambda = lambda;
    this.cache = null;
    this.cachedRenderCall = null;
  }
  CacheByRenderCalls.prototype.getValue_lrcp0p$ = function (t, property) {
    var tmp$;
    if (this.cachedRenderCall !== renderCalls) {
      this.cachedRenderCall = renderCalls;
      this.cache = this.lambda();
    }
    return (tmp$ = this.cache) != null ? tmp$ : this.defaultValue;
  };
  CacheByRenderCalls.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CacheByRenderCalls',
    interfaces: []
  };
  function mem(v) {
    return v + ' ' + performance.memory[v] / 1024 / 1024;
  }
  function Key(name, ordinal, code, number) {
    if (number === void 0)
      number = false;
    Enum.call(this);
    this.code = code;
    this.number = number;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Key_initFields() {
    Key_initFields = function () {
    };
    Key$Q_instance = new Key('Q', 0, 113);
    Key$W_instance = new Key('W', 1, 119);
    Key$E_instance = new Key('E', 2, 101);
    Key$R_instance = new Key('R', 3, 114);
    Key$T_instance = new Key('T', 4, 116);
    Key$Y_instance = new Key('Y', 5, 121);
    Key$ZERO_instance = new Key('ZERO', 6, 48, true);
    Key$ONE_instance = new Key('ONE', 7, 49, true);
    Key$TWO_instance = new Key('TWO', 8, 50, true);
    Key$THREE_instance = new Key('THREE', 9, 51, true);
    Key$FOUR_instance = new Key('FOUR', 10, 52, true);
    Key$FIVE_instance = new Key('FIVE', 11, 53, true);
    Key$SIX_instance = new Key('SIX', 12, 54, true);
    Key$SEVEN_instance = new Key('SEVEN', 13, 55, true);
    Key$EIGHT_instance = new Key('EIGHT', 14, 56, true);
    Key$NINE_instance = new Key('NINE', 15, 57, true);
    Key$Companion_getInstance();
  }
  var Key$Q_instance;
  function Key$Q_getInstance() {
    Key_initFields();
    return Key$Q_instance;
  }
  var Key$W_instance;
  function Key$W_getInstance() {
    Key_initFields();
    return Key$W_instance;
  }
  var Key$E_instance;
  function Key$E_getInstance() {
    Key_initFields();
    return Key$E_instance;
  }
  var Key$R_instance;
  function Key$R_getInstance() {
    Key_initFields();
    return Key$R_instance;
  }
  var Key$T_instance;
  function Key$T_getInstance() {
    Key_initFields();
    return Key$T_instance;
  }
  var Key$Y_instance;
  function Key$Y_getInstance() {
    Key_initFields();
    return Key$Y_instance;
  }
  var Key$ZERO_instance;
  function Key$ZERO_getInstance() {
    Key_initFields();
    return Key$ZERO_instance;
  }
  var Key$ONE_instance;
  function Key$ONE_getInstance() {
    Key_initFields();
    return Key$ONE_instance;
  }
  var Key$TWO_instance;
  function Key$TWO_getInstance() {
    Key_initFields();
    return Key$TWO_instance;
  }
  var Key$THREE_instance;
  function Key$THREE_getInstance() {
    Key_initFields();
    return Key$THREE_instance;
  }
  var Key$FOUR_instance;
  function Key$FOUR_getInstance() {
    Key_initFields();
    return Key$FOUR_instance;
  }
  var Key$FIVE_instance;
  function Key$FIVE_getInstance() {
    Key_initFields();
    return Key$FIVE_instance;
  }
  var Key$SIX_instance;
  function Key$SIX_getInstance() {
    Key_initFields();
    return Key$SIX_instance;
  }
  var Key$SEVEN_instance;
  function Key$SEVEN_getInstance() {
    Key_initFields();
    return Key$SEVEN_instance;
  }
  var Key$EIGHT_instance;
  function Key$EIGHT_getInstance() {
    Key_initFields();
    return Key$EIGHT_instance;
  }
  var Key$NINE_instance;
  function Key$NINE_getInstance() {
    Key_initFields();
    return Key$NINE_instance;
  }
  Object.defineProperty(Key.prototype, 'numValue', {
    get: function () {
      return this.code - 48 | 0;
    }
  });
  function Key$Companion() {
    Key$Companion_instance = this;
  }
  Key$Companion.prototype.getByCode_za3lpa$ = function (code) {
    var tmp$, tmp$_0;
    tmp$ = Key$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var value = tmp$[tmp$_0];
      if (value.code === code) {
        return value;
      }
    }
    return null;
  };
  Key$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Key$Companion_instance = null;
  function Key$Companion_getInstance() {
    Key_initFields();
    if (Key$Companion_instance === null) {
      new Key$Companion();
    }
    return Key$Companion_instance;
  }
  Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: [Enum]
  };
  function Key$values() {
    return [Key$Q_getInstance(), Key$W_getInstance(), Key$E_getInstance(), Key$R_getInstance(), Key$T_getInstance(), Key$Y_getInstance(), Key$ZERO_getInstance(), Key$ONE_getInstance(), Key$TWO_getInstance(), Key$THREE_getInstance(), Key$FOUR_getInstance(), Key$FIVE_getInstance(), Key$SIX_getInstance(), Key$SEVEN_getInstance(), Key$EIGHT_getInstance(), Key$NINE_getInstance()];
  }
  Key.values = Key$values;
  function Key$valueOf(name) {
    switch (name) {
      case 'Q':
        return Key$Q_getInstance();
      case 'W':
        return Key$W_getInstance();
      case 'E':
        return Key$E_getInstance();
      case 'R':
        return Key$R_getInstance();
      case 'T':
        return Key$T_getInstance();
      case 'Y':
        return Key$Y_getInstance();
      case 'ZERO':
        return Key$ZERO_getInstance();
      case 'ONE':
        return Key$ONE_getInstance();
      case 'TWO':
        return Key$TWO_getInstance();
      case 'THREE':
        return Key$THREE_getInstance();
      case 'FOUR':
        return Key$FOUR_getInstance();
      case 'FIVE':
        return Key$FIVE_getInstance();
      case 'SIX':
        return Key$SIX_getInstance();
      case 'SEVEN':
        return Key$SEVEN_getInstance();
      case 'EIGHT':
        return Key$EIGHT_getInstance();
      case 'NINE':
        return Key$NINE_getInstance();
      default:throwISE('No enum constant masspower.Key.' + name);
    }
  }
  Key.valueOf_61zpoe$ = Key$valueOf;
  var OLD;
  var DYNAMIC_SHADER;
  var DYNAMIC_TEXTURE;
  var DEBUG_ERROR;
  var BIG_TEXTURE;
  var DYNAMIC_BLEND;
  var COUNT;
  var SCALE;
  function TextureData_0(vMatrix) {
    this.vMatrix = vMatrix;
  }
  TextureData_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureData',
    interfaces: []
  };
  function ImgData_0(url) {
    this.url = url;
  }
  ImgData_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImgData',
    interfaces: []
  };
  ImgData_0.prototype.component1 = function () {
    return this.url;
  };
  ImgData_0.prototype.copy_61zpoe$ = function (url) {
    return new ImgData_0(url === void 0 ? this.url : url);
  };
  ImgData_0.prototype.toString = function () {
    return 'ImgData(url=' + Kotlin.toString(this.url) + ')';
  };
  ImgData_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  ImgData_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.url, other.url))));
  };
  function ImgCache_0(texture) {
    if (texture === void 0)
      texture = null;
    this.texture = texture;
  }
  ImgCache_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImgCache',
    interfaces: []
  };
  function RenderData_0(x, y, scale, imgData) {
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.imgData = imgData;
  }
  RenderData_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderData',
    interfaces: []
  };
  RenderData_0.prototype.component1 = function () {
    return this.x;
  };
  RenderData_0.prototype.component2 = function () {
    return this.y;
  };
  RenderData_0.prototype.component3 = function () {
    return this.scale;
  };
  RenderData_0.prototype.component4 = function () {
    return this.imgData;
  };
  RenderData_0.prototype.copy_qzv60i$ = function (x, y, scale, imgData) {
    return new RenderData_0(x === void 0 ? this.x : x, y === void 0 ? this.y : y, scale === void 0 ? this.scale : scale, imgData === void 0 ? this.imgData : imgData);
  };
  RenderData_0.prototype.toString = function () {
    return 'RenderData(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', scale=' + Kotlin.toString(this.scale)) + (', imgData=' + Kotlin.toString(this.imgData)) + ')';
  };
  RenderData_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.imgData) | 0;
    return result;
  };
  RenderData_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.imgData, other.imgData)))));
  };
  function View_0() {
  }
  Object.defineProperty(View_0.prototype, 'gameWidth', {
    get: function () {
      return this.getWidth_mx4ult$(window.innerWidth / window.innerHeight);
    }
  });
  Object.defineProperty(View_0.prototype, 'gameHeight', {
    get: function () {
      return this.getHeight_mx4ult$(window.innerWidth / window.innerHeight);
    }
  });
  Object.defineProperty(View_0.prototype, 'projectionMatrix', {
    get: function () {
      var $receiver = new Matrix4();
      $receiver.setOrthographicProjection_w8lrqs$(0.0, this.gameWidth, 0.0, this.gameHeight, -0.1, -100.0);
      return $receiver;
    }
  });
  Object.defineProperty(View_0.prototype, 'windowWidth', {
    get: function () {
      return min_1(window.innerWidth, window.innerHeight * this.gameWidth / this.gameHeight);
    }
  });
  Object.defineProperty(View_0.prototype, 'windowHeight', {
    get: function () {
      return min_1(window.innerHeight, window.innerWidth * this.gameHeight / this.gameWidth);
    }
  });
  Object.defineProperty(View_0.prototype, 'borderLeft', {
    get: function () {
      return (window.innerWidth - this.windowWidth) / 2;
    }
  });
  Object.defineProperty(View_0.prototype, 'borderTop', {
    get: function () {
      return (window.innerHeight - this.windowHeight) / 2;
    }
  });
  View_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: []
  };
  function FixedWidth_0(width, minHeight, maxHeight) {
    View_0.call(this);
    this.width = width;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
  }
  FixedWidth_0.prototype.getWidth_mx4ult$ = function (aspectRation) {
    return this.width;
  };
  FixedWidth_0.prototype.getHeight_mx4ult$ = function (aspectRation) {
    return min_0(max_0(this.width / aspectRation, this.minHeight), this.maxHeight);
  };
  FixedWidth_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FixedWidth',
    interfaces: [View_0]
  };
  function Attr_0(locationName, numElements) {
    this.locationName = locationName;
    this.numElements = numElements;
  }
  Attr_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attr',
    interfaces: []
  };
  Attr_0.prototype.component1 = function () {
    return this.locationName;
  };
  Attr_0.prototype.component2 = function () {
    return this.numElements;
  };
  Attr_0.prototype.copy_bm4lxs$ = function (locationName, numElements) {
    return new Attr_0(locationName === void 0 ? this.locationName : locationName, numElements === void 0 ? this.numElements : numElements);
  };
  Attr_0.prototype.toString = function () {
    return 'Attr(locationName=' + Kotlin.toString(this.locationName) + (', numElements=' + Kotlin.toString(this.numElements)) + ')';
  };
  Attr_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.locationName) | 0;
    result = result * 31 + Kotlin.hashCode(this.numElements) | 0;
    return result;
  };
  Attr_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.locationName, other.locationName) && Kotlin.equals(this.numElements, other.numElements)))));
  };
  function IterAttr_0(attr, location, offset) {
    this.attr = attr;
    this.location = location;
    this.offset = offset;
  }
  IterAttr_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IterAttr',
    interfaces: []
  };
  IterAttr_0.prototype.component1 = function () {
    return this.attr;
  };
  IterAttr_0.prototype.component2 = function () {
    return this.location;
  };
  IterAttr_0.prototype.component3 = function () {
    return this.offset;
  };
  IterAttr_0.prototype.copy_j7plan$ = function (attr, location, offset) {
    return new IterAttr_0(attr === void 0 ? this.attr : attr, location === void 0 ? this.location : location, offset === void 0 ? this.offset : offset);
  };
  IterAttr_0.prototype.toString = function () {
    return 'IterAttr(attr=' + Kotlin.toString(this.attr) + (', location=' + Kotlin.toString(this.location)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  IterAttr_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.attr) | 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  IterAttr_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.attr, other.attr) && Kotlin.equals(this.location, other.location) && Kotlin.equals(this.offset, other.offset)))));
  };
  function PerformanceTest(view) {
    if (view === void 0)
      view = new FixedWidth_0(1200.0, 800.0, 1400.0);
    this.view = view;
    this.html = new HTMLElements();
    this.vertex = compileShader(this.gl, '\nattribute vec2 a_position;\nattribute vec2 a_boundingBox;\nattribute vec2 a_texCoord;\nattribute float a_scale;\nattribute float a_rotation;\nattribute float a_divide;\nuniform mat4 u_projectionView;\nvarying vec2 v_textCoord;\nvarying vec4 myColor;\nvarying vec4 arr[gl_MaxVaryingVectors-2];//28-29\nvarying float v_divide;\n\nmat4 scale(float scale) {\n  return mat4(\n    vec4(scale, 0.0,   0.0,   0.0),\n    vec4(0.0,   scale, 0.0,   0.0),\n    vec4(0.0,   0.0,   scale, 0.0),\n    vec4(0.0,   0.0,   0.0,   1.0)\n  );\n}\nmat4 rotateZ(float angle) {\n  return mat4(\n    vec4(cos(angle),   sin(angle),  0.0,  0.0),\n    vec4(-sin(angle),  cos(angle),  0.0,  0.0),\n    vec4(0.0,          0.0,         1.0,  0.0),\n    vec4(0.0,          0.0,         0.0,  1.0)\n  );\n}\nvoid main(void) {\n  v_divide = a_divide;\n  v_textCoord = a_texCoord;\n  vec4 scaledBox = vec4(a_boundingBox, 1.0, 1.0) * scale(a_scale) * rotateZ(a_rotation);\n  //myColor = vec4(1.0,0.3,0.3,0.5);\n  myColor = vec4(1.0,1.0,1.0,1.0);\n  gl_Position = u_projectionView * vec4(a_position + scaledBox.xy, 1.0, 1.0);\n  }\n', WebGLRenderingContext.VERTEX_SHADER);
    this.shaderProgram = createWebGLProgram_0(this.gl, this.vertex, compileShader(this.gl, '\nprecision mediump float;\nuniform sampler2D u_sampler;\nuniform lowp int u_test_array_size;\nuniform lowp float u_arr[3];\nuniform lowp vec4 u_vec_arr[gl_MaxVertexUniformVectors/2 - 5];\nvarying vec2 v_textCoord;\nvarying vec4 myColor;\nvarying vec4 arr[gl_MaxVaryingVectors-2];//28-29\nvarying float v_divide;\nvoid main(void) {\n  gl_FragColor = myColor * texture2D(u_sampler, v_textCoord);\n  gl_FragColor.a = gl_FragColor.a / v_divide/v_divide/v_divide/v_divide/v_divide/v_divide;\n  //gl_FragColor.a = gl_FragColor.a * (u_arr[0] + u_arr[1]);\n}\n', WebGLRenderingContext.FRAGMENT_SHADER));
    this.shaderProgram2 = createWebGLProgram_0(this.gl, this.vertex, compileShader(this.gl, '\nprecision mediump float;\nuniform sampler2D u_sampler;\nuniform lowp int u_test_array_size;\nuniform lowp float u_arr[3];\nuniform lowp vec4 u_vec_arr[gl_MaxVertexUniformVectors/2 - 5];\nvarying vec2 v_textCoord;\nvarying vec4 myColor;\nvarying vec4 arr[gl_MaxVaryingVectors-2];//28-29\nvarying float v_divide;\nvoid main(void) {\n  gl_FragColor = myColor;\n}\n', WebGLRenderingContext.FRAGMENT_SHADER));
    var $receiver = listOf([new Attr_0('a_position', 2), new Attr_0('a_boundingBox', 2), new Attr_0('a_texCoord', 2), new Attr_0('a_scale', 1), new Attr_0('a_rotation', 1), new Attr_0('a_divide', 1)]);
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var result = ArrayList_init();
    var currentSize = {v: 0};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      result.add_11rb$(new IterAttr_0(element, this.gl.getAttribLocation(this.shaderProgram, element.locationName), currentSize.v));
      currentSize.v = currentSize.v + element.numElements | 0;
    }
    this.attributes = result;
    var tmp$_0;
    var sum = 0;
    tmp$_0 = this.attributes.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      sum = sum + element_0.attr.numElements | 0;
    }
    this.verticesBlockSize = sum;
    this.imgCache_0 = HashMap_init();
    this.mouseX = 0.0;
    this.mouseY = 0.0;
    window.onfocus;
    window.onblur;
    window.onresize = PerformanceTest_init$lambda(this);
    window.onload = PerformanceTest_init$lambda_0(this);
    window.requestAnimationFrame(PerformanceTest_init$lambda_1(this));
    document.onmousemove = PerformanceTest_init$lambda_2(this);
    document.onclick = PerformanceTest_init$lambda_3;
    document.onkeypress = PerformanceTest_init$lambda_4(this);
    this.previousTime = this.time;
    this.averageConst = 30;
    this.fps = 60.0;
    this.modeKey_0 = PerformanceTest$Key$Q_getInstance();
    this.srcFactorGlow = WebGLRenderingContext.SRC_ALPHA;
    this.dstFactorGlow = true ? WebGLRenderingContext.DST_ALPHA : WebGLRenderingContext.SRC_ALPHA_SATURATE;
    this.srcFactor = WebGLRenderingContext.SRC_ALPHA;
    this.dstFactor = WebGLRenderingContext.ONE_MINUS_SRC_ALPHA;
  }
  Object.defineProperty(PerformanceTest.prototype, 'gl', {
    get: function () {
      return this.html.webgl;
    }
  });
  function PerformanceTest$Key(name, ordinal, code, number) {
    if (number === void 0)
      number = false;
    Enum.call(this);
    this.code = code;
    this.number = number;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PerformanceTest$Key_initFields() {
    PerformanceTest$Key_initFields = function () {
    };
    PerformanceTest$Key$Q_instance = new PerformanceTest$Key('Q', 0, 113);
    PerformanceTest$Key$W_instance = new PerformanceTest$Key('W', 1, 119);
    PerformanceTest$Key$E_instance = new PerformanceTest$Key('E', 2, 101);
    PerformanceTest$Key$R_instance = new PerformanceTest$Key('R', 3, 114);
    PerformanceTest$Key$T_instance = new PerformanceTest$Key('T', 4, 116);
    PerformanceTest$Key$Y_instance = new PerformanceTest$Key('Y', 5, 121);
    PerformanceTest$Key$ZERO_instance = new PerformanceTest$Key('ZERO', 6, 48, true);
    PerformanceTest$Key$ONE_instance = new PerformanceTest$Key('ONE', 7, 49, true);
    PerformanceTest$Key$TWO_instance = new PerformanceTest$Key('TWO', 8, 50, true);
    PerformanceTest$Key$THREE_instance = new PerformanceTest$Key('THREE', 9, 51, true);
    PerformanceTest$Key$FOUR_instance = new PerformanceTest$Key('FOUR', 10, 52, true);
    PerformanceTest$Key$FIVE_instance = new PerformanceTest$Key('FIVE', 11, 53, true);
    PerformanceTest$Key$SIX_instance = new PerformanceTest$Key('SIX', 12, 54, true);
    PerformanceTest$Key$SEVEN_instance = new PerformanceTest$Key('SEVEN', 13, 55, true);
    PerformanceTest$Key$EIGHT_instance = new PerformanceTest$Key('EIGHT', 14, 56, true);
    PerformanceTest$Key$NINE_instance = new PerformanceTest$Key('NINE', 15, 57, true);
    PerformanceTest$Key$Companion_getInstance();
  }
  var PerformanceTest$Key$Q_instance;
  function PerformanceTest$Key$Q_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$Q_instance;
  }
  var PerformanceTest$Key$W_instance;
  function PerformanceTest$Key$W_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$W_instance;
  }
  var PerformanceTest$Key$E_instance;
  function PerformanceTest$Key$E_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$E_instance;
  }
  var PerformanceTest$Key$R_instance;
  function PerformanceTest$Key$R_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$R_instance;
  }
  var PerformanceTest$Key$T_instance;
  function PerformanceTest$Key$T_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$T_instance;
  }
  var PerformanceTest$Key$Y_instance;
  function PerformanceTest$Key$Y_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$Y_instance;
  }
  var PerformanceTest$Key$ZERO_instance;
  function PerformanceTest$Key$ZERO_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$ZERO_instance;
  }
  var PerformanceTest$Key$ONE_instance;
  function PerformanceTest$Key$ONE_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$ONE_instance;
  }
  var PerformanceTest$Key$TWO_instance;
  function PerformanceTest$Key$TWO_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$TWO_instance;
  }
  var PerformanceTest$Key$THREE_instance;
  function PerformanceTest$Key$THREE_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$THREE_instance;
  }
  var PerformanceTest$Key$FOUR_instance;
  function PerformanceTest$Key$FOUR_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$FOUR_instance;
  }
  var PerformanceTest$Key$FIVE_instance;
  function PerformanceTest$Key$FIVE_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$FIVE_instance;
  }
  var PerformanceTest$Key$SIX_instance;
  function PerformanceTest$Key$SIX_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$SIX_instance;
  }
  var PerformanceTest$Key$SEVEN_instance;
  function PerformanceTest$Key$SEVEN_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$SEVEN_instance;
  }
  var PerformanceTest$Key$EIGHT_instance;
  function PerformanceTest$Key$EIGHT_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$EIGHT_instance;
  }
  var PerformanceTest$Key$NINE_instance;
  function PerformanceTest$Key$NINE_getInstance() {
    PerformanceTest$Key_initFields();
    return PerformanceTest$Key$NINE_instance;
  }
  Object.defineProperty(PerformanceTest$Key.prototype, 'numValue', {
    get: function () {
      return this.code - 48 | 0;
    }
  });
  function PerformanceTest$Key$Companion() {
    PerformanceTest$Key$Companion_instance = this;
  }
  PerformanceTest$Key$Companion.prototype.getByCode_za3lpa$ = function (code) {
    var tmp$, tmp$_0;
    tmp$ = PerformanceTest$Key$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var value = tmp$[tmp$_0];
      if (value.code === code) {
        return value;
      }
    }
    return null;
  };
  PerformanceTest$Key$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PerformanceTest$Key$Companion_instance = null;
  function PerformanceTest$Key$Companion_getInstance() {
    PerformanceTest$Key_initFields();
    if (PerformanceTest$Key$Companion_instance === null) {
      new PerformanceTest$Key$Companion();
    }
    return PerformanceTest$Key$Companion_instance;
  }
  PerformanceTest$Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: [Enum]
  };
  function PerformanceTest$Key$values() {
    return [PerformanceTest$Key$Q_getInstance(), PerformanceTest$Key$W_getInstance(), PerformanceTest$Key$E_getInstance(), PerformanceTest$Key$R_getInstance(), PerformanceTest$Key$T_getInstance(), PerformanceTest$Key$Y_getInstance(), PerformanceTest$Key$ZERO_getInstance(), PerformanceTest$Key$ONE_getInstance(), PerformanceTest$Key$TWO_getInstance(), PerformanceTest$Key$THREE_getInstance(), PerformanceTest$Key$FOUR_getInstance(), PerformanceTest$Key$FIVE_getInstance(), PerformanceTest$Key$SIX_getInstance(), PerformanceTest$Key$SEVEN_getInstance(), PerformanceTest$Key$EIGHT_getInstance(), PerformanceTest$Key$NINE_getInstance()];
  }
  PerformanceTest$Key.values = PerformanceTest$Key$values;
  function PerformanceTest$Key$valueOf(name) {
    switch (name) {
      case 'Q':
        return PerformanceTest$Key$Q_getInstance();
      case 'W':
        return PerformanceTest$Key$W_getInstance();
      case 'E':
        return PerformanceTest$Key$E_getInstance();
      case 'R':
        return PerformanceTest$Key$R_getInstance();
      case 'T':
        return PerformanceTest$Key$T_getInstance();
      case 'Y':
        return PerformanceTest$Key$Y_getInstance();
      case 'ZERO':
        return PerformanceTest$Key$ZERO_getInstance();
      case 'ONE':
        return PerformanceTest$Key$ONE_getInstance();
      case 'TWO':
        return PerformanceTest$Key$TWO_getInstance();
      case 'THREE':
        return PerformanceTest$Key$THREE_getInstance();
      case 'FOUR':
        return PerformanceTest$Key$FOUR_getInstance();
      case 'FIVE':
        return PerformanceTest$Key$FIVE_getInstance();
      case 'SIX':
        return PerformanceTest$Key$SIX_getInstance();
      case 'SEVEN':
        return PerformanceTest$Key$SEVEN_getInstance();
      case 'EIGHT':
        return PerformanceTest$Key$EIGHT_getInstance();
      case 'NINE':
        return PerformanceTest$Key$NINE_getInstance();
      default:throwISE('No enum constant performance.PerformanceTest.Key.' + name);
    }
  }
  PerformanceTest$Key.valueOf_61zpoe$ = PerformanceTest$Key$valueOf;
  function PerformanceTest$GameTexture($outer, glTexture, width, height) {
    this.$outer = $outer;
    this.glTexture = glTexture;
    this.width = width;
    this.height = height;
    this.left = (-this.width | 0) / 2.0;
    this.right = this.width / 2.0;
    this.bottom = (-this.height | 0) / 2.0;
    this.top = this.height / 2.0;
  }
  PerformanceTest$GameTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameTexture',
    interfaces: []
  };
  PerformanceTest.prototype.resize_0 = function () {
    this.gl.canvas.width = numberToInt(this.view.gameWidth);
    this.gl.canvas.height = numberToInt(this.view.gameHeight);
    this.html.canvas2d.canvas.width = numberToInt(this.view.gameWidth);
    this.html.canvas2d.canvas.height = numberToInt(this.view.gameHeight);
    this.gl.viewport(0, 0, numberToInt(this.view.gameWidth), numberToInt(this.view.gameHeight));
    this.gl.canvas.setAttribute('style', 'position: absolute; left: ' + this.view.borderLeft + 'px; top: ' + this.view.borderTop + 'px; z-index: 5; width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;');
    this.html.canvas2d.canvas.setAttribute('style', 'position: absolute; left: ' + this.view.borderLeft + 'px; top: ' + this.view.borderTop + 'px; z-index: 10; width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;');
  };
  Object.defineProperty(PerformanceTest.prototype, 'time', {
    get: function () {
      return (new Date()).getTime() / 1000.0;
    }
  });
  function PerformanceTest$gameLoop$lambda$lambda$lambda$lambda(this$PerformanceTest, closure$img, this$) {
    return function (it) {
      var tmp$;
      var texture = (tmp$ = this$PerformanceTest.gl.createTexture()) != null ? tmp$ : lib.log.fatalError_nez7ok$("Couldn't create webgl texture!");
      this$PerformanceTest.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
      this$PerformanceTest.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);
      this$PerformanceTest.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, closure$img);
      this$PerformanceTest.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.NEAREST);
      this$PerformanceTest.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.NEAREST);
      this$PerformanceTest.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
      this$PerformanceTest.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
      if (DYNAMIC_TEXTURE)
        this$PerformanceTest.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
      this$.texture = new PerformanceTest$GameTexture(this$PerformanceTest, texture, closure$img.width, closure$img.height);
      return null;
    };
  }
  function PerformanceTest$render$lambda(closure$allFloatArgsCount) {
    return function () {
      return closure$allFloatArgsCount <= 0;
    };
  }
  function PerformanceTest$render$lambda_0(closure$allFloatArgsCount, this$PerformanceTest) {
    return function () {
      return closure$allFloatArgsCount % this$PerformanceTest.verticesBlockSize !== 0;
    };
  }
  function PerformanceTest$render$lambda_1(closure$allFloatArgsCount) {
    return function () {
      return closure$allFloatArgsCount <= 0;
    };
  }
  function PerformanceTest$render$lambda_2(closure$allFloatArgsCount, this$PerformanceTest) {
    return function () {
      return closure$allFloatArgsCount % this$PerformanceTest.verticesBlockSize !== 0;
    };
  }
  function PerformanceTest$render$lambda_3(closure$allFloatArgsCount) {
    return function () {
      return closure$allFloatArgsCount <= 0;
    };
  }
  function PerformanceTest$render$lambda_4(closure$allFloatArgsCount, this$PerformanceTest) {
    return function () {
      return closure$allFloatArgsCount % this$PerformanceTest.verticesBlockSize !== 0;
    };
  }
  function mapNotNullTo$lambda(closure$transform, closure$destination) {
    return function (element) {
      var tmp$;
      if ((tmp$ = closure$transform(element)) != null) {
        closure$destination.add_11rb$(tmp$);
      }
      return Unit;
    };
  }
  PerformanceTest.prototype.gameLoop_0 = function (милисекундСоСтараПлюсБездействие) {
    var $this = lib;
    saveInvoke_klfg04$break: do {
      try {
        var tmp$, tmp$_0, tmp$_1;
        this.fps = (this.fps * this.averageConst + 1.0 / (this.time - this.previousTime)) / (this.averageConst + 1 | 0);
        this.previousTime = this.time;
        if (false)
          this.resize_0();
        this.html.canvas2d.clearRect(0.0, 0.0, this.view.gameWidth, this.view.gameHeight);
        this.html.canvas2d.fillStyle = 'white';
        this.html.canvas2d.font = 'bold 24pt Arial';
        if (false)
          this.html.canvas2d.fillText(mem_0('totalJSHeapSize'), 200.0, 200.0);
        if (false)
          this.html.canvas2d.fillText(mem_0('usedJSHeapSize'), 200.0, 300.0);
        if (false)
          this.html.canvas2d.fillText(mem_0('jsHeapSizeLimit'), 200.0, 400.0);
        this.html.canvas2d.fillText('fps: ' + this.fps, 200.0, 500.0);
        this.html.canvas2d.fillText(Gen_getInstance().date(), 200.0, 550.0);
        this.html.canvas2d.fillText('pillarTimeS(10) = ' + lib.pillarTimeS_mx4ult$(10.0).toString(), 200.0, 600.0);
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
        var imgData2 = new ImgData_0(BIG_TEXTURE ? 'img/smiley.png' : 'img/smiley_small_rect.png');
        var imgData = new ImgData_0(BIG_TEXTURE ? 'img/smiley.png' : 'img/smiley_small_rect_green.png');
        var scale = BIG_TEXTURE ? SCALE : 8 * SCALE;
        var $receiver = mutableListOf([new RenderData_0(500.0, 500.0, scale, imgData)]);
        var size = COUNT;
        var list = ArrayList_init(size);
        for (var index = 0; index < size; index++) {
          var tmp$_2 = list.add_11rb$;
          var x = this.time * index;
          var x_0 = 400.0 + Math_0.sin(x) * 300.0;
          var tmp$_3 = this.view.gameHeight / 2.0;
          var x_1 = this.time / 2.5 * index;
          var y = tmp$_3 + Math_0.cos(x_1) * 300.0;
          tmp$_2.call(list, new RenderData_0(x_0, y, scale, index % 2 === 0 ? imgData2 : imgData));
        }
        $receiver.addAll_brywnq$(list);
        $receiver.add_11rb$(new RenderData_0(this.mouseX, this.mouseY, scale, imgData));
        var tmp$_4;
        tmp$_4 = $receiver.iterator();
        while (tmp$_4.hasNext()) {
          var element = tmp$_4.next();
          var tmp$_5, tmp$_6, tmp$_7;
          var tmp$_8;
          if ((tmp$_5 = this.imgCache_0.get_11rb$(element.imgData)) != null)
            tmp$_8 = tmp$_5;
          else {
            var $receiver_0 = new ImgCache_0();
            var $receiver_1 = this.imgCache_0;
            var key = element.imgData;
            $receiver_1.put_xwzc9p$(key, $receiver_0);
            var img = createElement(document, 'img', getKClass(HTMLImageElement));
            img.onload = PerformanceTest$gameLoop$lambda$lambda$lambda$lambda(this, img, $receiver_0);
            img.src = element.imgData.url;
            tmp$_8 = $receiver_0;
          }
          var cache = tmp$_8;
          if ((tmp$_6 = cache.texture) != null) {
            var $receiver_2 = tmp$_6.glTexture;
            var center = new Float32Array([element.x, element.y, 0.0, 0.0, 0.5, 0.5, element.scale, 0.0, 0.0]);
            var max = 16;
            var a = 2 * math.PI * 0 / max;
            var cos = Math_0.cos(a);
            var sin = Math_0.sin(a);
            var DIVIDE = 1.65;
            var glowRadius = 0.75;
            var tmp$_9 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos * tmp$_6.width / 2, sin * tmp$_6.height / 2, cos * 0.5 + 0.5, sin * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos * tmp$_6.width * glowRadius, sin * tmp$_6.height * glowRadius, 0.5 + cos * 0.5, 0.5 + sin * 0.5, element.scale, 0.0, DIVIDE]));
            var f0 = tmp$_9.component1()
            , s0 = tmp$_9.component2();
            var a_0 = 2 * math.PI * 1 / max;
            var cos_0 = Math_0.cos(a_0);
            var sin_0 = Math_0.sin(a_0);
            var DIVIDE_0 = 1.65;
            var glowRadius_0 = 0.75;
            var tmp$_10 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_0 * tmp$_6.width / 2, sin_0 * tmp$_6.height / 2, cos_0 * 0.5 + 0.5, sin_0 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_0 * tmp$_6.width * glowRadius_0, sin_0 * tmp$_6.height * glowRadius_0, 0.5 + cos_0 * 0.5, 0.5 + sin_0 * 0.5, element.scale, 0.0, DIVIDE_0]));
            var f1 = tmp$_10.component1()
            , s1 = tmp$_10.component2();
            var a_1 = 2 * math.PI * 2 / max;
            var cos_1 = Math_0.cos(a_1);
            var sin_1 = Math_0.sin(a_1);
            var DIVIDE_1 = 1.65;
            var glowRadius_1 = 0.75;
            var tmp$_11 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_1 * tmp$_6.width / 2, sin_1 * tmp$_6.height / 2, cos_1 * 0.5 + 0.5, sin_1 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_1 * tmp$_6.width * glowRadius_1, sin_1 * tmp$_6.height * glowRadius_1, 0.5 + cos_1 * 0.5, 0.5 + sin_1 * 0.5, element.scale, 0.0, DIVIDE_1]));
            var f2 = tmp$_11.component1()
            , s2 = tmp$_11.component2();
            var a_2 = 2 * math.PI * 3 / max;
            var cos_2 = Math_0.cos(a_2);
            var sin_2 = Math_0.sin(a_2);
            var DIVIDE_2 = 1.65;
            var glowRadius_2 = 0.75;
            var tmp$_12 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_2 * tmp$_6.width / 2, sin_2 * tmp$_6.height / 2, cos_2 * 0.5 + 0.5, sin_2 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_2 * tmp$_6.width * glowRadius_2, sin_2 * tmp$_6.height * glowRadius_2, 0.5 + cos_2 * 0.5, 0.5 + sin_2 * 0.5, element.scale, 0.0, DIVIDE_2]));
            var f3 = tmp$_12.component1()
            , s3 = tmp$_12.component2();
            var a_3 = 2 * math.PI * 4 / max;
            var cos_3 = Math_0.cos(a_3);
            var sin_3 = Math_0.sin(a_3);
            var DIVIDE_3 = 1.65;
            var glowRadius_3 = 0.75;
            var tmp$_13 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_3 * tmp$_6.width / 2, sin_3 * tmp$_6.height / 2, cos_3 * 0.5 + 0.5, sin_3 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_3 * tmp$_6.width * glowRadius_3, sin_3 * tmp$_6.height * glowRadius_3, 0.5 + cos_3 * 0.5, 0.5 + sin_3 * 0.5, element.scale, 0.0, DIVIDE_3]));
            var f4 = tmp$_13.component1()
            , s4 = tmp$_13.component2();
            var a_4 = 2 * math.PI * 5 / max;
            var cos_4 = Math_0.cos(a_4);
            var sin_4 = Math_0.sin(a_4);
            var DIVIDE_4 = 1.65;
            var glowRadius_4 = 0.75;
            var tmp$_14 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_4 * tmp$_6.width / 2, sin_4 * tmp$_6.height / 2, cos_4 * 0.5 + 0.5, sin_4 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_4 * tmp$_6.width * glowRadius_4, sin_4 * tmp$_6.height * glowRadius_4, 0.5 + cos_4 * 0.5, 0.5 + sin_4 * 0.5, element.scale, 0.0, DIVIDE_4]));
            var f5 = tmp$_14.component1()
            , s5 = tmp$_14.component2();
            var a_5 = 2 * math.PI * 6 / max;
            var cos_5 = Math_0.cos(a_5);
            var sin_5 = Math_0.sin(a_5);
            var DIVIDE_5 = 1.65;
            var glowRadius_5 = 0.75;
            var tmp$_15 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_5 * tmp$_6.width / 2, sin_5 * tmp$_6.height / 2, cos_5 * 0.5 + 0.5, sin_5 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_5 * tmp$_6.width * glowRadius_5, sin_5 * tmp$_6.height * glowRadius_5, 0.5 + cos_5 * 0.5, 0.5 + sin_5 * 0.5, element.scale, 0.0, DIVIDE_5]));
            var f6 = tmp$_15.component1()
            , s6 = tmp$_15.component2();
            var a_6 = 2 * math.PI * 7 / max;
            var cos_6 = Math_0.cos(a_6);
            var sin_6 = Math_0.sin(a_6);
            var DIVIDE_6 = 1.65;
            var glowRadius_6 = 0.75;
            var tmp$_16 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_6 * tmp$_6.width / 2, sin_6 * tmp$_6.height / 2, cos_6 * 0.5 + 0.5, sin_6 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_6 * tmp$_6.width * glowRadius_6, sin_6 * tmp$_6.height * glowRadius_6, 0.5 + cos_6 * 0.5, 0.5 + sin_6 * 0.5, element.scale, 0.0, DIVIDE_6]));
            var f7 = tmp$_16.component1()
            , s7 = tmp$_16.component2();
            var a_7 = 2 * math.PI * 8 / max;
            var cos_7 = Math_0.cos(a_7);
            var sin_7 = Math_0.sin(a_7);
            var DIVIDE_7 = 1.65;
            var glowRadius_7 = 0.75;
            var tmp$_17 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_7 * tmp$_6.width / 2, sin_7 * tmp$_6.height / 2, cos_7 * 0.5 + 0.5, sin_7 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_7 * tmp$_6.width * glowRadius_7, sin_7 * tmp$_6.height * glowRadius_7, 0.5 + cos_7 * 0.5, 0.5 + sin_7 * 0.5, element.scale, 0.0, DIVIDE_7]));
            var f8 = tmp$_17.component1()
            , s8 = tmp$_17.component2();
            var a_8 = 2 * math.PI * 9 / max;
            var cos_8 = Math_0.cos(a_8);
            var sin_8 = Math_0.sin(a_8);
            var DIVIDE_8 = 1.65;
            var glowRadius_8 = 0.75;
            var tmp$_18 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_8 * tmp$_6.width / 2, sin_8 * tmp$_6.height / 2, cos_8 * 0.5 + 0.5, sin_8 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_8 * tmp$_6.width * glowRadius_8, sin_8 * tmp$_6.height * glowRadius_8, 0.5 + cos_8 * 0.5, 0.5 + sin_8 * 0.5, element.scale, 0.0, DIVIDE_8]));
            var f9 = tmp$_18.component1()
            , s9 = tmp$_18.component2();
            var a_9 = 2 * math.PI * 10 / max;
            var cos_9 = Math_0.cos(a_9);
            var sin_9 = Math_0.sin(a_9);
            var DIVIDE_9 = 1.65;
            var glowRadius_9 = 0.75;
            var tmp$_19 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_9 * tmp$_6.width / 2, sin_9 * tmp$_6.height / 2, cos_9 * 0.5 + 0.5, sin_9 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_9 * tmp$_6.width * glowRadius_9, sin_9 * tmp$_6.height * glowRadius_9, 0.5 + cos_9 * 0.5, 0.5 + sin_9 * 0.5, element.scale, 0.0, DIVIDE_9]));
            var f10 = tmp$_19.component1()
            , s10 = tmp$_19.component2();
            var a_10 = 2 * math.PI * 11 / max;
            var cos_10 = Math_0.cos(a_10);
            var sin_10 = Math_0.sin(a_10);
            var DIVIDE_10 = 1.65;
            var glowRadius_10 = 0.75;
            var tmp$_20 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_10 * tmp$_6.width / 2, sin_10 * tmp$_6.height / 2, cos_10 * 0.5 + 0.5, sin_10 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_10 * tmp$_6.width * glowRadius_10, sin_10 * tmp$_6.height * glowRadius_10, 0.5 + cos_10 * 0.5, 0.5 + sin_10 * 0.5, element.scale, 0.0, DIVIDE_10]));
            var f11 = tmp$_20.component1()
            , s11 = tmp$_20.component2();
            var a_11 = 2 * math.PI * 12 / max;
            var cos_11 = Math_0.cos(a_11);
            var sin_11 = Math_0.sin(a_11);
            var DIVIDE_11 = 1.65;
            var glowRadius_11 = 0.75;
            var tmp$_21 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_11 * tmp$_6.width / 2, sin_11 * tmp$_6.height / 2, cos_11 * 0.5 + 0.5, sin_11 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_11 * tmp$_6.width * glowRadius_11, sin_11 * tmp$_6.height * glowRadius_11, 0.5 + cos_11 * 0.5, 0.5 + sin_11 * 0.5, element.scale, 0.0, DIVIDE_11]));
            var f12 = tmp$_21.component1()
            , s12 = tmp$_21.component2();
            var a_12 = 2 * math.PI * 13 / max;
            var cos_12 = Math_0.cos(a_12);
            var sin_12 = Math_0.sin(a_12);
            var DIVIDE_12 = 1.65;
            var glowRadius_12 = 0.75;
            var tmp$_22 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_12 * tmp$_6.width / 2, sin_12 * tmp$_6.height / 2, cos_12 * 0.5 + 0.5, sin_12 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_12 * tmp$_6.width * glowRadius_12, sin_12 * tmp$_6.height * glowRadius_12, 0.5 + cos_12 * 0.5, 0.5 + sin_12 * 0.5, element.scale, 0.0, DIVIDE_12]));
            var f13 = tmp$_22.component1()
            , s13 = tmp$_22.component2();
            var a_13 = 2 * math.PI * 14 / max;
            var cos_13 = Math_0.cos(a_13);
            var sin_13 = Math_0.sin(a_13);
            var DIVIDE_13 = 1.65;
            var glowRadius_13 = 0.75;
            var tmp$_23 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_13 * tmp$_6.width / 2, sin_13 * tmp$_6.height / 2, cos_13 * 0.5 + 0.5, sin_13 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_13 * tmp$_6.width * glowRadius_13, sin_13 * tmp$_6.height * glowRadius_13, 0.5 + cos_13 * 0.5, 0.5 + sin_13 * 0.5, element.scale, 0.0, DIVIDE_13]));
            var f14 = tmp$_23.component1()
            , s14 = tmp$_23.component2();
            var a_14 = 2 * math.PI * 15 / max;
            var cos_14 = Math_0.cos(a_14);
            var sin_14 = Math_0.sin(a_14);
            var DIVIDE_14 = 1.65;
            var glowRadius_14 = 0.75;
            var tmp$_24 = new PerformanceTest$CircleFanStrip(new Float32Array([element.x, element.y, cos_14 * tmp$_6.width / 2, sin_14 * tmp$_6.height / 2, cos_14 * 0.5 + 0.5, sin_14 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_14 * tmp$_6.width * glowRadius_14, sin_14 * tmp$_6.height * glowRadius_14, 0.5 + cos_14 * 0.5, 0.5 + sin_14 * 0.5, element.scale, 0.0, DIVIDE_14]));
            var f15 = tmp$_24.component1()
            , s15 = tmp$_24.component2();
            if (package$performance.DYNAMIC_BLEND)
              this.gl.blendFunc(this.srcFactor, this.dstFactor);
            if (package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            var mode = Mode_1.TRIANGLE_FAN;
            var allArgs = Kotlin.primitiveArrayConcat(center, f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f0);
            var tmp$_25;
            var mesh = true ? Kotlin.isType(tmp$_25 = allArgs, Float32Array_0) ? tmp$_25 : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
            var message = 'allFloatArgsCount<=0';
            if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda(allArgs.length)())
              package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message + ', conditionFunction: ' + PerformanceTest$render$lambda(allArgs.length));
            var message_0 = 'Number of vertices not a multiple of the attribute block size!';
            if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda_0(allArgs.length, this)())
              package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_0 + ', conditionFunction: ' + PerformanceTest$render$lambda_0(allArgs.length, this));
            this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
            if (package$performance.DYNAMIC_TEXTURE)
              this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver_2);
            if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
            this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
            if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(null);
            if (package$performance.DYNAMIC_BLEND)
              this.gl.blendFunc(this.srcFactorGlow, this.dstFactorGlow);
            if (package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram2);
            var mode_0 = Mode_1.TRIANGLE_STRIP;
            var allArgs_0 = Kotlin.primitiveArrayConcat(f0, s0, f1, s1, f2, s2, f3, s3, f4, s4, f5, s5, f6, s6, f7, s7, f8, s8, f9, s9, f10, s10, f11, s11, f12, s12, f13, s13, f14, s14, f15, s15, f0, s0);
            var tmp$_26;
            var mesh_0 = true ? Kotlin.isType(tmp$_26 = allArgs_0, Float32Array_0) ? tmp$_26 : throwCCE() : new Float32Array_0(toTypedArray(allArgs_0));
            var message_1 = 'allFloatArgsCount<=0';
            if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda(allArgs_0.length)())
              package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_1 + ', conditionFunction: ' + PerformanceTest$render$lambda(allArgs_0.length));
            var message_2 = 'Number of vertices not a multiple of the attribute block size!';
            if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda_0(allArgs_0.length, this)())
              package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_2 + ', conditionFunction: ' + PerformanceTest$render$lambda_0(allArgs_0.length, this));
            this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
            if (package$performance.DYNAMIC_TEXTURE)
              this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver_2);
            if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_0, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
            this.gl.drawArrays(mode_0.glMode, 0, allArgs_0.length / this.verticesBlockSize | 0);
            if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(null);
          }
          if (false) {
            if ((tmp$_7 = cache.texture) != null) {
              var $receiver_3 = tmp$_7.glTexture;
              var mode_1 = Mode$TRIANGLE_getInstance_0();
              var allArgs_1 = new Float32Array([element.x, element.y, tmp$_7.left, tmp$_7.bottom, 0.0, 0.0, element.scale, 0.0, element.x, element.y, tmp$_7.left, tmp$_7.top, 0.0, 1.0, element.scale, 0.0, element.x, element.y, tmp$_7.right, tmp$_7.top, 1.0, 1.0, element.scale, 0.0, element.x, element.y, tmp$_7.right, tmp$_7.top, 1.0, 1.0, element.scale, 0.0, element.x, element.y, tmp$_7.right, tmp$_7.bottom, 1.0, 0.0, element.scale, 0.0, element.x, element.y, tmp$_7.left, tmp$_7.bottom, 0.0, 0.0, element.scale, 0.0]);
              var tmp$_27;
              var mesh_1 = true ? Kotlin.isType(tmp$_27 = allArgs_1, Float32Array_0) ? tmp$_27 : throwCCE() : new Float32Array_0(toTypedArray(allArgs_1));
              var message_3 = 'allFloatArgsCount<=0';
              if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda_1(allArgs_1.length)())
                package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_3 + ', conditionFunction: ' + PerformanceTest$render$lambda_1(allArgs_1.length));
              var message_4 = 'Number of vertices not a multiple of the attribute block size!';
              if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda_2(allArgs_1.length, this)())
                package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_4 + ', conditionFunction: ' + PerformanceTest$render$lambda_2(allArgs_1.length, this));
              this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
              if (package$performance.DYNAMIC_TEXTURE)
                this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver_3);
              if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
                this.gl.useProgram(this.shaderProgram);
              this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_1, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
              this.gl.drawArrays(mode_1.glMode, 0, allArgs_1.length / this.verticesBlockSize | 0);
              if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
                this.gl.useProgram(null);
            }
          }
        }
        if (false) {
          if ((tmp$_1 = (tmp$_0 = (tmp$ = this.imgCache_0.get_11rb$(imgData)) != null ? tmp$.texture : null) != null ? tmp$_0.glTexture : null) != null) {
            var mode_2 = Mode$TRIANGLE_getInstance_0();
            var allArgs_2 = new Float32Array([123.45]);
            var tmp$_28;
            var mesh_2 = true ? Kotlin.isType(tmp$_28 = allArgs_2, Float32Array_0) ? tmp$_28 : throwCCE() : new Float32Array_0(toTypedArray(allArgs_2));
            var message_5 = 'allFloatArgsCount<=0';
            if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda_1(allArgs_2.length)())
              package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_5 + ', conditionFunction: ' + PerformanceTest$render$lambda_1(allArgs_2.length));
            var message_6 = 'Number of vertices not a multiple of the attribute block size!';
            if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda_2(allArgs_2.length, this)())
              package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_6 + ', conditionFunction: ' + PerformanceTest$render$lambda_2(allArgs_2.length, this));
            this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
            if (package$performance.DYNAMIC_TEXTURE)
              this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, tmp$_1);
            if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_2, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
            this.gl.drawArrays(mode_2.glMode, 0, allArgs_2.length / this.verticesBlockSize | 0);
            if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(null);
          }
        }
        if (false) {
          var MAX_MESH = 2000;
          var mesh_3 = new Float32Array(MAX_MESH - MAX_MESH % (this.verticesBlockSize * 3 | 0) | 0);
          var argsInVertixCount = 8;
          var verticesCount = 6;
          var objectsCount = 100;
          var floatArgscount = Kotlin.imul(Kotlin.imul(objectsCount, verticesCount), argsInVertixCount);
          var $receiver_4 = this.imgCache_0.values;
          var destination = ArrayList_init();
          var tmp$_29;
          tmp$_29 = $receiver_4.iterator();
          while (tmp$_29.hasNext()) {
            var element_0 = tmp$_29.next();
            var tmp$_0_0;
            if ((tmp$_0_0 = element_0.texture) != null) {
              destination.add_11rb$(tmp$_0_0);
            }
          }
          var tmp$_30;
          tmp$_30 = destination.iterator();
          while (tmp$_30.hasNext()) {
            var element_1 = tmp$_30.next();
            var mode_3 = Mode$TRIANGLE_getInstance_0();
            var glTexture = element_1.glTexture;
            var message_7 = 'allFloatArgsCount<=0';
            if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda_3(floatArgscount)())
              package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_7 + ', conditionFunction: ' + PerformanceTest$render$lambda_3(floatArgscount));
            var message_8 = 'Number of vertices not a multiple of the attribute block size!';
            if (package$performance.DEBUG_ERROR && PerformanceTest$render$lambda_4(floatArgscount, this)())
              package$lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_8 + ', conditionFunction: ' + PerformanceTest$render$lambda_4(floatArgscount, this));
            this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
            if (package$performance.DYNAMIC_TEXTURE)
              this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, glTexture);
            if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_3, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
            this.gl.drawArrays(mode_3.glMode, 0, floatArgscount / this.verticesBlockSize | 0);
            if (package$performance.OLD && package$performance.DYNAMIC_SHADER)
              this.gl.useProgram(null);
          }
        }
        window.requestAnimationFrame(getCallableRef('gameLoop', function ($receiver, милисекундСоСтараПлюсБездействие) {
          return $receiver.gameLoop_0(милисекундСоСтараПлюсБездействие), Unit;
        }.bind(null, this)));
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          $this.log.error_nez7ok$('save invoke fail', e);
          null;
          break saveInvoke_klfg04$break;
        }
         else
          throw e;
      }
    }
     while (false);
  };
  PerformanceTest.prototype.angle_vux9f0$ = defineInlineFunction('game.performance.PerformanceTest.angle_vux9f0$', wrapFunction(function () {
    var math = Kotlin.kotlin.math;
    return function (i, max) {
      return 2 * math.PI * i / max;
    };
  }));
  function PerformanceTest$CircleFanStrip(fan, strip) {
    this.fan = fan;
    this.strip = strip;
  }
  PerformanceTest$CircleFanStrip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CircleFanStrip',
    interfaces: []
  };
  PerformanceTest$CircleFanStrip.prototype.component1 = function () {
    return this.fan;
  };
  PerformanceTest$CircleFanStrip.prototype.component2 = function () {
    return this.strip;
  };
  PerformanceTest$CircleFanStrip.prototype.copy_7u45pk$ = function (fan, strip) {
    return new PerformanceTest$CircleFanStrip(fan === void 0 ? this.fan : fan, strip === void 0 ? this.strip : strip);
  };
  PerformanceTest$CircleFanStrip.prototype.toString = function () {
    return 'CircleFanStrip(fan=' + Kotlin.toString(this.fan) + (', strip=' + Kotlin.toString(this.strip)) + ')';
  };
  PerformanceTest$CircleFanStrip.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fan) | 0;
    result = result * 31 + Kotlin.hashCode(this.strip) | 0;
    return result;
  };
  PerformanceTest$CircleFanStrip.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fan, other.fan) && Kotlin.equals(this.strip, other.strip)))));
  };
  PerformanceTest.prototype.renderCircle16_7jy3hc$ = defineInlineFunction('game.performance.PerformanceTest.renderCircle16_7jy3hc$', wrapFunction(function () {
    var performance = _.performance;
    var Mode = _.performance.Mode;
    var math = Kotlin.kotlin.math;
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    function PerformanceTest$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function PerformanceTest$render$lambda_0(closure$allFloatArgsCount, this$PerformanceTest) {
      return function () {
        return closure$allFloatArgsCount % this$PerformanceTest.verticesBlockSize !== 0;
      };
    }
    var lib = _.com.riseofcat.lib;
    return function ($receiver, center, fan) {
      var max = 16;
      var tmp$ = fan(2 * math.PI * 0 / max);
      var f0 = tmp$.component1()
      , s0 = tmp$.component2();
      var tmp$_0 = fan(2 * math.PI * 1 / max);
      var f1 = tmp$_0.component1()
      , s1 = tmp$_0.component2();
      var tmp$_1 = fan(2 * math.PI * 2 / max);
      var f2 = tmp$_1.component1()
      , s2 = tmp$_1.component2();
      var tmp$_2 = fan(2 * math.PI * 3 / max);
      var f3 = tmp$_2.component1()
      , s3 = tmp$_2.component2();
      var tmp$_3 = fan(2 * math.PI * 4 / max);
      var f4 = tmp$_3.component1()
      , s4 = tmp$_3.component2();
      var tmp$_4 = fan(2 * math.PI * 5 / max);
      var f5 = tmp$_4.component1()
      , s5 = tmp$_4.component2();
      var tmp$_5 = fan(2 * math.PI * 6 / max);
      var f6 = tmp$_5.component1()
      , s6 = tmp$_5.component2();
      var tmp$_6 = fan(2 * math.PI * 7 / max);
      var f7 = tmp$_6.component1()
      , s7 = tmp$_6.component2();
      var tmp$_7 = fan(2 * math.PI * 8 / max);
      var f8 = tmp$_7.component1()
      , s8 = tmp$_7.component2();
      var tmp$_8 = fan(2 * math.PI * 9 / max);
      var f9 = tmp$_8.component1()
      , s9 = tmp$_8.component2();
      var tmp$_9 = fan(2 * math.PI * 10 / max);
      var f10 = tmp$_9.component1()
      , s10 = tmp$_9.component2();
      var tmp$_10 = fan(2 * math.PI * 11 / max);
      var f11 = tmp$_10.component1()
      , s11 = tmp$_10.component2();
      var tmp$_11 = fan(2 * math.PI * 12 / max);
      var f12 = tmp$_11.component1()
      , s12 = tmp$_11.component2();
      var tmp$_12 = fan(2 * math.PI * 13 / max);
      var f13 = tmp$_12.component1()
      , s13 = tmp$_12.component2();
      var tmp$_13 = fan(2 * math.PI * 14 / max);
      var f14 = tmp$_13.component1()
      , s14 = tmp$_13.component2();
      var tmp$_14 = fan(2 * math.PI * 15 / max);
      var f15 = tmp$_14.component1()
      , s15 = tmp$_14.component2();
      if (performance.DYNAMIC_BLEND)
        this.gl.blendFunc(this.srcFactor, this.dstFactor);
      if (performance.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      var mode = Mode.TRIANGLE_FAN;
      var allArgs = Kotlin.primitiveArrayConcat(center, f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f0);
      var tmp$_15;
      var mesh = true ? Kotlin.isType(tmp$_15 = allArgs, Float32Array_0) ? tmp$_15 : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var message = 'allFloatArgsCount<=0';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda(allArgs.length)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message + ', conditionFunction: ' + PerformanceTest$render$lambda(allArgs.length));
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda_0(allArgs.length, this)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_0 + ', conditionFunction: ' + PerformanceTest$render$lambda_0(allArgs.length, this));
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (performance.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(null);
      if (performance.DYNAMIC_BLEND)
        this.gl.blendFunc(this.srcFactorGlow, this.dstFactorGlow);
      if (performance.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram2);
      var mode_0 = Mode.TRIANGLE_STRIP;
      var allArgs_0 = Kotlin.primitiveArrayConcat(f0, s0, f1, s1, f2, s2, f3, s3, f4, s4, f5, s5, f6, s6, f7, s7, f8, s8, f9, s9, f10, s10, f11, s11, f12, s12, f13, s13, f14, s14, f15, s15, f0, s0);
      var tmp$_16;
      var mesh_0 = true ? Kotlin.isType(tmp$_16 = allArgs_0, Float32Array_0) ? tmp$_16 : throwCCE() : new Float32Array_0(toTypedArray(allArgs_0));
      var message_1 = 'allFloatArgsCount<=0';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda(allArgs_0.length)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_1 + ', conditionFunction: ' + PerformanceTest$render$lambda(allArgs_0.length));
      var message_2 = 'Number of vertices not a multiple of the attribute block size!';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda_0(allArgs_0.length, this)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_2 + ', conditionFunction: ' + PerformanceTest$render$lambda_0(allArgs_0.length, this));
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (performance.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_0, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode_0.glMode, 0, allArgs_0.length / this.verticesBlockSize | 0);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
  PerformanceTest.prototype.render_nm5t9v$ = defineInlineFunction('game.performance.PerformanceTest.render_nm5t9v$', wrapFunction(function () {
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    var performance = _.performance;
    function PerformanceTest$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function PerformanceTest$render$lambda_0(closure$allFloatArgsCount, this$PerformanceTest) {
      return function () {
        return closure$allFloatArgsCount % this$PerformanceTest.verticesBlockSize !== 0;
      };
    }
    var lib = _.com.riseofcat.lib;
    return function ($receiver, mode, allArgs) {
      var tmp$;
      var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var message = 'allFloatArgsCount<=0';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda(allArgs.length)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message + ', conditionFunction: ' + PerformanceTest$render$lambda(allArgs.length));
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda_0(allArgs.length, this)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_0 + ', conditionFunction: ' + PerformanceTest$render$lambda_0(allArgs.length, this));
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (performance.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
  PerformanceTest.prototype.render_p28889$ = defineInlineFunction('game.performance.PerformanceTest.render_p28889$', wrapFunction(function () {
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    var performance = _.performance;
    function PerformanceTest$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function PerformanceTest$render$lambda_0(closure$allFloatArgsCount, this$PerformanceTest) {
      return function () {
        return closure$allFloatArgsCount % this$PerformanceTest.verticesBlockSize !== 0;
      };
    }
    var lib = _.com.riseofcat.lib;
    return function ($receiver, mode, allArgs) {
      var tmp$;
      var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var message = 'allFloatArgsCount<=0';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda(allArgs.length)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message + ', conditionFunction: ' + PerformanceTest$render$lambda(allArgs.length));
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda_0(allArgs.length, this)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_0 + ', conditionFunction: ' + PerformanceTest$render$lambda_0(allArgs.length, this));
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (performance.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
  PerformanceTest.prototype.vert_su1nry$ = defineInlineFunction('game.performance.PerformanceTest.vert_su1nry$', wrapFunction(function () {
    var toList = Kotlin.kotlin.collections.toList_rjqryz$;
    return function ($receiver, args) {
      return $receiver.addAll_brywnq$(toList(args));
    };
  }));
  PerformanceTest.prototype.render_ilrnbh$ = defineInlineFunction('game.performance.PerformanceTest.render_ilrnbh$', wrapFunction(function () {
    var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    var performance = _.performance;
    function PerformanceTest$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function PerformanceTest$render$lambda_0(closure$allFloatArgsCount, this$PerformanceTest) {
      return function () {
        return closure$allFloatArgsCount % this$PerformanceTest.verticesBlockSize !== 0;
      };
    }
    var lib = _.com.riseofcat.lib;
    return function ($receiver, mode, lambda) {
      var $receiver_0 = ArrayList_init();
      lambda($receiver_0);
      var allArgs = toFloatArray($receiver_0);
      var tmp$;
      var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var message = 'allFloatArgsCount<=0';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda(allArgs.length)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message + ', conditionFunction: ' + PerformanceTest$render$lambda(allArgs.length));
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda_0(allArgs.length, this)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_0 + ', conditionFunction: ' + PerformanceTest$render$lambda_0(allArgs.length, this));
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (performance.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
  PerformanceTest.prototype.render_lzgulz$ = defineInlineFunction('game.performance.PerformanceTest.render_lzgulz$', wrapFunction(function () {
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    var performance = _.performance;
    function PerformanceTest$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function PerformanceTest$render$lambda_0(closure$allFloatArgsCount, this$PerformanceTest) {
      return function () {
        return closure$allFloatArgsCount % this$PerformanceTest.verticesBlockSize !== 0;
      };
    }
    var lib = _.com.riseofcat.lib;
    return function (mode, mesh, glTexture, allFloatArgsCount) {
      var message = 'allFloatArgsCount<=0';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda(allFloatArgsCount)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message + ', conditionFunction: ' + PerformanceTest$render$lambda(allFloatArgsCount));
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (performance.DEBUG_ERROR && PerformanceTest$render$lambda_0(allFloatArgsCount, this)())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message_0 + ', conditionFunction: ' + PerformanceTest$render$lambda_0(allFloatArgsCount, this));
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (performance.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, glTexture);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allFloatArgsCount / this.verticesBlockSize | 0);
      if (performance.OLD && performance.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
  function PerformanceTest_init$lambda(this$PerformanceTest) {
    return function (it) {
      this$PerformanceTest.resize_0();
      return Unit;
    };
  }
  function PerformanceTest_init$lambda_0(this$PerformanceTest) {
    return function (it) {
      this$PerformanceTest.resize_0();
      return Unit;
    };
  }
  function PerformanceTest_init$lambda_1(this$PerformanceTest) {
    return function (it) {
      var tmp$;
      this$PerformanceTest.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, (tmp$ = this$PerformanceTest.gl.createBuffer()) != null ? tmp$ : lib.log.fatalError_nez7ok$('Unable to create webgl buffer!'));
      this$PerformanceTest.gl.useProgram(this$PerformanceTest.shaderProgram);
      var $receiver = this$PerformanceTest.attributes;
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var this$PerformanceTest_0 = this$PerformanceTest;
        this$PerformanceTest_0.gl.enableVertexAttribArray(element.location);
        this$PerformanceTest_0.gl.vertexAttribPointer(element.location, element.attr.numElements, WebGLRenderingContext.FLOAT, false, this$PerformanceTest_0.verticesBlockSize * 4 | 0, element.offset * 4 | 0);
        if (false)
          this$PerformanceTest_0.gl.disableVertexAttribArray(element.location);
      }
      if (false)
        this$PerformanceTest.gl.uniform1i(this$PerformanceTest.gl.getUniformLocation(this$PerformanceTest.shaderProgram, 'u_sampler'), 0);
      this$PerformanceTest.gl.uniformMatrix4fv(this$PerformanceTest.gl.getUniformLocation(this$PerformanceTest.shaderProgram, 'u_projectionView'), false, (new TextureData_0(this$PerformanceTest.view.projectionMatrix)).vMatrix.toFloat32Arr());
      this$PerformanceTest.gl.uniform1i(this$PerformanceTest.gl.getUniformLocation(this$PerformanceTest.shaderProgram, 'u_test_array_size'), 5);
      this$PerformanceTest.gl.uniform1fv(this$PerformanceTest.gl.getUniformLocation(this$PerformanceTest.shaderProgram, 'u_arr[0]'), [0.1, 0.1]);
      if (DYNAMIC_SHADER) {
        this$PerformanceTest.gl.useProgram(this$PerformanceTest.shaderProgram2);
        var $receiver_0 = this$PerformanceTest.attributes;
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          var this$PerformanceTest_1 = this$PerformanceTest;
          this$PerformanceTest_1.gl.enableVertexAttribArray(element_0.location);
          this$PerformanceTest_1.gl.vertexAttribPointer(element_0.location, element_0.attr.numElements, WebGLRenderingContext.FLOAT, false, this$PerformanceTest_1.verticesBlockSize * 4 | 0, element_0.offset * 4 | 0);
          if (false)
            this$PerformanceTest_1.gl.disableVertexAttribArray(element_0.location);
        }
        if (false)
          this$PerformanceTest.gl.uniform1i(this$PerformanceTest.gl.getUniformLocation(this$PerformanceTest.shaderProgram2, 'u_sampler'), 0);
        this$PerformanceTest.gl.uniformMatrix4fv(this$PerformanceTest.gl.getUniformLocation(this$PerformanceTest.shaderProgram2, 'u_projectionView'), false, (new TextureData_0(this$PerformanceTest.view.projectionMatrix)).vMatrix.toFloat32Arr());
        this$PerformanceTest.gl.uniform1i(this$PerformanceTest.gl.getUniformLocation(this$PerformanceTest.shaderProgram2, 'u_test_array_size'), 5);
        this$PerformanceTest.gl.uniform1fv(this$PerformanceTest.gl.getUniformLocation(this$PerformanceTest.shaderProgram2, 'u_arr[0]'), [0.1, 0.1]);
      }
      this$PerformanceTest.gl.enable(WebGLRenderingContext.BLEND);
      if (!DYNAMIC_BLEND)
        this$PerformanceTest.gl.blendFunc(this$PerformanceTest.srcFactor, this$PerformanceTest.dstFactor);
      this$PerformanceTest.gameLoop_0(it);
      return Unit;
    };
  }
  function PerformanceTest_init$lambda$screenToGameCoordX($receiver, screenX) {
    return (screenX - $receiver.borderLeft) * $receiver.gameWidth / $receiver.windowWidth;
  }
  function PerformanceTest_init$lambda$screenToGameCoordY($receiver, screenY) {
    return $receiver.gameHeight - (screenY - $receiver.borderTop) * $receiver.gameHeight / $receiver.windowHeight;
  }
  function PerformanceTest_init$lambda_2(this$PerformanceTest) {
    return function (event) {
      if (Kotlin.isType(event, MouseEvent)) {
        var screenToGameCoordX = PerformanceTest_init$lambda$screenToGameCoordX;
        var screenToGameCoordY = PerformanceTest_init$lambda$screenToGameCoordY;
        this$PerformanceTest.mouseX = screenToGameCoordX(this$PerformanceTest.view, getX(event, this$PerformanceTest.html.container));
        this$PerformanceTest.mouseY = screenToGameCoordY(this$PerformanceTest.view, getY(event, this$PerformanceTest.html.container));
      }
    };
  }
  function PerformanceTest_init$lambda_3(event) {
    if (false)
      lib.log.fatalError_nez7ok$('document.onclick');
  }
  function PerformanceTest_init$lambda_4(this$PerformanceTest) {
    return function (event) {
      if (Kotlin.isType(event, KeyboardEvent)) {
        var code = event.keyCode;
        var key = PerformanceTest$Key$Companion_getInstance().getByCode_za3lpa$(code);
        if (equals(key, PerformanceTest$Key$Q_getInstance()) || equals(key, PerformanceTest$Key$W_getInstance()) || equals(key, PerformanceTest$Key$E_getInstance()) || equals(key, PerformanceTest$Key$R_getInstance()))
          this$PerformanceTest.modeKey_0 = key;
        else if ((key != null ? key.number : null) === true) {
          var result = listOf([WebGLRenderingContext.SRC_COLOR, WebGLRenderingContext.ONE_MINUS_SRC_COLOR, WebGLRenderingContext.DST_COLOR, WebGLRenderingContext.ONE_MINUS_DST_COLOR, WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA, WebGLRenderingContext.DST_ALPHA, WebGLRenderingContext.ONE_MINUS_DST_ALPHA, WebGLRenderingContext.SRC_ALPHA_SATURATE]).get_za3lpa$(key.numValue - 1 | 0);
          switch (this$PerformanceTest.modeKey_0.name) {
            case 'Q':
              this$PerformanceTest.srcFactor = result;
              break;
            case 'W':
              this$PerformanceTest.dstFactor = result;
              break;
            case 'E':
              this$PerformanceTest.srcFactorGlow = result;
              break;
            case 'R':
              this$PerformanceTest.dstFactorGlow = result;
              break;
          }
        }
      }
    };
  }
  PerformanceTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PerformanceTest',
    interfaces: []
  };
  function Mode_1(name, ordinal, glMode) {
    Enum.call(this);
    this.glMode = glMode;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Mode_initFields_1() {
    Mode_initFields_1 = function () {
    };
    Mode$TRIANGLE_instance_0 = new Mode_1('TRIANGLE', 0, WebGLRenderingContext.TRIANGLES);
    Mode$TRIANGLE_FAN_instance_0 = new Mode_1('TRIANGLE_FAN', 1, WebGLRenderingContext.TRIANGLE_FAN);
    Mode$TRIANGLE_STRIP_instance_0 = new Mode_1('TRIANGLE_STRIP', 2, WebGLRenderingContext.TRIANGLE_STRIP);
  }
  var Mode$TRIANGLE_instance_0;
  function Mode$TRIANGLE_getInstance_0() {
    Mode_initFields_1();
    return Mode$TRIANGLE_instance_0;
  }
  var Mode$TRIANGLE_FAN_instance_0;
  function Mode$TRIANGLE_FAN_getInstance_0() {
    Mode_initFields_1();
    return Mode$TRIANGLE_FAN_instance_0;
  }
  var Mode$TRIANGLE_STRIP_instance_0;
  function Mode$TRIANGLE_STRIP_getInstance_0() {
    Mode_initFields_1();
    return Mode$TRIANGLE_STRIP_instance_0;
  }
  Mode_1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function Mode$values_1() {
    return [Mode$TRIANGLE_getInstance_0(), Mode$TRIANGLE_FAN_getInstance_0(), Mode$TRIANGLE_STRIP_getInstance_0()];
  }
  Mode_1.values = Mode$values_1;
  function Mode$valueOf_1(name) {
    switch (name) {
      case 'TRIANGLE':
        return Mode$TRIANGLE_getInstance_0();
      case 'TRIANGLE_FAN':
        return Mode$TRIANGLE_FAN_getInstance_0();
      case 'TRIANGLE_STRIP':
        return Mode$TRIANGLE_STRIP_getInstance_0();
      default:throwISE('No enum constant performance.Mode.' + name);
    }
  }
  Mode_1.valueOf_61zpoe$ = Mode$valueOf_1;
  var debugError = defineInlineFunction('game.performance.debugError_uq85nf$', wrapFunction(function () {
    var performance = _.performance;
    var lib = _.com.riseofcat.lib;
    return function (message, condition) {
      if (performance.DEBUG_ERROR && condition())
        lib.lib.log.fatalError_nez7ok$('WebGl error: ' + message + ', conditionFunction: ' + condition);
    };
  }));
  function mem_0(v) {
    return v + ' ' + performance.memory[v] / 1024 / 1024;
  }
  var FULLSCREEN_VERTICES;
  function toVertives($receiver) {
    var result = new Float32Array($receiver.length);
    result.set($receiver, 0);
    return result;
  }
  function callApply($receiver, functionName, args) {
    var tmp$;
    return (tmp$ = $receiver[functionName]) != null ? tmp$.apply($receiver, args) : null;
  }
  function getX($receiver, element) {
    return $receiver.pageX - element.getBoundingClientRect().left;
  }
  function getY($receiver, element) {
    return $receiver.pageY - element.getBoundingClientRect().top;
  }
  function createElement($receiver, localName, kClass) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.createElement(localName), Any) ? tmp$ : throwCCE();
  }
  function createCanvas($receiver, style) {
    var $receiver_0 = createElement($receiver, 'canvas', getKClass(HTMLCanvasElement));
    $receiver_0.setAttribute('style', style);
    return $receiver_0;
  }
  function min_0($receiver, other) {
    return Math_0.min($receiver, other);
  }
  function max_0($receiver, other) {
    return Math_0.max($receiver, other);
  }
  function min_1($receiver, other) {
    return Math_0.min($receiver, other);
  }
  function max_1($receiver, other) {
    return Math_0.max($receiver, other);
  }
  function ClientModel(ping, slowpoke) {
    if (slowpoke === void 0)
      slowpoke = false;
    this.ping = ping;
    this.slowpoke = slowpoke;
    this.FREEZE_TICKS = Tick_init_0(div_2(new Duration(Kotlin.Long.fromInt(1000)), GameConst_getInstance().UPDATE).add(Kotlin.Long.fromInt(1)));
    this.CACHE = true;
    this.actions_0 = Common$Companion_getInstance().createConcurrentList_287e2$();
    this.myLocal_0 = ArrayList_init();
    this.stable_0 = new ClientModel$StateWrapper(this, new State());
    this.welcome = null;
    this.recommendendLatency = null;
    this.ping.connect_oh3mgy$(ClientModel_init$lambda(this));
    this.start = lib.time;
    this.moves = 0;
    this.cache_0 = null;
  }
  Object.defineProperty(ClientModel.prototype, 'playerName', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = this.welcome) != null ? tmp$.id : null) != null ? 'Player ' + tmp$_0 : null) != null ? tmp$_1 : 'Wait connection...';
    }
  });
  Object.defineProperty(ClientModel.prototype, 'latency', {
    get: function () {
      var tmp$;
      return (tmp$ = this.recommendendLatency) != null ? tmp$ : new Duration(Kotlin.Long.fromInt(150));
    }
  });
  Object.defineProperty(ClientModel.prototype, 'realtimeTick', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.welcome) != null ? Tick_init_0(div_2(minus(this.ping.serverTime, tmp$.roomCreate), GameConst_getInstance().UPDATE)) : null) != null ? tmp$_0 : new Tick(0);
    }
  });
  ClientModel.prototype.calcDisplayState = function () {
    if (this.slowpoke)
      return this.stable_0._state;
    return this.getState_0(this.realtimeTick);
  };
  ClientModel.prototype.ready = function () {
    return this.welcome != null;
  };
  Object.defineProperty(ClientModel.prototype, 'myCar', {
    get: function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = (tmp$ = this.calcDisplayState()) != null ? tmp$.cars : null) != null) {
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$_2;
          tmp$_2 = tmp$_0.iterator();
          while (tmp$_2.hasNext()) {
            var element = tmp$_2.next();
            var tmp$_3;
            if (equals(element.owner, (tmp$_3 = this.welcome) != null ? tmp$_3.id : null)) {
              firstOrNull$result = element;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        tmp$_1 = firstOrNull$result;
      }
       else
        tmp$_1 = null;
      return tmp$_1;
    }
  });
  ClientModel.prototype.move_llbgdp$ = function (direction) {
    if (!this.ready())
      return;
    var t = plus_8(this.realtimeTick, Tick_init_0(div_2(this.latency, GameConst_getInstance().UPDATE).add(Kotlin.Long.fromInt(1))));
    var a = new ClientPayload$ClientAction(t);
    a.moveDirection = direction;
    var tmp$;
    (tmp$ = this.welcome) != null && this.myLocal_0.add_11rb$(new AllCommand(t, tmp$.id, void 0, new MoveCommand(tmp$.id, direction)));
    this.ping.say_11rc$(new ClientPayload(mutableListOf([a])));
  };
  ClientModel.prototype.newCar = function () {
    if (!this.ready())
      return;
    var t = plus_8(this.realtimeTick, Tick_init_0(div_2(this.latency, GameConst_getInstance().UPDATE).add(Kotlin.Long.fromInt(1))));
    var a = new ClientPayload$ClientAction(t);
    a.newCar = true;
    var tmp$;
    (tmp$ = this.welcome) != null && this.myLocal_0.add_11rb$(new AllCommand(t, tmp$.id, new NewCarCommand(tmp$.id)));
    this.ping.say_11rc$(new ClientPayload(mutableListOf([a])));
  };
  ClientModel.prototype.dispose = function () {
    this.ping.close();
  };
  ClientModel.prototype.clearCache_0 = function (tick) {
    if (tick === void 0)
      tick = new Tick(0);
    var tmp$;
    if ((tmp$ = this.cache_0) != null) {
      if (tick.compareTo_11rb$(tmp$._state.tick) <= 0)
        this.cache_0 = null;
    }
  };
  ClientModel.prototype.saveCache_0 = function (value) {
    this.cache_0 = value;
  };
  ClientModel.prototype.getNearestCache_0 = function (tick) {
    return this.CACHE ? this._getNearestCache_0(tick) : null;
  };
  ClientModel.prototype._getNearestCache_0 = function (tick) {
    var tmp$;
    return (tmp$ = this.cache_0) != null ? plus_8(tick, this.FREEZE_TICKS).compareTo_11rb$(tmp$._state.tick) >= 0 ? tmp$ : null : null;
  };
  ClientModel.prototype.getState_0 = function (tick) {
    var result = {v: this.getNearestCache_0(tick)};
    if (result.v == null) {
      result.v = ClientModel$ClientModel$StateWrapper_init(this, this.stable_0);
      this.saveCache_0(ensureNotNull(result.v));
    }
    ensureNotNull(result.v).tick_egc0oz$(tick);
    return ensureNotNull(result.v)._state;
  };
  function ClientModel$StateWrapper($outer, state) {
    this.$outer = $outer;
    this._state = deepCopy_0(state);
  }
  ClientModel$StateWrapper.prototype.tick_egc0oz$ = function (targetTick) {
    while (this._state.tick.compareTo_11rb$(targetTick) < 0) {
      var $receiver = plus_0(this.$outer.actions_0, this.$outer.myLocal_0);
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        if ((tmp$_0 = element.tick) != null ? tmp$_0.equals(this._state.tick) : null)
          destination.add_11rb$(element);
      }
      var filtered = destination;
      act(this._state, filtered.iterator());
      tick(this._state);
    }
  };
  ClientModel$StateWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateWrapper',
    interfaces: []
  };
  function ClientModel$ClientModel$StateWrapper_init($outer, obj, $this) {
    $this = $this || Object.create(ClientModel$StateWrapper.prototype);
    ClientModel$StateWrapper.call($this, $outer, obj._state);
    return $this;
  }
  function ClientModel_init$lambda$lambda$lambda(this$ClientModel) {
    return function (it) {
      return it.tick.compareTo_11rb$(this$ClientModel.stable_0._state.tick) < 0;
    };
  }
  function ClientModel_init$lambda$lambda$lambda_0(it) {
    return it.tick;
  }
  function ClientModel_init$lambda$lambda$lambda_1(closure$myMaxApplyTick) {
    return function (it) {
      return it.tick.compareTo_11rb$(closure$myMaxApplyTick) <= 0;
    };
  }
  function ClientModel_init$lambda$lambda$lambda_2(this$ClientModel) {
    return function (it) {
      return it.tick.compareTo_11rb$(this$ClientModel.stable_0._state.tick) < 0;
    };
  }
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function ClientModel_init$lambda(this$ClientModel) {
    return function (s) {
      var this$ClientModel_0 = this$ClientModel;
      var tmp$;
      if (s.welcome != null)
        this$ClientModel_0.welcome = s.welcome;
      if (s.recommendedLatency != null)
        this$ClientModel_0.recommendendLatency = s.recommendedLatency;
      if (s.stable != null) {
        this$ClientModel_0.stable_0 = new ClientModel$StateWrapper(this$ClientModel_0, s.stable);
        this$ClientModel_0.clearCache_0();
      }
      removeAll(this$ClientModel_0.actions_0, ClientModel_init$lambda$lambda$lambda(this$ClientModel_0));
      this$ClientModel_0.actions_0.addAll_brywnq$(s.actions);
      var $receiver = this$ClientModel_0.actions_0;
      if ($receiver.size > 1) {
        sortWith($receiver, new Comparator$ObjectLiteral_0(compareBy$lambda_0(ClientModel_init$lambda$lambda$lambda_0)));
      }
      var $receiver_0 = s.actions;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1;
        if (equals(element.pid, (tmp$_1 = this$ClientModel_0.welcome) != null ? tmp$_1.id : null))
          destination.add_11rb$(element);
      }
      var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
      var tmp$_2;
      tmp$_2 = destination.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination_0.add_11rb$(item.tick);
      }
      var myMaxApplyTick = (tmp$ = max(destination_0)) != null ? tmp$ : new Tick(0);
      removeAll(this$ClientModel_0.myLocal_0, ClientModel_init$lambda$lambda$lambda_1(myMaxApplyTick));
      var $receiver_1 = s.actions;
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_3;
      tmp$_3 = $receiver_1.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        destination_1.add_11rb$(item_0.tick);
      }
      var serverMinApplyTick = min(destination_1);
      this$ClientModel_0.stable_0.tick_egc0oz$(s.stableTick);
      if (serverMinApplyTick != null) {
        this$ClientModel_0.clearCache_0(serverMinApplyTick);
      }
      removeAll(this$ClientModel_0.actions_0, ClientModel_init$lambda$lambda$lambda_2(this$ClientModel_0));
      return Unit;
    };
  }
  ClientModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientModel',
    interfaces: [IClientModel]
  };
  function touch($receiver, pos) {
    var car = $receiver.myCar;
    if (car != null) {
      var a = car.pos;
      var direction = plus_4(calcAngle(pos.copy_lu1900$(pos.x - a.x, pos.y - a.y)), degreesAngle(0 * 180 | 0));
      $receiver.move_llbgdp$(direction);
    }
     else {
      $receiver.newCar();
    }
  }
  function calcRenderXY(state, pos, center) {
    var x = pos.x;
    var dx = center.x - x;
    if (dx > get_width(state) / 2)
      x += get_width(state);
    else if (dx < -get_width(state) / 2)
      x -= get_width(state);
    var y = pos.y;
    var dy = center.y - y;
    if (dy > get_height(state) / 2)
      y += get_height(state);
    else if (dy < -get_height(state) / 2)
      y -= get_height(state);
    return new XY(x, y);
  }
  function Conf(port, host) {
    Conf$Companion_getInstance();
    this.port = port;
    this.host = host;
    this.path = 'socket';
  }
  Conf.prototype.pingClient = function () {
    return new PingClient(this.host, this.port, this.path, SerializeHelp_getInstance().serverSayServerPayloadSerializer, SerializeHelp_getInstance().clientSayClientPayloadSerializer);
  };
  function Conf$Companion() {
    Conf$Companion_instance = this;
  }
  Conf$Companion.prototype.serializer = function () {
    return Conf$$serializer_getInstance();
  };
  Conf$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Conf$Companion_instance = null;
  function Conf$Companion_getInstance() {
    if (Conf$Companion_instance === null) {
      new Conf$Companion();
    }
    return Conf$Companion_instance;
  }
  function Conf$$serializer() {
    this.serialClassDesc_vlc39l$_0 = new SerialClassDescImpl('com.riseofcat.client.Conf');
    this.serialClassDesc.addElement_61zpoe$('port');
    this.serialClassDesc.addElement_61zpoe$('host');
    this.serialClassDesc.addElement_61zpoe$('path');
    Conf$$serializer_instance = this;
  }
  Object.defineProperty(Conf$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_vlc39l$_0;
    }
  });
  Conf$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 0, obj.port);
    output.writeStringElementValue_k4mjep$(this.serialClassDesc, 1, obj.host);
    output.writeStringElementValue_k4mjep$(this.serialClassDesc, 2, obj.path);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Conf$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.readStringElementValue_xvmgof$(this.serialClassDesc, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.readStringElementValue_xvmgof$(this.serialClassDesc, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Conf_init(bitMask0, local0, local1, local2, null);
  };
  Conf$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Conf$$serializer_instance = null;
  function Conf$$serializer_getInstance() {
    if (Conf$$serializer_instance === null) {
      new Conf$$serializer();
    }
    return Conf$$serializer_instance;
  }
  function Conf_init(seen, port, host, path, serializationConstructorMarker) {
    var $this = Object.create(Conf.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('port');
    else
      $this.port = port;
    if ((seen & 2) === 0)
      throw new MissingFieldException('host');
    else
      $this.host = host;
    if ((seen & 4) === 0)
      throw new MissingFieldException('path');
    else
      $this.path = path;
    return $this;
  }
  Conf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Conf',
    interfaces: []
  };
  function confs() {
    confs_instance = this;
    this.local = new Conf(5000, 'localhost');
    this.heroku = new Conf(80, 'mass-power.herokuapp.com');
    this.ramenki = new Conf(5000, '192.168.100.5');
    this.tutu = new Conf(5000, '192.168.43.176');
    this.current = this.heroku;
  }
  confs.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'confs',
    interfaces: []
  };
  var confs_instance = null;
  function confs_getInstance() {
    if (confs_instance === null) {
      new confs();
    }
    return confs_instance;
  }
  function IClientModel() {
  }
  IClientModel.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IClientModel',
    interfaces: []
  };
  function IPingClient() {
  }
  IPingClient.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IPingClient',
    interfaces: []
  };
  function FakePingClient(connectData) {
    this.connectData = connectData;
    this.smartPingDelay_gkaf1w$_0 = new Duration(Kotlin.Long.fromInt(100));
    this.clientMessages_tjkwu3$_0 = 0;
  }
  Object.defineProperty(FakePingClient.prototype, 'state', {
    get: function () {
      return LibWebSocket$State$OPEN_getInstance();
    }
  });
  Object.defineProperty(FakePingClient.prototype, 'serverTime', {
    get: function () {
      return lib.time;
    }
  });
  Object.defineProperty(FakePingClient.prototype, 'smartPingDelay', {
    get: function () {
      return this.smartPingDelay_gkaf1w$_0;
    }
  });
  FakePingClient.prototype.connect_oh3mgy$ = function (incomeListener) {
    incomeListener(this.connectData);
  };
  FakePingClient.prototype.close = function () {
  };
  FakePingClient.prototype.say_11rc$ = function (payload) {
  };
  Object.defineProperty(FakePingClient.prototype, 'clientMessages', {
    get: function () {
      return this.clientMessages_tjkwu3$_0;
    }
  });
  FakePingClient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FakePingClient',
    interfaces: [IPingClient]
  };
  function PingClient(host, port, path, typeS, typeC) {
    this.typeC = typeC;
    this.incoming_0 = new Signal();
    this.socket_0 = null;
    this.queue_0 = ArrayList_init();
    this.pingDelays_0 = Common$Companion_getInstance().createConcurrentList_287e2$();
    this.timeSync_0 = Common$Companion_getInstance().createConcurrentList_287e2$();
    this.clientMessages_y1uhrk$_0 = 0;
    this.socket_0 = Common$Companion_getInstance().createWebSocket_h6sd2a$(host, port, path);
    this.socket_0.addListener_32v6ym$(new PingClient_init$ObjectLiteral(this, typeS));
  }
  Object.defineProperty(PingClient.prototype, 'clientMessages', {
    get: function () {
      return this.clientMessages_y1uhrk$_0;
    },
    set: function (clientMessages) {
      this.clientMessages_y1uhrk$_0 = clientMessages;
    }
  });
  Object.defineProperty(PingClient.prototype, 'lastPingDelay', {
    get: function () {
      var tmp$;
      return (tmp$ = lastOrNull(this.pingDelays_0)) != null ? tmp$.pingDelay : null;
    }
  });
  function PingClient$get_PingClient$smartPingDelay$lambda(it) {
    return it.pingDelay;
  }
  Object.defineProperty(PingClient.prototype, 'smartPingDelay', {
    get: function () {
      var tmp$;
      if (this.pingDelays_0.size === 0)
        return new Duration(Kotlin.Long.ZERO);
      var sum = new Duration(Kotlin.Long.ZERO);
      var weights = 0.0;
      var average = div(sumByDuration(this.pingDelays_0, PingClient$get_PingClient$smartPingDelay$lambda), this.pingDelays_0.size);
      tmp$ = this.pingDelays_0.iterator();
      while (tmp$.hasNext()) {
        var l = tmp$.next();
        var w = 100000.0;
        w *= 1.0 - libObj_getInstance().Fun.arg0toInf_8n11ho$(minus(lib.time, l.clientTime), new Duration(Kotlin.Long.fromInt(10000)));
        w *= 1.0 - libObj_getInstance().Fun.arg0toInf_8n11ho$(diffAbs(average, l.pingDelay), new Duration(Kotlin.Long.fromInt(100)));
        sum = plus_3(sum, times(l.pingDelay, w));
        weights += w;
      }
      return div_1(sum, weights);
    }
  });
  Object.defineProperty(PingClient.prototype, 'serverTime', {
    get: function () {
      var tmp$;
      var result = {v: lib.time};
      if ((tmp$ = lastOrNull(this.timeSync_0)) != null) {
        result.v = plus_1(result.v, plus_3(minus(tmp$.server, tmp$.client), this.smartPingDelay));
      }
      return result.v;
    }
  });
  Object.defineProperty(PingClient.prototype, 'state', {
    get: function () {
      return this.socket_0.state;
    }
  });
  PingClient.prototype.connect_oh3mgy$ = function (incomeListener) {
    this.incoming_0.add_qlkmfe$(incomeListener);
    try {
      this.socket_0.connect();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        lib.log.todo_6bul2c$('handle offline');
      }
       else
        throw e;
    }
  };
  PingClient.prototype.close = function () {
    this.socket_0.close();
  };
  PingClient.prototype.say_11rc$ = function (payload) {
    this.say_0(new ClientSay(void 0, payload));
  };
  PingClient.prototype.say_0 = function (say) {
    if (this.socket_0.state === LibWebSocket$State$OPEN_getInstance())
      this.sayNow_0(say);
    else
      this.queue_0.add_11rb$(say);
  };
  PingClient.prototype.sayNow_0 = function (say) {
    try {
      this.clientMessages = this.clientMessages + 1 | 0;
      say.index = this.clientMessages;
      this.socket_0.send_61zpoe$(lib.objStrSer.stringify_jsy488$(this.typeC, say));
      return;
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        lib.log.error_nez7ok$('socket.send error', t);
      }
       else
        throw t;
    }
  };
  function PingClient$PingDelay(pingDelay, clientTime) {
    this.pingDelay = pingDelay;
    this.clientTime = clientTime;
  }
  PingClient$PingDelay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PingDelay',
    interfaces: []
  };
  function PingClient_init$ObjectLiteral(this$PingClient, closure$typeS) {
    this.this$PingClient = this$PingClient;
    this.closure$typeS = closure$typeS;
  }
  PingClient_init$ObjectLiteral.prototype.onOpen = function () {
    while (!this.this$PingClient.queue_0.isEmpty()) {
      this.this$PingClient.sayNow_0(removeFirst(this.this$PingClient.queue_0));
    }
  };
  PingClient_init$ObjectLiteral.prototype.onClose = function () {
  };
  PingClient_init$ObjectLiteral.prototype.onMessage_61zpoe$ = function (packet) {
    var tmp$;
    try {
      lib.log.debug_6bul2c$(packet);
      tmp$ = lib.objStrSer.parse_67noqb$(this.closure$typeS, packet);
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        tmp$ = lib.log.fatalError_nez7ok$('serverSay parse', t);
      }
       else
        throw t;
    }
    var serverSay = tmp$;
    if (serverSay.serverTime != null)
      this.this$PingClient.timeSync_0.add_11rb$(new TimeSync(serverSay.serverTime, lib.time));
    if (serverSay.pingDelay != null) {
      this.this$PingClient.pingDelays_0.add_11rb$(new PingClient$PingDelay(serverSay.pingDelay, lib.time));
      while (this.this$PingClient.pingDelays_0.size > 20)
        removeFirst(this.this$PingClient.pingDelays_0);
    }
    if (serverSay.ping)
      this.this$PingClient.say_0(new ClientSay(true));
    if (serverSay.payload != null)
      this.this$PingClient.incoming_0.dispatch_11rb$(serverSay.payload);
  };
  PingClient_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [LibWebSocket$Listener]
  };
  PingClient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PingClient',
    interfaces: [IPingClient]
  };
  function TimeSync(server, client) {
    this.server = server;
    this.client = client;
  }
  TimeSync.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeSync',
    interfaces: []
  };
  TimeSync.prototype.component1 = function () {
    return this.server;
  };
  TimeSync.prototype.component2 = function () {
    return this.client;
  };
  TimeSync.prototype.copy_jhgyxw$ = function (server, client) {
    return new TimeSync(server === void 0 ? this.server : server, client === void 0 ? this.client : client);
  };
  TimeSync.prototype.toString = function () {
    return 'TimeSync(server=' + Kotlin.toString(this.server) + (', client=' + Kotlin.toString(this.client)) + ')';
  };
  TimeSync.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.server) | 0;
    result = result * 31 + Kotlin.hashCode(this.client) | 0;
    return result;
  };
  TimeSync.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.server, other.server) && Kotlin.equals(this.client, other.client)))));
  };
  var shader_default_vertex_shader_vert;
  var shader_background_stars_frag;
  var shader_good_blur_frag;
  var shader_mesh_default_vert;
  var MASS_POWER_TEXTURE_VERTEX;
  var MASS_POWER_TEXTURE_FRAG;
  var MASS_POWER_FOOD_VERTEX;
  var MASS_POWER_FOOD_FRAG;
  function ServerCommon() {
    ServerCommon_instance = this;
  }
  ServerCommon.prototype.test = function () {
    return 'server common';
  };
  ServerCommon.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ServerCommon',
    interfaces: []
  };
  var ServerCommon_instance = null;
  function ServerCommon_getInstance() {
    if (ServerCommon_instance === null) {
      new ServerCommon();
    }
    return ServerCommon_instance;
  }
  function LibWebSocket() {
  }
  function LibWebSocket$Listener() {
  }
  LibWebSocket$Listener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Listener',
    interfaces: []
  };
  function LibWebSocket$State(name, ordinal, message, good) {
    Enum.call(this);
    this.message = message;
    this.good = good;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LibWebSocket$State_initFields() {
    LibWebSocket$State_initFields = function () {
    };
    LibWebSocket$State$OPEN_instance = new LibWebSocket$State('OPEN', 0, '\u0423\u0441\u043F\u0435\u0448\u043D\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C', true);
    LibWebSocket$State$CLOSE_instance = new LibWebSocket$State('CLOSE', 1, '\u0417\u0430\u043A\u0440\u044B\u0432\u0430\u044E \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435', false);
    LibWebSocket$State$CONNECTING_instance = new LibWebSocket$State('CONNECTING', 2, '\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435...', true);
    LibWebSocket$State$CLOSING_instance = new LibWebSocket$State('CLOSING', 3, '\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F', false);
    LibWebSocket$State$CLOSED_instance = new LibWebSocket$State('CLOSED', 4, '\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u043E', false);
    LibWebSocket$State$TIMEOUT_instance = new LibWebSocket$State('TIMEOUT', 5, '\u0412\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u0438\u0441\u0442\u0435\u043A\u043B\u043E', false);
  }
  var LibWebSocket$State$OPEN_instance;
  function LibWebSocket$State$OPEN_getInstance() {
    LibWebSocket$State_initFields();
    return LibWebSocket$State$OPEN_instance;
  }
  var LibWebSocket$State$CLOSE_instance;
  function LibWebSocket$State$CLOSE_getInstance() {
    LibWebSocket$State_initFields();
    return LibWebSocket$State$CLOSE_instance;
  }
  var LibWebSocket$State$CONNECTING_instance;
  function LibWebSocket$State$CONNECTING_getInstance() {
    LibWebSocket$State_initFields();
    return LibWebSocket$State$CONNECTING_instance;
  }
  var LibWebSocket$State$CLOSING_instance;
  function LibWebSocket$State$CLOSING_getInstance() {
    LibWebSocket$State_initFields();
    return LibWebSocket$State$CLOSING_instance;
  }
  var LibWebSocket$State$CLOSED_instance;
  function LibWebSocket$State$CLOSED_getInstance() {
    LibWebSocket$State_initFields();
    return LibWebSocket$State$CLOSED_instance;
  }
  var LibWebSocket$State$TIMEOUT_instance;
  function LibWebSocket$State$TIMEOUT_getInstance() {
    LibWebSocket$State_initFields();
    return LibWebSocket$State$TIMEOUT_instance;
  }
  LibWebSocket$State.prototype.toString = function () {
    return this.message;
  };
  LibWebSocket$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: [Enum]
  };
  function LibWebSocket$State$values() {
    return [LibWebSocket$State$OPEN_getInstance(), LibWebSocket$State$CLOSE_getInstance(), LibWebSocket$State$CONNECTING_getInstance(), LibWebSocket$State$CLOSING_getInstance(), LibWebSocket$State$CLOSED_getInstance(), LibWebSocket$State$TIMEOUT_getInstance()];
  }
  LibWebSocket$State.values = LibWebSocket$State$values;
  function LibWebSocket$State$valueOf(name) {
    switch (name) {
      case 'OPEN':
        return LibWebSocket$State$OPEN_getInstance();
      case 'CLOSE':
        return LibWebSocket$State$CLOSE_getInstance();
      case 'CONNECTING':
        return LibWebSocket$State$CONNECTING_getInstance();
      case 'CLOSING':
        return LibWebSocket$State$CLOSING_getInstance();
      case 'CLOSED':
        return LibWebSocket$State$CLOSED_getInstance();
      case 'TIMEOUT':
        return LibWebSocket$State$TIMEOUT_getInstance();
      default:throwISE('No enum constant com.riseofcat.common.LibWebSocket.State.' + name);
    }
  }
  LibWebSocket$State.valueOf_61zpoe$ = LibWebSocket$State$valueOf;
  LibWebSocket.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LibWebSocket',
    interfaces: []
  };
  function Signal() {
    this.callbacks_0 = ArrayList_init();
  }
  Signal.prototype.dispatch_11rb$ = function (value) {
    var currentCallbacks = copy(this.callbacks_0);
    var iterator = currentCallbacks.iterator();
    while (iterator.hasNext()) {
      var next = iterator.next();
      ensureNotNull(next.listener)(value);
      if (next.once) {
        next.removed = true;
      }
    }
    iterator = this.callbacks_0.iterator();
    while (iterator.hasNext()) {
      var next_0 = iterator.next();
      if (next_0.removed) {
        iterator.remove();
      }
    }
  };
  Signal.prototype.add_qlkmfe$ = function (listener) {
    var c = new Signal$Callback(this);
    c.listener = listener;
    this.callbacks_0.add_11rb$(c);
  };
  Signal.prototype.addOnce_qlkmfe$ = function (listener) {
    var c = new Signal$Callback(this);
    c.listener = listener;
    c.once = true;
    this.callbacks_0.add_11rb$(c);
  };
  Signal.prototype.remove_qlkmfe$ = function (signalListener) {
    var iterator = this.callbacks_0.iterator();
    while (iterator.hasNext()) {
      var next = iterator.next();
      if (next.listener === signalListener) {
        next.removed = true;
        iterator.remove();
      }
    }
  };
  Signal.prototype.destroy = function () {
    this.callbacks_0.clear();
  };
  function Signal$Callback($outer) {
    this.$outer = $outer;
    this.listener = null;
    this.removed = false;
    this.once = false;
  }
  Signal$Callback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Callback',
    interfaces: []
  };
  Signal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Signal',
    interfaces: []
  };
  function Time() {
  }
  Time.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Time',
    interfaces: []
  };
  function TimeStamp(ms) {
    TimeStamp$Companion_getInstance();
    this.ms_6e8wya$_0 = ms;
  }
  Object.defineProperty(TimeStamp.prototype, 'ms', {
    get: function () {
      return this.ms_6e8wya$_0;
    }
  });
  function TimeStamp$Companion() {
    TimeStamp$Companion_instance = this;
  }
  TimeStamp$Companion.prototype.serializer = function () {
    return TimeStamp$$serializer_getInstance();
  };
  TimeStamp$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeStamp$Companion_instance = null;
  function TimeStamp$Companion_getInstance() {
    if (TimeStamp$Companion_instance === null) {
      new TimeStamp$Companion();
    }
    return TimeStamp$Companion_instance;
  }
  function TimeStamp$$serializer() {
    this.serialClassDesc_45li59$_0 = new SerialClassDescImpl('com.riseofcat.lib.TimeStamp');
    this.serialClassDesc.addElement_61zpoe$('ms');
    TimeStamp$$serializer_instance = this;
  }
  Object.defineProperty(TimeStamp$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_45li59$_0;
    }
  });
  TimeStamp$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeLongElementValue_sd5j9w$(this.serialClassDesc, 0, obj.ms);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  TimeStamp$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readLongElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return TimeStamp_init(bitMask0, local0, null);
  };
  TimeStamp$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var TimeStamp$$serializer_instance = null;
  function TimeStamp$$serializer_getInstance() {
    if (TimeStamp$$serializer_instance === null) {
      new TimeStamp$$serializer();
    }
    return TimeStamp$$serializer_instance;
  }
  function TimeStamp_init(seen, ms, serializationConstructorMarker) {
    var $this = Object.create(TimeStamp.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('ms');
    else
      $this.ms_6e8wya$_0 = ms;
    return $this;
  }
  TimeStamp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeStamp',
    interfaces: [Time]
  };
  TimeStamp.prototype.component1 = function () {
    return this.ms;
  };
  TimeStamp.prototype.copy_s8cxhz$ = function (ms) {
    return new TimeStamp(ms === void 0 ? this.ms : ms);
  };
  TimeStamp.prototype.toString = function () {
    return 'TimeStamp(ms=' + Kotlin.toString(this.ms) + ')';
  };
  TimeStamp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ms) | 0;
    return result;
  };
  TimeStamp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ms, other.ms))));
  };
  function Duration(ms) {
    Duration$Companion_getInstance();
    this.ms_96t6oo$_0 = ms;
  }
  Object.defineProperty(Duration.prototype, 'ms', {
    get: function () {
      return this.ms_96t6oo$_0;
    }
  });
  function Duration$Companion() {
    Duration$Companion_instance = this;
  }
  Duration$Companion.prototype.serializer = function () {
    return Duration$$serializer_getInstance();
  };
  Duration$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Duration$Companion_instance = null;
  function Duration$Companion_getInstance() {
    if (Duration$Companion_instance === null) {
      new Duration$Companion();
    }
    return Duration$Companion_instance;
  }
  function Duration$$serializer() {
    this.serialClassDesc_6mvt61$_0 = new SerialClassDescImpl('com.riseofcat.lib.Duration');
    this.serialClassDesc.addElement_61zpoe$('ms');
    Duration$$serializer_instance = this;
  }
  Object.defineProperty(Duration$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_6mvt61$_0;
    }
  });
  Duration$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeLongElementValue_sd5j9w$(this.serialClassDesc, 0, obj.ms);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Duration$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readLongElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Duration_init(bitMask0, local0, null);
  };
  Duration$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Duration$$serializer_instance = null;
  function Duration$$serializer_getInstance() {
    if (Duration$$serializer_instance === null) {
      new Duration$$serializer();
    }
    return Duration$$serializer_instance;
  }
  function Duration_init(seen, ms, serializationConstructorMarker) {
    var $this = Object.create(Duration.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('ms');
    else
      $this.ms_96t6oo$_0 = ms;
    return $this;
  }
  Duration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Duration',
    interfaces: [Time]
  };
  Duration.prototype.component1 = function () {
    return this.ms;
  };
  Duration.prototype.copy_s8cxhz$ = function (ms) {
    return new Duration(ms === void 0 ? this.ms : ms);
  };
  Duration.prototype.toString = function () {
    return 'Duration(ms=' + Kotlin.toString(this.ms) + ')';
  };
  Duration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ms) | 0;
    return result;
  };
  Duration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ms, other.ms))));
  };
  function minus($receiver, t) {
    return new Duration($receiver.ms.subtract(t.ms));
  }
  function minus_0($receiver, t) {
    return new TimeStamp($receiver.ms.subtract(t.ms));
  }
  function plus_1($receiver, t) {
    return new TimeStamp($receiver.ms.add(t.ms));
  }
  function plus_2($receiver, t) {
    return new TimeStamp($receiver.ms.add(t.ms));
  }
  function plus_3($receiver, t) {
    return new Duration($receiver.ms.add(t.ms));
  }
  function minus_1($receiver, t) {
    return new Duration($receiver.ms.subtract(t.ms));
  }
  function diffAbs($receiver, d) {
    return get_abs(minus_1($receiver, d));
  }
  function get_abs($receiver) {
    return new Duration(abs($receiver.ms));
  }
  function div($receiver, int) {
    return new Duration($receiver.ms.div(Kotlin.Long.fromInt(int)));
  }
  function div_0($receiver, f) {
    return new Duration(Kotlin.Long.fromNumber($receiver.ms.toNumber() / f));
  }
  function div_1($receiver, double) {
    return new Duration(Kotlin.Long.fromNumber($receiver.ms.toNumber() / double));
  }
  function times($receiver, d) {
    return new Duration(Kotlin.Long.fromNumber($receiver.ms.toNumber() * d));
  }
  function times_0($receiver, int) {
    return new Duration($receiver.ms.multiply(Kotlin.Long.fromInt(int)));
  }
  function times_1($receiver, tick) {
    return new Duration($receiver.ms.multiply(Kotlin.Long.fromInt(tick.tick)));
  }
  function times_2($receiver, d) {
    return times_1(d, $receiver);
  }
  function compareTo($receiver, time) {
    return $receiver.ms.compareTo_11rb$(time.ms);
  }
  function div_2($receiver, t) {
    return $receiver.ms.div(t.ms);
  }
  function averageSqrt($receiver, selector) {
    var result = {v: 0.0};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var v = selector(element);
      if (v != null) {
        result.v += v * v;
      }
    }
    var x = result.v;
    return Math_0.sqrt(x) / $receiver.size;
  }
  function sumByDuration($receiver, selector) {
    var result = {v: new Duration(Kotlin.Long.ZERO)};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      result.v = plus_3(result.v, selector(element));
    }
    return result.v;
  }
  function get_s($receiver) {
    return $receiver.ms.div(Kotlin.Long.fromInt(1000));
  }
  function get_sf($receiver) {
    return $receiver.ms.toNumber() / 1000.0;
  }
  function get_sd($receiver) {
    return $receiver.ms.toNumber() / 1000.0;
  }
  var createTime;
  var lib;
  var deepCopy = defineInlineFunction('game.com.riseofcat.lib.deepCopy_irb06o$', wrapFunction(function () {
    var lib = _.com.riseofcat.lib;
    var CBOR = _.$$importsForInline$$['kotlinx-serialization-runtime-js'].kotlinx.serialization.cbor.CBOR;
    var Throwable = Error;
    var wrapFunction = Kotlin.wrapFunction;
    var deepCopy$lambda = wrapFunction(function () {
      var getKClass = Kotlin.getKClass;
      var klassSerializer = _.$$importsForInline$$['kotlinx-serialization-runtime-js'].kotlinx.serialization.klassSerializer_yop3xi$;
      return function (this$deepCopy, typeClosure$T, isT) {
        return function () {
          try {
            var tmp$ = CBOR.Companion;
            var tmp$_0 = typeClosure$T;
            var $this = CBOR.Companion;
            var T_0 = typeClosure$T;
            var obj = this$deepCopy;
            var $this_0 = $this.plain;
            var raw = $this_0.dump_20fw5n$(klassSerializer($this_0.context, getKClass(T_0)), obj);
            var $this_1 = tmp$.plain;
            return $this_1.load_8dtdds$(klassSerializer($this_1.context, getKClass(tmp$_0)), raw);
          }
           catch (t) {
            if (Kotlin.isType(t, Throwable)) {
              return lib.lib.log.fatalError_nez7ok$('deepCopy', t);
            }
             else
              throw t;
          }
        };
      };
    });
    return function (T_0, isT, $receiver) {
      return lib.lib.measure_85cpgq$('deepCopy', deepCopy$lambda($receiver, T_0, isT));
    };
  }));
  function libObj() {
    libObj_instance = this;
    this.MILLIS_IN_SECOND = 1000.0;
    this.json = new JSON_0(true, void 0, void 0, true);
    this.objStrSer = this.json;
    this.log = libObj$logObj_getInstance();
    this.measurementsBegin = null;
    this.previousMeasurePrint = this.time;
    this.measurements = LinkedHashMap_init();
    this.Fun = libObj$FunObj_getInstance();
  }
  Object.defineProperty(libObj.prototype, 'time', {
    get: function () {
      return new TimeStamp(Common$Companion_getInstance().timeMs);
    }
  });
  Object.defineProperty(libObj.prototype, 'sinceStart', {
    get: function () {
      return minus(this.time, createTime);
    }
  });
  libObj.prototype.pillarTimeMs_s8cxhz$ = function (max) {
    return this.Fun.pillar_3pjtqy$(this.time.ms, max);
  };
  libObj.prototype.pillarTimeS_mx4ult$ = function (max) {
    return this.pillarTimeMs_s8cxhz$(Kotlin.Long.fromNumber(max * 1000)).toNumber() / this.MILLIS_IN_SECOND;
  };
  libObj.prototype.getKClass_30y1fr$ = defineInlineFunction('game.com.riseofcat.lib.libObj.getKClass_30y1fr$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return getKClass(T_0);
    };
  }));
  libObj.prototype.rnd_vux9f0$ = function (min, max) {
    return numberToInt(min + Common$Companion_getInstance().random() * (max - min + 1 | 0));
  };
  libObj.prototype.inLimits_qt1dr2$ = function (value, min, max) {
    var b = Math_0.min(max, value);
    return Math_0.max(min, b);
  };
  function libObj$cbor() {
    libObj$cbor_instance = this;
  }
  libObj$cbor.prototype.stringify_20fw5n$ = function (saver, obj) {
    return internal.HexConverter.printHexBinary_1fhb37$(CBOR.Companion.dump_20fw5n$(saver, obj), true);
  };
  libObj$cbor.prototype.parse_84810w$ = function (loader, str) {
    return CBOR.Companion.load_8dtdds$(loader, internal.HexConverter.parseHexBinary_61zpoe$(str));
  };
  libObj$cbor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'cbor',
    interfaces: []
  };
  var libObj$cbor_instance = null;
  function libObj$cbor_getInstance() {
    if (libObj$cbor_instance === null) {
      new libObj$cbor();
    }
    return libObj$cbor_instance;
  }
  function libObj$logObj() {
    libObj$logObj_instance = this;
  }
  function libObj$logObj$LogMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function libObj$logObj$LogMode_initFields() {
    libObj$logObj$LogMode_initFields = function () {
    };
    libObj$logObj$LogMode$TODO_instance = new libObj$logObj$LogMode('TODO', 0);
    libObj$logObj$LogMode$FATAL_ERROR_instance = new libObj$logObj$LogMode('FATAL_ERROR', 1);
    libObj$logObj$LogMode$ERROR_instance = new libObj$logObj$LogMode('ERROR', 2);
    libObj$logObj$LogMode$INFO_instance = new libObj$logObj$LogMode('INFO', 3);
    libObj$logObj$LogMode$MEASURE_instance = new libObj$logObj$LogMode('MEASURE', 4);
    libObj$logObj$LogMode$DEBUG_instance = new libObj$logObj$LogMode('DEBUG', 5);
    libObj$logObj$LogMode$BREAKPOINT_instance = new libObj$logObj$LogMode('BREAKPOINT', 6);
  }
  var libObj$logObj$LogMode$TODO_instance;
  function libObj$logObj$LogMode$TODO_getInstance() {
    libObj$logObj$LogMode_initFields();
    return libObj$logObj$LogMode$TODO_instance;
  }
  var libObj$logObj$LogMode$FATAL_ERROR_instance;
  function libObj$logObj$LogMode$FATAL_ERROR_getInstance() {
    libObj$logObj$LogMode_initFields();
    return libObj$logObj$LogMode$FATAL_ERROR_instance;
  }
  var libObj$logObj$LogMode$ERROR_instance;
  function libObj$logObj$LogMode$ERROR_getInstance() {
    libObj$logObj$LogMode_initFields();
    return libObj$logObj$LogMode$ERROR_instance;
  }
  var libObj$logObj$LogMode$INFO_instance;
  function libObj$logObj$LogMode$INFO_getInstance() {
    libObj$logObj$LogMode_initFields();
    return libObj$logObj$LogMode$INFO_instance;
  }
  var libObj$logObj$LogMode$MEASURE_instance;
  function libObj$logObj$LogMode$MEASURE_getInstance() {
    libObj$logObj$LogMode_initFields();
    return libObj$logObj$LogMode$MEASURE_instance;
  }
  var libObj$logObj$LogMode$DEBUG_instance;
  function libObj$logObj$LogMode$DEBUG_getInstance() {
    libObj$logObj$LogMode_initFields();
    return libObj$logObj$LogMode$DEBUG_instance;
  }
  var libObj$logObj$LogMode$BREAKPOINT_instance;
  function libObj$logObj$LogMode$BREAKPOINT_getInstance() {
    libObj$logObj$LogMode_initFields();
    return libObj$logObj$LogMode$BREAKPOINT_instance;
  }
  libObj$logObj$LogMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogMode',
    interfaces: [Enum]
  };
  function libObj$logObj$LogMode$values() {
    return [libObj$logObj$LogMode$TODO_getInstance(), libObj$logObj$LogMode$FATAL_ERROR_getInstance(), libObj$logObj$LogMode$ERROR_getInstance(), libObj$logObj$LogMode$INFO_getInstance(), libObj$logObj$LogMode$MEASURE_getInstance(), libObj$logObj$LogMode$DEBUG_getInstance(), libObj$logObj$LogMode$BREAKPOINT_getInstance()];
  }
  libObj$logObj$LogMode.values = libObj$logObj$LogMode$values;
  function libObj$logObj$LogMode$valueOf(name) {
    switch (name) {
      case 'TODO':
        return libObj$logObj$LogMode$TODO_getInstance();
      case 'FATAL_ERROR':
        return libObj$logObj$LogMode$FATAL_ERROR_getInstance();
      case 'ERROR':
        return libObj$logObj$LogMode$ERROR_getInstance();
      case 'INFO':
        return libObj$logObj$LogMode$INFO_getInstance();
      case 'MEASURE':
        return libObj$logObj$LogMode$MEASURE_getInstance();
      case 'DEBUG':
        return libObj$logObj$LogMode$DEBUG_getInstance();
      case 'BREAKPOINT':
        return libObj$logObj$LogMode$BREAKPOINT_getInstance();
      default:throwISE('No enum constant com.riseofcat.lib.libObj.logObj.LogMode.' + name);
    }
  }
  libObj$logObj$LogMode.valueOf_61zpoe$ = libObj$logObj$LogMode$valueOf;
  libObj$logObj.prototype.handleThrowable_0 = function (t) {
    var tmp$;
    if (t != null) {
      if ((tmp$ = Common$Companion_getInstance().getStackTraceString_tcv7n7$(t)) != null) {
        println(tmp$);
      }
    }
  };
  libObj$logObj.prototype.todo_6bul2c$ = function (str) {
    var mode = libObj$logObj$LogMode$TODO_getInstance();
    if (mode.ordinal < libObj$logObj$LogMode.DEBUG.ordinal) {
      println(mode.toString() + ': ' + str + ' | in ' + Common.Companion.getCodeLineInfo_za3lpa$(2));
    }
    throw Kotlin.newThrowable(libObj$logObj$LogMode$TODO_getInstance().toString() + ': ' + str);
  };
  libObj$logObj.prototype.fatalError_nez7ok$ = function (message, t) {
    if (t === void 0)
      t = null;
    var mode = libObj$logObj$LogMode$FATAL_ERROR_getInstance();
    if (mode.ordinal < libObj$logObj$LogMode.DEBUG.ordinal) {
      println(mode.toString() + ': ' + message + ' | in ' + Common.Companion.getCodeLineInfo_za3lpa$(3));
    }
    this.handleThrowable_0(t);
    throw Kotlin.newThrowable(libObj$logObj$LogMode$FATAL_ERROR_getInstance().toString() + ': ' + message);
  };
  libObj$logObj.prototype.error_nez7ok$ = function (message, t) {
    if (t === void 0)
      t = null;
    var mode = libObj$logObj$LogMode$ERROR_getInstance();
    if (mode.ordinal < libObj$logObj$LogMode.DEBUG.ordinal) {
      println(mode.toString() + ': ' + message + ' | in ' + Common.Companion.getCodeLineInfo_za3lpa$(3));
    }
    this.handleThrowable_0(t);
  };
  libObj$logObj.prototype.info_6bul2c$ = function (s) {
    var mode = libObj$logObj$LogMode$INFO_getInstance();
    if (mode.ordinal < libObj$logObj$LogMode.DEBUG.ordinal) {
      println(mode.toString() + ': ' + s + ' | in ' + Common.Companion.getCodeLineInfo_za3lpa$(2));
    }
  };
  libObj$logObj.prototype.debug_6bul2c$ = function (s) {
    var mode = libObj$logObj$LogMode$DEBUG_getInstance();
    if (mode.ordinal < libObj$logObj$LogMode.DEBUG.ordinal) {
      println(mode.toString() + ': ' + s + ' | in ' + Common.Companion.getCodeLineInfo_za3lpa$(2));
    }
  };
  libObj$logObj.prototype.breakpoint_6bul2c$ = function (s) {
    if (s === void 0)
      s = '';
    var mode = libObj$logObj$LogMode$BREAKPOINT_getInstance();
    if (mode.ordinal < libObj$logObj$LogMode.DEBUG.ordinal) {
      println(mode.toString() + ': ' + s + ' | in ' + Common.Companion.getCodeLineInfo_za3lpa$(2));
    }
  };
  libObj$logObj.prototype._log_prmnvo$ = defineInlineFunction('game.com.riseofcat.lib.libObj.logObj._log_prmnvo$', wrapFunction(function () {
    var libObj$logObj$LogMode = _.com.riseofcat.lib.libObj.logObj.LogMode;
    var Common = _.com.riseofcat.common.Common;
    var println = Kotlin.kotlin.io.println_s8jyv4$;
    return function (str, mode, codeDepth) {
      if (codeDepth === void 0)
        codeDepth = 2;
      if (mode.ordinal < libObj$logObj$LogMode.DEBUG.ordinal) {
        println(mode.toString() + ': ' + str + ' | in ' + Common.Companion.getCodeLineInfo_za3lpa$(codeDepth));
      }
    };
  }));
  libObj$logObj.prototype._println_6bul2c$ = defineInlineFunction('game.com.riseofcat.lib.libObj.logObj._println_6bul2c$', wrapFunction(function () {
    var println = Kotlin.kotlin.io.println_s8jyv4$;
    return function (str) {
      println(str);
    };
  }));
  libObj$logObj.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'logObj',
    interfaces: []
  };
  var libObj$logObj_instance = null;
  function libObj$logObj_getInstance() {
    if (libObj$logObj_instance === null) {
      new libObj$logObj();
    }
    return libObj$logObj_instance;
  }
  libObj.prototype.debug_o14v8n$ = defineInlineFunction('game.com.riseofcat.lib.libObj.debug_o14v8n$', function (block) {
  });
  libObj.prototype.release_o14v8n$ = defineInlineFunction('game.com.riseofcat.lib.libObj.release_o14v8n$', function (block) {
    block();
  });
  libObj.prototype.releaseOrDebug_wrbvbq$ = defineInlineFunction('game.com.riseofcat.lib.libObj.releaseOrDebug_wrbvbq$', wrapFunction(function () {
    return function (rel, deb) {
      return rel();
    };
  }));
  libObj.prototype.measure_85cpgq$ = function (hashTag, block) {
    return block();
  };
  function libObj$Measure() {
    this.average100s = null;
    this.average20s = null;
    this.sum = 0.0;
    this.count = 0;
  }
  function libObj$Measure$add$averageN(closure$value) {
    return function (prev, n) {
      return prev == null ? closure$value : (prev * n + closure$value) / (n + 1 | 0);
    };
  }
  libObj$Measure.prototype.add_14dthe$ = function (value) {
    var averageN = libObj$Measure$add$averageN(value);
    this.count = this.count + 1 | 0;
    this.sum += value;
    this.average20s = averageN(this.average20s, 20);
    this.average100s = averageN(this.average100s, 100);
  };
  libObj$Measure.prototype.toString = function () {
    var tmp$;
    var result = {v: ''};
    var beginTime = libObj_getInstance().measurementsBegin;
    if (beginTime != null) {
      result.v += 'sum%: ' + lib.formatDouble_12fank$(this.sum * 100 / get_s(lib.time).subtract(get_s(beginTime)).toNumber(), 9) + ' %    count:' + this.count;
      if ((tmp$ = this.average100s) != null) {
        result.v += '\n' + 'avrg100: ' + lib.formatDouble_12fank$(tmp$ * 1000, 9) + ' ms';
      }
    }
    return result.v;
  };
  libObj$Measure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Measure',
    interfaces: []
  };
  libObj.prototype.formatDouble_12fank$ = function (value, afterComa) {
    var digits = {v: 1};
    for (var index = 0; index < afterComa; index++) {
      digits.v = digits.v * 10 | 0;
    }
    return numberToInt(value).toString() + '.' + Kotlin.Long.fromNumber(value * digits.v).modulo(Kotlin.Long.fromInt(digits.v));
  };
  libObj.prototype.saveInvoke_o14v8n$ = defineInlineFunction('game.com.riseofcat.lib.libObj.saveInvoke_o14v8n$', wrapFunction(function () {
    var Throwable = Error;
    return function (lambda) {
      saveInvoke_klfg04$break: do {
        try {
          lambda();
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            this.log.error_nez7ok$('save invoke fail', e);
            null;
            break saveInvoke_klfg04$break;
          }
           else
            throw e;
        }
      }
       while (false);
    };
  }));
  libObj.prototype.saveInvoke_klfg04$ = defineInlineFunction('game.com.riseofcat.lib.libObj.saveInvoke_klfg04$', wrapFunction(function () {
    var Throwable = Error;
    return function (lambda) {
      try {
        return lambda();
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          this.log.error_nez7ok$('save invoke fail', e);
          return null;
        }
         else
          throw e;
      }
    };
  }));
  function libObj$FunObj() {
    libObj$FunObj_instance = this;
  }
  libObj$FunObj.prototype.arg0toInf_lu1900$ = function (y, middle) {
    return y / middle / (1 + y / middle);
  };
  libObj$FunObj.prototype.arg0toInf_dleff0$ = function (y, middle) {
    return y / middle / (1 + y / middle);
  };
  libObj$FunObj.prototype.arg0toInf_3pjtqy$ = function (y, middle) {
    return this.arg0toInf_lu1900$(y.toNumber(), middle.toNumber());
  };
  libObj$FunObj.prototype.arg0toInf_vux9f0$ = function (y, middle) {
    return this.arg0toInf_lu1900$(y, middle);
  };
  libObj$FunObj.prototype.arg0toInf_8n11ho$ = function (y, middle) {
    return this.arg0toInf_3pjtqy$(y.ms, middle.ms);
  };
  libObj$FunObj.prototype.pillar_3pjtqy$ = function (value, max) {
    if (equals(value.div(max).modulo(Kotlin.Long.fromInt(2)), Kotlin.Long.ZERO)) {
      return value.modulo(max);
    }
     else {
      return max.subtract(value.modulo(max));
    }
  };
  libObj$FunObj.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FunObj',
    interfaces: []
  };
  var libObj$FunObj_instance = null;
  function libObj$FunObj_getInstance() {
    if (libObj$FunObj_instance === null) {
      new libObj$FunObj();
    }
    return libObj$FunObj_instance;
  }
  libObj.prototype.smoothByTime_c4m5wc$ = function (lambda) {
    return new SmoothByTime(lambda);
  };
  libObj.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'libObj',
    interfaces: []
  };
  var libObj_instance = null;
  function libObj_getInstance() {
    if (libObj_instance === null) {
      new libObj();
    }
    return libObj_instance;
  }
  function copy($receiver) {
    return toMutableList($receiver);
  }
  var rm = defineInlineFunction('game.com.riseofcat.lib.rm_dwdffb$', function ($receiver, del) {
    return $receiver.remove_11rb$(del);
  });
  function removeFirst($receiver) {
    return $receiver.removeAt_za3lpa$(0);
  }
  function SmoothByTime(lambda) {
    this.lambda = lambda;
  }
  SmoothByTime.prototype.getValue_lrcp0p$ = function (t, property) {
    return this.lambda();
  };
  SmoothByTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SmoothByTime',
    interfaces: []
  };
  function ShareTodo() {
    ShareTodo_instance = this;
    this.SIMPLIFY = true;
  }
  ShareTodo.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShareTodo',
    interfaces: []
  };
  var ShareTodo_instance = null;
  function ShareTodo_getInstance() {
    if (ShareTodo_instance === null) {
      new ShareTodo();
    }
    return ShareTodo_instance;
  }
  function SerializeHelp() {
    SerializeHelp_instance = this;
    this.serverPayloadSerializer = ServerPayload$Companion_getInstance().serializer();
    this.serverSayServerPayloadSerializer = ServerSay$Companion_getInstance().serializer_swdriu$(this.serverPayloadSerializer);
    this.clientPayloadSerializer = ClientPayload$Companion_getInstance().serializer();
    this.clientSayClientPayloadSerializer = ClientSay$Companion_getInstance().serializer_swdriu$(this.clientPayloadSerializer);
  }
  SerializeHelp.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SerializeHelp',
    interfaces: []
  };
  var SerializeHelp_instance = null;
  function SerializeHelp_getInstance() {
    if (SerializeHelp_instance === null) {
      new SerializeHelp();
    }
    return SerializeHelp_instance;
  }
  var MAX_W;
  var MAX_H;
  function Mattr2D(COLS, ROWS, init) {
    this.COLS = COLS;
    this.ROWS = ROWS;
    var $receiver = until(0, Kotlin.imul(this.COLS, this.ROWS));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new Mattr2D$Cell(this, item / this.ROWS | 0, item % this.ROWS, init(item / this.ROWS | 0, item % this.ROWS)));
    }
    this.all = destination;
    this.map = null;
    var tmp$_0, tmp$_1;
    this.map = LinkedHashMap_init();
    tmp$_0 = this.COLS;
    for (var col = 0; col < tmp$_0; col++) {
      var m2 = LinkedHashMap_init();
      this.map.put_xwzc9p$(col, m2);
      tmp$_1 = this.ROWS;
      for (var row = 0; row < tmp$_1; row++) {
        var value = true ? this.all.get_za3lpa$(Kotlin.imul(col, this.ROWS) + row | 0) : new Mattr2D$Cell(this, col, row, init(col, row));
        m2.put_xwzc9p$(row, value);
      }
    }
  }
  function Mattr2D$Cell($outer, col, row, value) {
    this.$outer = $outer;
    this.col = col;
    this.row = row;
    this.value = value;
    this.matrix = this.$outer;
  }
  Mattr2D$Cell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cell',
    interfaces: []
  };
  Mattr2D.prototype.get_vux9f0$ = defineInlineFunction('game.com.riseofcat.share.mass.Mattr2D.get_vux9f0$', wrapFunction(function () {
    var ensureNotNull = Kotlin.ensureNotNull;
    return function (col, row) {
      return false ? this.all.get_za3lpa$(Kotlin.imul(col, this.ROWS) + row | 0) : ensureNotNull(ensureNotNull(this.map.get_11rb$(col)).get_11rb$(row));
    };
  }));
  Mattr2D.prototype.loop_3nlwc9$ = function (lambda) {
    throw new NotImplementedError_init();
  };
  Mattr2D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mattr2D',
    interfaces: []
  };
  function clearCache($receiver) {
    var tmp$;
    tmp$ = $receiver.all.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value.clear();
    }
  }
  function repeatTick($receiver, ticks, lambda) {
    $receiver.repeatTickCalls = $receiver.repeatTickCalls + 1 | 0;
    if (($receiver.tick.tick - $receiver.repeatTickCalls | 0) % ticks === 0) {
      lambda();
    }
  }
  function GameConst() {
    GameConst_instance = this;
    this.CHANGE_SIZE_PER_CAR = 400;
    this.UPDATE = new Duration(Kotlin.Long.fromInt(40));
    this.UPDATE_S = this.UPDATE.ms.toNumber() / lib.MILLIS_IN_SECOND;
    this.MIN_SIZE = 20;
    this.DEFAULT_CAR_SIZE = this.MIN_SIZE * 6 | 0;
    this.FOOD_SIZE = 20;
    this.MIN_RADIUS = 1.0;
    this.FOODS = 200;
    this.FOOD_PER_CAR = 10;
    this.BASE_WIDTH = 2300.0;
    this.BASE_HEIGHT = 2300.0;
    this.TITLE = 'mass-power.io';
    this.REACTIVE_LIVE = new Tick(60);
  }
  GameConst.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GameConst',
    interfaces: []
  };
  var GameConst_instance = null;
  function GameConst_getInstance() {
    if (GameConst_instance === null) {
      new GameConst();
    }
    return GameConst_instance;
  }
  function ICommand() {
  }
  ICommand.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ICommand',
    interfaces: []
  };
  function PosObject() {
  }
  PosObject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PosObject',
    interfaces: []
  };
  function SpeedObject() {
  }
  SpeedObject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SpeedObject',
    interfaces: [PosObject]
  };
  function SizeObject() {
  }
  SizeObject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SizeObject',
    interfaces: [PosObject]
  };
  function EatMeWithSpeed() {
  }
  EatMeWithSpeed.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EatMeWithSpeed',
    interfaces: [SpeedObject, SizeObject]
  };
  function NewCarCommand(id) {
    NewCarCommand$Companion_getInstance();
    this.id = id;
  }
  NewCarCommand.prototype.act_lvbgq3$ = function (state) {
    var $receiver = state.cars;
    var none$result;
    none$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        none$result = true;
        break none$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        if ((tmp$_0 = element.owner) != null ? tmp$_0.equals(this.id) : null) {
          none$result = false;
          break none$break;
        }
      }
      none$result = true;
    }
     while (false);
    if (none$result) {
      state.cars.add_11rb$(new Car(this.id, GameConst_getInstance().DEFAULT_CAR_SIZE, new XY(), new XY(rnd_2(state, 0, numberToInt(get_width(state))), rnd_2(state, 0, numberToInt(get_height(state))))));
    }
  };
  function NewCarCommand$Companion() {
    NewCarCommand$Companion_instance = this;
  }
  NewCarCommand$Companion.prototype.serializer = function () {
    return NewCarCommand$$serializer_getInstance();
  };
  NewCarCommand$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NewCarCommand$Companion_instance = null;
  function NewCarCommand$Companion_getInstance() {
    if (NewCarCommand$Companion_instance === null) {
      new NewCarCommand$Companion();
    }
    return NewCarCommand$Companion_instance;
  }
  function NewCarCommand$$serializer() {
    this.serialClassDesc_9l1yqu$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.NewCarCommand');
    this.serialClassDesc.addElement_61zpoe$('id');
    NewCarCommand$$serializer_instance = this;
  }
  Object.defineProperty(NewCarCommand$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_9l1yqu$_0;
    }
  });
  NewCarCommand$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), obj.id);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  NewCarCommand$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return NewCarCommand_init(bitMask0, local0, null);
  };
  NewCarCommand$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var NewCarCommand$$serializer_instance = null;
  function NewCarCommand$$serializer_getInstance() {
    if (NewCarCommand$$serializer_instance === null) {
      new NewCarCommand$$serializer();
    }
    return NewCarCommand$$serializer_instance;
  }
  function NewCarCommand_init(seen, id, serializationConstructorMarker) {
    var $this = Object.create(NewCarCommand.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    return $this;
  }
  NewCarCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewCarCommand',
    interfaces: [ICommand]
  };
  function MoveCommand(id, direction) {
    MoveCommand$Companion_getInstance();
    this.id = id;
    this.direction = direction;
  }
  MoveCommand.prototype.act_lvbgq3$ = function (state) {
    var tmp$;
    var $receiver = state.cars;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1;
        if ((tmp$_1 = element.owner) != null ? tmp$_1.equals(this.id) : null) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      return;
    }
    var car = tmp$;
    var $receiver_0 = car.speed;
    var a = xy(this.direction, 100.0);
    car.speed = $receiver_0.copy_lu1900$($receiver_0.x + a.x, $receiver_0.y + a.y);
    var size = (car.size / 20 | 0) + 1 | 0;
    if ((car.size - size | 0) >= GameConst_getInstance().MIN_SIZE)
      car.size = car.size - size | 0;
    var tmp$_2 = state.reactive;
    var tmp$_3 = this.id;
    var $receiver_1 = car.speed;
    var a_0 = xy(plus_4(this.direction, degreesAngle(180)), 400.0);
    tmp$_2.add_11rb$(new Reactive(tmp$_3, size, $receiver_1.copy_lu1900$($receiver_1.x + a_0.x, $receiver_1.y + a_0.y), car.pos.copy_lu1900$(), state.tick.copy_za3lpa$()));
  };
  function MoveCommand$Companion() {
    MoveCommand$Companion_instance = this;
  }
  MoveCommand$Companion.prototype.serializer = function () {
    return MoveCommand$$serializer_getInstance();
  };
  MoveCommand$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MoveCommand$Companion_instance = null;
  function MoveCommand$Companion_getInstance() {
    if (MoveCommand$Companion_instance === null) {
      new MoveCommand$Companion();
    }
    return MoveCommand$Companion_instance;
  }
  function MoveCommand$$serializer() {
    this.serialClassDesc_42s80n$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.MoveCommand');
    this.serialClassDesc.addElement_61zpoe$('id');
    this.serialClassDesc.addElement_61zpoe$('direction');
    MoveCommand$$serializer_instance = this;
  }
  Object.defineProperty(MoveCommand$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_42s80n$_0;
    }
  });
  MoveCommand$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), obj.id);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 1, Angle$$serializer_getInstance(), obj.direction);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  MoveCommand$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 1, Angle$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 1, Angle$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return MoveCommand_init(bitMask0, local0, local1, null);
  };
  MoveCommand$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var MoveCommand$$serializer_instance = null;
  function MoveCommand$$serializer_getInstance() {
    if (MoveCommand$$serializer_instance === null) {
      new MoveCommand$$serializer();
    }
    return MoveCommand$$serializer_instance;
  }
  function MoveCommand_init(seen, id, direction, serializationConstructorMarker) {
    var $this = Object.create(MoveCommand.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new MissingFieldException('direction');
    else
      $this.direction = direction;
    return $this;
  }
  MoveCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveCommand',
    interfaces: [ICommand]
  };
  function Angle(radians) {
    Angle$Companion_getInstance();
    this.radians = radians;
    this.fix();
  }
  Angle.prototype.fix = function () {
    var x = get_degrees(this);
    if (Math_0.abs(x) > 360)
      set_degrees(this, get_degrees(this) % 360);
    if (get_degrees(this) < 0)
      set_degrees(this, get_degrees(this) + 360);
  };
  function Angle$Companion() {
    Angle$Companion_instance = this;
  }
  Angle$Companion.prototype.serializer = function () {
    return Angle$$serializer_getInstance();
  };
  Angle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Angle$Companion_instance = null;
  function Angle$Companion_getInstance() {
    if (Angle$Companion_instance === null) {
      new Angle$Companion();
    }
    return Angle$Companion_instance;
  }
  function Angle$$serializer() {
    this.serialClassDesc_tx2u3m$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.Angle');
    this.serialClassDesc.addElement_61zpoe$('radians');
    Angle$$serializer_instance = this;
  }
  Object.defineProperty(Angle$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_tx2u3m$_0;
    }
  });
  Angle$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeDoubleElementValue_cy908x$(this.serialClassDesc, 0, obj.radians);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Angle$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readDoubleElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Angle_init(bitMask0, local0, null);
  };
  Angle$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Angle$$serializer_instance = null;
  function Angle$$serializer_getInstance() {
    if (Angle$$serializer_instance === null) {
      new Angle$$serializer();
    }
    return Angle$$serializer_instance;
  }
  function Angle_init(seen, radians, serializationConstructorMarker) {
    var $this = Object.create(Angle.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('radians');
    else
      $this.radians = radians;
    $this.fix();
    return $this;
  }
  Angle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Angle',
    interfaces: []
  };
  Angle.prototype.component1 = function () {
    return this.radians;
  };
  Angle.prototype.copy_14dthe$ = function (radians) {
    return new Angle(radians === void 0 ? this.radians : radians);
  };
  Angle.prototype.toString = function () {
    return 'Angle(radians=' + Kotlin.toString(this.radians) + ')';
  };
  Angle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.radians) | 0;
    return result;
  };
  Angle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.radians, other.radians))));
  };
  function plus_4($receiver, deltaAngle) {
    return new Angle($receiver.radians + deltaAngle.radians);
  }
  function minus_2($receiver, sub) {
    return new Angle($receiver.radians - sub.radians);
  }
  function xy($receiver, size) {
    if (size === void 0)
      size = 1.0;
    var x = $receiver.radians;
    var tmp$ = Math_0.cos(x) * size;
    var x_0 = $receiver.radians;
    return new XY(tmp$, Math_0.sin(x_0) * size);
  }
  function get_degrees($receiver) {
    return $receiver.radians * 180 / math.PI;
  }
  function set_degrees($receiver, value) {
    $receiver.radians = value * math.PI / 180;
  }
  var get_sin = defineInlineFunction('game.com.riseofcat.share.mass.get_sin_u2um1u$', wrapFunction(function () {
    var Math_0 = Math;
    return function ($receiver) {
      var x = $receiver.radians;
      return Math_0.sin(x);
    };
  }));
  var get_cos = defineInlineFunction('game.com.riseofcat.share.mass.get_cos_u2um1u$', wrapFunction(function () {
    var Math_0 = Math;
    return function ($receiver) {
      var x = $receiver.radians;
      return Math_0.cos(x);
    };
  }));
  function Car(owner, size, speed, pos) {
    Car$Companion_getInstance();
    this.owner = owner;
    this.size_fuavmh$_0 = size;
    this.speed_60xyzx$_0 = speed;
    this.pos_9oaoti$_0 = pos;
  }
  Object.defineProperty(Car.prototype, 'size', {
    get: function () {
      return this.size_fuavmh$_0;
    },
    set: function (size) {
      this.size_fuavmh$_0 = size;
    }
  });
  Object.defineProperty(Car.prototype, 'speed', {
    get: function () {
      return this.speed_60xyzx$_0;
    },
    set: function (speed) {
      this.speed_60xyzx$_0 = speed;
    }
  });
  Object.defineProperty(Car.prototype, 'pos', {
    get: function () {
      return this.pos_9oaoti$_0;
    },
    set: function (pos) {
      this.pos_9oaoti$_0 = pos;
    }
  });
  function Car$Companion() {
    Car$Companion_instance = this;
  }
  Car$Companion.prototype.serializer = function () {
    return Car$$serializer_getInstance();
  };
  Car$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Car$Companion_instance = null;
  function Car$Companion_getInstance() {
    if (Car$Companion_instance === null) {
      new Car$Companion();
    }
    return Car$Companion_instance;
  }
  function Car$$serializer() {
    this.serialClassDesc_oqldxf$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.Car');
    this.serialClassDesc.addElement_61zpoe$('owner');
    this.serialClassDesc.addElement_61zpoe$('size');
    this.serialClassDesc.addElement_61zpoe$('speed');
    this.serialClassDesc.addElement_61zpoe$('pos');
    Car$$serializer_instance = this;
  }
  Object.defineProperty(Car$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_oqldxf$_0;
    }
  });
  Car$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), obj.owner);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 1, obj.size);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 2, XY$$serializer_getInstance(), obj.speed);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 3, XY$$serializer_getInstance(), obj.pos);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Car$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 2, XY$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 2, XY$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 3, XY$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 3, XY$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Car_init(bitMask0, local0, local1, local2, local3, null);
  };
  Car$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Car$$serializer_instance = null;
  function Car$$serializer_getInstance() {
    if (Car$$serializer_instance === null) {
      new Car$$serializer();
    }
    return Car$$serializer_instance;
  }
  function Car_init(seen, owner, size, speed, pos, serializationConstructorMarker) {
    var $this = Object.create(Car.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('owner');
    else
      $this.owner = owner;
    if ((seen & 2) === 0)
      throw new MissingFieldException('size');
    else
      $this.size_fuavmh$_0 = size;
    if ((seen & 4) === 0)
      throw new MissingFieldException('speed');
    else
      $this.speed_60xyzx$_0 = speed;
    if ((seen & 8) === 0)
      throw new MissingFieldException('pos');
    else
      $this.pos_9oaoti$_0 = pos;
    return $this;
  }
  Car.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Car',
    interfaces: [EatMeWithSpeed]
  };
  Car.prototype.component1 = function () {
    return this.owner;
  };
  Car.prototype.component2 = function () {
    return this.size;
  };
  Car.prototype.component3 = function () {
    return this.speed;
  };
  Car.prototype.component4 = function () {
    return this.pos;
  };
  Car.prototype.copy_j0eshq$ = function (owner, size, speed, pos) {
    return new Car(owner === void 0 ? this.owner : owner, size === void 0 ? this.size : size, speed === void 0 ? this.speed : speed, pos === void 0 ? this.pos : pos);
  };
  Car.prototype.toString = function () {
    return 'Car(owner=' + Kotlin.toString(this.owner) + (', size=' + Kotlin.toString(this.size)) + (', speed=' + Kotlin.toString(this.speed)) + (', pos=' + Kotlin.toString(this.pos)) + ')';
  };
  Car.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.speed) | 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    return result;
  };
  Car.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.speed, other.speed) && Kotlin.equals(this.pos, other.pos)))));
  };
  function Food(size, pos) {
    Food$Companion_getInstance();
    this.size_q5c0mn$_0 = size;
    this.pos_q1oez4$_0 = pos;
  }
  Object.defineProperty(Food.prototype, 'size', {
    get: function () {
      return this.size_q5c0mn$_0;
    },
    set: function (size) {
      this.size_q5c0mn$_0 = size;
    }
  });
  Object.defineProperty(Food.prototype, 'pos', {
    get: function () {
      return this.pos_q1oez4$_0;
    },
    set: function (pos) {
      this.pos_q1oez4$_0 = pos;
    }
  });
  function Food$Companion() {
    Food$Companion_instance = this;
  }
  Food$Companion.prototype.serializer = function () {
    return Food$$serializer_getInstance();
  };
  Food$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Food$Companion_instance = null;
  function Food$Companion_getInstance() {
    if (Food$Companion_instance === null) {
      new Food$Companion();
    }
    return Food$Companion_instance;
  }
  function Food$$serializer() {
    this.serialClassDesc_safnxj$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.Food');
    this.serialClassDesc.addElement_61zpoe$('size');
    this.serialClassDesc.addElement_61zpoe$('pos');
    Food$$serializer_instance = this;
  }
  Object.defineProperty(Food$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_safnxj$_0;
    }
  });
  Food$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 0, obj.size);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 1, XY$$serializer_getInstance(), obj.pos);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Food$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 1, XY$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 1, XY$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Food_init(bitMask0, local0, local1, null);
  };
  Food$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Food$$serializer_instance = null;
  function Food$$serializer_getInstance() {
    if (Food$$serializer_instance === null) {
      new Food$$serializer();
    }
    return Food$$serializer_instance;
  }
  function Food_init(seen, size, pos, serializationConstructorMarker) {
    var $this = Object.create(Food.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('size');
    else
      $this.size_q5c0mn$_0 = size;
    if ((seen & 2) === 0)
      throw new MissingFieldException('pos');
    else
      $this.pos_q1oez4$_0 = pos;
    return $this;
  }
  Food.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Food',
    interfaces: [SizeObject, PosObject]
  };
  Food.prototype.component1 = function () {
    return this.size;
  };
  Food.prototype.component2 = function () {
    return this.pos;
  };
  Food.prototype.copy_mwwf0d$ = function (size, pos) {
    return new Food(size === void 0 ? this.size : size, pos === void 0 ? this.pos : pos);
  };
  Food.prototype.toString = function () {
    return 'Food(size=' + Kotlin.toString(this.size) + (', pos=' + Kotlin.toString(this.pos)) + ')';
  };
  Food.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    return result;
  };
  Food.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.size, other.size) && Kotlin.equals(this.pos, other.pos)))));
  };
  function Reactive(owner, size, speed, pos, born) {
    Reactive$Companion_getInstance();
    this.owner = owner;
    this.size_b5p5km$_0 = size;
    this.speed_9cdnlu$_0 = speed;
    this.pos_u5cfsb$_0 = pos;
    this.born = born;
  }
  Object.defineProperty(Reactive.prototype, 'size', {
    get: function () {
      return this.size_b5p5km$_0;
    },
    set: function (size) {
      this.size_b5p5km$_0 = size;
    }
  });
  Object.defineProperty(Reactive.prototype, 'speed', {
    get: function () {
      return this.speed_9cdnlu$_0;
    },
    set: function (speed) {
      this.speed_9cdnlu$_0 = speed;
    }
  });
  Object.defineProperty(Reactive.prototype, 'pos', {
    get: function () {
      return this.pos_u5cfsb$_0;
    },
    set: function (pos) {
      this.pos_u5cfsb$_0 = pos;
    }
  });
  function Reactive$Companion() {
    Reactive$Companion_instance = this;
  }
  Reactive$Companion.prototype.serializer = function () {
    return Reactive$$serializer_getInstance();
  };
  Reactive$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Reactive$Companion_instance = null;
  function Reactive$Companion_getInstance() {
    if (Reactive$Companion_instance === null) {
      new Reactive$Companion();
    }
    return Reactive$Companion_instance;
  }
  function Reactive$$serializer() {
    this.serialClassDesc_e3qjmc$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.Reactive');
    this.serialClassDesc.addElement_61zpoe$('owner');
    this.serialClassDesc.addElement_61zpoe$('size');
    this.serialClassDesc.addElement_61zpoe$('speed');
    this.serialClassDesc.addElement_61zpoe$('pos');
    this.serialClassDesc.addElement_61zpoe$('born');
    Reactive$$serializer_instance = this;
  }
  Object.defineProperty(Reactive$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_e3qjmc$_0;
    }
  });
  Reactive$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), obj.owner);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 1, obj.size);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 2, XY$$serializer_getInstance(), obj.speed);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 3, XY$$serializer_getInstance(), obj.pos);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 4, Tick$$serializer_getInstance(), obj.born);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Reactive$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 2, XY$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 2, XY$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 3, XY$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 3, XY$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 4, Tick$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 4, Tick$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Reactive_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  Reactive$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Reactive$$serializer_instance = null;
  function Reactive$$serializer_getInstance() {
    if (Reactive$$serializer_instance === null) {
      new Reactive$$serializer();
    }
    return Reactive$$serializer_instance;
  }
  function Reactive_init(seen, owner, size, speed, pos, born, serializationConstructorMarker) {
    var $this = Object.create(Reactive.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('owner');
    else
      $this.owner = owner;
    if ((seen & 2) === 0)
      throw new MissingFieldException('size');
    else
      $this.size_b5p5km$_0 = size;
    if ((seen & 4) === 0)
      throw new MissingFieldException('speed');
    else
      $this.speed_9cdnlu$_0 = speed;
    if ((seen & 8) === 0)
      throw new MissingFieldException('pos');
    else
      $this.pos_u5cfsb$_0 = pos;
    if ((seen & 16) === 0)
      throw new MissingFieldException('born');
    else
      $this.born = born;
    return $this;
  }
  Reactive.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reactive',
    interfaces: [EatMeWithSpeed]
  };
  Reactive.prototype.component1 = function () {
    return this.owner;
  };
  Reactive.prototype.component2 = function () {
    return this.size;
  };
  Reactive.prototype.component3 = function () {
    return this.speed;
  };
  Reactive.prototype.component4 = function () {
    return this.pos;
  };
  Reactive.prototype.component5 = function () {
    return this.born;
  };
  Reactive.prototype.copy_yjy2qv$ = function (owner, size, speed, pos, born) {
    return new Reactive(owner === void 0 ? this.owner : owner, size === void 0 ? this.size : size, speed === void 0 ? this.speed : speed, pos === void 0 ? this.pos : pos, born === void 0 ? this.born : born);
  };
  Reactive.prototype.toString = function () {
    return 'Reactive(owner=' + Kotlin.toString(this.owner) + (', size=' + Kotlin.toString(this.size)) + (', speed=' + Kotlin.toString(this.speed)) + (', pos=' + Kotlin.toString(this.pos)) + (', born=' + Kotlin.toString(this.born)) + ')';
  };
  Reactive.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.speed) | 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.born) | 0;
    return result;
  };
  Reactive.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.speed, other.speed) && Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.born, other.born)))));
  };
  function State(cars, foods, reactive, random, size, tick, repeatTickCalls, cacheFood, cacheReactive, cacheCars) {
    State$Companion_getInstance();
    if (cars === void 0) {
      cars = ArrayList_init();
    }
    if (foods === void 0) {
      foods = ArrayList_init();
    }
    if (reactive === void 0) {
      reactive = ArrayList_init();
    }
    if (random === void 0)
      random = 0;
    if (size === void 0)
      size = 0;
    if (tick === void 0)
      tick = new Tick(0);
    if (repeatTickCalls === void 0)
      repeatTickCalls = 0;
    if (cacheFood === void 0)
      cacheFood = new Mattr2D(MAX_W, MAX_H, State_init$lambda);
    if (cacheReactive === void 0)
      cacheReactive = new Mattr2D(MAX_W, MAX_H, State_init$lambda_0);
    if (cacheCars === void 0)
      cacheCars = new Mattr2D(MAX_W, MAX_H, State_init$lambda_1);
    this.cars = cars;
    this.foods = foods;
    this.reactive = reactive;
    this.random = random;
    this.size = size;
    this.tick = tick;
    this.repeatTickCalls = repeatTickCalls;
    this.cacheFood = cacheFood;
    this.cacheReactive = cacheReactive;
    this.cacheCars = cacheCars;
  }
  function State$Companion() {
    State$Companion_instance = this;
  }
  State$Companion.prototype.serializer = function () {
    return State$$serializer_getInstance();
  };
  State$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var State$Companion_instance = null;
  function State$Companion_getInstance() {
    if (State$Companion_instance === null) {
      new State$Companion();
    }
    return State$Companion_instance;
  }
  function State$$serializer() {
    this.serialClassDesc_kf7j1c$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.State');
    this.serialClassDesc.addElement_61zpoe$('cars');
    this.serialClassDesc.addElement_61zpoe$('foods');
    this.serialClassDesc.addElement_61zpoe$('reactive');
    this.serialClassDesc.addElement_61zpoe$('random');
    this.serialClassDesc.addElement_61zpoe$('size');
    this.serialClassDesc.addElement_61zpoe$('tick');
    State$$serializer_instance = this;
  }
  Object.defineProperty(State$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_kf7j1c$_0;
    }
  });
  State$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, new ArrayListSerializer(Car$$serializer_getInstance()), obj.cars);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 1, new ArrayListSerializer(Food$$serializer_getInstance()), obj.foods);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 2, new ArrayListSerializer(Reactive$$serializer_getInstance()), obj.reactive);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 3, obj.random);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 4, obj.size);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 5, Tick$$serializer_getInstance(), obj.tick);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  State$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, new ArrayListSerializer(Car$$serializer_getInstance())) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, new ArrayListSerializer(Car$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 1, new ArrayListSerializer(Food$$serializer_getInstance())) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 1, new ArrayListSerializer(Food$$serializer_getInstance()), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 2, new ArrayListSerializer(Reactive$$serializer_getInstance())) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 2, new ArrayListSerializer(Reactive$$serializer_getInstance()), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 5, Tick$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 5, Tick$$serializer_getInstance(), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return State_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  State$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var State$$serializer_instance = null;
  function State$$serializer_getInstance() {
    if (State$$serializer_instance === null) {
      new State$$serializer();
    }
    return State$$serializer_instance;
  }
  function State_init$lambda(col, row, col_0, row_0) {
    return ArrayList_init();
  }
  function State_init$lambda_0(col, row, col_0, row_0) {
    return ArrayList_init();
  }
  function State_init$lambda_1(col, row, col_0, row_0) {
    return ArrayList_init();
  }
  function State_init(seen, cars, foods, reactive, random, size, tick, serializationConstructorMarker) {
    var $this = Object.create(State.prototype);
    if ((seen & 1) === 0) {
      $this.cars = ArrayList_init();
    }
     else
      $this.cars = cars;
    if ((seen & 2) === 0) {
      $this.foods = ArrayList_init();
    }
     else
      $this.foods = foods;
    if ((seen & 4) === 0) {
      $this.reactive = ArrayList_init();
    }
     else
      $this.reactive = reactive;
    if ((seen & 8) === 0)
      throw new MissingFieldException('random');
    else
      $this.random = random;
    if ((seen & 16) === 0)
      throw new MissingFieldException('size');
    else
      $this.size = size;
    if ((seen & 32) === 0)
      throw new MissingFieldException('tick');
    else
      $this.tick = tick;
    $this.repeatTickCalls = 0;
    $this.cacheFood = new Mattr2D(MAX_W, MAX_H, State_init$lambda);
    $this.cacheReactive = new Mattr2D(MAX_W, MAX_H, State_init$lambda_0);
    $this.cacheCars = new Mattr2D(MAX_W, MAX_H, State_init$lambda_1);
    return $this;
  }
  function State_init$lambda(col, row, col_0, row_0) {
    return ArrayList_init();
  }
  function State_init$lambda_0(col, row, col_0, row_0) {
    return ArrayList_init();
  }
  function State_init$lambda_1(col, row, col_0, row_0) {
    return ArrayList_init();
  }
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  State.prototype.component1 = function () {
    return this.cars;
  };
  State.prototype.component2 = function () {
    return this.foods;
  };
  State.prototype.component3 = function () {
    return this.reactive;
  };
  State.prototype.component4 = function () {
    return this.random;
  };
  State.prototype.component5 = function () {
    return this.size;
  };
  State.prototype.component6 = function () {
    return this.tick;
  };
  State.prototype.component7 = function () {
    return this.repeatTickCalls;
  };
  State.prototype.component8 = function () {
    return this.cacheFood;
  };
  State.prototype.component9 = function () {
    return this.cacheReactive;
  };
  State.prototype.component10 = function () {
    return this.cacheCars;
  };
  State.prototype.copy_nsj3jp$ = function (cars, foods, reactive, random, size, tick, repeatTickCalls, cacheFood, cacheReactive, cacheCars) {
    return new State(cars === void 0 ? this.cars : cars, foods === void 0 ? this.foods : foods, reactive === void 0 ? this.reactive : reactive, random === void 0 ? this.random : random, size === void 0 ? this.size : size, tick === void 0 ? this.tick : tick, repeatTickCalls === void 0 ? this.repeatTickCalls : repeatTickCalls, cacheFood === void 0 ? this.cacheFood : cacheFood, cacheReactive === void 0 ? this.cacheReactive : cacheReactive, cacheCars === void 0 ? this.cacheCars : cacheCars);
  };
  State.prototype.toString = function () {
    return 'State(cars=' + Kotlin.toString(this.cars) + (', foods=' + Kotlin.toString(this.foods)) + (', reactive=' + Kotlin.toString(this.reactive)) + (', random=' + Kotlin.toString(this.random)) + (', size=' + Kotlin.toString(this.size)) + (', tick=' + Kotlin.toString(this.tick)) + (', repeatTickCalls=' + Kotlin.toString(this.repeatTickCalls)) + (', cacheFood=' + Kotlin.toString(this.cacheFood)) + (', cacheReactive=' + Kotlin.toString(this.cacheReactive)) + (', cacheCars=' + Kotlin.toString(this.cacheCars)) + ')';
  };
  State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cars) | 0;
    result = result * 31 + Kotlin.hashCode(this.foods) | 0;
    result = result * 31 + Kotlin.hashCode(this.reactive) | 0;
    result = result * 31 + Kotlin.hashCode(this.random) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.tick) | 0;
    result = result * 31 + Kotlin.hashCode(this.repeatTickCalls) | 0;
    result = result * 31 + Kotlin.hashCode(this.cacheFood) | 0;
    result = result * 31 + Kotlin.hashCode(this.cacheReactive) | 0;
    result = result * 31 + Kotlin.hashCode(this.cacheCars) | 0;
    return result;
  };
  State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cars, other.cars) && Kotlin.equals(this.foods, other.foods) && Kotlin.equals(this.reactive, other.reactive) && Kotlin.equals(this.random, other.random) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.tick, other.tick) && Kotlin.equals(this.repeatTickCalls, other.repeatTickCalls) && Kotlin.equals(this.cacheFood, other.cacheFood) && Kotlin.equals(this.cacheReactive, other.cacheReactive) && Kotlin.equals(this.cacheCars, other.cacheCars)))));
  };
  function deepCopy$lambda(this$deepCopy) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var $receiver = this$deepCopy.cars;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_5;
      tmp$_5 = $receiver.iterator();
      while (tmp$_5.hasNext()) {
        var item = tmp$_5.next();
        destination.add_11rb$(item.copy_j0eshq$());
      }
      tmp$ = toMutableList(destination);
      var $receiver_0 = this$deepCopy.reactive;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_6;
      tmp$_6 = $receiver_0.iterator();
      while (tmp$_6.hasNext()) {
        var item_0 = tmp$_6.next();
        destination_0.add_11rb$(item_0.copy_yjy2qv$());
      }
      tmp$_0 = toMutableList(destination_0);
      var $receiver_1 = this$deepCopy.foods;
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_7;
      tmp$_7 = $receiver_1.iterator();
      while (tmp$_7.hasNext()) {
        var item_1 = tmp$_7.next();
        destination_1.add_11rb$(item_1.copy_mwwf0d$());
      }
      tmp$_1 = toMutableList(destination_1);
      tmp$_2 = this$deepCopy.cacheFood;
      tmp$_3 = this$deepCopy.cacheReactive;
      tmp$_4 = this$deepCopy.cacheCars;
      return this$deepCopy.copy_nsj3jp$(tmp$, tmp$_1, tmp$_0, void 0, void 0, void 0, void 0, tmp$_2, tmp$_3, tmp$_4);
    };
  }
  function deepCopy_0($receiver) {
    return lib.measure_85cpgq$('State.deepCopy', deepCopy$lambda($receiver));
  }
  function PlayerId(id) {
    PlayerId$Companion_getInstance();
    this.id = id;
  }
  function PlayerId$Companion() {
    PlayerId$Companion_instance = this;
  }
  PlayerId$Companion.prototype.serializer = function () {
    return PlayerId$$serializer_getInstance();
  };
  PlayerId$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PlayerId$Companion_instance = null;
  function PlayerId$Companion_getInstance() {
    if (PlayerId$Companion_instance === null) {
      new PlayerId$Companion();
    }
    return PlayerId$Companion_instance;
  }
  function PlayerId$$serializer() {
    this.serialClassDesc_d3ohqv$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.PlayerId');
    this.serialClassDesc.addElement_61zpoe$('id');
    PlayerId$$serializer_instance = this;
  }
  Object.defineProperty(PlayerId$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_d3ohqv$_0;
    }
  });
  PlayerId$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 0, obj.id);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  PlayerId$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return PlayerId_init(bitMask0, local0, null);
  };
  PlayerId$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PlayerId$$serializer_instance = null;
  function PlayerId$$serializer_getInstance() {
    if (PlayerId$$serializer_instance === null) {
      new PlayerId$$serializer();
    }
    return PlayerId$$serializer_instance;
  }
  function PlayerId_init(seen, id, serializationConstructorMarker) {
    var $this = Object.create(PlayerId.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    return $this;
  }
  PlayerId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerId',
    interfaces: []
  };
  PlayerId.prototype.component1 = function () {
    return this.id;
  };
  PlayerId.prototype.copy_za3lpa$ = function (id) {
    return new PlayerId(id === void 0 ? this.id : id);
  };
  PlayerId.prototype.toString = function () {
    return 'PlayerId(id=' + Kotlin.toString(this.id) + ')';
  };
  PlayerId.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  PlayerId.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function XY(x, y) {
    XY$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  function XY$Companion() {
    XY$Companion_instance = this;
  }
  XY$Companion.prototype.serializer = function () {
    return XY$$serializer_getInstance();
  };
  XY$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var XY$Companion_instance = null;
  function XY$Companion_getInstance() {
    if (XY$Companion_instance === null) {
      new XY$Companion();
    }
    return XY$Companion_instance;
  }
  function XY$$serializer() {
    this.serialClassDesc_f5pgas$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.XY');
    this.serialClassDesc.addElement_61zpoe$('x');
    this.serialClassDesc.addElement_61zpoe$('y');
    XY$$serializer_instance = this;
  }
  Object.defineProperty(XY$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_f5pgas$_0;
    }
  });
  XY$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeDoubleElementValue_cy908x$(this.serialClassDesc, 0, obj.x);
    output.writeDoubleElementValue_cy908x$(this.serialClassDesc, 1, obj.y);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  XY$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readDoubleElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.readDoubleElementValue_xvmgof$(this.serialClassDesc, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return XY_init(bitMask0, local0, local1, null);
  };
  XY$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var XY$$serializer_instance = null;
  function XY$$serializer_getInstance() {
    if (XY$$serializer_instance === null) {
      new XY$$serializer();
    }
    return XY$$serializer_instance;
  }
  function XY_init(seen, x, y, serializationConstructorMarker) {
    var $this = Object.create(XY.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('x');
    else
      $this.x = x;
    if ((seen & 2) === 0)
      throw new MissingFieldException('y');
    else
      $this.y = y;
    return $this;
  }
  XY.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XY',
    interfaces: []
  };
  function XY_init_0(x, y, $this) {
    $this = $this || Object.create(XY.prototype);
    XY.call($this, x, y);
    return $this;
  }
  XY.prototype.component1 = function () {
    return this.x;
  };
  XY.prototype.component2 = function () {
    return this.y;
  };
  XY.prototype.copy_lu1900$ = function (x, y) {
    return new XY(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  XY.prototype.toString = function () {
    return 'XY(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  XY.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  XY.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function get_radius($receiver) {
    return get_radius_0($receiver.size);
  }
  function get_radius_0($receiver) {
    return GameConst_getInstance().MIN_RADIUS + 5 * Math_0.sqrt($receiver);
  }
  function degreesAngle(degrees) {
    return new Angle(degrees / 180.0 * math.PI);
  }
  function act($receiver, actions) {
    while (actions.hasNext()) {
      var element = actions.next();
      element.act_lvbgq3$($receiver);
    }
    return $receiver;
  }
  function Rect(pos, size) {
    this.pos = pos;
    this.size = size;
  }
  Rect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rect',
    interfaces: []
  };
  Rect.prototype.component1 = function () {
    return this.pos;
  };
  Rect.prototype.component2 = function () {
    return this.size;
  };
  Rect.prototype.copy_p5hrhe$ = function (pos, size) {
    return new Rect(pos === void 0 ? this.pos : pos, size === void 0 ? this.size : size);
  };
  Rect.prototype.toString = function () {
    return 'Rect(pos=' + Kotlin.toString(this.pos) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  Rect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  Rect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.size, other.size)))));
  };
  function get_topLeft($receiver) {
    return $receiver.pos.copy_lu1900$();
  }
  function get_topRight($receiver) {
    var tmp$ = $receiver.pos;
    var $receiver_0 = $receiver.size;
    var xy = new XY(1.0, 0.0);
    var $receiver_1 = $receiver_0.copy_lu1900$().copy_lu1900$();
    $receiver_1.x *= xy.x;
    $receiver_1.y *= xy.y;
    return tmp$.copy_lu1900$(tmp$.x + $receiver_1.x, tmp$.y + $receiver_1.y);
  }
  function get_bottomLeft($receiver) {
    var tmp$ = $receiver.pos;
    var $receiver_0 = $receiver.size;
    var xy = new XY(0.0, 1.0);
    var $receiver_1 = $receiver_0.copy_lu1900$().copy_lu1900$();
    $receiver_1.x *= xy.x;
    $receiver_1.y *= xy.y;
    return tmp$.copy_lu1900$(tmp$.x + $receiver_1.x, tmp$.y + $receiver_1.y);
  }
  function get_bottomRight($receiver) {
    var tmp$ = $receiver.pos;
    var $receiver_0 = $receiver.size;
    var xy = new XY(1.0, 1.0);
    var $receiver_1 = $receiver_0.copy_lu1900$().copy_lu1900$();
    $receiver_1.x *= xy.x;
    $receiver_1.y *= xy.y;
    return tmp$.copy_lu1900$(tmp$.x + $receiver_1.x, tmp$.y + $receiver_1.y);
  }
  function get_points($receiver) {
    return [get_topLeft($receiver), get_topRight($receiver), get_bottomLeft($receiver), get_bottomRight($receiver)];
  }
  function Bucket(col, row) {
    this.col = col;
    this.row = row;
    this.foods = ArrayList_init();
    this.cars = ArrayList_init();
    this.reactive = ArrayList_init();
  }
  Bucket.prototype.toString = function () {
    return '[' + this.col + ', ' + this.row + ']';
  };
  Bucket.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bucket',
    interfaces: []
  };
  function tick$lambda$lambda(this$tick) {
    return function () {
      var $receiver = plus_0(this$tick.cars, this$tick.reactive);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$tick_0 = this$tick;
        var $receiver_0 = element.pos;
        var b = times_3(element.speed, GameConst_getInstance().UPDATE_S);
        var $receiver_1 = $receiver_0.copy_lu1900$();
        $receiver_1.x += b.x;
        $receiver_1.y += b.y;
        element.pos = $receiver_1;
        var $receiver_2 = element.speed;
        var xy = new XY(0.98, 0.98);
        var $receiver_3 = $receiver_2.copy_lu1900$();
        $receiver_3.x *= xy.x;
        $receiver_3.y *= xy.y;
        element.speed = $receiver_3;
        if (element.pos.x >= get_width(this$tick_0))
          element.pos.x = element.pos.x - get_width(this$tick_0);
        else if (element.pos.x < 0)
          element.pos.x = element.pos.x + get_width(this$tick_0);
        if (element.pos.y >= get_height(this$tick_0))
          element.pos.y = element.pos.y - get_height(this$tick_0);
        else if (element.pos.y < 0)
          element.pos.y = element.pos.y + get_height(this$tick_0);
      }
      return Unit;
    };
  }
  function tick$lambda$lambda_0(closure$reactItr, this$tick) {
    return function () {
      while (closure$reactItr.v.hasNext())
        if (minus_4(this$tick.tick, closure$reactItr.v.next().born).compareTo_11rb$(GameConst_getInstance().REACTIVE_LIVE) > 0)
          closure$reactItr.v.remove();
      return Unit;
    };
  }
  function tick$lambda$lambda$lambda(it) {
    return it.owner.id;
  }
  var compareBy$lambda_1 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function tick$lambda$lambda_1(this$tick) {
    return function () {
      var $receiver = this$tick.cars;
      if ($receiver.size > 1) {
        sortWith($receiver, new Comparator$ObjectLiteral_1(compareBy$lambda_1(tick$lambda$lambda$lambda)));
      }
      return Unit;
    };
  }
  function tick$lambda$containsPoint($receiver, p) {
    return p.x >= get_topLeft($receiver).x && p.y >= get_topLeft($receiver).y && p.x <= get_bottomRight($receiver).x && p.y <= get_bottomRight($receiver).y;
  }
  function tick$lambda$isOverlap(closure$containsPoint) {
    return function ($receiver, other) {
      var $receiver_0 = get_points($receiver);
      var any$result;
      any$break: do {
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          if (closure$containsPoint(other, element)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      var tmp$_0 = any$result;
      if (!tmp$_0) {
        var $receiver_1 = get_points(other);
        var any$result_0;
        any$break: do {
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
            var element_0 = $receiver_1[tmp$_1];
            if (closure$containsPoint($receiver, element_0)) {
              any$result_0 = true;
              break any$break;
            }
          }
          any$result_0 = false;
        }
         while (false);
        tmp$_0 = any$result_0;
      }
      return tmp$_0;
    };
  }
  function tick$lambda$alternative(this$tick) {
    return function ($receiver) {
      var result = ArrayList_init();
      result.add_11rb$($receiver);
      var $receiver_0 = get_points($receiver);
      var any$result;
      any$break: do {
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          if (element.x >= get_width(this$tick)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      if (any$result)
        result.add_11rb$($receiver.copy_p5hrhe$($receiver.pos.copy_lu1900$($receiver.pos.x - get_width(this$tick))));
      else {
        var $receiver_1 = get_points($receiver);
        var any$result_0;
        any$break: do {
          var tmp$_0;
          for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
            var element_0 = $receiver_1[tmp$_0];
            if (element_0.x < 0) {
              any$result_0 = true;
              break any$break;
            }
          }
          any$result_0 = false;
        }
         while (false);
        if (any$result_0)
          result.add_11rb$($receiver.copy_p5hrhe$($receiver.pos.copy_lu1900$($receiver.pos.x + get_width(this$tick))));
      }
      var $receiver_2 = get_points($receiver);
      var any$result_1;
      any$break: do {
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== $receiver_2.length; ++tmp$_1) {
          var element_1 = $receiver_2[tmp$_1];
          if (element_1.y >= get_height(this$tick)) {
            any$result_1 = true;
            break any$break;
          }
        }
        any$result_1 = false;
      }
       while (false);
      if (any$result_1) {
        var $receiver_3 = copy(result);
        var tmp$_2;
        tmp$_2 = $receiver_3.iterator();
        while (tmp$_2.hasNext()) {
          var element_2 = tmp$_2.next();
          result.add_11rb$(element_2.copy_p5hrhe$(element_2.pos.copy_lu1900$(void 0, element_2.pos.y - get_height(this$tick))));
        }
      }
       else {
        var $receiver_4 = get_points($receiver);
        var any$result_2;
        any$break: do {
          var tmp$_3;
          for (tmp$_3 = 0; tmp$_3 !== $receiver_4.length; ++tmp$_3) {
            var element_3 = $receiver_4[tmp$_3];
            if (element_3.y < 0) {
              any$result_2 = true;
              break any$break;
            }
          }
          any$result_2 = false;
        }
         while (false);
        if (any$result_2) {
          var $receiver_5 = copy(result);
          var tmp$_4;
          tmp$_4 = $receiver_5.iterator();
          while (tmp$_4.hasNext()) {
            var element_4 = tmp$_4.next();
            result.add_11rb$(element_4.copy_p5hrhe$(element_4.pos.copy_lu1900$(void 0, element_4.pos.y + get_height(this$tick))));
          }
        }
      }
      return result;
    };
  }
  function tick$lambda$toRect($receiver) {
    var $receiver_0 = $receiver.pos;
    var a = XY_init_0(get_radius($receiver), get_radius($receiver));
    return new Rect($receiver_0.copy_lu1900$($receiver_0.x - a.x, $receiver_0.y - a.y), XY_init_0(2 * get_radius($receiver), 2 * get_radius($receiver)));
  }
  function tick$lambda$isOverlapRect(closure$toRect, closure$alternative, closure$isOverlap) {
    return function ($receiver, rect) {
      var $receiver_0 = closure$alternative(closure$toRect($receiver));
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (closure$isOverlap(element, rect)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }
  function tick$lambda$rect(this$tick) {
    return function ($receiver) {
      return new Rect(new XY($receiver.col * get_width(this$tick) / $receiver.matrix.COLS, $receiver.row * get_height(this$tick) / $receiver.matrix.ROWS), new XY(get_width(this$tick) / $receiver.matrix.COLS, get_height(this$tick) / $receiver.matrix.ROWS));
    };
  }
  function tick$lambda$overlap(this$tick) {
    return function ($receiver, xy) {
      return distance(this$tick, $receiver.pos, xy) <= get_radius($receiver);
    };
  }
  function tick$lambda$overlapCell(closure$rect, closure$isOverlapRect) {
    return function ($receiver, matrix) {
      var $receiver_0 = matrix.all;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$rect_0 = closure$rect;
        if (closure$isOverlapRect($receiver, closure$rect_0(element)))
          destination.add_11rb$(element);
      }
      return destination;
    };
  }
  function tick$lambda$mod(value, module_0) {
    if (value < 0)
      return value + module_0 | 0;
    else if (value >= module_0)
      return value - module_0 | 0;
    else
      return value;
  }
  function tick$lambda$storeCol(closure$w, closure$mod) {
    return function ($receiver) {
      return closure$mod(numberToInt($receiver.pos.x / closure$w), MAX_W);
    };
  }
  function tick$lambda$storeRow(closure$h, closure$mod) {
    return function ($receiver) {
      return closure$mod(numberToInt($receiver.pos.y / closure$h), MAX_H);
    };
  }
  function tick$lambda$lambda$lambda_0(this$tick, closure$storeCol, closure$storeRow) {
    return function () {
      clearCache(this$tick.cacheFood);
      var $receiver = this$tick.foods;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$tick_0 = this$tick;
        var closure$storeCol_0 = closure$storeCol;
        var closure$storeRow_0 = closure$storeRow;
        var $this = this$tick_0.cacheFood;
        var col = closure$storeCol_0(element);
        var row = closure$storeRow_0(element);
        (false ? $this.all.get_za3lpa$(Kotlin.imul(col, $this.ROWS) + row | 0) : ensureNotNull(ensureNotNull($this.map.get_11rb$(col)).get_11rb$(row))).value.add_11rb$(element);
      }
      return Unit;
    };
  }
  function tick$lambda$lambda_2(this$tick, closure$storeCol, closure$storeRow) {
    return function () {
      lib.measure_85cpgq$('tick.sortBuckets', tick$lambda$lambda$lambda_0(this$tick, closure$storeCol, closure$storeRow));
      return Unit;
    };
  }
  function tick$lambda$lambda_3(this$tick, closure$storeCol, closure$storeRow) {
    return function () {
      clearCache(this$tick.cacheReactive);
      var $receiver = this$tick.reactive;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$tick_0 = this$tick;
        var closure$storeCol_0 = closure$storeCol;
        var closure$storeRow_0 = closure$storeRow;
        var $this = this$tick_0.cacheReactive;
        var col = closure$storeCol_0(element);
        var row = closure$storeRow_0(element);
        (false ? $this.all.get_za3lpa$(Kotlin.imul(col, $this.ROWS) + row | 0) : ensureNotNull(ensureNotNull($this.map.get_11rb$(col)).get_11rb$(row))).value.add_11rb$(element);
      }
      return Unit;
    };
  }
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function tick$lambda$lambda$lambda_1(this$tick, closure$overlapCell, closure$overlap, closure$reactItr) {
    return function () {
      var tmp$;
      var handleFoodCars = this$tick.cars;
      while (handleFoodCars.size > 0) {
        var changedSizeCars = LinkedHashSet_init();
        tmp$ = handleFoodCars.iterator();
        while (tmp$.hasNext()) {
          var car = tmp$.next();
          var overlapBuckets = closure$overlapCell(car, this$tick.cacheFood);
          var tmp$_0;
          tmp$_0 = overlapBuckets.iterator();
          while (tmp$_0.hasNext()) {
            var element = tmp$_0.next();
            var closure$overlap_0 = closure$overlap;
            var this$tick_0 = this$tick;
            var foodItr = element.value.iterator();
            while (foodItr.hasNext()) {
              var f = foodItr.next();
              if (closure$overlap_0(car, f.pos)) {
                if (this$tick_0.foods.contains_11rb$(f)) {
                  this$tick_0.foods.remove_11rb$(f);
                  car.size = car.size + f.size | 0;
                  changedSizeCars.add_11rb$(car);
                }
              }
            }
          }
          var overlapBuckets2 = closure$overlapCell(car, this$tick.cacheReactive);
          var tmp$_1;
          tmp$_1 = overlapBuckets2.iterator();
          while (tmp$_1.hasNext()) {
            var element_0 = tmp$_1.next();
            var closure$reactItr_0 = closure$reactItr;
            var closure$overlap_1 = closure$overlap;
            var this$tick_1 = this$tick;
            var tmp$_2;
            closure$reactItr_0.v = element_0.value.iterator();
            while (closure$reactItr_0.v.hasNext()) {
              var r = closure$reactItr_0.v.next();
              if (!((tmp$_2 = r.owner) != null ? tmp$_2.equals(car.owner) : null))
                if (closure$overlap_1(car, r.pos))
                  if (this$tick_1.reactive.contains_11rb$(r)) {
                    this$tick_1.reactive.remove_11rb$(r);
                    car.size = car.size + r.size | 0;
                    changedSizeCars.add_11rb$(car);
                  }
            }
          }
        }
        handleFoodCars = toMutableList(changedSizeCars);
      }
      return Unit;
    };
  }
  function tick$lambda$lambda_4(this$tick, closure$overlapCell, closure$overlap, closure$reactItr) {
    return function () {
      lib.measure_85cpgq$('tick.eatFoods', tick$lambda$lambda$lambda_1(this$tick, closure$overlapCell, closure$overlap, closure$reactItr));
      return Unit;
    };
  }
  function tick$lambda$lambda_5(this$tick, closure$storeCol, closure$storeRow) {
    return function () {
      clearCache(this$tick.cacheCars);
      var $receiver = this$tick.cars;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$tick_0 = this$tick;
        var closure$storeCol_0 = closure$storeCol;
        var closure$storeRow_0 = closure$storeRow;
        var $this = this$tick_0.cacheCars;
        var col = closure$storeCol_0(element);
        var row = closure$storeRow_0(element);
        (false ? $this.all.get_za3lpa$(Kotlin.imul(col, $this.ROWS) + row | 0) : ensureNotNull(ensureNotNull($this.map.get_11rb$(col)).get_11rb$(row))).value.add_11rb$(element);
      }
      return Unit;
    };
  }
  function tick$lambda$lambda$lambda_2(this$tick, closure$overlapCell) {
    return function () {
      var handleCarsDestroy = {v: true};
      while (handleCarsDestroy.v) {
        handleCarsDestroy.v = false;
        var carItr = this$tick.cars.iterator();
        while (carItr.hasNext()) {
          var del = carItr.next();
          var overlapBuckets = closure$overlapCell(del, this$tick.cacheCars);
          var tmp$;
          tmp$ = overlapBuckets.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            var this$tick_0 = this$tick;
            var tmp$_0;
            tmp$_0 = element.value.iterator();
            while (tmp$_0.hasNext()) {
              var c = tmp$_0.next();
              if (!(del != null ? del.equals(c) : null))
                if (del.size < c.size)
                  if (distance(this$tick_0, c.pos, del.pos) <= get_radius(c))
                    if (this$tick_0.cars.contains_11rb$(c)) {
                      c.size = c.size + del.size | 0;
                      carItr.remove();
                      handleCarsDestroy.v = true;
                      break;
                    }
            }
          }
        }
      }
      return Unit;
    };
  }
  function tick$lambda$lambda_6(this$tick, closure$overlapCell) {
    return function () {
      lib.measure_85cpgq$('tick.eatCars', tick$lambda$lambda$lambda_2(this$tick, closure$overlapCell));
      return Unit;
    };
  }
  function tick$lambda$lambda$lambda_3(this$tick) {
    return function () {
      var oldW = get_width(this$tick);
      var oldH = get_height(this$tick);
      var delta = get_targetSize(this$tick) - this$tick.size | 0;
      var delta2 = numberToInt(delta * lib.Fun.arg0toInf_vux9f0$(abs_0(delta), 50));
      var tmp$ = this$tick;
      var tmp$_0 = this$tick.size;
      var tmp$_1 = get_sign(delta2);
      var a = abs_0(delta2);
      tmp$.size = tmp$_0 + Kotlin.imul(tmp$_1, Math_0.min(a, 30)) | 0;
      var $receiver = plus_0(plus_0(this$tick.cars, this$tick.reactive), this$tick.foods);
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        var this$tick_0 = this$tick;
        var $receiver_0 = element.pos;
        var xy = new XY(get_width(this$tick_0) / oldW, get_height(this$tick_0) / oldH);
        var $receiver_1 = $receiver_0.copy_lu1900$();
        $receiver_1.x *= xy.x;
        $receiver_1.y *= xy.y;
        element.pos = $receiver_1;
      }
      return Unit;
    };
  }
  function tick$lambda$lambda_7(this$tick) {
    return function () {
      if (get_targetSize(this$tick) !== this$tick.size)
        lib.measure_85cpgq$('tick.resize', tick$lambda$lambda$lambda_3(this$tick));
      return Unit;
    };
  }
  function tick$lambda(this$tick) {
    return function () {
      this$tick.repeatTickCalls = 0;
      this$tick.tick = plus_6(this$tick.tick, 1);
      lib.measure_85cpgq$('tick.move', tick$lambda$lambda(this$tick));
      var reactItr = {v: this$tick.reactive.iterator()};
      lib.measure_85cpgq$('tick.reactiveLife', tick$lambda$lambda_0(reactItr, this$tick));
      lib.measure_85cpgq$('tick.sortCars', tick$lambda$lambda_1(this$tick));
      var containsPoint = tick$lambda$containsPoint;
      var isOverlap = tick$lambda$isOverlap(containsPoint);
      var alternative = tick$lambda$alternative(this$tick);
      var toRect = tick$lambda$toRect;
      var isOverlapRect = tick$lambda$isOverlapRect(toRect, alternative, isOverlap);
      var rect = tick$lambda$rect(this$tick);
      var w = get_width(this$tick) / MAX_W;
      var h = get_height(this$tick) / MAX_H;
      var overlap = tick$lambda$overlap(this$tick);
      var overlapCell = tick$lambda$overlapCell(rect, isOverlapRect);
      var mod = tick$lambda$mod;
      var storeCol = tick$lambda$storeCol(w, mod);
      var storeRow = tick$lambda$storeRow(h, mod);
      repeatTick(this$tick, 20, tick$lambda$lambda_2(this$tick, storeCol, storeRow));
      repeatTick(this$tick, 5, tick$lambda$lambda_3(this$tick, storeCol, storeRow));
      repeatTick(this$tick, 5, tick$lambda$lambda_4(this$tick, overlapCell, overlap, reactItr));
      repeatTick(this$tick, 3, tick$lambda$lambda_5(this$tick, storeCol, storeRow));
      repeatTick(this$tick, 3, tick$lambda$lambda_6(this$tick, overlapCell));
      while (this$tick.foods.size < get_targetFoods(this$tick))
        this$tick.foods.add_11rb$(new Food(GameConst_getInstance().FOOD_SIZE + rnd_2(this$tick, 0, GameConst_getInstance().FOOD_SIZE) | 0, rndPos(this$tick)));
      repeatTick(this$tick, 3, tick$lambda$lambda_7(this$tick));
      return Unit;
    };
  }
  function tick($receiver) {
    lib.measure_85cpgq$('tick', tick$lambda($receiver));
  }
  function get_sign($receiver) {
    if ($receiver > 0)
      return 1;
    else if ($receiver < 0)
      return -1;
    else
      return 0;
  }
  function get_targetFoods($receiver) {
    return GameConst_getInstance().FOODS + Kotlin.imul(GameConst_getInstance().FOOD_PER_CAR, $receiver.cars.size) | 0;
  }
  function get_targetSize($receiver) {
    return Kotlin.imul($receiver.cars.size, GameConst_getInstance().CHANGE_SIZE_PER_CAR);
  }
  var widthCache;
  var heightCache;
  function get_width($receiver) {
    var $receiver_0 = widthCache;
    var key = $receiver.size;
    var tmp$;
    var value = $receiver_0.get_11rb$(key);
    if (value == null) {
      var x = GameConst_getInstance().BASE_WIDTH * GameConst_getInstance().BASE_WIDTH + Kotlin.imul($receiver.size, $receiver.size);
      var answer = Math_0.sqrt(x);
      $receiver_0.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  }
  function get_height($receiver) {
    var $receiver_0 = heightCache;
    var key = $receiver.size;
    var tmp$;
    var value = $receiver_0.get_11rb$(key);
    if (value == null) {
      var x = GameConst_getInstance().BASE_HEIGHT * GameConst_getInstance().BASE_HEIGHT + Kotlin.imul($receiver.size, $receiver.size);
      var answer = Math_0.sqrt(x);
      $receiver_0.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  }
  function distance($receiver, a, b) {
    var x = b.x - a.x;
    var a_0 = Math_0.abs(x);
    var b_0 = b.x + get_width($receiver) - a.x;
    var dx = Math_0.min(a_0, b_0);
    var a_1 = dx;
    var b_1 = a.x + get_width($receiver) - b.x;
    dx = Math_0.min(a_1, b_1);
    var x_0 = b.y - a.y;
    var a_2 = Math_0.abs(x_0);
    var b_2 = b.y + get_height($receiver) - a.y;
    var dy = Math_0.min(a_2, b_2);
    var a_3 = dy;
    var b_3 = a.y + get_height($receiver) - b.y;
    dy = Math_0.min(a_3, b_3);
    var x_1 = dx * dx + dy * dy;
    return Math_0.sqrt(x_1);
  }
  function rnd_2($receiver, min, max) {
    $receiver.random = Kotlin.imul($receiver.random, 1664525) + 1013904223 & 2147483647;
    return min + $receiver.random % (max - min + 1 | 0) | 0;
  }
  function rnd_3($receiver, max) {
    return rnd_2($receiver, 0, max);
  }
  function rnd_4($receiver, min, max) {
    if (min === void 0)
      min = 0.0;
    if (max === void 0)
      max = 1.0;
    return min + rnd_3($receiver, 999) / 1000.0 * (max - min);
  }
  function rndPos($receiver) {
    return new XY(rnd_4($receiver, get_width($receiver)), rnd_4($receiver, get_height($receiver)));
  }
  var plus_5 = defineInlineFunction('game.com.riseofcat.share.mass.plus_cii3jz$', function ($receiver, a) {
    return $receiver.copy_lu1900$($receiver.x + a.x, $receiver.y + a.y);
  });
  var minus_3 = defineInlineFunction('game.com.riseofcat.share.mass.minus_cii3jz$', function ($receiver, a) {
    return $receiver.copy_lu1900$($receiver.x - a.x, $receiver.y - a.y);
  });
  var mscale = defineInlineFunction('game.com.riseofcat.share.mass.mscale_f2s5ku$', wrapFunction(function () {
    return function ($receiver, xy) {
      var $receiver_0 = $receiver.copy_lu1900$();
      $receiver_0.x *= xy.x;
      $receiver_0.y *= xy.y;
      return $receiver_0;
    };
  }));
  var mscale_0 = defineInlineFunction('game.com.riseofcat.share.mass.mscale_n81ivb$', wrapFunction(function () {
    var XY_init = _.com.riseofcat.share.mass.XY;
    return function ($receiver, scl) {
      var xy = new XY_init(scl, scl);
      var $receiver_0 = $receiver.copy_lu1900$();
      $receiver_0.x *= xy.x;
      $receiver_0.y *= xy.y;
      return $receiver_0;
    };
  }));
  var scale = defineInlineFunction('game.com.riseofcat.share.mass.scale_f2s5ku$', wrapFunction(function () {
    return function ($receiver, xy) {
      var $receiver_0 = $receiver.copy_lu1900$().copy_lu1900$();
      $receiver_0.x *= xy.x;
      $receiver_0.y *= xy.y;
      return $receiver_0;
    };
  }));
  var scale_0 = defineInlineFunction('game.com.riseofcat.share.mass.scale_n81ivb$', wrapFunction(function () {
    var XY_init = _.com.riseofcat.share.mass.XY;
    return function ($receiver, scl) {
      var $receiver_0 = $receiver.copy_lu1900$();
      var xy = new XY_init(scl, scl);
      var $receiver_1 = $receiver_0.copy_lu1900$();
      $receiver_1.x *= xy.x;
      $receiver_1.y *= xy.y;
      return $receiver_1;
    };
  }));
  var msum = defineInlineFunction('game.com.riseofcat.share.mass.msum_f2s5ku$', wrapFunction(function () {
    return function ($receiver, b) {
      var $receiver_0 = $receiver.copy_lu1900$();
      $receiver_0.x += b.x;
      $receiver_0.y += b.y;
      return $receiver_0;
    };
  }));
  var sum_1 = defineInlineFunction('game.com.riseofcat.share.mass.sum_f2s5ku$', wrapFunction(function () {
    return function ($receiver, b) {
      var $receiver_0 = $receiver.copy_lu1900$().copy_lu1900$();
      $receiver_0.x += b.x;
      $receiver_0.y += b.y;
      return $receiver_0;
    };
  }));
  function times_3($receiver, scl) {
    var $receiver_0 = $receiver.copy_lu1900$();
    var xy = new XY(scl, scl);
    var $receiver_1 = $receiver_0.copy_lu1900$();
    $receiver_1.x *= xy.x;
    $receiver_1.y *= xy.y;
    return $receiver_1;
  }
  function get_len($receiver) {
    return dst($receiver, new XY(0.0, 0.0));
  }
  function dst($receiver, xy) {
    var x = (xy.x - $receiver.x) * (xy.x - $receiver.x) + (xy.y - $receiver.y) * (xy.y - $receiver.y);
    return Math_0.sqrt(x);
  }
  function calcAngle($receiver) {
    var y = $receiver.y;
    var x = $receiver.x;
    return new Angle(Math_0.atan2(y, x));
  }
  function Tick(tick) {
    Tick$Companion_getInstance();
    this.tick = tick;
  }
  Tick.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.tick, other.tick);
  };
  function Tick$Companion() {
    Tick$Companion_instance = this;
  }
  Tick$Companion.prototype.serializer = function () {
    return Tick$$serializer_getInstance();
  };
  Tick$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tick$Companion_instance = null;
  function Tick$Companion_getInstance() {
    if (Tick$Companion_instance === null) {
      new Tick$Companion();
    }
    return Tick$Companion_instance;
  }
  function Tick$$serializer() {
    this.serialClassDesc_8zzkzs$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.Tick');
    this.serialClassDesc.addElement_61zpoe$('tick');
    Tick$$serializer_instance = this;
  }
  Object.defineProperty(Tick$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_8zzkzs$_0;
    }
  });
  Tick$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 0, obj.tick);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Tick$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Tick_init(bitMask0, local0, null);
  };
  Tick$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Tick$$serializer_instance = null;
  function Tick$$serializer_getInstance() {
    if (Tick$$serializer_instance === null) {
      new Tick$$serializer();
    }
    return Tick$$serializer_instance;
  }
  function Tick_init(seen, tick, serializationConstructorMarker) {
    var $this = Object.create(Tick.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('tick');
    else
      $this.tick = tick;
    return $this;
  }
  Tick.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tick',
    interfaces: [Comparable]
  };
  function Tick_init_0(longTick, $this) {
    $this = $this || Object.create(Tick.prototype);
    Tick.call($this, longTick.toInt());
    return $this;
  }
  Tick.prototype.component1 = function () {
    return this.tick;
  };
  Tick.prototype.copy_za3lpa$ = function (tick) {
    return new Tick(tick === void 0 ? this.tick : tick);
  };
  Tick.prototype.toString = function () {
    return 'Tick(tick=' + Kotlin.toString(this.tick) + ')';
  };
  Tick.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tick) | 0;
    return result;
  };
  Tick.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.tick, other.tick))));
  };
  function times_4($receiver, multiply) {
    return new Tick(Kotlin.imul($receiver.tick, multiply));
  }
  function plus_6($receiver, i) {
    return new Tick($receiver.tick + i | 0);
  }
  function plus_7($receiver, l) {
    return Tick_init_0(Kotlin.Long.fromInt($receiver.tick).add(l));
  }
  function plus_8($receiver, other) {
    return new Tick($receiver.tick + other.tick | 0);
  }
  function minus_4($receiver, other) {
    return new Tick($receiver.tick - other.tick | 0);
  }
  function times_5($receiver, scl) {
    return new Tick(numberToInt($receiver.tick * scl));
  }
  function AllCommand(tick, pid, newCarCmd, moveCmd) {
    AllCommand$Companion_getInstance();
    if (newCarCmd === void 0)
      newCarCmd = null;
    if (moveCmd === void 0)
      moveCmd = null;
    this.tick = tick;
    this.pid = pid;
    this.newCarCmd = newCarCmd;
    this.moveCmd = moveCmd;
  }
  AllCommand.prototype.act_lvbgq3$ = function (state) {
    var tmp$, tmp$_0;
    (tmp$ = this.newCarCmd) != null ? (tmp$.act_lvbgq3$(state), Unit) : null;
    (tmp$_0 = this.moveCmd) != null ? (tmp$_0.act_lvbgq3$(state), Unit) : null;
  };
  function AllCommand$Companion() {
    AllCommand$Companion_instance = this;
  }
  AllCommand$Companion.prototype.serializer = function () {
    return AllCommand$$serializer_getInstance();
  };
  AllCommand$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AllCommand$Companion_instance = null;
  function AllCommand$Companion_getInstance() {
    if (AllCommand$Companion_instance === null) {
      new AllCommand$Companion();
    }
    return AllCommand$Companion_instance;
  }
  function AllCommand$$serializer() {
    this.serialClassDesc_tmyeqt$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.AllCommand');
    this.serialClassDesc.addElement_61zpoe$('tick');
    this.serialClassDesc.addElement_61zpoe$('pid');
    this.serialClassDesc.addElement_61zpoe$('newCarCmd');
    this.serialClassDesc.addElement_61zpoe$('moveCmd');
    AllCommand$$serializer_instance = this;
  }
  Object.defineProperty(AllCommand$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_tmyeqt$_0;
    }
  });
  AllCommand$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, Tick$$serializer_getInstance(), obj.tick);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 1, PlayerId$$serializer_getInstance(), obj.pid);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, NewCarCommand$$serializer_getInstance(), obj.newCarCmd);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 3, MoveCommand$$serializer_getInstance(), obj.moveCmd);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  AllCommand$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, Tick$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, Tick$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 1, PlayerId$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 1, PlayerId$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 2, NewCarCommand$$serializer_getInstance()) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 2, NewCarCommand$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 3, MoveCommand$$serializer_getInstance()) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 3, MoveCommand$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return AllCommand_init(bitMask0, local0, local1, local2, local3, null);
  };
  AllCommand$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var AllCommand$$serializer_instance = null;
  function AllCommand$$serializer_getInstance() {
    if (AllCommand$$serializer_instance === null) {
      new AllCommand$$serializer();
    }
    return AllCommand$$serializer_instance;
  }
  function AllCommand_init(seen, tick, pid, newCarCmd, moveCmd, serializationConstructorMarker) {
    var $this = Object.create(AllCommand.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('tick');
    else
      $this.tick = tick;
    if ((seen & 2) === 0)
      throw new MissingFieldException('pid');
    else
      $this.pid = pid;
    if ((seen & 4) === 0)
      $this.newCarCmd = null;
    else
      $this.newCarCmd = newCarCmd;
    if ((seen & 8) === 0)
      $this.moveCmd = null;
    else
      $this.moveCmd = moveCmd;
    return $this;
  }
  AllCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AllCommand',
    interfaces: [ICommand]
  };
  function ServerPayload(stableTick, welcome, stable, actions, error, recommendedLatency) {
    ServerPayload$Companion_getInstance();
    if (welcome === void 0)
      welcome = null;
    if (stable === void 0)
      stable = null;
    if (actions === void 0) {
      actions = ArrayList_init();
    }
    if (error === void 0)
      error = null;
    if (recommendedLatency === void 0)
      recommendedLatency = null;
    this.stableTick = stableTick;
    this.welcome = welcome;
    this.stable = stable;
    this.actions = actions;
    this.error = error;
    this.recommendedLatency = recommendedLatency;
  }
  function ServerPayload$Companion() {
    ServerPayload$Companion_instance = this;
  }
  ServerPayload$Companion.prototype.serializer = function () {
    return ServerPayload$$serializer_getInstance();
  };
  ServerPayload$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ServerPayload$Companion_instance = null;
  function ServerPayload$Companion_getInstance() {
    if (ServerPayload$Companion_instance === null) {
      new ServerPayload$Companion();
    }
    return ServerPayload$Companion_instance;
  }
  function ServerPayload$$serializer() {
    this.serialClassDesc_6c84ii$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.ServerPayload');
    this.serialClassDesc.addElement_61zpoe$('stableTick');
    this.serialClassDesc.addElement_61zpoe$('welcome');
    this.serialClassDesc.addElement_61zpoe$('stable');
    this.serialClassDesc.addElement_61zpoe$('actions');
    this.serialClassDesc.addElement_61zpoe$('error');
    this.serialClassDesc.addElement_61zpoe$('recommendedLatency');
    ServerPayload$$serializer_instance = this;
  }
  Object.defineProperty(ServerPayload$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_6c84ii$_0;
    }
  });
  ServerPayload$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, Tick$$serializer_getInstance(), obj.stableTick);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, Welcome$$serializer_getInstance(), obj.welcome);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, State$$serializer_getInstance(), obj.stable);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 3, new ArrayListSerializer(AllCommand$$serializer_getInstance()), obj.actions);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 4, ServerError$$serializer_getInstance(), obj.error);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 5, Duration$$serializer_getInstance(), obj.recommendedLatency);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  ServerPayload$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, Tick$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, Tick$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 1, Welcome$$serializer_getInstance()) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 1, Welcome$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 2, State$$serializer_getInstance()) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 2, State$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 3, new ArrayListSerializer(AllCommand$$serializer_getInstance())) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 3, new ArrayListSerializer(AllCommand$$serializer_getInstance()), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 4, ServerError$$serializer_getInstance()) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 4, ServerError$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 5, Duration$$serializer_getInstance()) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 5, Duration$$serializer_getInstance(), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return ServerPayload_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  ServerPayload$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var ServerPayload$$serializer_instance = null;
  function ServerPayload$$serializer_getInstance() {
    if (ServerPayload$$serializer_instance === null) {
      new ServerPayload$$serializer();
    }
    return ServerPayload$$serializer_instance;
  }
  function ServerPayload_init(seen, stableTick, welcome, stable, actions, error, recommendedLatency, serializationConstructorMarker) {
    var $this = Object.create(ServerPayload.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('stableTick');
    else
      $this.stableTick = stableTick;
    if ((seen & 2) === 0)
      $this.welcome = null;
    else
      $this.welcome = welcome;
    if ((seen & 4) === 0)
      $this.stable = null;
    else
      $this.stable = stable;
    if ((seen & 8) === 0) {
      $this.actions = ArrayList_init();
    }
     else
      $this.actions = actions;
    if ((seen & 16) === 0)
      $this.error = null;
    else
      $this.error = error;
    if ((seen & 32) === 0)
      $this.recommendedLatency = null;
    else
      $this.recommendedLatency = recommendedLatency;
    return $this;
  }
  ServerPayload.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerPayload',
    interfaces: []
  };
  function Welcome(id, roomCreate) {
    Welcome$Companion_getInstance();
    this.id = id;
    this.roomCreate = roomCreate;
  }
  function Welcome$Companion() {
    Welcome$Companion_instance = this;
  }
  Welcome$Companion.prototype.serializer = function () {
    return Welcome$$serializer_getInstance();
  };
  Welcome$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Welcome$Companion_instance = null;
  function Welcome$Companion_getInstance() {
    if (Welcome$Companion_instance === null) {
      new Welcome$Companion();
    }
    return Welcome$Companion_instance;
  }
  function Welcome$$serializer() {
    this.serialClassDesc_1garv5$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.Welcome');
    this.serialClassDesc.addElement_61zpoe$('id');
    this.serialClassDesc.addElement_61zpoe$('roomCreate');
    Welcome$$serializer_instance = this;
  }
  Object.defineProperty(Welcome$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_1garv5$_0;
    }
  });
  Welcome$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), obj.id);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 1, TimeStamp$$serializer_getInstance(), obj.roomCreate);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Welcome$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, PlayerId$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 1, TimeStamp$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 1, TimeStamp$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Welcome_init(bitMask0, local0, local1, null);
  };
  Welcome$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Welcome$$serializer_instance = null;
  function Welcome$$serializer_getInstance() {
    if (Welcome$$serializer_instance === null) {
      new Welcome$$serializer();
    }
    return Welcome$$serializer_instance;
  }
  function Welcome_init(seen, id, roomCreate, serializationConstructorMarker) {
    var $this = Object.create(Welcome.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new MissingFieldException('roomCreate');
    else
      $this.roomCreate = roomCreate;
    return $this;
  }
  Welcome.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Welcome',
    interfaces: []
  };
  function ClientPayload(actions) {
    ClientPayload$Companion_getInstance();
    this.actions = actions;
  }
  function ClientPayload$ClientAction(tick, moveDirection, newCar) {
    ClientPayload$ClientAction$Companion_getInstance();
    if (moveDirection === void 0)
      moveDirection = null;
    if (newCar === void 0)
      newCar = false;
    this.tick = tick;
    this.moveDirection = moveDirection;
    this.newCar = newCar;
  }
  function ClientPayload$ClientAction$Companion() {
    ClientPayload$ClientAction$Companion_instance = this;
  }
  ClientPayload$ClientAction$Companion.prototype.serializer = function () {
    return ClientPayload$ClientAction$$serializer_getInstance();
  };
  ClientPayload$ClientAction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ClientPayload$ClientAction$Companion_instance = null;
  function ClientPayload$ClientAction$Companion_getInstance() {
    if (ClientPayload$ClientAction$Companion_instance === null) {
      new ClientPayload$ClientAction$Companion();
    }
    return ClientPayload$ClientAction$Companion_instance;
  }
  function ClientPayload$ClientAction$$serializer() {
    this.serialClassDesc_uisv2f$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.ClientPayload.ClientAction');
    this.serialClassDesc.addElement_61zpoe$('tick');
    this.serialClassDesc.addElement_61zpoe$('moveDirection');
    this.serialClassDesc.addElement_61zpoe$('newCar');
    ClientPayload$ClientAction$$serializer_instance = this;
  }
  Object.defineProperty(ClientPayload$ClientAction$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_uisv2f$_0;
    }
  });
  ClientPayload$ClientAction$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, Tick$$serializer_getInstance(), obj.tick);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, Angle$$serializer_getInstance(), obj.moveDirection);
    output.writeBooleanElementValue_gw9ugo$(this.serialClassDesc, 2, obj.newCar);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  ClientPayload$ClientAction$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, Tick$$serializer_getInstance()) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, Tick$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 1, Angle$$serializer_getInstance()) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 1, Angle$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.readBooleanElementValue_xvmgof$(this.serialClassDesc, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return ClientPayload$ClientPayload$ClientAction_init(bitMask0, local0, local1, local2, null);
  };
  ClientPayload$ClientAction$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var ClientPayload$ClientAction$$serializer_instance = null;
  function ClientPayload$ClientAction$$serializer_getInstance() {
    if (ClientPayload$ClientAction$$serializer_instance === null) {
      new ClientPayload$ClientAction$$serializer();
    }
    return ClientPayload$ClientAction$$serializer_instance;
  }
  function ClientPayload$ClientPayload$ClientAction_init(seen, tick, moveDirection, newCar, serializationConstructorMarker) {
    var $this = Object.create(ClientPayload$ClientAction.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('tick');
    else
      $this.tick = tick;
    if ((seen & 2) === 0)
      $this.moveDirection = null;
    else
      $this.moveDirection = moveDirection;
    if ((seen & 4) === 0)
      $this.newCar = false;
    else
      $this.newCar = newCar;
    return $this;
  }
  ClientPayload$ClientAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientAction',
    interfaces: []
  };
  function ClientPayload$Companion() {
    ClientPayload$Companion_instance = this;
  }
  ClientPayload$Companion.prototype.serializer = function () {
    return ClientPayload$$serializer_getInstance();
  };
  ClientPayload$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ClientPayload$Companion_instance = null;
  function ClientPayload$Companion_getInstance() {
    if (ClientPayload$Companion_instance === null) {
      new ClientPayload$Companion();
    }
    return ClientPayload$Companion_instance;
  }
  function ClientPayload$$serializer() {
    this.serialClassDesc_wjpzn2$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.ClientPayload');
    this.serialClassDesc.addElement_61zpoe$('actions');
    ClientPayload$$serializer_instance = this;
  }
  Object.defineProperty(ClientPayload$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_wjpzn2$_0;
    }
  });
  ClientPayload$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeSerializableElementValue_k4al2t$(this.serialClassDesc, 0, new ArrayListSerializer(ClientPayload$ClientAction$$serializer_getInstance()), obj.actions);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  ClientPayload$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readSerializableElementValue_nqb5fm$(this.serialClassDesc, 0, new ArrayListSerializer(ClientPayload$ClientAction$$serializer_getInstance())) : input.updateSerializableElementValue_2bgl1k$(this.serialClassDesc, 0, new ArrayListSerializer(ClientPayload$ClientAction$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return ClientPayload_init(bitMask0, local0, null);
  };
  ClientPayload$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var ClientPayload$$serializer_instance = null;
  function ClientPayload$$serializer_getInstance() {
    if (ClientPayload$$serializer_instance === null) {
      new ClientPayload$$serializer();
    }
    return ClientPayload$$serializer_instance;
  }
  function ClientPayload_init(seen, actions, serializationConstructorMarker) {
    var $this = Object.create(ClientPayload.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('actions');
    else
      $this.actions = actions;
    return $this;
  }
  ClientPayload.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientPayload',
    interfaces: []
  };
  function ServerError(code, message) {
    ServerError$Companion_getInstance();
    if (code === void 0)
      code = 0;
    if (message === void 0)
      message = null;
    this.code = code;
    this.message = message;
  }
  function ServerError$Companion() {
    ServerError$Companion_instance = this;
  }
  ServerError$Companion.prototype.serializer = function () {
    return ServerError$$serializer_getInstance();
  };
  ServerError$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ServerError$Companion_instance = null;
  function ServerError$Companion_getInstance() {
    if (ServerError$Companion_instance === null) {
      new ServerError$Companion();
    }
    return ServerError$Companion_instance;
  }
  function ServerError$$serializer() {
    this.serialClassDesc_i1pivo$_0 = new SerialClassDescImpl('com.riseofcat.share.mass.ServerError');
    this.serialClassDesc.addElement_61zpoe$('code');
    this.serialClassDesc.addElement_61zpoe$('message');
    ServerError$$serializer_instance = this;
  }
  Object.defineProperty(ServerError$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_i1pivo$_0;
    }
  });
  ServerError$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeIntElementValue_j8ubi9$(this.serialClassDesc, 0, obj.code);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, internal.StringSerializer, obj.message);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  ServerError$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readIntElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 1, internal.StringSerializer) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return ServerError_init(bitMask0, local0, local1, null);
  };
  ServerError$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var ServerError$$serializer_instance = null;
  function ServerError$$serializer_getInstance() {
    if (ServerError$$serializer_instance === null) {
      new ServerError$$serializer();
    }
    return ServerError$$serializer_instance;
  }
  function ServerError_init(seen, code, message, serializationConstructorMarker) {
    var $this = Object.create(ServerError.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('code');
    else
      $this.code = code;
    if ((seen & 2) === 0)
      $this.message = null;
    else
      $this.message = message;
    return $this;
  }
  ServerError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerError',
    interfaces: []
  };
  function rotate($receiver, angleA) {
    var result = $receiver.copy_lu1900$();
    var angle = plus_4(calcAngle($receiver), angleA);
    var len = get_len($receiver);
    var x = angle.radians;
    result.x = len * Math_0.cos(x);
    var x_0 = angle.radians;
    result.y = len * Math_0.sin(x_0);
    return result;
  }
  function degreesAngle_0(degrees) {
    return new Angle(degrees / 180 * math.PI);
  }
  function deepCopyOld($receiver) {
    var $receiver_0 = $receiver.cars;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.copy_j0eshq$());
    }
    var tmp$_0 = toMutableList(destination);
    var $receiver_1 = $receiver.foods;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(item_0.copy_mwwf0d$());
    }
    var tmp$_2 = toMutableList(destination_0);
    var $receiver_2 = $receiver.reactive;
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_3;
    tmp$_3 = $receiver_2.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      destination_1.add_11rb$(item_1.copy_yjy2qv$());
    }
    return $receiver.copy_nsj3jp$(tmp$_0, tmp$_2, toMutableList(destination_1));
  }
  function ClientSay(pong, payload, index) {
    ClientSay$Companion_getInstance();
    if (pong === void 0)
      pong = false;
    if (payload === void 0)
      payload = null;
    if (index === void 0)
      index = 0;
    this.pong = pong;
    this.payload = payload;
    this.index = index;
  }
  function ClientSay$Companion() {
    ClientSay$Companion_instance = this;
  }
  ClientSay$Companion.prototype.serializer_swdriu$ = function (typeSerial0) {
    return ClientSay$ClientSay$$serializer_init(typeSerial0);
  };
  ClientSay$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ClientSay$Companion_instance = null;
  function ClientSay$Companion_getInstance() {
    if (ClientSay$Companion_instance === null) {
      new ClientSay$Companion();
    }
    return ClientSay$Companion_instance;
  }
  function ClientSay$$serializer() {
    this.serialClassDesc_dvkhn1$_0 = new SerialClassDescImpl('com.riseofcat.share.ping.ClientSay');
    this.serialClassDesc.addElement_61zpoe$('pong');
    this.serialClassDesc.addElement_61zpoe$('payload');
    this.serialClassDesc.addElement_61zpoe$('index');
  }
  Object.defineProperty(ClientSay$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_dvkhn1$_0;
    }
  });
  ClientSay$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, [this.typeSerial0]);
    output.writeBooleanElementValue_gw9ugo$(this.serialClassDesc, 0, obj.pong);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, this.typeSerial0, obj.payload);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, internal.IntSerializer, obj.index);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  ClientSay$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, [this.typeSerial0]);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.readBooleanElementValue_xvmgof$(this.serialClassDesc, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 1, this.typeSerial0) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 1, this.typeSerial0, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 2, internal.IntSerializer) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 2, internal.IntSerializer, local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return ClientSay_init(bitMask0, local0, local1, local2, null);
  };
  function ClientSay$ClientSay$$serializer_init(typeSerial0) {
    var $this = new ClientSay$$serializer();
    $this.typeSerial0 = typeSerial0;
    return $this;
  }
  ClientSay$$serializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  function ClientSay_init(seen, pong, payload, index, serializationConstructorMarker) {
    var $this = Object.create(ClientSay.prototype);
    if ((seen & 1) === 0)
      $this.pong = false;
    else
      $this.pong = pong;
    if ((seen & 2) === 0)
      $this.payload = null;
    else
      $this.payload = payload;
    if ((seen & 4) === 0)
      $this.index = 0;
    else
      $this.index = index;
    return $this;
  }
  ClientSay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientSay',
    interfaces: []
  };
  function ServerSay(payload, pingDelay, serverTime, ping) {
    ServerSay$Companion_getInstance();
    if (payload === void 0)
      payload = null;
    if (pingDelay === void 0)
      pingDelay = null;
    if (serverTime === void 0)
      serverTime = null;
    if (ping === void 0)
      ping = false;
    this.payload = payload;
    this.pingDelay = pingDelay;
    this.serverTime = serverTime;
    this.ping = ping;
  }
  function ServerSay$Companion() {
    ServerSay$Companion_instance = this;
  }
  ServerSay$Companion.prototype.serializer_swdriu$ = function (typeSerial0) {
    return ServerSay$ServerSay$$serializer_init(typeSerial0);
  };
  ServerSay$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ServerSay$Companion_instance = null;
  function ServerSay$Companion_getInstance() {
    if (ServerSay$Companion_instance === null) {
      new ServerSay$Companion();
    }
    return ServerSay$Companion_instance;
  }
  function ServerSay$$serializer() {
    this.serialClassDesc_9jcysr$_0 = new SerialClassDescImpl('com.riseofcat.share.ping.ServerSay');
    this.serialClassDesc.addElement_61zpoe$('payload');
    this.serialClassDesc.addElement_61zpoe$('pingDelay');
    this.serialClassDesc.addElement_61zpoe$('serverTime');
    this.serialClassDesc.addElement_61zpoe$('ping');
  }
  Object.defineProperty(ServerSay$$serializer.prototype, 'serialClassDesc', {
    get: function () {
      return this.serialClassDesc_9jcysr$_0;
    }
  });
  ServerSay$$serializer.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, [this.typeSerial0]);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, this.typeSerial0, obj.payload);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, Duration$$serializer_getInstance(), obj.pingDelay);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, TimeStamp$$serializer_getInstance(), obj.serverTime);
    output.writeBooleanElementValue_gw9ugo$(this.serialClassDesc, 3, obj.ping);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  ServerSay$$serializer.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, [this.typeSerial0]);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 0, this.typeSerial0) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 0, this.typeSerial0, local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 1, Duration$$serializer_getInstance()) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 1, Duration$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.readNullableSerializableElementValue_fcqp7f$(this.serialClassDesc, 2, TimeStamp$$serializer_getInstance()) : input.updateNullableSerializableElementValue_xspi39$(this.serialClassDesc, 2, TimeStamp$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.readBooleanElementValue_xvmgof$(this.serialClassDesc, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return ServerSay_init(bitMask0, local0, local1, local2, local3, null);
  };
  function ServerSay$ServerSay$$serializer_init(typeSerial0) {
    var $this = new ServerSay$$serializer();
    $this.typeSerial0 = typeSerial0;
    return $this;
  }
  ServerSay$$serializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  function ServerSay_init(seen, payload, pingDelay, serverTime, ping, serializationConstructorMarker) {
    var $this = Object.create(ServerSay.prototype);
    if ((seen & 1) === 0)
      $this.payload = null;
    else
      $this.payload = payload;
    if ((seen & 2) === 0)
      $this.pingDelay = null;
    else
      $this.pingDelay = pingDelay;
    if ((seen & 4) === 0)
      $this.serverTime = null;
    else
      $this.serverTime = serverTime;
    if ((seen & 8) === 0)
      $this.ping = false;
    else
      $this.ping = ping;
    return $this;
  }
  ServerSay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerSay',
    interfaces: []
  };
  Object.defineProperty(_, 'Gen', {
    get: Gen_getInstance
  });
  $$importsForInline$$.game = _;
  Object.defineProperty(Common, 'Companion', {
    get: Common$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$riseofcat = package$com.riseofcat || (package$com.riseofcat = {});
  var package$common = package$riseofcat.common || (package$riseofcat.common = {});
  package$common.Common = Common;
  var package$domain = _.domain || (_.domain = {});
  package$domain.breakpoint_pdl1vj$ = breakpoint;
  package$domain.ExecuteMe = ExecuteMe;
  package$domain.Log = Log;
  package$domain.info_gecnkn$ = info;
  package$domain.error_gecnkn$ = error;
  package$domain.rnd_vux9f0$ = rnd;
  package$domain.rnd_dqglrj$ = rnd_0;
  package$domain.get_rnd_s8ev3n$ = get_rnd;
  package$domain.testFirst = testFirst;
  package$domain.get_round_81szk$ = get_round;
  package$domain.testSuspendFun = testSuspendFun;
  package$domain.Clickable = Clickable;
  package$domain.Focusable = Focusable;
  package$domain.Button = Button;
  package$domain.User = User;
  Expr.Num = Expr$Num;
  Expr.Sum = Expr$Sum;
  package$domain.Expr = Expr;
  Object.defineProperty(package$domain, 'Singletone', {
    get: Singletone_getInstance
  });
  package$domain.f_ot4k17$ = f;
  package$domain._1 = _1;
  Object.defineProperty(WithCompanion, 'Companion', {
    get: WithCompanion$Companion_getInstance
  });
  package$domain.WithCompanion = WithCompanion;
  package$domain._2 = _2;
  Object.defineProperty(Mode, 'MASS_POWER', {
    get: Mode$MASS_POWER_getInstance
  });
  Object.defineProperty(Mode, 'PERFORMANCE', {
    get: Mode$PERFORMANCE_getInstance
  });
  Object.defineProperty(Mode, 'DOT', {
    get: Mode$DOT_getInstance
  });
  Object.defineProperty(Mode, 'EXPERIMENTS', {
    get: Mode$EXPERIMENTS_getInstance
  });
  Object.defineProperty(Mode, 'EMPTY', {
    get: Mode$EMPTY_getInstance
  });
  Object.defineProperty(Mode, 'TETRIS', {
    get: Mode$TETRIS_getInstance
  });
  Object.defineProperty(Mode, 'FRACTAL1', {
    get: Mode$FRACTAL1_getInstance
  });
  Object.defineProperty(Mode, 'FRACTAL2', {
    get: Mode$FRACTAL2_getInstance
  });
  package$domain.Mode = Mode;
  package$domain.main_kand9s$ = main;
  var package$dots = package$domain.dots || (package$domain.dots = {});
  package$dots.Dots = Dots;
  package$dots.clear_4433t4$ = clear;
  package$dots.rnd_dleff0$ = rnd_1;
  package$dots.Pos = Pos;
  package$dots.Color = Color;
  package$dots.Dot = Dot;
  Object.defineProperty(package$dots, 'time', {
    get: get_time
  });
  var package$empty = package$domain.empty || (package$domain.empty = {});
  package$empty.EmptyGameScreen = EmptyGameScreen;
  var package$fractal = package$domain.fractal || (package$domain.fractal = {});
  package$fractal.Fractal1Data = Fractal1Data;
  package$fractal.Fractal1 = Fractal1;
  package$fractal.Fractal2Data = Fractal2Data;
  package$fractal.Fractal2 = Fractal2;
  var package$tetris = package$domain.tetris || (package$domain.tetris = {});
  Object.defineProperty(package$tetris, 'LIGHT', {
    get: function () {
      return LIGHT;
    }
  });
  Object.defineProperty(package$tetris, 'NORMAL', {
    get: function () {
      return NORMAL;
    }
  });
  Object.defineProperty(package$tetris, 'DARK', {
    get: function () {
      return DARK;
    }
  });
  Object.defineProperty(package$tetris, 'SHADOW', {
    get: function () {
      return SHADOW;
    }
  });
  Object.defineProperty(package$tetris, 'SATURATION', {
    get: function () {
      return SATURATION;
    }
  });
  Object.defineProperty(package$tetris, 'Block', {
    get: Block_getInstance
  });
  Object.defineProperty(package$tetris, 'Color', {
    get: Color_getInstance
  });
  Object.defineProperty(GameSounds, 'ROTATE', {
    get: GameSounds$ROTATE_getInstance
  });
  Object.defineProperty(GameSounds, 'ROTATE_FAIL', {
    get: GameSounds$ROTATE_FAIL_getInstance
  });
  Object.defineProperty(GameSounds, 'TICK', {
    get: GameSounds$TICK_getInstance
  });
  Object.defineProperty(GameSounds, 'SINGLE', {
    get: GameSounds$SINGLE_getInstance
  });
  Object.defineProperty(GameSounds, 'DOUBLE', {
    get: GameSounds$DOUBLE_getInstance
  });
  Object.defineProperty(GameSounds, 'TRIPLE', {
    get: GameSounds$TRIPLE_getInstance
  });
  Object.defineProperty(GameSounds, 'Companion', {
    get: GameSounds$Companion_getInstance
  });
  package$tetris.GameSounds = GameSounds;
  package$tetris.Piece = Piece;
  Object.defineProperty(PieceType, 'I', {
    get: PieceType$I_getInstance
  });
  Object.defineProperty(PieceType, 'J', {
    get: PieceType$J_getInstance
  });
  Object.defineProperty(PieceType, 'L', {
    get: PieceType$L_getInstance
  });
  Object.defineProperty(PieceType, 'O', {
    get: PieceType$O_getInstance
  });
  Object.defineProperty(PieceType, 'S', {
    get: PieceType$S_getInstance
  });
  Object.defineProperty(PieceType, 'T', {
    get: PieceType$T_getInstance
  });
  Object.defineProperty(PieceType, 'Z', {
    get: PieceType$Z_getInstance
  });
  package$tetris.PieceType = PieceType;
  package$tetris.Score = Score;
  package$tetris.TetriesScreen = TetriesScreen;
  package$tetris.MapData = MapData;
  package$tetris.MapLayer = MapLayer;
  package$tetris.MapTileset = MapTileset;
  package$tetris.TilesetIndex_init = TilesetIndex_init;
  package$tetris.TilesetIndex = TilesetIndex;
  var package$kuden = _.kuden || (_.kuden = {});
  package$kuden.Matrix4 = Matrix4;
  Object.defineProperty(DrawMode, 'LINEAR', {
    get: DrawMode$LINEAR_getInstance
  });
  Object.defineProperty(DrawMode, 'NEAREST', {
    get: DrawMode$NEAREST_getInstance
  });
  package$kuden.DrawMode = DrawMode;
  package$kuden.HTMLElements = HTMLElements;
  package$kuden.InputProcessor = InputProcessor;
  package$kuden.EmptyInputProcessor = EmptyInputProcessor;
  package$kuden.RGBA = RGBA;
  Game.Sprite = Game$Sprite;
  Game.ImgSprite = Game$ImgSprite;
  Game.GenSprite = Game$GenSprite;
  Game.SpriteBatch = Game$SpriteBatch;
  Game.View = Game$View;
  Game.Textures = Game$Textures;
  Game.ImgTexData = Game$ImgTexData;
  Game.GenTexData = Game$GenTexData;
  Game.Texture = Game$Texture;
  Game.Keys = Game$Keys;
  package$kuden.Game = Game;
  SizeType.FixedWidth = SizeType$FixedWidth;
  SizeType.FixedHeight = SizeType$FixedHeight;
  package$kuden.SizeType = SizeType;
  package$kuden.TextureData = TextureData;
  Object.defineProperty(KeyCode, 'SHIFT', {
    get: KeyCode$SHIFT_getInstance
  });
  Object.defineProperty(KeyCode, 'ESC', {
    get: KeyCode$ESC_getInstance
  });
  Object.defineProperty(KeyCode, 'LEFT', {
    get: KeyCode$LEFT_getInstance
  });
  Object.defineProperty(KeyCode, 'UP', {
    get: KeyCode$UP_getInstance
  });
  Object.defineProperty(KeyCode, 'DOWN', {
    get: KeyCode$DOWN_getInstance
  });
  Object.defineProperty(KeyCode, 'RIGHT', {
    get: KeyCode$RIGHT_getInstance
  });
  Object.defineProperty(KeyCode, 'SPACE', {
    get: KeyCode$SPACE_getInstance
  });
  Object.defineProperty(KeyCode, 'MINUS', {
    get: KeyCode$MINUS_getInstance
  });
  Object.defineProperty(KeyCode, 'PLUS', {
    get: KeyCode$PLUS_getInstance
  });
  package$kuden.KeyCode = KeyCode;
  Object.defineProperty(package$kuden, 'vertxSrc', {
    get: function () {
      return vertxSrc;
    }
  });
  Object.defineProperty(package$kuden, 'fragmSrc', {
    get: function () {
      return fragmSrc;
    }
  });
  package$kuden.VertexShader = VertexShader;
  package$kuden.FragmentShader = FragmentShader;
  package$kuden.ShaderPog = ShaderPog;
  package$kuden.compileShader_fou414$ = compileShader;
  package$kuden.createWebGLProgram_tnknug$ = createWebGLProgram;
  package$kuden.createWebGLProgram_6y76n2$ = createWebGLProgram_0;
  Object.defineProperty(DType, 'TRIANGLE', {
    get: DType$TRIANGLE_getInstance
  });
  package$kuden.DType = DType;
  package$kuden.VertextAttributeInfo = VertextAttributeInfo;
  ShaderProgram.SetData = ShaderProgram$SetData;
  ShaderProgram.ShaderProgramMesh = ShaderProgram$ShaderProgramMesh;
  package$kuden.ShaderProgram = ShaderProgram;
  Object.defineProperty(package$kuden, 'Music', {
    get: Music_getInstance
  });
  package$kuden.Sound = Sound;
  Object.defineProperty(package$kuden, 'Sounds', {
    get: Sounds_getInstance
  });
  var package$masspower = _.masspower || (_.masspower = {});
  Object.defineProperty(package$masspower, 'FOOD_SCALE', {
    get: function () {
      return FOOD_SCALE;
    }
  });
  Object.defineProperty(package$masspower, 'TEXT', {
    get: function () {
      return TEXT;
    }
  });
  Object.defineProperty(package$masspower, 'FAKE_PING', {
    get: function () {
      return FAKE_PING;
    }
  });
  Object.defineProperty(package$masspower, 'HIDDEN', {
    get: function () {
      return HIDDEN;
    }
  });
  Object.defineProperty(package$masspower, 'SLOW_POKE', {
    get: function () {
      return SLOW_POKE;
    }
  });
  package$masspower.ImgData = ImgData;
  package$masspower.ImgCache = ImgCache;
  package$masspower.RenderData = RenderData;
  package$masspower.View = View;
  package$masspower.FixedWidth = FixedWidth;
  package$masspower.Attr = Attr;
  package$masspower.IterAttr = IterAttr;
  MassPower.GameTexture = MassPower$GameTexture;
  MassPower.BackOffset = MassPower$BackOffset;
  MassPower.CircleData = MassPower$CircleData;
  MassPower.Blend = MassPower$Blend;
  Object.defineProperty(MassPower$BlendFactor, 'SRC_COLOR', {
    get: MassPower$BlendFactor$SRC_COLOR_getInstance
  });
  Object.defineProperty(MassPower$BlendFactor, 'ONE_MINUS_SRC_COLOR', {
    get: MassPower$BlendFactor$ONE_MINUS_SRC_COLOR_getInstance
  });
  Object.defineProperty(MassPower$BlendFactor, 'DST_COLOR', {
    get: MassPower$BlendFactor$DST_COLOR_getInstance
  });
  Object.defineProperty(MassPower$BlendFactor, 'ONE_MINUS_DST_COLOR', {
    get: MassPower$BlendFactor$ONE_MINUS_DST_COLOR_getInstance
  });
  Object.defineProperty(MassPower$BlendFactor, 'SRC_ALPHA', {
    get: MassPower$BlendFactor$SRC_ALPHA_getInstance
  });
  Object.defineProperty(MassPower$BlendFactor, 'ONE_MINUS_SRC_ALPHA', {
    get: MassPower$BlendFactor$ONE_MINUS_SRC_ALPHA_getInstance
  });
  Object.defineProperty(MassPower$BlendFactor, 'DST_ALPHA', {
    get: MassPower$BlendFactor$DST_ALPHA_getInstance
  });
  Object.defineProperty(MassPower$BlendFactor, 'ONE_MINUS_DST_ALPHA', {
    get: MassPower$BlendFactor$ONE_MINUS_DST_ALPHA_getInstance
  });
  Object.defineProperty(MassPower$BlendFactor, 'SRC_ALPHA_SATURATE', {
    get: MassPower$BlendFactor$SRC_ALPHA_SATURATE_getInstance
  });
  MassPower.BlendFactor = MassPower$BlendFactor;
  var package$lib = package$riseofcat.lib || (package$riseofcat.lib = {});
  MassPower.ShaderVertex = MassPower$ShaderVertex;
  MassPower.ShaderFull = MassPower$ShaderFull;
  package$masspower.MassPower = MassPower;
  Object.defineProperty(Mode_0, 'TRIANGLE', {
    get: Mode$TRIANGLE_getInstance
  });
  Object.defineProperty(Mode_0, 'TRIANGLE_FAN', {
    get: Mode$TRIANGLE_FAN_getInstance
  });
  Object.defineProperty(Mode_0, 'TRIANGLE_STRIP', {
    get: Mode$TRIANGLE_STRIP_getInstance
  });
  package$masspower.Mode = Mode_0;
  Object.defineProperty(package$masspower, 'renderCalls', {
    get: function () {
      return renderCalls;
    },
    set: function (value) {
      renderCalls = value;
    }
  });
  package$masspower.onRender = onRender;
  package$masspower.SmoothByRenderCalls = SmoothByRenderCalls;
  package$masspower.CacheByRenderCalls = CacheByRenderCalls;
  package$masspower.mem_61zpoe$ = mem;
  Object.defineProperty(Key, 'Q', {
    get: Key$Q_getInstance
  });
  Object.defineProperty(Key, 'W', {
    get: Key$W_getInstance
  });
  Object.defineProperty(Key, 'E', {
    get: Key$E_getInstance
  });
  Object.defineProperty(Key, 'R', {
    get: Key$R_getInstance
  });
  Object.defineProperty(Key, 'T', {
    get: Key$T_getInstance
  });
  Object.defineProperty(Key, 'Y', {
    get: Key$Y_getInstance
  });
  Object.defineProperty(Key, 'ZERO', {
    get: Key$ZERO_getInstance
  });
  Object.defineProperty(Key, 'ONE', {
    get: Key$ONE_getInstance
  });
  Object.defineProperty(Key, 'TWO', {
    get: Key$TWO_getInstance
  });
  Object.defineProperty(Key, 'THREE', {
    get: Key$THREE_getInstance
  });
  Object.defineProperty(Key, 'FOUR', {
    get: Key$FOUR_getInstance
  });
  Object.defineProperty(Key, 'FIVE', {
    get: Key$FIVE_getInstance
  });
  Object.defineProperty(Key, 'SIX', {
    get: Key$SIX_getInstance
  });
  Object.defineProperty(Key, 'SEVEN', {
    get: Key$SEVEN_getInstance
  });
  Object.defineProperty(Key, 'EIGHT', {
    get: Key$EIGHT_getInstance
  });
  Object.defineProperty(Key, 'NINE', {
    get: Key$NINE_getInstance
  });
  Object.defineProperty(Key, 'Companion', {
    get: Key$Companion_getInstance
  });
  package$masspower.Key = Key;
  var package$performance = _.performance || (_.performance = {});
  Object.defineProperty(package$performance, 'OLD', {
    get: function () {
      return OLD;
    }
  });
  Object.defineProperty(package$performance, 'DYNAMIC_SHADER', {
    get: function () {
      return DYNAMIC_SHADER;
    }
  });
  Object.defineProperty(package$performance, 'DYNAMIC_TEXTURE', {
    get: function () {
      return DYNAMIC_TEXTURE;
    }
  });
  Object.defineProperty(package$performance, 'DEBUG_ERROR', {
    get: function () {
      return DEBUG_ERROR;
    }
  });
  Object.defineProperty(package$performance, 'BIG_TEXTURE', {
    get: function () {
      return BIG_TEXTURE;
    }
  });
  Object.defineProperty(package$performance, 'DYNAMIC_BLEND', {
    get: function () {
      return DYNAMIC_BLEND;
    }
  });
  Object.defineProperty(package$performance, 'COUNT', {
    get: function () {
      return COUNT;
    }
  });
  Object.defineProperty(package$performance, 'SCALE', {
    get: function () {
      return SCALE;
    }
  });
  package$performance.TextureData = TextureData_0;
  package$performance.ImgData = ImgData_0;
  package$performance.ImgCache = ImgCache_0;
  package$performance.RenderData = RenderData_0;
  package$performance.View = View_0;
  package$performance.FixedWidth = FixedWidth_0;
  package$performance.Attr = Attr_0;
  package$performance.IterAttr = IterAttr_0;
  Object.defineProperty(PerformanceTest$Key, 'Q', {
    get: PerformanceTest$Key$Q_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'W', {
    get: PerformanceTest$Key$W_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'E', {
    get: PerformanceTest$Key$E_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'R', {
    get: PerformanceTest$Key$R_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'T', {
    get: PerformanceTest$Key$T_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'Y', {
    get: PerformanceTest$Key$Y_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'ZERO', {
    get: PerformanceTest$Key$ZERO_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'ONE', {
    get: PerformanceTest$Key$ONE_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'TWO', {
    get: PerformanceTest$Key$TWO_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'THREE', {
    get: PerformanceTest$Key$THREE_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'FOUR', {
    get: PerformanceTest$Key$FOUR_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'FIVE', {
    get: PerformanceTest$Key$FIVE_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'SIX', {
    get: PerformanceTest$Key$SIX_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'SEVEN', {
    get: PerformanceTest$Key$SEVEN_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'EIGHT', {
    get: PerformanceTest$Key$EIGHT_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'NINE', {
    get: PerformanceTest$Key$NINE_getInstance
  });
  Object.defineProperty(PerformanceTest$Key, 'Companion', {
    get: PerformanceTest$Key$Companion_getInstance
  });
  PerformanceTest.Key = PerformanceTest$Key;
  PerformanceTest.GameTexture = PerformanceTest$GameTexture;
  PerformanceTest.CircleFanStrip = PerformanceTest$CircleFanStrip;
  package$performance.Mode = Mode_1;
  package$performance.debugError_uq85nf$ = debugError;
  package$performance.PerformanceTest = PerformanceTest;
  Object.defineProperty(Mode_1, 'TRIANGLE', {
    get: Mode$TRIANGLE_getInstance_0
  });
  Object.defineProperty(Mode_1, 'TRIANGLE_FAN', {
    get: Mode$TRIANGLE_FAN_getInstance_0
  });
  Object.defineProperty(Mode_1, 'TRIANGLE_STRIP', {
    get: Mode$TRIANGLE_STRIP_getInstance_0
  });
  package$performance.mem_61zpoe$ = mem_0;
  var package$util = _.util || (_.util = {});
  Object.defineProperty(package$util, 'FULLSCREEN_VERTICES', {
    get: function () {
      return FULLSCREEN_VERTICES;
    }
  });
  package$util.toVertives_wafl1s$ = toVertives;
  package$util.callApply_238ayt$ = callApply;
  package$util.getX_vryqu5$ = getX;
  package$util.getY_vryqu5$ = getY;
  package$util.createElement_ekre97$ = createElement;
  package$util.createCanvas_faw09z$ = createCanvas;
  package$util.min_yni7l$ = min_0;
  package$util.max_yni7l$ = max_0;
  package$util.min_cfdwmc$ = min_1;
  package$util.max_cfdwmc$ = max_1;
  var package$client = package$riseofcat.client || (package$riseofcat.client = {});
  package$client.ClientModel = ClientModel;
  package$client.touch_5h00rc$ = touch;
  package$client.calcRenderXY_aq8nq9$ = calcRenderXY;
  Object.defineProperty(Conf, 'Companion', {
    get: Conf$Companion_getInstance
  });
  Object.defineProperty(Conf, '$serializer', {
    get: Conf$$serializer_getInstance
  });
  package$client.Conf = Conf;
  Object.defineProperty(package$client, 'confs', {
    get: confs_getInstance
  });
  package$client.IClientModel = IClientModel;
  package$client.IPingClient = IPingClient;
  package$client.FakePingClient = FakePingClient;
  package$client.PingClient = PingClient;
  package$client.TimeSync = TimeSync;
  Object.defineProperty(package$client, 'shader_default_vertex_shader_vert', {
    get: function () {
      return shader_default_vertex_shader_vert;
    }
  });
  Object.defineProperty(package$client, 'shader_background_stars_frag', {
    get: function () {
      return shader_background_stars_frag;
    }
  });
  Object.defineProperty(package$client, 'shader_good_blur_frag', {
    get: function () {
      return shader_good_blur_frag;
    }
  });
  Object.defineProperty(package$client, 'shader_mesh_default_vert', {
    get: function () {
      return shader_mesh_default_vert;
    }
  });
  Object.defineProperty(package$client, 'MASS_POWER_TEXTURE_VERTEX', {
    get: function () {
      return MASS_POWER_TEXTURE_VERTEX;
    }
  });
  Object.defineProperty(package$client, 'MASS_POWER_TEXTURE_FRAG', {
    get: function () {
      return MASS_POWER_TEXTURE_FRAG;
    }
  });
  Object.defineProperty(package$client, 'MASS_POWER_FOOD_VERTEX', {
    get: function () {
      return MASS_POWER_FOOD_VERTEX;
    }
  });
  Object.defineProperty(package$client, 'MASS_POWER_FOOD_FRAG', {
    get: function () {
      return MASS_POWER_FOOD_FRAG;
    }
  });
  Object.defineProperty(package$common, 'ServerCommon', {
    get: ServerCommon_getInstance
  });
  LibWebSocket.Listener = LibWebSocket$Listener;
  Object.defineProperty(LibWebSocket$State, 'OPEN', {
    get: LibWebSocket$State$OPEN_getInstance
  });
  Object.defineProperty(LibWebSocket$State, 'CLOSE', {
    get: LibWebSocket$State$CLOSE_getInstance
  });
  Object.defineProperty(LibWebSocket$State, 'CONNECTING', {
    get: LibWebSocket$State$CONNECTING_getInstance
  });
  Object.defineProperty(LibWebSocket$State, 'CLOSING', {
    get: LibWebSocket$State$CLOSING_getInstance
  });
  Object.defineProperty(LibWebSocket$State, 'CLOSED', {
    get: LibWebSocket$State$CLOSED_getInstance
  });
  Object.defineProperty(LibWebSocket$State, 'TIMEOUT', {
    get: LibWebSocket$State$TIMEOUT_getInstance
  });
  LibWebSocket.State = LibWebSocket$State;
  package$common.LibWebSocket = LibWebSocket;
  package$lib.Signal = Signal;
  package$lib.Time = Time;
  Object.defineProperty(TimeStamp, 'Companion', {
    get: TimeStamp$Companion_getInstance
  });
  Object.defineProperty(TimeStamp, '$serializer', {
    get: TimeStamp$$serializer_getInstance
  });
  package$lib.TimeStamp = TimeStamp;
  Object.defineProperty(Duration, 'Companion', {
    get: Duration$Companion_getInstance
  });
  Object.defineProperty(Duration, '$serializer', {
    get: Duration$$serializer_getInstance
  });
  package$lib.Duration = Duration;
  package$lib.minus_6uhb0h$ = minus;
  package$lib.minus_gp4c0n$ = minus_0;
  package$lib.plus_gp4c0n$ = plus_1;
  package$lib.plus_n8fanv$ = plus_2;
  package$lib.plus_bbrd4f$ = plus_3;
  package$lib.minus_bbrd4f$ = minus_1;
  package$lib.diffAbs_bbrd4f$ = diffAbs;
  package$lib.get_abs_11l1pp$ = get_abs;
  package$lib.div_434c8h$ = div;
  package$lib.div_kncakk$ = div_0;
  package$lib.div_1pwmdr$ = div_1;
  package$lib.times_1pwmdr$ = times;
  package$lib.times_434c8h$ = times_0;
  package$lib.times_tf5ah6$ = times_1;
  package$lib.times_78zn6$ = times_2;
  package$lib.compareTo_ms581$ = compareTo;
  package$lib.div_ms581$ = div_2;
  package$lib.averageSqrt_4cks1v$ = averageSqrt;
  package$lib.sumByDuration_pg1uhu$ = sumByDuration;
  package$lib.get_s_ozqp0s$ = get_s;
  package$lib.get_sf_ozqp0s$ = get_sf;
  package$lib.get_sd_ozqp0s$ = get_sd;
  Object.defineProperty(package$lib, 'createTime', {
    get: function () {
      return createTime;
    }
  });
  Object.defineProperty(package$lib, 'lib', {
    get: function () {
      return lib;
    }
  });
  $$importsForInline$$['kotlinx-serialization-runtime-js'] = $module$kotlinx_serialization_runtime_js;
  Object.defineProperty(libObj.prototype, 'cbor', {
    get: libObj$cbor_getInstance
  });
  Object.defineProperty(libObj$logObj$LogMode, 'TODO', {
    get: libObj$logObj$LogMode$TODO_getInstance
  });
  Object.defineProperty(libObj$logObj$LogMode, 'FATAL_ERROR', {
    get: libObj$logObj$LogMode$FATAL_ERROR_getInstance
  });
  Object.defineProperty(libObj$logObj$LogMode, 'ERROR', {
    get: libObj$logObj$LogMode$ERROR_getInstance
  });
  Object.defineProperty(libObj$logObj$LogMode, 'INFO', {
    get: libObj$logObj$LogMode$INFO_getInstance
  });
  Object.defineProperty(libObj$logObj$LogMode, 'MEASURE', {
    get: libObj$logObj$LogMode$MEASURE_getInstance
  });
  Object.defineProperty(libObj$logObj$LogMode, 'DEBUG', {
    get: libObj$logObj$LogMode$DEBUG_getInstance
  });
  Object.defineProperty(libObj$logObj$LogMode, 'BREAKPOINT', {
    get: libObj$logObj$LogMode$BREAKPOINT_getInstance
  });
  libObj$logObj.prototype.LogMode = libObj$logObj$LogMode;
  Object.defineProperty(libObj.prototype, 'logObj', {
    get: libObj$logObj_getInstance
  });
  libObj.prototype.Measure = libObj$Measure;
  Object.defineProperty(libObj.prototype, 'FunObj', {
    get: libObj$FunObj_getInstance
  });
  Object.defineProperty(package$lib, 'libObj', {
    get: libObj_getInstance
  });
  package$lib.copy_vvxzk3$ = copy;
  package$lib.rm_dwdffb$ = rm;
  package$lib.removeFirst_vvxzk3$ = removeFirst;
  package$lib.SmoothByTime = SmoothByTime;
  var package$share = package$riseofcat.share || (package$riseofcat.share = {});
  Object.defineProperty(package$share, 'ShareTodo', {
    get: ShareTodo_getInstance
  });
  var package$mass = package$share.mass || (package$share.mass = {});
  Object.defineProperty(package$mass, 'SerializeHelp', {
    get: SerializeHelp_getInstance
  });
  Object.defineProperty(package$mass, 'MAX_W', {
    get: function () {
      return MAX_W;
    }
  });
  Object.defineProperty(package$mass, 'MAX_H', {
    get: function () {
      return MAX_H;
    }
  });
  Mattr2D.Cell = Mattr2D$Cell;
  package$mass.Mattr2D = Mattr2D;
  package$mass.clearCache_4mgewv$ = clearCache;
  package$mass.repeatTick_morbwt$ = repeatTick;
  Object.defineProperty(package$mass, 'GameConst', {
    get: GameConst_getInstance
  });
  package$mass.ICommand = ICommand;
  package$mass.PosObject = PosObject;
  package$mass.SpeedObject = SpeedObject;
  package$mass.SizeObject = SizeObject;
  package$mass.EatMeWithSpeed = EatMeWithSpeed;
  Object.defineProperty(NewCarCommand, 'Companion', {
    get: NewCarCommand$Companion_getInstance
  });
  Object.defineProperty(NewCarCommand, '$serializer', {
    get: NewCarCommand$$serializer_getInstance
  });
  package$mass.NewCarCommand = NewCarCommand;
  Object.defineProperty(MoveCommand, 'Companion', {
    get: MoveCommand$Companion_getInstance
  });
  Object.defineProperty(MoveCommand, '$serializer', {
    get: MoveCommand$$serializer_getInstance
  });
  package$mass.MoveCommand = MoveCommand;
  Object.defineProperty(Angle, 'Companion', {
    get: Angle$Companion_getInstance
  });
  Object.defineProperty(Angle, '$serializer', {
    get: Angle$$serializer_getInstance
  });
  package$mass.Angle = Angle;
  package$mass.plus_sjo4vl$ = plus_4;
  package$mass.minus_sjo4vl$ = minus_2;
  package$mass.xy_hxrp0k$ = xy;
  package$mass.get_degrees_u2um1u$ = get_degrees;
  package$mass.set_degrees_hxrp0k$ = set_degrees;
  package$mass.get_sin_u2um1u$ = get_sin;
  package$mass.get_cos_u2um1u$ = get_cos;
  Object.defineProperty(Car, 'Companion', {
    get: Car$Companion_getInstance
  });
  Object.defineProperty(Car, '$serializer', {
    get: Car$$serializer_getInstance
  });
  package$mass.Car = Car;
  Object.defineProperty(Food, 'Companion', {
    get: Food$Companion_getInstance
  });
  Object.defineProperty(Food, '$serializer', {
    get: Food$$serializer_getInstance
  });
  package$mass.Food = Food;
  Object.defineProperty(Reactive, 'Companion', {
    get: Reactive$Companion_getInstance
  });
  Object.defineProperty(Reactive, '$serializer', {
    get: Reactive$$serializer_getInstance
  });
  package$mass.Reactive = Reactive;
  Object.defineProperty(State, 'Companion', {
    get: State$Companion_getInstance
  });
  Object.defineProperty(State, '$serializer', {
    get: State$$serializer_getInstance
  });
  package$mass.State = State;
  package$mass.deepCopy_wc9598$ = deepCopy_0;
  Object.defineProperty(PlayerId, 'Companion', {
    get: PlayerId$Companion_getInstance
  });
  Object.defineProperty(PlayerId, '$serializer', {
    get: PlayerId$$serializer_getInstance
  });
  package$mass.PlayerId = PlayerId;
  Object.defineProperty(XY, 'Companion', {
    get: XY$Companion_getInstance
  });
  Object.defineProperty(XY, '$serializer', {
    get: XY$$serializer_getInstance
  });
  package$mass.XY_init_dleff0$ = XY_init_0;
  package$mass.XY = XY;
  package$mass.get_radius_j6xhqv$ = get_radius;
  package$mass.get_radius_s8ev3n$ = get_radius_0;
  package$mass.degreesAngle_za3lpa$ = degreesAngle;
  package$mass.act_mibzqj$ = act;
  package$mass.Rect = Rect;
  package$mass.get_topLeft_lui4rp$ = get_topLeft;
  package$mass.get_topRight_lui4rp$ = get_topRight;
  package$mass.get_bottomLeft_lui4rp$ = get_bottomLeft;
  package$mass.get_bottomRight_lui4rp$ = get_bottomRight;
  package$mass.get_points_lui4rp$ = get_points;
  package$mass.Bucket = Bucket;
  package$mass.tick_wc9598$ = tick;
  package$mass.get_sign_s8ev3n$ = get_sign;
  package$mass.get_targetFoods_wc9598$ = get_targetFoods;
  package$mass.get_targetSize_wc9598$ = get_targetSize;
  Object.defineProperty(package$mass, 'widthCache', {
    get: function () {
      return widthCache;
    }
  });
  Object.defineProperty(package$mass, 'heightCache', {
    get: function () {
      return heightCache;
    }
  });
  package$mass.get_width_wc9598$ = get_width;
  package$mass.get_height_wc9598$ = get_height;
  package$mass.distance_bqkczi$ = distance;
  package$mass.rnd_79kmrs$ = rnd_2;
  package$mass.rnd_64rnuu$ = rnd_3;
  package$mass.rnd_jhy5nw$ = rnd_4;
  package$mass.rndPos_wc9598$ = rndPos;
  package$mass.plus_cii3jz$ = plus_5;
  package$mass.minus_cii3jz$ = minus_3;
  package$mass.mscale_f2s5ku$ = mscale;
  package$mass.mscale_n81ivb$ = mscale_0;
  package$mass.scale_f2s5ku$ = scale;
  package$mass.scale_n81ivb$ = scale_0;
  package$mass.msum_f2s5ku$ = msum;
  package$mass.sum_f2s5ku$ = sum_1;
  package$mass.times_4o8t3e$ = times_3;
  package$mass.get_len_vm1dfc$ = get_len;
  package$mass.dst_cii3jz$ = dst;
  package$mass.calcAngle_vm1dfc$ = calcAngle;
  Object.defineProperty(Tick, 'Companion', {
    get: Tick$Companion_getInstance
  });
  Object.defineProperty(Tick, '$serializer', {
    get: Tick$$serializer_getInstance
  });
  package$mass.Tick_init_s8cxhz$ = Tick_init_0;
  package$mass.Tick = Tick;
  package$mass.times_1fnjam$ = times_4;
  package$mass.plus_1fnjam$ = plus_6;
  package$mass.plus_qjsi77$ = plus_7;
  package$mass.plus_r60du1$ = plus_8;
  package$mass.minus_r60du1$ = minus_4;
  package$mass.times_i0qo7i$ = times_5;
  Object.defineProperty(AllCommand, 'Companion', {
    get: AllCommand$Companion_getInstance
  });
  Object.defineProperty(AllCommand, '$serializer', {
    get: AllCommand$$serializer_getInstance
  });
  package$mass.AllCommand = AllCommand;
  Object.defineProperty(ServerPayload, 'Companion', {
    get: ServerPayload$Companion_getInstance
  });
  Object.defineProperty(ServerPayload, '$serializer', {
    get: ServerPayload$$serializer_getInstance
  });
  package$mass.ServerPayload = ServerPayload;
  Object.defineProperty(Welcome, 'Companion', {
    get: Welcome$Companion_getInstance
  });
  Object.defineProperty(Welcome, '$serializer', {
    get: Welcome$$serializer_getInstance
  });
  package$mass.Welcome = Welcome;
  Object.defineProperty(ClientPayload$ClientAction, 'Companion', {
    get: ClientPayload$ClientAction$Companion_getInstance
  });
  Object.defineProperty(ClientPayload$ClientAction, '$serializer', {
    get: ClientPayload$ClientAction$$serializer_getInstance
  });
  ClientPayload.ClientAction = ClientPayload$ClientAction;
  Object.defineProperty(ClientPayload, 'Companion', {
    get: ClientPayload$Companion_getInstance
  });
  Object.defineProperty(ClientPayload, '$serializer', {
    get: ClientPayload$$serializer_getInstance
  });
  package$mass.ClientPayload = ClientPayload;
  Object.defineProperty(ServerError, 'Companion', {
    get: ServerError$Companion_getInstance
  });
  Object.defineProperty(ServerError, '$serializer', {
    get: ServerError$$serializer_getInstance
  });
  package$mass.ServerError = ServerError;
  var package$unused = package$mass.unused || (package$mass.unused = {});
  package$unused.rotate_wzw29h$ = rotate;
  package$unused.degreesAngle_14dthe$ = degreesAngle_0;
  package$unused.deepCopyOld_wc9598$ = deepCopyOld;
  Object.defineProperty(ClientSay, 'Companion', {
    get: ClientSay$Companion_getInstance
  });
  ClientSay.$serializer = ClientSay$$serializer;
  var package$ping = package$share.ping || (package$share.ping = {});
  package$ping.ClientSay = ClientSay;
  Object.defineProperty(ServerSay, 'Companion', {
    get: ServerSay$Companion_getInstance
  });
  ServerSay.$serializer = ServerSay$$serializer;
  package$ping.ServerSay = ServerSay;
  testFirst$lambda$A_15.prototype.isEmpty = ClosedRange.prototype.isEmpty;
  testFirst$lambda$Data$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  testFirst$lambda$Box$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  Button.prototype.setFocus_6taknv$ = Focusable.prototype.setFocus_6taknv$;
  Conf$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  TimeStamp$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  Duration$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  NewCarCommand$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  MoveCommand$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  Angle$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  Car$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  Food$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  Reactive$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  State$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  PlayerId$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  XY$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  Tick$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  AllCommand$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  ServerPayload$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  Welcome$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  ClientPayload$ClientAction$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  ClientPayload$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  ServerError$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  ClientSay$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  ServerSay$$serializer.prototype.update_qkk2oh$ = KSerializer.prototype.update_qkk2oh$;
  SPEED = 1.0;
  radius = '4.0';
  vertexShader = '\nattribute vec2 a_position;\nuniform vec4 u_viewWindow;\nvarying vec2 v_coord;\nvoid main(void) {\n  v_coord = a_position * u_viewWindow.zw + u_viewWindow.xy;\n  gl_Position = vec4(a_position, 0.0, 1.0);\n}\n';
  fragmentShader = '\nprecision mediump float;\nuniform vec2 u_julia;\nuniform float u_offset;\nvarying vec2 v_coord;\nvoid main(void) {\n  float xx = v_coord.x;\n  float yy = v_coord.y;\n  float xt = 0.0;\n  gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0);\n  if (xx*xx + yy*yy < 4.0) {\n    for (int iteration = 0; iteration < 1000; iteration++) {\n      if (xx*xx + yy*yy > 4.0) {\n        float mu = u_offset + float(iteration) + 1.0 - log(log(xx*xx + yy*yy)) / log(2.0);\n        //mu = sqrt(mu);\n        float it = mod(mu * 23.0, 768.0);\n\n        float red = min(it, 255.0) / 255.0;\n        float green = max(0.0, min(it, 511.0) - 256.0) / 255.0;\n        float blue = max(0.0, min(it, 767.0) - 512.0) / 255.0;\n        gl_FragColor = vec4( blue, green, red, 1.0);\n        break;\n      }\n      xt = xx*xx - yy*yy + u_julia.x;\n      yy = 2.0*xx*yy + u_julia.y;\n      xx = xt;\n    }\n  }\n}\n';
  vertexShader_0 = '\n    attribute vec2 a_position;\n    uniform vec4 u_viewWindow;\n    varying vec2 v_coord;\n    void main(void) {\n        v_coord = a_position + u_viewWindow.xy;\n        gl_Position = vec4(a_position, 0.0, 1.0);\n    }\n';
  fragmentShader_0 = '\n    precision mediump float;\n    varying vec2 v_coord;\n    void main(void) {\n        float xx = 0.0;\n        float yy = 0.0;\n        float xt = 0.0;\n        gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0);\n        for (int iteration = 0; iteration < 1000; iteration++) {\n            if (xx*xx + yy*yy > 4.0) {\n              float it = mod(float(iteration) * 13.0, 768.0);\n              float red = min(it, 255.0) / 255.0;\n              float green = max(0.0, min(it, 511.0) - 256.0);\n              float blue = max(0.0, min(it, 767.0) - 512.0);\n              gl_FragColor = vec4( red, green, blue, 1.0);\n              break;\n            }\n            xt = xx*xx - yy*yy + v_coord.x;\n            yy = 2.0*xx*yy + v_coord.y;\n            xx = xt;\n        }\n    }\n';
  LIGHT = 0.6;
  NORMAL = 0.5;
  DARK = 0.4;
  SHADOW = 0.2;
  SATURATION = 0.75;
  vertxSrc = '\n  attribute vec2 a_position;\n  attribute vec2 a_boundingBox;\n  attribute vec2 a_texCoord;\n  attribute float a_scale;\n  attribute float a_rotation;\n  uniform mat4 u_projectionView;\n  varying vec2 v_textCoord;\n  varying vec4 myColor;\n  varying vec4 arr[gl_MaxVaryingVectors-2];//28-29\n\n  mat4 scale(float scale) {\n    return mat4(\n      vec4(scale, 0.0,   0.0,   0.0),\n      vec4(0.0,   scale, 0.0,   0.0),\n      vec4(0.0,   0.0,   scale, 0.0),\n      vec4(0.0,   0.0,   0.0,   1.0)\n    );\n  }\n  mat4 rotateZ(float angle) {\n    return mat4(\n      vec4(cos(angle),   sin(angle),  0.0,  0.0),\n      vec4(-sin(angle),  cos(angle),  0.0,  0.0),\n      vec4(0.0,          0.0,         1.0,  0.0),\n      vec4(0.0,          0.0,         0.0,  1.0)\n    );\n  }\n  void main(void) {\n    v_textCoord = a_texCoord;\n    vec4 scaledBox = vec4(a_boundingBox, 1.0, 1.0) * scale(a_scale) * rotateZ(a_rotation);\n    //myColor = vec4(1.0,0.3,0.3,0.5);\n    myColor = vec4(1.0,1.0,1.0,1.0);\n    gl_Position = u_projectionView * vec4(a_position + scaledBox.xy, 1.0, 1.0);\n  }\n';
  fragmSrc = '\n  precision mediump float;\n  uniform sampler2D u_sampler;\n  uniform lowp int u_test_array_size;\n  uniform lowp float u_arr[3];\n  uniform lowp vec4 u_vec_arr[gl_MaxVertexUniformVectors - 5];\n  varying vec2 v_textCoord;\n  varying vec4 myColor;\n  varying vec4 arr[gl_MaxVaryingVectors-2];//28-29\n\n  void main(void) {\n    gl_FragColor = myColor * texture2D(u_sampler, v_textCoord);\n    //gl_FragColor.a = gl_FragColor.a * (u_arr[0] + u_arr[1]);\n  }\n';
  FOOD_SCALE = 1.3;
  TEXT = true;
  FAKE_PING = false;
  HIDDEN = false;
  SLOW_POKE = false;
  renderCalls = 0;
  OLD = false;
  DYNAMIC_SHADER = false;
  DYNAMIC_TEXTURE = true;
  DEBUG_ERROR = false;
  BIG_TEXTURE = false;
  DYNAMIC_BLEND = true;
  COUNT = 100;
  SCALE = 0.1;
  FULLSCREEN_VERTICES = toVertives([-1.0, -1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0]);
  shader_default_vertex_shader_vert = '\nattribute vec4 a_position; //\u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0432\u0435\u0440\u0448\u0438\u043D\u044B\nattribute vec4 a_color; //\u0446\u0432\u0435\u0442 \u0432\u0435\u0440\u0448\u0438\u043D\u044B\nattribute vec2 a_texCoord0; //\u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B\nuniform mat4 u_projTrans;  //\u043C\u0430\u0442\u0440\u0438\u0446\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0446\u0438\u0438 \u0438 \u0432\u0438\u0434\u0430\nvarying vec4 v_color;  //\u0446\u0432\u0435\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D \u0432 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u043D\u044B\u0439 \u0448\u0435\u0439\u0434\u0435\u0440\nvarying vec4 vColor;  //\u0446\u0432\u0435\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D \u0432 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u043D\u044B\u0439 \u0448\u0435\u0439\u0434\u0435\u0440\nvarying vec2 v_texCoords;  //\u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B\nvarying vec2 v_texCoord;  //\u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B\nvarying vec2 vTexCoord;  //\u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B\nvoid main(){\n    v_color=a_color;\n    vColor = a_color;\n    // \u041F\u0440\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0446\u0432\u0435\u0442 \u0438\u0437 SpriteBatch \u0432 \u0448\u0435\u0439\u0434\u0435\u0440, \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u0437 ABGR int \u0446\u0432\u0435\u0442\u0430 \u0432 float.\n    // \u0447\u0442\u043E-\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C NAN  \u043F\u0440\u0438 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043D\u0435 \u0432\u0435\u0441\u044C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0434\u043B\u044F \u0430\u043B\u044C\u0444\u044B, \u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u0442 (0-254)\n    //\u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u043D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0446\u0432\u0435\u0442\u0430, \u043A\u043E\u0433\u0434\u0430 \u0430\u043B\u044C\u0444\u0430 \u0432\u043E float \u0440\u0430\u0432\u043D\u0430 1, \u0442\u043E \u0432\u0441\u044E \u0430\u043B\u044C\u0444\u0443 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0443\u043C\u043D\u043E\u0436\u0430\u0442\u044C.\n    //\u044D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430 libgdx \u0438 \u043E \u043D\u0435\u0439 \u043D\u0430\u0434\u043E \u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435  \u0432\u0435\u0440\u0448\u0438\u043D\u043D\u043E\u0433\u043E \u0448\u0435\u0439\u0434\u0435\u0440\u0430.\n    v_color.a = v_color.a * (255.0/254.0);//todo\n    v_texCoords = a_texCoord0;\n    v_texCoord = a_texCoord0;\n    vTexCoord = a_texCoord0;\n    //\u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0430 \u0438 \u043F\u0440\u043E\u0435\u043A\u0446\u0438\u0438, \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0437\u0430\u0431\u0438\u0432\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u044D\u0442\u0438\u043C \u0433\u043E\u043B\u043E\u0432\u0443\n    // \u0442\u0443\u0442 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u044F\u0442 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0447\u0442\u043E-\u0431\u044B \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0443\u0447\u0435\u0441\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043A\u0430\u043C\u0435\u0440\u044B\n    // gl_Position \u044D\u0442\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0432\u0435\u0440\u0448\u0438\u043D\u044B\n    gl_Position =  u_projTrans * a_position;\n}\n';
  shader_background_stars_frag = '\n#ifdef GL_ES\n    precision highp float;//todo lowp\n    precision lowp int;\n#else\n#define highp;//todo test on non GL ES devices\n#endif\nuniform float time;//todo mediump\nuniform vec2 resolution;// = vec2(400.0, 400.0);//todo int? lowp?? \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445\nuniform vec2 mouse;//todo highp, \u043F\u043E\u0442\u043E\u043C\u0443\u0447\u0442\u043E uniform mediump mouse \u043D\u0435 \u0434\u0430\u0435\u0442 \u0432\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C\n#define VOLSTEPS 2//\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043B\u043E\u0451\u0432\n//\u041E\u0442 0.2 \u0434\u043E 1.0\n//\u0412\u0430\u0436\u043D\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\n#define STEPSIZE 0.65\n#define ZOOM   5.900\n#define TILE   0.850\n#define SPEED  0.150\n#define SATURATION 0.750\n//\u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043A\u0430\u043A \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0430\u043A \u0438 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0446\u0435\u043B\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E\u0442 \u0432\u044B\u043F\u0430\u0434 \u043F\u044F\u0442\u0435\u043D\n#define INTERESTING1 2.2\n\n// Component wise blending\n#define Blend(base, blend, funcf)       vec3(funcf(base.r, blend.r), funcf(base.g, blend.g), funcf(base.b, blend.b))\n// Blend Funcs\n#define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))\n#define BlendMultiply(base, blend)       (base * blend)\n#define BlendScreen(base, blend)       Blend(base, blend, BlendScreenf)\n\nvoid mainImage( out vec3 fragColor, in vec2 fragCoord )\n{\n\t//get coords and direction\n\tvec2 uv= fragCoord.xy/resolution.xy-.5;\n\tuv.y*=resolution.y/resolution.x;\n\tvec3 dir=vec3(uv*ZOOM,1.1);\n\tfloat time=time*SPEED+.25;\n\ttime = time*1.0;\n\tfloat a1=.5+time/resolution.x*2.;\n\tfloat a2=.8+time/resolution.y*2.;\n\tmat2 rot1=mat2(cos(a1),sin(a1),-sin(a1),cos(a1));\n\tmat2 rot2=mat2(cos(a2),sin(a2),-sin(a2),cos(a2));\n\tdir.xz*=rot1;\n\tdir.xy*=rot2;\n\tvec3 from=vec3(0.9,.5,0.5);\n\tfrom+=vec3(mouse.x*5., mouse.y*5.,INTERESTING1);//\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F\n\tfrom.xz*=rot1;\n\tfrom.xy*=rot2;\n\n\t//volumetric rendering\n\tfloat s=0.1 + STEPSIZE,fade=1.1;\n\tvec3 v=vec3(0.);\n\tfor (int r=0; r<VOLSTEPS; r++) {\n\t\tvec3 p=from+s*dir*.5;\n\t\tp = abs(vec3(TILE)-mod(p,vec3(TILE*2.))); // tiling fold\n\t\tfloat a=0.;\n\t\tfloat pa = 6.0;\n\t\tfloat param = 0.8;\n\t\tif(r == 0) {\n\t\t    param = 1.2 * (1.0 + sin(time*3.1)*0.05);\n\t\t}\n\t\tif(r == 1) {\n\t\t    param = 0.8 * (1.0 + sin(time)*0.02);\n\t\t}\n        int limitI = 2 + 2*(VOLSTEPS - r - 1);\n        if(r==0) {\n            for (int i1=0; i1< 4; i1++) { //\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E\n                p=1.4*abs(p)/dot(p,p)-param; // the magic formula\n                a+=1.0 * abs(length(p)-pa); // absolute sum of average change\n                pa*=0.65;//length(p);\n            }\n        } else {\n            for (int i2=0; i2< 2; i2++) { //\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E\n                p=1.4*abs(p)/dot(p,p)-param; // the magic formula\n                a+=1.0 * abs(length(p)-pa); // absolute sum of average change\n                pa*=0.65;//length(p);\n            }\n        }\n\t\ta*=sqrt(sqrt(a))*(1.0 + sqrt(sqrt(a))*float(r)); // add contrast\n\t\tv+=fade;\n\t\tv+=vec3(sin(s/0.01999)*0.5*exp(s),s,0.25*exp(s))*a*fade * 0.770; // COLOR based on distance\n\t\tfade*= a * 0.008; // distance fading\n\t\ts+=STEPSIZE;\n\t}\n\tv=mix(vec3(length(v)),v,SATURATION); //color adjust\n\tfragColor = v*.009;\n}\nfloat snoise(vec3 uv, float res)\n{\n   const vec3 s = vec3(1e0, 1e2, 1e4);\n   uv *= res;\n   vec3 uv0 = floor(mod(uv, res))*s;\n   vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;\n   vec3 f = fract(uv); f = f*f*f*(3.0-2.0*f);\n   vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);\n   vec4 r = fract(sin(v*1e-3)*1e5);\n   float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);\n   r = fract(sin((v + uv1.z - uv0.z)*1e-3)*1e5);\n   float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);\n   return mix(r0, r1, f.z)*2.-0.3;\n}\nvec3 getrainbow(vec2 coords,float intensity)\n{\n\tcoords = coords/6000.0;\n\treturn normalize(vec3(snoise(vec3(coords,0.0),intensity),\n                  snoise(vec3(coords,0.1),intensity),\n                  snoise(vec3(coords,0.2),intensity)   ));\n}\nvoid main (void)\n{\n  vec3 color = vec3 (0.0, 0.0, 0.0);\n  mainImage (color, gl_FragCoord.xy);\n  //color.r = sqrt(sqrt(color.r));\n  //color.g = sqrt(sqrt(color.g));\n  //color.b = sqrt(color.b);\n  //color = color*0.23;\n  //color.w = 1.0;\n  vec2 p = 2.0 * (gl_FragCoord.xy / resolution) - 1.0 ;\n  p.x *= resolution.x/resolution.y;\n  p *= 500.0;\n  float dx = mouse.x*30.0;\n  float dy = mouse.y*30.0;\n  vec2 offset = vec2(dx*cos(dx/100.0),dy*sin(dy/100.0));\n  //vec3 rainbow = getrainbow(p.xy+offset*30.0,11.0)*0.1;\n  //gl_FragColor = vec4(rainbow, 1.0);\n\n  gl_FragColor = vec4(color, 1.0);//1\n  //float r = 1.0 - (1.0 - color.r) * (1.0 - rainbow.r);//2\n  //float g = 1.0 - (1.0 - color.g) * (1.0 - rainbow.g);//2\n  //float b = 1.0 - (1.0 - color.b) * (1.0 - rainbow.b);//2\n  //gl_FragColor = vec4(r, g, b, 1.0);//2\n\n  //gl_FragColor = vec4(BlendScreen(color.rgb, rainbow), 1.0);//test or not\n}\n';
  shader_good_blur_frag = '\n#ifdef GL_ES\nprecision mediump float;\nprecision mediump int;\n#else\n#define highp;\n#endif\n\nvarying vec4 v_color;\nvarying vec2 v_texCoord;\n\nuniform sampler2D u_texture;\nuniform float resolution = 800.0;//width\nuniform float radius = 5.0;\nuniform vec2 dir = vec2(1.0, 0.0);//\u042D\u0442\u043E\u0442 \u0448\u0435\u0439\u0434\u0435\u0440 \u0440\u0430\u0441\u0447\u0438\u0442\u0430\u043D \u043D\u0430 \u0442\u043E \u0447\u0442\u043E\u0431\u044B \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C \u0432 \u043E\u0434\u0438\u043D frame buffer \u0441 \u0431\u043B\u044E\u0440\u043E\u043C \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 (dir = vec2(1.0,0.0)), \u0430 \u043F\u043E\u0442\u043E\u043C \u044D\u0442\u043E\u0442 frame buffer \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E dir=vec2(0.0,1.0)\n\nvoid main() {\n\tvec4 sum = vec4(0.0);\n\tvec2 tc = v_texCoord;\n\n\t// Number of pixels off the central pixel to sample from\n\tfloat blur = radius/resolution;\n\n\t// Blur direction\n\tfloat hstep = dir.x;\n\tfloat vstep = dir.y;\n\n\t// Apply blur using 9 samples and predefined gaussian weights\n\t//\u0421\u0443\u043C\u043C\u0430 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442\u043E\u0432 \u043D\u0430\u0432\u0435\u0440\u043D\u043E\u0435 \u0440\u0430\u0432\u043D\u0430 1\n\tsum += texture2D(u_texture, vec2(tc.x - 4.0*blur*hstep, tc.y - 4.0*blur*vstep)) * 0.006;\n\tsum += texture2D(u_texture, vec2(tc.x - 3.0*blur*hstep, tc.y - 3.0*blur*vstep)) * 0.044;\n\tsum += texture2D(u_texture, vec2(tc.x - 2.0*blur*hstep, tc.y - 2.0*blur*vstep)) * 0.121;\n\tsum += texture2D(u_texture, vec2(tc.x - 1.0*blur*hstep, tc.y - 1.0*blur*vstep)) * 0.194;\n\n\tsum += texture2D(u_texture, vec2(tc.x, tc.y)) * 0.27;\n\n\tsum += texture2D(u_texture, vec2(tc.x + 1.0*blur*hstep, tc.y + 1.0*blur*vstep)) * 0.194;\n\tsum += texture2D(u_texture, vec2(tc.x + 2.0*blur*hstep, tc.y + 2.0*blur*vstep)) * 0.121;\n\tsum += texture2D(u_texture, vec2(tc.x + 3.0*blur*hstep, tc.y + 3.0*blur*vstep)) * 0.044;\n\tsum += texture2D(u_texture, vec2(tc.x + 4.0*blur*hstep, tc.y + 4.0*blur*vstep)) * 0.006;\n\n\tgl_FragColor = sum;\n}\n';
  shader_mesh_default_vert = '\nattribute vec2 aVertexPosition;\n\nvoid main(void) {\n    gl_Position = vec4(aVertexPosition, 0.0, 1.0);\n}\n';
  MASS_POWER_TEXTURE_VERTEX = '\n//\u0415\u0441\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0432 \u0448\u0435\u0439\u0434\u0435\u0440\u0435 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F, \u0442\u043E \u043F\u0440\u0438 \u043A\u043E\u043C\u043F\u0438\u043B\u044F\u0446\u0438\u0438 \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0440\u0435\u0437\u0430\u043D, \u0438 \u043C\u043E\u0433\u0443\u0442 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u0443\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438 "enableVertexAttribArray: index out of range"\nattribute float a_center_x;//\u0438\u0433\u0440\u043E\u0432\u044B\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0446\u0435\u043D\u0442\u0440\u0430 \u043A\u0440\u0443\u0433\u0430\nattribute float a_center_y;\nattribute float a_angle;\nattribute float a_game_radius;//\u0420\u0430\u0434\u0438\u0443\u0441 \u0442\u043E\u0447\u043A\u0438 \u043E\u0442 \u0446\u0435\u043D\u0442\u0440\u0430 \u0432 \u0438\u0433\u0440\u043E\u0432\u044B\u0445 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430\u0445.\n\nattribute float a_relative_radius;//\u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0434\u0438\u0443\u0441 \u043E\u0442 [0 \u0434\u043E 1] \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u0440\u0443\u0433\u0430 \u0438 \u043E\u0442 (1 \u0434\u043E inf) \u0432\u043D\u0435 \u043A\u0440\u0443\u0433\u0430\n\nuniform float u_game_width;\nuniform float u_game_height;\nuniform float u_game_camera_x;\nuniform float u_game_camera_y;\n\nvarying lowp vec2 v_textCoord;\nvarying lowp float v_distance;//\u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0434\u043E \u043A\u0440\u0443\u0433\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E a_relative_radius. \u0415\u0441\u043B\u0438 0 \u0442\u043E - \u0432 \u043A\u0440\u0443\u0433\u0435 , \u0435\u0441\u043B\u0438 > 0 \u0442\u043E \u0442\u043E\u0447\u043A\u0430 \u043D\u0430 \u0440\u0430\u0441\u0442\u043E\u044F\u043D\u0438\u0438 a_relative_radius * v_distance \u043E\u0442 \u043A\u0440\u0430\u044F \u043A\u0440\u0443\u0433\u0430\n\nvoid main(void) {\n  v_distance = max(a_relative_radius - 1.0, 0.0);\n  //\u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u0437 png \u0432\u044B\u0440\u0435\u0437\u0430\u0435\u0442\u0441\u044F \u044D\u043B\u0438\u043F\u0441, \u0430 \u0435\u0449\u0451 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0442\u044F\u0433\u0438\u0432\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043F\u0430\u0434\u0430\u043B\u0438 \u0443\u0433\u043E\u043B\u043A\u0438 png\n  v_textCoord = vec2(0.5, 0.5) + vec2(cos(a_angle), sin(a_angle)) * 0.5 * min(a_relative_radius, 1.0);\n  mat2 screenScale = mat2(2.0/u_game_width,       0.0,\n                                0.0,       2.0/u_game_height);\n  vec2 gamePos = /*a_center_pos*/vec2(a_center_x, a_center_y) + vec2(cos(a_angle)*a_game_radius, sin(a_angle)*a_game_radius);\n  gl_Position = vec4(screenScale*(gamePos - vec2(u_game_camera_x, u_game_camera_y)), 1.0, 1.0);\n  }\n';
  MASS_POWER_TEXTURE_FRAG = '\nprecision mediump float;//todo lowp\nuniform sampler2D u_sampler;\nvarying lowp vec2 v_textCoord;\nvarying lowp float v_distance;//todo \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0441 invariant\nvoid main(void) {\n  gl_FragColor = texture2D(u_sampler, v_textCoord);\n  gl_FragColor.a = gl_FragColor.a / pow(1.0 + v_distance, 6.0);//todo \u043F\u043E\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C performance pow() vs \u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0433\u043E \u0440\u0430\u0437\n}\n';
  MASS_POWER_FOOD_VERTEX = '\n//\u0415\u0441\u043B\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0432 \u0448\u0435\u0439\u0434\u0435\u0440\u0435 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F, \u0442\u043E \u043F\u0440\u0438 \u043A\u043E\u043C\u043F\u0438\u043B\u044F\u0446\u0438\u0438 \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0440\u0435\u0437\u0430\u043D, \u0438 \u043C\u043E\u0433\u0443\u0442 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u0443\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438 "enableVertexAttribArray: index out of range"\nattribute float a_center_x;//\u0438\u0433\u0440\u043E\u0432\u044B\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0446\u0435\u043D\u0442\u0440\u0430 \u043A\u0440\u0443\u0433\u0430\nattribute float a_center_y;\nattribute float a_angle;\nattribute float a_game_radius;//\u0420\u0430\u0434\u0438\u0443\u0441 \u0442\u043E\u0447\u043A\u0438 \u043E\u0442 \u0446\u0435\u043D\u0442\u0440\u0430 \u0432 \u0438\u0433\u0440\u043E\u0432\u044B\u0445 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430\u0445.\n\nattribute lowp vec4 a_color;\n\nuniform mediump float time;\nuniform float u_game_width;\nuniform float u_game_height;\nuniform float u_game_camera_x;\nuniform float u_game_camera_y;\n\nvarying lowp vec4 v_color;\n\nvoid main(void) {\n  float posDiff = a_game_radius + (a_center_x + a_center_y)/100.0;\n  v_color = a_color + vec4(cos(1.0*posDiff + a_angle + time*1.5), cos(1.5*posDiff + a_angle + time*2.0 + radians(120.0)), cos(2.0*posDiff + a_angle + time*2.5 + radians(240.0)), 0.0)*(sign(2.0*posDiff + a_game_radius)+0.3);\n  v_color = v_color - 0.4*(1.0 - sign(a_game_radius))*cos(time)*vec4(1.0,1.0,1.0,0.4);\n  //\u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u0437 png \u0432\u044B\u0440\u0435\u0437\u0430\u0435\u0442\u0441\u044F \u044D\u043B\u0438\u043F\u0441, \u0430 \u0435\u0449\u0451 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0442\u044F\u0433\u0438\u0432\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043F\u0430\u0434\u0430\u043B\u0438 \u0443\u0433\u043E\u043B\u043A\u0438 png\n  mat2 screenScale = mat2(2.0/u_game_width,       0.0,\n                                0.0,       2.0/u_game_height);\n  vec2 gamePos = /*a_center_pos*/vec2(a_center_x, a_center_y) + vec2(cos(a_angle)*a_game_radius, sin(a_angle)*a_game_radius);\n  gl_Position = vec4(screenScale*(gamePos - vec2(u_game_camera_x, u_game_camera_y)), 1.0, 1.0);\n  }\n';
  MASS_POWER_FOOD_FRAG = '\nprecision mediump float;\nvarying lowp vec4 v_color;\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n';
  createTime = libObj_getInstance().time;
  lib = libObj_getInstance();
  MAX_W = 5;
  MAX_H = 5;
  widthCache = LinkedHashMap_init();
  heightCache = LinkedHashMap_init();
  main([]);
  Kotlin.defineModule('game', _);
  return _;
}(typeof game === 'undefined' ? {} : game, kotlin, this['kotlinx-serialization-runtime-js']);

//# sourceMappingURL=game.js.map
