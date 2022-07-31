$('#tab-contents.tab[id != "tab1"]').hide();
//$('要素[属性]')特定の属性を持つ要素のみ取得したい時
//今回はd="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示
$('#tab-menu a').on('click',function(event){
  //イベント発生時に行われる処理
  $("#tab-contents .tab").hide();
  //タブ内の全コンテンツをいったん非表示
  $("#tab-menu .active").removeClass("active");
  //.removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド
  $(this).addClass("active");
  //.addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
  //このthisの時にactiveクラスが追加される。つまりタブがクリックされた時
  //thisの確認：thisはイベントが発生した要素のみを変化させたい時に使う
  //今回の場合だとこのthisはクリックされた時の要素を指している
  $($(this).attr("href")).show();
  //.attr()は、HTML要素の属性を取得したり設定できるメソッド
  //今回はクリックした要素のhref属性を取得してshowで表示させる
  event.preventDefault();
})