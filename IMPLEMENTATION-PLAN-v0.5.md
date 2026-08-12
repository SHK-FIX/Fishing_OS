# Fishing OS v0.5 – Implementierungsplan

Stand: 13.08.2026
Status: Start der Umsetzungsphase

## Phase 0 – Schutz der bestehenden Daten

- v0.4 bleibt unangetastete Referenz
- vorhandenen Export/Import erneut testen
- reale v0.4-Testdaten als Migrationsfixture sichern
- keine Änderungen auf `main`

Abnahmekriterium: vorhandene Testdaten können jederzeit wiederhergestellt werden.

## Phase 1 – Native Basis

- Xcode-/SwiftUI-App anlegen
- Tab-Navigation gemäß `NAVIGATION-v0.5.md`
- helles Designsystem / Abstände / Karten / Buttons
- App-Icon / Fishing-OS-Branding integrieren
- lokale Persistenz initialisieren
- zentrale Fehler-/Logging-Struktur

Abnahmekriterium: App startet stabil auf iPhone, Navigation funktioniert, lokale Daten bleiben nach Neustart erhalten.

## Phase 2 – Kerndatenmodell

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
- Wiederherstellung nach App-Neustart

## Phase 3 – Migration v0.4 → v0.5

- v0.4-Exportdatei lesen
- Gewässer / Spots / Ereignisse übernehmen
- alte Angeltagstruktur in FishingDay + WaterSessions übersetzen
- historische Unsicherheiten erhalten
- Importbericht
- Sicherheitsbackup vor Migration

Abnahmekriterium: bestehende Testdaten erscheinen vollständig und korrekt in der nativen App.

## Phase 4 – Live-Modus

- Angeltag starten
- Gewässer-Session starten/wechseln
- Spot starten/beenden
- Phase ohne aktiven Spot
- Laufzeiten
- Wiederherstellung nach App-Unterbrechung
- Angeltag beenden

Keine Tackle-Pflicht im Live-Modus.

Abnahmekriterium: kompletter realer Angeltag lässt sich mit minimaler Bedienung dokumentieren.

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

- WeatherService
- Snapshot beim Session-/Spotstart
- manueller Refresh
- Offline-Status
- Herkunft des Snapshots speichern
- keine automatischen Fantasiewerte bei fehlender Verbindung

## Phase 7 – Karte & Spots

- Apple Maps / MapKit
- eigener Standort
- Gewässer / Spots
- Satellit / Hybrid / Karte
- Spot-Bottom-Sheet
- Spot schnell anlegen
- aktiver Spot
- Clustering
- Navigation

Offline-Kartenumfang wird anhand realer MapKit-Möglichkeiten separat getestet; lokale Spotdaten funktionieren unabhängig davon offline.

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

- Fotos aufnehmen / auswählen
- mehrere Fotos
- Videos bei Beobachtungen/Spots
- Vollbildansicht
- Medienverwaltung
- Speicherverhalten
- Backupintegration

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
- `.fosbackup`
- vollständiges Backup inkl. Medien
- Importvalidierung
- Konflikte / Dubletten
- Schema-Migration

## Phase 13 – Feldtest

Pflichttests auf echtem iPhone:
- Angeltag ohne Netz
- Angeltag mit mehreren Gewässern
- mehrere Spotwechsel + Wegzeiten
- Fang ohne vorher angelegten Spot
- Wetter manuell aktualisieren
- App während Session beenden / erneut öffnen
- Fotos bei schlechtem Licht
- Import/Export
- Papierkorb/Wiederherstellung
- sehr viele Spots

## Freigaberegel

Erst wenn Datenintegrität, Migration, Backup und Live-Workflow im Feldtest stabil sind, wird v0.5 nach `main` übernommen.

## Startpunkt

**Jetzt beginnen wir mit Phase 1 und 2: native Basis + Kerndatenmodell.**
