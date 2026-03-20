# 255COM

PC 판매 · 수리 · 견적 전문 브랜드 사이트

## 기술 스택

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **폰트**: Pretendard (한글), Orbitron (로고), JetBrains Mono (숫자)
- **배포**: Vercel
- **가격 수집**: Python (requests + BeautifulSoup) → GitHub Actions

## 개발 환경

```bash
npm install
npm run dev
```

## 환경변수 설정

Vercel 대시보드 → Settings → Environment Variables 에서 설정:

| 변수명 | 설명 |
|--------|------|
| `ADMIN_PASSWORD` | 관리자 페이지 비밀번호 |

로컬 개발 시 `.env.local` 파일 생성:
```
ADMIN_PASSWORD=로컬_비밀번호
```

## 가격 수집 (GitHub Actions)

- 자동: 매일 오전 9시, 오후 2시 (KST)
- 수동: GitHub → Actions → 컴퓨존 가격 수집 → Run workflow

## 관리자 페이지

`/admin` 접근 (푸터 하단 숨김 링크)
- 로그인 시도 5회 초과 시 30분 잠금
- 세션 8시간 유지
