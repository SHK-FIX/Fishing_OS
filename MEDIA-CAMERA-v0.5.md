# Fishing OS v0.5 – Kamera & Medien

Status: finalisiert nach Gesamtcheck

## Ziel

Fotos und Videos sollen sich auf dem iPhone natürlich anfühlen, offline funktionieren und langfristig sicher mit den Fishing-OS-Daten verknüpft bleiben.

## Aufnahme

Fishing OS bietet:
- Foto aufnehmen
- Video aufnehmen, wo vorgesehen
- Fotos/Videos aus der Mediathek auswählen
- mehrere Medien pro Datensatz, wo sinnvoll

## Native iPhone-Kamera

Fishing OS verwendet nach Möglichkeit Apples systemnahe Kameraoberfläche statt eine unnötig komplett eigene Kamera nachzubauen. Apple stellt über `UIImagePickerController` eine Systemoberfläche zum Aufnehmen von Fotos und Videos mit Standard-Kamerasteuerung bereit.

Wichtige technische Einschränkung: Nicht jede Spezialfunktion der eigenständigen Apple-Kamera-App ist Drittanbieter-Apps automatisch in identischer Form zugänglich. Deshalb wird **kein Versprechen gegeben, dass z. B. Nachtmodus in jeder In-App-Kamera exakt wie in Apples Kamera-App verfügbar ist**.

Wenn eine benötigte Kamera-Funktion über die verfügbare Systemaufnahme nicht zuverlässig angeboten wird, bleibt der sichere Fallback:
1. Aufnahme mit der normalen iPhone-Kamera-App.
2. Anschließend über den Apple-Fotopicker in Fishing OS auswählen.

Die Mediathekauswahl wird mit `PhotosPicker` / PhotosUI gedacht und unterstützt Bilder und Videos sowie Mehrfachauswahl.

## Medienverwaltung

Medien können:
- nachträglich hinzugefügt
- sortiert
- ersetzt
- in den Fishing-OS-Papierkorb verschoben
- wiederhergestellt
werden.

Das Original in der Apple-Fotomediathek wird dabei nicht ungefragt gelöscht.

## Speicherung

Fishing OS verwaltet Medien über stabile Medien-IDs. Flüchtige lokale Dateipfade allein sind nicht ausreichend.

Für Backups können von Fishing OS verwaltete Kopien in das Backup-Paket aufgenommen werden.

## Speicherplatz

Videos können sehr groß werden. Fishing OS zeigt langfristig den belegten Medienspeicher und darf optionale Kompression / Qualitätsstufen anbieten. Eine automatische aggressive Kompression ohne Nutzerkontrolle ist nicht vorgesehen.

Thumbnails / Vorschaubilder dürfen separat erzeugt werden, um Listen und Archive schnell zu halten.

## Metadaten

EXIF-/Medienmetadaten können als Vorschlag genutzt werden, z. B. bei historischen Fängen für Datum oder Position. Sie werden niemals ungefragt als bestätigte Tatsache übernommen.

## Offline

Aufnahme, lokale Zuordnung, Anzeige bereits lokaler Medien und spätere Bearbeitung funktionieren grundsätzlich offline.

## Datenschutz

Medien und darin enthaltene Standortdaten bleiben privat. Für spätere Teilen-Funktionen muss separat entschieden werden, ob Metadaten / GPS enthalten sein dürfen.

## Produktregel

**Bestmögliche native iPhone-Erfahrung, aber keine falschen Versprechen über Kamera-Funktionen, die Apple Drittanbieter-Apps nicht vollständig bereitstellt.**
