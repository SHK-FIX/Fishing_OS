# Fishing OS v0.5 – Karte & Spot-Aktionen

Stand: 12.08.2026
Status: freigegeben

## Ziel

Die Karte ist das Arbeitswerkzeug am Wasser. Spot-Aktionen müssen schnell, iPhone-tauglich, offline-first und ohne unnötige Seitenwechsel funktionieren.

## Kartenübersicht

Die Karte zeigt je nach Kontext:
- eigenen Standort
- gespeicherte Spots
- unbekannte / interessante Bereiche
- aktiven Spot eines laufenden Angeltags
- Karten-/Layer-Steuerung
- Schnellzugriff zum eigenen Standort

Kartenstil gemäß Einstellung:
- Karte
- Hybrid
- Satellit

## Spot auswählen

Spot antippen → kompaktes Bottom Sheet statt unnötigem Vollbildwechsel.

Das Bottom Sheet kann zeigen:
- Name
- datenbasierte Relevanz / Erfolgsstatus
- Gewässer
- Koordinaten
- Fänge
- Bisse
- Drillverluste
- Angelzeit
- Details öffnen
- als aktiven Spot setzen
- Navigation starten

## Aktiver Spot

Während eines laufenden Angeltags kann ein Spot mit einem Tap als aktiv gesetzt werden.

Beim Spotwechsel:
- vorheriger aktiver Spot wird zeitlich beendet
- Aufenthaltsdauer wird gespeichert
- neuer Spot wird aktiv
- Startzeit des neuen Spot-Aufenthalts wird gesetzt

Der aktive Spot wird auf der Karte eindeutig hervorgehoben.

## Navigation

Für einen gespeicherten Spot kann Navigation gestartet werden.

Je nach Verfügbarkeit:
- in Apple Karten öffnen
- offline verfügbare Navigation / Richtungshilfe innerhalb Fishing OS, soweit technisch umgesetzt

Fishing OS darf keine Internetverbindung voraussetzen, um gespeicherte Koordinaten anzuzeigen.

## Neuen Spot anlegen

Schnellaktion über den zentralen + Button bzw. Kartenaktion.

Möglichkeiten:
- Spot an aktueller Position anlegen
- Position auf Karte auswählen

Bei Anlage mindestens:
- automatische Koordinaten
- automatischer Spotname / Nummerierung möglich
- optional eigener Name
- optionale Notiz
- optionale Tiefe / Grund / Struktur / Zugang gemäß Spot-Datenmodell
- optionale Fotos / Medien

Alles bleibt später bearbeitbar.

## Unbekannten / interessanten Bereich speichern

Neben exakten Spots können größere interessante Bereiche markiert werden.

Zweck:
- noch nicht exakt erkundete Zone merken
- vielversprechenden Bereich speichern
- später daraus konkrete Spots entwickeln

Mögliche Daten:
- frei definierter Bereich auf Karte
- Name optional
- Notiz optional
- ungefähre Fläche / Geometrie

Ein unbekannter Bereich wird statistisch nicht wie ein präziser Spot behandelt.

## Viele Spots

Die Anzahl der Spots ist konzeptionell unbegrenzt.

Für Übersichtlichkeit:
- automatisches Clustering bei herausgezoomter Karte
- einzelne Spots bei passender Zoomstufe
- Filter
- optional Heatmap / statistische Darstellung

Eine Heatmap ist Analyse und darf nicht mit exakten Rohdaten verwechselt werden.

## Layer

Je nach technischer Verfügbarkeit:
- Meine Spots
- unbekannte Bereiche
- Gelände
- Tiefenlinien
- Strukturen

Nicht verfügbare Layer werden nicht vorgetäuscht.

## Offline-Verhalten

Offline müssen mindestens lokale Kernfunktionen weiterarbeiten:
- gespeicherte Spots anzeigen
- Spotdetails öffnen
- neuen Spot speichern
- Spot bearbeiten
- Spot in Papierkorb verschieben
- aktiven Spot setzen
- gespeicherte Koordinaten anzeigen

Kartengrundlagen hängen von der tatsächlich verfügbaren Offline-Kartenlösung ab.

Lokale Änderungen werden gespeichert und bei späterer Verbindung entsprechend der zukünftigen Synchronisationsstrategie verarbeitet.

## Datenschutz

Spots und Positionen sind standardmäßig privat.

Keine automatische Veröffentlichung oder externe Freigabe präziser Spotkoordinaten.

## GPS-Genauigkeit

Eine gespeicherte GPS-Position ist eine Messung mit möglicher Abweichung und wird nicht als mathematisch exakter Punkt interpretiert.

## Löschen

Für Spots gilt die globale Fishing-OS-Papierkorbregel aus `TRASH-RECOVERY-v0.5.md`.

Ein Spot wird bei normaler Nutzeraktion nicht sofort physisch gelöscht. Verknüpfungen zu Fängen, Angeltagen, Beobachtungen und Statistiken müssen erhalten bleiben und bei Wiederherstellung korrekt zurückkehren.

## UX-Prinzip

**Karte antippen → Aktion ausführen → weiterangeln.**

Die Karte soll sich wie ein Werkzeug anfühlen und nicht wie eine Verwaltungssoftware.
