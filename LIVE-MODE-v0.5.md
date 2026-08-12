# Fishing OS v0.5 – Angeltag / Live-Modus

Stand: 12.08.2026
Status: freigegeben

## Ziel

Der Live-Modus ist das Cockpit während eines laufenden Angeltags. Er muss am Wasser schnell, eindeutig und mit möglichst wenig Eingabe funktionieren.

Priorität: **angeln statt App bedienen.**

## Zustände

Der Workflow besitzt drei klare Zustände:
1. Angeltag starten
2. laufender Angeltag / Live-Modus
3. Angeltag beenden / Zusammenfassung

## Angeltag starten

Beim Start:
- Gewässer auswählen
- Startzeit automatisch setzen, aber korrigierbar
- Start-Spot optional auswählen oder neu anlegen
- Wetter-Snapshot automatisch erfassen, soweit verfügbar
- GPS / Standort gemäß Berechtigung erfassen
- direkt in den Live-Modus wechseln

Kein Köder oder Tackle-Setup muss zum Start ausgewählt werden.

## Laufender Live-Modus

Die Hauptansicht zeigt kompakt:
- Status „Angeltag läuft“
- aktuelles Gewässer
- aktueller Spot
- Aufenthaltsdauer am aktuellen Spot
- Wetter
- manuelles „Wetter aktualisieren“
- Karte
- eigenen aktuellen Standort
- aktiven Spot
- Schnellereignisse
- Session-Info
- Notiz zum Angeltag
- Spot wechseln

Der aktuelle Zustand muss jederzeit eindeutig erkennbar sein.

## Karte

- eigener Standort sichtbar, sofern freigegeben
- aktiver Spot sichtbar
- „Zu meinem Standort“-Funktion
- Kartenstil gemäß Einstellungen: Karte / Hybrid / Satellit
- kein nerviges dauerhaftes automatisches Zentrieren
- letzter sinnvoller Kartenbereich kann erhalten bleiben

## Schnellereignisse

Direkt erreichbar:
- Fang
- Biss
- Im Drill verloren
- Nachläufer
- Beobachtung
- Köderverlust

Ziel: Ereignis mit möglichst wenigen Taps sichern und sofort weiterangeln.

## Spotwechsel

„Spot wechseln“ ist eine zentrale Aktion.

Beim Wechsel:
- bisheriger Spot wird zeitlich beendet
- Aufenthaltsdauer wird automatisch gespeichert
- neuer vorhandener Spot kann gewählt werden
- alternativ kann ein neuer Spot erstellt werden
- neuer Spot wird als aktiv gesetzt

Die Zeitdaten bilden später die Grundlage für Spot- und Erfolgsstatistiken.

## Session-Info

Kompakte Live-Werte, z. B.:
- Startzeit
- bisherige Dauer
- Anzahl besuchter Spots
- Anzahl Ereignisse

Keine überladene Live-Statistik. Tiefere Auswertung gehört in die spätere Statistikansicht.

## Notizen

Eine schnelle Notiz zum gesamten Angeltag ist jederzeit möglich. Spot- oder Ereignisnotizen bleiben zusätzlich an ihren jeweiligen Datensätzen möglich.

## Köder & Tackle – verbindliche UX-Regel

**Der Live-Modus besitzt kein dauerhaftes aktives Köder- oder Setup-Feld.**

Der Nutzer soll beim Köderwechsel nicht gezwungen werden, Fishing OS ständig zu aktualisieren.

Köder/Tackle können optional auf zwei Ebenen erfasst werden:

### 1. Ereignisbezogen

Bei Fang, Biss, Drillverlust, Nachläufer, Köderverlust usw. kann der tatsächlich relevante Köder bzw. das Setup optional angegeben werden.

Fishing OS darf dabei zuletzt verwendete oder statistisch plausible Einträge als schnellen Vorschlag anbieten, aber niemals ungefragt als Tatsache speichern.

### 2. Angeltagbezogen

Beim Beenden oder späteren Bearbeiten eines Angeltags gibt es optional **„Verwendete Köder ergänzen“**.

- Mehrfachauswahl aus dem Köderkatalog
- keine Pflicht zur Reihenfolge
- keine Pflicht zur genauen Nutzungsdauer
- bereits über Ereignisse bekannte Köder können automatisch als bereits dokumentiert angezeigt werden
- fehlende Köder können nachträglich ergänzt werden

## Statistikregel für Köder

Fishing OS unterscheidet ausdrücklich zwischen:
- **an diesem Angeltag verwendet**
- **mit einem konkreten Ereignis verknüpft**

Diese Daten dürfen statistisch nicht gleichgesetzt werden.

Beispiel:
- „Chatterbait wurde an 12 Angeltagen verwendet“
- „Chatterbait ist mit 17 dokumentierten Fischkontakten verknüpft“

Nur konkrete Ereignisverknüpfungen dürfen für entsprechende Kontakt-/Fangquoten als direkte Ereignisdaten behandelt werden. Eine reine Tagesnutzung beweist nicht, wie lange oder wie häufig der Köder tatsächlich gefischt wurde.

## Angeltag beenden

Die Abschlussansicht zeigt eine kompakte Zusammenfassung:
- Gewässer
- Startzeit
- Endzeit
- Gesamtdauer
- besuchte Spots
- Ereignisse gesamt
- optional verwendete Köder ergänzen
- optional Tagesnotiz anzeigen / bearbeiten

Das Beenden darf nicht durch zusätzliche Pflichtformulare blockiert werden.

**Beenden → speichern → fertig.**

Alle Details können später nachbearbeitet werden.

## Unterbrechungen / App-Lifecycle

Ein laufender Angeltag muss App-Unterbrechungen überleben.

Wenn Fishing OS in den Hintergrund geht, iOS die App beendet oder der Nutzer später zurückkehrt, bleibt die laufende Session lokal erhalten. Beim erneuten Öffnen wird der aktuelle Zustand wiederhergestellt.

Ein App-Neustart darf einen laufenden Angeltag nicht stillschweigend beenden oder verlieren.

## Offline-first

Der Live-Modus muss auch ohne Mobilfunkverbindung für lokale Kernfunktionen nutzbar bleiben.

Nicht verfügbare externe Daten wie frisches Wetter werden entsprechend gekennzeichnet und können, soweit sinnvoll und technisch möglich, später nachgezogen werden.

## Nachbearbeitung

Der gesamte Angeltag bleibt nachträglich bearbeitbar:
- Zeiten
- Spots / Zuordnung
- Notizen
- verwendete Köder
- Ereignisse über ihre jeweiligen Detailansichten
- weitere optionale Informationen

Automatisch erfasste Originalwerte bleiben gemäß systemweiter Bearbeiten-Logik intern nachvollziehbar.

## Produktprinzip

**Der Live-Modus dokumentiert den Angeltag im Hintergrund der Tätigkeit – er darf nicht selbst zur Tätigkeit werden.**
