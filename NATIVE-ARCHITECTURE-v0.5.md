# Fishing OS – Native SwiftUI Architektur (zurückgestellt)

Stand: 13.08.2026
Status: **ZURÜCKGESTELLT / NICHT Teil der aktiven v0.5-Umsetzung**

## Entscheidung

Fishing OS v0.5 wird **nicht nativ in SwiftUI umgesetzt**.

Die aktive Produkt- und Entwicklungsrichtung bleibt eine installierbare **PWA (Progressive Web App)** für iPhone. Grund: dauerhafte private Nutzung ohne 7-Tage-Neusignierung und ohne notwendiges kostenpflichtiges Apple-Developer-Programm.

SwiftUI bleibt ausdrücklich nur eine **spätere Zukunftsoption**, falls die PWA technisch an Grenzen stößt, die für Fishing OS wesentlich werden.

## Wann Native erneut geprüft wird

Eine native SwiftUI-Version wird erst ernsthaft geprüft, wenn mindestens eine relevante PWA-Grenze den Produktnutzen tatsächlich behindert, z. B.:
- Karten-/GPS-Funktionen lassen sich nicht zuverlässig genug umsetzen
- Kamera-/Medienintegration reicht für den realen Einsatz nicht aus
- Hintergrund-/Session-Zuverlässigkeit ist unzureichend
- lokale Datenhaltung / Backup stößt an echte Grenzen
- spätere Apple-spezifische Funktionen werden zwingend benötigt

Nicht ausreichend als Grund:
- „Native wäre schöner“
- theoretische Erweiterbarkeit
- Komfortfunktionen ohne realen Nutzungsdruck

## Schutz der bisherigen Arbeit

Die bereits formulierten Domain- und Datenmodellentscheidungen bleiben gültig, soweit sie technologieneutral sind:
- stabile IDs
- FishingDay / WaterSession / SpotVisit
- mehrere Gewässer pro Angeltag
- Phasen ohne aktiven Spot
- Ereignisse mit optionalem Minimal-Spot
- WeatherSnapshot
- Soft Delete / Papierkorb
- historische Momentaufnahmen
- Import / Export / Backup

Diese Regeln werden in der PWA mit Web-Technologien umgesetzt.

## Zukunft

Falls später ein nativer Wechsel nötig wird, dient die PWA als produktive Referenz und Datenquelle. Ein nativer Neubau muss die vorhandenen Backups und Datenstrukturen importieren können.

**Bis dahin gilt: PWA first. SwiftUI erst, wenn es wirklich nicht mehr anders sinnvoll geht.**
