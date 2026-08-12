# Fishing OS v0.5 – Kerndatenmodell

Status: finalisiert nach Gesamtcheck

## Architekturentscheidung

v0.4/PWA bleibt stabile Referenz und Migrationsquelle. Der professionelle Zielaufbau für iPhone wird nativ in SwiftUI gedacht. Die vorhandene HTML/PWA-Struktur wird nicht als langfristige Hauptarchitektur weiter aufgebläht.

## Kernbeziehungen

### FishingDay
Ein Kalendertag / persönlicher Angeltag. Kann mehrere Gewässer enthalten.

Enthält:
- stabile UUID
- Start / Ende
- eine oder mehrere WaterSessions
- Tagesnotiz
- Tagesmedien optional

### WaterSession
Zusammenhängender Abschnitt eines Angeltags an genau einem Gewässer.

Beispiel: morgens Chira, später Ayagaures = ein FishingDay mit zwei WaterSessions.

Enthält:
- stabile UUID
- waterId
- Start / Ende
- SpotVisits
- Wetter-Snapshots
- Ereignisse

### SpotVisit
Zeitlicher Aufenthalt an einem Spot.

Enthält:
- stabile UUID
- spotId
- Start / Ende
- Dauer abgeleitet

Ein FishingDay / eine WaterSession darf ausdrücklich Phasen **ohne aktiven Spot** enthalten. Wegzeiten oder Erkundungsphasen werden keinem Spot zugerechnet.

### Event
Gemeinsame Basis für:
- Fang
- Biss
- Im Drill verloren
- Nachläufer
- Beobachtung
- Köderverlust

Enthält mindestens:
- stabile UUID
- eventType
- Zeitstempel
- ursprüngliche Zeitzone
- waterSessionId
- spotVisitId optional
- spotId
- GPS optional
- weatherSnapshotId optional
- Medienreferenzen
- deletedAt optional
- Änderungshistorie

## Zeit und Zeitzone

Beim Erfassen wird die aktuelle iPhone-Zeit verwendet. Zusätzlich werden gespeichert:
- absoluter Zeitpunkt (`Date`)
- ursprüngliche lokale Zeitzone als IANA-Identifier, z. B. `Atlantic/Canary` oder `Europe/Berlin`
- bei Bedarf ursprünglicher UTC-Offset

Damit bleibt ein Fang von 20:30 Uhr auf Gran Canaria auch später in Berlin als 20:30 Uhr Ortszeit des Fangortes nachvollziehbar und springt nicht unbemerkt auf einen anderen Kalendertag.

## Spot bei Schnellerfassung

Für Live-Schnellerfassung gehört jedes Ereignis zu einem Spot. **Ein bereits vorher angelegter Spot ist dafür aber ausdrücklich keine Voraussetzung.**

Wenn gerade kein Spot existiert oder aktiv ist, bietet Fishing OS direkt im Ereignis-Workflow eine Sofortlösung:
- „Spot hier anlegen“ mit aktueller GPS-Position, sofern verfügbar
- automatischer Name / nächste Spotnummer
- keine weiteren Pflichtfelder
- Ereignis wird danach sofort diesem Spot zugeordnet

Wenn GPS gerade nicht verfügbar ist, kann trotzdem ein neuer Spot ohne präzise Koordinaten angelegt und später ergänzt bzw. korrigiert werden.

Der Nutzer muss einen Fang niemals abbrechen oder die Ereignismaske verlassen, nur weil vorher noch kein Spot angelegt wurde.

Historische Fänge bleiben eine Ausnahme: Dort kann die Standortgenauigkeit ausdrücklich nur „Gewässer bekannt“, „ungefährer Bereich“ oder „Ort unbekannt“ sein.

## Stammdaten vs. historische Momentaufnahme

Veränderliche Bibliotheksobjekte wie Köder, Setup, Fischart, Spotname oder Tackle können referenziert werden. Für historische Analyse relevante Eigenschaften werden zusätzlich als Momentaufnahme gespeichert, wenn spätere Stammdatenänderungen sonst die Vergangenheit verfälschen würden.

## Wetter

Wetter wird über eigene WeatherSnapshot-Datensätze referenziert; Details siehe `WEATHER-SYSTEM-v0.5.md`.

## Medien

Medien besitzen stabile IDs und werden nicht nur über flüchtige Dateipfade referenziert.

## Löschen

Alle relevanten Nutzerobjekte unterstützen Soft Delete über `deletedAt`. Details siehe `TRASH-RECOVERY-v0.5.md`.

## Import / Export

Stabile UUIDs und Beziehungen sind Grundlage für `IMPORT-EXPORT-BACKUP-v0.5.md`.

## Produktregel

**Ein Angeltag kann mehrere Gewässer enthalten. Ein Gewässerabschnitt kann mehrere Spots enthalten. Zwischen Spots darf kein Spot aktiv sein. Bei einer Live-Schnellerfassung wird ein fehlender Spot direkt in der Ereignismaske mit minimalem Aufwand angelegt.**
