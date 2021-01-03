import { Member, Position, Club, Uniform, Other } from 'interfaces/index'

export type MemberInfo = {
  name: Member,   // 名前
  transfer: number | '初期メンバー',     // 入学・転入年度
  graduate: number,  // 卒業年度（学年）
  positions: Position[],
  clubs: Club[],
  birthMonth: number,
  home: string,
  uniform: Uniform,
  others: Other[]
}

export const memberInfo: MemberInfo[] = [
  {
    name: '武藤 彩未',
    transfer: '初期メンバー',
    graduate: 2011,
    positions: ['生徒会長'],
    clubs: ['Twinklestars 1期'],
    birthMonth: 4,
    home: '茨城',
    uniform: 'ネイビーの制服（2010〜2012）',
    others: []
  },
  {
    name: '松井 愛莉',
    transfer: '初期メンバー',
    graduate: 2011,
    positions: [],
    clubs: ['SCOOPERS'],
    birthMonth: 12,
    home: '福島',
    uniform: 'ネイビーの制服（2010〜2012）',
    others: []
  },
  {
    name: '三吉 彩花',
    transfer: '初期メンバー',
    graduate: 2011,
    positions: [],
    clubs: ['SCOOPERS'],
    birthMonth: 6,
    home: '埼玉',
    uniform: 'ネイビーの制服（2010〜2012）',
    others: []
  },
  {
    name: '中元 すず香',
    transfer: '初期メンバー',
    graduate: 2012,
    positions: ['生徒会長'],
    clubs: ['BABYMETAL'],
    birthMonth: 12,
    home: '広島',
    uniform: 'ネイビーの制服（2010〜2012）',
    others: ['2012年度生徒会']
  },
  {
    name: '杉本 愛莉鈴',
    transfer: 2012,
    graduate: 2012,
    positions: [],
    clubs: [],
    birthMonth: 8,
    home: '広島',
    uniform: 'ネイビーの制服（2010〜2012）',
    others: []
  },
  {
    name: '堀内 まり菜',
    transfer: '初期メンバー',
    graduate: 2013,
    positions: ['生徒会長', '副会長'],
    clubs: ['Pastel Wind 1期', 'Twinklestars 1期', 'sleepiece 1期', '初代ミニパティ', '科学究明機構ロヂカ? : Ver.1.0'],
    birthMonth: 4,
    home: '東京',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '飯田 來麗',
    transfer: '初期メンバー',
    graduate: 2013,
    positions: ['パフォーマンス委員長', '副々会長'],
    clubs: ['Twinklestars 1期', 'sleepiece 1期', '初代ミニパティ'],
    birthMonth: 4,
    home: '東京',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '杉﨑 寧々',
    transfer: '初期メンバー',
    graduate: 2013,
    positions: ['トーク委員長'],
    clubs: ['Twinklestars 1期', 'Pastel Wind 1期', 'Pastel Wind 2期', 'sleepiece 1期', '初代ミニパティ'],
    birthMonth: 5,
    home: '茨城',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '佐藤 日向',
    transfer: '初期メンバー',
    graduate: 2013,
    positions: ['ムード委員長'],
    clubs: ['Twinklestars 1期', '科学究明機構ロヂカ? : Ver.1.0'],
    birthMonth: 12,
    home: '新潟',
    uniform: 'ベージュの制服（2013〜2015）',
    others: ['佐藤']
  },
  {
    name: '菊地 最愛',
    transfer: 2010,
    graduate: 2014,
    positions: ['生徒会長'],
    clubs: ['BABYMETAL', 'Twinklestars 1期', 'Twinklestars 2期', '二代目ミニパティ'],
    birthMonth: 7,
    home: '愛知',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '水野 由結',
    transfer: 2010,
    graduate: 2014,
    positions: ['プロデュース委員長'],
    clubs: ['BABYMETAL', 'Twinklestars 1期', 'Twinklestars 2期', '二代目ミニパティ'],
    birthMonth: 6,
    home: '神奈川',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '田口 華',
    transfer: 2011,
    graduate: 2014,
    positions: ['気合委員長'],
    clubs: ['Pastel Wind 1期', 'Pastel Wind 2期', 'プロレス同好会', '二代目ミニパティ'],
    birthMonth: 3,
    home: '長野',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '野津 友那乃',
    transfer: 2012,
    graduate: 2014,
    positions: ['トーク委員長'],
    clubs: ['Pastel Wind 1期', 'Pastel Wind 2期', 'Twinklestars 2期', '購買部 1期'],
    birthMonth: 12,
    home: '東京',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '磯野 莉音',
    transfer: 2011,
    graduate: 2015,
    positions: ['生徒会長'],
    clubs: ['プロレス同好会', '科学究明機構ロヂカ? : Ver.1.0', '科学究明機構ロヂカ? : Ver.1.2'],
    birthMonth: 11,
    home: '神奈川',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '大賀 咲希',
    transfer: 2012,
    graduate: 2015,
    positions: ['教育委員長'],
    clubs: ['Pastel Wind 2期', 'sleepiece 2期'],
    birthMonth: 4,
    home: '東京',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '白井 沙樹',
    transfer: 2013,
    graduate: 2015,
    positions: ['トーク委員長'],
    clubs: ['購買部 1期', '購買部 2期'],
    birthMonth: 9,
    home: '新潟',
    uniform: 'ベージュの制服（2013〜2015）',
    others: []
  },
  {
    name: '倉島 颯良',
    transfer: 2014,
    graduate: 2016,
    positions: ['生徒会長'],
    clubs: ['Twinklestars 2期', '科学究明機構ロヂカ? : Ver.1.2', '科学究明機構ロヂカ? : Ver.2.0'],
    birthMonth: 2,
    home: '茨城',
    uniform: 'グレーの制服（2016〜2018）',
    others: ['2016年度生徒会']
  },
  {
    name: '黒澤 美澪奈',
    transfer: 2015,
    graduate: 2016,
    positions: ['MC委員長'],
    clubs: ['sleepiece 2期', 'sleepiece 3期'],
    birthMonth: 5,
    home: '東京',
    uniform: 'グレーの制服（2016〜2018）',
    others: ['2016年度生徒会']
  },
  {
    name: '山出 愛子',
    transfer: 2013,
    graduate: 2017,
    positions: ['副会長', '生徒会長'],
    clubs: ['Twinklestars 2期', '三代目ミニパティ'],
    birthMonth: 12,
    home: '鹿児島',
    uniform: 'グレーの制服（2016〜2018）',
    others: ['2016年度生徒会', '2017年度生徒会']
  },
  {
    name: '岡田 愛',
    transfer: 2014,
    graduate: 2017,
    positions: ['トーク委員長'],
    clubs: ['科学究明機構ロヂカ? : Ver.1.2', '科学究明機構ロヂカ? : Ver.2.0'],
    birthMonth: 4,
    home: '愛知',
    uniform: 'グレーの制服（2016〜2018）',
    others: ['2017年度生徒会']
  },
  {
    name: '岡崎 百々子',
    transfer: 2015,
    graduate: 2017,
    positions: ['顔笑れ!!委員長'],
    clubs: ['三代目ミニパティ', '科学究明機構ロヂカ? : Ver.2.0'],
    birthMonth: 3,
    home: '神奈川',
    uniform: 'グレーの制服（2016〜2018）',
    others: ['2017年度生徒会', 'KYG']
  },
  {
    name: '新谷 ゆづみ',
    transfer: 2016,
    graduate: 2018,
    positions: ['生徒会長'],
    clubs: ['trico dolls'],
    birthMonth: 7,
    home: '和歌山',
    uniform: 'グレーの制服（2016〜2018）',
    others: ['2018年度生徒会']
  },
  {
    name: '麻生 真彩',
    transfer: 2015,
    graduate: 2018,
    positions: ['教育委員長', 'トーク委員長'],
    clubs: ['sleepiece 2期', 'sleepiece 3期'],
    birthMonth: 11,
    home: '神奈川',
    uniform: 'グレーの制服（2016〜2018）',
    others: ['2017年度生徒会', '2018年度生徒会', 'KYG']
  },
  {
    name: '日髙 麻鈴',
    transfer: 2015,
    graduate: 2018,
    positions: ['はみだせ!委員長'],
    clubs: ['三代目ミニパティ'],
    birthMonth: 12,
    home: '神奈川',
    uniform: 'グレーの制服（2016〜2018）',
    others: ['2018年度生徒会']
  },
  {
    name: '藤平 華乃',
    transfer: 2015,
    graduate: 2019,
    positions: ['パフォーマンス委員長', '生徒会長'],
    clubs: ['sleepiece 3期'],
    birthMonth: 8,
    home: '千葉',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: ['2018年度生徒会', 'KYG']
  },
  {
    name: '吉田 爽葉香',
    transfer: 2015,
    graduate: 2019,
    positions: ['教育委員長', '顔笑れ!!委員長'],
    clubs: ['購買部 2期', '購買部 3期'],
    birthMonth: 6,
    home: '大阪',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: ['2018年度生徒会']
  },
  {
    name: '有友 緒心',
    transfer: 2016,
    graduate: 2019,
    positions: ['はみだせ!委員長'],
    clubs: ['購買部 3期'],
    birthMonth: 9,
    home: '千葉',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: []
  },
  {
    name: '森 萌々穂',
    transfer: 2016,
    graduate: 2019,
    positions: ['トーク委員長'],
    clubs: ['trico dolls'],
    birthMonth: 12,
    home: '東京',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: ['森']
  },
  {
    name: '白鳥 沙南',
    transfer: 2018,
    graduate: 2020,
    positions: ['トーク委員長'],
    clubs: [],
    birthMonth: 6,
    home: '熊本',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: []
  },
  {
    name: '野中 ここな',
    transfer: 2018,
    graduate: 2020,
    positions: ['生徒会長'],
    clubs: [],
    birthMonth: 1,
    home: '長崎',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: []
  },
  {
    name: '田中 美空',
    transfer: 2017,
    graduate: 2021,
    positions: ['気合委員長'],
    clubs: [],
    birthMonth: 6,
    home: '大分',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: []
  },
  {
    name: '八木 美樹',
    transfer: 2017,
    graduate: 2021,
    positions: ['副会長'],
    clubs: ['購買部 4期'],
    birthMonth: 12,
    home: '大阪',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: []
  },
  {
    name: '佐藤 愛桜',
    transfer: 2019,
    graduate: 2021,
    positions: ['教育委員長'],
    clubs: [],
    birthMonth: 12,
    home: '佐賀',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: ['佐藤']
  },
  {
    name: '戸高 美湖',
    transfer: 2019,
    graduate: 2021,
    positions: ['パフォーマンス委員長'],
    clubs: [],
    birthMonth: 8,
    home: '広島',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: []
  },
  {
    name: '野崎 結愛',
    transfer: 2018,
    graduate: 2022,
    positions: ['PR委員長'],
    clubs: ['trico dolls'],
    birthMonth: 11,
    home: '愛知',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: []
  },
  {
    name: '木村 咲愛',
    transfer: 2019,
    graduate: 2023,
    positions: ['がむしゃら!委員長'],
    clubs: [],
    birthMonth: 2,
    home: '東京',
    uniform: 'ネイビーの制服（2019〜2020）',
    others: []
  },
  {
    name: '森 ハヤシ',
    transfer: 1000,
    graduate: 3000,
    positions: [],
    clubs: [],
    birthMonth: 2,
    home: '東京',
    uniform: '',
    others: ['森', '森ハヤシ']
  },
]

