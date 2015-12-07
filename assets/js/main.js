var picker = $('.datepicker');

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