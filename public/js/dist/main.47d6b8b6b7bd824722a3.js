/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/components/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/components/App.js":
/*!*******************************!*\
  !*** ./lib/components/App.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// Generated by KofuScript 0.0.3-alpha.7\nvar present = console.log; // Generated by KofuScript 0.0.3-alpha.7\n\nvar Item, ItemView, List, list_view, ListView;\nItem = __webpack_require__(/*! ./models/Item */ \"./lib/components/models/Item.js\");\nList = __webpack_require__(/*! ./collections/List */ \"./lib/components/collections/List.js\");\nItemView = __webpack_require__(/*! ./views/ItemView */ \"./lib/components/views/ItemView.js\");\n\nListView = function (super$) {\n  extends$(ListView, super$);\n\n  function ListView() {\n    super$.apply(this, arguments);\n  }\n\n  0;\n  0;\n  ListView.prototype.el = $('#app');\n\n  ListView.prototype.initialize = function () {\n    _.bindAll(this);\n\n    this.collection = new List();\n    this.collection.bind('add', this.appendItem);\n    this.counter = 0;\n    return this.render();\n  };\n\n  ListView.prototype.render = function () {\n    this.el.addClass('container');\n    this.el.append('<button id=\"trigger\">Add List Item</button>');\n    return this.el.append('<h1 class=\"title\">KofuScript With Backbone</h1><ul id=\"list\"></ul>');\n  };\n\n  ListView.prototype.addItem = function () {\n    var item;\n    this.counter++;\n    item = new Item();\n    item.set({\n      part2: '' + item.get('part2') + ' ' + this.counter\n    });\n    return this.collection.add(item);\n  };\n\n  ListView.prototype.appendItem = function (item) {\n    var item_view;\n    item_view = new ItemView({\n      model: item\n    });\n    return $('#list').append(item_view.render().el);\n  };\n\n  ListView.prototype.events = {\n    'click #trigger': 'addItem'\n  };\n  return ListView;\n}(Backbone.View);\n\nBackbone.sync = function (method, model, success, error) {\n  return success();\n};\n\nlist_view = new ListView();\n\nfunction isOwn$(o, p) {\n  return {}.hasOwnProperty.call(o, p);\n}\n\nfunction extends$(child, parent) {\n  for (var key in parent) if (isOwn$(parent, key)) child[key] = parent[key];\n\n  function ctor() {\n    this.constructor = child;\n  }\n\n  ctor.prototype = parent.prototype;\n  child.prototype = new ctor();\n  child.__super__ = parent.prototype;\n  return child;\n}\n\n//# sourceURL=webpack:///./lib/components/App.js?");

/***/ }),

/***/ "./lib/components/collections/List.js":
/*!********************************************!*\
  !*** ./lib/components/collections/List.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// Generated by KofuScript 0.0.3-alpha.7\nvar present = console.log; // Generated by KofuScript 0.0.3-alpha.7\n\nvar Item, List;\nItem = __webpack_require__(/*! ../models/Item */ \"./lib/components/models/Item.js\");\n\nList = function (super$) {\n  extends$(List, super$);\n\n  function List() {\n    super$.apply(this, arguments);\n  }\n\n  List.prototype.model = Item;\n  return List;\n}(Backbone.Collection);\n\nmodule.exports = List;\n\nfunction isOwn$(o, p) {\n  return {}.hasOwnProperty.call(o, p);\n}\n\nfunction extends$(child, parent) {\n  for (var key in parent) if (isOwn$(parent, key)) child[key] = parent[key];\n\n  function ctor() {\n    this.constructor = child;\n  }\n\n  ctor.prototype = parent.prototype;\n  child.prototype = new ctor();\n  child.__super__ = parent.prototype;\n  return child;\n}\n\n//# sourceURL=webpack:///./lib/components/collections/List.js?");

/***/ }),

/***/ "./lib/components/models/Item.js":
/*!***************************************!*\
  !*** ./lib/components/models/Item.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// Generated by KofuScript 0.0.3-alpha.7\nvar present = console.log; // Generated by KofuScript 0.0.3-alpha.7\n\nvar Item;\n\nItem = function (super$) {\n  extends$(Item, super$);\n\n  function Item() {\n    super$.apply(this, arguments);\n  }\n\n  Item.prototype.defaults = {\n    part1: 'Hello',\n    part2: 'Kofu With Backbone'\n  };\n  return Item;\n}(Backbone.Model);\n\nmodule.exports = Item;\n\nfunction isOwn$(o, p) {\n  return {}.hasOwnProperty.call(o, p);\n}\n\nfunction extends$(child, parent) {\n  for (var key in parent) if (isOwn$(parent, key)) child[key] = parent[key];\n\n  function ctor() {\n    this.constructor = child;\n  }\n\n  ctor.prototype = parent.prototype;\n  child.prototype = new ctor();\n  child.__super__ = parent.prototype;\n  return child;\n}\n\n//# sourceURL=webpack:///./lib/components/models/Item.js?");

/***/ }),

/***/ "./lib/components/views/ItemView.js":
/*!******************************************!*\
  !*** ./lib/components/views/ItemView.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// Generated by KofuScript 0.0.3-alpha.7\nvar present = console.log; // Generated by KofuScript 0.0.3-alpha.7\n\nvar ItemView;\n\nItemView = function (super$) {\n  extends$(ItemView, super$);\n\n  function ItemView() {\n    var instance$;\n    instance$ = this;\n\n    this.unrender = function () {\n      return ItemView.prototype.unrender.apply(instance$, arguments);\n    };\n\n    this.render = function () {\n      return ItemView.prototype.render.apply(instance$, arguments);\n    };\n\n    super$.apply(this, arguments);\n  }\n\n  ItemView.prototype.tagName = 'li';\n\n  ItemView.prototype.initialize = function () {\n    _.bindAll(this);\n\n    this.model.bind('change', this.render);\n    return this.model.bind('remove', this.unrender);\n  };\n\n  ItemView.prototype.render = function () {\n    $(this.el).html('<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>\\n<span class=\"swap\">swap</span>\\n<button class=\"delete\">delete</button>');\n    return this;\n  };\n\n  ItemView.prototype.unrender = function () {\n    return $(this.el).remove();\n  };\n\n  ItemView.prototype.swap = function () {\n    return this.model.set({\n      part1: this.model.get('part2'),\n      part2: this.model.get('part1')\n    });\n  };\n\n  ItemView.prototype.remove = function () {\n    return this.model.destroy();\n  };\n\n  ItemView.prototype.events = {\n    'click .swap': 'swap',\n    'click .delete': 'remove'\n  };\n  return ItemView;\n}(Backbone.View);\n\nmodule.exports = ItemView;\n\nfunction isOwn$(o, p) {\n  return {}.hasOwnProperty.call(o, p);\n}\n\nfunction extends$(child, parent) {\n  for (var key in parent) if (isOwn$(parent, key)) child[key] = parent[key];\n\n  function ctor() {\n    this.constructor = child;\n  }\n\n  ctor.prototype = parent.prototype;\n  child.prototype = new ctor();\n  child.__super__ = parent.prototype;\n  return child;\n}\n\n//# sourceURL=webpack:///./lib/components/views/ItemView.js?");

/***/ })

/******/ });