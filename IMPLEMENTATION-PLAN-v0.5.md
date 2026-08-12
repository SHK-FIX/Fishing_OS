# Fishing OS v0.5 – Implementierungsplan

Stand: 13.08.2026
Status: Start der Umsetzungsphase

## Architekturentscheidung

Fishing OS v0.5 wird als **PWA** umgesetzt.

SwiftUI / Native ist ausdrücklich zurückgestellt und wird erst geprüft, wenn die PWA bei realer Nutzung an eine wesentliche technische Grenze stößt.

Aktive Architektur: `PWA-ARCHITECTURE-v0.5.md`

## Phase 0 – Schutz der bestehenden Daten

- v0.4 bleibt unangetastete Referenz
- vorhandenen Export/Import erneut testen
- reale v0.4-Testdaten als Migrationsfixture sichern
- keine Änderungen auf `main`

Abnahmekriterium: vorhandene Testdaten können jederzeit wiederhergestellt werden.

## Phase 1 – PWA-Basis stabilisieren und modularisieren

- bestehende PWA als Ausgangspunkt verwenden
- App-Shell / Navigation gemäß `NAVIGATION-v0.5.md`
- helles Designsystem / Abstände / Karten / Buttons
- App-Icon / Fishing-OS-Branding integrieren
- Service Worker prüfen und versionieren
- bestehende monolithische Struktur schrittweise modularisieren
- zentrale Fehler-/Logging-Struktur

Abnahmekriterium: App startet stabil als Home-Screen-PWA, Navigation funktioniert online und offline, bestehende Daten bleiben erhalten.

## Phase 2 – Lokale Datenbank / Kerndatenmodell

- IndexedDB-Datenzugriffsschicht aufbauen
- versioniertes Schema
- stabile UUIDs
- Migration aus bestehender v0.4-Datenstruktur

Umsetzen:
- Water
- Spot
- FishingDay
- WaterSession
- SpotVisit
- FishingEvent-Basis
- WeatherSnapshot
- MediaAsset
- Soft Delete / ChangeRecord-Grundlage

Tests:
- ein Angeltag mit zwei Gewässern
- mehrere SpotVisits
- Übergangszeit ohne Spot
- Ereignis an Spot
- Ereignis mit direkt neu angelegtem Minimal-Spot
- Wiederherstellung nach App-/Browser-Neustart

## Phase 3 – Migration v0.4 → v0.5

- bestehende v0.4-Daten lesen
- Gewässer / Spots / Ereignisse übernehmen
- alte Angeltagstruktur in FishingDay + WaterSessions übersetzen
- historische Unsicherheiten erhalten
- Importbericht
- Sicherheitsbackup vor Migration

Abnahmekriterium: vorhandene Testdaten erscheinen vollständig und korrekt in v0.5.

## Phase 4 – Live-Modus

- Angeltag starten
- Gewässer-Session starten/wechseln
- Spot starten/beenden
- Phase ohne aktiven Spot
- Laufzeiten
- Wiederherstellung nach PWA-Neustart / Reload
- Angeltag beenden

Keine Tackle-Pflicht im Live-Modus.

## Phase 5 – Schnellereignisse

Reihenfolge:
1. Fang
2. Biss
3. Im Drill verloren
4. Nachläufer
5. Beobachtung
6. Köderverlust

Globale Regel:
- keine Detailpflichtfelder
- Spot kann direkt minimal erzeugt werden
- Wetterwert aus aktuellem Snapshot
- manueller Wetter-Refresh
- alles später bearbeitbar

## Phase 6 – Wetter

- Web-Wetterservice anbinden
- Snapshot beim Session-/Spotstart
- manueller Refresh
- Offline-Status
- Herkunft des Snapshots speichern
- keine automatischen Fantasiewerte bei fehlender Verbindung

## Phase 7 – Karte & Spots

- PWA-taugliche Kartenlösung
- eigener Standort via Browser-Geolocation
- Gewässer / Spots
- Satellit / Hybrid / Karte soweit verfügbar
- Spot-Bottom-Sheet
- Spot schnell anlegen
- aktiver Spot
- Clustering
- Navigation / externe Kartenübergabe, soweit sinnvoll

Offline-Kartenumfang wird separat getestet. Lokale Spotdaten funktionieren unabhängig vom Kartenhintergrund offline.

## Phase 8 – Gewässer & Fangarchive

- Gewässerarchiv
- Gewässerdetail
- Fangarchiv
- Fangdetail
- Suche / Filter / Sortierung
- historische Fänge

## Phase 9 – Fischarten & Tackle

- Fischartenbibliothek
- Deutschland / Spanien Startset
- eigene Arten
- Tackle-Komponentenmodell
- Köder
- Rigs
- Setups
- Baitcast / Stationär
- Bilder / Illustrationsfallback

## Phase 10 – Medien

- Kamera-/Dateiauswahl in iOS-PWA
- mehrere Fotos
- Videos bei Beobachtungen/Spots soweit praktikabel
- Vollbildansicht
- Medienverwaltung
- Speicherverhalten
- Backupintegration

Fallback bei fehlenden Kamera-Spezialfunktionen: Aufnahme in der iPhone-Kamera und anschließender Import aus der Mediathek.

## Phase 11 – Statistik / Analyse / Labor

- definierte Rohkennzahlen
- Spot-/Gewässerstatistik
- Köderstatistik
- Tagesanalyse
- PBs
- wissenschaftliche Formulierungsregeln
- Hypothesen / Beobachtungen
- Gewässer-Labor

Analyse erst nach stabiler Rohdatenerfassung implementieren.

## Phase 12 – Papierkorb / Backup / Import-Export

- zentraler Papierkorb
- Wiederherstellung inklusive Beziehungen
- versionsfähiges Fishing-OS-Backup
- vollständiges Backup inkl. Medien soweit technisch sinnvoll
- Importvalidierung
- Konflikte / Dubletten
- Schema-Migration

## Phase 13 – PWA-Feldtest

Pflichttests auf echtem iPhone:
- PWA vom Home-Bildschirm
- mehrere Tage ohne Neuinstallation
- Angeltag ohne Netz
- Angeltag mit mehreren Gewässern
- mehrere Spotwechsel + Wegzeiten
- Fang ohne vorher angelegten Spot
- Wetter manuell aktualisieren
- PWA schließen / erneut öffnen während laufender Session
- Fotos bei schlechtem Licht + Mediathek-Fallback
- Import/Export
- Papierkorb/Wiederherstellung
- sehr viele Spots

## Native-Eskalationskriterium

Erst wenn ein wesentlicher, real getesteter PWA-Mangel nicht vernünftig lösbar ist, wird SwiftUI erneut bewertet.

## Freigaberegel

Erst wenn Datenintegrität, Migration, Backup und Live-Workflow im Feldtest stabil sind, wird v0.5 nach `main` übernommen.

## Startpunkt

**Jetzt beginnen wir mit Phase 1 und 2: PWA-Basis + lokale Datenbank / Kerndatenmodell.**
