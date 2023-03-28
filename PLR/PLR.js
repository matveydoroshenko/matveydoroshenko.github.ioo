(function($) {
    $.fn.redraw = function() {
      return this.map(function(){ this.offsetTop; return this; });
    };
  })(jQuery);

  var Cafe = {
    canPay: true,
    modeOrder: true,
    totalPrice: 29,

    init: function(options) {
      Telegram.WebApp.ready();
      Cafe.apiUrl = options.apiUrl;
      Cafe.userId = options.userId;
      Cafe.userHash = options.userHash;
      Cafe.initLotties();
      var userId = Telegram.WebApp.initData && Telegram.WebApp.initData.user && Telegram.WebApp.initData.user.id || Cafe.userId;
      if(options.debug) {
        var userId = 2349000000;
      }
      $('body').show();
      if (!userId) {
        Cafe.isClosed = true;
        $('body').addClass('closed');
        Cafe.showStatus('Cafe is temporarily closed');
        return;
      }
      $('.js-item-lottie').on('click', Cafe.eLottieClicked);
      $('.js-item-incr-btn').on('click', Cafe.eIncrClicked);
      $('.js-item-decr-btn').on('click', Cafe.eDecrClicked);
      $('.js-order-edit').on('click', Cafe.eEditClicked);
      $('.js-status').on('click', Cafe.eStatusClicked);
      $('.js-order-comment-field').each(function() {
        autosize(this);
      });
