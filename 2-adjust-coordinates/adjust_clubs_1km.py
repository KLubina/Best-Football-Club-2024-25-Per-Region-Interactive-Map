#!/usr/bin/env python3
"""
Script zum automatischen Verschieben von Clubs, sodass alle einen freien Umkreis von mindestens 1 km haben.
Verwendet einen force-directed repulsion-Ansatz, um bessere Konvergenz zu gewährleisten.
"""
import re
import json
import math
import sys

# Pfade: INPUT_PATH kann als Argument übergeben werden
if len(sys.argv) >= 2:
    INPUT_PATH = sys.argv[1]
else:
    INPUT_PATH = "clubs-data.js"
OUTPUT_PATH = INPUT_PATH.replace('.js', '-adjusted.js')

# Parameter
THRESHOLD_KM = 1.0        # minimaler Abstand in Kilometern
MARGIN_KM = 0.01          # Sicherheitsmarge in Kilometern
MAX_ITERATIONS = 1000     # maximale Anzahl Iterationen
EPSILON = 1e-6            # kleine Schwelle für minimale Verschiebung

# Earth radius
R = 6371.0  # km

def haversine(lat1, lon1, lat2, lon2):
    φ1, φ2 = math.radians(lat1), math.radians(lat2)
    Δφ = math.radians(lat2 - lat1)
    Δλ = math.radians(lon2 - lon1)
    a = math.sin(Δφ/2)**2 + math.cos(φ1)*math.cos(φ2)*math.sin(Δλ/2)**2
    return 2 * R * math.atan2(math.sqrt(a), math.sqrt(1 - a))

# bearing from point 1 to point 2
def bearing(lat1, lon1, lat2, lon2):
    φ1, φ2 = math.radians(lat1), math.radians(lat2)
    Δλ = math.radians(lon2 - lon1)
    y = math.sin(Δλ) * math.cos(φ2)
    x = math.cos(φ1)*math.sin(φ2) - math.sin(φ1)*math.cos(φ2)*math.cos(Δλ)
    return math.atan2(y, x)

# Datei einlesen und JSON extrahieren
with open(INPUT_PATH, 'r', encoding='utf-8') as f:
    text = f.read()
match = re.search(r'const\s+CLUBS_DATA\s*=\s*(\[.*?\]);', text, re.S)
if not match:
    sys.exit(f"ERROR: Kein CLUBS_DATA-Array in {INPUT_PATH} gefunden.")
array_str = match.group(1)
# JS > JSON
array_str = re.sub(r'//.*?\n', '\n', array_str)
array_str = re.sub(r'/\*.*?\*/', '', array_str, flags=re.S)
array_str = re.sub(r'([{,])\s*([A-Za-z0-9_]+)\s*:', r'\1"\2":', array_str)
array_str = re.sub(r"'(.*?)'", r'"\1"', array_str)
array_str = re.sub(r',\s*(\]|})', r'\1', array_str)
clubs = json.loads(array_str)

# Iterativer Repulsions-Algorithmus
for iteration in range(1, MAX_ITERATIONS+1):
    # prepare displacement vectors for each club
    disps = [(0.0, 0.0) for _ in clubs]
    total_repulsions = 0

    # compute repulsion forces for all too-nahe Paare
    for i, A in enumerate(clubs):
        for j, B in enumerate(clubs):
            if i == j:
                continue
            d = haversine(A['lat'], A['lng'], B['lat'], B['lng'])
            if d < THRESHOLD_KM:
                # benötigte Verschiebung
                needed = (THRESHOLD_KM - d) + MARGIN_KM
                # Richtung von B weg von A
                θ = bearing(A['lat'], A['lng'], B['lat'], B['lng'])
                # komponenten in km: dx = East, dy = North
                dx = needed * math.sin(θ)
                dy = needed * math.cos(θ)
                disps[j] = (disps[j][0] + dx, disps[j][1] + dy)
                total_repulsions += 1

    # anwenden der Verschiebungen
    max_shift = 0.0
    for idx, club in enumerate(clubs):
        dx, dy = disps[idx]
        if abs(dx) < EPSILON and abs(dy) < EPSILON:
            continue
        lat = club['lat']
        # Umrechnung auf Grad
        dlat = (dy / R) * (180.0 / math.pi)
        dlon = (dx / (R * math.cos(math.radians(lat)))) * (180.0 / math.pi)
        club['lat'] += dlat
        club['lng'] += dlon
        shift_dist = math.hypot(dx, dy)
        max_shift = max(max_shift, shift_dist)

    print(f"Iteration {iteration}: {total_repulsions} Repulsions, max shift {max_shift:.4f} km")

    # Abbruchbedingungen
    if total_repulsions == 0 or max_shift < EPSILON:
        print(f"Fertig nach {iteration} Iterationen. Alle Abstände >= {THRESHOLD_KM} km.")
        break
else:
    print("Warnung: Maximale Iterationsanzahl erreicht; Abstände möglicherweise noch < 1 km.")

# Ergebnis zurückschreiben
with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
    f.write('// Clubs mindestens 1 km auseinander\n')
    f.write('const CLUBS_DATA = ' + json.dumps(clubs, indent=2, ensure_ascii=False) + ';\n')
print(f"Angepasste Daten in {OUTPUT_PATH} gespeichert.")
