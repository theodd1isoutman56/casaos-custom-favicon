(function () {
    var favurl = window.location.origin + "/mod/custom-favicon/favicon.ico"

    function gay() {
        var icons = document.querySelectorAll('link[rel~="icon"]')
        icons.forEach(function(i){ i.href = favurl })

        var e = document.querySelector('link[rel~="icon"]')
        if (e == null) {
            e = document.createElement("link")
            e.rel = "icon"
            e.href = favurl
            document.head.appendChild(e)
        }
    }

    gay()

    var observe = new MutationObserver(function(){
        gay()
    })
    observe.observe(document.head, { childList: true, subtree: true })
})()