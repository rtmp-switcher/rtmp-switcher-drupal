function video_switch(url_switch, chid)
{
    jQuery('#channels-table').find('tr').each(function(i, el) {
        jQuery(el).css({
            backgroundColor : ''
        });
    });
    
    jQuery('#'+chid).css({
        backgroundColor : 'lightblue'
    });

    jQuery.get(url_switch);
}
