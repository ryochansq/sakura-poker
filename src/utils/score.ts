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

const comboTransfer = (members: MemberInfo[]): Combo[] => {
  if (members.every(member => member.transfer === '初期メンバー')) return [{
    name: '初期メンバー フラッシュ',
    description: '初期メンバーを5人揃える',
    members,
    score: 50,
  }]
  const allMap = getMap(memberInfo, 'transfer')
  const map = getMap(members, 'transfer')
  for (const key of map.keys()) {
    // console.info(key, map.get(key), allMap.get(key))
  }
  return []
}
const comboGraduate = (members: MemberInfo[]): Combo[] => {
  return []
}
const comboPositions = (members: MemberInfo[]): Combo[] => {
  const allMap = getMap(memberInfo, 'positions')
  const map = getMap(members, 'positions')
  for (const key of map.keys()) {
    // console.info(key, map.get(key), allMap.get(key))
  }
  return []
}
const comboClubs = (members: MemberInfo[]): Combo[] => {
  return []
}
const comboBirthMonth = (members: MemberInfo[]): Combo[] => {
  return []
}
const comboHome = (members: MemberInfo[]): Combo[] => {
  return []
}
const comboUniform = (members: MemberInfo[]): Combo[] => {
  return []
}
const comboOthers = (members: MemberInfo[]): Combo[] => {
  return []
}
