const shishamoSongs = [
  // 卒業制作
  { title: "宿題が終わらない", album: "卒業制作" },
  { title: "お菓子作り", album: "卒業制作" },
  { title: "君に告白した理由", album: "卒業制作" },
  { title: "夢のはなし", album: "卒業制作" },
  { title: "絆創膏", album: "卒業制作" },
  { title: "熱さまシート", album: "卒業制作" },
  { title: "冬の唄", album: "卒業制作" },
  { title: "第3ボタン", album: "卒業制作" },
  // SHISHAMO 1
  { title: "僕に彼女ができたんだ", album: "SHISHAMO 1" },
  { title: "行きたくない", album: "SHISHAMO 1" },
  { title: "あの子のバラード", album: "SHISHAMO 1" },
  { title: "こんな僕そんな君", album: "SHISHAMO 1" },
  { title: "休日", album: "SHISHAMO 1" },
  { title: "がたんごとん", album: "SHISHAMO 1" },
  { title: "深夜のラジオ", album: "SHISHAMO 1" },
  { title: "バンドマン", album: "SHISHAMO 1" },
  { title: "サブギターの歌", album: "SHISHAMO 1" },
  { title: "君との事", album: "SHISHAMO 1" },
  { title: "恋する", album: "SHISHAMO 1" },
  // 君と夏フェス
  { title: "脇役", album: "君と夏フェス" },
  { title: "彼女の日曜日", album: "君と夏フェス" },
  { title: "君と夏フェス", album: "君と夏フェス" },
  // 量産型彼氏
  { title: "転校の歌", album: "量産型彼氏" },
  { title: "きみと話せないのは", album: "量産型彼氏" },
  { title: "量産型彼氏", album: "量産型彼氏" },
  // SHISHAMO 2
  { title: "僕、実は", album: "SHISHAMO 2" },
  { title: "ともだち", album: "SHISHAMO 2" },
  { title: "恋愛休暇", album: "SHISHAMO 2" },
  { title: "昼夜逆転", album: "SHISHAMO 2" },
  { title: "デートプラン", album: "SHISHAMO 2" },
  { title: "花", album: "SHISHAMO 2" },
  { title: "さよならの季節", album: "SHISHAMO 2" },
  // 熱帯夜
  { title: "熱帯夜", album: "熱帯夜" },
  { title: "生きるガール", album: "熱帯夜" },
  // 君とゲレンデ
  { title: "君とゲレンデ", album: "君とゲレンデ" },
  { title: "女ごころ", album: "君とゲレンデ" },
  // SHISHAMO 3
  { title: "ごめんね、恋心", album: "SHISHAMO 3" },
  { title: "中庭の少女たち", album: "SHISHAMO 3" },
  { title: "笑顔のとなり", album: "SHISHAMO 3" },
  { title: "手のひら宇宙", album: "SHISHAMO 3" },
  { title: "推定移動距離", album: "SHISHAMO 3" },
  { title: "旅がえり", album: "SHISHAMO 3" },
  { title: "みんなのうた", album: "SHISHAMO 3" },
  // 夏の恋人
  { title: "夏の恋人", album: "夏の恋人" },
  { title: "恋に落ちる音が聞こえたら", album: "夏の恋人" },
  // SHISHAMO 4
  { title: "好き好き！", album: "SHISHAMO 4" },
  { title: "すれちがいのデート", album: "SHISHAMO 4" },
  { title: "終わり", album: "SHISHAMO 4" },
  { title: "恋", album: "SHISHAMO 4" },
  { title: "音楽室は秘密基地", album: "SHISHAMO 4" },
  { title: "きっとあの漫画のせい", album: "SHISHAMO 4" },
  { title: "メトロ", album: "SHISHAMO 4" },
  { title: "魔法のように", album: "SHISHAMO 4" },
  { title: "明日も", album: "SHISHAMO 4" },
  // BYE BYE
  { title: "BYE BYE", album: "BYE BYE" },
  { title: "笑顔のおまじない", album: "BYE BYE" },
  // ほら、笑ってる
  { title: "ほら、笑ってる", album: "ほら、笑ってる" },
  { title: "サボテン", album: "ほら、笑ってる" },
  // 水色の日々
  { title: "水色の日々", album: "水色の日々" },
  { title: "ドキドキ", album: "水色の日々" },
  { title: "ロマンチックに恋して", album: "水色の日々" },
  // SHISHAMO 5
  { title: "ねぇ、", album: "SHISHAMO 5" },
  { title: "あなたと私の間柄", album: "SHISHAMO 5" },
  { title: "夢で逢う", album: "SHISHAMO 5" },
  { title: "あの娘の城", album: "SHISHAMO 5" },
  { title: "同窓会", album: "SHISHAMO 5" },
  { title: "私の夜明け", album: "SHISHAMO 5" },
  // OH！
  { title: "OH！", album: "OH！" },
  { title: "ハネノバシ", album: "OH！" },
  { title: "許してあげるから", album: "OH！" },
  // 君の隣にいたいから
  { title: "君の隣にいたいから", album: "君の隣にいたいから" },
  { title: "またね", album: "君の隣にいたいから" },
  { title: "君の大事にしてるもの", album: "君の隣にいたいから" },
  // 曇り夜空は雨の予報
  { title: "曇り夜空は雨の予報", album: "曇り夜空は雨の予報" },
  // SHISHAMO 6
  { title: "天使みたい", album: "SHISHAMO 6" },
  { title: "ひっちゃかめっちゃか", album: "SHISHAMO 6" },
  { title: "二酸化炭素", album: "SHISHAMO 6" },
  { title: "忘れてやるもんか", album: "SHISHAMO 6" },
  { title: "今だけは", album: "SHISHAMO 6" },
  { title: "真夜中、リビング、電気を消して。", album: "SHISHAMO 6" },
  { title: "フェイバリットボーイ", album: "SHISHAMO 6" },
  { title: "キスをちょうだい", album: "SHISHAMO 6" },
  // 明日はない
  { title: "明日はない", album: "明日はない" },
  // 妄想サマー
  { title: "妄想サマー", album: "妄想サマー" },
  // 人間
  { title: "人間", album: "人間" },
  // 明日の夜は何が食べたい？
  { title: "明日の夜は何が食べたい？", album: "明日の夜は何が食べたい？" },
  // 君の目も鼻も口も顎も眉も寝ても覚めても超素敵!!!
  { title: "君の目も鼻も口も顎も眉も寝ても覚めても超素敵!!!", album: "君の目も鼻も口も顎も眉も寝ても覚めても超素敵!!!" },
  // 壊したんだ
  { title: "壊したんだ", album: "壊したんだ" },
  // 中毒
  { title: "中毒", album: "中毒" },
  // SHISHAMO 7
  { title: "警報", album: "SHISHAMO 7" },
  { title: "かわいい", album: "SHISHAMO 7" },
  { title: "ドライブ", album: "SHISHAMO 7" },
  { title: "はなればなれでも", album: "SHISHAMO 7" },
  { title: "ごめんね", album: "SHISHAMO 7" },
  { title: "通り雨", album: "SHISHAMO 7" },
  { title: "夢で逢えても", album: "SHISHAMO 7" },
  // マフラー
  { title: "マフラー", album: "マフラー" },
  // ミルクコーヒー
  { title: "ミルクコーヒー", album: "ミルクコーヒー" },
  // ブーツを鳴らして - EP
  { title: "intro", album: "ブーツを鳴らして - EP" },
  { title: "ブーツを鳴らして", album: "ブーツを鳴らして - EP" },
  // 狙うは君のど真ん中
  { title: "狙うは君のど真ん中", album: "狙うは君のど真ん中" },
  // 春に迷い込んで
  { title: "春に迷い込んで", album: "春に迷い込んで" },
  // ハッピーエンド
  { title: "ハッピーエンド", album: "ハッピーエンド" },
  // なんとなく。
  { title: "なんとなく。", album: "なんとなく。" },
  // きらきら
  { title: "きらきら", album: "きらきら" },
  // 夏恋注意報
  { title: "夏恋注意報", album: "夏恋注意報" },
  // わたしの宇宙
  { title: "わたしの宇宙", album: "わたしの宇宙" },
  // 私のままで
  { title: "私のままで", album: "私のままで" },
  // 最高速度
  { title: "最高速度", album: "最高速度" },
  // SHISHAMO 9
  { title: "会えないのに", album: "SHISHAMO 9" },
  { title: "犬ころ", album: "SHISHAMO 9" },
  { title: "ハリボテ", album: "SHISHAMO 9" },
  { title: "溺れてく", album: "SHISHAMO 9" },
  { title: "恋じゃなかったら", album: "SHISHAMO 9" }
];
