// CSS読み込みが各ページで漏れても崩れないように、共通CSSをJS側でも保証する
function loadCssOnce(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
}

loadCssOnce("./css/header.css");
loadCssOnce("./css/footer.css");

// ヘッダー読み込み
fetch("./components/header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header").innerHTML = data;

    // header読み込み後にJS実行
    const script = document.createElement("script");
    script.src = "./js/header.js";
    document.body.appendChild(script);
});

// フッター読み込み
fetch("./components/footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});
