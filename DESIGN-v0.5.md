# Fishing OS v0.5 – Design Freeze / Master-Index

Stand: 13.08.2026
Status: **FREIGEGEBEN / FEATURE FREEZE / PWA-FIRST**

Diese Datei ist der zentrale Index der freigegebenen v0.5-Produkt- und UX-Entscheidungen. Detailregeln liegen in den verlinkten Spezifikationen und haben bei Konflikten Vorrang.

## Architekturentscheidung

Fishing OS v0.5 wird als installierbare **PWA für iPhone** umgesetzt.

Aktive Architektur: `PWA-ARCHITECTURE-v0.5.md`.

SwiftUI / Native ist ausdrücklich zurückgestellt. Eine native App wird erst wieder geprüft, wenn die PWA bei realer Nutzung an eine wesentliche technische Grenze stößt. Siehe `NATIVE-ARCHITECTURE-v0.5.md` nur als Zukunftsnotiz.

## Grundprinzipien

- Zielplattform zuerst iPhone / PWA.
- v0.4/PWA bleibt stabile Referenz und direkte Ausgangsbasis.
- helles, hochwertiges, Apple-inspiriertes Mobile-First-Design.
- Offline-first.
- private Spots / keine automatische Veröffentlichung.
- alle Nutzerdaten nachträglich bearbeitbar.
- normales Löschen = Papierkorb / Wiederherstellung.
- Schnellereignisse dürfen das Angeln nicht unterbrechen.
- Vorschläge sind keine Fakten.
- Statistik zeigt Muster ohne Scheingenauigkeit oder unbelegte Kausalität.
- keine wiederkehrende 7-Tage-Neuinstallation als Voraussetzung für die private Nutzung.

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

Ein Kalendertag bleibt ein Angeltag, auch wenn mehrere Gewässer besucht werden. Intern werden dafür getrennte Gewässer-Sessions geführt.

## Wetter

Finale Wetterlogik siehe `WEATHER-SYSTEM-v0.5.md`.

Grundsatz:
- automatisch an Spot-/Session-Grenzen
- Ereignisse übernehmen letzten gültigen Snapshot
- manuelles Wetter-Update bei relevanten Änderungen
- keine erfundenen Offline-/Historienwerte

## Karte & Spots

- Karte / Hybrid / Satellit soweit in der gewählten PWA-Kartenlösung verfügbar
- aktueller Standort sichtbar
- kein permanentes Auto-Recenter
- unbegrenzte Spots
- Clustering
- Bottom Sheet / Schnellaktionen
- Spot-Relevanz nur datenbasiert
- Ufer und Boot gleichermaßen berücksichtigt
- zwischen zwei Spot-Aufenthalten darf ausdrücklich kein Spot aktiv sein

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
- Schnellfang darf ohne Detailpflichtfelder gespeichert werden.
- Ist noch kein Spot angelegt, muss direkt aus der Schnellmaske ein minimaler Spot angelegt werden können; fehlende Details werden später ergänzt.
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

**Archivieren und Löschen sind getrennte Zustände:** Archivieren blendet einen weiterhin gültigen Datensatz aus aktiven Auswahllisten aus; Löschen verschiebt ihn in den Papierkorb. Endgültiges Löschen erfolgt nur bewusst im Papierkorb.

## Kamera & Medien

Finale Medien-/Kamera-Regeln siehe `MEDIA-CAMERA-v0.5.md`.

PWA-Spezialregel: Falls bestimmte Funktionen der iPhone-Kamera innerhalb der Web-App nicht verfügbar sind, bleibt **Aufnahme in der iPhone-Kamera → anschließend aus der Mediathek importieren** ein vollständig akzeptierter Workflow.

## Einstellungen

Minimalistische Hauptseite + tiefe Unterseiten siehe `SETTINGS-v0.5.md`.

Eine globale „App zurücksetzen“-Funktion existiert nicht.

## Import / Export / Backup

Siehe `IMPORT-EXPORT-BACKUP-v0.5.md`.

Vollständige Backups erhalten stabile IDs, Beziehungen, Medien, Papierkorb und Schema-Versionen.

## Kerndatenmodell

Verbindliche Entity- und Zeitmodell-Grundlage siehe `DATA-MODEL-v0.5.md`.

Zeitwerte werden mit iPhone-/Browserzeit sowie ursprünglicher lokaler Zeitzone gespeichert.

## Angeltag-Detail / Tagesbericht

Siehe `ANGLER-DAY-DETAIL-v0.5.md`.

## Verbindlicher Feature Freeze

**Fishing OS v0.5 ist inhaltlich freigegeben.**

Ab diesem Stand gilt:
- keine neuen Komfortfunktionen oder Feature-Ideen mehr für v0.5
- neue Ideen wandern in einen späteren Backlog
- Ausnahme nur bei einer echten Produkt-, Datenintegritäts-, Sicherheits- oder technischen Blockerlücke
- bestehende freigegebene Funktionen werden beim Implementieren nicht stillschweigend entfernt oder grundlegend verändert
- technische Detailentscheidungen dürfen während der Umsetzung getroffen werden, solange sie die freigegebenen Produktregeln nicht verändern

## Nächster Schritt

1. bestehende PWA sichern und Datenbestand prüfen
2. PWA-Struktur modularisieren, ohne funktionierende v0.4-Daten zu zerstören
3. IndexedDB-/Migrationsschicht für v0.5 aufbauen
4. Live-Modus und Schnellereignisse auf das neue Datenmodell umstellen
5. Archive, Karte, Medien, Tackle und Analyse schrittweise ergänzen
6. auf echtem iPhone mit realen Angeltagen testen
7. erst nach Datenintegritäts-, Import-/Export- und Feldtest Freigabe nach `main`

**Planungsphase beendet. PWA wird gebaut. SwiftUI wartet auf einen echten Grund.**
