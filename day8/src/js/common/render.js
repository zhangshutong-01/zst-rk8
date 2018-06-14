define(['jquery', 'handlebars'], function($, handlebars) {
    function render(source, cls, res) {
        var list = $(source).html();
        var template = handlebars.compile(list)
        var html = template(res)
        console.log(list)
        $(cls).append(html)
    }
    return render
});