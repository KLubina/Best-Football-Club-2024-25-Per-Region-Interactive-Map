import re, json, math

# Pfade anpassen
INPUT_PATH  = r"C:\GitHubDesktop\Best-Football-Club-Per-Region-Interactive-Map\data\clubs-data.js"
OUTPUT_PATH = r"C:\GitHubDesktop\Best-Football-Club-Per-Region-Interactive-Map\data\clubs-data-adjusted.js"

# 1) Datei einlesen und JS-Array extrahieren
with open(INPUT_PATH, 'r', encoding='utf-8') as f:
    text = f.read()
match = re.search(r'const\s+CLUBS_DATA\s*=\s*(\[.*?\]);', text, re.S)
if not match:
    raise ValueError(f"Kein CLUBS_DATA-Array in {INPUT_PATH} gefunden.")
array_str = match.group(1)

# 2) JS-Style zu JSON konvertieren
# Entferne JS-Kommentare
array_str = re.sub(r'//.*?\n', '\n', array_str)
array_str = re.sub(r'/\*.*?\*/', '', array_str, flags=re.S)
# Unquoted keys --> quoted keys
array_str = re.sub(r'([{,])\s*([A-Za-z0-9_]+)\s*:', r'\1"\2":', array_str)
# Single- auf Double-Quotes
array_str = re.sub(r"'(.*?)'", r'"\1"', array_str)
# Trailing commas
array_str = re.sub(r',\s*(\]|})', r'\1', array_str)

# 3) Parsen mit Debug-Ausgabe bei Fehler
try:
    clubs = json.loads(array_str)
except json.JSONDecodeError as e:
    print(f"JSONDecodeError: {e.msg} at line {e.lineno} column {e.colno} (char {e.pos})")
    # Kontext um Fehlerpos
    start = max(0, e.pos-60)
    end = min(len(array_str), e.pos+60)
    snippet = array_str[start:end]
    print("--- Snippet um Fehlerpos: ---")
    print(snippet)
    raise

# 4) Hilfsfunktionen
R = 6371.0

def haversine(lat1, lon1, lat2, lon2):
    φ1, φ2 = math.radians(lat1), math.radians(lat2)
    Δφ = math.radians(lat2 - lat1)
    Δλ = math.radians(lon2 - lon1)
    a = math.sin(Δφ/2)**2 + math.cos(φ1)*math.cos(φ2)*math.sin(Δλ/2)**2
    return 2 * R * math.atan2(math.sqrt(a), math.sqrt(1 - a))

def bearing(lat1, lon1, lat2, lon2):
    φ1, φ2 = math.radians(lat1), math.radians(lat2)
    Δλ = math.radians(lon2 - lon1)
    y = math.sin(Δλ) * math.cos(φ2)
    x = math.cos(φ1)*math.sin(φ2) - math.sin(φ1)*math.cos(φ2)*math.cos(Δλ)
    return math.atan2(y, x)

def destination(lat1, lon1, θ, d_km):
    δ = d_km / R
    φ1, λ1 = math.radians(lat1), math.radians(lon1)
    φ2 = math.asin(math.sin(φ1)*math.cos(δ) + math.cos(φ1)*math.sin(δ)*math.cos(θ))
    λ2 = λ1 + math.atan2(
        math.sin(θ)*math.sin(δ)*math.cos(φ1),
        math.cos(δ) - math.sin(φ1)*math.sin(φ2)
    )
    return math.degrees(φ2), math.degrees(λ2)

# 5) Clubs verschieben
shifts = 0
for i, ci in enumerate(clubs):
    for j in range(i+1, len(clubs)):
        cj = clubs[j]
        dist = haversine(ci['lat'], ci['lng'], cj['lat'], cj['lng'])
        if dist < 2.0:
            θ = bearing(ci['lat'], ci['lng'], cj['lat'], cj['lng'])
            new_lat, new_lng = destination(ci['lat'], ci['lng'], θ, 2.0)
            clubs[j]['lat'], clubs[j]['lng'] = new_lat, new_lng
            shifts += 1

# 6) Speichern
output = 'const CLUBS_DATA = ' + json.dumps(clubs, indent=4, ensure_ascii=False) + ';'
with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
    f.write('// Anpassung: Clubs mind. 2 km Abstand\n')
    f.write(output)

print(f"Fertig – {shifts} Clubs verschoben. Datei '{OUTPUT_PATH}' erstellt.")
