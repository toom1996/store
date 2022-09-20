import { get } from '@/untils/request'

export function index () {return get('/v1/music/songs')}

export function v1SiteGlobal () {return get('/v1/site/global')}