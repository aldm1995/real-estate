webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var listingsData = [{
	address: '50-68 grand ave',
	city: 'San Francisco',
	state: 'CA',
	rooms: '2',
	price: 920000,
	floorspace: 2000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'
}, {
	address: '50-68 grand ave',
	city: 'little',
	state: 'KS',
	rooms: '3',
	price: 220000,
	floorspace: 3000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg'
}, {
	address: '50-68 grand ave',
	city: 'Reno',
	state: 'NV',
	rooms: '4',
	price: 620000,
	floorspace: 4000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg'
}, {
	address: '50-68 grand ave',
	city: 'Houston',
	state: 'TX',
	rooms: '5',
	price: 320000,
	floorspace: 5000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://bagsjar.com/wp-content/uploads/2017/07/apartments-for-rent-galleria-houston-tx-images-home-design-contemporary-under-apartments-for-rent-galleria-houston-tx-design-tips.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe',
      listingsData: _listingsData2.default
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      console.log(this.state);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, null),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.listingsData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
	_inherits(Filter, _Component);

	function Filter() {
		_classCallCheck(this, Filter);

		var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

		_this.state = {
			name: 'Joe'
		};
		return _this;
	}

	_createClass(Filter, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ id: 'filter' },
				_react2.default.createElement(
					'div',
					{ className: 'inside' },
					_react2.default.createElement(
						'h4',
						null,
						'Filter'
					),
					_react2.default.createElement(
						'select',
						{ name: 'neighbourhood', className: 'filters neighbourhood' },
						_react2.default.createElement(
							'option',
							null,
							'Sab Leandro'
						)
					),
					_react2.default.createElement(
						'select',
						{ name: 'housetype', className: 'filters housetype' },
						_react2.default.createElement(
							'option',
							null,
							'Ranch'
						)
					),
					_react2.default.createElement(
						'select',
						{ name: 'bedrooms', className: 'filters bedrooms' },
						_react2.default.createElement(
							'option',
							null,
							'2 BR'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'filters price' },
						_react2.default.createElement(
							'span',
							{ className: 'title' },
							'Price'
						),
						_react2.default.createElement('input', { type: 'text', name: 'min-price', className: 'min-price' }),
						_react2.default.createElement('input', { type: 'text', name: 'min-price', className: 'max-price' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'filters floor-space' },
						_react2.default.createElement(
							'span',
							{ className: 'title' },
							'Floor Space'
						),
						_react2.default.createElement('input', { type: 'text', name: 'min-floor-space', className: 'min-floor-space' }),
						_react2.default.createElement('input', { type: 'text', name: 'min-floor-space', className: 'max-floor-space' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'filters extras' },
						_react2.default.createElement(
							'span',
							{ className: 'title' },
							'Extras'
						),
						_react2.default.createElement(
							'label',
							{ 'for': 'extras' },
							_react2.default.createElement(
								'span',
								null,
								'Elevators'
							),
							_react2.default.createElement('input', { name: 'extras', value: 'elevator', type: 'checkbox' })
						),
						_react2.default.createElement(
							'label',
							{ 'for': 'extras' },
							_react2.default.createElement(
								'span',
								null,
								'Swimming Pool'
							),
							_react2.default.createElement('input', { name: 'extras', value: 'swimming-pool', type: 'checkbox' })
						),
						_react2.default.createElement(
							'label',
							{ 'for': 'extras' },
							_react2.default.createElement(
								'span',
								null,
								'Finished Basement'
							),
							_react2.default.createElement('input', { name: 'extras', value: 'finished basement', type: 'checkbox' })
						),
						_react2.default.createElement(
							'label',
							{ 'for': 'extras' },
							_react2.default.createElement(
								'span',
								null,
								'Gym'
							),
							_react2.default.createElement('input', { name: 'extras', value: 'gym', type: 'checkbox' })
						)
					)
				)
			);
		}
	}]);

	return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
		_inherits(Header, _Component);

		function Header() {
				_classCallCheck(this, Header);

				var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

				_this.state = {
						name: 'Joe'
				};
				return _this;
		}

		_createClass(Header, [{
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								'header',
								null,
								_react2.default.createElement(
										'div',
										{ className: 'logo' },
										' Logo'
								),
								_react2.default.createElement(
										'nav',
										null,
										_react2.default.createElement(
												'a',
												{ href: '#' },
												'Create Ads'
										),
										_react2.default.createElement(
												'a',
												{ href: '#' },
												'About Us'
										),
										_react2.default.createElement(
												'a',
												{ href: '#' },
												'Log in'
										),
										_react2.default.createElement(
												'a',
												{ href: '#', className: 'register-btn' },
												'Register'
										)
								)
						);
				}
		}]);

		return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

		_this.state = {
			name: 'Joe'
		};
		_this.loopListings = _this.loopListings.bind(_this);
		return _this;
	}

	_createClass(Header, [{
		key: 'loopListings',
		value: function loopListings() {
			var listingsData = this.props.listingsData;


			return listingsData.map(function (listing, index) {
				return _react2.default.createElement(
					'div',
					{ className: 'col-md-3', key: index },
					_react2.default.createElement(
						'div',
						{ className: 'listing' },
						_react2.default.createElement(
							'div',
							{ className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
							_react2.default.createElement(
								'span',
								{ className: 'Address' },
								listing.address
							),
							_react2.default.createElement(
								'div',
								{ className: 'details' },
								_react2.default.createElement(
									'div',
									{ className: 'col-md-3' },
									_react2.default.createElement(
										'div',
										{ className: 'user-img' },
										' '
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-md-9' },
									_react2.default.createElement(
										'div',
										{ className: 'user-details' },
										_react2.default.createElement(
											'span',
											{ className: 'user-name' },
											'Andrew Mukhtar'
										),
										_react2.default.createElement(
											'span',
											{ className: 'post-date' },
											'05/05/2018'
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'listing-details' },
										_react2.default.createElement(
											'div',
											{ className: 'floor-space' },
											_react2.default.createElement('i', { className: 'far fa-square' }),
											_react2.default.createElement(
												'span',
												null,
												'1000 ft\xB2'
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'bedrooms' },
											_react2.default.createElement('i', { className: 'fas fa-bed' }),
											_react2.default.createElement(
												'span',
												null,
												listing.bedrooms,
												' bedrooms'
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'view-btn' },
										'View Listing'
									)
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'bottom-info' },
							_react2.default.createElement(
								'span',
								{ className: 'price' },
								'$',
								listing.price
							),
							_react2.default.createElement(
								'span',
								{ className: 'location' },
								_react2.default.createElement('i', { className: 'fas fa-map-marker' }),
								' ',
								listing.city,
								', ',
								listing.state,
								' '
							)
						)
					)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ id: 'listings' },
				_react2.default.createElement(
					'section',
					{ className: 'search-area' },
					_react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search Here' })
				),
				_react2.default.createElement(
					'section',
					{ className: 'sortby-area' },
					_react2.default.createElement(
						'div',
						{ className: 'results' },
						'390 results found'
					),
					_react2.default.createElement(
						'div',
						{ className: 'sort-options' },
						_react2.default.createElement(
							'select',
							{ name: 'sortby', className: 'sortby' },
							_react2.default.createElement(
								'option',
								{ value: 'price-asc' },
								'Highest Price'
							),
							_react2.default.createElement(
								'option',
								{ value: 'price-dsc' },
								'Lowest Price'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'view' },
							_react2.default.createElement('i', { className: 'fas fa-th-list' }),
							_react2.default.createElement('i', { className: 'fas fa-th' })
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'listings-results' },
					this.loopListings()
				),
				_react2.default.createElement(
					'section',
					{ id: 'pagination' },
					_react2.default.createElement(
						'ul',
						{ className: 'pages' },
						_react2.default.createElement(
							'li',
							null,
							'Prev'
						),
						_react2.default.createElement(
							'li',
							{ className: 'active' },
							'1'
						),
						_react2.default.createElement(
							'li',
							null,
							'2'
						),
						_react2.default.createElement(
							'li',
							null,
							'3'
						),
						_react2.default.createElement(
							'li',
							null,
							'4'
						),
						_react2.default.createElement(
							'li',
							null,
							'5'
						),
						_react2.default.createElement(
							'li',
							null,
							'Next'
						)
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[102]);