// ============================================
// FOOTBALL Connection v0.3 - Common JavaScript
// ============================================

// ---- SHOPS DATA ----
const SHOPS_DATA = [
  {
    id: "001",
    name: "BAR ごえん",
    area: "東京都",
    city: "銀座",
    genre: "バー",
    plan: "premium",
    is_reference: false,
    joined_at: "2026-03-01",
    membership_type: "ob_managed",
    football_element: "アメフトOBの谷口真一氏が取締役として参画",
    comment: "ビジネスパーソン・経営者が集う大人の社交場。アメフトで培ったチームワークと情熱をビジネスの場へ。銀座で一番熱い出会いがここにある。",
    football_career: "立教大学Rushers OB・取締役 谷口真一",
    lat: 35.6693,
    lng: 139.7602,
    address: "東京都中央区銀座8丁目2-15 明興ビルB1F",
    tel: "03-6280-6388",
    hours: "月火 19:00-0:00 / 水木金 19:00-5:00",
    holiday: "土曜・日曜",
    url: "https://bar.goencorp.jp/",
    instagram: "https://www.instagram.com/goen_202507/",
    youtube: "",
    staff_comment: "",
    images: [
      "images/shops/goyen_02.jpg",
      "images/shops/goyen_03.jpg",
      "images/shops/goyen_01.jpg"
    ]
  },
  {
    id: "002",
    name: "カラオケバー アポロ計画",
    area: "東京都",
    city: "新橋",
    genre: "カラオケバー",
    plan: "legend",
    is_reference: false,
    joined_at: "2026-03-01",
    membership_type: "exhibit",
    football_element: "大学アメフトチームのユニフォームを展示",
    comment: "新橋の夜を盛り上げるカラオケバー。大学アメフトチームのユニフォームを店内に展示。アメフト仲間との二次会・打ち上げに最高の舞台。マスターはNYCアポロシアターアマチュアナイト優勝の実力派！",
    football_career: "",
    lat: 35.6670,
    lng: 139.7520,
    address: "東京都港区西新橋1丁目16-2 山水ビル2F",
    tel: "",
    hours: "",
    holiday: "",
    url: "",
    instagram: "https://www.instagram.com/apollo_keikaku/",
    youtube: "",
    staff_comment: "新橋エリアでアメフト仲間と盛り上がるなら、まずここ。NYCアポロシアターのアマチュアナイト優勝という伝説のマスターが迎えてくれる、唯一無二のカラオケバーです。二次会・打ち上げ会場として自信を持っておすすめします。",
    images: [
      "images/shops/apollo_drum.jpg",
      "images/shops/apollo_01.jpg",
      "images/shops/apollo_02.jpg"
    ]
  },
  {
    id: "006",
    name: "Trattoria M's",
    area: "東京都",
    city: "蒲田",
    genre: "レストラン",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-11",
    membership_type: "ob_managed",
    football_element: "オーナーが立教大学Rushers OB・フラッグフットボール経験者",
    comment: "蒲田の地下に佇む本格お魚イタリアン。オーナーの三井氏は立教大学Rushers OBで、フラッグフットボールの経験も持つ。アメフト関係者が多く集まる温かいお店。ランチもディナーも絶品のイタリア料理でおもてなし。",
    football_career: "立教大学Rushers OB（三井光秀オーナー）",
    lat: 35.56228387161426,
    lng: 139.72013167116427,
    address: "東京都大田区蒲田5-28-18 京急EXイン B1F",
    tel: "03-3735-8405",
    hours: "月〜木 11:30-14:30 / 17:00-22:30｜金 11:30-14:30 / 17:00-23:00｜土・祝 11:30-15:00 / 17:00-22:30｜祝前日 17:00-23:00",
    holiday: "日曜日",
    url: "https://tabelog.com/tokyo/A1315/A131503/13017754/",
    instagram: "https://www.instagram.com/trattoriams?igsh=MXBxYmhidGdpbnd0YQ%3D%3D&utm_source=qr",
    youtube: "",
    staff_comment: "三井オーナーは立教大学Rushers OBで、フラッグフットボールの経験もあり、アメフト関係者が多く集まるアットホームなお店です。蒲田でイタリアンを食べるなら、ぜひ仲間の店へ。",
    images: [
      "images/shops/trattoria_01.jpg"
    ]
  },
  {
    id: "009",
    name: "むらた",
    area: "東京都",
    city: "岩本町",
    genre: "蛤鍋・とんかつ",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-19",
    membership_type: "ob_managed",
    football_element: "オーナーが立教大学Rushers OB。岩本町のアメフト関係者に愛される、蛤鍋×黒トンカツの名店",
    comment: "どでかい蛤鍋の出汁と、漆黒の黒トンカツ。この二本柱がむらたのすべて。試合後の打ち上げ・懇親会に、岩本町の頼れる一軒。",
    football_career: "立教大学Rushers OB（オーナー）",
    lat: 35.6963,
    lng: 139.7743,
    address: "東京都千代田区岩本町（岩本町駅・秋葉原駅 徒歩圏）",
    tel: "",
    hours: "",
    holiday: "",
    url: "https://retty.me/area/PRE13/ARE11/SUB1101/100000045979/",
    instagram: "",
    youtube: "",
    staff_comment: "どでかい蛤鍋の出汁と黒トンカツのインパクト――むらたはこの二本柱で満足させてくれる岩本町の名店です。アメフト仲間との打ち上げ・懇親会に自信を持っておすすめします。",
    images: [
      "images/shops/murata_01.jpg"
    ]
  },
  {
    id: "008",
    name: "とんかつ大希",
    area: "東京都",
    city: "蒲田",
    genre: "とんかつ",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-18",
    membership_type: "ob_managed",
    football_element: "オーナーが立教大学Rushers OB・フラッグフットボール経験者。蒲田で愛され続ける白トンカツの名店",
    comment: "蒲田が誇る白トンカツの名店。サクッとした衣の中から、しっとり柔らかく肉の旨味があふれる白トンカツは一度食べたらリピート確定。試合後の打ち上げ・懇親会・チーム飲みにも最適。アメフト関係者同士で「蒲田行くならあそこ」と言い合える、仲間に自慢したい一軒。",
    football_career: "立教大学Rushers OB（三井光秀オーナー）",
    lat: 35.5628,
    lng: 139.7160,
    address: "東京都大田区蒲田（蒲田駅・京急蒲田駅 徒歩圏）",
    tel: "",
    hours: "",
    holiday: "",
    url: "",
    instagram: "",
    youtube: "",
    staff_comment: "白トンカツが本当に美味しい一店。オーナーはアメフトOBで、試合後の打ち上げ・懇親会・チーム飲みに使いやすい雰囲気が魅力です。蒲田でとんかつ食べるなら、仲間にここを推したい。",
    images: [
      "images/shops/daiki_01.jpg"
    ]
  },
  {
    id: "010",
    name: "COTTON FIELDS",
    area: "兵庫県",
    city: "芦屋",
    genre: "バー",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-20",
    membership_type: "ob_managed",
    football_element: "大阪体育大学SPARTANS OBが営む、アメフト関係者が集まる芦屋の大人のバー",
    comment: "芦屋の静かな住宅街に佇む隠れ家バー。大阪体育大学SPARTANS OBの中川オーナーをはじめ、近隣在住のアメフトOBが自然と集まる空間。落ち着いた雰囲気の中で仲間との時間を楽しめる一軒。",
    football_career: "大阪体育大学SPARTANS OB（中川伸一オーナー）",
    lat: 34.7316,
    lng: 135.3040,
    address: "兵庫県芦屋市西山町23-21-1階",
    tel: "0797-90-2802",
    hours: "火〜土 18:00〜24:00",
    holiday: "日・月",
    url: "https://x.gd/T9gEZ",
    instagram: "https://www.instagram.com/cotton_fields_ashiya",
    youtube: "",
    staff_comment: "大阪体育大学SPARTANS OBの中川オーナーが営む芦屋の隠れ家バー。近隣在住のアメフトOBが多く集まる関西のアメフトコミュニティの拠点。落ち着いた空間で仲間と語り合える一軒です。",
    images: [
      "images/shops/cotton_01.jpg"
    ]
  },
  {
    id: "011",
    name: "彦根ダイニングジャンゴ",
    area: "滋賀県",
    city: "彦根",
    genre: "レストラン",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-20",
    membership_type: "ob_managed",
    football_element: "2008年ライスボウル優勝・立命館大学PANTHERS元主将が料理長を務める彦根の名店",
    comment: "2008年ライスボウル優勝時の立命館大学PANTHERS元主将・浅尾氏が料理長を務めるダイニング。ランチもディナーも充実、地元食材を活かした料理が揃う。アメフト関係者が琵琶湖そばで集まれる一軒。",
    football_career: "立命館大学PANTHERS元主将・2008年ライスボウル優勝（料理長 浅尾氏）",
    lat: 35.2765,
    lng: 136.2540,
    address: "滋賀県彦根市立花町3-3",
    tel: "0749-49-3557",
    hours: "11:00〜15:00 / 18:00〜22:00",
    holiday: "木曜",
    url: "",
    instagram: "https://www.instagram.com/sun_burger_and_jango",
    youtube: "",
    staff_comment: "2008年ライスボウル優勝時の立命館大学PANTHERS主将・浅尾氏が手がけるカレー&ダイニング。彦根に来たアメフト関係者は必ず訪れてほしい、本物の熱量を感じる一店です。",
    images: [
      "images/shops/django_01.jpg"
    ]
  },
  {
    id: "012",
    name: "喫茶晴龍",
    area: "東京都",
    city: "世田谷",
    genre: "カフェ",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-20",
    membership_type: "ob_managed",
    football_element: "法政大学ORANGE OBが営む、日常使いできる世田谷のカフェ",
    comment: "法政二高・法政大学ORANGE OBの兼益オーナーが営む、上野毛のアットホームなカフェ。朝から夕方まで通えるゆったりした空間。犬OKで、仲間とのんびり過ごすのにぴったり。",
    football_career: "法政大学ORANGE OB（兼益宏行オーナー）",
    lat: 35.6095,
    lng: 139.6373,
    address: "東京都世田谷区上野毛1-17-6",
    tel: "03-6432-1031",
    hours: "10:00〜18:30（LO18:00）",
    holiday: "なし",
    url: "https://www.instagram.com/cafeseiryu_dogsok",
    instagram: "https://www.instagram.com/cafeseiryu_dogsok",
    youtube: "",
    staff_comment: "法政大学ORANGE OBの兼益オーナーが営む、世田谷・上野毛のほっこりカフェ。犬も連れて行けるので、仲間とのんびり語り合う場所としても最高。試合前後の一服にもぴったりです。",
    images: [
      "images/shops/seiryu_01.jpg"
    ]
  },
  {
    id: "013",
    name: "東海亭",
    area: "東京都",
    city: "西麻布",
    genre: "焼肉",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-21",
    membership_type: "ob_managed",
    football_element: "立教大学Rushers OBが経営する西麻布の有名焼肉店",
    comment: "西麻布交差点すぐ。立教大学Rushers OBの高林尚太オーナーが手がける松阪牛炭火焼肉の名店。会食・接待・OB食事会まで、格のある場として機能する西麻布を代表する一軒。",
    football_career: "立教大学Rushers OB（高林尚太オーナー）",
    lat: 35.6619,
    lng: 139.7244,
    address: "東京都港区西麻布（西麻布交差点すぐ）",
    tel: "",
    hours: "",
    holiday: "",
    url: "http://www.toukaitei.jp/",
    instagram: "",
    youtube: "",
    staff_comment: "西麻布の名焼肉店・東海亭。立教大学RushersOBのオーナーが手がける松阪牛炭火焼肉は、会食・接待から仲間との食事まで確実に「外さない」一軒です。知ってると頼られる店。",
    images: [
      "images/shops/toukaitei_01.jpg"
    ]
  },
  {
    id: "014",
    name: "焼肉きゅうこん",
    area: "東京都",
    city: "目黒",
    genre: "焼肉",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-22",
    membership_type: "ob_managed",
    football_element: "法政大学・シルバースターOBの阿部洋介オーナーが営む、人が集い・つながりが生まれる目黒の焼肉店",
    comment: "九州の生産者とのご縁から生まれた目黒の焼肉店。仲間と囲む肉と酒の時間が、いつの間にか特別な記憶になる。OB会・会食・仲間の食事に自信を持っておすすめする一軒。",
    football_career: "法政大学・シルバースターOB（阿部洋介オーナー）",
    lat: 35.6339,
    lng: 139.7154,
    address: "東京都目黒区目黒1丁目5-4 テルレ地下1階",
    tel: "03-6910-4781",
    hours: "17:00〜23:00（LO 22:00）",
    holiday: "不定休",
    url: "https://kyukon.tokyo/",
    instagram: "https://www.instagram.com/kyukon294/?hl=ja",
    youtube: "",
    staff_comment: "法政大学・シルバースターOBの阿部オーナーが手がける目黒の焼肉店。九州生産者との絆が生む上質な肉と、仲間が自然と集まる温かい空気感。OB会・会食・打ち上げに迷わず選べる一軒です。",
    images: [
      "images/shops/kyukon_interior.jpg"
    ]
  },
  {
    id: "015",
    name: "Restaurant TOYO Tokyo",
    area: "東京都",
    city: "日比谷",
    genre: "フレンチ",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-22",
    membership_type: "ob_managed",
    football_element: "法政大学・シルバースターOBの阿部洋介オーナーが手がける、東京ミッドタウン日比谷3階のフレンチレストラン",
    comment: "パリの食体験に感銘を受けたオーナーが日比谷に開いたフレンチレストラン。人生の節目・記念日・接待・会食に迷わず選べる格のある一軒。知っていると頼られる店。",
    football_career: "法政大学・シルバースターOB（阿部洋介オーナー）",
    lat: 35.6737,
    lng: 139.7582,
    address: "東京都千代田区有楽町1-1-2 東京ミッドタウン日比谷3階",
    tel: "03-6273-3340",
    hours: "ランチ 11:30〜14:30（LO 13:00） / ディナー 18:00〜23:00（LO 20:00）",
    holiday: "月曜日",
    url: "https://toyojapan.jp/",
    instagram: "https://www.instagram.com/restaurant.toyo.tokyo/",
    youtube: "",
    staff_comment: "法政大学・シルバースターOBの阿部オーナーが手がける日比谷のフレンチ。東京ミッドタウン日比谷という格のあるロケーションで、大切な人・大切なシーンに外さない特別な一席を提供してくれます。",
    images: [
      "images/shops/toyo_01.jpg"
    ]
  },
  {
    id: "016",
    name: "Over the MOON",
    area: "兵庫県",
    city: "淡路島",
    genre: "宿泊・オーベルジュ",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-23",
    membership_type: "ob_managed",
    football_element: "清風高校・関西学院大学FIGHTERS OBの岩佐オーナーが開いた、淡路島のプライベートリトリート型オーベルジュ",
    comment: "淡路島・野島江崎の絶景夕陽のそばに、サウナ・100インチモニター・バリアフリー完備の全3室限定の隠れ家。OB会旅行・チーム合宿・卒業周年記念に、淡路島で一番の特別な一泊を。",
    football_career: "清風高校・関西学院大学FIGHTERS OB / チェスナットコーチOB（岩佐強司オーナー）",
    lat: 34.599874,
    lng: 134.985970,
    address: "兵庫県淡路市野島江崎283",
    tel: "",
    hours: "要予約（公式サイトよりご確認ください）",
    holiday: "公式サイトよりご確認ください",
    url: "https://awaji-overthemoon.jp/",
    instagram: "https://www.instagram.com/awaji_overthemoon",
    youtube: "",
    staff_comment: "関西学院大学FIGHTERS OBの岩佐オーナーが淡路島に開いたリトリート型オーベルジュ。サウナ・100インチモニター・バリアフリー完備でOB会旅行・チーム合宿に最適。関西のアメフト仲間と旅行に行くなら、淡路島のここを選びたい。",
    images: [
      "images/shops/moon_01.jpg"
    ]
  },
  {
    id: "007",
    name: "Eba",
    area: "東京都",
    city: "東京",
    genre: "ジム・トレーニング",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-12",
    membership_type: "ob_managed",
    football_element: "大学時代アメフトマネージャー・現在フットボール選手の指導を行うトレーナー",
    comment: "大学時代にアメフトのマネージャーとして活躍し、現在はフットボール選手の身体づくりをサポートするパーソナルトレーナー。アスリートのパフォーマンス向上から健康増進まで幅広く対応。",
    football_career: "大学アメフト部マネージャー・フットボール選手トレーナー",
    lat: 35.6762,
    lng: 139.6503,
    address: "東京都",
    tel: "",
    hours: "不定休",
    holiday: "",
    url: "",
    instagram: "https://www.instagram.com/_eba____/",
    youtube: "https://youtube.com/@tokyo-fitness",
    staff_comment: "Ebaさんは大学時代のアメフトマネージャー経験を活かし、現在はフットボール選手の身体づくりを専門にサポートするトレーナーです。競技者目線のトレーニング指導は本物です。",
    images: [
      "images/shops/eba_01.jpg"
    ]
  },
  {
    id: "018",
    name: "酒処 富川",
    area: "東京都",
    city: "渋谷",
    genre: "居酒屋",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-25",
    membership_type: "ob_managed",
    football_element: "日本体育大学Golden Bears・シルバースターOBのオーナーが経営する渋谷の昭和大衆居酒屋",
    comment: "渋谷駅徒歩0分。短冊メニューとホッピーが並ぶ昭和の大衆居酒屋。日体大Golden Bears・シルバースターOBの河合オーナーが営む、渋谷で飲むなら知っておきたい本物の一軒。",
    football_career: "日本体育大学Golden Bears / シルバースターOB（河合幹夫オーナー）",
    lat: 35.6580,
    lng: 139.7016,
    address: "東京都渋谷区（渋谷駅徒歩0分）",
    tel: "",
    hours: "詳細は公式サイトをご確認ください",
    holiday: "",
    url: "https://sakedokoro-tomikawa.com/",
    instagram: "",
    youtube: "",
    staff_comment: "渋谷駅を出てすぐ、昭和の空気がそのまま残る大衆居酒屋。日体大Golden BearsとシルバースターOBの河合オーナーが迎える富川は、渋谷で「気軽に入れて長居したくなる」を体現した一軒。アメフト仲間との打ち上げや2次会にも最高です。",
    images: [
      "images/shops/tomikawa_01.jpg"
    ],
    detail_page: "shop-detail-tomikawa.html"
  },
  {
    id: "020",
    name: "Trattoria Trentasei",
    area: "滋賀県",
    city: "大津",
    genre: "イタリアン",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-28",
    membership_type: "ob_managed",
    football_element: "立命館大学パンサーズOBの中野貴裕オーナー・伴正和支配人が営む本格イタリアン。1994年大学日本一メンバー。Xリーグ・関西学生リーグの運営にも携わる",
    comment: "アメフトの試合会場から生まれた大津の本格トラットリア。Tボーンステーキ＆パスタを看板に、Xリーグ・関西学生リーグ運営チームが2024年9月にオープン。フィールドと厨房、両方の熱量が宿る一軒。",
    football_career: "立命館大学パンサーズOB・1994年大学日本一（中野貴裕オーナー：4回生 / 伴正和支配人：3回生）",
    lat: 35.0097,
    lng: 135.8598,
    address: "滋賀県大津市島の関1-10 中央公営団地102",
    tel: "077-526-7070",
    hours: "12:00〜21:00（週末・祝前日は〜23:00）",
    holiday: "不定休",
    url: "https://www.hotpepper.jp/strJ004402082/",
    instagram: "https://www.instagram.com/trattoriatrentasei",
    youtube: "",
    staff_comment: "立命館大学パンサーズOBで1994年大学日本一メンバーの中野貴裕オーナー・伴正和支配人が大津に構えた本格イタリアン。試合会場のキッチンカーから生まれた食への情熱がこの店に宿っています。Tボーンステーキ×パスタ×バリスタコーヒー、大津で食べるなら知っておきたい一軒です。",
    images: [
      "images/shops/trentasei_01.jpg"
    ],
    detail_page: "shop-detail-trentasei.html"
  },
  {
    id: "019",
    name: "割烹 美乃",
    area: "東京都",
    city: "浜松町・大門",
    genre: "居酒屋",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-27",
    membership_type: "ob_managed",
    football_element: "青山学院大学LIGHTNINGのOB・上垣雅士氏が二代目を継承した浜松町・大門の老舗大衆割烹",
    comment: "大門駅徒歩1分。昭和から続く本格割烹の味を二代目が守り続ける。青学LIGHTNINGのOBオーナーが切り盛りする、浜松町で飲むなら知っておきたい老舗の一軒。",
    football_career: "青山学院大学LIGHTNING OB（上垣雅士・二代目オーナー）",
    lat: 35.6553,
    lng: 139.7534,
    address: "東京都港区浜松町（大門駅徒歩1分）",
    tel: "03-5777-1077",
    hours: "詳細は公式サイト・お電話にてご確認ください",
    holiday: "",
    url: "https://mino-tokyo.gorp.jp/",
    instagram: "",
    youtube: "",
    staff_comment: "昭和から続く老舗割烹の味を、青学LIGHTNINGのOB二代目が誠実に守り続けています。畳の座敷、丁寧な和の惣菜——大門・浜松町で「本物の割烹飯」が食べたいときの一択です。",
    images: [
      "images/shops/mino_01.jpg"
    ],
    detail_page: "shop-detail-mino.html"
  },
  {
    id: "021",
    name: "スナック みどり",
    area: "東京都",
    city: "世田谷・深沢",
    genre: "スナック",
    plan: "free",
    is_reference: false,
    joined_at: "2026-04-17",
    membership_type: "ob_managed",
    football_element: "都立三田高校アメリカンフットボール部 BLUE CRUSHERS OBの亀井貴司オーナーが営む世田谷・深沢の大人のスナック",
    comment: "深沢3丁目のビル2階に灯る、ひとみんママが迎える隠れ家スナック。都立三田高BLUE CRUSHERSのOBオーナーが手がける、仕事終わりにほっとできる一軒。",
    football_career: "都立三田高校アメリカンフットボール部 BLUE CRUSHERS OB（亀井 貴司オーナー）",
    lat: 35.6285,
    lng: 139.6640,
    address: "東京都世田谷区深沢3-4-1 ビル2階",
    tel: "080-7406-0860",
    hours: "19:00〜24:00",
    holiday: "日曜・祝日",
    url: "https://kameizoen.com/",
    instagram: "https://www.instagram.com/snack_midori_2023",
    youtube: "",
    staff_comment: "都立三田高校BLUE CRUSHERSのOBが、造園のプロとして独立したのち、地元・世田谷で営むスナック。ひとみんママの気取らない温かさが初めての場所でも「いつもの店」にしてくれます。試合後の打ち上げや、OB・OG会の2次会にぜひ。",
    images: [
      "images/shops/midori_main.jpg"
    ],
    detail_page: "shop-detail-midori.html"
  },
  {
    id: "022",
    name: "Protein Nation",
    area: "東京都",
    city: "原宿",
    genre: "その他",
    plan: "free",
    is_reference: false,
    joined_at: "2026-04-21",
    membership_type: "ob_managed",
    football_element: "米国Bentley Universityアメフト部OB・品川CCブルザイズ（社会人X1Super挑戦チーム）OBの外山裕之オーナーが立ち上げた東京発プロテイン&サプリメント専門ブランド（株式会社スーパープロテインハウス）",
    comment: "米国の大学でフィールドを駆け、帰国後は品川CCブルザイズで競技を続けたオーナーが本気で作ったプロテイン&サプリメントブランド。選手目線で設計された製品が揃う。ECサイトは24時間対応。FOOTBALL CONNECTION限定5%OFFコード「CONNECTION」あり。",
    football_career: "米国Bentley Universityアメフト部 OB ／ 品川CCブルザイズ OB（外山 裕之オーナー）",
    lat: 35.6700,
    lng: 139.7027,
    address: "東京都（原宿エリア）",
    tel: "090-1738-5884",
    hours: "24時間（ECサイト）",
    holiday: "なし",
    url: "https://theproteinnationjp.com/",
    instagram: "https://www.instagram.com/theproteinnation.jp/",
    youtube: "",
    staff_comment: "飲食店だけが仲間の店じゃない。米国Bentley Universityのアメフト部を経て、品川CCブルザイズでもプレーした外山オーナーが本気で作ったプロテイン&サプリメントブランド。選手の身体を知るオーナーだからこそ作れる、信頼できる製品が揃う。チームへのギフトにも最適。",
    images: [
      "images/shops/proteinnation_01.jpg"
    ],
    detail_page: "shop-detail-proteinnation.html"
  },
  {
    id: "023",
    name: "Oh!huggy!!横濱元町店",
    area: "神奈川県",
    city: "横浜・元町",
    genre: "カフェ",
    plan: "free",
    is_reference: false,
    joined_at: "2026-05-07",
    membership_type: "exhibit",
    football_element: "立教大学出身のオーナーがフットボール観戦歴100試合以上の本物のファン。店内に1990〜2000年代のTouchdown・フットボールマガジンのバックナンバーを展示",
    comment: "元町パセオ2Fに咲くフラワーおはぎの専門店。立教大学出身・観戦歴100試合以上の本物のフットボールファンが営み、店内にはTouchdownやフットボールマガジンの貴重なバックナンバーが並ぶ。顧客への手土産や仲間へのギフトにも最高の一箱。",
    football_career: "立教大学出身・フットボール観戦歴100試合以上のファン（石塚 陽子オーナー）",
    lat: 35.4437,
    lng: 139.6430,
    address: "〒231-0861 神奈川県横浜市中区元町1丁目50 元町パセオ 2F 205",
    tel: "080-3545-0417",
    hours: "火〜日 10:30〜17:00",
    holiday: "月曜日",
    url: "",
    instagram: "https://www.instagram.com/oh_huggy_yokohama_motomachi",
    youtube: "",
    staff_comment: "アメフト仲間への贈り物に迷ったら、ここに来い。元町パセオ2Fに構える花おはぎ専門店・Oh!huggy!!のオーナー石塚さんは立教大学出身のフットボールファン。店内にはTouchdown・フットボールマガジンの貴重なバックナンバーが並ぶ。顧客への手土産・差し入れとして、仲間が喜ぶ一箱を持っていこう。",
    images: [
      "images/shops/ohhuggy_01.jpg"
    ],
    detail_page: "shop-detail-ohhuggy.html"
  },
  {
    id: "017",
    name: "Restrant&Bar ジローズ・ジュニア",
    area: "大阪府",
    city: "梅田・北新地",
    genre: "レストラン",
    plan: "free",
    is_reference: false,
    joined_at: "2026-03-24",
    membership_type: "ob_managed",
    football_element: "関西アメフト界で誰もが知る伝説の名店。関西学院大学FIGHTERS OB・元DBコーチの徳永真介オーナーが経営",
    comment: "関西アメフト界で知らない人はいない、北新地の伝説的なRestrant&Bar。シーズンの打ち上げ、引退後の再会、全国大会の前夜——アメフト人の節目にはいつもここがあった。",
    football_career: "関西学院大学FIGHTERS OB・元DBコーチ（徳永真介オーナー）",
    lat: 34.6954,
    lng: 135.4965,
    address: "大阪府大阪市北区曽根崎新地1-1-40 ジロービル3F",
    tel: "06-6344-2601",
    hours: "月〜金 18:00〜25:30｜土 18:00〜24:30",
    holiday: "日曜・祝日",
    url: "https://www.girondsjr.com/",
    instagram: "https://www.instagram.com/girondsjr",
    youtube: "",
    staff_comment: "関西学院大学FIGHTERS OBで、引退後は母校でDBコーチも務めた徳永オーナーが北新地に構えるRestrant&Bar。アメフトで培った真剣さと誠実さがそのまま料理とサービスに宿る、大阪の隠れた名店です。",
    images: [
      "images/shops/girozu_01.jpg"
    ]
  }
];

// ---- SHOP COUNT (is_reference除く) ----
const SHOP_COUNT = SHOPS_DATA.filter(s => !s.is_reference).length;

// ---- EVENTS DATA ----
const EVENTS_DATA = [
  {
    id: "e001",
    title: "NFL プレーオフ観戦会",
    date: "2025年2月1日（土）18:00〜",
    shop_id: "001",
    shop_name: "BAR ごえん",
    area: "東京・銀座",
    description: "NFLプレーオフをアメフト仲間と観戦！入場無料、ワンドリンクオーダー制。関係者・応援者どなたでも歓迎。予約優先。",
    type: "観戦会"
  },
  {
    id: "e002",
    title: "アメフトOB交流会 in 新橋",
    date: "2025年2月15日（土）19:00〜",
    shop_id: "002",
    shop_name: "カラオケバー アポロ計画",
    area: "東京・新橋",
    description: "関東エリアのアメフト・フラッグ関係者が集まる交流イベント。現役選手・OB/OG・スタッフ・家族、みなさん歓迎！",
    type: "交流会"
  },
  {
    id: "e003",
    title: "スーパーボウル朝観戦パーティー",
    date: "2025年2月10日（月）9:00〜（朝観戦）",
    shop_id: "001",
    shop_name: "BAR ごえん",
    area: "東京・銀座",
    description: "スーパーボウルを仲間と朝から観戦！モーニングセット付き。先着20名限定。",
    type: "観戦会"
  }
];

// ---- UTILITY FUNCTIONS ----

function getMembershipBadge(type) {
  if (type === 'ob_managed') {
    return `<span class="badge badge-ob">🏈 OB/OG経営・参画</span>`;
  } else {
    return `<span class="badge badge-exhibit">🏟️ アメフト展示あり</span>`;
  }
}

function getPlanBadge(plan) {
  if (plan === 'legend') {
    return `<span class="badge badge-legend">👑 LEGEND</span>`;
  } else if (plan === 'premium') {
    return `<span class="badge badge-premium">⭐ プレミアム</span>`;
  } else if (plan === 'free') {
    return `<span class="badge badge-free">✅ フリー</span>`;
  } else {
    return `<span class="badge badge-standard">その他</span>`;
  }
}

function getGenreIcon(genre) {
  const icons = {
    'バー': '🍸',
    'カラオケバー': '🎤',
    '居酒屋': '🍺',
    'レストラン': '🍽️',
    'カフェ': '☕',
    'カフェ・喫茶': '☕',
    'ジム・トレーニング': '💪',
    'マッサージ': '🤸',
    '美容': '✂️',
    '焼肉': '🥩',
    'フレンチ': '🍷',
    'とんかつ': '🍱',
    '蛤鍋・とんかつ': '🍲',
    'イタリアン': '🍝',
    '割烹': '🍶',
    '大衆割烹': '🍶',
    'スナック': '🍸'
  };
  return icons[genre] || '🏪';
}

function getEventTypeBadge(type) {
  if (type === '観戦会') {
    return `<span class="badge badge-event-watch">📺 ${type}</span>`;
  } else {
    return `<span class="badge badge-event">🤝 ${type}</span>`;
  }
}

function getShopById(id) {
  return SHOPS_DATA.find(s => s.id === id);
}

// ---- SHOP DETAIL URL RESOLVER ----
// 専用ページが存在する店舗はそちらへ、それ以外は汎用ページへ
const SHOP_DETAIL_PAGES = {
  "001": "shop-detail-goyen.html",
  "002": "shop-detail-apollo.html",
  "006": "shop-detail-trattoria.html",
  "007": "shop-detail-eba.html",
  "008": "shop-detail-daiki.html",
  "009": "shop-detail-murata.html",
  "010": "shop-detail-cotton.html",
  "011": "shop-detail-django.html",
  "012": "shop-detail-seiryu.html",
  "013": "shop-detail-toukaitei.html",
  "014": "shop-detail-kyukon.html",
  "015": "shop-detail-toyo.html",
  "016": "shop-detail-moon.html",
  "017": "shop-detail-girozu.html",
  "018": "shop-detail-tomikawa.html",
  "019": "shop-detail-mino.html",
  "020": "shop-detail-trentasei.html",
  "021": "shop-detail-midori.html",
  "022": "shop-detail-proteinnation.html",
  "023": "shop-detail-ohhuggy.html"
};
function getShopDetailUrl(shop) {
  return SHOP_DETAIL_PAGES[shop.id] || `shop-detail.html?id=${shop.id}`;
}

// ---- SHOP CARD BUILDER ----
function buildShopCard(shop) {
  const icon = getGenreIcon(shop.genre);
  const isLegend = shop.plan === 'legend';
  const careerHtml = shop.football_career
    ? `<p class="shop-career" style="font-size:0.82rem;color:#86efac;margin-bottom:8px;">👤 ${shop.football_career}</p>`
    : '';
  const thumbHtml = (shop.images && shop.images.length > 0)
    ? `<div style="width:100%;height:180px;overflow:hidden;border-radius:var(--radius) var(--radius) 0 0;margin-bottom:0;">
        <img src="${shop.images[0]}" alt="${shop.name}" style="width:100%;height:100%;object-fit:cover;">
       </div>`
    : `<div style="width:100%;height:120px;background:linear-gradient(135deg,rgba(212,160,23,0.15),rgba(26,107,60,0.15));border-radius:var(--radius) var(--radius) 0 0;display:flex;align-items:center;justify-content:center;font-size:2.5rem;">
        ${icon}
       </div>`;
  return `
    <div class="card shop-card fade-in ${isLegend ? 'legend-card' : ''}" style="overflow:hidden;">
      ${thumbHtml}
      <div class="card-body">
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
          ${getPlanBadge(shop.plan)}
          ${getMembershipBadge(shop.membership_type)}
          <span class="badge badge-genre">${icon} ${shop.genre}</span>
        </div>
        <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:6px;line-height:1.3;">${shop.name}</h3>
        <p style="font-size:0.82rem;color:var(--gray);margin-bottom:8px;">📍 ${shop.area} ${shop.city}</p>
        ${careerHtml}
        <p style="font-size:0.82rem;color:var(--gold);margin-bottom:10px;">🏈 ${shop.football_element}</p>
        <p style="font-size:0.88rem;color:var(--light-gray);line-height:1.6;margin-bottom:16px;">${shop.comment}</p>
        <a href="${getShopDetailUrl(shop)}" class="btn btn-primary btn-sm" style="width:100%;justify-content:center;">詳細を見る →</a>
      </div>
    </div>
  `;
}

// ---- EVENT CARD BUILDER ----
function buildEventCard(event) {
  return `
    <div class="card fade-in">
      <div class="card-body">
        <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
          ${getEventTypeBadge(event.type)}
        </div>
        <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:10px;">${event.title}</h3>
        <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:12px;">
          <p style="font-size:0.85rem;color:var(--gold);">📅 ${event.date}</p>
          <p style="font-size:0.85rem;color:var(--gray);">🏪 ${event.shop_name}</p>
          <p style="font-size:0.85rem;color:var(--gray);">📍 ${event.area}</p>
        </div>
        <p style="font-size:0.88rem;color:var(--light-gray);line-height:1.6;">${event.description}</p>
      </div>
    </div>
  `;
}

// ---- HEADER MOBILE MENU ----
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
    });
  });
}

// ---- SCROLL ANIMATION ----
function initScrollAnimation() {
  // スマホでは即表示（CSSで対応済み）
  if (window.innerWidth <= 480) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ---- ACTIVE NAV ----
function setActiveNav() {
  const path = window.location.pathname;
  const file = window.location.href.split('/').pop().split('?')[0];
  document.querySelectorAll('.header-nav a, .mobile-nav a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('?')[0];
    if (href && (href === file || (file === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollAnimation();
  setActiveNav();
});
