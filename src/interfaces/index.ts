export type User = {
  id: number
  name: string
}

export const members = ['武藤 彩未', '松井 愛莉', '三吉 彩花', '中元 すず香', '杉本 愛莉鈴', '堀内 まり菜', '飯田 來麗', '杉﨑 寧々', '佐藤 日向', '菊地 最愛', '水野 由結', '田口 華', '野津 友那乃', '磯野 莉音', '大賀 咲希', '白井 沙樹', '倉島 颯良', '黒澤 美澪奈', '山出 愛子', '岡田 愛', '岡崎 百々子', '新谷 ゆづみ', '麻生 真彩', '日髙 麻鈴', '藤平 華乃', '吉田 爽葉香', '有友 緒心', '森 萌々穂', '白鳥 沙南', '野中 ここな', '田中 美空', '八木 美樹', '佐藤 愛桜', '戸高 美湖', '野崎 結愛', '木村 咲愛', '森 ハヤシ']
export const toTypeMembers = ['武藤 彩未', '松井 愛莉', '三吉 彩花', '中元 すず香', '杉本 愛莉鈴', '堀内 まり菜', '飯田 來麗', '杉﨑 寧々', '佐藤 日向', '菊地 最愛', '水野 由結', '田口 華', '野津 友那乃', '磯野 莉音', '大賀 咲希', '白井 沙樹', '倉島 颯良', '黒澤 美澪奈', '山出 愛子', '岡田 愛', '岡崎 百々子', '新谷 ゆづみ', '麻生 真彩', '日髙 麻鈴', '藤平 華乃', '吉田 爽葉香', '有友 緒心', '森 萌々穂', '白鳥 沙南', '野中 ここな', '田中 美空', '八木 美樹', '佐藤 愛桜', '戸高 美湖', '野崎 結愛', '木村 咲愛', '森 ハヤシ'] as const
export type Member = typeof toTypeMembers[number]

export type Position = '生徒会長' | '副会長' | '副々会長' | 'トーク委員長' | 'パフォーマンス委員長' | 'ムード委員長' | 'プロデュース委員長' | '気合委員長' | '教育委員長' | 'MC委員長' | '顔笑れ!!委員長' | 'はみだせ!委員長' | 'PR委員長' | 'がむしゃら!委員長'

export type Club = Art | Kobai | Kagaku | Cooking | Kitaku | Baton | Prowrestling | Tennis | Jyuon | Shimbun
export type Art = 'trico dolls'
export type Kobai = '購買部 1期' | '購買部 2期' | '購買部 3期' | '購買部 4期'
export type Kagaku = '科学究明機構ロヂカ? : Ver.1.0' | '科学究明機構ロヂカ? : Ver.1.2' | '科学究明機構ロヂカ? : Ver.2.0'
export type Cooking = '初代ミニパティ' | '二代目ミニパティ' | '三代目ミニパティ'
export type Kitaku = 'sleepiece 1期' | 'sleepiece 2期' | 'sleepiece 3期'
export type Baton = 'Twinklestars 1期' | 'Twinklestars 2期'
export type Prowrestling = 'プロレス同好会'
export type Tennis = 'Pastel Wind 1期' | 'Pastel Wind 2期'
export type Jyuon = 'BABYMETAL'
export type Shimbun = 'SCOOPERS'