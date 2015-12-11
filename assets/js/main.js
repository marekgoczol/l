(function() {
    document.onready = function() {

        // picker
        var picker = $('.datepicker-trigger');
        for (var i = 0; i < picker.length; i++) {

            new Pikaday({
                field: picker[i],
                trigger: $(picker[i]).parent()[0],
                i18n: {
                    previousMonth : 'Poprzedni miesiąc',
                    nextMonth     : 'Następny miesiąc',
                    months        : ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
                    weekdays      : ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
                    weekdaysShort : ['Ndz','Pn','Wt','Śr','Czw','Pt','Sb']
                },
                format: 'dddd DD/MM/YYYY',
            });
        }

        // nav
        setTimeout(function() {
            var $bars = $('.nav-trigger .fa-bars'),
                $mobileLogo = $('.nav-trigger .fa-logo');

            $mobileLogo.fadeOut(300);
            $bars.fadeIn(300);
        }, 2500);

        $('.nav-trigger').on('click', function() {
            $('body').toggleClass('nav-open');
        });
        $('body').on('click', function(event) {
            if (
                !$(event.target).closest('.nav-trigger').length && 
                !$(event.target).closest('.main-nav').length
            ) {
                if($('.nav-trigger').is(":visible")) {
                    $('body').removeClass('nav-open');
                }
            } 
        });

        // scroll
        var lastScrollTop = 0;
        $(window).bind('scroll', function() {
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                // downscroll code
                if (this.outerHeight === this.outerWidth) {
                    $('.right-container .mobile').css('bottom', -100);
                } else {
                    $('.right-container .mobile').css('bottom', 0);
                }
           } else {
              // upscroll code
                $('.right-container .mobile').css('bottom', 0);
           }
           lastScrollTop = st;
       });
    };
})();