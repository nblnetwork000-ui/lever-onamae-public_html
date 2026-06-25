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