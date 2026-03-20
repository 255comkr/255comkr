// 세션 저장소 — route 파일 밖으로 분리 (Next.js route export 충돌 방지)
// 토큰 해시 → 만료 timestamp
export const SESSIONS = new Map<string, number>()
