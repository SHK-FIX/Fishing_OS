# Fishing OS v0.4 – GC Field Test

## Schwerpunkt

Feldtest-Version für den realen Einsatz am Wasser mit Angeltagen, Spot-Sessions, Ereignissen, Wetter-Snapshots, Gewässerprofilen und Kartenansicht.

## Enthalten

- Angeltage starten und beenden
- Spot-Sessions innerhalb eines Angeltags
- Fang, Biss, Im Drill verloren, Nachläufer und Beobachtung
- Wetter-Snapshots und manuelle Wetter-Aktualisierung
- Gewässerprofile und Spots
- Satellit/Karte/Hybrid in der Kartenansicht
- Gewässer-Labor
- lokale Datensicherung über Export/Import
- App-Icons und PWA-Installation

## Bekannte Probleme vor v0.5

- Offene Spot-Sessions können in historischen Angeltagen fälschlich weiterlaufen und dadurch unrealistische Minutenwerte erzeugen.
- Der bisherige automatische Spotwechsel bildet reale Wege-/Übergangszeiten zwischen Spots nicht sauber ab.
- Spot-Sessions brauchen künftig einen expliziten Ablauf mit „Spot starten“ und „Spot beenden“.
- Historische Zeitdaten benötigen defensive Plausibilitätsprüfungen und nachträgliche Korrekturmöglichkeiten.

## Sicherheitsgrundsatz für v0.5

Der stabile v0.4-Stand bleibt auf `main` unangetastet, bis v0.5 auf einem separaten Branch geprüft wurde. Änderungen an Datenstruktur und Migration werden erst nach Prüfung übernommen.
