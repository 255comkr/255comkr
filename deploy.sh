#!/bin/bash
# 255COM 자동 배포 스크립트 (Mac/Linux)

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
CYAN='\033[0;36m'; BOLD='\033[1m'; NC='\033[0m'

echo ""
echo -e "${CYAN}${BOLD}  255COM 자동 배포 스크립트${NC}"
echo -e "  GitHub: 255comkr"
echo "════════════════════════════════════════"
echo ""

# STEP 1: 폴더 확인
echo -e "${BOLD}[1/6] 프로젝트 폴더 확인 중...${NC}"
if [ ! -f "package.json" ]; then
  echo -e "${RED}❌ 이 스크립트를 255com-next 폴더 안에서 실행하세요!${NC}"
  exit 1
fi
echo -e "${GREEN}✅ 프로젝트 폴더 확인 완료${NC}"; echo ""

# STEP 2: Node.js 확인
echo -e "${BOLD}[2/6] Node.js 확인 중...${NC}"
if ! command -v node &>/dev/null; then
  echo -e "${RED}❌ Node.js가 없습니다. https://nodejs.org 에서 설치 후 재실행하세요.${NC}"
  open "https://nodejs.org" 2>/dev/null || xdg-open "https://nodejs.org" 2>/dev/null
  exit 1
fi
echo -e "${GREEN}✅ Node.js $(node --version) 확인 완료${NC}"; echo ""

# STEP 3: Git 확인
echo -e "${BOLD}[3/6] Git 확인 중...${NC}"
if ! command -v git &>/dev/null; then
  echo -e "${RED}❌ Git이 없습니다. https://git-scm.com 에서 설치 후 재실행하세요.${NC}"
  exit 1
fi
echo -e "${GREEN}✅ $(git --version) 확인 완료${NC}"; echo ""

# STEP 4: npm install
echo -e "${BOLD}[4/6] 패키지 설치 중... (1~2분 소요)${NC}"
npm install
if [ $? -ne 0 ]; then
  echo -e "${RED}❌ npm install 실패. 인터넷 연결을 확인하세요.${NC}"; exit 1
fi
echo -e "${GREEN}✅ 패키지 설치 완료${NC}"; echo ""

# STEP 5: Git 설정
echo -e "${BOLD}[5/6] Git 설정 중...${NC}"
[ ! -d ".git" ] && git init && echo -e "${GREEN}✅ Git 초기화${NC}"
git config user.email "255comkr@users.noreply.github.com"
git config user.name "255comkr"
git add .
git commit -m "255COM 첫 배포" 2>/dev/null || true
echo -e "${GREEN}✅ 커밋 완료${NC}"; echo ""

# STEP 6: GitHub 업로드
echo -e "${BOLD}[6/6] GitHub 업로드 중...${NC}"
echo ""
echo "  GitHub 아이디: 255comkr"
echo "  비밀번호(토큰) 입력이 필요합니다."
echo ""
git remote remove origin 2>/dev/null
git remote add origin https://github.com/255comkr/255comkr.git
git branch -M main
git push -u origin main
if [ $? -ne 0 ]; then
  echo -e "${RED}❌ 업로드 실패. github.com/new 에서 '255comkr' 레포 생성 후 재실행하세요.${NC}"
  open "https://github.com/new" 2>/dev/null || xdg-open "https://github.com/new" 2>/dev/null
  exit 1
fi

echo ""
echo "════════════════════════════════════════"
echo -e "${GREEN}${BOLD}🎉 GitHub 업로드 완료!${NC}"
echo ""
echo "  https://github.com/255comkr/255comkr"
echo ""
echo "  다음 단계: vercel.com 에서 255comkr 레포 연결"
open "https://vercel.com/new" 2>/dev/null || xdg-open "https://vercel.com/new" 2>/dev/null
