# Fishing OS v0.5 – Statistik- und Bewertungslogik

Status: finalisiert nach Gesamtcheck

## Ziel

Begriffe wie Erfolg, Kontaktquote und Relevanz werden appweit einheitlich verwendet. Rohdaten bleiben getrennt; zusammengesetzte Kennzahlen werden daraus berechnet.

## Grundzählungen

- Fang = erfolgreich gelandeter / dokumentierter Fang
- Biss = dokumentierter Biss ohne separaten Fangdatensatz für dasselbe Ereignis
- Drillverlust = Fisch im Drill verloren
- Nachläufer = sichtbare Verfolgung ohne Biss
- Beobachtung = Feldbeobachtung, kein Fischkontakt
- Köderverlust = Tackle-Ereignis, kein Fischkontakt sofern nicht zusätzlich Drillverlust dokumentiert

## Fischkontakt

Für die zentrale Kontaktkennzahl zählen:
- Fang
- Biss
- Drillverlust

Nachläufer werden separat als **Aktivität / Interesse** ausgewertet und nicht in die harte Kontaktquote gemischt.

## Aktivität

Aktivitätsereignisse umfassen:
- Fang
- Biss
- Drillverlust
- Nachläufer

Beobachtungen bleiben eine eigene ökologische Datenklasse.

## Kennzahlen

### Kontaktquote pro Stunde
`Fischkontakte / dokumentierte Angelzeit in Stunden`

### Fangquote pro Stunde
`Fänge / dokumentierte Angelzeit in Stunden`

### Landungsquote
`Fänge / (Fänge + Drillverluste)`

Nur anzeigen, wenn Nenner > 0.

### Biss-zu-Fang-Kontext
Nicht pauschal als eine einzige Quote erzwingen, weil Biss, Drillverlust und Fang getrennte Ereignistypen sind. Fishing OS zeigt bevorzugt die Ereigniskette bzw. Landungsquote statt eine irreführende universelle „Biss-zu-Fang-Quote“.

### Köderverlustquote
Nur sinnvoll mit passendem Bezugswert anzeigen. Ohne dokumentierte Nutzungsdauer / Wurfzahl keine künstliche Prozentquote. Stattdessen zunächst:
- Verluste pro Angeltag
- Verluste pro Angelstunde
- Verluste je dokumentiertem Einsatz / Ereignisbezug, sofern vorhanden

## Spot- und Gewässerrelevanz

Relevanz ist kein einzelner Rohwert, sondern ein Ranking-Signal aus:
- dokumentierter Angelzeit
- Anzahl unabhängiger Besuche
- Fangquote pro Stunde
- Kontaktquote pro Stunde
- Fischgröße / PB-Relevanz
- Datenaktualität
- Datenmenge
- Köderverlust-/Risikoinformationen als separate Dimension

Ein einzelner Glücksfang darf einen Spot oder ein Gewässer nicht dauerhaft auf Platz 1 setzen.

## Datenqualität

Jede abgeleitete Bewertung erhält intern eine Datenbasis, z. B.:
- sehr gering
- gering
- mittel
- gut

Mindestanforderungen für sichtbare qualitative Labels wie „Sehr erfolgreich“ werden erst nach ausreichender Angelzeit und mehreren unabhängigen Besuchen erreicht. Bis dahin: **„Noch nicht bewertet“**.

Die exakten Schwellen dürfen später kalibriert werden, ohne Rohdaten zu verändern.

## Historische Daten

Historische Fänge zählen für alle Kennzahlen, deren benötigte Daten verlässlich vorhanden sind. Fehlende Spot-, Zeit- oder Wetterdaten werden nicht geschätzt.

## Kausalität

Fishing OS zeigt Muster und Korrelationen, keine unbelegten Ursachen.

## Produktregel

**Rohdaten zuerst, verständliche Kennzahlen darüber, Scheingenauigkeit niemals.**
