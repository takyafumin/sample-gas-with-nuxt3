import { useRuntimeConfig } from '#app'

export interface Item {
  id: string
  companyName: string
  address: string
  phone: string
  email: string
}

const ITEM_INDEX = {
  ID: 0,
  COMPANY_NAME: 1,
  ADDRESS: 2,
  EMAIL: 3,
  PHONE: 4,
} as const

export const fetchData = async (): Promise<{ items: Item[] }> => {
  const runtimeConfig = useRuntimeConfig()
  const deployId = runtimeConfig.public.gasDeployId
  const response = await fetch(`https://script.google.com/macros/s/${deployId}/exec`)
  const result = await response.json()
  const items = result.data.slice(1).map((item: any[]) => ({
    id: item[ITEM_INDEX.ID],
    companyName: item[ITEM_INDEX.COMPANY_NAME],
    address: item[ITEM_INDEX.ADDRESS],
    phone: item[ITEM_INDEX.PHONE],
    email: item[ITEM_INDEX.EMAIL]
  }))
  return { items }
}
