// 小業種一覧
const subOptions = {
    btob: [
        "SaaS",
        "ITサービス",
        "システム開発",
        "Web制作",
        "AI・データ分析",
        "DX支援",
        "広告代理店",
        "SEO・コンテンツ支援"
    ],

    consulting: [
        "経営コンサル",
        "人材・採用支援",
        "会計・税理士",
        "社労士",
        "行政書士",
        "法律事務所"
    ],

    maker: [
        "製造業",
        "メーカー",
        "卸売",
        "商社",
        "食品関連",
        "物流"
    ],

    realestate: [
        "不動産仲介",
        "不動産管理",
        "建設",
        "工務店",
        "リフォーム",
        "住宅設備"
    ],

    medical: [
        "クリニック",
        "歯科",
        "美容サロン",
        "整体・整骨院",
        "介護",
        "福祉"
    ],

    other: [
        "その他"
    ]
};

// 読み込み完了後
document.addEventListener("DOMContentLoaded", function () {

    const mainIndustry = document.getElementById("mainIndustry");
    const subIndustry = document.getElementById("subIndustry");

    if (!mainIndustry || !subIndustry) return;

    mainIndustry.addEventListener("change", function () {

        const selected = this.value;

        subIndustry.innerHTML =
            '<option value="">選択してください</option>';

        if (!selected || !subOptions[selected]) return;

        subOptions[selected].forEach(function (item) {

            const option = document.createElement("option");

            option.value = item;
            option.textContent = item;

            subIndustry.appendChild(option);

        });

    });

});