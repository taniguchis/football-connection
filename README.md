# 🏈 FOOTBALL Connection — MVP v0.3

> アメフト・フラッグフットボールに関わる人たちが経営・参画する<br>
> 飲食店・サービス業を全国でつなぐプラットフォーム

**Operated by TSUMUGU合同会社**

---

## 📌 コアコンセプト

**"せっかくなら、アメフト関係者の店に行こう。"**

アメフト・フラッグ関係者による、関係者のための経済圏をつくる。

---

## ✅ 実装済み機能（v0.3）

| ページ | ファイル | 概要 |
|--------|----------|------|
| トップ | `index.html` | ヒーロー・コンセプト・PICKUP・イベント・プラン（アーリーバード）・ポリシー |
| 店舗・サービス一覧 | `shops.html` | Leaflet地図＋カードグリッド＋4軸フィルター（キーワード/エリア/業種/プラン） |
| 店舗詳細 | `shop-detail.html` | 関係者情報・営業情報（空欄非表示）・外部リンク・Notion編集リンク・合言葉特典 |
| イベント | `events.html` | イベントカード＋タイプ別フィルタータブ |
| 加盟申込 | `apply.html` | アーリーバード帯・プラン比較表（通常/特別価格）・申込フォーム |

---

## 🔗 ページURL・パラメータ

| URL | 説明 |
|-----|------|
| `index.html` | トップページ |
| `shops.html` | 店舗・サービス一覧（地図＋フィルター） |
| `shop-detail.html?id=001` | 店舗詳細（id=001〜005） |
| `events.html` | イベント一覧 |
| `apply.html` | 加盟申込フォーム |

---

## 📊 店舗データ（v0.4）

| id | 店舗名 | エリア | 業種 | プラン | 加盟区分 | 詳細ページ |
|----|--------|--------|------|--------|---------|-----------|
| 001 | BAR ごえん | 東京・銀座 | バー | premium | ob_managed | shop-detail-goyen.html |
| 002 | カラオケバー アポロ計画 | 東京・新橋 | カラオケバー | legend | exhibit | shop-detail-apollo.html |
| 006 | Trattoria M's | 東京・蒲田 | レストラン | free | ob_managed | shop-detail-trattoria.html |
| 007 | とんかつ大希 | 東京・蒲田 | とんかつ | free | ob_managed | shop-detail-daiki.html |
| 008 | むらた | 東京・岩本町 | 鍋・とんかつ | free | ob_managed | shop-detail-murata.html |
| 009 | 東海亭 | 東京 | 中華料理 | free | ob_managed | shop-detail-toukaitei.html |
| 010 | 焼肉きゅうこん | 東京・目黒 | 焼肉 | free | ob_managed | shop-detail-kyukon.html |
| 011 | TOYO Tokyo | 東京・日比谷 | フレンチ | free | ob_managed | shop-detail-toyo.html |
| 012 | 喫茶晴龍 | 東京・上野毛 | カフェ | free | ob_managed | shop-detail-seiryu.html |
| 013 | COTTON FIELDS | 東京 | アメリカン | free | ob_managed | shop-detail-cotton.html |
| 014 | 彦根ダイニングジャンゴ | 滋賀・彦根 | レストラン | free | ob_managed | shop-detail-django.html |
| 015 | Over the MOON | 兵庫・淡路島 | 宿泊・レストラン | free | ob_managed | shop-detail-moon.html |
| 016 | Ebaトレーナー | 東京 | パーソナルトレーニング | free | ob_managed | shop-detail-eba.html |
| 017 | Restrant&Bar ジローズ・ジュニア | 大阪・北新地 | レストラン&バー | free | ob_managed | shop-detail-girozu.html |
| 018 | 酒処 富川 | 東京・渋谷 | 居酒屋 | free | ob_managed | shop-detail-tomikawa.html |
| 019 | 割烹 美乃 | 東京・浜松町/大門 | 大衆割烹 | free | ob_managed | shop-detail-mino.html |
| 020 | Trattoria Trentasei | 滋賀・大津 | イタリアン | free | ob_managed | shop-detail-trentasei.html |
| 021 | スナック みどり | 東京・世田谷深沢 | スナック | free | ob_managed | shop-detail-midori.html |
| 022 | Protein Nation | 東京・原宿 | その他（プロテイン専門） | free | ob_managed | shop-detail-proteinnation.html |
| 023 | Oh!huggy!!横濱元町店 | 神奈川・横浜元町 | カフェ（花おはぎ） | free | exhibit | shop-detail-ohhuggy.html |

---

## 💰 料金プラン

| プラン | アーリーバード（〜2026年6月30日） | 通常料金 |
|--------|----------------------------------|---------|
| スタンダード | **無料** | 月額 ¥3,000（税込） |
| プレミアム | **月額 ¥2,000（税込）** | 月額 ¥5,000（税込） |

---

## 🏈 加盟条件

**優先条件①**（メイン）
アメフト・フラッグフットボールのOB/OG・現役・コーチ・スタッフ・マネージャー・家族・パートナー企業が経営または参画していること

**補完条件②**
店内にアメフト・フラッグに関連する展示・写真・環境があること

**対象業種**
飲食店（バー・居酒屋・レストラン・カフェ等）および
サービス業（マッサージ・ジム・パーソナルトレーニング・美容等）

---

## 📁 ファイル構成

```
/
├── index.html                   # トップページ
├── shops.html                   # 店舗・サービス一覧
├── events.html                  # イベント一覧
├── apply.html                   # 加盟申込フォーム
├── referral.html                # 紹介プログラム
├── terms.html                   # 利用規約
├── tokusho.html                 # 特商法表記
├── shop-detail-goyen.html       # BAR ごえん
├── shop-detail-apollo.html      # カラオケバー アポロ計画
├── shop-detail-trattoria.html   # Trattoria M's
├── shop-detail-daiki.html       # とんかつ大希
├── shop-detail-murata.html      # むらた
├── shop-detail-toukaitei.html   # 東海亭
├── shop-detail-kyukon.html      # 焼肉きゅうこん
├── shop-detail-toyo.html        # TOYO Tokyo
├── shop-detail-seiryu.html      # 喫茶晴龍
├── shop-detail-cotton.html      # COTTON FIELDS
├── shop-detail-django.html      # 彦根ダイニングジャンゴ
├── shop-detail-moon.html        # Over the MOON
├── shop-detail-eba.html         # Ebaトレーナー
├── shop-detail-girozu.html      # Restrant&Bar ジローズ・ジュニア
├── shop-detail-tomikawa.html    # 酒処 富川（渋谷）★2026-03-25追加
├── shop-detail-mino.html         # 割烹 美乃（浜松町・大門）★2026-03-27追加
├── shop-detail-trentasei.html    # Trattoria Trentasei（滋賀・大津）★2026-03-28追加
├── shop-detail-midori.html       # スナック みどり（東京・世田谷深沢）★2026-04-17追加
├── shop-detail-proteinnation.html # Protein Nation（東京・原宿）★2026-04-21追加
├── shop-detail-ohhuggy.html      # Oh!huggy!!横濱元町店（神奈川・横浜元町）★2026-05-07追加
├── css/
│   └── style.css                # グローバルスタイル
├── js/
│   └── common.js                # 共通JS・全店舗データ・イベントデータ
└── images/
    ├── logo-transparent.png
    ├── logo-square.png
    └── shops/                   # 各店舗画像
```

---

## 🎨 デザインシステム

| 要素 | 値 |
|------|----|
| メインカラー | ダークネイビー `#0A1628` |
| アクセント | グリーン `#1A6B3C` |
| ハイライト | ゴールド `#D4A017` |
| 日本語フォント | Noto Sans JP |
| 英字フォント | Oswald（見出し・数字） |

---

## 📋 Notion連携仕様（現状）

- 店舗詳細ページに「Notionで編集する」リンクを設置（現在はダミー）
- 実運用では加盟店ごとにNotionページを発行し、編集権限をメールで付与
- オーナーがNotion更新 → 運営が`js/common.js`内データに反映
- 将来的にNotion API自動連携を想定した構造

---

## 🚧 今後の開発推奨事項

- [ ] フォーム送信機能（Formspree / Netlify Forms等）
- [ ] Notion API連携による店舗ページ自動更新
- [ ] Google Analytics / GTM実装
- [ ] 公式SNSアカウントURL設定（apply.htmlのXリンク）
- [ ] 店舗写真・OGP画像の本格実装
- [ ] SEO強化（構造化データ・サイトマップ）
- [ ] 加盟店マイページ機能
- [ ] イベント予約システム連携（Peatix等）

---

*© 2025 FOOTBALL Connection. Operated by TSUMUGU合同会社*
