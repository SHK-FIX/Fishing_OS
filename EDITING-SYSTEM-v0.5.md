# Fishing OS v0.5 – Systemweite Bearbeiten-Logik

Stand: 12.08.2026
Status: freigegeben

## Grundprinzip

Jeder vom Nutzer erzeugte Datensatz kann jederzeit vollständig bearbeitet, ergänzt und korrigiert werden.

Die Bearbeiten-Ansicht verwendet möglichst dieselbe Struktur und dieselben Felder wie die jeweilige Neuerfassung. Fishing OS erhält dadurch eine konsistente Bedienlogik:

**Datensatz öffnen → ••• / Bearbeiten → Felder ändern → Speichern.**

Es wird kein zweites, unnötig abweichendes Bedienkonzept für bestehende Datensätze aufgebaut.

## Geltungsbereich

Die Regel gilt insbesondere für:
- Fänge
- Bisse
- Im Drill verloren
- Nachläufer
- Beobachtungen
- Köderverluste
- Angeltage
- Gewässer
- Spots
- Köder und Tackle
- Setups / Rigs
- Hypothesen und Labor-Einträge
- historische Nachträge
- Fotos, Videos, Notizen und sonstige nutzererzeugte Informationen

## Bearbeitbare Daten

Soweit für den jeweiligen Datensatz vorhanden, können u. a. korrigiert oder ergänzt werden:
- Datum und Uhrzeit
- Gewässer
- Spot
- Positionsangaben / Positionsgenauigkeit
- Fischart
- Länge
- Gewicht
- Köder
- Tackle-Setup / Rig
- Technik
- Farbe / Variante
- Tiefe
- Struktur
- Grundbeschaffenheit
- Wetterzuordnung
- Ereignisdetails
- Beobachtungsdetails
- Notizen
- Fotos und Videos
- persönliche Bewertung / Bedeutung
- weitere optionale Felder

## Ereignistyp

Der Ereignistyp selbst wird nicht beliebig umgewandelt. Ein gespeicherter Fang wird beispielsweise nicht direkt in einen Biss verwandelt.

Falls der falsche Ereignistyp angelegt wurde, soll der Nutzer einen korrekten neuen Eintrag erstellen können; eine spätere komfortable Funktion zum Übertragen gemeinsamer Felder kann geprüft werden.

Grund: Ereignistypen besitzen unterschiedliche Datenmodelle und statistische Bedeutung. Eine stille Typänderung könnte Historie und Analysen verfälschen.

## Änderungshistorie

Relevante Änderungen werden nachvollziehbar protokolliert.

Mindestens intern vorgesehen:
- Zeitpunkt der Änderung
- geändertes Feld
- vorheriger Wert
- neuer Wert
- Quelle der Änderung, z. B. manuell / automatisch / Import

Die UI kann eine kompakte Aktion **„Historie anzeigen“** anbieten.

Die Historie soll den Nutzer nicht mit technischen Details überladen, aber bei Bedarf nachvollziehbar machen, wie ein Datensatz entstanden und verändert worden ist.

## Automatisch erfasste Daten

Automatisch erfasste Originalwerte wie GPS, Wetter-Snapshot oder Zeitstempel dürfen bei Bedarf korrigiert werden. Der ursprüngliche automatisch erfasste Wert wird jedoch intern erhalten, wenn er für Nachvollziehbarkeit oder spätere Analyse relevant ist.

Eine manuelle Korrektur wird als solche gekennzeichnet.

## Unbekannte Werte

Unbekannte Informationen bleiben unbekannt. Fishing OS erfindet keine Werte, nur um einen Datensatz vollständig aussehen zu lassen.

Dies gilt insbesondere für historische Einträge, GPS, Wetter, Tiefe, Uhrzeit und sonstige nicht sicher bekannte Informationen.

## Medien

Fotos und Videos können nachträglich:
- hinzugefügt
- entfernt
- ersetzt
- sortiert
- einem passenden Eintrag zugeordnet
werden.

Medienänderungen dürfen die Offline-first- und Speicherstrategie nicht unterlaufen.

## Löschen, Korrigieren und Archivieren

Grundsatz: **Korrigieren statt Löschen**, wenn lediglich falsche Informationen vorliegen.

Wenn Daten bereits mit anderen Datensätzen, Statistiken oder historischen Ereignissen verknüpft sind, soll bevorzugt archiviert/deaktiviert statt destruktiv gelöscht werden.

Endgültiges Löschen benötigt eine klare Nutzeraktion und darf keine unbemerkten Folgeschäden an verknüpften Daten verursachen.

## Mehrfachbearbeitung

Massen-/Mehrfachbearbeitung ist als spätere Komfortfunktion sinnvoll, z. B. für:
- Datum
- Gewässer / Spot
- Köder / Technik
- Markierungen / Kategorien

Sie ist **kein v0.5-MVP-Schwerpunkt**. Zuerst wird die zuverlässige Bearbeitung einzelner Datensätze umgesetzt.

## Teilen / Datenschutz

Teilen wird in v0.5 nicht als prominente Standardaktion in der Bearbeiten-Logik vorgesehen.

Fishing OS behandelt Gewässer-, Spot-, Fang- und Positionsdaten grundsätzlich als privat. Eine spätere Teilen-Funktion muss klar definieren, welche Daten enthalten sind, und insbesondere Standortinformationen kontrollierbar machen.

## UX-Regeln

- Bearbeiten ist von der jeweiligen Detailansicht schnell erreichbar.
- Die Bearbeiten-Maske ähnelt der Neuerfassung.
- Bereits gespeicherte Werte sind sichtbar vorbelegt.
- Speichern ist eindeutig erreichbar.
- Abbrechen verwirft ungesicherte Änderungen nach sinnvoller Warnung.
- Keine Pflichtfelder werden nachträglich eingeführt, wenn der Datensatz ursprünglich ohne diese Information gültig gespeichert werden konnte.
- Änderungen sollen unmittelbar in den betroffenen Detailansichten und Statistiken berücksichtigt werden.

## Produktprinzip

**Heute, morgen oder in einem Jahr: Der Nutzer behält die Kontrolle über seine Daten.**

Fishing OS behandelt Daten nicht als unveränderliche Formulareinträge, sondern als langfristig pflegbares persönliches Angelarchiv. Gleichzeitig bleibt die Historie nachvollziehbar, damit spätere Analysen nicht durch unsichtbare Änderungen verfälscht werden.
