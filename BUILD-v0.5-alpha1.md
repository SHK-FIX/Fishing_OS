# Fishing OS v0.5 – Alpha 1 Build

Stand: 13.08.2026
Status: erster lauffähiger PWA-v0.5-Build auf `update/v0.5-workflow`

## Einstieg

Die Root-Datei `index.html` leitet auf `app-v05.html` weiter. Beide Dateien liegen unter derselben Origin, daher bleibt der bestehende IndexedDB-Datenbestand grundsätzlich erreichbar.

## Bereits umgesetzt

- finale Hauptnavigation: Übersicht / Gewässer / Karte / Fänge / Mehr
- PWA-Start ohne Apple-Developer-Signing
- Upgrade der bestehenden IndexedDB statt neuer isolierter Datenbank
- zusätzliche Stores für Sessions, Spot-Aufenthalte, Wetter, Arten, Tackle, Medien und Änderungshistorie
- bestehende Gewässer / Spots / Tage / Ereignisse bleiben im alten Datenbestand erhalten und werden beim Start defensiv ergänzt
- Angeltag starten
- ein Angeltag mit mehreren Gewässer-Sessions
- Gewässer während eines laufenden Tages wechseln
- Spot starten
- Spot beenden und Übergangsphase ohne aktiven Spot
- minimalen Spot direkt aus Schnellerfassung erzeugen
- Schnellereignisse: Fang, Biss, Im Drill verloren, Nachläufer, Beobachtung, Köderverlust
- keine Detailpflichtfelder in Schnellereignissen
- Fang: optionale Fischart, Länge, Gewicht in lbs, Ködertext, Notiz, Foto
- Gewichtsanzeige in Fangdetails inkl. metrischer Umrechnung
- Wetter-Snapshot beim Session-/Spotstart
- manueller Wetter-Refresh während eines Ereignisses
- Wetter-Herkunft/Status wird im Snapshot gespeichert
- Gewässer anlegen/bearbeiten
- Spots anlegen/bearbeiten
- GPS-Übernahme für Gewässer und Spots
- Gewässerübersicht und Gewässerdetail
- Spotdetail
- Fangarchiv
- historische Fänge ohne GPS-Zwang
- Fischarten-Startbibliothek + eigene Arten
- erste Tackle-Bibliothek mit Baitcast-/Stationär-Trennung
- Tagebuch-Grundansicht
- Statistik-Grundkennzahlen
- Papierkorb / Wiederherstellung als Soft Delete
- Backup-Export als `.fosbackup`
- Import vorhandener/ neuer JSON-Backups
- Sicherheits-Snapshot vor Import
- Service Worker v0.5 mit Offline-Cache für App-Shell
- Dashboard-Titelbild lokal auswählbar

## Bewusst noch nicht fertig

Alpha 1 ist der erste echte Bau und kein Release-Kandidat. Noch zu vertiefen sind insbesondere:

- vollständige Bearbeiten-Masken aller Ereignistypen
- detailliertes Spot-Datenmodell / Spot-Labor
- vollständiges Tackle-Komponenten-/Rig-/Setup-Modell
- Medienverwaltung für mehrere Fotos/Videos
- Backup-Medienpaket statt JSON/DataURL-Zwischenlösung
- erweiterte Statistiken / wissenschaftliche Analyse / Labor
- umfangreiche Filter/Sortierungen
- Karten-Clustering und weitere Karten-Layer
- Konflikt-/Dubletten-UI beim Import
- vollständige Migration alter Spot-Session-Strukturen
- vollständige UI-Politur gemäß freigegebenen Mockups

## Testreihenfolge für Alpha 1

1. Bestehenden v0.4-Datenbestand vorher exportieren.
2. Branch-Version öffnen und einmal online vollständig laden.
3. App schließen / erneut öffnen.
4. Bestehende Gewässer und Ereignisse kontrollieren.
5. Test-Angeltag starten.
6. Spot starten → Spot beenden → einige Minuten ohne Spot → nächsten Spot starten.
7. Schnellfang erfassen.
8. Schnellfang testen, wenn vorher kein Spot aktiv ist → „Spot hier anlegen“.
9. Gewässer wechseln, ohne den Angeltag zu beenden.
10. Wetter manuell aktualisieren.
11. Angeltag beenden.
12. Backup erzeugen.
13. Erst danach weitere echte Testdaten eintragen.

## Sicherheitsregel

`main` bleibt unverändert. Alpha 1 befindet sich ausschließlich auf `update/v0.5-workflow`.
