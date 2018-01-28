if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'game'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'game'.");
}
var game = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toString = Kotlin.toString;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var getCallableRef = Kotlin.getCallableRef;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var numberToInt = Kotlin.numberToInt;
  var Unit = Kotlin.kotlin.Unit;
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
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var toBoxedChar = Kotlin.toBoxedChar;
  var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
  var throwCCE = Kotlin.throwCCE;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_j4ogox$;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_j4ogox$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
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
  var Exception = Kotlin.kotlin.Exception;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var List = Kotlin.kotlin.collections.List;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
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
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var toByte = Kotlin.toByte;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var getKClass = Kotlin.getKClass;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Any = Object;
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
  MassPower$Key.prototype = Object.create(Enum.prototype);
  MassPower$Key.prototype.constructor = MassPower$Key;
  Mode_0.prototype = Object.create(Enum.prototype);
  Mode_0.prototype.constructor = Mode_0;
  function date() {
    return '20:38:35 28-January-18';
  }
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
    var tmp$;
    tmp$ = step(reversed(new IntRange(1 - 5 | 0, 11 + 2 | 0)), 2).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      print(i.toString() + ',');
    }
    until(1, 10);
    step(downTo(100, 1), 2);
    new CharRange(65, 90);
    !(new IntRange(1, 10)).contains_mef7kx$(3);
    contains(['a', 'b', 'c'], 'a');
    var tmp$_0;
    tmp$_0 = (new IntRange(1, 10)).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
    }
    return Unit;
  }
  function testFirst$lambda_1() {
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
  function testFirst$lambda_2() {
    var anyAnswer = testFirst$lambda$anyAnswer;
    var tmp$;
    tmp$ = 5 - 1 | 0;
    for (var index = 0; index <= tmp$; index++) {
      var tmp$_0, tmp$_1;
      tmp$_0 = get_rnd(4);
      if (tmp$_0 === 1)
        tmp$_1 = 123;
      else if (tmp$_0 === 2)
        tmp$_1 = 'Two';
      else if (tmp$_0 === 3)
        tmp$_1 = new testFirst$lambda$A();
      else
        tmp$_1 = null;
      var $receiver = tmp$_1;
      info(toString($receiver) + ' is ' + anyAnswer($receiver), new Log(''));
    }
    return Unit;
  }
  function testFirst$lambda$lambda() {
    return 1 + 1 | 0;
  }
  function testFirst$lambda_3() {
    var funRef = testFirst$lambda$lambda;
    info(funRef.toString() + ' = ' + funRef(), new Log('function refference'));
    return Unit;
  }
  function testFirst$lambda_4() {
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
  function testFirst$lambda_5() {
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
  function testFirst$lambda_6() {
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
  function testFirst$lambda_7() {
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
  Object.defineProperty(testFirst$lambda$A_1.prototype, 'f', {
    get: function () {
      return this.f_16re1w$_0.getValue_ealjly$(this, new PropertyMetadata('f'));
    },
    set: function (f) {
      this.f_16re1w$_0.setValue_a4owz8$(this, new PropertyMetadata('f'), f);
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
  function testFirst$lambda_8() {
    return Unit;
  }
  function testFirst$lambda_9() {
    var list = plus_0(plus(listOf(['a', 'b']), 'c'), listOf(['d', 'e']));
    return Unit;
  }
  function testFirst$lambda_10() {
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
  function testFirst$lambda_11() {
    var ж = testFirst$lambda$ж;
    ж(testFirst$lambda$lambda_1)(testFirst$lambda$lambda_2);
    return Unit;
  }
  function testFirst$lambda_12() {
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
  function testFirst$lambda_13() {
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
  function testFirst$lambda_14() {
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
      var $receiver = this.s_16rdqp$_0;
      new PropertyMetadata('s');
      return $receiver.value;
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
  function testFirst$lambda_15() {
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
  Object.defineProperty(testFirst$lambda$A_4.prototype, 'v1', {
    get: function () {
      return this.v1_y7ja1j$_0.getValue_lrcp0p$(this, new PropertyMetadata('v1'));
    },
    set: function (v1) {
      this.v1_y7ja1j$_0.setValue_9rddgb$(this, new PropertyMetadata('v1'), v1);
    }
  });
  Object.defineProperty(testFirst$lambda$A_4.prototype, 'v2', {
    get: function () {
      return this.v2_y7ja2e$_0.getValue_lrcp0p$(this, new PropertyMetadata('v2'));
    },
    set: function (v2) {
      this.v2_y7ja2e$_0.setValue_9rddgb$(this, new PropertyMetadata('v2'), v2);
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
  function testFirst$lambda_16() {
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
  Object.defineProperty(testFirst$lambda$A_5.prototype, 'v', {
    get: function () {
      return this.v_16rdo4$_0.getValue_lrcp0p$(this, new PropertyMetadata('v'));
    },
    set: function (v) {
      this.v_16rdo4$_0.setValue_9rddgb$(this, new PropertyMetadata('v'), v);
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
  function testFirst$lambda_17() {
    (new testFirst$lambda$A_5()).init_61zpoe$('value1').v;
    return Unit;
  }
  function testFirst$lambda$User(map) {
    this.map = map;
    this.name_uwmimf$_0 = this.map;
    this.age_5kmzxf$_0 = this.map;
  }
  var getOrImplicitDefault = Kotlin.kotlin.collections.getOrImplicitDefault_t9ocha$;
  Object.defineProperty(testFirst$lambda$User.prototype, 'name', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.name_uwmimf$_0, (new PropertyMetadata('name')).callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(testFirst$lambda$User.prototype, 'age', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.age_5kmzxf$_0, (new PropertyMetadata('age')).callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
  });
  testFirst$lambda$User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  function testFirst$lambda_18() {
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
  function testFirst$lambda_19() {
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
  function testFirst$lambda_20() {
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
    tmp$break: do {
      var iterator = destination.iterator();
      if (!iterator.hasNext()) {
        null;
        break tmp$break;
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
  function testFirst$lambda_21() {
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
  function testFirst$lambda_22() {
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
  function testFirst$lambda_23() {
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
      var tmp$;
      if ($receiver != null) {
        var result = new StringBuilder('[');
        tmp$ = withIndex($receiver).iterator();
        while (tmp$.hasNext()) {
          var tmp$_0 = tmp$.next();
          var i = tmp$_0.component1()
          , v = tmp$_0.component2();
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
  function testFirst$lambda_24() {
    var hello = testFirst$lambda$hello;
    var hello_0 = testFirst$lambda$hello_0(hello);
    var sayHi = testFirst$lambda$sayHi(hello_0, hello);
    sayHi(listOf([1, 2, null, 'A', toBoxedChar(66)]));
    var coll = null;
    sayHi(coll);
    return Unit;
  }
  function testFirst$lambda_25() {
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
  function testFirst$lambda_26() {
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
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  function testFirst$lambda_27() {
    var toRegex$result;
    toRegex$result = Regex('\\.|-');
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
    var regex = Regex('(.+)/(.+)\\.(.+)');
    var matchResult = regex.matchEntire_6bul2c$(path);
    if (matchResult != null) {
      var tmp$ = matchResult.destructured;
      var directory = tmp$.match.groupValues.get_za3lpa$(1);
      var filename = tmp$.match.groupValues.get_za3lpa$(2);
      var extension = tmp$.match.groupValues.get_za3lpa$(3);
      println('Dir: ' + directory + ', name: ' + filename + ', ext: ' + extension);
    }
  }
  function testFirst$lambda_28() {
    var parsePath1 = testFirst$lambda$parsePath1;
    var parsePath2 = testFirst$lambda$parsePath2;
    var path = '/Users/yole/kotlin-book/chapter.adoc';
    parsePath1(path);
    parsePath2(path);
    return Unit;
  }
  function testFirst$lambda_29() {
    var str = trimMargin('\n                \u0439abc\n                ', '\u0439');
    str.length;
    println(str);
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
  function testFirst$lambda_30() {
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
  function testFirst$lambda_31() {
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
  function testFirst$lambda_32() {
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
  function testFirst$lambda_33() {
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
  function testFirst$lambda_34() {
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
  function testFirst$lambda_35() {
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
  function testFirst$lambda_36() {
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
            break;
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
        if (this.state_0 === 1)
          throw e;
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
  function testFirst$lambda_37() {
    var block = testFirst$lambda$lambda_9;
    if (false) {
      println(' --- COROUTINES UNDER THE HOOD --- ');
      println(block);
      println(' --- COROUTINES UNDER THE HOOD --- ');
    }
    startCoroutine(block, new testFirst$lambda$ObjectLiteral());
    return Unit;
  }
  function testFirst$lambda_38() {
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
  function testFirst$lambda_39() {
    var naturalNumbers = generateSequence(0, testFirst$lambda$lambda_10);
    var numbersTo100 = takeWhile(naturalNumbers, testFirst$lambda$lambda_11);
    println(sum(numbersTo100));
    var b = contains_0(naturalNumbers, 123);
    return Unit;
  }
  function testFirst$lambda_40() {
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
  function testFirst$lambda_41() {
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
  function testFirst$lambda_42() {
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
  function testFirst$lambda_43() {
    (new testFirst$lambda$A_13()).v;
    return Unit;
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function testFirst$lambda_44() {
    ' ' == null || isBlank(' ');
    'small'.toUpperCase();
    var coerceIn_0 = coerceIn(140, new IntRange(1, 100));
    breakpoint();
    return Unit;
  }
  function testFirst$lambda$nothingFun() {
    throw new Exception('some exception');
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
  function testFirst$lambda_45() {
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
  function testFirst$lambda_46() {
    var tmp$ = listOf(['a', 'b']);
    var a = tmp$.get_za3lpa$(0);
    var b = tmp$.get_za3lpa$(1);
    var c = tmp$.get_za3lpa$(2);
    return Unit;
  }
  function testFirst$lambda$lambda_13() {
    return;
  }
  function testFirst$lambda_47() {
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
      throw new IllegalArgumentException('List is expected');
    }
    var intList = tmp$_0;
    println(sum_0(intList));
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
  function testFirst$lambda_48() {
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
  function testFirst$lambda_49() {
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
  function testFirst$lambda_50() {
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
  function testFirst$lambda_51() {
    var table = testFirst$lambda$table;
    info(table(testFirst$lambda$lambda_15), new Log('DSL'));
    return Unit;
  }
  function testFirst$lambda_52() {
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
    var tmp$result;
    tmp$break: do {
      var iterator = destination.iterator();
      if (!iterator.hasNext()) {
        tmp$result = null;
        break tmp$break;
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
      tmp$result = maxElem;
    }
     while (false);
    var maxBy = tmp$result;
    return maxBy != null ? maxBy.first : null;
  }
  function testFirst$lambda_53() {
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
  function testFirst$lambda_54() {
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
  function testFirst$lambda_55() {
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
  function testFirst$lambda_56() {
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
  function testFirst$lambda_57() {
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
  function testFirst$lambda_58() {
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
  function testFirst$lambda_59() {
    var increment = {v: 0};
    var printInc = testFirst$lambda$printInc(increment);
    testFirst$lambda$testFirst$lambda$Child_init_0(printInc, 1);
    return Unit;
  }
  function testFirst$lambda_60() {
    var a = setOf([1, 2]);
    var b = setOf([2, 3]);
    info(union(a, b), new Log('union'));
    info(intersect(a, b), new Log('intersect'));
    breakpoint();
    return Unit;
  }
  function testFirst() {
    (new ExecuteMe()).ne(testFirst$lambda).ne(testFirst$lambda_0).e(testFirst$lambda_1).e(testFirst$lambda_2).e(testFirst$lambda_3).e(testFirst$lambda_4).e(testFirst$lambda_5).ne(testFirst$lambda_6).e(testFirst$lambda_7).e(testFirst$lambda_8).e(testFirst$lambda_9).ne(testFirst$lambda_10).ne(testFirst$lambda_11).ne(testFirst$lambda_12).ne(testFirst$lambda_13).e(testFirst$lambda_14).e(testFirst$lambda_15).e(testFirst$lambda_16).e(testFirst$lambda_17).e(testFirst$lambda_18).e(testFirst$lambda_19).e(testFirst$lambda_20).e(testFirst$lambda_21).e(testFirst$lambda_22).e(testFirst$lambda_23).e(testFirst$lambda_24).ne(testFirst$lambda_25).e(testFirst$lambda_26).ne(testFirst$lambda_27).ne(testFirst$lambda_28).e(testFirst$lambda_29).e(testFirst$lambda_30).e(testFirst$lambda_31).e(testFirst$lambda_32).e(testFirst$lambda_33).ne(testFirst$lambda_34).e(testFirst$lambda_35).e(testFirst$lambda_36).e(testFirst$lambda_37).e(testFirst$lambda_38).e(testFirst$lambda_39).ne(testFirst$lambda_40).e(testFirst$lambda_41).e(testFirst$lambda_42).ne(testFirst$lambda_43).e(testFirst$lambda_44).e(testFirst$lambda_45).ne(testFirst$lambda_46).e(testFirst$lambda_47).e(testFirst$lambda_48).e(testFirst$lambda_49).e(testFirst$lambda_50).e(testFirst$lambda_51).e(testFirst$lambda_52).e(testFirst$lambda_53).e(testFirst$lambda_54).e(testFirst$lambda_55).e(testFirst$lambda_56).ne(testFirst$lambda_57).e(testFirst$lambda_58).e(testFirst$lambda_59).e(testFirst$lambda_60);
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
    Mode$DOT_instance = new Mode('DOT', 1);
    Mode$EXPERIMENTS_instance = new Mode('EXPERIMENTS', 2);
    Mode$EMPTY_instance = new Mode('EMPTY', 3);
    Mode$TETRIS_instance = new Mode('TETRIS', 4);
    Mode$FRACTAL1_instance = new Mode('FRACTAL1', 5);
    Mode$FRACTAL2_instance = new Mode('FRACTAL2', 6);
  }
  var Mode$MASS_POWER_instance;
  function Mode$MASS_POWER_getInstance() {
    Mode_initFields();
    return Mode$MASS_POWER_instance;
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
    return [Mode$MASS_POWER_getInstance(), Mode$DOT_getInstance(), Mode$EXPERIMENTS_getInstance(), Mode$EMPTY_getInstance(), Mode$TETRIS_getInstance(), Mode$FRACTAL1_getInstance(), Mode$FRACTAL2_getInstance()];
  }
  Mode.values = Mode$values;
  function Mode$valueOf(name) {
    switch (name) {
      case 'MASS_POWER':
        return Mode$MASS_POWER_getInstance();
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
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = Mode$MASS_POWER_getInstance();
    if (equals(tmp$, Mode$MASS_POWER_getInstance()))
      new MassPower();
    else if (equals(tmp$, Mode$EXPERIMENTS_getInstance())) {
      testFirst();
      console.info('hi console');
    }
     else if (equals(tmp$, Mode$EMPTY_getInstance())) {
      (tmp$_1 = (tmp$_0 = document.body) != null ? tmp$_0.style : null) != null ? (tmp$_1.backgroundColor = '#242') : null;
      new EmptyGameScreen();
    }
     else if (equals(tmp$, Mode$TETRIS_getInstance()))
      new TetriesScreen();
    else if (equals(tmp$, Mode$FRACTAL1_getInstance()))
      (new Fractal1(new HTMLElements())).render();
    else if (equals(tmp$, Mode$FRACTAL2_getInstance()))
      (new Fractal2(new HTMLElements())).render();
    else if (equals(tmp$, Mode$DOT_getInstance()))
      (new Dots(new HTMLElements())).render();
    else
      Kotlin.noWhenBranchMatched();
  }
  function Dots(html) {
    this.html_0 = html;
    this.shaderProgram_0 = createWebGLProgram(this.html_0.webgl, '\nattribute vec2 a_position;\nvarying vec2 v_pos;\nuniform vec2 u_scale;\nvoid main(void) {\n  v_pos = a_position*u_scale;\n  gl_Position = vec4(a_position, 0.0, 1.0);\n//  gl_PointSize = 10.0;\n}\n', '\nprecision mediump float;\nvarying vec2 v_pos;\nuniform int u_length;\nconst int max_length = gl_MaxVertexUniformVectors/4;\nuniform vec3 u_color[max_length];\nuniform vec2 u_dot[max_length];\nvoid main(void) {\n  vec3 clr = vec3(0.0,0.0,0.0);\n  for(int i=0;i < max_length;i++) {\n    vec3 c = u_color[i];\n    if(c.r + c.g + c.b == 0.0) break;\n     clr = clr + 0.01/distance(v_pos, u_dot[i])*c;\n  }\n  gl_FragColor = vec4(clr, 1.0);\n}\n');
    var list = ArrayList_init(10);
    var tmp$;
    tmp$ = 10 - 1 | 0;
    for (var index = 0; index <= tmp$; index++) {
      list.add_11rb$(new Dot());
    }
    this.dots = list;
    var $receiver = this.html_0.webgl;
    var tmp$_0;
    $receiver.useProgram(this.shaderProgram_0);
    $receiver.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, (tmp$_0 = $receiver.createBuffer()) != null ? tmp$_0 : JsUtil_getInstance().error_yhszz7$(['Unable to create webgl buffer!']));
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
    this.drawText_k35s1u$(300.0, this.view.gameHeight / 2.0, 'Hello!' + date(), 'bold 30pt Arial', 'rgba(255,255,0,0.75)');
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
    this.attribBuffer = (tmp$ = this.webgl.createBuffer()) != null ? tmp$ : JsUtil_getInstance().error_yhszz7$(['Unable to create webgl buffer!']);
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
    this.attribBuffer = (tmp$ = this.webgl.createBuffer()) != null ? tmp$ : JsUtil_getInstance().error_yhszz7$(['Unable to create webgl buffer!']);
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
      result = (result && equals(playfield[this.y + pos.second - 1 | 0][this.x + pos.first | 0], ' '));
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
      result = (result && equals(playfield[this.y + pos.second | 0][this.x + pos.first - 1 | 0], ' '));
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
      result = (result && equals(playfield[this.y + pos.second | 0][this.x + pos.first + 1 | 0], ' '));
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
      result = (result && equals(playfield[this.y + pos.second | 0][this.x + pos.first | 0], ' '));
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
      if (orientation === 0)
        result[index] = to(this.positions[index].first, this.positions[index].second);
      else if (orientation === 1)
        result[index] = to(this.positions[index].second, -this.positions[index].first);
      else if (orientation === 2)
        result[index] = to(-this.positions[index].first, -this.positions[index].second);
      else if (orientation === 3)
        result[index] = to(-this.positions[index].second, this.positions[index].first);
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
    this.sprites.draw_p8tr0q$(this.greyBlocks[c], 40.0 + x * 80.0, -this.deltaY + 40.0 + y * 80.0, 10.0);
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
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
      var tmp$_6 = this.playfield;
      var array = Array_0(10);
      var tmp$_7;
      tmp$_7 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_7; i++) {
        array[i] = ' ';
      }
      tmp$_6[21] = array;
      linesRemoved = linesRemoved + 1 | 0;
      this.timePerTick *= 0.95;
    }
    this.score.linesRemoved_za3lpa$(linesRemoved);
    tmp$ = linesRemoved;
    if (tmp$ !== 0)
      if (tmp$ === 1) {
        GameSounds$SINGLE_getInstance().play_yrwdxb$();
        (tmp$_1 = (tmp$_0 = document.body) != null ? tmp$_0.style : null) != null ? (tmp$_1.backgroundColor = '#ff0') : null;
      }
       else if (tmp$ === 2) {
        GameSounds$DOUBLE_getInstance().play_yrwdxb$();
        (tmp$_3 = (tmp$_2 = document.body) != null ? tmp$_2.style : null) != null ? (tmp$_3.backgroundColor = '#f80') : null;
      }
       else {
        GameSounds$TRIPLE_getInstance().play_yrwdxb$();
        (tmp$_5 = (tmp$_4 = document.body) != null ? tmp$_4.style : null) != null ? (tmp$_5.backgroundColor = '#f00') : null;
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
      throw new IllegalArgumentException('Matrix size should be 16!');
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
      throw new IllegalArgumentException('Matrix size should be 16!');
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
      JsUtil_getInstance().error_yhszz7$(["Your browser doesn't seem to support webgl!", 'webgl?', webglcanvas]);
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
      var $receiver = this.html_725dha$_kcuokc$_0;
      new PropertyMetadata('html');
      return $receiver.value;
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
    var tmp$;
    var saveInvoke_klfg04$result;
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
        saveInvoke_klfg04$result = Unit;
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          console.log(e.message, e);
          saveInvoke_klfg04$result = null;
          break saveInvoke_klfg04$break;
        }
         else
          throw e;
      }
    }
     while (false);
    (tmp$ = saveInvoke_klfg04$result) != null ? tmp$ : Unit;
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
      return min_0(window.innerWidth, window.innerHeight * this.gameWidth / this.gameHeight);
    }
  });
  Object.defineProperty(Game$View.prototype, 'windowHeight', {
    get: function () {
      return min_0(window.innerHeight, window.innerWidth * this.gameHeight / this.gameWidth);
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
      tmp$_0 = (tmp$ = this$Game.gl.createTexture()) != null ? tmp$ : JsUtil_getInstance().error_yhszz7$(["Couldn't create webgl texture!"]);
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
    return this.temp1_1_0((tmp$ = this.$outer.gl.createTexture()) != null ? tmp$ : JsUtil_getInstance().error_yhszz7$(["Couldn't create webgl texture!"]), image);
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
    return this.temp1_2_0((tmp$ = this.$outer.gl.createTexture()) != null ? tmp$ : JsUtil_getInstance().error_yhszz7$(["Couldn't create webgl texture!"]), width, height, imageBuf);
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
    this.left = -this.width / 2.0;
    this.right = this.width / 2.0;
    this.bottom = -this.height / 2.0;
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
    var left = -(this.width / horCount | 0) / 2.0;
    var right = (this.width / horCount | 0) / 2.0;
    var bottom = -(this.height / verCount | 0) / 2.0;
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
    var body = (tmp$ = document.body) != null ? tmp$ : JsUtil_getInstance().error_yhszz7$(["Can't register key events, document.body is null!?"]);
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
    return min(max(this.width / aspectRation, this.minHeight), this.maxHeight);
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
    return min(max(this.height * aspectRation, this.minWidth), this.maxWidth);
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
        JsUtil_getInstance().error_yhszz7$(['Unable to compile shader!', source, $receiver.getShaderInfoLog(tmp$)]);
      tmp$_1 = tmp$;
    }
     else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? tmp$_0 : JsUtil_getInstance().error_yhszz7$(['Unable to request shader from webgl context!']);
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
        JsUtil_getInstance().error_yhszz7$(['Unable to compile shader program!', $receiver.getProgramInfoLog(tmp$)]);
      tmp$_1 = tmp$;
    }
     else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? tmp$_0 : JsUtil_getInstance().error_yhszz7$(['Unable to request shader program from webgl context!']);
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
    this.attribBuffer = (tmp$ = this.$outer.webgl.createBuffer()) != null ? tmp$ : JsUtil_getInstance().error_yhszz7$(['Unable to create webgl buffer!']);
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
        JsUtil_getInstance().error_yhszz7$(['Number of vertices not a multiple of the attribute block size!']);
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
      throw new IllegalArgumentException("Sound '" + name + "' not found, load it first!");
    }
    return tmp$_0;
  };
  Sounds.prototype.pause_61zpoe$ = function (name) {
    var tmp$;
    if (((tmp$ = this.sounds_0.get_11rb$(name)) != null ? (tmp$.pause(), Unit) : null) == null) {
      throw new IllegalArgumentException("Sound '" + name + "' not found, load it first!");
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
  function RenderData(x, y, scale, imgData) {
    this.x = x;
    this.y = y;
    this.scale = scale;
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
    return this.scale;
  };
  RenderData.prototype.component4 = function () {
    return this.imgData;
  };
  RenderData.prototype.copy_7oadzn$ = function (x, y, scale, imgData) {
    return new RenderData(x === void 0 ? this.x : x, y === void 0 ? this.y : y, scale === void 0 ? this.scale : scale, imgData === void 0 ? this.imgData : imgData);
  };
  RenderData.prototype.toString = function () {
    return 'RenderData(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', scale=' + Kotlin.toString(this.scale)) + (', imgData=' + Kotlin.toString(this.imgData)) + ')';
  };
  RenderData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.imgData) | 0;
    return result;
  };
  RenderData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.imgData, other.imgData)))));
  };
  function View() {
  }
  Object.defineProperty(View.prototype, 'gameWidth', {
    get: function () {
      return this.getWidth_mx4ult$(window.innerWidth / window.innerHeight);
    }
  });
  Object.defineProperty(View.prototype, 'gameHeight', {
    get: function () {
      return this.getHeight_mx4ult$(window.innerWidth / window.innerHeight);
    }
  });
  Object.defineProperty(View.prototype, 'projectionMatrix', {
    get: function () {
      var $receiver = new Matrix4();
      $receiver.setOrthographicProjection_w8lrqs$(0.0, this.gameWidth, 0.0, this.gameHeight, -0.1, -100.0);
      return $receiver;
    }
  });
  Object.defineProperty(View.prototype, 'windowWidth', {
    get: function () {
      return min_0(window.innerWidth, window.innerHeight * this.gameWidth / this.gameHeight);
    }
  });
  Object.defineProperty(View.prototype, 'windowHeight', {
    get: function () {
      return min_0(window.innerHeight, window.innerWidth * this.gameHeight / this.gameWidth);
    }
  });
  Object.defineProperty(View.prototype, 'borderLeft', {
    get: function () {
      return (window.innerWidth - this.windowWidth) / 2;
    }
  });
  Object.defineProperty(View.prototype, 'borderTop', {
    get: function () {
      return (window.innerHeight - this.windowHeight) / 2;
    }
  });
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
    return min(max(this.width / aspectRation, this.minHeight), this.maxHeight);
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
      view = new FixedWidth(1200.0, 800.0, 1400.0);
    this.view = view;
    this.html = new HTMLElements();
    this.vertex = compileShader(this.gl, '\nattribute vec2 a_position;\nattribute vec2 a_boundingBox;\nattribute vec2 a_texCoord;\nattribute float a_scale;\nattribute float a_rotation;\nattribute float a_divide;\nuniform mat4 u_projectionView;\nvarying vec2 v_textCoord;\nvarying vec4 myColor;\nvarying vec4 arr[gl_MaxVaryingVectors-2];//28-29\nvarying float v_divide;\n\nmat4 scale(float scale) {\n  return mat4(\n    vec4(scale, 0.0,   0.0,   0.0),\n    vec4(0.0,   scale, 0.0,   0.0),\n    vec4(0.0,   0.0,   scale, 0.0),\n    vec4(0.0,   0.0,   0.0,   1.0)\n  );\n}\nmat4 rotateZ(float angle) {\n  return mat4(\n    vec4(cos(angle),   sin(angle),  0.0,  0.0),\n    vec4(-sin(angle),  cos(angle),  0.0,  0.0),\n    vec4(0.0,          0.0,         1.0,  0.0),\n    vec4(0.0,          0.0,         0.0,  1.0)\n  );\n}\nvoid main(void) {\n  v_divide = a_divide;\n  v_textCoord = a_texCoord;\n  vec4 scaledBox = vec4(a_boundingBox, 1.0, 1.0) * scale(a_scale) * rotateZ(a_rotation);\n  //myColor = vec4(1.0,0.3,0.3,0.5);\n  myColor = vec4(1.0,1.0,1.0,1.0);\n  gl_Position = u_projectionView * vec4(a_position + scaledBox.xy, 1.0, 1.0);\n  }\n', WebGLRenderingContext.VERTEX_SHADER);
    this.shaderProgram = createWebGLProgram_0(this.gl, this.vertex, compileShader(this.gl, '\nprecision mediump float;\nuniform sampler2D u_sampler;\nuniform lowp int u_test_array_size;\nuniform lowp float u_arr[3];\nuniform lowp vec4 u_vec_arr[gl_MaxVertexUniformVectors - 5];\nvarying vec2 v_textCoord;\nvarying vec4 myColor;\nvarying vec4 arr[gl_MaxVaryingVectors-2];//28-29\nvarying float v_divide;\nvoid main(void) {\n  gl_FragColor = myColor * texture2D(u_sampler, v_textCoord);\n  gl_FragColor.a = gl_FragColor.a / v_divide/v_divide/v_divide/v_divide/v_divide/v_divide;\n  //gl_FragColor.a = gl_FragColor.a * (u_arr[0] + u_arr[1]);\n}\n', WebGLRenderingContext.FRAGMENT_SHADER));
    this.shaderProgram2 = createWebGLProgram_0(this.gl, this.vertex, compileShader(this.gl, '\nprecision mediump float;\nuniform sampler2D u_sampler;\nuniform lowp int u_test_array_size;\nuniform lowp float u_arr[3];\nuniform lowp vec4 u_vec_arr[gl_MaxVertexUniformVectors - 5];\nvarying vec2 v_textCoord;\nvarying vec4 myColor;\nvarying vec4 arr[gl_MaxVaryingVectors-2];//28-29\nvarying float v_divide;\nvoid main(void) {\n  gl_FragColor = myColor;\n}\n', WebGLRenderingContext.FRAGMENT_SHADER));
    var $receiver = listOf([new Attr('a_position', 2), new Attr('a_boundingBox', 2), new Attr('a_texCoord', 2), new Attr('a_scale', 1), new Attr('a_rotation', 1), new Attr('a_divide', 1)]);
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var result = ArrayList_init();
    var currentSize = {v: 0};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      result.add_11rb$(new IterAttr(element, this.gl.getAttribLocation(this.shaderProgram, element.locationName), currentSize.v));
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
    window.onresize = MassPower_init$lambda(this);
    window.onload = MassPower_init$lambda_0(this);
    window.requestAnimationFrame(MassPower_init$lambda_1(this));
    document.onmousemove = MassPower_init$lambda_2(this);
    document.onkeypress = MassPower_init$lambda_3(this);
    this.previousTime = this.time;
    this.averageConst = 30;
    this.fps = 60.0;
    this.modeKey_0 = MassPower$Key$Q_getInstance();
    this.srcFactorGlow = WebGLRenderingContext.SRC_ALPHA;
    this.dstFactorGlow = false ? WebGLRenderingContext.DST_ALPHA : WebGLRenderingContext.SRC_ALPHA_SATURATE;
    this.srcFactor = WebGLRenderingContext.SRC_ALPHA;
    this.dstFactor = WebGLRenderingContext.ONE_MINUS_SRC_ALPHA;
  }
  Object.defineProperty(MassPower.prototype, 'gl', {
    get: function () {
      return this.html.webgl;
    }
  });
  function MassPower$Key(name, ordinal, code, number) {
    if (number === void 0)
      number = false;
    Enum.call(this);
    this.code = code;
    this.number = number;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MassPower$Key_initFields() {
    MassPower$Key_initFields = function () {
    };
    MassPower$Key$Q_instance = new MassPower$Key('Q', 0, 113);
    MassPower$Key$W_instance = new MassPower$Key('W', 1, 119);
    MassPower$Key$E_instance = new MassPower$Key('E', 2, 101);
    MassPower$Key$R_instance = new MassPower$Key('R', 3, 114);
    MassPower$Key$T_instance = new MassPower$Key('T', 4, 116);
    MassPower$Key$Y_instance = new MassPower$Key('Y', 5, 121);
    MassPower$Key$ZERO_instance = new MassPower$Key('ZERO', 6, 48, true);
    MassPower$Key$ONE_instance = new MassPower$Key('ONE', 7, 49, true);
    MassPower$Key$TWO_instance = new MassPower$Key('TWO', 8, 50, true);
    MassPower$Key$THREE_instance = new MassPower$Key('THREE', 9, 51, true);
    MassPower$Key$FOUR_instance = new MassPower$Key('FOUR', 10, 52, true);
    MassPower$Key$FIVE_instance = new MassPower$Key('FIVE', 11, 53, true);
    MassPower$Key$SIX_instance = new MassPower$Key('SIX', 12, 54, true);
    MassPower$Key$SEVEN_instance = new MassPower$Key('SEVEN', 13, 55, true);
    MassPower$Key$EIGHT_instance = new MassPower$Key('EIGHT', 14, 56, true);
    MassPower$Key$NINE_instance = new MassPower$Key('NINE', 15, 57, true);
    MassPower$Key$Companion_getInstance();
  }
  var MassPower$Key$Q_instance;
  function MassPower$Key$Q_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$Q_instance;
  }
  var MassPower$Key$W_instance;
  function MassPower$Key$W_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$W_instance;
  }
  var MassPower$Key$E_instance;
  function MassPower$Key$E_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$E_instance;
  }
  var MassPower$Key$R_instance;
  function MassPower$Key$R_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$R_instance;
  }
  var MassPower$Key$T_instance;
  function MassPower$Key$T_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$T_instance;
  }
  var MassPower$Key$Y_instance;
  function MassPower$Key$Y_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$Y_instance;
  }
  var MassPower$Key$ZERO_instance;
  function MassPower$Key$ZERO_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$ZERO_instance;
  }
  var MassPower$Key$ONE_instance;
  function MassPower$Key$ONE_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$ONE_instance;
  }
  var MassPower$Key$TWO_instance;
  function MassPower$Key$TWO_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$TWO_instance;
  }
  var MassPower$Key$THREE_instance;
  function MassPower$Key$THREE_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$THREE_instance;
  }
  var MassPower$Key$FOUR_instance;
  function MassPower$Key$FOUR_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$FOUR_instance;
  }
  var MassPower$Key$FIVE_instance;
  function MassPower$Key$FIVE_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$FIVE_instance;
  }
  var MassPower$Key$SIX_instance;
  function MassPower$Key$SIX_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$SIX_instance;
  }
  var MassPower$Key$SEVEN_instance;
  function MassPower$Key$SEVEN_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$SEVEN_instance;
  }
  var MassPower$Key$EIGHT_instance;
  function MassPower$Key$EIGHT_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$EIGHT_instance;
  }
  var MassPower$Key$NINE_instance;
  function MassPower$Key$NINE_getInstance() {
    MassPower$Key_initFields();
    return MassPower$Key$NINE_instance;
  }
  Object.defineProperty(MassPower$Key.prototype, 'numValue', {
    get: function () {
      return this.code - 48 | 0;
    }
  });
  function MassPower$Key$Companion() {
    MassPower$Key$Companion_instance = this;
  }
  MassPower$Key$Companion.prototype.getByCode_za3lpa$ = function (code) {
    var tmp$, tmp$_0;
    tmp$ = MassPower$Key$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var value = tmp$[tmp$_0];
      if (value.code === code) {
        return value;
      }
    }
    return null;
  };
  MassPower$Key$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MassPower$Key$Companion_instance = null;
  function MassPower$Key$Companion_getInstance() {
    MassPower$Key_initFields();
    if (MassPower$Key$Companion_instance === null) {
      new MassPower$Key$Companion();
    }
    return MassPower$Key$Companion_instance;
  }
  MassPower$Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: [Enum]
  };
  function MassPower$Key$values() {
    return [MassPower$Key$Q_getInstance(), MassPower$Key$W_getInstance(), MassPower$Key$E_getInstance(), MassPower$Key$R_getInstance(), MassPower$Key$T_getInstance(), MassPower$Key$Y_getInstance(), MassPower$Key$ZERO_getInstance(), MassPower$Key$ONE_getInstance(), MassPower$Key$TWO_getInstance(), MassPower$Key$THREE_getInstance(), MassPower$Key$FOUR_getInstance(), MassPower$Key$FIVE_getInstance(), MassPower$Key$SIX_getInstance(), MassPower$Key$SEVEN_getInstance(), MassPower$Key$EIGHT_getInstance(), MassPower$Key$NINE_getInstance()];
  }
  MassPower$Key.values = MassPower$Key$values;
  function MassPower$Key$valueOf(name) {
    switch (name) {
      case 'Q':
        return MassPower$Key$Q_getInstance();
      case 'W':
        return MassPower$Key$W_getInstance();
      case 'E':
        return MassPower$Key$E_getInstance();
      case 'R':
        return MassPower$Key$R_getInstance();
      case 'T':
        return MassPower$Key$T_getInstance();
      case 'Y':
        return MassPower$Key$Y_getInstance();
      case 'ZERO':
        return MassPower$Key$ZERO_getInstance();
      case 'ONE':
        return MassPower$Key$ONE_getInstance();
      case 'TWO':
        return MassPower$Key$TWO_getInstance();
      case 'THREE':
        return MassPower$Key$THREE_getInstance();
      case 'FOUR':
        return MassPower$Key$FOUR_getInstance();
      case 'FIVE':
        return MassPower$Key$FIVE_getInstance();
      case 'SIX':
        return MassPower$Key$SIX_getInstance();
      case 'SEVEN':
        return MassPower$Key$SEVEN_getInstance();
      case 'EIGHT':
        return MassPower$Key$EIGHT_getInstance();
      case 'NINE':
        return MassPower$Key$NINE_getInstance();
      default:throwISE('No enum constant masspower.MassPower.Key.' + name);
    }
  }
  MassPower$Key.valueOf_61zpoe$ = MassPower$Key$valueOf;
  function MassPower$GameTexture($outer, glTexture, width, height) {
    this.$outer = $outer;
    this.glTexture = glTexture;
    this.width = width;
    this.height = height;
    this.left = -this.width / 2.0;
    this.right = this.width / 2.0;
    this.bottom = -this.height / 2.0;
    this.top = this.height / 2.0;
  }
  MassPower$GameTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameTexture',
    interfaces: []
  };
  MassPower.prototype.resize_0 = function () {
    this.gl.canvas.width = numberToInt(this.view.gameWidth);
    this.gl.canvas.height = numberToInt(this.view.gameHeight);
    this.html.canvas2d.canvas.width = numberToInt(this.view.gameWidth);
    this.html.canvas2d.canvas.height = numberToInt(this.view.gameHeight);
    this.gl.viewport(0, 0, numberToInt(this.view.gameWidth), numberToInt(this.view.gameHeight));
    this.gl.canvas.setAttribute('style', 'position: absolute; left: ' + this.view.borderLeft + 'px; top: ' + this.view.borderTop + 'px; z-index: 5; width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;');
    this.html.canvas2d.canvas.setAttribute('style', 'position: absolute; left: ' + this.view.borderLeft + 'px; top: ' + this.view.borderTop + 'px; z-index: 10; width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;');
  };
  Object.defineProperty(MassPower.prototype, 'time', {
    get: function () {
      return (new Date()).getTime() / 1000.0;
    }
  });
  function MassPower$gameLoop$lambda$lambda$lambda$lambda(this$MassPower, closure$img, this$) {
    return function (it) {
      var tmp$;
      var texture = (tmp$ = this$MassPower.gl.createTexture()) != null ? tmp$ : JsUtil_getInstance().error_yhszz7$(["Couldn't create webgl texture!"]);
      this$MassPower.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
      this$MassPower.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);
      this$MassPower.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, closure$img);
      this$MassPower.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.NEAREST);
      this$MassPower.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.NEAREST);
      this$MassPower.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
      this$MassPower.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
      if (DYNAMIC_TEXTURE)
        this$MassPower.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
      this$.texture = new MassPower$GameTexture(this$MassPower, texture, closure$img.width, closure$img.height);
      return null;
    };
  }
  var math = Kotlin.kotlin.math;
  var Float32Array_0 = Float32Array;
  var WebGLRenderingContext$Companion = WebGLRenderingContext;
  function MassPower$render$lambda(closure$allFloatArgsCount) {
    return function () {
      return closure$allFloatArgsCount <= 0;
    };
  }
  function MassPower$render$lambda_0(closure$allFloatArgsCount, this$MassPower) {
    return function () {
      return closure$allFloatArgsCount % this$MassPower.verticesBlockSize !== 0;
    };
  }
  function MassPower$render$lambda_1(closure$allFloatArgsCount) {
    return function () {
      return closure$allFloatArgsCount <= 0;
    };
  }
  function MassPower$render$lambda_2(closure$allFloatArgsCount, this$MassPower) {
    return function () {
      return closure$allFloatArgsCount % this$MassPower.verticesBlockSize !== 0;
    };
  }
  function MassPower$render$lambda_3(closure$allFloatArgsCount) {
    return function () {
      return closure$allFloatArgsCount <= 0;
    };
  }
  function MassPower$render$lambda_4(closure$allFloatArgsCount, this$MassPower) {
    return function () {
      return closure$allFloatArgsCount % this$MassPower.verticesBlockSize !== 0;
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
  MassPower.prototype.gameLoop_0 = function (милисекундСоСтараПлюсБездействие) {
    var tmp$;
    var saveInvoke_klfg04$result;
    saveInvoke_klfg04$break: do {
      try {
        var tmp$_0, tmp$_1, tmp$_2;
        this.fps = (this.fps * this.averageConst + 1.0 / (this.time - this.previousTime)) / (this.averageConst + 1 | 0);
        this.previousTime = this.time;
        if (false)
          this.resize_0();
        this.html.canvas2d.clearRect(0.0, 0.0, this.view.gameWidth, this.view.gameHeight);
        this.html.canvas2d.fillStyle = 'white';
        this.html.canvas2d.font = 'bold 24pt Arial';
        if (false)
          this.html.canvas2d.fillText(mem('totalJSHeapSize'), 200.0, 200.0);
        if (false)
          this.html.canvas2d.fillText(mem('usedJSHeapSize'), 200.0, 300.0);
        if (false)
          this.html.canvas2d.fillText(mem('jsHeapSizeLimit'), 200.0, 400.0);
        this.html.canvas2d.fillText('fps: ' + this.fps, 200.0, 500.0);
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
        var imgData2 = new ImgData(BIG_TEXTURE ? 'img/smiley.png' : 'img/smiley_small_rect.png');
        var imgData = new ImgData(BIG_TEXTURE ? 'img/smiley.png' : 'img/smiley_small_rect_green.png');
        var scale = BIG_TEXTURE ? SCALE : 8 * SCALE;
        var $receiver = mutableListOf([new RenderData(500.0, 500.0, scale, imgData)]);
        var size = COUNT;
        var list = ArrayList_init(size);
        var tmp$_3;
        tmp$_3 = size - 1 | 0;
        for (var index = 0; index <= tmp$_3; index++) {
          var tmp$_4 = list.add_11rb$;
          var x = this.time * index;
          var x_0 = 400.0 + Math_0.sin(x) * 300.0;
          var tmp$_5 = this.view.gameHeight / 2.0;
          var x_1 = this.time / 2.5 * index;
          var y = tmp$_5 + Math_0.cos(x_1) * 300.0;
          tmp$_4.call(list, new RenderData(x_0, y, scale, index % 2 === 0 ? imgData2 : imgData));
        }
        $receiver.addAll_brywnq$(list);
        $receiver.add_11rb$(new RenderData(this.mouseX, this.mouseY, scale, imgData));
        var tmp$_6;
        tmp$_6 = $receiver.iterator();
        while (tmp$_6.hasNext()) {
          var element = tmp$_6.next();
          var tmp$_7, tmp$_8, tmp$_9;
          var tmp$_10;
          if ((tmp$_7 = this.imgCache_0.get_11rb$(element.imgData)) != null)
            tmp$_10 = tmp$_7;
          else {
            var $receiver_0 = new ImgCache();
            var $receiver_1 = this.imgCache_0;
            var key = element.imgData;
            $receiver_1.put_xwzc9p$(key, $receiver_0);
            var img = createElement(document, 'img', getKClass(HTMLImageElement));
            img.onload = MassPower$gameLoop$lambda$lambda$lambda$lambda(this, img, $receiver_0);
            img.src = element.imgData.url;
            tmp$_10 = $receiver_0;
          }
          var cache = tmp$_10;
          if ((tmp$_8 = cache.texture) != null) {
            var $receiver_2 = tmp$_8.glTexture;
            var center = new Float32Array([element.x, element.y, 0.0, 0.0, 0.5, 0.5, element.scale, 0.0, 0.0]);
            var max = 16;
            var a = 2 * math.PI * 0 / max;
            var cos = Math_0.cos(a);
            var sin = Math_0.sin(a);
            var DIVIDE = 1.65;
            var glowRadius = 0.75;
            var tmp$_11 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos * tmp$_8.width / 2, sin * tmp$_8.height / 2, cos * 0.5 + 0.5, sin * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos * tmp$_8.width * glowRadius, sin * tmp$_8.height * glowRadius, 0.5 + cos * 0.5, 0.5 + sin * 0.5, element.scale, 0.0, DIVIDE]));
            var f0 = tmp$_11.component1()
            , s0 = tmp$_11.component2();
            var a_0 = 2 * math.PI * 1 / max;
            var cos_0 = Math_0.cos(a_0);
            var sin_0 = Math_0.sin(a_0);
            var DIVIDE_0 = 1.65;
            var glowRadius_0 = 0.75;
            var tmp$_12 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_0 * tmp$_8.width / 2, sin_0 * tmp$_8.height / 2, cos_0 * 0.5 + 0.5, sin_0 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_0 * tmp$_8.width * glowRadius_0, sin_0 * tmp$_8.height * glowRadius_0, 0.5 + cos_0 * 0.5, 0.5 + sin_0 * 0.5, element.scale, 0.0, DIVIDE_0]));
            var f1 = tmp$_12.component1()
            , s1 = tmp$_12.component2();
            var a_1 = 2 * math.PI * 2 / max;
            var cos_1 = Math_0.cos(a_1);
            var sin_1 = Math_0.sin(a_1);
            var DIVIDE_1 = 1.65;
            var glowRadius_1 = 0.75;
            var tmp$_13 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_1 * tmp$_8.width / 2, sin_1 * tmp$_8.height / 2, cos_1 * 0.5 + 0.5, sin_1 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_1 * tmp$_8.width * glowRadius_1, sin_1 * tmp$_8.height * glowRadius_1, 0.5 + cos_1 * 0.5, 0.5 + sin_1 * 0.5, element.scale, 0.0, DIVIDE_1]));
            var f2 = tmp$_13.component1()
            , s2 = tmp$_13.component2();
            var a_2 = 2 * math.PI * 3 / max;
            var cos_2 = Math_0.cos(a_2);
            var sin_2 = Math_0.sin(a_2);
            var DIVIDE_2 = 1.65;
            var glowRadius_2 = 0.75;
            var tmp$_14 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_2 * tmp$_8.width / 2, sin_2 * tmp$_8.height / 2, cos_2 * 0.5 + 0.5, sin_2 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_2 * tmp$_8.width * glowRadius_2, sin_2 * tmp$_8.height * glowRadius_2, 0.5 + cos_2 * 0.5, 0.5 + sin_2 * 0.5, element.scale, 0.0, DIVIDE_2]));
            var f3 = tmp$_14.component1()
            , s3 = tmp$_14.component2();
            var a_3 = 2 * math.PI * 4 / max;
            var cos_3 = Math_0.cos(a_3);
            var sin_3 = Math_0.sin(a_3);
            var DIVIDE_3 = 1.65;
            var glowRadius_3 = 0.75;
            var tmp$_15 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_3 * tmp$_8.width / 2, sin_3 * tmp$_8.height / 2, cos_3 * 0.5 + 0.5, sin_3 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_3 * tmp$_8.width * glowRadius_3, sin_3 * tmp$_8.height * glowRadius_3, 0.5 + cos_3 * 0.5, 0.5 + sin_3 * 0.5, element.scale, 0.0, DIVIDE_3]));
            var f4 = tmp$_15.component1()
            , s4 = tmp$_15.component2();
            var a_4 = 2 * math.PI * 5 / max;
            var cos_4 = Math_0.cos(a_4);
            var sin_4 = Math_0.sin(a_4);
            var DIVIDE_4 = 1.65;
            var glowRadius_4 = 0.75;
            var tmp$_16 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_4 * tmp$_8.width / 2, sin_4 * tmp$_8.height / 2, cos_4 * 0.5 + 0.5, sin_4 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_4 * tmp$_8.width * glowRadius_4, sin_4 * tmp$_8.height * glowRadius_4, 0.5 + cos_4 * 0.5, 0.5 + sin_4 * 0.5, element.scale, 0.0, DIVIDE_4]));
            var f5 = tmp$_16.component1()
            , s5 = tmp$_16.component2();
            var a_5 = 2 * math.PI * 6 / max;
            var cos_5 = Math_0.cos(a_5);
            var sin_5 = Math_0.sin(a_5);
            var DIVIDE_5 = 1.65;
            var glowRadius_5 = 0.75;
            var tmp$_17 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_5 * tmp$_8.width / 2, sin_5 * tmp$_8.height / 2, cos_5 * 0.5 + 0.5, sin_5 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_5 * tmp$_8.width * glowRadius_5, sin_5 * tmp$_8.height * glowRadius_5, 0.5 + cos_5 * 0.5, 0.5 + sin_5 * 0.5, element.scale, 0.0, DIVIDE_5]));
            var f6 = tmp$_17.component1()
            , s6 = tmp$_17.component2();
            var a_6 = 2 * math.PI * 7 / max;
            var cos_6 = Math_0.cos(a_6);
            var sin_6 = Math_0.sin(a_6);
            var DIVIDE_6 = 1.65;
            var glowRadius_6 = 0.75;
            var tmp$_18 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_6 * tmp$_8.width / 2, sin_6 * tmp$_8.height / 2, cos_6 * 0.5 + 0.5, sin_6 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_6 * tmp$_8.width * glowRadius_6, sin_6 * tmp$_8.height * glowRadius_6, 0.5 + cos_6 * 0.5, 0.5 + sin_6 * 0.5, element.scale, 0.0, DIVIDE_6]));
            var f7 = tmp$_18.component1()
            , s7 = tmp$_18.component2();
            var a_7 = 2 * math.PI * 8 / max;
            var cos_7 = Math_0.cos(a_7);
            var sin_7 = Math_0.sin(a_7);
            var DIVIDE_7 = 1.65;
            var glowRadius_7 = 0.75;
            var tmp$_19 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_7 * tmp$_8.width / 2, sin_7 * tmp$_8.height / 2, cos_7 * 0.5 + 0.5, sin_7 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_7 * tmp$_8.width * glowRadius_7, sin_7 * tmp$_8.height * glowRadius_7, 0.5 + cos_7 * 0.5, 0.5 + sin_7 * 0.5, element.scale, 0.0, DIVIDE_7]));
            var f8 = tmp$_19.component1()
            , s8 = tmp$_19.component2();
            var a_8 = 2 * math.PI * 9 / max;
            var cos_8 = Math_0.cos(a_8);
            var sin_8 = Math_0.sin(a_8);
            var DIVIDE_8 = 1.65;
            var glowRadius_8 = 0.75;
            var tmp$_20 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_8 * tmp$_8.width / 2, sin_8 * tmp$_8.height / 2, cos_8 * 0.5 + 0.5, sin_8 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_8 * tmp$_8.width * glowRadius_8, sin_8 * tmp$_8.height * glowRadius_8, 0.5 + cos_8 * 0.5, 0.5 + sin_8 * 0.5, element.scale, 0.0, DIVIDE_8]));
            var f9 = tmp$_20.component1()
            , s9 = tmp$_20.component2();
            var a_9 = 2 * math.PI * 10 / max;
            var cos_9 = Math_0.cos(a_9);
            var sin_9 = Math_0.sin(a_9);
            var DIVIDE_9 = 1.65;
            var glowRadius_9 = 0.75;
            var tmp$_21 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_9 * tmp$_8.width / 2, sin_9 * tmp$_8.height / 2, cos_9 * 0.5 + 0.5, sin_9 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_9 * tmp$_8.width * glowRadius_9, sin_9 * tmp$_8.height * glowRadius_9, 0.5 + cos_9 * 0.5, 0.5 + sin_9 * 0.5, element.scale, 0.0, DIVIDE_9]));
            var f10 = tmp$_21.component1()
            , s10 = tmp$_21.component2();
            var a_10 = 2 * math.PI * 11 / max;
            var cos_10 = Math_0.cos(a_10);
            var sin_10 = Math_0.sin(a_10);
            var DIVIDE_10 = 1.65;
            var glowRadius_10 = 0.75;
            var tmp$_22 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_10 * tmp$_8.width / 2, sin_10 * tmp$_8.height / 2, cos_10 * 0.5 + 0.5, sin_10 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_10 * tmp$_8.width * glowRadius_10, sin_10 * tmp$_8.height * glowRadius_10, 0.5 + cos_10 * 0.5, 0.5 + sin_10 * 0.5, element.scale, 0.0, DIVIDE_10]));
            var f11 = tmp$_22.component1()
            , s11 = tmp$_22.component2();
            var a_11 = 2 * math.PI * 12 / max;
            var cos_11 = Math_0.cos(a_11);
            var sin_11 = Math_0.sin(a_11);
            var DIVIDE_11 = 1.65;
            var glowRadius_11 = 0.75;
            var tmp$_23 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_11 * tmp$_8.width / 2, sin_11 * tmp$_8.height / 2, cos_11 * 0.5 + 0.5, sin_11 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_11 * tmp$_8.width * glowRadius_11, sin_11 * tmp$_8.height * glowRadius_11, 0.5 + cos_11 * 0.5, 0.5 + sin_11 * 0.5, element.scale, 0.0, DIVIDE_11]));
            var f12 = tmp$_23.component1()
            , s12 = tmp$_23.component2();
            var a_12 = 2 * math.PI * 13 / max;
            var cos_12 = Math_0.cos(a_12);
            var sin_12 = Math_0.sin(a_12);
            var DIVIDE_12 = 1.65;
            var glowRadius_12 = 0.75;
            var tmp$_24 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_12 * tmp$_8.width / 2, sin_12 * tmp$_8.height / 2, cos_12 * 0.5 + 0.5, sin_12 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_12 * tmp$_8.width * glowRadius_12, sin_12 * tmp$_8.height * glowRadius_12, 0.5 + cos_12 * 0.5, 0.5 + sin_12 * 0.5, element.scale, 0.0, DIVIDE_12]));
            var f13 = tmp$_24.component1()
            , s13 = tmp$_24.component2();
            var a_13 = 2 * math.PI * 14 / max;
            var cos_13 = Math_0.cos(a_13);
            var sin_13 = Math_0.sin(a_13);
            var DIVIDE_13 = 1.65;
            var glowRadius_13 = 0.75;
            var tmp$_25 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_13 * tmp$_8.width / 2, sin_13 * tmp$_8.height / 2, cos_13 * 0.5 + 0.5, sin_13 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_13 * tmp$_8.width * glowRadius_13, sin_13 * tmp$_8.height * glowRadius_13, 0.5 + cos_13 * 0.5, 0.5 + sin_13 * 0.5, element.scale, 0.0, DIVIDE_13]));
            var f14 = tmp$_25.component1()
            , s14 = tmp$_25.component2();
            var a_14 = 2 * math.PI * 15 / max;
            var cos_14 = Math_0.cos(a_14);
            var sin_14 = Math_0.sin(a_14);
            var DIVIDE_14 = 1.65;
            var glowRadius_14 = 0.75;
            var tmp$_26 = new MassPower$CircleFanStrip(new Float32Array([element.x, element.y, cos_14 * tmp$_8.width / 2, sin_14 * tmp$_8.height / 2, cos_14 * 0.5 + 0.5, sin_14 * 0.5 + 0.5, element.scale, 0.0, 1.0]), new Float32Array([element.x, element.y, cos_14 * tmp$_8.width * glowRadius_14, sin_14 * tmp$_8.height * glowRadius_14, 0.5 + cos_14 * 0.5, 0.5 + sin_14 * 0.5, element.scale, 0.0, DIVIDE_14]));
            var f15 = tmp$_26.component1()
            , s15 = tmp$_26.component2();
            if (package$masspower.DYNAMIC_BLEND)
              this.gl.blendFunc(this.srcFactor, this.dstFactor);
            if (package$masspower.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            var mode = Mode_0.TRIANGLE_FAN;
            var allArgs = Kotlin.primitiveArrayConcat(center, f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f0);
            var tmp$_27;
            var mesh = true ? Kotlin.isType(tmp$_27 = allArgs, Float32Array_0) ? tmp$_27 : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
            var message = 'allFloatArgsCount<=0';
            if (package$masspower.DEBUG_ERROR && MassPower$render$lambda(allArgs.length)())
              package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message + ', conditionFunction: ' + MassPower$render$lambda(allArgs.length)]);
            var message_0 = 'Number of vertices not a multiple of the attribute block size!';
            if (package$masspower.DEBUG_ERROR && MassPower$render$lambda_0(allArgs.length, this)())
              package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message_0 + ', conditionFunction: ' + MassPower$render$lambda_0(allArgs.length, this)]);
            this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
            if (package$masspower.DYNAMIC_TEXTURE)
              this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver_2);
            if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
            this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
            if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
              this.gl.useProgram(null);
            if (package$masspower.DYNAMIC_BLEND)
              this.gl.blendFunc(this.srcFactorGlow, this.dstFactorGlow);
            if (package$masspower.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram2);
            var mode_0 = Mode_0.TRIANGLE_STRIP;
            var allArgs_0 = Kotlin.primitiveArrayConcat(f0, s0, f1, s1, f2, s2, f3, s3, f4, s4, f5, s5, f6, s6, f7, s7, f8, s8, f9, s9, f10, s10, f11, s11, f12, s12, f13, s13, f14, s14, f15, s15, f0, s0);
            var tmp$_28;
            var mesh_0 = true ? Kotlin.isType(tmp$_28 = allArgs_0, Float32Array_0) ? tmp$_28 : throwCCE() : new Float32Array_0(toTypedArray(allArgs_0));
            var message_1 = 'allFloatArgsCount<=0';
            if (package$masspower.DEBUG_ERROR && MassPower$render$lambda(allArgs_0.length)())
              package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message_1 + ', conditionFunction: ' + MassPower$render$lambda(allArgs_0.length)]);
            var message_2 = 'Number of vertices not a multiple of the attribute block size!';
            if (package$masspower.DEBUG_ERROR && MassPower$render$lambda_0(allArgs_0.length, this)())
              package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message_2 + ', conditionFunction: ' + MassPower$render$lambda_0(allArgs_0.length, this)]);
            this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
            if (package$masspower.DYNAMIC_TEXTURE)
              this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver_2);
            if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_0, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
            this.gl.drawArrays(mode_0.glMode, 0, allArgs_0.length / this.verticesBlockSize | 0);
            if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
              this.gl.useProgram(null);
          }
          if (false) {
            if ((tmp$_9 = cache.texture) != null) {
              var $receiver_3 = tmp$_9.glTexture;
              var mode_1 = Mode$TRIANGLE_getInstance();
              var allArgs_1 = new Float32Array([element.x, element.y, tmp$_9.left, tmp$_9.bottom, 0.0, 0.0, element.scale, 0.0, element.x, element.y, tmp$_9.left, tmp$_9.top, 0.0, 1.0, element.scale, 0.0, element.x, element.y, tmp$_9.right, tmp$_9.top, 1.0, 1.0, element.scale, 0.0, element.x, element.y, tmp$_9.right, tmp$_9.top, 1.0, 1.0, element.scale, 0.0, element.x, element.y, tmp$_9.right, tmp$_9.bottom, 1.0, 0.0, element.scale, 0.0, element.x, element.y, tmp$_9.left, tmp$_9.bottom, 0.0, 0.0, element.scale, 0.0]);
              var tmp$_29;
              var mesh_1 = true ? Kotlin.isType(tmp$_29 = allArgs_1, Float32Array_0) ? tmp$_29 : throwCCE() : new Float32Array_0(toTypedArray(allArgs_1));
              var message_3 = 'allFloatArgsCount<=0';
              if (package$masspower.DEBUG_ERROR && MassPower$render$lambda_1(allArgs_1.length)())
                package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message_3 + ', conditionFunction: ' + MassPower$render$lambda_1(allArgs_1.length)]);
              var message_4 = 'Number of vertices not a multiple of the attribute block size!';
              if (package$masspower.DEBUG_ERROR && MassPower$render$lambda_2(allArgs_1.length, this)())
                package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message_4 + ', conditionFunction: ' + MassPower$render$lambda_2(allArgs_1.length, this)]);
              this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
              if (package$masspower.DYNAMIC_TEXTURE)
                this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver_3);
              if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
                this.gl.useProgram(this.shaderProgram);
              this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_1, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
              this.gl.drawArrays(mode_1.glMode, 0, allArgs_1.length / this.verticesBlockSize | 0);
              if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
                this.gl.useProgram(null);
            }
          }
        }
        if (false) {
          if ((tmp$_2 = (tmp$_1 = (tmp$_0 = this.imgCache_0.get_11rb$(imgData)) != null ? tmp$_0.texture : null) != null ? tmp$_1.glTexture : null) != null) {
            var mode_2 = Mode$TRIANGLE_getInstance();
            var allArgs_2 = new Float32Array([123.45]);
            var tmp$_30;
            var mesh_2 = true ? Kotlin.isType(tmp$_30 = allArgs_2, Float32Array_0) ? tmp$_30 : throwCCE() : new Float32Array_0(toTypedArray(allArgs_2));
            var message_5 = 'allFloatArgsCount<=0';
            if (package$masspower.DEBUG_ERROR && MassPower$render$lambda_1(allArgs_2.length)())
              package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message_5 + ', conditionFunction: ' + MassPower$render$lambda_1(allArgs_2.length)]);
            var message_6 = 'Number of vertices not a multiple of the attribute block size!';
            if (package$masspower.DEBUG_ERROR && MassPower$render$lambda_2(allArgs_2.length, this)())
              package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message_6 + ', conditionFunction: ' + MassPower$render$lambda_2(allArgs_2.length, this)]);
            this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
            if (package$masspower.DYNAMIC_TEXTURE)
              this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, tmp$_2);
            if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_2, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
            this.gl.drawArrays(mode_2.glMode, 0, allArgs_2.length / this.verticesBlockSize | 0);
            if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
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
          var tmp$_31;
          tmp$_31 = $receiver_4.iterator();
          while (tmp$_31.hasNext()) {
            var element_0 = tmp$_31.next();
            var tmp$_0_0;
            if ((tmp$_0_0 = element_0.texture) != null) {
              destination.add_11rb$(tmp$_0_0);
            }
          }
          var tmp$_32;
          tmp$_32 = destination.iterator();
          while (tmp$_32.hasNext()) {
            var element_1 = tmp$_32.next();
            var mode_3 = Mode$TRIANGLE_getInstance();
            var glTexture = element_1.glTexture;
            var message_7 = 'allFloatArgsCount<=0';
            if (package$masspower.DEBUG_ERROR && MassPower$render$lambda_3(floatArgscount)())
              package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message_7 + ', conditionFunction: ' + MassPower$render$lambda_3(floatArgscount)]);
            var message_8 = 'Number of vertices not a multiple of the attribute block size!';
            if (package$masspower.DEBUG_ERROR && MassPower$render$lambda_4(floatArgscount, this)())
              package$util.JsUtil.error_yhszz7$(['WebGl error: ' + message_8 + ', conditionFunction: ' + MassPower$render$lambda_4(floatArgscount, this)]);
            this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
            if (package$masspower.DYNAMIC_TEXTURE)
              this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, glTexture);
            if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
              this.gl.useProgram(this.shaderProgram);
            this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_3, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
            this.gl.drawArrays(mode_3.glMode, 0, floatArgscount / this.verticesBlockSize | 0);
            if (package$masspower.OLD && package$masspower.DYNAMIC_SHADER)
              this.gl.useProgram(null);
          }
        }
        window.requestAnimationFrame(getCallableRef('gameLoop', function ($receiver, милисекундСоСтараПлюсБездействие) {
          return $receiver.gameLoop_0(милисекундСоСтараПлюсБездействие), Unit;
        }.bind(null, this)));
        saveInvoke_klfg04$result = Unit;
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          console.log(e.message, e);
          saveInvoke_klfg04$result = null;
          break saveInvoke_klfg04$break;
        }
         else
          throw e;
      }
    }
     while (false);
    (tmp$ = saveInvoke_klfg04$result) != null ? tmp$ : Unit;
  };
  MassPower.prototype.angle_vux9f0$ = defineInlineFunction('game.masspower.MassPower.angle_vux9f0$', wrapFunction(function () {
    var math = Kotlin.kotlin.math;
    return function (i, max) {
      return 2 * math.PI * i / max;
    };
  }));
  function MassPower$CircleFanStrip(fan, strip) {
    this.fan = fan;
    this.strip = strip;
  }
  MassPower$CircleFanStrip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CircleFanStrip',
    interfaces: []
  };
  MassPower$CircleFanStrip.prototype.component1 = function () {
    return this.fan;
  };
  MassPower$CircleFanStrip.prototype.component2 = function () {
    return this.strip;
  };
  MassPower$CircleFanStrip.prototype.copy_7u45pk$ = function (fan, strip) {
    return new MassPower$CircleFanStrip(fan === void 0 ? this.fan : fan, strip === void 0 ? this.strip : strip);
  };
  MassPower$CircleFanStrip.prototype.toString = function () {
    return 'CircleFanStrip(fan=' + Kotlin.toString(this.fan) + (', strip=' + Kotlin.toString(this.strip)) + ')';
  };
  MassPower$CircleFanStrip.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fan) | 0;
    result = result * 31 + Kotlin.hashCode(this.strip) | 0;
    return result;
  };
  MassPower$CircleFanStrip.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fan, other.fan) && Kotlin.equals(this.strip, other.strip)))));
  };
  MassPower.prototype.renderCircle16_f51jg0$ = defineInlineFunction('game.masspower.MassPower.renderCircle16_f51jg0$', wrapFunction(function () {
    var masspower = _.masspower;
    var Mode = _.masspower.Mode;
    var math = Kotlin.kotlin.math;
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    function MassPower$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function MassPower$render$lambda_0(closure$allFloatArgsCount, this$MassPower) {
      return function () {
        return closure$allFloatArgsCount % this$MassPower.verticesBlockSize !== 0;
      };
    }
    var util = _.util;
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
      if (masspower.DYNAMIC_BLEND)
        this.gl.blendFunc(this.srcFactor, this.dstFactor);
      if (masspower.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      var mode = Mode.TRIANGLE_FAN;
      var allArgs = Kotlin.primitiveArrayConcat(center, f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f0);
      var tmp$_15;
      var mesh = true ? Kotlin.isType(tmp$_15 = allArgs, Float32Array_0) ? tmp$_15 : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var message = 'allFloatArgsCount<=0';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda(allArgs.length)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message + ', conditionFunction: ' + MassPower$render$lambda(allArgs.length)]);
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda_0(allArgs.length, this)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message_0 + ', conditionFunction: ' + MassPower$render$lambda_0(allArgs.length, this)]);
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (masspower.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(null);
      if (masspower.DYNAMIC_BLEND)
        this.gl.blendFunc(this.srcFactorGlow, this.dstFactorGlow);
      if (masspower.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram2);
      var mode_0 = Mode.TRIANGLE_STRIP;
      var allArgs_0 = Kotlin.primitiveArrayConcat(f0, s0, f1, s1, f2, s2, f3, s3, f4, s4, f5, s5, f6, s6, f7, s7, f8, s8, f9, s9, f10, s10, f11, s11, f12, s12, f13, s13, f14, s14, f15, s15, f0, s0);
      var tmp$_16;
      var mesh_0 = true ? Kotlin.isType(tmp$_16 = allArgs_0, Float32Array_0) ? tmp$_16 : throwCCE() : new Float32Array_0(toTypedArray(allArgs_0));
      var message_1 = 'allFloatArgsCount<=0';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda(allArgs_0.length)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message_1 + ', conditionFunction: ' + MassPower$render$lambda(allArgs_0.length)]);
      var message_2 = 'Number of vertices not a multiple of the attribute block size!';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda_0(allArgs_0.length, this)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message_2 + ', conditionFunction: ' + MassPower$render$lambda_0(allArgs_0.length, this)]);
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (masspower.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh_0, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode_0.glMode, 0, allArgs_0.length / this.verticesBlockSize | 0);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
  MassPower.prototype.render_2cqo8c$ = defineInlineFunction('game.masspower.MassPower.render_2cqo8c$', wrapFunction(function () {
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    var masspower = _.masspower;
    function MassPower$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function MassPower$render$lambda_0(closure$allFloatArgsCount, this$MassPower) {
      return function () {
        return closure$allFloatArgsCount % this$MassPower.verticesBlockSize !== 0;
      };
    }
    var util = _.util;
    return function ($receiver, mode, allArgs) {
      var tmp$;
      var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var message = 'allFloatArgsCount<=0';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda(allArgs.length)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message + ', conditionFunction: ' + MassPower$render$lambda(allArgs.length)]);
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda_0(allArgs.length, this)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message_0 + ', conditionFunction: ' + MassPower$render$lambda_0(allArgs.length, this)]);
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (masspower.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
  MassPower.prototype.render_gqfpyi$ = defineInlineFunction('game.masspower.MassPower.render_gqfpyi$', wrapFunction(function () {
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    var masspower = _.masspower;
    function MassPower$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function MassPower$render$lambda_0(closure$allFloatArgsCount, this$MassPower) {
      return function () {
        return closure$allFloatArgsCount % this$MassPower.verticesBlockSize !== 0;
      };
    }
    var util = _.util;
    return function ($receiver, mode, allArgs) {
      var tmp$;
      var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var message = 'allFloatArgsCount<=0';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda(allArgs.length)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message + ', conditionFunction: ' + MassPower$render$lambda(allArgs.length)]);
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda_0(allArgs.length, this)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message_0 + ', conditionFunction: ' + MassPower$render$lambda_0(allArgs.length, this)]);
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (masspower.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
  MassPower.prototype.vert_su1nry$ = defineInlineFunction('game.masspower.MassPower.vert_su1nry$', wrapFunction(function () {
    var toList = Kotlin.kotlin.collections.toList_rjqryz$;
    return function ($receiver, args) {
      return $receiver.addAll_brywnq$(toList(args));
    };
  }));
  MassPower.prototype.render_2lkp9q$ = defineInlineFunction('game.masspower.MassPower.render_2lkp9q$', wrapFunction(function () {
    var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var Float32Array_0 = Float32Array;
    var throwCCE = Kotlin.throwCCE;
    var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    var masspower = _.masspower;
    function MassPower$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function MassPower$render$lambda_0(closure$allFloatArgsCount, this$MassPower) {
      return function () {
        return closure$allFloatArgsCount % this$MassPower.verticesBlockSize !== 0;
      };
    }
    var util = _.util;
    return function ($receiver, mode, lambda) {
      this.render_gqfpyi$;
      var $receiver_0 = ArrayList_init();
      lambda($receiver_0);
      var allArgs = toFloatArray($receiver_0);
      var tmp$;
      var mesh = true ? Kotlin.isType(tmp$ = allArgs, Float32Array_0) ? tmp$ : throwCCE() : new Float32Array_0(toTypedArray(allArgs));
      var message = 'allFloatArgsCount<=0';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda(allArgs.length)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message + ', conditionFunction: ' + MassPower$render$lambda(allArgs.length)]);
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda_0(allArgs.length, this)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message_0 + ', conditionFunction: ' + MassPower$render$lambda_0(allArgs.length, this)]);
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (masspower.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, $receiver);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allArgs.length / this.verticesBlockSize | 0);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
  MassPower.prototype.render_5h25re$ = defineInlineFunction('game.masspower.MassPower.render_5h25re$', wrapFunction(function () {
    var WebGLRenderingContext$Companion = WebGLRenderingContext;
    var masspower = _.masspower;
    function MassPower$render$lambda(closure$allFloatArgsCount) {
      return function () {
        return closure$allFloatArgsCount <= 0;
      };
    }
    function MassPower$render$lambda_0(closure$allFloatArgsCount, this$MassPower) {
      return function () {
        return closure$allFloatArgsCount % this$MassPower.verticesBlockSize !== 0;
      };
    }
    var util = _.util;
    return function (mode, mesh, glTexture, allFloatArgsCount) {
      var message = 'allFloatArgsCount<=0';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda(allFloatArgsCount)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message + ', conditionFunction: ' + MassPower$render$lambda(allFloatArgsCount)]);
      var message_0 = 'Number of vertices not a multiple of the attribute block size!';
      if (masspower.DEBUG_ERROR && MassPower$render$lambda_0(allFloatArgsCount, this)())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message_0 + ', conditionFunction: ' + MassPower$render$lambda_0(allFloatArgsCount, this)]);
      this.gl.activeTexture(WebGLRenderingContext$Companion.TEXTURE0);
      if (masspower.DYNAMIC_TEXTURE)
        this.gl.bindTexture(WebGLRenderingContext$Companion.TEXTURE_2D, glTexture);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(this.shaderProgram);
      this.gl.bufferData(WebGLRenderingContext$Companion.ARRAY_BUFFER, mesh, WebGLRenderingContext$Companion.DYNAMIC_DRAW);
      this.gl.drawArrays(mode.glMode, 0, allFloatArgsCount / this.verticesBlockSize | 0);
      if (masspower.OLD && masspower.DYNAMIC_SHADER)
        this.gl.useProgram(null);
    };
  }));
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
      var tmp$;
      this$MassPower.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, (tmp$ = this$MassPower.gl.createBuffer()) != null ? tmp$ : JsUtil_getInstance().error_yhszz7$(['Unable to create webgl buffer!']));
      this$MassPower.gl.useProgram(this$MassPower.shaderProgram);
      var $receiver = this$MassPower.attributes;
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var this$MassPower_0 = this$MassPower;
        this$MassPower_0.gl.enableVertexAttribArray(element.location);
        this$MassPower_0.gl.vertexAttribPointer(element.location, element.attr.numElements, WebGLRenderingContext.FLOAT, false, this$MassPower_0.verticesBlockSize * 4 | 0, element.offset * 4 | 0);
        if (false)
          this$MassPower_0.gl.disableVertexAttribArray(element.location);
      }
      if (false)
        this$MassPower.gl.uniform1i(this$MassPower.gl.getUniformLocation(this$MassPower.shaderProgram, 'u_sampler'), 0);
      this$MassPower.gl.uniformMatrix4fv(this$MassPower.gl.getUniformLocation(this$MassPower.shaderProgram, 'u_projectionView'), false, (new TextureData_0(this$MassPower.view.projectionMatrix)).vMatrix.toFloat32Arr());
      this$MassPower.gl.uniform1i(this$MassPower.gl.getUniformLocation(this$MassPower.shaderProgram, 'u_test_array_size'), 5);
      this$MassPower.gl.uniform1fv(this$MassPower.gl.getUniformLocation(this$MassPower.shaderProgram, 'u_arr[0]'), [0.1, 0.1]);
      if (DYNAMIC_SHADER) {
        this$MassPower.gl.useProgram(this$MassPower.shaderProgram2);
        var $receiver_0 = this$MassPower.attributes;
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          var this$MassPower_1 = this$MassPower;
          this$MassPower_1.gl.enableVertexAttribArray(element_0.location);
          this$MassPower_1.gl.vertexAttribPointer(element_0.location, element_0.attr.numElements, WebGLRenderingContext.FLOAT, false, this$MassPower_1.verticesBlockSize * 4 | 0, element_0.offset * 4 | 0);
          if (false)
            this$MassPower_1.gl.disableVertexAttribArray(element_0.location);
        }
        if (false)
          this$MassPower.gl.uniform1i(this$MassPower.gl.getUniformLocation(this$MassPower.shaderProgram2, 'u_sampler'), 0);
        this$MassPower.gl.uniformMatrix4fv(this$MassPower.gl.getUniformLocation(this$MassPower.shaderProgram2, 'u_projectionView'), false, (new TextureData_0(this$MassPower.view.projectionMatrix)).vMatrix.toFloat32Arr());
        this$MassPower.gl.uniform1i(this$MassPower.gl.getUniformLocation(this$MassPower.shaderProgram2, 'u_test_array_size'), 5);
        this$MassPower.gl.uniform1fv(this$MassPower.gl.getUniformLocation(this$MassPower.shaderProgram2, 'u_arr[0]'), [0.1, 0.1]);
      }
      this$MassPower.gl.enable(WebGLRenderingContext.BLEND);
      if (!DYNAMIC_BLEND)
        this$MassPower.gl.blendFunc(this$MassPower.srcFactor, this$MassPower.dstFactor);
      this$MassPower.gameLoop_0(it);
      return Unit;
    };
  }
  function MassPower_init$lambda$screenToGameCoordX($receiver, screenX) {
    return (screenX - $receiver.borderLeft) * $receiver.gameWidth / $receiver.windowWidth;
  }
  function MassPower_init$lambda$screenToGameCoordY($receiver, screenY) {
    return $receiver.gameHeight - (screenY - $receiver.borderTop) * $receiver.gameHeight / $receiver.windowHeight;
  }
  function MassPower_init$lambda_2(this$MassPower) {
    return function (event) {
      if (Kotlin.isType(event, MouseEvent)) {
        var screenToGameCoordX = MassPower_init$lambda$screenToGameCoordX;
        var screenToGameCoordY = MassPower_init$lambda$screenToGameCoordY;
        this$MassPower.mouseX = screenToGameCoordX(this$MassPower.view, getX(event, this$MassPower.html.container));
        this$MassPower.mouseY = screenToGameCoordY(this$MassPower.view, getY(event, this$MassPower.html.container));
      }
    };
  }
  function MassPower_init$lambda_3(this$MassPower) {
    return function (event) {
      var tmp$;
      if (Kotlin.isType(event, KeyboardEvent)) {
        var code = event.keyCode;
        var key = MassPower$Key$Companion_getInstance().getByCode_za3lpa$(code);
        if (equals(key, MassPower$Key$Q_getInstance()) || equals(key, MassPower$Key$W_getInstance()) || equals(key, MassPower$Key$E_getInstance()) || equals(key, MassPower$Key$R_getInstance()))
          this$MassPower.modeKey_0 = key;
        else if ((key != null ? key.number : null) === true) {
          var result = listOf([WebGLRenderingContext.SRC_COLOR, WebGLRenderingContext.ONE_MINUS_SRC_COLOR, WebGLRenderingContext.DST_COLOR, WebGLRenderingContext.ONE_MINUS_DST_COLOR, WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA, WebGLRenderingContext.DST_ALPHA, WebGLRenderingContext.ONE_MINUS_DST_ALPHA, WebGLRenderingContext.SRC_ALPHA_SATURATE]).get_za3lpa$(key.numValue - 1 | 0);
          tmp$ = this$MassPower.modeKey_0;
          if (equals(tmp$, MassPower$Key$Q_getInstance()))
            this$MassPower.srcFactor = result;
          else if (equals(tmp$, MassPower$Key$W_getInstance()))
            this$MassPower.dstFactor = result;
          else if (equals(tmp$, MassPower$Key$E_getInstance()))
            this$MassPower.srcFactorGlow = result;
          else if (equals(tmp$, MassPower$Key$R_getInstance()))
            this$MassPower.dstFactorGlow = result;
        }
      }
    };
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
  var debugError = defineInlineFunction('game.masspower.debugError_uq85nf$', wrapFunction(function () {
    var masspower = _.masspower;
    var util = _.util;
    return function (message, condition) {
      if (masspower.DEBUG_ERROR && condition())
        util.JsUtil.error_yhszz7$(['WebGl error: ' + message + ', conditionFunction: ' + condition]);
    };
  }));
  function mem(v) {
    return v + ' ' + performance.memory[v] / 1024 / 1024;
  }
  var FULLSCREEN_VERTICES;
  function toVertives($receiver) {
    var result = new Float32Array($receiver.length);
    result.set($receiver, 0);
    return result;
  }
  function JsUtil() {
    JsUtil_instance = this;
  }
  JsUtil.prototype.urlGet_61zpoe$ = function (url) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);
    return req.responseText;
  };
  JsUtil.prototype.saveInvoke_o14v8n$ = defineInlineFunction('game.util.JsUtil.saveInvoke_o14v8n$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Exception = Kotlin.kotlin.Exception;
    return function (lambda) {
      var tmp$;
      var saveInvoke_klfg04$result;
      saveInvoke_klfg04$break: do {
        try {
          saveInvoke_klfg04$result = lambda();
        }
         catch (e) {
          if (Kotlin.isType(e, Exception)) {
            console.log(e.message, e);
            saveInvoke_klfg04$result = null;
            break saveInvoke_klfg04$break;
          }
           else
            throw e;
        }
      }
       while (false);
      return (tmp$ = saveInvoke_klfg04$result) != null ? tmp$ : Unit;
    };
  }));
  JsUtil.prototype.saveInvoke_klfg04$ = defineInlineFunction('game.util.JsUtil.saveInvoke_klfg04$', wrapFunction(function () {
    var Exception = Kotlin.kotlin.Exception;
    return function (lambda) {
      try {
        return lambda();
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          console.log(e.message, e);
          return null;
        }
         else
          throw e;
      }
    };
  }));
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException;
  JsUtil.prototype.error_yhszz7$ = function (args) {
    var tmp$;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== args.length; ++tmp$_0) {
      var element = args[tmp$_0];
      console.log(element);
    }
    if (args.length > 0) {
      throw new IllegalStateException_init(((tmp$ = args[0]) != null ? tmp$ : 'Unknown error').toString());
    }
     else {
      throw new IllegalStateException_init('Unknown error'.toString());
    }
  };
  JsUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsUtil',
    interfaces: []
  };
  var JsUtil_instance = null;
  function JsUtil_getInstance() {
    if (JsUtil_instance === null) {
      new JsUtil();
    }
    return JsUtil_instance;
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
  function min($receiver, other) {
    return Math_0.min($receiver, other);
  }
  function max($receiver, other) {
    return Math_0.max($receiver, other);
  }
  function min_0($receiver, other) {
    return Math_0.min($receiver, other);
  }
  function max_0($receiver, other) {
    return Math_0.max($receiver, other);
  }
  _.date = date;
  var package$domain = _.domain || (_.domain = {});
  package$domain.breakpoint_pdl1vj$ = breakpoint;
  package$domain.ExecuteMe = ExecuteMe;
  package$domain.Log = Log;
  package$domain.info_gecnkn$ = info;
  package$domain.error_gecnkn$ = error;
  package$domain.rnd_vux9f0$ = rnd;
  package$domain.rnd_dqglrj$ = rnd_0;
  package$domain.get_rnd_s8ev3n$ = get_rnd;
  $$importsForInline$$.game = _;
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
  Object.defineProperty(package$masspower, 'OLD', {
    get: function () {
      return OLD;
    }
  });
  Object.defineProperty(package$masspower, 'DYNAMIC_SHADER', {
    get: function () {
      return DYNAMIC_SHADER;
    }
  });
  Object.defineProperty(package$masspower, 'DYNAMIC_TEXTURE', {
    get: function () {
      return DYNAMIC_TEXTURE;
    }
  });
  Object.defineProperty(package$masspower, 'DEBUG_ERROR', {
    get: function () {
      return DEBUG_ERROR;
    }
  });
  Object.defineProperty(package$masspower, 'BIG_TEXTURE', {
    get: function () {
      return BIG_TEXTURE;
    }
  });
  Object.defineProperty(package$masspower, 'DYNAMIC_BLEND', {
    get: function () {
      return DYNAMIC_BLEND;
    }
  });
  Object.defineProperty(package$masspower, 'COUNT', {
    get: function () {
      return COUNT;
    }
  });
  Object.defineProperty(package$masspower, 'SCALE', {
    get: function () {
      return SCALE;
    }
  });
  package$masspower.TextureData = TextureData_0;
  package$masspower.ImgData = ImgData;
  package$masspower.ImgCache = ImgCache;
  package$masspower.RenderData = RenderData;
  package$masspower.View = View;
  package$masspower.FixedWidth = FixedWidth;
  package$masspower.Attr = Attr;
  package$masspower.IterAttr = IterAttr;
  Object.defineProperty(MassPower$Key, 'Q', {
    get: MassPower$Key$Q_getInstance
  });
  Object.defineProperty(MassPower$Key, 'W', {
    get: MassPower$Key$W_getInstance
  });
  Object.defineProperty(MassPower$Key, 'E', {
    get: MassPower$Key$E_getInstance
  });
  Object.defineProperty(MassPower$Key, 'R', {
    get: MassPower$Key$R_getInstance
  });
  Object.defineProperty(MassPower$Key, 'T', {
    get: MassPower$Key$T_getInstance
  });
  Object.defineProperty(MassPower$Key, 'Y', {
    get: MassPower$Key$Y_getInstance
  });
  Object.defineProperty(MassPower$Key, 'ZERO', {
    get: MassPower$Key$ZERO_getInstance
  });
  Object.defineProperty(MassPower$Key, 'ONE', {
    get: MassPower$Key$ONE_getInstance
  });
  Object.defineProperty(MassPower$Key, 'TWO', {
    get: MassPower$Key$TWO_getInstance
  });
  Object.defineProperty(MassPower$Key, 'THREE', {
    get: MassPower$Key$THREE_getInstance
  });
  Object.defineProperty(MassPower$Key, 'FOUR', {
    get: MassPower$Key$FOUR_getInstance
  });
  Object.defineProperty(MassPower$Key, 'FIVE', {
    get: MassPower$Key$FIVE_getInstance
  });
  Object.defineProperty(MassPower$Key, 'SIX', {
    get: MassPower$Key$SIX_getInstance
  });
  Object.defineProperty(MassPower$Key, 'SEVEN', {
    get: MassPower$Key$SEVEN_getInstance
  });
  Object.defineProperty(MassPower$Key, 'EIGHT', {
    get: MassPower$Key$EIGHT_getInstance
  });
  Object.defineProperty(MassPower$Key, 'NINE', {
    get: MassPower$Key$NINE_getInstance
  });
  Object.defineProperty(MassPower$Key, 'Companion', {
    get: MassPower$Key$Companion_getInstance
  });
  MassPower.Key = MassPower$Key;
  MassPower.GameTexture = MassPower$GameTexture;
  MassPower.CircleFanStrip = MassPower$CircleFanStrip;
  package$masspower.Mode = Mode_0;
  package$masspower.debugError_uq85nf$ = debugError;
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
  var package$util = _.util || (_.util = {});
  package$masspower.mem_61zpoe$ = mem;
  Object.defineProperty(package$util, 'FULLSCREEN_VERTICES', {
    get: function () {
      return FULLSCREEN_VERTICES;
    }
  });
  package$util.toVertives_wafl1s$ = toVertives;
  Object.defineProperty(package$util, 'JsUtil', {
    get: JsUtil_getInstance
  });
  package$util.callApply_238ayt$ = callApply;
  package$util.getX_vryqu5$ = getX;
  package$util.getY_vryqu5$ = getY;
  package$util.createElement_ekre97$ = createElement;
  package$util.createCanvas_faw09z$ = createCanvas;
  package$util.min_yni7l$ = min;
  package$util.max_yni7l$ = max;
  package$util.min_cfdwmc$ = min_0;
  package$util.max_cfdwmc$ = max_0;
  testFirst$lambda$A_15.prototype.isEmpty = ClosedRange.prototype.isEmpty;
  Button.prototype.setFocus_6taknv$ = Focusable.prototype.setFocus_6taknv$;
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
  OLD = false;
  DYNAMIC_SHADER = false;
  DYNAMIC_TEXTURE = true;
  DEBUG_ERROR = false;
  BIG_TEXTURE = false;
  DYNAMIC_BLEND = true;
  COUNT = 100;
  SCALE = 0.1;
  FULLSCREEN_VERTICES = toVertives([-1.0, -1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0]);
  main([]);
  Kotlin.defineModule('game', _);
  return _;
}(typeof game === 'undefined' ? {} : game, kotlin);

//# sourceMappingURL=game.js.map
