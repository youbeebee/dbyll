(function ($){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({delay: {show: 500, hide: 100}});
    });
    
    $('p').each(function () {
        jQuery(this).html(jQuery(this).html().replace(/\[\[(.+?)\]\]/g, '<mtg-card data-toggle="tooltip" data-html="true" title="">$1</mtg-card>'));
    });
    
    $('mtg-card').each(function () {
        var card_name = jQuery(this).text();
        //console.log('card_name: '+card_name);
        var url_templete = 'http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=';
        var card_img_url = url_templete + card_name;
        var attr_title = '<img src="'+card_img_url+'"></img>';
        //jQuery(this).attr('class', 'mtg-card');
        //jQuery(this).attr('data-toggle', 'tooltip');
        //jQuery(this).attr('data-html', 'true');
        jQuery(this).attr('title', attr_title);
    });
})(jQuery);
