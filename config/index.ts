import type { AppInfo } from '@/types/app'
export const APP_ID = 'd11a49b2-12bb-4fbc-baaf-b05295fcca53'
export const API_KEY = 'app-I5xeDBSmYHvuzZ0mijgMMpA8'
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
