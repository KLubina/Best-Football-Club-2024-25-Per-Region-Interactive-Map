import time
import requests
from bs4 import BeautifulSoup

# Basis-URL mit Platzhalter für die Seitennummer
BASE_URL = "https://footballdatabase.com/ranking/world/{}"

def scrape_clubs_with_country(start_page=1, end_page=60, delay=1.0):
    results = []
    for page in range(start_page, end_page + 1):
        url = BASE_URL.format(page)
        print(f"🔍 Lese Seite {page}: {url}")
        resp = requests.get(url)
        resp.raise_for_status()  # Stoppt bei HTTP-Fehlern

        soup = BeautifulSoup(resp.text, "html.parser")
        for tr in soup.select("table.table-hover tbody tr"):
            td = tr.select_one("td.club.text-left")
            if not td:
                continue

            # Club-Name
            club = td.select_one("div.limittext").get_text(strip=True)
            # Land aus dem zweiten <a class="sm_logo-name">
            country_tag = td.select_one("a.sm_logo-name")
            country = country_tag.get_text(strip=True) if country_tag else "–"

            results.append(f"{club} – {country}")

        time.sleep(delay)  # Kurz pausieren, um den Server zu schonen

    return results

def save_to_file(lines, filename="clubs_with_country.txt"):
    with open(filename, "w", encoding="utf-8") as f:
        for line in lines:
            f.write(line + "\n")
    print(f"✅ {len(lines)} Einträge in '{filename}' gespeichert.")

if __name__ == "__main__":
    entries = scrape_clubs_with_country(1, 60, delay=1.0)
    save_to_file(entries)
