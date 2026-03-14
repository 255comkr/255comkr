@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   255COMKR 자동 배포 스크립트
echo   GitHub: 255comkr
echo ========================================
echo.

echo [1/6] 폴더 확인 중...
if not exist "package.json" (
    echo 오류: 이 파일을 255comkr 폴더 안에 넣고 실행하세요
    pause
    exit /b 1
)
echo OK - 폴더 확인 완료
echo.

echo [2/6] Node.js 확인 중...
node --version >nul 2>&1
if errorlevel 1 (
    echo 오류: Node.js 가 없습니다
    echo 설치 주소: https://nodejs.org
    echo 설치 후 이 파일을 다시 실행하세요
    pause
    exit /b 1
)
echo OK - Node.js 확인 완료
echo.

echo [3/6] Git 확인 중...
git --version >nul 2>&1
if errorlevel 1 (
    echo 오류: Git 이 없습니다
    echo 설치 주소: https://git-scm.com/download/win
    echo 설치 후 이 파일을 다시 실행하세요
    pause
    exit /b 1
)
echo OK - Git 확인 완료
echo.

echo [4/6] 패키지 설치 중... (1-2분 소요)
call npm install
if errorlevel 1 (
    echo 오류: npm install 실패
    echo 인터넷 연결 확인 후 다시 실행하세요
    pause
    exit /b 1
)
echo OK - 패키지 설치 완료
echo.

echo [5/6] Git 커밋 중...
if not exist ".git" (
    git init
)
git config user.email "255comkr@users.noreply.github.com"
git config user.name "255comkr"
git add .
git commit -m "255COMKR 첫 배포"
echo OK - 커밋 완료
echo.

echo [6/6] GitHub 업로드 중...
echo.
echo GitHub 로그인이 필요합니다
echo 아이디: 255comkr
echo 비밀번호: GitHub 비밀번호 또는 토큰 입력
echo.
git remote remove origin 2>nul
git remote add origin https://github.com/255comkr/255comkr.git
git branch -M main
git push -u origin main
if errorlevel 1 (
    echo.
    echo 업로드 실패 - 아래 순서로 해결하세요
    echo 1. https://github.com/new 접속
    echo 2. Repository name 에 255comkr 입력
    echo 3. Public 선택 후 Create repository 클릭
    echo 4. 이 파일 다시 실행
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   GitHub 업로드 완료!
echo   주소: https://github.com/255comkr/255comkr
echo.
echo   다음 단계 - Vercel 배포
echo   1. https://vercel.com 접속 (GitHub 로그인)
echo   2. Add New Project 클릭
echo   3. 255comkr 선택 후 Deploy 클릭
echo   4. 완료! 아이폰으로 접속 가능
echo ========================================
echo.
pause
