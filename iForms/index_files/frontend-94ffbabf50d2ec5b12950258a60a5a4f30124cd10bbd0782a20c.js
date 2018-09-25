(function () {

  "use strict"

  window.GOVUK = window.GOVUK || {};

  window.GOVUK.Transactions = {
    trackStartPageTabs : function (e) {
      var pagePath = e.target.href;
      GOVUK.analytics.trackEvent('startpages', 'tab', {label: pagePath, nonInteraction: true});
    }
  };

})();

$(document).ready(function () {

  var $container = $('section.more');

  if ($container.find('.js-tabs').length) {
    $container.tabs({
      scrollOnload: true
    });
  }

  $('form#completed-transaction-form').
    append('<input type="hidden" name="service_feedback[javascript_enabled]" value="true"/>').
    append($('<input type="hidden" name="referrer">').val(document.referrer || "unknown"));

  $('#completed-transaction-form button.button').click(function() {
    $(this).attr('disabled', 'disabled');
    $(this).parents('form').submit();
  });

  $('.transaction .nav-tabs a').click(window.GOVUK.Transactions.trackStartPageTabs);

});
jQuery(function($) {
    var $yt_links = $("figure a[href*='https://www.youtube.com/watch']");

    // Create players for our youtube links
    $.each($yt_links, function(i) {
        var $holder = $('<span />');
        $(this).parent().replaceWith($holder);
        // Find the captions file if it exists
        var $mycaptions = $(this).siblings('.captions');
        // Work out if we have captions or not
        var captionsf = $($mycaptions).length > 0 ? $($mycaptions).attr('href') : null;
        // Ensure that we extract the last part of the youtube link (the video id)
        // and pass it to the player() method
        var link = $(this).attr('href').split("=")[1];
        // make sure we fetch the right SSL level
        var youTubeURL = (document.location.protocol + '//www.youtube.com/apiplayer?enablejsapi=1&version=3&playerapiid=');
        // Initialise the player
        $holder.player({
            id:'yt'+i,
            media:link,
            captions:captionsf,
            url: youTubeURL,
            flashHeight: '350px'
        });
    });
});
if(typeof window.GOVUK === 'undefined'){ window.GOVUK = {}; }
if(typeof window.GOVUK.support === 'undefined'){ window.GOVUK.support = {}; }

window.GOVUK.support.history = function() {
  return window.history && window.history.pushState && window.history.replaceState;
}
;
window.GOVUK.Modules = window.GOVUK.Modules || {};

(function(Modules) {
  "use strict";

  Modules.TrackSmartAnswer = function () {
    this.start = function (element) {
      var nodeType = element.data('smart-answer-node-type')
      var flowSlug = element.data('smart-answer-slug')

      if ((nodeType === undefined) || (flowSlug === undefined)) {
        return
      }

      var trackingOptions = {
        label: flowSlug,
        nonInteraction: true,
        page: this.currentPath()
      }

      var trackSmartAnswer = function (category, action) {
        if (GOVUK.analytics && GOVUK.analytics.trackEvent) {
          GOVUK.analytics.trackEvent(category, action, trackingOptions)
        }
      }

      switch (nodeType) {
        case 'outcome':
          trackSmartAnswer('Simple Smart Answer', 'Completed', trackingOptions)
          break
      }
    }
    this.currentPath = function () {
      return window.location.pathname
    }
  }
})(window.GOVUK.Modules)
;
window.GOVUK.Modules = window.GOVUK.Modules || {};

(function(Modules) {
  "use strict";

  Modules.TrackSubmit = function () {
    this.start = function (element) {
      element.on('submit', 'form', trackSubmit);

      var category = element.data('track-category'),
          action = element.data('track-action');

      function trackSubmit() {
        if (GOVUK.analytics && GOVUK.analytics.trackEvent) {
          GOVUK.analytics.trackEvent(category, action);
        }
      }
    };
  };
})(window.GOVUK.Modules);
// used by the step by step navigation component

(function(root) {
  "use strict";
  window.GOVUK = window.GOVUK || {};

  GOVUK.getCurrentLocation = function(){
    return root.location;
  };
}(window));
/*
  Toggle the class 'focus' on input boxes on element focus/blur
  Used by the search component but generic enough for reuse
*/

window.GOVUK.Modules = window.GOVUK.Modules || {};

(function (Modules) {
  'use strict'

  Modules.GemToggleInputClassOnFocus = function () {
    this.start = function ($el) {
      var $toggleTarget = $el.find('.js-class-toggle');

      if(!inputIsEmpty()) {
        addFocusClass();
      }

      $toggleTarget.on('focus', addFocusClass);
      $toggleTarget.on('blur', removeFocusClassFromEmptyInput);

      function inputIsEmpty() {
        return $toggleTarget.val() === '';
      }

      function addFocusClass() {
        $toggleTarget.addClass('focus');
      }

      function removeFocusClassFromEmptyInput() {
        if(inputIsEmpty()) {
          $toggleTarget.removeClass('focus');
        }
      }
    }
  }
})(window.GOVUK.Modules)
;
/*
  Toggle the display of elements

  This is a straight copy of the same file from static.

  Use `data-controls` and `data-expanded` to indicate the
  starting state and the IDs of the elements that the toggle
  controls. This is synonymous with ARIA attributes, which
  get added when starting.
*/


window.GOVUK.Modules = window.GOVUK.Modules || {};

(function (Modules) {
  'use strict'

  Modules.GemToggle = function () {
    this.start = function ($el) {
      var toggleSelector = '[data-controls][data-expanded]'

      $el.on('click', toggleSelector, toggle)
      $el.find(toggleSelector).each(addAriaAttrs)

      // Add the ARIA attributes with JavaScript
      // If the JS fails and there's no interactive elements, having
      // no aria attributes is an accurate representation.
      function addAriaAttrs () {
        var $toggle = $(this)
        $toggle.attr('role', 'button')
        $toggle.attr('aria-controls', $toggle.data('controls'))
        $toggle.attr('aria-expanded', $toggle.data('expanded'))

        var $targets = getTargetElements($toggle)
        $targets.attr('aria-live', 'polite')
        $targets.attr('role', 'region')
        $toggle.data('$targets', $targets)
      }

      function toggle (event) {
        var $toggle = $(event.target),
          expanded = $toggle.attr('aria-expanded') === 'true',
          $targets = $toggle.data('$targets')

        if (expanded) {
          $toggle.attr('aria-expanded', false)
          $targets.addClass('js-hidden')
        } else {
          $toggle.attr('aria-expanded', true)
          $targets.removeClass('js-hidden')
        }

        var toggledText = $toggle.data('toggled-text')
        if (typeof toggledText === 'string') {
          $toggle.data('toggled-text', $toggle.text())
          $toggle.text(toggledText)
        }

        event.preventDefault()
      }

      function getTargetElements ($toggle) {
        var ids = $toggle.attr('aria-controls').split(' '),
          selector = '#' + ids.join(', #')

        return $el.find(selector)
      }
    }
  }
})(window.GOVUK.Modules)
;
window.GOVUK = window.GOVUK || {}
window.GOVUK.Modules = window.GOVUK.Modules || {};

(function (global, GOVUK) {
  'use strict'

  GOVUK.Modules.CopyToClipboard = function () {
    this.start = function (element) {
      var copyButton = element[0].querySelector('.gem-c-button')

      copyButton.addEventListener('click', function (event) {
        event.preventDefault()
        var input = element[0].querySelector('.gem-c-input')
        input.select()
        document.execCommand('copy')
      })
    }
  }
})(window, window.GOVUK)
;
window.GOVUK = window.GOVUK || {}
window.GOVUK.Modules = window.GOVUK.Modules || {};

(function (global, GOVUK) {
  'use strict'

  var $ = global.jQuery

  GOVUK.Modules.ErrorSummary = function () {
    this.start = function (element) {
      element.focus()
      // Focus on inputs with errors, so they're easier to discover
      element.on('click', '.js-error-summary__link', function (event) {
        event.preventDefault()
        var href = $(this).attr('href')
        $(href).focus()
      })
    }
  }
})(window, window.GOVUK)
;
window.GOVUK = window.GOVUK || {};
window.GOVUK.Modules = window.GOVUK.Modules || {};

(function (Modules) {
  "use strict";
  window.GOVUK = window.GOVUK || {};

  Modules.Feedback = function () {

    this.start = function ($element) {
      this.$prompt = $element.find('.js-prompt');
      this.$fields = $element.find('.gem-c-feedback__form-field');
      this.$forms = $element.find('.js-feedback-form');
      this.$toggleForms = $element.find('.js-toggle-form');
      this.$closeForms = $element.find('.js-close-form');
      this.$activeForm = false;
      this.$pageIsUsefulButton = $element.find('.js-page-is-useful');
      this.$pageIsNotUsefulButton = $element.find('.js-page-is-not-useful');
      this.$somethingIsWrongButton = $element.find('.js-something-is-wrong');
      this.$promptQuestions = $element.find('.js-prompt-questions');
      this.$promptSuccessMessage = $element.find('.js-prompt-success');
      this.$somethingIsWrongForm = $element.find('#something-is-wrong');

      var that = this;
      var jshiddenClass = 'js-hidden';

      setInitialAriaAttributes();
      setHiddenValues();

      this.$toggleForms.on('click', function(e) {
        e.preventDefault();
        toggleForm($(e.target).attr('aria-controls'));
        trackEvent(getTrackEventParams($(this)));
        updateAriaAttributes($(this));
      });

      this.$closeForms.on('click', function(e) {
        e.preventDefault();
        toggleForm($(e.target).attr('aria-controls'));
        trackEvent(getTrackEventParams($(this)));
        setInitialAriaAttributes();
        revealInitialPrompt();
      });

      this.$pageIsUsefulButton.on('click', function(e) {
        e.preventDefault();
        trackEvent(getTrackEventParams(that.$pageIsUsefulButton));
        showFormSuccess();
        revealInitialPrompt();
      });

      $element.find('form').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this);
        $.ajax({
          type: "POST",
          url: $form.attr('action'),
          dataType: "json",
          data: $form.serialize(),
          beforeSend: disableSubmitFormButton($form),
          timeout: 6000
        }).done(function (xhr) {
          trackEvent(getTrackEventParams($form));
          showFormSuccess(xhr.message);
          revealInitialPrompt();
          setInitialAriaAttributes();
          that.$activeForm.toggleClass(jshiddenClass);
        }).fail(function (xhr) {
          showError(xhr);
          enableSubmitFormButton($form);
        });
      });

      function disableSubmitFormButton ($form) {
        $form.find('input[type="submit"]').prop('disabled', true);
      }

      function enableSubmitFormButton ($form) {
        $form.find('input[type="submit"]').removeAttr('disabled');
      }

      function setInitialAriaAttributes () {
        that.$forms.attr('aria-hidden', true);
        that.$pageIsNotUsefulButton.attr('aria-expanded', false);
        that.$somethingIsWrongButton.attr('aria-expanded', false);
      }

      function setHiddenValues () {
        that.$somethingIsWrongForm.append('<input type="hidden" name="javascript_enabled" value="true"/>');
        that.$somethingIsWrongForm.append($('<input type="hidden" name="referrer">').val(document.referrer || "unknown"));
      }

      function updateAriaAttributes (linkClicked) {
        linkClicked.attr('aria-expanded', true);
        $('#' + linkClicked.attr('aria-controls')).attr('aria-hidden', false);
      }

      function toggleForm (formId) {
        that.$activeForm = $element.find('#' + formId);
        that.$activeForm.toggleClass(jshiddenClass);
        that.$prompt.toggleClass(jshiddenClass);

        var formIsVisible = !that.$activeForm.hasClass(jshiddenClass);

        if (formIsVisible) {
          that.$activeForm.find('.gem-c-input').first().focus();
        } else {
          that.$activeForm = false;
        }
      }

      function getTrackEventParams ($node) {
        return {
          category: $node.data('track-category'),
          action: $node.data('track-action')
        }
      }

      function trackEvent (trackEventParams) {
        if (GOVUK.analytics && GOVUK.analytics.trackEvent) {
          GOVUK.analytics.trackEvent(trackEventParams.category, trackEventParams.action);
        }
      }

      function showError (error) {
        var error = [
          '<h2 class="gem-c-feedback__heading">',
          '  Sorry, we’re unable to receive your message right now. ',
          '</h2>',
          '<p>If the problem persists, we have other ways for you to provide',
          ' feedback on the <a href="/contact/govuk">contact page</a>.</p>'
        ].join('');

        if (typeof(error.responseJSON) !== 'undefined') {
          error = typeof(error.responseJSON.message) == 'undefined' ? error : error.responseJSON.message;
        }
        var $errors = that.$activeForm.find('.js-errors');
        $errors.html(error).removeClass(jshiddenClass).focus();
      }

      function showFormSuccess () {
        that.$promptQuestions.addClass(jshiddenClass);
        that.$promptSuccessMessage.removeClass(jshiddenClass).focus();
      }

      function revealInitialPrompt () {
        that.$prompt.removeClass(jshiddenClass);
        that.$prompt.focus();
      }
    }

  };
})(window.GOVUK.Modules);
window.GOVUK = window.GOVUK || {}
window.GOVUK.Modules = window.GOVUK.Modules || {};

(function (GOVUK) {
  'use strict'

  GOVUK.Modules.InitialFocus = function () {
    this.start = function (element) {
      element.focus()
    }
  }
})(window.GOVUK)
;
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('GOVUKFrontend', factory) :
	(global.GOVUKFrontend = factory());
}(this, (function () { 'use strict';

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
var detect = (
  // In IE8, defineProperty could only act on DOM elements, so full support
  // for the feature requires the ability to set a property on an arbitrary object
  'defineProperty' in Object && (function() {
  	try {
  		var a = {};
  		Object.defineProperty(a, 'test', {value:42});
  		return true;
  	} catch(e) {
  		return false
  	}
  }())
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
(function (nativeDefineProperty) {

	var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
	var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
	var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

	Object.defineProperty = function defineProperty(object, property, descriptor) {

		// Where native support exists, assume it
		if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
			return nativeDefineProperty(object, property, descriptor);
		}

		if (object === null || !(object instanceof Object || typeof object === 'object')) {
			throw new TypeError('Object.defineProperty called on non-object');
		}

		if (!(descriptor instanceof Object)) {
			throw new TypeError('Property description must be an object');
		}

		var propertyString = String(property);
		var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
		var getterType = 'get' in descriptor && typeof descriptor.get;
		var setterType = 'set' in descriptor && typeof descriptor.set;

		// handle descriptor.get
		if (getterType) {
			if (getterType !== 'function') {
				throw new TypeError('Getter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineGetter__.call(object, propertyString, descriptor.get);
		} else {
			object[propertyString] = descriptor.value;
		}

		// handle descriptor.set
		if (setterType) {
			if (setterType !== 'function') {
				throw new TypeError('Setter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineSetter__.call(object, propertyString, descriptor.set);
		}

		// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
		if ('value' in descriptor) {
			object[propertyString] = descriptor.value;
		}

		return object;
	};
}(Object.defineProperty));
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {
  // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Function/prototype/bind/detect.js
  var detect = 'bind' in Function.prototype;

  if (detect) return

  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Function.prototype.bind&flags=always
  Object.defineProperty(Function.prototype, 'bind', {
      value: function bind(that) { // .length is 1
          // add necessary es5-shim utilities
          var $Array = Array;
          var $Object = Object;
          var ObjectPrototype = $Object.prototype;
          var ArrayPrototype = $Array.prototype;
          var Empty = function Empty() {};
          var to_string = ObjectPrototype.toString;
          var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
          var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
          var array_slice = ArrayPrototype.slice;
          var array_concat = ArrayPrototype.concat;
          var array_push = ArrayPrototype.push;
          var max = Math.max;
          // /add necessary es5-shim utilities

          // 1. Let Target be the this value.
          var target = this;
          // 2. If IsCallable(Target) is false, throw a TypeError exception.
          if (!isCallable(target)) {
              throw new TypeError('Function.prototype.bind called on incompatible ' + target);
          }
          // 3. Let A be a new (possibly empty) internal list of all of the
          //   argument values provided after thisArg (arg1, arg2 etc), in order.
          // XXX slicedArgs will stand in for "A" if used
          var args = array_slice.call(arguments, 1); // for normal call
          // 4. Let F be a new native ECMAScript object.
          // 11. Set the [[Prototype]] internal property of F to the standard
          //   built-in Function prototype object as specified in 15.3.3.1.
          // 12. Set the [[Call]] internal property of F as described in
          //   15.3.4.5.1.
          // 13. Set the [[Construct]] internal property of F as described in
          //   15.3.4.5.2.
          // 14. Set the [[HasInstance]] internal property of F as described in
          //   15.3.4.5.3.
          var bound;
          var binder = function () {

              if (this instanceof bound) {
                  // 15.3.4.5.2 [[Construct]]
                  // When the [[Construct]] internal method of a function object,
                  // F that was created using the bind function is called with a
                  // list of arguments ExtraArgs, the following steps are taken:
                  // 1. Let target be the value of F's [[TargetFunction]]
                  //   internal property.
                  // 2. If target has no [[Construct]] internal method, a
                  //   TypeError exception is thrown.
                  // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                  //   property.
                  // 4. Let args be a new list containing the same values as the
                  //   list boundArgs in the same order followed by the same
                  //   values as the list ExtraArgs in the same order.
                  // 5. Return the result of calling the [[Construct]] internal
                  //   method of target providing args as the arguments.

                  var result = target.apply(
                      this,
                      array_concat.call(args, array_slice.call(arguments))
                  );
                  if ($Object(result) === result) {
                      return result;
                  }
                  return this;

              } else {
                  // 15.3.4.5.1 [[Call]]
                  // When the [[Call]] internal method of a function object, F,
                  // which was created using the bind function is called with a
                  // this value and a list of arguments ExtraArgs, the following
                  // steps are taken:
                  // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                  //   property.
                  // 2. Let boundThis be the value of F's [[BoundThis]] internal
                  //   property.
                  // 3. Let target be the value of F's [[TargetFunction]] internal
                  //   property.
                  // 4. Let args be a new list containing the same values as the
                  //   list boundArgs in the same order followed by the same
                  //   values as the list ExtraArgs in the same order.
                  // 5. Return the result of calling the [[Call]] internal method
                  //   of target providing boundThis as the this value and
                  //   providing args as the arguments.

                  // equiv: target.call(this, ...boundArgs, ...args)
                  return target.apply(
                      that,
                      array_concat.call(args, array_slice.call(arguments))
                  );

              }

          };

          // 15. If the [[Class]] internal property of Target is "Function", then
          //     a. Let L be the length property of Target minus the length of A.
          //     b. Set the length own property of F to either 0 or L, whichever is
          //       larger.
          // 16. Else set the length own property of F to 0.

          var boundLength = max(0, target.length - args.length);

          // 17. Set the attributes of the length own property of F to the values
          //   specified in 15.3.5.1.
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
              array_push.call(boundArgs, '$' + i);
          }

          // XXX Build a dynamic function with desired amount of arguments is the only
          // way to set the length property of a function.
          // In environments where Content Security Policies enabled (Chrome extensions,
          // for ex.) all use of eval or Function costructor throws an exception.
          // However in all of these environments Function.prototype.bind exists
          // and so this code will never be executed.
          bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

          if (target.prototype) {
              Empty.prototype = target.prototype;
              bound.prototype = new Empty();
              // Clean up dangling references.
              Empty.prototype = null;
          }

          // TODO
          // 18. Set the [[Extensible]] internal property of F to true.

          // TODO
          // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
          // 20. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
          //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
          //   false.
          // 21. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
          //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
          //   and false.

          // TODO
          // NOTE Function objects created using Function.prototype.bind do not
          // have a prototype property or the [[Code]], [[FormalParameters]], and
          // [[Scope]] internal properties.
          // XXX can't delete prototype in pure-js.

          // 22. Return F.
          return bound;
      }
  });
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Window/detect.js
var detect = ('Window' in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Window&flags=always
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
	(function (global) {
		if (global.constructor) {
			global.Window = global.constructor;
		} else {
			(global.Window = global.constructor = new Function('return function Window() {}')()).prototype = this;
		}
	}(this));
}

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
var detect = ("Document" in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

	if (this.HTMLDocument) { // IE8

		// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
		this.Document = this.HTMLDocument;

	} else {

		// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
		this.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
		this.Document.prototype = document;
	}
}


})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js
var detect = ('Element' in this && 'HTMLElement' in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always
(function () {

	// IE8
	if (window.Element && !window.HTMLElement) {
		window.HTMLElement = window.Element;
		return;
	}

	// create Element constructor
	window.Element = window.HTMLElement = new Function('return function Element() {}')();

	// generate sandboxed iframe
	var vbody = document.appendChild(document.createElement('body'));
	var frame = vbody.appendChild(document.createElement('iframe'));

	// use sandboxed iframe to replicate Element functionality
	var frameDocument = frame.contentWindow.document;
	var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
	var cache = {};

	// polyfill Element.prototype on an element
	var shiv = function (element, deep) {
		var
		childNodes = element.childNodes || [],
		index = -1,
		key, value, childNode;

		if (element.nodeType === 1 && element.constructor !== Element) {
			element.constructor = Element;

			for (key in cache) {
				value = cache[key];
				element[key] = value;
			}
		}

		while (childNode = deep && childNodes[++index]) {
			shiv(childNode, deep);
		}

		return element;
	};

	var elements = document.getElementsByTagName('*');
	var nativeCreateElement = document.createElement;
	var interval;
	var loopLimit = 100;

	prototype.attachEvent('onpropertychange', function (event) {
		var
		propertyName = event.propertyName,
		nonValue = !cache.hasOwnProperty(propertyName),
		newValue = prototype[propertyName],
		oldValue = cache[propertyName],
		index = -1,
		element;

		while (element = elements[++index]) {
			if (element.nodeType === 1) {
				if (nonValue || element[propertyName] === oldValue) {
					element[propertyName] = newValue;
				}
			}
		}

		cache[propertyName] = newValue;
	});

	prototype.constructor = Element;

	if (!prototype.hasAttribute) {
		// <Element>.hasAttribute
		prototype.hasAttribute = function hasAttribute(name) {
			return this.getAttribute(name) !== null;
		};
	}

	// Apply Element prototype to the pre-existing DOM as soon as the body element appears.
	function bodyCheck() {
		if (!(loopLimit--)) clearTimeout(interval);
		if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
			shiv(document, true);
			if (interval && document.body.prototype) clearTimeout(interval);
			return (!!document.body.prototype);
		}
		return false;
	}
	if (!bodyCheck()) {
		document.onreadystatechange = bodyCheck;
		interval = setInterval(bodyCheck, 25);
	}

	// Apply to any new elements created after load
	document.createElement = function createElement(nodeName) {
		var element = nativeCreateElement(String(nodeName).toLowerCase());
		return shiv(element);
	};

	// remove sandboxed iframe
	document.removeChild(vbody);
}());

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Event/detect.js
var detect = (
  (function(global) {

  	if (!('Event' in global)) return false;
  	if (typeof global.Event === 'function') return true;

  	try {

  		// In IE 9-11, the Event object exists but cannot be instantiated
  		new Event('click');
  		return true;
  	} catch(e) {
  		return false;
  	}
  }(this))
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Event&flags=always
(function () {
	var unlistenableWindowEvents = {
		click: 1,
		dblclick: 1,
		keyup: 1,
		keypress: 1,
		keydown: 1,
		mousedown: 1,
		mouseup: 1,
		mousemove: 1,
		mouseover: 1,
		mouseenter: 1,
		mouseleave: 1,
		mouseout: 1,
		storage: 1,
		storagecommit: 1,
		textinput: 1
	};

	// This polyfill depends on availability of `document` so will not run in a worker
	// However, we asssume there are no browsers with worker support that lack proper
	// support for `Event` within the worker
	if (typeof document === 'undefined' || typeof window === 'undefined') return;

	function indexOf(array, element) {
		var
		index = -1,
		length = array.length;

		while (++index < length) {
			if (index in array && array[index] === element) {
				return index;
			}
		}

		return -1;
	}

	var existingProto = (window.Event && window.Event.prototype) || null;
	window.Event = Window.prototype.Event = function Event(type, eventInitDict) {
		if (!type) {
			throw new Error('Not enough arguments');
		}

		var event;
		// Shortcut if browser supports createEvent
		if ('createEvent' in document) {
			event = document.createEvent('Event');
			var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
			var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

			event.initEvent(type, bubbles, cancelable);

			return event;
		}

		event = document.createEventObject();

		event.type = type;
		event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
		event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

		return event;
	};
	if (existingProto) {
		Object.defineProperty(window.Event, 'prototype', {
			configurable: false,
			enumerable: false,
			writable: true,
			value: existingProto
		});
	}

	if (!('createEvent' in document)) {
		window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1];

			if (element === window && type in unlistenableWindowEvents) {
				throw new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');
			}

			if (!element._events) {
				element._events = {};
			}

			if (!element._events[type]) {
				element._events[type] = function (event) {
					var
					list = element._events[event.type].list,
					events = list.slice(),
					index = -1,
					length = events.length,
					eventElement;

					event.preventDefault = function preventDefault() {
						if (event.cancelable !== false) {
							event.returnValue = false;
						}
					};

					event.stopPropagation = function stopPropagation() {
						event.cancelBubble = true;
					};

					event.stopImmediatePropagation = function stopImmediatePropagation() {
						event.cancelBubble = true;
						event.cancelImmediate = true;
					};

					event.currentTarget = element;
					event.relatedTarget = event.fromElement || null;
					event.target = event.target || event.srcElement || element;
					event.timeStamp = new Date().getTime();

					if (event.clientX) {
						event.pageX = event.clientX + document.documentElement.scrollLeft;
						event.pageY = event.clientY + document.documentElement.scrollTop;
					}

					while (++index < length && !event.cancelImmediate) {
						if (index in events) {
							eventElement = events[index];

							if (indexOf(list, eventElement) !== -1 && typeof eventElement === 'function') {
								eventElement.call(element, event);
							}
						}
					}
				};

				element._events[type].list = [];

				if (element.attachEvent) {
					element.attachEvent('on' + type, element._events[type]);
				}
			}

			element._events[type].list.push(listener);
		};

		window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1],
			index;

			if (element._events && element._events[type] && element._events[type].list) {
				index = indexOf(element._events[type].list, listener);

				if (index !== -1) {
					element._events[type].list.splice(index, 1);

					if (!element._events[type].list.length) {
						if (element.detachEvent) {
							element.detachEvent('on' + type, element._events[type]);
						}
						delete element._events[type];
					}
				}
			}
		};

		window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
			if (!arguments.length) {
				throw new Error('Not enough arguments');
			}

			if (!event || typeof event.type !== 'string') {
				throw new Error('DOM Events Exception 0');
			}

			var element = this, type = event.type;

			try {
				if (!event.bubbles) {
					event.cancelBubble = true;

					var cancelBubbleEvent = function (event) {
						event.cancelBubble = true;

						(element || window).detachEvent('on' + type, cancelBubbleEvent);
					};

					this.attachEvent('on' + type, cancelBubbleEvent);
				}

				this.fireEvent('on' + type, event);
			} catch (error) {
				event.target = element;

				do {
					event.currentTarget = element;

					if ('_events' in element && typeof element._events[type] === 'function') {
						element._events[type].call(element, event);
					}

					if (typeof element['on' + type] === 'function') {
						element['on' + type].call(element, event);
					}

					element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
				} while (element && !event.cancelBubble);
			}

			return true;
		};

		// Add the DOMContentLoaded Event
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState === 'complete') {
				document.dispatchEvent(new Event('DOMContentLoaded', {
					bubbles: true
				}));
			}
		});
	}
}());

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/detect.js
    var detect = (
      'DOMTokenList' in this && (function (x) {
        return 'classList' in x ? !x.classList.toggle('x', false) && !x.className : true;
      })(document.createElement('x'))
    );

    if (detect) return

    // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/polyfill.js
    (function (global) {
      var nativeImpl = "DOMTokenList" in global && global.DOMTokenList;

      if (
          !nativeImpl ||
          (
            !!document.createElementNS &&
            !!document.createElementNS('http://www.w3.org/2000/svg', 'svg') &&
            !(document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)
          )
        ) {
        global.DOMTokenList = (function() { // eslint-disable-line no-unused-vars
          var dpSupport = true;
          var defineGetter = function (object, name, fn, configurable) {
            if (Object.defineProperty)
              Object.defineProperty(object, name, {
                configurable: false === dpSupport ? true : !!configurable,
                get: fn
              });

            else object.__defineGetter__(name, fn);
          };

          /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
          try {
            defineGetter({}, "support");
          }
          catch (e) {
            dpSupport = false;
          }


          var _DOMTokenList = function (el, prop) {
            var that = this;
            var tokens = [];
            var tokenMap = {};
            var length = 0;
            var maxLength = 0;
            var addIndexGetter = function (i) {
              defineGetter(that, i, function () {
                preop();
                return tokens[i];
              }, false);

            };
            var reindex = function () {

              /** Define getter functions for array-like access to the tokenList's contents. */
              if (length >= maxLength)
                for (; maxLength < length; ++maxLength) {
                  addIndexGetter(maxLength);
                }
            };

            /** Helper function called at the start of each class method. Internal use only. */
            var preop = function () {
              var error;
              var i;
              var args = arguments;
              var rSpace = /\s+/;

              /** Validate the token/s passed to an instance method, if any. */
              if (args.length)
                for (i = 0; i < args.length; ++i)
                  if (rSpace.test(args[i])) {
                    error = new SyntaxError('String "' + args[i] + '" ' + "contains" + ' an invalid character');
                    error.code = 5;
                    error.name = "InvalidCharacterError";
                    throw error;
                  }


              /** Split the new value apart by whitespace*/
              if (typeof el[prop] === "object") {
                tokens = ("" + el[prop].baseVal).replace(/^\s+|\s+$/g, "").split(rSpace);
              } else {
                tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);
              }

              /** Avoid treating blank strings as single-item token lists */
              if ("" === tokens[0]) tokens = [];

              /** Repopulate the internal token lists */
              tokenMap = {};
              for (i = 0; i < tokens.length; ++i)
                tokenMap[tokens[i]] = true;
              length = tokens.length;
              reindex();
            };

            /** Populate our internal token list if the targeted attribute of the subject element isn't empty. */
            preop();

            /** Return the number of tokens in the underlying string. Read-only. */
            defineGetter(that, "length", function () {
              preop();
              return length;
            });

            /** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */
            that.toLocaleString =
              that.toString = function () {
                preop();
                return tokens.join(" ");
              };

            that.item = function (idx) {
              preop();
              return tokens[idx];
            };

            that.contains = function (token) {
              preop();
              return !!tokenMap[token];
            };

            that.add = function () {
              preop.apply(that, args = arguments);

              for (var args, token, i = 0, l = args.length; i < l; ++i) {
                token = args[i];
                if (!tokenMap[token]) {
                  tokens.push(token);
                  tokenMap[token] = true;
                }
              }

              /** Update the targeted attribute of the attached element if the token list's changed. */
              if (length !== tokens.length) {
                length = tokens.length >>> 0;
                if (typeof el[prop] === "object") {
                  el[prop].baseVal = tokens.join(" ");
                } else {
                  el[prop] = tokens.join(" ");
                }
                reindex();
              }
            };

            that.remove = function () {
              preop.apply(that, args = arguments);

              /** Build a hash of token names to compare against when recollecting our token list. */
              for (var args, ignore = {}, i = 0, t = []; i < args.length; ++i) {
                ignore[args[i]] = true;
                delete tokenMap[args[i]];
              }

              /** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */
              for (i = 0; i < tokens.length; ++i)
                if (!ignore[tokens[i]]) t.push(tokens[i]);

              tokens = t;
              length = t.length >>> 0;

              /** Update the targeted attribute of the attached element. */
              if (typeof el[prop] === "object") {
                el[prop].baseVal = tokens.join(" ");
              } else {
                el[prop] = tokens.join(" ");
              }
              reindex();
            };

            that.toggle = function (token, force) {
              preop.apply(that, [token]);

              /** Token state's being forced. */
              if (undefined !== force) {
                if (force) {
                  that.add(token);
                  return true;
                } else {
                  that.remove(token);
                  return false;
                }
              }

              /** Token already exists in tokenList. Remove it, and return FALSE. */
              if (tokenMap[token]) {
                that.remove(token);
                return false;
              }

              /** Otherwise, add the token and return TRUE. */
              that.add(token);
              return true;
            };

            return that;
          };

          return _DOMTokenList;
        }());
      }

      // Add second argument to native DOMTokenList.toggle() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.toggle('x', false);
        if (!e.classList.contains('x')) return;
        e.classList.constructor.prototype.toggle = function toggle(token /*, force*/) {
          var force = arguments[1];
          if (force === undefined) {
            var add = !this.contains(token);
            this[add ? 'add' : 'remove'](token);
            return add;
          }
          force = !!force;
          this[force ? 'add' : 'remove'](token);
          return force;
        };
      }());

      // Add multiple arguments to native DOMTokenList.add() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a', 'b');
        if (e.classList.contains('b')) return;
        var native = e.classList.constructor.prototype.add;
        e.classList.constructor.prototype.add = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            native.call(this, args[i]);
          }
        };
      }());

      // Add multiple arguments to native DOMTokenList.remove() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a');
        e.classList.add('b');
        e.classList.remove('a', 'b');
        if (!e.classList.contains('b')) return;
        var native = e.classList.constructor.prototype.remove;
        e.classList.constructor.prototype.remove = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            native.call(this, args[i]);
          }
        };
      }());

    }(this));

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/8717a9e04ac7aff99b4980fbedead98036b0929a/packages/polyfill-library/polyfills/Element/prototype/classList/detect.js
    var detect = (
      'document' in this && "classList" in document.documentElement && 'Element' in this && 'classList' in Element.prototype && (function () {
        var e = document.createElement('span');
        e.classList.add('a', 'b');
        return e.classList.contains('b');
      }())
    );

    if (detect) return

    // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/8717a9e04ac7aff99b4980fbedead98036b0929a/packages/polyfill-library/polyfills/Element/prototype/classList/polyfill.js
    (function (global) {
      var dpSupport = true;
      var defineGetter = function (object, name, fn, configurable) {
        if (Object.defineProperty)
          Object.defineProperty(object, name, {
            configurable: false === dpSupport ? true : !!configurable,
            get: fn
          });

        else object.__defineGetter__(name, fn);
      };
      /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
      try {
        defineGetter({}, "support");
      }
      catch (e) {
        dpSupport = false;
      }
      /** Polyfills a property with a DOMTokenList */
      var addProp = function (o, name, attr) {

        defineGetter(o.prototype, name, function () {
          var tokenList;

          var THIS = this,

          /** Prevent this from firing twice for some reason. What the hell, IE. */
          gibberishProperty = "__defineGetter__" + "DEFINE_PROPERTY" + name;
          if(THIS[gibberishProperty]) return tokenList;
          THIS[gibberishProperty] = true;

          /**
           * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.
           *
           * What this is doing is creating a dummy element ("reflection") inside a detached phantom node ("mirror")
           * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML
           * element instead, this would conflict with element types which use indexed properties (such as forms and
           * select lists).
           */
          if (false === dpSupport) {

            var visage;
            var mirror = addProp.mirror || document.createElement("div");
            var reflections = mirror.childNodes;
            var l = reflections.length;

            for (var i = 0; i < l; ++i)
              if (reflections[i]._R === THIS) {
                visage = reflections[i];
                break;
              }

            /** Couldn't find an element's reflection inside the mirror. Materialise one. */
            visage || (visage = mirror.appendChild(document.createElement("div")));

            tokenList = DOMTokenList.call(visage, THIS, attr);
          } else tokenList = new DOMTokenList(THIS, attr);

          defineGetter(THIS, name, function () {
            return tokenList;
          });
          delete THIS[gibberishProperty];

          return tokenList;
        }, true);
      };

      addProp(global.Element, "classList", "className");
      addProp(global.HTMLElement, "classList", "className");
      addProp(global.HTMLLinkElement, "relList", "rel");
      addProp(global.HTMLAnchorElement, "relList", "rel");
      addProp(global.HTMLAreaElement, "relList", "rel");
    }(this));

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

/**
 * TODO: Ideally this would be a NodeList.prototype.forEach polyfill
 * This seems to fail in IE8, requires more investigation.
 * See: https://github.com/imagitama/nodelist-foreach-polyfill
 */
function nodeListForEach (nodes, callback) {
  if (window.NodeList.prototype.forEach) {
    return nodes.forEach(callback)
  }
  for (var i = 0; i < nodes.length; i++) {
    callback.call(window, nodes[i], i, nodes);
  }
}

function Radios ($module) {
  this.$module = $module;
  this.$inputs = $module.querySelectorAll('input[type="radio"]');
}

Radios.prototype.init = function () {
  var $module = this.$module;
  var $inputs = this.$inputs;

  /**
  * Loop over all items with [data-controls]
  * Check if they have a matching conditional reveal
  * If they do, assign attributes.
  **/
  nodeListForEach($inputs, function ($input) {
    var controls = $input.getAttribute('data-aria-controls');

    // Check if input controls anything
    // Check if content exists, before setting attributes.
    if (!controls || !$module.querySelector('#' + controls)) {
      return
    }

    // If we have content that is controlled, set attributes.
    $input.setAttribute('aria-controls', controls);
    $input.removeAttribute('data-aria-controls');
    this.setAttributes($input);
  }.bind(this));

  // Handle events
  $module.addEventListener('click', this.handleClick.bind(this));
};

Radios.prototype.setAttributes = function ($input) {
  var inputIsChecked = $input.checked;
  $input.setAttribute('aria-expanded', inputIsChecked);

  var $content = document.querySelector('#' + $input.getAttribute('aria-controls'));
  $content.classList.toggle('govuk-radios__conditional--hidden', !inputIsChecked);
};

Radios.prototype.handleClick = function (event) {
  nodeListForEach(this.$inputs, function ($input) {
    // If a radio with aria-controls, handle click
    var isRadio = $input.getAttribute('type') === 'radio';
    var hasAriaControls = $input.getAttribute('aria-controls');
    if (isRadio && hasAriaControls) {
      this.setAttributes($input);
    }
  }.bind(this));
};

return Radios;

})));
// This component relies on JavaScript from GOV.UK Frontend


window.GOVUK = window.GOVUK || {}
window.GOVUK.FrontendModules = window.GOVUK.FrontendModules || {};

(function (global, GOVUK) {
  'use strict'

  /**
   * TODO: Ideally this would be a NodeList.prototype.forEach polyfill
   *
   * See: https://github.com/imagitama/nodelist-foreach-polyfill
   * but the polyfill doesn't work in IE8 and needs more investigation
   */
  function nodeListForEach (nodes, callback) {
    if (window.NodeList.prototype.forEach) {
      return nodes.forEach(callback)
    }
    for (var i = 0; i < nodes.length; i++) {
      callback.call(window, nodes[i], i, nodes)
    }
  }

  GOVUK.FrontendModules.Radios = window.GOVUKFrontend

  var $radios = document.querySelectorAll('[data-module="radios"]')

  nodeListForEach($radios, function ($radio) {
    new GOVUK.FrontendModules.Radios($radio).init()
  })
})(window, window.GOVUK)
;
(function (Modules) {
  "use strict";
  window.GOVUK = window.GOVUK || {};

  Modules.Gemstepnav = function () {

    var actions = {}; // stores text for JS appended elements 'show' and 'hide' on steps, and 'show/hide all' button
    var rememberShownStep = false;
    var stepNavSize;
    var sessionStoreLink = 'govuk-step-nav-active-link';
    var activeLinkClass = 'gem-c-step-nav__list-item--active';
    var activeStepClass = 'gem-c-step-nav__step--active';
    var activeLinkHref = '#content';
    var uniqueId;

    this.start = function ($element) {

      // Indicate that js has worked
      $element.addClass('gem-c-step-nav--active');

      // Prevent FOUC, remove class hiding content
      $element.removeClass('js-hidden');

      stepNavSize = $element.hasClass('gem-c-step-nav--large') ? 'Big' : 'Small';
      rememberShownStep = !!$element.filter('[data-remember]').length && stepNavSize == 'Big';
      var $steps = $element.find('.js-step');
      var $stepHeaders = $element.find('.js-toggle-panel');
      var totalSteps = $element.find('.js-panel').length;
      var totalLinks = $element.find('.gem-c-step-nav__link').length;
      var $showOrHideAllButton;

      uniqueId = $element.data('id') || false;

      if (uniqueId) {
        sessionStoreLink = sessionStoreLink + "_" + uniqueId;
      }

      var stepNavTracker = new StepNavTracker(totalSteps, totalLinks, uniqueId);

      getTextForInsertedElements();
      addButtonstoSteps();
      addShowHideAllButton();
      addShowHideToggle();
      addAriaControlsAttrForShowHideAllButton();

      ensureOnlyOneActiveLink();
      showPreviouslyOpenedSteps();

      bindToggleForSteps(stepNavTracker);
      bindToggleShowHideAllButton(stepNavTracker);
      bindComponentLinkClicks(stepNavTracker);

      function getTextForInsertedElements() {
        actions.showText = $element.attr('data-show-text');
        actions.hideText = $element.attr('data-hide-text');
        actions.showAllText = $element.attr('data-show-all-text');
        actions.hideAllText = $element.attr('data-hide-all-text');
      }

      function addShowHideAllButton() {
        $element.prepend('<div class="gem-c-step-nav__controls"><button aria-expanded="false" class="gem-c-step-nav__button gem-c-step-nav__button--controls js-step-controls-button">' + actions.showAllText + '</button></div>');
      }

      function addShowHideToggle() {
        $stepHeaders.each(function() {
          var linkText = actions.showText;

          if (headerIsOpen($(this))) {
            linkText = actions.hideText;
          }

          if (!$(this).find('.js-toggle-link').length) {
            $(this).find('.js-step-title-button').append(
              '<span class="gem-c-step-nav__toggle-link js-toggle-link" aria-hidden="true" hidden></span>'
            );
          }
        });
      }

      function headerIsOpen($stepHeader) {
        return (typeof $stepHeader.closest('.js-step').data('show') !== 'undefined');
      }

      function addAriaControlsAttrForShowHideAllButton() {
        var ariaControlsValue = $element.find('.js-panel').first().attr('id');

        $showOrHideAllButton = $element.find('.js-step-controls-button');
        $showOrHideAllButton.attr('aria-controls', ariaControlsValue);
      }

      // called by show all/hide all, sets all steps accordingly
      function setAllStepsShownState(isShown) {
        var data = [];

        $.each($steps, function () {
          var stepView = new StepView($(this));
          stepView.setIsShown(isShown);

          if (isShown) {
            data.push($(this).attr('id'));
          }
        });

        if (isShown) {
          saveToSessionStorage(uniqueId, JSON.stringify(data));
        } else {
          removeFromSessionStorage(uniqueId);
        }
      }

      // called on load, determines whether each step should be open or closed
      function showPreviouslyOpenedSteps() {
        var data = loadFromSessionStorage(uniqueId) || [];

        $.each($steps, function() {
          var id = $(this).attr('id');
          var stepView = new StepView($(this));

          // show the step if it has been remembered or if it has the 'data-show' attribute
          if ((rememberShownStep && data.indexOf(id) > -1) || typeof $(this).attr('data-show') !== "undefined") {
            stepView.setIsShown(true);
          } else {
            stepView.setIsShown(false);
          }
        });

        if (data.length > 0) {
          $showOrHideAllButton.attr('aria-expanded', true);
          setShowHideAllText();
        }
      }

      function addButtonstoSteps() {
        $.each($steps, function () {
          var $step = $(this);
          var $title = $step.find('.js-step-title');
          var contentId = $step.find('.js-panel').first().attr('id');

          $title.wrapInner(
            '<span class="js-step-title-text"></span>'
          );

          $title.wrapInner(
            '<button ' +
            'class="gem-c-step-nav__button gem-c-step-nav__button--title js-step-title-button" ' +
            'aria-expanded="false" aria-controls="' + contentId + '">' +
            '</button>'
          );
        });
      }

      function bindToggleForSteps(stepNavTracker) {
        $element.find('.js-toggle-panel').click(function (event) {
          var $step = $(this).closest('.js-step');

          var stepView = new StepView($step);
          stepView.toggle();

          var stepIsOptional = typeof $step.data('optional') !== 'undefined' ? true : false;
          var toggleClick = new StepToggleClick(event, stepView, $steps, stepNavTracker, stepIsOptional);
          toggleClick.track();

          setShowHideAllText();
          rememberStepState($step);
        });
      }

      // if the step is open, store its id in session store
      // if the step is closed, remove its id from session store
      function rememberStepState($step) {
        if (rememberShownStep) {
          var data = JSON.parse(loadFromSessionStorage(uniqueId)) || [];
          var thisstep = $step.attr('id');
          var shown = $step.hasClass('step-is-shown');

          if (shown) {
            data.push(thisstep);
          } else {
            var i = data.indexOf(thisstep);
            if (i > -1) {
              data.splice(i, 1);
            }
          }
          saveToSessionStorage(uniqueId, JSON.stringify(data));
        }
      }

      // tracking click events on links in step content
      function bindComponentLinkClicks(stepNavTracker) {
        $element.find('.js-link').click(function (event) {
          var linkClick = new componentLinkClick(event, stepNavTracker, $(this).attr('data-position'));
          linkClick.track();
          var thisLinkHref = $(this).attr('href');

          if ($(this).attr('rel') !== 'external') {
            saveToSessionStorage(sessionStoreLink, $(this).attr('data-position'));
          }

          if (thisLinkHref == activeLinkHref) {
            setOnlyThisLinkActive($(this));
            setActiveStepClass();
          }
        });
      }

      function saveToSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
      }

      function loadFromSessionStorage(key) {
        return sessionStorage.getItem(key);
      }

      function removeFromSessionStorage(key) {
        sessionStorage.removeItem(key);
      }

      function setOnlyThisLinkActive(clicked) {
        $element.find('.' + activeLinkClass).removeClass(activeLinkClass);
        clicked.parent().addClass(activeLinkClass);
      }

      // if a link occurs more than once in a step nav, the backend doesn't know which one to highlight
      // so it gives all those links the 'active' attribute and highlights the last step containing that link
      // if the user clicked on one of those links previously, it will be in the session store
      // this code ensures only that link and its corresponding step have the highlighting
      // otherwise it accepts what the backend has already passed to the component
      function ensureOnlyOneActiveLink() {
        var $activeLinks = $element.find('.js-list-item.' + activeLinkClass);

        if ($activeLinks.length <= 1) {
          return;
        }

        var lastClicked = loadFromSessionStorage(sessionStoreLink) || $element.find('.' + activeLinkClass).first().attr('data-position');

        // it's possible for the saved link position value to not match any of the currently duplicate highlighted links
        // so check this otherwise it'll take the highlighting off all of them
        if (!$element.find('.js-link[data-position="' + lastClicked + '"]').parent().hasClass(activeLinkClass)) {
          lastClicked = $element.find('.' + activeLinkClass).first().find('.js-link').attr('data-position');
        }
        removeActiveStateFromAllButCurrent($activeLinks, lastClicked);
        setActiveStepClass();
      }

      function removeActiveStateFromAllButCurrent($activeLinks, current) {
        $activeLinks.each(function() {
          if ($(this).find('.js-link').attr('data-position').toString() !== current.toString()) {
            $(this).removeClass(activeLinkClass);
            $(this).find('.visuallyhidden').remove();
          }
        });
      }

      function setActiveStepClass() {
        $element.find('.' + activeStepClass).removeClass(activeStepClass).removeAttr('data-show');
        $element.find('.' + activeLinkClass).closest('.gem-c-step-nav__step').addClass(activeStepClass).attr('data-show', "");
      }

      function bindToggleShowHideAllButton(stepNavTracker) {
        $showOrHideAllButton = $element.find('.js-step-controls-button');
        $showOrHideAllButton.on('click', function () {
          var shouldshowAll;

          if ($showOrHideAllButton.text() == actions.showAllText) {
            $showOrHideAllButton.text(actions.hideAllText);
            $element.find('.js-toggle-link').html(actions.hideText);
            shouldshowAll = true;

            stepNavTracker.track('pageElementInteraction', 'stepNavAllShown', {
              label: actions.showAllText + ": " + stepNavSize
            });
          } else {
            $showOrHideAllButton.text(actions.showAllText);
            $element.find('.js-toggle-link').html(actions.showText);
            shouldshowAll = false;

            stepNavTracker.track('pageElementInteraction', 'stepNavAllHidden', {
              label: actions.hideAllText + ": " + stepNavSize
            });
          }

          setAllStepsShownState(shouldshowAll);
          $showOrHideAllButton.attr('aria-expanded', shouldshowAll);
          setShowHideAllText();

          return false;
        });
      }

      function setShowHideAllText() {
        var shownSteps = $element.find('.step-is-shown').length;
        // Find out if the number of is-opens == total number of steps
        if (shownSteps === totalSteps) {
          $showOrHideAllButton.text(actions.hideAllText);
        } else {
          $showOrHideAllButton.text(actions.showAllText);
        }
      }
    };

    function StepView($stepElement) {
      var $titleLink = $stepElement.find('.js-step-title-button');
      var $stepContent = $stepElement.find('.js-panel');

      this.title = $stepElement.find('.js-step-title-text').text().trim();
      this.element = $stepElement;

      this.show = show;
      this.hide = hide;
      this.toggle = toggle;
      this.setIsShown = setIsShown;
      this.isShown = isShown;
      this.isHidden = isHidden;
      this.numberOfContentItems = numberOfContentItems;

      function show() {
        setIsShown(true);
      }

      function hide() {
        setIsShown(false);
      }

      function toggle() {
        setIsShown(isHidden());
      }

      function setIsShown(isShown) {
        $stepElement.toggleClass('step-is-shown', isShown);
        $stepContent.toggleClass('js-hidden', !isShown);
        $titleLink.attr("aria-expanded", isShown);
        $stepElement.find('.js-toggle-link').html(isShown ? actions.hideText : actions.showText);
      }

      function isShown() {
        return $stepElement.hasClass('step-is-shown');
      }

      function isHidden() {
        return !isShown();
      }

      function numberOfContentItems() {
        return $stepContent.find('.js-link').length;
      }
    }

    function StepToggleClick(event, stepView, $steps, stepNavTracker, stepIsOptional) {
      this.track = trackClick;
      var $target = $(event.target);

      function trackClick() {
        var tracking_options = {label: trackingLabel(), dimension28: stepView.numberOfContentItems().toString()};
        stepNavTracker.track('pageElementInteraction', trackingAction(), tracking_options);
      }

      function trackingLabel() {
        return $target.closest('.js-toggle-panel').attr('data-position') + ' - ' + stepView.title + ' - ' + locateClickElement() + ": " + stepNavSize + isOptional();
      }

      // returns index of the clicked step in the overall number of steps
      function stepIndex() {
        return $steps.index(stepView.element) + 1;
      }

      function trackingAction() {
        return (stepView.isHidden() ? 'stepNavHidden' : 'stepNavShown');
      }

      function locateClickElement() {
        if (clickedOnIcon()) {
          return iconType() + ' click';
        } else if (clickedOnHeading()) {
          return 'Heading click';
        } else {
          return 'Elsewhere click';
        }
      }

      function clickedOnIcon() {
        return $target.hasClass('js-toggle-link');
      }

      function clickedOnHeading() {
        return $target.hasClass('js-step-title-text');
      }

      function iconType() {
        return (stepView.isHidden() ? 'Minus' : 'Plus');
      }

      function isOptional() {
        return (stepIsOptional ? ' ; optional' : '');
      }
    }

    function componentLinkClick(event, stepNavTracker, linkPosition) {
      this.track = trackClick;

      function trackClick() {
        var tracking_options = {label: $(event.target).attr('href') + " : " + stepNavSize};
        var dimension28 = $(event.target).closest('.gem-c-step-nav__list').attr('data-length');

        if (dimension28) {
          tracking_options['dimension28'] = dimension28;
        }

        stepNavTracker.track('stepNavLinkClicked', linkPosition, tracking_options);
      }
    }

    // A helper that sends a custom event request to Google Analytics if
    // the GOVUK module is setup
    function StepNavTracker(totalSteps, totalLinks, uniqueId) {
      this.track = function(category, action, options) {
        // dimension26 records the total number of expand/collapse steps in this step nav
        // dimension27 records the total number of links in this step nav
        // dimension28 records the number of links in the step that was shown/hidden (handled in click event)
        if (GOVUK.analytics && GOVUK.analytics.trackEvent) {
          options = options || {};
          options["dimension26"] = options["dimension26"] || totalSteps.toString();
          options["dimension27"] = options["dimension27"] || totalLinks.toString();
          options["dimension96"] = options["dimension96"] || uniqueId;
          GOVUK.analytics.trackEvent(category, action, options);
        }
      };
    }
  };
})(window.GOVUK.Modules);


// Frontend manifest
// Note: The ordering of these JavaScript includes matters.







$(document).ready(function() {
  $('.error-summary').focus();
});
