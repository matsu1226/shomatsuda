

// スマホ表示時のハンバーガーメニューの設定
// hbg-iconをクリック
// L ナビゲーションメニューが表示/非表示　→　header-rightがfade-in/fade-out
// L ハンバーガーアイコンが×印に/3本線に →　hbg-barにcloseクラスが追加/消去 
//   L ハンバーガーアイコンが×印の時、画面固定　→ hbg-barにcloseクラスあるなら、bodyがoverflow:hidden
const navList = document.getElementById('header-right');
const hbgBar = document.getElementById('hbg-bar');

function navListToggleClass(classTrigger) {
    navList.classList.toggle(classTrigger)
}
function hbgBarToggleClass(classTrigger) {
    hbgBar.classList.toggle(classTrigger)
}


const hamburgerFunc = () => {
    // navmenu開→閉
    if (hbgBar.classList.contains('close') == true) {

        document.body.style.overflow = "scroll"; // 画面固定
        setTimeout(function () {
            hbgBarToggleClass('close'); //三本線をバツ印に。
        }, 1)

        setTimeout(function () {
            navListToggleClass('displayBlock'); // 300ms→ header-rightをdisplay:blockに。
        }, 10)


        // navmenu閉→開
    } else {
        document.body.style.overflow = "hidden";

        setTimeout(function () {
            navListToggleClass('displayBlock'); // → header-rightをdisplay:noneに。
        }, 1)

        setTimeout(function () {
            hbgBarToggleClass('close'); // → バツ印を三本線に。
        }, 10)
    };
}

const hbgIcon = document.getElementById('hbg-icon');
hbgIcon.addEventListener('click', hamburgerFunc);



// modalの設定
// modalを開ける処理。
const modalWrapperOpen = function (e) {
    //クリックされたdata-modal-openerのdata属性の中身(modal1,modal2,modal3)を取得
    let dataModalOpener = e.currentTarget.dataset.modalOpener;

    // '.modal-wrapper'のついていいる要素全てを取得し、配列化。そのそれぞれの要素に処理。
    //つまりこの配列は、[data-modal=modal1,modal2,modal3]。
    Array.from(document.querySelectorAll('.modal-wrapper')).forEach((e) => {
        if (e.getAttribute('data-modal-wrapper') === dataModalOpener) { //data-modal-Wrapper属性の中身とdata-modal属性の中身が一致しているなら
            e.classList.add('is-open'); //e要素に'.is-open'をつける
        }
    })
}

// 配列[data-modal-opener=modal1,modal2,modal3]の要素それぞれに処理。
Array.from(document.querySelectorAll('.modal-opener')).forEach((modalOpenerElement) => {
    // modal1,modal2,modal3に関して、クリックされて時に、modalWrapperOpenが発動
    modalOpenerElement.addEventListener('click', modalWrapperOpen);
})


// modalを閉じる処理
const modalWrapperClose = function (e) {
    //クリックされたmodal-closerの祖先要素の中から、'.modal-wrapper'要素を取得
    let targetModal = e.currentTarget.closest('.modal-wrapper');
    // そのmodal-wrapperからis-openを外す。
    targetModal.classList.remove('is-open');
}

// 配列[data-modal-opener=modal1,modal2,modal3]の要素それぞれに処理。
Array.from(document.querySelectorAll('.modal-closer')).forEach((modalCloserElement) => {
    // modal1,modal2,modal3に関して、クリックされて時に、modalWrapperOpenが発動
    modalCloserElement.addEventListener('click', modalWrapperClose);
})




// fv画像の色変化。
const mainCopy = document.getElementById('mainCopy');
const fvImgBright = function(){
    let fvImg = document.getElementById('fvImg');
    fvImg.style.filter= "none";
}

setTimeout(fvImgBright, 1000);



$(document).ready(function(){
    $('.slider').slick();
});
