/*
 * loading.js
 * 加载动画
 */
;+(function(win) {
  'use strict'
  var loading = {
    add: function() {
      $('body').append(`
				<div id="loading">
					<div id="loading-center">
						<div id="loading-center-absolute">
							<div class="object" id="object_one"></div>
							<div class="object" id="object_two"></div>
							<div class="object" id="object_three"></div>
						</div>
					</div>
				</div>`)
    },
    remove: function() {
      $('#loading').remove()
    },
    isExist: function() {
      return $('#loading').length > 0
    }
  }
  win.loading = loading
})(window)
