/**
 * products_tags
 *
 * @package page
 * @copyright Copyright 2004-2017 Andrew Berezin eCommerce-Service.com
 * @copyright Copyright 2003-2017 Zen Cart Development Team
 * @copyright Portions Copyright 2003 osCommerce
 * @license http://www.zen-cart.com/license/2_0.txt GNU Public License V2.0
 * @version $Id: products_tags.js 2.1.6 26.10.2017 13:18:35 AndrewBerezin $
 */

$(document).ready(function(){
  var productsTags = $('#productsTags');
//  console.log([productsTags.height(), productsTagsSpoilerMaxHeight]);
  if (productsTags.height() > productsTagsSpoilerMaxHeight) {
    productsTags
      .css({'overflow': 'hidden', 'height': productsTagsSpoilerMaxHeight+'px'})
      .after('<div id="productsTagsMore"><span id="productsTagsMoreText">'+productsTagsSpoilerMoreText+'</span></div>');
    $('#productsTagsMore').css('width', productsTags.width());
    $('body').on('click', '#productsTagsMore', function(e) {
        e.preventDefault();
//        console.log($(this));
//        console.log([productsTags.height(), productsTagsSpoilerMaxHeight, productsTags.css('overflow')]);
        if (productsTags.height() > productsTagsSpoilerMaxHeight) {
          productsTags.css({'overflow': 'hidden', 'height': productsTagsSpoilerMaxHeight+'px'});
          $('#productsTagsMoreText').text(productsTagsSpoilerMoreText);
        } else {
          productsTags.css({'overflow': 'visible', 'height': '100%'});
          $('#productsTagsMoreText').text(productsTagsSpoilerHideText);
        }
/*
        productsTags.animate({
          overflow: 'visible',
          height: '100%'
        }, 1500);
*/
      });
  }
});
