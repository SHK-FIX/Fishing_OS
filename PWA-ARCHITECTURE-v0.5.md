# Fishing OS v0.5 – PWA Architektur

Stand: 13.08.2026
Status: **AKTIVE UMSETZUNGSARCHITEKTUR**

## Ziel

Fishing OS v0.5 wird als installierbare Progressive Web App für iPhone umgesetzt. Die App soll sich weiterhin wie eine eigenständige iPhone-App anfühlen, dauerhaft vom Home-Bildschirm nutzbar sein und ohne wiederkehrende 7-Tage-Neuinstallation funktionieren.

## Architekturprinzipien

1. Mobile First / iPhone zuerst
2. Offline-first
3. lokale Datenhaltung
4. stabile IDs und versionsfähige Datenstruktur
5. UI und Geschäftslogik trennen
6. bestehende v0.4-Daten migrierbar halten
7. App-Funktionen dürfen nicht von einer dauerhaften Internetverbindung abhängen
8. externe Dienste wie Wetter/Karten nur ergänzend, nie als einzige Datenwahrheit

## Zielstruktur

Die bisherige große Einzeldatei `index.html` wird langfristig modularisiert. Zielrichtung:

```text
app/
  index.html
  manifest.webmanifest
  service-worker.js
  assets/
  src/
    app/
    features/
      dashboard/
      waters/
      map/
      catches/
      live-session/
      more/
      settings/
      tackle/
      species/
      statistics/
      lab/
    domain/
      models/
      rules/
      metrics/
    data/
      db/
      repositories/
      migrations/
    services/
      weather/
      location/
      media/
      import-export/
    ui/
      components/
      styles/
```

Die konkrete Dateiaufteilung darf während der Umsetzung pragmatisch angepasst werden. Entscheidender Punkt: keine neue monolithische 100.000-Zeilen-Datei.

## Lokale Datenbank

Empfohlene Richtung: **IndexedDB** mit eigener Repository-/Datenzugriffsschicht.

Grundregeln:
- stabile UUIDs
- versioniertes Schema
- Beziehungen über IDs
- Soft Delete mit `deletedAt`
- historische Snapshots bei veränderlichen Stammdaten
- migrationsfähig
- Rohdaten bleiben primäre Wahrheit

`localStorage` darf nur für kleine UI-/Einstellungswerte verwendet werden, nicht als Hauptdatenbank für das langfristige Angelarchiv.

## Kernmodelle

Technologieunabhängig gemäß `DATA-MODEL-v0.5.md`:
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
- Hypothesis / Observation
- ChangeRecord

## Zeitmodell

Beim Erfassen:
- aktueller iPhone-/Browser-Zeitpunkt
- absolute Zeit
- ursprüngliche Zeitzone (`Intl.DateTimeFormat().resolvedOptions().timeZone`)
- bei Bedarf UTC-Offset

Historische Anzeige nutzt standardmäßig die ursprüngliche lokale Ereigniszeit.

## Offline / Service Worker

Der Service Worker stellt die App-Oberfläche und statische Kernressourcen offline bereit.

Offline müssen mindestens funktionieren:
- App starten
- Gewässer und Spots anzeigen
- Angeltag starten/fortsetzen/beenden
- Spot wechseln / Spot anlegen
- alle Schnellereignisse speichern
- Fotos/Medien soweit lokal verfügbar verknüpfen
- Daten bearbeiten
- Papierkorb / Wiederherstellung
- Backup erzeugen und lokale Datei importieren

Nicht verfügbare Netzdienste werden klar als offline markiert.

## Session-Zuverlässigkeit

Ein laufender Angeltag wird nicht nur im UI-Zustand gehalten, sondern persistent gespeichert. Nach Reload, Browser-Neustart oder erneutem Öffnen vom Home-Bildschirm muss die aktive Session rekonstruierbar sein.

## Wetter

Siehe `WEATHER-SYSTEM-v0.5.md`.

Netzabhängige Wetterdaten werden als Snapshots gespeichert und anschließend lokal verwendet. Ereignisse dürfen offline weiter gespeichert werden.

## Standort / GPS

Browser-Geolocation wird verwendet, sofern freigegeben.

Regeln:
- GPS ist Messwert mit Genauigkeit, keine perfekte Wahrheit
- Genauigkeit mit speichern, soweit verfügbar
- kein Spot-Stammdatensatz muss vor einem Schnellereignis vollständig gepflegt sein
- Minimal-Spot kann direkt aus Ereignisworkflow erzeugt werden

## Karte

Für v0.5 wird die Kartenlösung pragmatisch nach PWA-Tauglichkeit ausgewählt.

Anforderungen:
- Satellit / Hybrid / Karte soweit technisch und lizenzseitig verfügbar
- eigener Standort
- Spotmarker
- Clustering
- Bottom Sheet / Spotaktionen
- aktive Spot-Hervorhebung
- private Koordinaten

Offline-Verfügbarkeit der Grundkarte wird separat von den lokal gespeicherten Fishing-OS-Daten behandelt. Spots und Koordinaten müssen auch dann erhalten bleiben, wenn der Kartenhintergrund nicht offline verfügbar ist.

## Kamera / Medien

PWA nutzt Web-/iOS-Systemwege:
- Datei-/Fotoauswahl
- Kameraaufruf, soweit vom iPhone/WebKit bereitgestellt
- mehrere Medien, soweit unterstützt

Falls eine Spezialfunktion der Kamera-App (z. B. Nachtmodus) innerhalb der PWA nicht verfügbar ist, gilt als akzeptierter Workflow:
**iPhone-Kamera verwenden → Foto anschließend aus Mediathek in Fishing OS auswählen.**

## Import / Export

Siehe `IMPORT-EXPORT-BACKUP-v0.5.md`.

PWA erstellt ein versionsfähiges Backup-Paket bzw. eine entsprechende portable Datei, die unabhängig vom Browsercache gespeichert werden kann.

## Datenschutz

- lokale Daten als Standard
- keine automatische Veröffentlichung
- keine Cloud-Pflicht
- präzise Spotdaten nicht ungefragt extern übertragen
- externe Dienste erhalten nur die für ihre Funktion zwingend notwendigen Daten

## Native Zukunftsoption

SwiftUI ist nicht Teil von v0.5. Siehe `NATIVE-ARCHITECTURE-v0.5.md` nur als zurückgestellte Zukunftsoption.

## Produktregel

**Fishing OS bleibt so lange PWA, wie die PWA die realen Anforderungen zuverlässig erfüllt. Erst eine echte technische Grenze rechtfertigt einen nativen Neubau.**
