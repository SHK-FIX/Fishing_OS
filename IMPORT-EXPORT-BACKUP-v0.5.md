# Fishing OS v0.5 – Import, Export & Backup

Stand: 12.08.2026
Status: freigegeben

## Ziel

Import, Export und Backup sind ein zentraler Bestandteil von Fishing OS und kein bloßer Unterpunkt der Einstellungen. Weil Fishing OS offline-first und als langfristiges persönliches Angelarchiv gedacht ist, müssen Daten vollständig, portabel, wiederherstellbar und versionssicher sein.

## Grundprinzipien

- vollständiger Export aller relevanten Fishing-OS-Daten
- vollständiger Import auf demselben oder einem anderen Gerät
- Beziehungen zwischen Datensätzen bleiben erhalten
- kein blindes Überschreiben vorhandener Daten
- keine Duplikatlawinen
- Papierkorb-Daten werden mitgesichert
- Import und Export funktionieren grundsätzlich ohne aktive Internetverbindung
- vor riskanten Importvorgängen wird ein Sicherheitsbackup erzeugt
- Backupformat wird versioniert

## Backupformat

Fishing OS verwendet ein eigenes Backup-Paket, z. B.:

`FishingOS-Backup.fosbackup`

Intern kann das Paket technisch als ZIP-Container aufgebaut sein und mindestens enthalten:

- `manifest.json`
- strukturierte Daten-Dateien, z. B. JSON
- Medienordner
- optionale Vorschaudaten / Metadaten

Der Nutzer muss die interne Struktur nicht sehen oder verstehen.

## Manifest

Das Manifest enthält mindestens:
- Backupformat-Version
- Datenbankschema-Version
- App-Version
- Erstellungsdatum
- eindeutige Backup-ID
- Anzahl der wichtigsten Datensatztypen
- Information, ob Medien enthalten sind
- Information, ob Papierkorb-Daten enthalten sind

Beispiel intern:
- `backupFormatVersion`
- `schemaVersion`
- `appVersion`
- `createdAt`
- `backupId`

## Vollständiger Export

Ein Komplett-Export enthält grundsätzlich:
- Gewässer
- Spots
- unbekannte / interessante Kartenbereiche
- Angeltage
- Fänge
- Bisse
- Im Drill verloren
- Nachläufer
- Beobachtungen
- Köderverluste
- historische Einträge
- Fischarten-Bibliothek
- Tackle-Bibliothek
- Ruten
- Rollen
- Schnüre / Vorfächer
- Haken
- Zubehör
- Rigs / Setups
- Köder
- Labor-Einträge / Hypothesen
- Notizen
- Einstellungen, soweit sinnvoll und geräteübergreifend übertragbar
- Änderungshistorien, soweit gespeichert
- Papierkorb-Daten
- Medien und Medienbeziehungen

## Beziehungen und stabile IDs

Jeder relevante Datensatz besitzt eine stabile interne ID.

Beim Export werden Beziehungen über diese stabilen IDs erhalten.

Beispiel:
Ein Fang bleibt nach Import weiterhin korrekt verknüpft mit:
- Gewässer
- Spot
- Angeltag
- Fischart
- Köder
- Setup
- Fotos
- Wetter-Snapshot

Import darf keine Beziehungen verlieren oder versehentlich auf falsche Objekte umbiegen.

## Medien

Fotos und Videos sind Teil der Backupstrategie.

Ein vollständiges Backup darf sich nicht nur auf lokale Dateipfade verlassen, da diese auf einem anderen Gerät nicht gültig wären.

Das Backup-Paket enthält daher, sofern vollständiges Backup gewählt wurde:
- Kopien der von Fishing OS verwalteten Medien
- stabile Medien-IDs
- Zuordnungen zu Datensätzen
- Metadaten, soweit sinnvoll

Fishing OS darf dabei Originalmedien aus der Apple-Fotomediathek nicht verändern oder löschen.

## Import

Beim Import wird zuerst das Backup validiert:
- Format lesbar?
- Schema unterstützt?
- Manifest vorhanden?
- Backup vollständig?
- Medienintegrität soweit prüfbar?

Erst danach beginnt die eigentliche Übernahme.

## Sicherheitsbackup vor Import

Vor einem Import, der bestehende lokale Daten verändern oder ergänzen kann, erstellt Fishing OS automatisch ein lokales Sicherheitsbackup des aktuellen Zustands.

Ziel: Der Nutzer soll bei Importproblemen oder falscher Auswahl auf den vorherigen Zustand zurückkehren können.

## Konfliktstrategie

Vorhandene Daten werden nicht blind überschrieben.

Fishing OS unterscheidet mindestens:
- Datensatz existiert nicht → neu importieren
- gleiche stabile ID und gleicher Inhalt → überspringen
- gleiche stabile ID, aber unterschiedliche Version → Konflikt behandeln
- andere ID, aber möglicherweise gleicher fachlicher Datensatz → mögliche Dublette erkennen

Bei Konflikten darf Fishing OS nicht still entscheiden, wenn dadurch Daten verloren gehen könnten.

Mögliche Optionen:
- lokalen Datensatz behalten
- Backup-Version verwenden
- beide behalten, wenn fachlich sinnvoll
- Details vergleichen

## Dubletten

Dublettenprüfung kann sich je nach Datentyp auf mehrere Merkmale stützen.

Beispiele:
Fang:
- Datum/Uhrzeit
- Gewässer
- Fischart
- Länge/Gewicht
- Foto-ID / Medienabgleich

Gewässer:
- Name
- Region
- Koordinaten

Spot:
- Gewässer
- Koordinaten
- Name

Fishing OS darf mögliche Dubletten vorschlagen, aber keine Einträge ungefragt zusammenführen.

## Schema-Versionierung und Migration

Jedes Backup enthält eine `schemaVersion`.

Bei Import älterer Backups führt Fishing OS definierte Migrationen durch, sofern unterstützt.

Ziel:
Ein Backup aus einer älteren Fishing-OS-Version soll nicht wertlos werden, nur weil sich das Datenmodell weiterentwickelt hat.

Migrationen müssen:
- reproduzierbar
- nachvollziehbar
- möglichst verlustfrei
sein.

Wenn eine Migration nicht sicher möglich ist, wird der Import gestoppt und verständlich erklärt.

## Import-Protokoll

Nach dem Import erhält der Nutzer eine klare Zusammenfassung:
- neu importiert
- aktualisiert
- übersprungen
- Konflikte
- Fehler
- Medien importiert

Das Protokoll kann lokal gespeichert werden, damit ein späterer Fehler nachvollziehbar bleibt.

## Teilexport

Teilexport ist vorgesehen, aber für v0.5 nachrangig gegenüber vollständigem Backup.

Später sinnvoll:
- einzelnes Gewässer
- einzelner Angeltag
- ausgewählte Fänge
- Tackle-Bibliothek
- Fischarten-Bibliothek

Teilexporte müssen abhängige Daten intelligent mitnehmen oder den Nutzer klar informieren, was enthalten ist.

## Datenschutz beim Export

Ein vollständiges persönliches Backup darf präzise GPS-Daten enthalten, weil es zur Wiederherstellung bestimmt ist.

Für spätere Teilen-/Teilexporte sollen Optionen vorgesehen werden:
- präzise Positionen entfernen
- Spotnamen anonymisieren
- GPS runden
- Medien optional ausschließen

Ein Backup und eine Teilen-Datei sind konzeptionell nicht dasselbe.

## Papierkorb

Papierkorb-Daten werden in vollständigen Backups standardmäßig mitgesichert.

Beim Import bleiben ihr Löschstatus und ihre Beziehungen erhalten.

Ein gelöschter Spot wird nach Import also nicht plötzlich als aktiver Spot wieder sichtbar, sondern bleibt im Papierkorb, bis der Nutzer ihn wiederherstellt.

## Offline-first

Export und Import benötigen für lokale Dateien keine Internetverbindung.

Nutzung möglicher iOS-Systemdialoge zum Speichern / Öffnen / AirDrop ist erlaubt, ändert aber nichts am lokalen Datenmodell.

## Backup-UX

Unter Einstellungen → Daten & Backup:
- Backup erstellen
- Backup importieren
- letztes Backup anzeigen
- Backup-Informationen anzeigen
- Sicherheitsbackup-Status

Der Nutzer soll klar erkennen:
- wann zuletzt gesichert wurde
- ob Medien enthalten waren
- welche App-/Schema-Version das Backup hat

## Fehler- und Risikoprinzip

Import ist eine potenziell destruktive Operation und wird entsprechend vorsichtig behandelt.

Fishing OS bevorzugt:
**Daten behalten statt Daten verlieren.**

Wenn Unsicherheit besteht, wird eher dupliziert oder nachgefragt als automatisch etwas zu überschreiben oder endgültig zu löschen.

## Produktprinzip

**Ein Gerätewechsel, App-Update oder Import darf Jahre an Angelhistorie niemals gefährden.**

Fishing OS behandelt die persönliche Datenbank als langfristiges Eigentum des Nutzers und stellt Portabilität, Wiederherstellbarkeit und Versionssicherheit sicher.
