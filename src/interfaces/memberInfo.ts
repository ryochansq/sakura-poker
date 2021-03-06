import { Member, Position, Club, Home, Uniform, Other } from 'interfaces/index'

export type MemberInfo = {
  name: Member,   // 名前
  kana: string,
  transfer: number | '初期メンバー',     // 入学・転入年度
  graduate: number,  // 卒業年度（学年）
  positions: Position[],
  clubs: Club[],
  birthMonth: number,
  birthDay: string,
  home: Home,
  uniform: Uniform,
  others: Other[]
}

export const memberInfo: MemberInfo[] = [
  {
    name: '武藤 彩未',
    kana: 'Ayami Muto',
    transfer: '初期メンバー',
    graduate: 2011,
    positions: ['生徒会長'],
    clubs: ['Twinklestars (1期)'],
    birthMonth: 4,
    birthDay: '1996年4月29日',
    home: '茨城県',
    uniform: 'ネイビーの制服2010',
    others: []
  },
  {
    name: '松井 愛莉',
    kana: 'Airi Matsui',
    transfer: '初期メンバー',
    graduate: 2011,
    positions: [],
    clubs: ['SCOOPERS'],
    birthMonth: 12,
    birthDay: '1996年12月26日',
    home: '福島県',
    uniform: 'ネイビーの制服2010',
    others: ['愛']
  },
  {
    name: '三吉 彩花',
    kana: 'Ayaka Miyoshi',
    transfer: '初期メンバー',
    graduate: 2011,
    positions: [],
    clubs: ['SCOOPERS'],
    birthMonth: 6,
    birthDay: '1996年6月18日',
    home: '埼玉県',
    uniform: 'ネイビーの制服2010',
    others: []
  },
  {
    name: '中元 すず香',
    kana: 'Suzuka Nakamoto',
    transfer: '初期メンバー',
    graduate: 2012,
    positions: ['生徒会長'],
    clubs: ['BABYMETAL'],
    birthMonth: 12,
    birthDay: '1997年12月20日',
    home: '広島県',
    uniform: 'ネイビーの制服2010',
    others: ['2012年度生徒会']
  },
  {
    name: '杉本 愛莉鈴',
    kana: 'Mariri Sugimoto',
    transfer: 2012,
    graduate: 2012,
    positions: [],
    clubs: [],
    birthMonth: 8,
    birthDay: '2000年8月4日',
    home: '広島県',
    uniform: 'ネイビーの制服2010',
    others: ['愛']
  },
  {
    name: '堀内 まり菜',
    kana: 'Marina Horiuchi',
    transfer: '初期メンバー',
    graduate: 2013,
    positions: ['生徒会長', '副会長'],
    clubs: ['Pastel Wind (1期)', 'Twinklestars (1期)', 'sleepiece (1期)', '初代ミニパティ', '科学究明機構ロヂカ? : Ver.1.0'],
    birthMonth: 4,
    birthDay: '1998年4月29日',
    home: '東京都',
    uniform: 'ベージュの制服',
    others: ['2012年度生徒会']
  },
  {
    name: '飯田 來麗',
    kana: 'Raura Iida',
    transfer: '初期メンバー',
    graduate: 2013,
    positions: ['パフォーマンス委員長', '副々会長'],
    clubs: ['Twinklestars (1期)', 'sleepiece (1期)', '初代ミニパティ'],
    birthMonth: 4,
    birthDay: '1998年4月9日',
    home: '東京都',
    uniform: 'ベージュの制服',
    others: ['2012年度生徒会']
  },
  {
    name: '杉﨑 寧々',
    kana: 'Nene Sugisaki',
    transfer: '初期メンバー',
    graduate: 2013,
    positions: ['トーク委員長'],
    clubs: ['Twinklestars (1期)', 'Pastel Wind (1期)', 'Pastel Wind (2期)', 'sleepiece (1期)', '初代ミニパティ'],
    birthMonth: 5,
    birthDay: '1998年5月8日',
    home: '茨城県',
    uniform: 'ベージュの制服',
    others: []
  },
  {
    name: '佐藤 日向',
    kana: 'Hinata Sato',
    transfer: '初期メンバー',
    graduate: 2013,
    positions: ['ムード委員長'],
    clubs: ['Twinklestars (1期)', '科学究明機構ロヂカ? : Ver.1.0'],
    birthMonth: 12,
    birthDay: '1998年12月23日',
    home: '新潟県',
    uniform: 'ベージュの制服',
    others: ['佐藤']
  },
  {
    name: '菊地 最愛',
    kana: 'Moa Kikuchi',
    transfer: 2010,
    graduate: 2014,
    positions: ['生徒会長'],
    clubs: ['BABYMETAL', 'Twinklestars (1期)', 'Twinklestars (2期)', '二代目ミニパティ'],
    birthMonth: 7,
    birthDay: '1999年7月4日',
    home: '愛知県',
    uniform: 'ベージュの制服',
    others: ['愛']
  },
  {
    name: '水野 由結',
    kana: 'Yui Mizuno',
    transfer: 2010,
    graduate: 2014,
    positions: ['プロデュース委員長'],
    clubs: ['BABYMETAL', 'Twinklestars (1期)', 'Twinklestars (2期)', '二代目ミニパティ'],
    birthMonth: 6,
    birthDay: '1999年6月20日',
    home: '神奈川県',
    uniform: 'ベージュの制服',
    others: []
  },
  {
    name: '田口 華',
    kana: 'Hana Taguchi',
    transfer: 2011,
    graduate: 2014,
    positions: ['気合委員長'],
    clubs: ['Pastel Wind (1期)', 'Pastel Wind (2期)', 'プロレス同好会', '二代目ミニパティ'],
    birthMonth: 3,
    birthDay: '2000年3月4日',
    home: '長野県',
    uniform: 'ベージュの制服',
    others: []
  },
  {
    name: '野津 友那乃',
    kana: 'Yunano Notsu',
    transfer: 2012,
    graduate: 2014,
    positions: ['トーク委員長'],
    clubs: ['Pastel Wind (1期)', 'Pastel Wind (2期)', 'Twinklestars (2期)', '購買部 (1期)'],
    birthMonth: 12,
    birthDay: '1999年12月14日',
    home: '東京都',
    uniform: 'ベージュの制服',
    others: []
  },
  {
    name: '磯野 莉音',
    kana: 'Rinon Isono',
    transfer: 2011,
    graduate: 2015,
    positions: ['生徒会長'],
    clubs: ['プロレス同好会', '科学究明機構ロヂカ? : Ver.1.0', '科学究明機構ロヂカ? : Ver.1.2'],
    birthMonth: 11,
    birthDay: '2000年11月16日',
    home: '神奈川県',
    uniform: 'ベージュの制服',
    others: []
  },
  {
    name: '大賀 咲希',
    kana: 'Saki Ohga',
    transfer: 2012,
    graduate: 2015,
    positions: ['教育委員長'],
    clubs: ['Pastel Wind (2期)', 'sleepiece (2期)'],
    birthMonth: 4,
    birthDay: '2000年4月11日',
    home: '東京都',
    uniform: 'ベージュの制服',
    others: []
  },
  {
    name: '白井 沙樹',
    kana: 'Saki Shirai',
    transfer: 2013,
    graduate: 2015,
    positions: ['トーク委員長'],
    clubs: ['購買部 (1期)', '購買部 (2期)'],
    birthMonth: 9,
    birthDay: '2000年9月28日',
    home: '新潟県',
    uniform: 'ベージュの制服',
    others: []
  },
  {
    name: '倉島 颯良',
    kana: 'Sara Kurashima',
    transfer: 2014,
    graduate: 2016,
    positions: ['生徒会長'],
    clubs: ['Twinklestars (2期)', '科学究明機構ロヂカ? : Ver.1.2', '科学究明機構ロヂカ? : Ver.2.0'],
    birthMonth: 2,
    birthDay: '2002年2月24日',
    home: '茨城県',
    uniform: 'グレーの制服',
    others: ['2016年度生徒会']
  },
  {
    name: '黒澤 美澪奈',
    kana: 'Mirena Kurosawa',
    transfer: 2015,
    graduate: 2016,
    positions: ['MC委員長'],
    clubs: ['sleepiece (2期)', 'sleepiece (3期)'],
    birthMonth: 5,
    birthDay: '2001年5月22日',
    home: '東京都',
    uniform: 'グレーの制服',
    others: ['2016年度生徒会']
  },
  {
    name: '山出 愛子',
    kana: 'Aiko Yamaide',
    transfer: 2013,
    graduate: 2017,
    positions: ['生徒会長', '副会長'],
    clubs: ['Twinklestars (2期)', '三代目ミニパティ'],
    birthMonth: 12,
    birthDay: '2002年12月1日',
    home: '鹿児島県',
    uniform: 'グレーの制服',
    others: ['2016年度生徒会', '2017年度生徒会', '愛']
  },
  {
    name: '岡田 愛',
    kana: 'Megumi Okada',
    transfer: 2014,
    graduate: 2017,
    positions: ['トーク委員長'],
    clubs: ['科学究明機構ロヂカ? : Ver.1.2', '科学究明機構ロヂカ? : Ver.2.0'],
    birthMonth: 4,
    birthDay: '2002年4月4日',
    home: '愛知県',
    uniform: 'グレーの制服',
    others: ['2017年度生徒会', '愛']
  },
  {
    name: '岡崎 百々子',
    kana: 'Momoko Okazaki',
    transfer: 2015,
    graduate: 2017,
    positions: ['顔笑れ!!委員長'],
    clubs: ['三代目ミニパティ', '科学究明機構ロヂカ? : Ver.2.0'],
    birthMonth: 3,
    birthDay: '2003年3月3日',
    home: '神奈川県',
    uniform: 'グレーの制服',
    others: ['2017年度生徒会', 'KYG']
  },
  {
    name: '新谷 ゆづみ',
    kana: 'Yuzumi Shintani',
    transfer: 2016,
    graduate: 2018,
    positions: ['生徒会長'],
    clubs: ['trico dolls'],
    birthMonth: 7,
    birthDay: '2003年7月20日',
    home: '和歌山県',
    uniform: 'グレーの制服',
    others: ['2018年度生徒会']
  },
  {
    name: '麻生 真彩',
    kana: 'Maaya Asou',
    transfer: 2015,
    graduate: 2018,
    positions: ['トーク委員長', '教育委員長'],
    clubs: ['sleepiece (2期)', 'sleepiece (3期)'],
    birthMonth: 11,
    birthDay: '2003年11月4日',
    home: '神奈川県',
    uniform: 'グレーの制服',
    others: ['2017年度生徒会', '2018年度生徒会', 'KYG']
  },
  {
    name: '日髙 麻鈴',
    kana: 'Marin Hidaka',
    transfer: 2015,
    graduate: 2018,
    positions: ['はみだせ!委員長'],
    clubs: ['三代目ミニパティ'],
    birthMonth: 12,
    birthDay: '2003年12月1日',
    home: '神奈川県',
    uniform: 'グレーの制服',
    others: ['2018年度生徒会']
  },
  {
    name: '藤平 華乃',
    kana: 'Kano Fujihira',
    transfer: 2015,
    graduate: 2019,
    positions: ['生徒会長', 'パフォーマンス委員長'],
    clubs: ['sleepiece (3期)'],
    birthMonth: 8,
    birthDay: '2004年8月28日',
    home: '千葉県',
    uniform: 'ネイビーの制服2019',
    others: ['2018年度生徒会', 'KYG']
  },
  {
    name: '吉田 爽葉香',
    kana: 'Soyoka Yoshida',
    transfer: 2015,
    graduate: 2019,
    positions: ['顔笑れ!!委員長', '教育委員長'],
    clubs: ['購買部 (2期)', '購買部 (3期)'],
    birthMonth: 6,
    birthDay: '2004年6月14日',
    home: '大阪府',
    uniform: 'ネイビーの制服2019',
    others: ['2018年度生徒会']
  },
  {
    name: '有友 緒心',
    kana: 'Tsugumi Aritomo',
    transfer: 2016,
    graduate: 2019,
    positions: ['はみだせ!委員長'],
    clubs: ['購買部 (3期)'],
    birthMonth: 9,
    birthDay: '2004年9月7日',
    home: '千葉県',
    uniform: 'ネイビーの制服2019',
    others: []
  },
  {
    name: '森 萌々穂',
    kana: 'Momoe Mori',
    transfer: 2016,
    graduate: 2019,
    positions: ['トーク委員長'],
    clubs: ['trico dolls'],
    birthMonth: 12,
    birthDay: '2004年12月8日',
    home: '東京都',
    uniform: 'ネイビーの制服2019',
    others: ['森']
  },
  {
    name: '白鳥 沙南',
    kana: 'Sana Shiratori',
    transfer: 2018,
    graduate: 2020,
    positions: ['トーク委員長'],
    clubs: [],
    birthMonth: 6,
    birthDay: '2005年6月20日',
    home: '熊本県',
    uniform: 'ネイビーの制服2019',
    others: []
  },
  {
    name: '野中 ここな',
    kana: 'Kokona Nonaka',
    transfer: 2018,
    graduate: 2020,
    positions: ['生徒会長'],
    clubs: [],
    birthMonth: 1,
    birthDay: '2006年1月28日',
    home: '長崎県',
    uniform: 'ネイビーの制服2019',
    others: []
  },
  {
    name: '田中 美空',
    kana: 'Miku Tanaka',
    transfer: 2017,
    graduate: 2021,
    positions: ['気合委員長'],
    clubs: [],
    birthMonth: 6,
    birthDay: '2006年6月18日',
    home: '大分県',
    uniform: 'ネイビーの制服2019',
    others: []
  },
  {
    name: '八木 美樹',
    kana: 'Miki Yagi',
    transfer: 2017,
    graduate: 2021,
    positions: ['副会長'],
    clubs: ['購買部 (4期)'],
    birthMonth: 12,
    birthDay: '2006年12月11日',
    home: '大阪府',
    uniform: 'ネイビーの制服2019',
    others: []
  },
  {
    name: '佐藤 愛桜',
    kana: 'Neo Sato',
    transfer: 2019,
    graduate: 2021,
    positions: ['教育委員長'],
    clubs: [],
    birthMonth: 12,
    birthDay: '2006年12月1日',
    home: '佐賀県',
    uniform: 'ネイビーの制服2019',
    others: ['佐藤', '愛']
  },
  {
    name: '戸高 美湖',
    kana: 'Miko Todaka',
    transfer: 2019,
    graduate: 2021,
    positions: ['パフォーマンス委員長'],
    clubs: [],
    birthMonth: 8,
    birthDay: '2006年8月14日',
    home: '広島県',
    uniform: 'ネイビーの制服2019',
    others: []
  },
  {
    name: '野崎 結愛',
    kana: 'Yume Nozaki',
    transfer: 2018,
    graduate: 2022,
    positions: ['PR委員長'],
    clubs: ['trico dolls'],
    birthMonth: 11,
    birthDay: '2007年11月15日',
    home: '愛知県',
    uniform: 'ネイビーの制服2019',
    others: ['愛']
  },
  {
    name: '木村 咲愛',
    kana: 'Sakia Kimura',
    transfer: 2019,
    graduate: 2023,
    positions: ['がむしゃら!委員長'],
    clubs: [],
    birthMonth: 2,
    birthDay: '2009年2月20日',
    home: '東京都',
    uniform: 'ネイビーの制服2019',
    others: ['愛']
  },
  {
    name: '森 ハヤシ',
    kana: 'Hayashi Mori',
    transfer: -1,
    graduate: -1,
    positions: [],
    clubs: [],
    birthMonth: 2,
    birthDay: '1978年2月12日',
    home: '東京都',
    uniform: '',
    others: ['森', '森ハヤシ']
  },
]

