import { Member } from 'interfaces/index'
import { memberInfo, MemberInfo } from 'interfaces/memberInfo'

type Combo = {
  name: string,
  description: string,
  members: MemberInfo[],
  score: number,
}

export const getCombos = (memberList: Member[]): Combo[] => {
  const members = memberInfo.filter(info => memberList.some(member => member === info.name))
  return ([] as Combo[]).concat(comboTransfer(members), comboGraduate(members), comboPositions(members), comboClubs(members), comboBirthMonth(members), comboHome(members), comboUniform(members), comboOthers(members))
}

const getMap = (members: MemberInfo[], key: keyof MemberInfo): Map<string | number, number> => {
  if (key === 'positions' || key === 'clubs' || key === 'others') {
    const resMap = new Map<string | number, number>()
    for (const member of members) {
      for (const element of member[key]) {
        resMap.set(element, (resMap.get(element) || 0) + 1)
      }
    }
    return resMap
  }
  return members.reduce((acc, member) => {
    acc.set(member[key], (acc.get(member[key]) || 0) + 1)
    return acc
  }, new Map<string | number, number>())
}

const getNumWord = (num: number): string => {
  switch (num) {
    case 5:
      return 'フラッシュ'
    case 4:
      return 'フォーカード'
    case 3:
      return 'スリーカード'
    default:
      return 'ペア'
  }
}

const comboTransfer = (members: MemberInfo[]): Combo[] => {
  const keyword = 'transfer'
  if (members.every(member => member.transfer === '初期メンバー')) return [{
    name: '初期メンバー フラッシュ',
    description: '初期メンバーを5人揃える',
    members,
    score: 50,
  }]
  const allMap = getMap(memberInfo, keyword)
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    if (key >= 2010 && map.get(key) === allMap.get(key))
      combos.push({
        name: `${key}年度転入生`,
        description: `${key}年度転入生を全員揃える`,
        members: members.filter(member => member[keyword] === key),
        score: map.get(key)! * 10 + 5
      })
  }
  return combos
}
const comboGraduate = (members: MemberInfo[]): Combo[] => {
  const keyword = 'graduate'
  const allMap = getMap(memberInfo, keyword)
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    if (map.get(key) === allMap.get(key)) {
      if (2011 <= key && key <= 2019)
        combos.push({
          name: `${key}年度卒業生`,
          description: `${key}年度卒業生を全員揃える`,
          members: members.filter(member => member[keyword] === key),
          score: map.get(key)! * 10 + 5
        })
      else if (typeof key === 'number' && 2020 <= key && key <= 2021)
        combos.push({
          name: `2020年度 中等部${2023 - key}年`,
          description: `2020年度の中等部${2023 - key}年を全員揃える`,
          members: members.filter(member => member[keyword] === key),
          score: map.get(key)! * 10 + 5
        })
    }
  }
  return combos
}
const comboPositions = (members: MemberInfo[]): Combo[] => {
  const keyword = 'positions'
  const allMap = getMap(memberInfo, keyword)
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    const num = map.get(key) as number
    if (allMap.get(key) === 1)
      combos.push({
        name: `${key}`,
        description: `${key}を全員揃える`,
        members: members.filter(member => member[keyword].some(position => position === key)),
        score: 5
      })
    else if (num >= 2)
      combos.push({
        name: `${key} ${getNumWord(num)}`,
        description: `${key}を${num}人揃える`,
        members: members.filter(member => member[keyword].some(position => position === key)),
        score: num * 10
      })
  }
  return combos
}
const comboClubs = (members: MemberInfo[]): Combo[] => {
  const keyword = 'clubs'
  const allMap = getMap(memberInfo, keyword)
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    if (map.get(key) === allMap.get(key))
      combos.push({
        name: `${key}`,
        description: `${key}を全員揃える`,
        members: members.filter(member => member[keyword].some(club => club === key)),
        score: map.get(key)! * 10 + 5
      })
  }
  return combos
}
const comboBirthMonth = (members: MemberInfo[]): Combo[] => {
  const keyword = 'birthMonth'
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    const num = map.get(key) as number
    if (num >= 2) {
      combos.push({
        name: `${key}月生まれ ${getNumWord(num)}`,
        description: `${key}月生まれを${num}人揃える`,
        members: members.filter(member => member[keyword] === key),
        score: num * 10
      })
    }
  }
  return combos
}
const comboHome = (members: MemberInfo[]): Combo[] => {
  const combos: Combo[] = []
  return combos
}
const comboUniform = (members: MemberInfo[]): Combo[] => {
  const combos: Combo[] = []
  return combos
}
const comboOthers = (members: MemberInfo[]): Combo[] => {
  const combos: Combo[] = []
  return combos
}
