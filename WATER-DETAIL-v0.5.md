# Fishing OS v0.5 – Gewässer-Detailseite

Stand: 12.08.2026
Status: freigegeben

## Ziel

Die Gewässer-Detailseite ist der zentrale persönliche Wissensbereich für ein einzelnes Gewässer. Sie verbindet Stammdaten, Karte, Spots, Ereignisse, Statistik, Analyse und Gewässer-Labor in einer mobilen, hellen iPhone-Oberfläche.

## Navigation / Bereiche

Vorgesehene Bereiche:
- Übersicht
- Spots
- Fänge / Ereignisse
- Analysen
- Labor

Die Navigation muss auf dem iPhone kompakt und schnell erreichbar bleiben.

## Übersicht

Die Übersicht zeigt mindestens:
- großes frei wählbares Titelbild
- Gewässername
- Gewässertyp
- Region / Land, sofern gepflegt
- Kurzinfo / Beschreibung
- zentrale Gewässerdaten
- aktueller Wetter-Snapshot bzw. Wetterbereich
- letzter Besuch
- wichtige persönliche Kennzahlen
- Zugang zu Bearbeiten-Aktionen

Mögliche Gewässerdaten:
- Typ
- Fläche
- maximale Tiefe
- Höhe
- Koordinaten / Referenzpunkt
- weitere frei ergänzbare Notizen und Informationen

## Spots & Karte

- große Kartenansicht
- alle zum Gewässer gehörenden Spots
- Satellit / Hybrid / Karte gemäß globaler Kartenregel
- eigener aktueller Standort sichtbar, wenn Standortfreigabe vorhanden
- unbegrenzte Spotanzahl
- Clustering bei vielen Spots
- Spotliste / Bottom Sheet
- Spot hinzufügen
- Spot öffnen, bearbeiten, starten oder zur Navigation verwenden
- Spot-Relevanz kann später Statistik und Erfolg berücksichtigen

## Analysen & Statistik

Gewässerspezifisch auswertbar, u. a.:
- Fänge
- Bisse
- Drillverluste
- Nachläufer
- Beobachtungen
- Köderverluste
- Angeltage / Angelzeit
- Trends nach Zeitraum
- größte Fische
- Fischarten
- Top-Spots
- Top-Köder / Setups
- Bedingungen und Aktivitätsmuster

Statistik und wissenschaftliche Analyse bleiben konzeptionell getrennt: Statistik beantwortet primär „Was ist passiert?“, Analyse stärker „Unter welchen Bedingungen / warum könnte es passiert sein?“.

## Gewässer-Labor

Eigener Bereich für:
- Hypothesen
- strukturierte Beobachtungen
- Notizen
- Experimente / Vergleiche
- Erkenntnisse
- Einordnung anhand wachsender Datenbasis

Hypothesen können mit späteren Ereignissen und Beobachtungen verglichen werden. Mögliche Einordnung: spricht dafür / neutral / spricht eher dagegen / noch zu wenig Daten.

Keine Scheingenauigkeit; Stichprobengröße und Datenqualität müssen berücksichtigt werden.

## Letzte Aktivitäten

Chronologische gewässerspezifische Aktivitätsansicht, z. B.:
- Fang
- Biss
- Im Drill verloren
- Nachläufer
- Beobachtung
- Köderverlust
- Spotwechsel / Angeltage, sofern sinnvoll

Einträge sind antippbar und führen in die jeweilige Detail-/Bearbeiten-Ansicht.

## Bearbeitbarkeit – verbindliche Grundregel

**Alle vom Nutzer eingetragenen Gewässerdaten sind jederzeit nachträglich bearbeitbar.**

Das umfasst insbesondere:
- Gewässername
- Titelbild und weitere Fotos
- Beschreibung / Kurzinfo
- Gewässertyp
- Fläche
- Tiefe
- Höhe
- Koordinaten / Referenzdaten
- Notizen
- zugeordnete Fischarten
- Spots
- Beobachtungen
- Hypothesen
- Medien
- weitere manuell gepflegte Informationen

Medien können später ergänzt, ersetzt oder entfernt werden.

Die UI erhält einen klar erreichbaren Bearbeiten-Zugang, z. B. über Drei-Punkte-Menü / Bearbeiten. Einzelne Bereiche können zusätzlich kontextbezogene Aktionen wie „Foto ändern“, „Notiz hinzufügen“ oder „Hypothese bearbeiten“ anbieten.

## Automatische Daten und Historie

Automatisch erfasste Daten wie GPS, Wetter-Snapshots und Zeitwerte dürfen korrigierbar sein, aber eine Korrektur darf den ursprünglich automatisch erfassten Wert nicht unbemerkt vernichten. Wo dies für Analyse und Nachvollziehbarkeit relevant ist, wird der Originalwert intern erhalten.

## Löschen / Archivieren

Wenn ein Datensatz bereits mit historischen Ereignissen oder Analysen verknüpft ist, soll Fishing OS bevorzugt archivieren bzw. deaktivieren statt ihn destruktiv zu löschen. Historische Daten dürfen nicht durch spätere Änderungen an Stammdaten verfälscht werden.

## Produktprinzip

Die Gewässer-Detailseite ist kein statischer Steckbrief, sondern ein **lebender persönlicher Wissensdatensatz**, der mit jedem Angeltag, jeder Beobachtung und jeder späteren Korrektur wächst.

Offline-first und private Spots bleiben unverändert Kernprinzipien.
