# Fishing OS v0.5 – Design Freeze / Master-Index

Stand: 12.08.2026
Status: nach Gesamtcheck aktualisiert

Diese Datei ist der zentrale Index der freigegebenen v0.5-Produkt- und UX-Entscheidungen. Detailregeln liegen in den verlinkten Spezifikationen und haben bei Konflikten Vorrang.

## Grundprinzipien

- Zielplattform zuerst iPhone / SwiftUI.
- v0.4/PWA bleibt stabile Referenz und Migrationsquelle, nicht langfristige Zielarchitektur.
- helles, hochwertiges, Apple-inspiriertes Mobile-First-Design.
- Offline-first.
- private Spots / keine automatische Veröffentlichung.
- alle Nutzerdaten nachträglich bearbeitbar.
- normales Löschen = Papierkorb / Wiederherstellung.
- Schnellereignisse dürfen das Angeln nicht unterbrechen.
- Vorschläge sind keine Fakten.
- Statistik zeigt Muster ohne Scheingenauigkeit oder unbelegte Kausalität.

## Dashboard / Übersicht

Freigegeben:
- Highlights oben
- große Karten-/Angeltag-Fläche
- Schnellereignisse
- aktiver Angeltag / letzte Ereignisse
- Originales Fishing-OS-Logo bleibt Teil der Designsprache

## Globale Navigation

Finale Hierarchie siehe `NAVIGATION-v0.5.md`.

Haupttabs:
1. Übersicht
2. Gewässer
3. Karte
4. Fänge
5. Mehr

## Schnellereignisse

Finale Pflichtfeld- und Sofort-Spot-Regeln siehe `QUICK-CAPTURE-RULES-v0.5.md`.

Ereignisse:
- Fang
- Biss
- Im Drill verloren
- Nachläufer
- Beobachtung
- Köderverlust

Detailworkflows siehe `EVENT-WORKFLOWS-v0.5.md`.

## Angeltag / Live-Modus

Freigegebene UX siehe `LIVE-MODE-v0.5.md`.

Finales Zeitmodell für mehrere Gewässer und Übergänge ohne aktiven Spot siehe `SESSION-SPOT-TRANSITIONS-v0.5.md` und `DATA-MODEL-v0.5.md`.

## Wetter

Finale Wetterlogik siehe `WEATHER-SYSTEM-v0.5.md`.

Grundsatz:
- automatisch an Spot-/Session-Grenzen
- Ereignisse übernehmen letzten gültigen Snapshot
- manuelles Wetter-Update bei relevanten Änderungen
- keine erfundenen Offline-/Historienwerte

## Karte & Spots

- Karte / Hybrid / Satellit
- aktueller Standort sichtbar
- kein permanentes Auto-Recenter
- unbegrenzte Spots
- Clustering
- Bottom Sheet / Schnellaktionen
- Spot-Relevanz nur datenbasiert
- Ufer und Boot gleichermaßen berücksichtigt

Details:
- `MAP-SPOT-ACTIONS-v0.5.md`
- `SPOT-DETAIL-v0.5.md`

Echolot bleibt Zukunftsidee und ist nicht Teil von v0.5.

## Gewässer

- `WATER-ARCHIVE-v0.5.md`
- `WATER-DETAIL-v0.5.md`

Gewässer sind lebende Wissensdatensätze mit Spots, Ereignissen, Statistik, Analyse und Labor.

## Fänge

- Fangmaske: Wetter oben, Fischart, Länge, Gewicht, Köder/Technik optional, großes Foto, Notiz.
- Schnellfang darf ohne Detailpflichtfelder gespeichert werden; Spot wird bei Bedarf direkt minimal angelegt.
- historische Fänge siehe `HISTORICAL-ENTRY-v0.5.md`.
- Fangarchiv siehe `CATCH-ARCHIVE-v0.5.md`.

## Fischarten

- bearbeitbare Süßwasser-Bibliothek
- Deutschland und Spanien als Startpriorisierung
- eigene Arten jederzeit möglich
- kein Salzwasser-Katalog in v0.5

Details:
- `FISH-SPECIES-LIBRARY-v0.5.md`
- `SPECIES-CATALOG-v0.5.md`

## Tackle

Umfangreiches Tackle-System siehe `TACKLE-SYSTEM-v0.5.md`.

Verbindliche Modelltrennung siehe `TACKLE-MODEL-CLARIFICATION-v0.5.md`:
- Köder = Lockmittel
- Rig = Montage
- Komponenten = Haken/Gewichte/Terminal Tackle usw.
- Setup = komplette Kombination

Naturköder gehören nicht zum Startkatalog.

## Statistik / Analyse / Labor

Grundstruktur freigegeben:
- Statistik beantwortet „Was ist passiert?“
- Analyse untersucht Bedingungen und Zusammenhänge
- Gewässer-Labor verwaltet Hypothesen und Beobachtungen

Einheitliche Kennzahlen siehe `METRICS-v0.5.md`.

## Beobachtungen

Wissenschaftlich strukturierte Feldbeobachtung mit Kategorien, Beute/Nahrungsangebot, Fotos/Videos, optionaler Hypothesenübernahme und klarer Trennung zwischen Beobachtung und Vermutung.

Siehe `EVENT-WORKFLOWS-v0.5.md`.

## Bearbeiten / Historie

Systemweite Bearbeiten-Logik siehe `EDITING-SYSTEM-v0.5.md`.

## Papierkorb

Globale reversible Löschregel siehe `TRASH-RECOVERY-v0.5.md`.

## Kamera & Medien

Finale Medien-/Kamera-Regeln siehe `MEDIA-CAMERA-v0.5.md`.

## Einstellungen

Minimalistische Hauptseite + tiefe Unterseiten siehe `SETTINGS-v0.5.md`.

Eine globale „App zurücksetzen“-Funktion ist gestrichen.

## Import / Export / Backup

Siehe `IMPORT-EXPORT-BACKUP-v0.5.md`.

Vollständige Backups erhalten stabile IDs, Beziehungen, Medien, Papierkorb und Schema-Versionen.

## Kerndatenmodell

Verbindliche Entity- und Zeitmodell-Grundlage siehe `DATA-MODEL-v0.5.md`.

## Angeltag-Detail / Tagesbericht

Siehe `ANGLER-DAY-DETAIL-v0.5.md`.

## Feature Freeze

Nach Abschluss der noch notwendigen Dokument-Synchronisierung gilt:

**Keine neuen v0.5-Funktionen ohne echte Produktlücke.**

Nächster Entwicklungsschritt ist die technische Umsetzung und Migration, nicht weitere Feature-Sammlung.
