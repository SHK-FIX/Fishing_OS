# Fishing OS v0.5 – Native SwiftUI Architektur

Stand: 13.08.2026
Status: freigegeben für Umsetzung

## Ziel

Fishing OS v0.5 wird als native iPhone-App in SwiftUI umgesetzt. Die bestehende PWA/v0.4 bleibt Referenz und Migrationsquelle, wird aber nicht als langfristige Hauptarchitektur weiter ausgebaut.

## Architekturprinzip

Schichten:

1. **App / Navigation**
2. **Features / Screens**
3. **Domain / Modelle und Geschäftslogik**
4. **Persistence / lokale Datenbank**
5. **Services / Wetter, Standort, Medien, Import/Export**
6. **Migration / v0.4 → v0.5**

Die UI darf keine Datenlogik duplizieren. Statistik, Sessions, Wetterzuordnung, Soft Delete und Migration werden zentral behandelt.

## Zielstruktur

```text
ios/
  FishingOS/
    App/
    Core/
      Models/
      Persistence/
      Services/
      Utilities/
    Features/
      Dashboard/
      Waters/
      Map/
      Catches/
      LiveSession/
      More/
      Settings/
      Tackle/
      Species/
      Statistics/
      Lab/
    Migration/
    Resources/
```

## Persistenz

Offline-first ist verbindlich.

V0.5 verwendet eine lokale persistente Datenbank. Das Datenmodell orientiert sich an `DATA-MODEL-v0.5.md`.

Grundregeln:
- stabile UUIDs
- Beziehungen statt Textduplikate
- Soft Delete via `deletedAt`
- historische Snapshots für veränderliche Stammdaten, wenn nötig
- Migrationen versionieren
- kein Cloud-Zwang

Die konkrete Persistenztechnologie wird so gewählt, dass SwiftUI-Integration, Beziehungen, Migrationen und Offline-Nutzung zuverlässig funktionieren. Für den ersten nativen Aufbau wird SwiftData bevorzugt, solange die Migrations- und Geräteanforderungen im realen Build erfüllt werden; andernfalls wird Core Data als Fallback verwendet.

## Navigation

Verbindliche Haupttabs:
- Übersicht
- Gewässer
- Karte
- Fänge
- Mehr

Der Live-Modus ist ein eigener App-Zustand, kein eigener Tab.

## Domain-Modelle

Kernobjekte:
- FishingDay
- WaterSession
- SpotVisit
- Water
- Spot
- FishingEvent
- WeatherSnapshot
- FishSpecies
- Lure
- Rig
- TackleComponent
- Setup
- MediaAsset
- Observation / Hypothesis
- ChangeRecord

Ein FishingDay kann mehrere WaterSessions enthalten. Eine WaterSession gehört genau zu einem Gewässer. Zwischen SpotVisits darf kein Spot aktiv sein.

## Ereignisse

`FishingEvent` bildet eine gemeinsame Basisschicht für:
- catch
- bite
- lostInFight
- follower
- observation
- lureLoss

Typspezifische Detaildaten werden getrennt modelliert, damit kein riesiger Datensatz mit dutzenden sinnlosen Null-Feldern entsteht.

## Zeitmodell

Jeder relevante Zeitwert speichert:
- absoluten Zeitpunkt
- ursprüngliche lokale Zeitzone
- bei Bedarf Original-Offset

Die Darstellung historischer Ereignisse verwendet standardmäßig die ursprüngliche Ortszeit des Ereignisses.

## Wetter

`WeatherSnapshot` ist ein eigener Datensatz.

Ein Snapshot besitzt mindestens:
- ID
- Zeitpunkt
- Zeitzone
- Koordinate / Ortsbezug
- Temperatur
- Luftdruck, falls vorhanden
- Windrichtung / Windstärke, falls vorhanden
- Bewölkung, falls vorhanden
- Quelle / Erfassungsart
- Qualitäts-/Statusinformation

Ereignisse referenzieren einen Snapshot statt Wetterwerte redundant zu kopieren.

## Medien

Medien werden über stabile IDs verwaltet. Datenbankeinträge speichern keine ausschließlich gerätespezifischen Foto-Pfade als einzige Wahrheit.

Originale in Apple Fotos bleiben außerhalb der Kontrolle von Fishing OS; interne Kopien/Referenzen werden separat behandelt.

## Statistik

Statistik wird aus Rohdaten berechnet und nicht als primäre Wahrheit gespeichert.

Ausnahmen:
- bewusst gecachte/abgeleitete Werte nur zur Performance
- Cache muss jederzeit aus Rohdaten rekonstruierbar sein

Definitionen folgen `METRICS-v0.5.md`.

## Papierkorb

Normales Löschen setzt `deletedAt`.

Gelöschte Datensätze bleiben samt Beziehungen erhalten. Endgültiges Löschen ist eine separate Operation aus dem Papierkorb.

## Import / Export

Backupformat und Migration siehe `IMPORT-EXPORT-BACKUP-v0.5.md`.

Native v0.5 erhält zusätzlich einen einmaligen Importpfad für bestehende v0.4-Daten.

## Migration v0.4

Migration erfolgt defensiv:
1. v0.4-Daten lesen
2. Schema erkennen
3. vor Migration Backup erzeugen
4. IDs erzeugen bzw. stabil übernehmen
5. Gewässer / Spots migrieren
6. Angeltage in FishingDay + WaterSession zerlegen
7. Ereignisse migrieren
8. fehlende Werte als unbekannt lassen
9. Importbericht erzeugen
10. Quellbackup unangetastet lassen

## Entwicklungsregel

Feature-Screens werden erst dann gebaut, wenn die dafür benötigten Domain-Modelle und Persistenzregeln stehen.

Reihenfolge: Datenintegrität → Live-Workflow → Karte/Spots → Erfassung → Archive → Analyse/Komfort.
