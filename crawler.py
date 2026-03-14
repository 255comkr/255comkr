"""
컴퓨존 가격 크롤러
GitHub Actions에서 매일 자동 실행 → data/products.json 저장 → Git push
"""

import requests
from bs4 import BeautifulSoup
import json, os, time, random
from datetime import datetime

DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "products.json")

CATEGORIES = {
    "CPU":    {"url": "https://www.compuzone.co.kr/product/product_list.htm?BigDivNo=4&MediumDivNo=1012", "icon": "🖥️", "color": "#3B82F6"},
    "메인보드": {"url": "https://www.compuzone.co.kr/product/product_list.htm?BigDivNo=4&MediumDivNo=1021", "icon": "🔲", "color": "#8B5CF6"},
    "그래픽카드":{"url": "https://www.compuzone.co.kr/product/product_list.htm?BigDivNo=4&MediumDivNo=1013", "icon": "🎮", "color": "#10B981"},
    "메모리":  {"url": "https://www.compuzone.co.kr/product/product_list.htm?BigDivNo=4&MediumDivNo=1014", "icon": "💾", "color": "#F59E0B"},
    "SSD":    {"url": "https://www.compuzone.co.kr/product/product_list.htm?BigDivNo=4&MediumDivNo=1015", "icon": "💿", "color": "#EF4444"},
    "파워":    {"url": "https://www.compuzone.co.kr/product/product_list.htm?BigDivNo=4&MediumDivNo=1019", "icon": "⚡", "color": "#EC4899"},
    "케이스":  {"url": "https://www.compuzone.co.kr/product/product_list.htm?BigDivNo=4&MediumDivNo=1020", "icon": "🗃️", "color": "#06B6D4"},
}

HEADERS_LIST = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/123.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
]

NAME_SELECTORS  = [".product_name a", ".pname a", ".ProductName a", "dt.pname a", ".list_name a", "a.pname"]
PRICE_SELECTORS = [".sale_price", ".price_sale", ".ProductPrice", ".sell_price", ".final_price", "strong.price"]


def parse_price(text: str) -> int:
    digits = "".join(c for c in text if c.isdigit())
    return int(digits) if digits else 0


def crawl_category(name: str, cfg: dict, max_items: int = 20) -> list:
    products = []
    headers = {
        "User-Agent": random.choice(HEADERS_LIST),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "ko-KR,ko;q=0.9",
        "Referer": "https://www.compuzone.co.kr/",
    }
    try:
        print(f"  [{name}] 수집 중...", end=" ", flush=True)
        r = requests.get(cfg["url"], headers=headers, timeout=15)
        r.raise_for_status()
        soup = BeautifulSoup(r.text, "html.parser")

        # 상품명
        name_els = []
        for sel in NAME_SELECTORS:
            els = soup.select(sel)
            if els:
                name_els = els[:max_items]
                break

        # 가격
        price_els = []
        for sel in PRICE_SELECTORS:
            els = soup.select(sel)
            if els:
                price_els = els[:max_items]
                break

        for i in range(min(len(name_els), len(price_els))):
            pname = name_els[i].get_text(strip=True)
            price = parse_price(price_els[i].get_text(strip=True))
            href  = name_els[i].get("href", "")
            url   = href if href.startswith("http") else "https://www.compuzone.co.kr" + href
            if pname and price > 0:
                products.append({"name": pname[:70], "price": price, "url": url})

        print(f"✅ {len(products)}개")
    except Exception as e:
        print(f"❌ {e}")

    return products


def run_crawl():
    print("=" * 52)
    print(f"🕷️  컴퓨존 크롤러 | {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 52)

    cats = {}
    for cat_name, cfg in CATEGORIES.items():
        prods = crawl_category(cat_name, cfg)
        cats[cat_name] = {
            "icon": cfg["icon"], "color": cfg["color"], "url": cfg["url"],
            "products": prods, "count": len(prods),
            "min_price": min((p["price"] for p in prods), default=0),
            "max_price": max((p["price"] for p in prods), default=0),
            "avg_price": int(sum(p["price"] for p in prods) / len(prods)) if prods else 0,
        }
        time.sleep(random.uniform(2.0, 4.0))

    data = {
        "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "categories": cats,
    }
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    total = sum(v["count"] for v in cats.values())
    print(f"\n✅ 완료! 총 {total}개 → data/products.json")
    return data


if __name__ == "__main__":
    run_crawl()
