var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
(function($) {
    $.extend({
        persianNumbers: function(input) {
            var persian = {0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹'};
            var string = (input + '').split('');
            var count = string.length;
            var num;
            for (var i = 0; i <= count; i++) {
                num = string[i];
                if (persian[num]) {
                    string[i] = persian[num];
                }
            }
            return string.join('');
        }
    });
})(jQuery);
// pnumber tag 
function customTag(tagName,fn){
    document.createElement(tagName);
    var tagInstances = document.getElementsByTagName(tagName);
          for ( var i = 0; i < tagInstances.length; i++) {
              fn(tagInstances[i]);
          }
}
function pnumber(element){
	if (element.attributes.num){
		var num = element.attributes.num.value;
        var x = $.persianNumbers(num);
		element.innerHTML = x;
	}
} 
customTag("pnumber",pnumber);