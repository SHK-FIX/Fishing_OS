# Fishing OS v0.5 – Fangarchiv / Fänge-Übersicht

Stand: 12.08.2026
Status: freigegeben

## Ziel

Das Fangarchiv bündelt alle dokumentierten Fänge in einer schnellen, visuellen und filterbaren Übersicht. Es soll sich wie ein persönliches Fotoarchiv mit leistungsfähiger Suche anfühlen – nicht wie eine Tabelle.

## Hauptansicht

Oben:
- Titel „Fänge“
- Suche
- Filter-Button
- kompakte Kennzahlen, z. B. Gesamtfänge, Fischarten, persönliche Bestwerte

Darunter Schnellfilter:
- Alle
- Jahr
- Fischart
- Gewässer
- Köder
- Mehr Filter

## Darstellungsarten

Standard: **Fotoansicht** mit großen Fangkarten.

Pro Karte mindestens:
- Fangfoto, sofern vorhanden
- Fischart
- Länge
- Gewicht
- Datum / Uhrzeit
- Gewässer
- Spot, sofern vorhanden
- optional Köder / Köderbild
- PB-Kennzeichnung, wenn automatisch erkannt

Zusätzlich Umschalter:
- Fotos
- Liste

Die Listenansicht ist für sehr große Archive und schnelle Übersicht vorgesehen.

## Sortierung

Mindestens:
- Neueste zuerst
- Älteste zuerst
- Größte Länge
- Höchstes Gewicht
- Gewässer

Weitere Sortierungen können später ergänzt werden.

## Erweiterte Filter

Filterbar nach:
- Zeitraum
- Fischart
- Gewässer
- Spot
- Köder
- Ködertyp
- Technik
- Länge von/bis
- Gewicht von/bis
- nur Fänge mit Foto
- historisch nachgetragen
- Wetter / Bedingungen, sofern Daten vorhanden

Filter sind kombinierbar und jederzeit zurücksetzbar.

## Fang-Detailansicht

Antippen eines Fangs öffnet die vollständige Detailseite mit:
- Fotos / Galerie
- Fischart
- Länge
- Gewicht
- Datum / Uhrzeit
- Gewässer
- Spot / Positionsgenauigkeit
- Köder
- Technik
- Wetter
- Notizen
- zugehörigem Angeltag
- Historie / Nachbearbeitungshinweisen
- Bearbeiten-Aktion

Die Detailansicht folgt vollständig der systemweiten Bearbeiten-Logik.

## Historische Fänge

Historisch nachgetragene Fänge erscheinen **ganz normal im Fangarchiv**. Es gibt keinen getrennten Bereich für alte Daten.

In den Details kann dezent „Nachträglich erfasst“ angezeigt werden.

Fehlende historische Daten bleiben unbekannt und werden nicht erfunden.

## Persönliche Bestwerte

PB-Kennzeichnungen werden automatisch anhand der vorhandenen Fangdaten bestimmt.

Keine manuelle PB-Schalterlogik.

Mögliche Kennzeichnungen:
- PB Länge
- PB Gewicht
- Art-PB

Die genaue Definition muss mit der späteren Statistiklogik konsistent bleiben.

## Vergleichen – vorbereitet, nicht MVP-Priorität

Langfristig können zwei oder mehrere Fänge ausgewählt und gegenübergestellt werden.

Vergleichbare Werte:
- Länge
- Gewicht
- Fischart
- Gewässer
- Spot
- Datum / Jahreszeit
- Wetter
- Köder
- Technik
- Bedingungen

Die Datenstruktur soll diese Funktion nicht verbauen, die vollständige Vergleichsansicht ist jedoch kein zwingender v0.5-MVP-Schwerpunkt.

## Abgrenzung

Das Fangarchiv enthält ausschließlich **Fänge**.

Bisse, Drillverluste, Nachläufer, Beobachtungen und Köderverluste gehören in Angeltage, Ereignisverläufe und Analysebereiche. Die Bezeichnung „Fänge“ soll eindeutig bleiben.

## Bearbeitbarkeit

Alle Fangdaten bleiben nachträglich bearbeitbar gemäß `EDITING-SYSTEM-v0.5.md`.

Änderungen wirken sich anschließend auf Archiv, PBs und Statistiken aus, ohne die Änderungshistorie unsichtbar zu vernichten.

## UX-Prinzip

**Visuell zuerst, Filtertiefe bei Bedarf.**

Das Archiv soll beim Öffnen sofort Freude machen und schnelle Orientierung geben. Die nerdigen Filter und Vergleichsfunktionen liegen eine Ebene tiefer.
