function identity() 
{

    
    //イサン
    var isang =['LCB 囚人','南部セブン協会 6課','剣契 殺手',
    '開花 E.G.O::壇香梅','奥歯事務所 フィクサー'];
    var randamisang = Math.floor( Math.random() * isang.length );    

    //ファウスト
    var faust =['LCB 囚人','W社 2級 整理要員',
    '生き残った ロボトミー職員','握る者',
    '南部ツヴァイ協会 4課','南部セブン協会 4課',
    'ロボトミー E.G.O::後悔'];
    var randamfaust = Math.floor( Math.random() * faust.length );    

    //ドンキホーテ
    var donki =['LCB 囚人','W社 3級 整理要員','南部シ協会 5課',
    'N社 中槌','南部センク協会 5課 部長'];
    var randamdonki = Math.floor( Math.random() * donki.length );    

    //良秀
    var ryosyu =['LCB 囚人','南部セブン協会 6課','黒雲会 若衆',
    'りょ・ミ・パ 厨房長','W社 3級 整理要員',];
    var randamryosyu = Math.floor( Math.random() * ryosyu.length );    
    
    //ムルソー
    var muruso =['LCB 囚人','南部リウ協会 6課','W社 2級 整理要員',
    'N社 大槌','バラのスパナ工房 フィクサー',
    'R社第4群 サイチーム'];
    var randammuruso = Math.floor( Math.random() * muruso.length );    

    //ホンル
    var hongru =['LCB 囚人','黒雲会 若衆',
    'ぽんぽん派 ボス','南部リウ協会 6課',
    'K社 3級 摘出職職員','W社 2級 整理要員','鈎事務所 フィクサー'];
    var randamhongru = Math.floor( Math.random() * hongru.length );  

    //ヒースクリフ
    var hearth =['LCB 囚人','南部シ協会 5課',
    'R社第4群 ウサギチーム','N社 小槌',
    'ロボトミー E.G.O::狐雨','南部セブン協会 4課'];
    var randamhearth = Math.floor( Math.random() * hearth.length );    
    
    //イシュメール
    var ishu =['LCB 囚人','R社第4群 トナカイチーム',
    '南部シ協会 5課','LCCB 係長',
    'ロボトミー E.G.O::たぷつき','南部リウ協会 4課',
    '奥歯ボートセンター フィクサー'];
    var randamishu = Math.floor( Math.random() * ishu.length );    

    //ロージャ
    var rojion =['LCB 囚人','黒雲会 若衆',
    'LCCB 係長','N社 中槌',
    'バラのスパナ工房 代表','南部ツヴァイ協会 5課',
    '南部ディエーチ協会 4課'];
    var randamrojion = Math.floor( Math.random() * rojion.length );    

    //シンクレア
    var sincrea =['LCB 囚人','剣契 殺手',
    '南部ツヴァイ協会 5課','マリアッチ ボス',
    '握らんとする者','ロボトミー E.G.O::紅籍',
    '奥歯ボートセンター フィクサー'];
    var randamsincrea = Math.floor( Math.random() * sincrea.length );    

    //ウーティス
    var uteirs =['LCB 囚人','剣契 組織員',
    'G社 部長','南部セブン協会 6課 部長',
    '奥歯事務所 フィクサー'];
    var randamuteirs = Math.floor( Math.random() * uteirs.length );    

    //グレゴール
    var greg =['LCB 囚人','南部リウ協会 6課',
    'G社 課長代理','りょ・ミ・パ 助手',
    'バラのスパナ工房 フィクサー','南部ツヴァイ協会 4課'];
    var randamgreg = Math.floor( Math.random() * greg.length );    
   

    var isangtext = isang[randamisang];
    var fausttext = faust[randamfaust];
    var donkitext = donki[randamdonki];
    var ryosyutext = ryosyu[randamryosyu];
    var murusotext = muruso[randammuruso];
    var hongrutext = hongru[randamhongru];
    
    var hearthtext = hearth[randamhearth];
    var ishutext = ishu[randamishu];
    var rojiontext = rojion[randamrojion];
    var sincreatext = sincrea[randamsincrea];
    var uteirstext = uteirs[randamuteirs];
    var gregtext = greg[randamgreg];

    document.getElementById('isang').innerHTML = isangtext;
    document.getElementById('faust').innerHTML = fausttext;
    document.getElementById('donki').innerHTML = donkitext;
    document.getElementById('ryosyu').innerHTML = ryosyutext;
    document.getElementById('muruso').innerHTML = murusotext;
    document.getElementById('hongru').innerHTML = hongrutext;

    document.getElementById('hearth').innerHTML = hearthtext;
    document.getElementById('ishu').innerHTML = ishutext;
    document.getElementById('rojion').innerHTML = rojiontext;
    document.getElementById('sincrea').innerHTML = sincreatext;
    document.getElementById('uters').innerHTML = uteirstext;
    document.getElementById('greg').innerHTML = gregtext;

}