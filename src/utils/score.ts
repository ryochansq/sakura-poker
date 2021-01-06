import { Member } from 'interfaces/index'
import { memberInfo, MemberInfo } from 'interfaces/memberInfo'

export type Combo = {
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
      return 'ﾌﾗｯｼｭ'
    case 4:
      return 'ﾌｫｰｶｰﾄﾞ'
    case 3:
      return 'ｽﾘｰｶｰﾄﾞ'
    default:
      return 'ﾍﾟｱ'
  }
}

const isStraight = (members: MemberInfo[], keyword: 'transfer' | 'graduate' | 'birthMonth'): boolean => {
  let nums = members.map(member => member[keyword] as number)
  if (keyword === 'graduate') nums = nums.map(num => num > 2020 ? 2020 : num)
  nums.sort()
  let b = true
  for (let i = 1; i < nums.length; i++)
    if (nums[i] - nums[i - 1] !== 1) b = false
  if (b) return true
  if (keyword === 'birthMonth') {
    const months = nums.map(month => month < 5 ? month + 12 : month)
    months.sort()
    b = true
    for (let i = 1; i < months.length; i++)
      if (months[i] - months[i - 1] !== 1)
        b = false
  }
  return b
}

const comboTransfer = (members: MemberInfo[]): Combo[] => {
  const keyword = 'transfer'
  if (members.every(member => member[keyword] === '初期メンバー'))
    return [{
      name: '初期メンバー ﾌﾗｯｼｭ',
      description: '初期メンバーを5人そろえる',
      members,
      score: 50,
    }]
  if (members.every(member => member[keyword] === 2015))
    return [{
      name: '2015年度転入生 ﾌﾗｯｼｭ',
      description: '2015年度転入生を5人そろえる',
      members,
      score: 50,
    }]
  if (members.every(member => typeof member[keyword] === 'number') && isStraight(members, keyword))
    return [{
      name: '転入年度 ｽﾄﾚｰﾄ',
      description: '5人の転入年度が連続している',
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
        description: `${key}年度転入生を全員そろえる`,
        members: members.filter(member => member[keyword] === key),
        score: map.get(key)! * 10 + 5
      })
  }
  return combos
}
const comboGraduate = (members: MemberInfo[]): Combo[] => {
  const keyword = 'graduate'
  if (isStraight(members, keyword))
    return [{
      name: '卒業年度 ｽﾄﾚｰﾄ',
      description: '5人の卒業年度が連続している',
      members,
      score: 50,
    }]
  const allMap = getMap(memberInfo, keyword)
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  if (members.every(member => member[keyword] >= 2020))
    combos.push({
      name: '2020年度現役メンバー ﾌﾗｯｼｭ',
      description: '2020年度現役メンバーを5人そろえる',
      members,
      score: 50,
    })
  for (const key of map.keys()) {
    if (map.get(key) === allMap.get(key)) {
      if (2011 <= key && key <= 2019)
        combos.push({
          name: `${key}年度卒業生`,
          description: `${key}年度卒業生を全員そろえる`,
          members: members.filter(member => member[keyword] === key),
          score: map.get(key)! * 10 + 5
        })
      else if (typeof key === 'number' && 2020 <= key && key <= 2021)
        combos.push({
          name: `2020年度 中等部${2023 - key}年`,
          description: `2020年度の中等部${2023 - key}年を全員そろえる`,
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
        description: `${key}を全員そろえる`,
        members: members.filter(member => member[keyword].some(position => position === key)),
        score: 5
      })
    else if (num >= 2)
      combos.push({
        name: `${key} ${getNumWord(num)}`,
        description: `${key}を${num}人そろえる`,
        members: members.filter(member => member[keyword].some(position => position === key)),
        score: num * 10
      })
  }
  return combos
}
const comboClubs = (members: MemberInfo[]): Combo[] => {
  const keyword = 'clubs'
  if (members.every(member => member[keyword].some(club => club === 'Twinklestars (1期)')))
    return [{
      name: 'Twinklestars (1期) ﾌﾗｯｼｭ',
      description: 'Twinklestars (1期)を5人そろえる',
      members,
      score: 50,
    }]
  const allMap = getMap(memberInfo, keyword)
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    if (map.get(key) === allMap.get(key))
      combos.push({
        name: `${key}`,
        description: `${key}を全員そろえる`,
        members: members.filter(member => member[keyword].some(club => club === key)),
        score: map.get(key)! === 1 ? 5 : map.get(key)! * 10 + 5
      })
  }
  return combos
}
const comboBirthMonth = (members: MemberInfo[]): Combo[] => {
  const keyword = 'birthMonth'
  if (isStraight(members, keyword))
    return [{
      name: '誕生月 ｽﾄﾚｰﾄ',
      description: '5人の誕生月が連続している',
      members,
      score: 50,
    }]
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    const num = map.get(key) as number
    if (num >= 2) {
      combos.push({
        name: `${key}月生まれ ${getNumWord(num)}`,
        description: `${key}月生まれを${num}人そろえる`,
        members: members.filter(member => member[keyword] === key),
        score: num * 10
      })
    }
  }
  return combos
}
const comboHome = (members: MemberInfo[]): Combo[] => {
  const keyword = 'home'
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    const num = map.get(key) as number
    if (num >= 2) {
      combos.push({
        name: `${key}出身 ${getNumWord(num)}`,
        description: `${key}出身を${num}人そろえる`,
        members: members.filter(member => member[keyword] === key),
        score: num * 10
      })
    }
  }
  return combos
}
const comboUniform = (members: MemberInfo[]): Combo[] => {
  const keyword = 'uniform'
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    if (map.get(key) === 5)
      combos.push({
        name: `${key} ﾌﾗｯｼｭ`,
        description: `${key}を5人そろえる`,
        members,
        score: 45
      })
  }
  return combos
}
const comboOthers = (members: MemberInfo[]): Combo[] => {
  const keyword = 'others'
  const allMap = getMap(memberInfo, keyword)
  const map = getMap(members, keyword)
  const combos: Combo[] = []
  for (const key of map.keys()) {
    if (map.get(key) === allMap.get(key)) {
      if (key === '森ハヤシ')
        combos.push({
          name: `${key}`,
          description: `${key}を手札に含めている`,
          members: members.filter(member => member[keyword].some(other => other === key)),
          score: 5
        })
      else if (key === '佐藤' || key === '森')
        combos.push({
          name: `${key} ﾍﾟｱ`,
          description: `${key}を2人そろえる`,
          members: members.filter(member => member[keyword].some(other => other === key)),
          score: 20
        })
      else
        combos.push({
          name: `${key}`,
          description: `${key}を全員そろえる`,
          members: members.filter(member => member[keyword].some(other => other === key)),
          score: map.get(key)! * 10 + 5
        })
    }
  }
  return combos
}
