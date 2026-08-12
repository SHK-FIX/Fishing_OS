# Fishing OS v0.5 – Wetter-System

Status: finalisiert nach Gesamtcheck

## Grundprinzip

Wetter wird als zeitbezogener Snapshot gespeichert, nicht als veränderlicher globaler Wert.

## Automatische Snapshots

Automatisch erfassen, soweit online verfügbar:
- Start eines Angeltags
- Start einer Gewässer-Session
- Start eines Spots
- Ende eines Spots
- Ende einer Gewässer-Session
- Ende des Angeltags

## Ereignisse während eines Spots

Fang, Biss, Im Drill verloren, Nachläufer, Beobachtung und Köderverlust übernehmen standardmäßig den zuletzt gültigen Wetter-Snapshot des aktiven Spots / der aktiven Gewässer-Session.

Auf jedem Ereignis-Screen bleibt oben gut sichtbar **„Wetter aktualisieren“**. Wenn sich Bedingungen spürbar geändert haben, kann der Nutzer bewusst einen neuen Snapshot abrufen. Dieser wird mit dem Ereignis verknüpft und steht anschließend auch für folgende Ereignisse zur Verfügung.

Damit wird nicht bei jedem Ereignis unnötig ein externer Wetterabruf ausgelöst, aber der Nutzer kann Veränderungen jederzeit erfassen.

## Offline

Ohne Netz wird kein Wetter erfunden. Der letzte bekannte Snapshot darf als solcher angezeigt werden. Ein späteres Nachziehen ist nur erlaubt, wenn Zeitpunkt und Ort eindeutig genug sind und der Wert als **nachträglich bezogen** gekennzeichnet wird.

## Herkunft

Jeder Snapshot speichert eine Herkunft, z. B.:
- live automatisch
- live manuell aktualisiert
- später nachgezogen
- historisch bezogen

Diese Herkunft bleibt für Analyse und Datenqualität erhalten.

## Wetterwerte

Soweit verfügbar:
- Temperatur
- gefühlte Temperatur optional
- Luftdruck
- Windgeschwindigkeit
- Windrichtung
- Böen
- Bewölkung
- Niederschlag
- Luftfeuchtigkeit
- weitere später verfügbare Werte

## Analyse

Wetterdaten dürfen nur entsprechend ihrer zeitlichen Qualität ausgewertet werden. Nachträglich bezogene oder unvollständige Daten werden nicht so behandelt wie echte Live-Snapshots.

## Produktregel

**Wetter automatisch am Spot-/Session-Wechsel, manuell bei relevanten Veränderungen. Keine erfundenen Daten.**
