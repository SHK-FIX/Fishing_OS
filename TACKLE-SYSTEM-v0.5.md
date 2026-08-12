# Fishing OS v0.5 – Tackle-System

Stand: 12.08.2026

Status: Produkt- und Datenmodellrichtung beschlossen. Das Tackle-System wird so vorbereitet, dass eine schnelle MVP-Bedienung möglich bleibt, langfristig aber eine sehr detaillierte Analyse unterstützt wird.

## Grundregeln

- Übergeordneter Bereich heißt **Tackle** und nicht nur Köderbibliothek.
- Am Wasser bleibt die Erfassung schnell; Detailfelder sind optional und können später ergänzt werden.
- **Alle vom Nutzer erzeugten Tackle-Daten sind jederzeit nachträglich bearbeitbar.**
- Historische Ereignisse dürfen durch spätere Änderungen an Stammdaten nicht rückwirkend verfälscht werden. Verwendete Setups/Komponenten benötigen deshalb eine nachvollziehbare Momentaufnahme bzw. Historie.
- Bereits in Ereignissen verwendete Datensätze werden nicht destruktiv gelöscht, sondern bei Bedarf archiviert/deaktiviert.
- Eigene Bilder können bei allen relevanten Tackle-Objekten hinzugefügt, ausgetauscht oder später ergänzt werden.
- Ohne eigenes Bild wird eine einheitliche, hochwertige Illustration als Fallback verwendet.

## Hauptbereiche

Tackle umfasst mindestens:
- Setups
- Köder
- Ruten
- Rollen
- Hauptschnur
- Vorfach
- Verbindungen
- Haken
- Gewichte / Beschwerung
- Snaps
- Wirbel
- Jigköpfe
- weiteres Terminal Tackle / Zubehör

## Baitcast und Stationär

Ruten, Rollen und komplette Setups werden klar getrennt nach:
- **Baitcast**
- **Stationär**

UX-Filter: `Alle | Baitcast | Stationär`.

Intern kann Stationär technisch als `spinning` modelliert werden; in der deutschen UI wird konsequent **Stationär** verwendet.

## Ruten

Vorgesehene Daten, soweit relevant:
- eigener Name
- Hersteller
- Modell
- Typ: Baitcast / Stationär
- eigenes Foto oder Standardillustration
- Länge
- Teile
- Wurfgewicht
- Power
- Aktion
- empfohlenes Ködergewicht
- Einsatzbereich
- Zielfische
- Notizen
- Favorit
- aktiv / archiviert

## Rollen

Vorgesehene Daten, soweit relevant:
- eigener Name
- Hersteller
- Modell
- Typ: Baitcast / Stationär
- eigenes Foto oder Standardillustration
- Rollengröße
- Übersetzung
- Schnureinzug
- Bremskraft
- Gewicht
- Schnurfassung
- Notizen
- Favorit
- aktiv / archiviert

## Schnur und Vorfach

Hauptschnur und Vorfach sind getrennte Komponenten.

Mögliche Daten:
- eigener Name
- Hersteller / Modell
- Material (z. B. Geflecht, Fluorocarbon, Mono)
- Durchmesser
- Tragkraft
- Farbe
- Länge, wo relevant
- eigenes Foto / Illustration
- Notizen
- aktiv / archiviert

## Verbindungen

Verbindungen werden explizit erfassbar, z. B.:
- direkt angeknotet
- Snap
- Wirbel
- Snap-Wirbel
- Verbindung Hauptschnur/Vorfach
- Knotentyp, z. B. FG-Knoten

Die genaue Verbindung kann Bestandteil eines gespeicherten Setups sein.

## Köderkatalog

### Hauptkategorien

1. **Softbaits**
   - Shad / Paddle Tail
   - Pintail
   - Worm
   - Creature Bait
   - Craw / Krebs
   - Tube
   - Grub / Twister
   - Soft Jerkbait / Fluke
   - Soft Swimbait
   - Ned Bait
   - Senko / Stickbait
   - Frog / Toad

2. **Jigs & Rigs**
   - Jigkopf
   - Football Jig
   - Skirted Jig
   - Swim Jig
   - Ned Rig
   - Texas Rig
   - Carolina Rig
   - Dropshot
   - Jika Rig
   - Free Rig
   - Cheburashka
   - Offset-Rig beschwert
   - Offset-Rig unbeschwert

3. **Blade & Wire Baits**
   - Chatterbait / Bladed Jig
   - Spinnerbait
   - Inline Spinner
   - Buzzbait

4. **Hardbaits**
   - Crankbait
   - Lipless Crankbait
   - Jerkbait
   - Minnow
   - Hard Swimbait
   - Glidebait
   - Twitchbait

5. **Topwater**
   - Popper
   - Walker / Stickbait
   - Propbait
   - Wakebait
   - Frog

6. **Metallköder**
   - Blinker / Spoon
   - Zikade / Bladebait
   - Jigging Spoon

7. **Eigene Ködertypen**
   - Nutzer kann zusätzliche Typen frei anlegen.

**Naturköder werden bewusst nicht in den Startkatalog aufgenommen.**

### Konkreter Köder

Ködertyp und konkreter Köder bleiben getrennt. Ein konkreter Köder kann u. a. enthalten:
- eigener frei änderbarer Name
- Haupt- und Unterkategorie
- eigenes Foto oder Kategorieillustration
- Hersteller
- Modell
- Farbe / Dekor
- Hauptfarbe für spätere Analyse
- Länge
- Gewicht
- Hakentyp
- Hakengröße
- Anzahl Haken, wo relevant
- Beschwerung
- Rig / Montage
- Trailer
- bevorzugte Techniken (Mehrfachauswahl)
- Einsatzbereich / Tiefe
- Zielfische (Mehrfachauswahl)
- Sinkverhalten: floating / suspending / slow sinking / sinking
- Lauf-/Aktionseigenschaften
- silent / rattling
- UV / Glow / Flakes optional
- persönliche Notizen
- Favorit / persönliches Vertrauen
- aktiv / archiviert

### Varianten

Ein Modell darf Varianten besitzen, z. B. unterschiedliche:
- Längen
- Gewichte
- Farben / Dekore

Dadurch müssen Hersteller und Modell nicht für jede Variante neu gepflegt werden.

## Haken und Terminal Tackle

Haken werden nicht nur als Text am Köder gespeichert, sondern können eigenständige Komponenten sein.

Mögliche Daten:
- Hakentyp, z. B. Offset, EWG/Wide Gap, Jig Hook, Einzelhaken, Drilling
- Hakengröße, z. B. 5/0, 10/0, #2, #1
- Hersteller / Modell optional
- weighted / unweighted
- Gewicht bei beschwerten Haken
- eigenes Foto / Illustration
- Notizen

Weitere Terminal-Tackle-Komponenten wie Bullet Weights, Jigköpfe, Snaps und Wirbel werden ebenfalls getrennt modelliert und können zu Rigs/Setups kombiniert werden.

## Rig und Setup

Ein Rig/Setup kombiniert Komponenten, statt Informationen redundant in einem Köder zu speichern.

Beispiel:
- Rute: Baitcast 2,10 m / 15–50 g
- Rolle: Baitcast 7.2:1
- Hauptschnur: Geflecht 0,18 mm
- Vorfach: Fluorocarbon 0,40 mm / 1,2 m
- Verbindung: FG-Knoten
- Snap: Größe 2
- Köder: 5" Creature Bait
- Haken: 10/0 EWG weighted
- Beschwerung: 7 g
- Rig: Weedless Offset
- Technik: langsam / konstant

Setups können:
- frei benannt werden
- als Favorit markiert werden
- eigenes Bild erhalten
- nach Baitcast / Stationär getrennt werden
- jederzeit bearbeitet werden
- bei einem Einsatz als Momentaufnahme gespeichert werden

## Analysefähigkeit

Automatisch aus Fishing-OS-Ereignissen ableitbar, sobald genügend Daten vorhanden sind:
- Einsätze
- Fänge
- Bisse
- Drillverluste
- Nachläufer
- Köderverluste
- Kontaktquote
- Fangquote
- Verlustquote
- persönlicher Bestfisch pro Köder / Setup
- Performance nach Gewässer und Spot
- Performance nach Wetter, Tageszeit, Jahreszeit, Tiefe und Wind
- Vergleich von Ködertypen, Varianten, Farben, Haken, Hakengrößen, Beschwerungen, Rigs, Verbindungen und kompletten Setups

Fishing OS darf aus kleinen Stichproben keine Scheingenauigkeit ableiten. Analyseergebnisse müssen Datenmenge und Aussagekraft berücksichtigen.

## Optionale spätere Nerd-Funktionen

Das Datenmodell soll folgende Erweiterungen nicht verbauen:
- Kaufdatum / Preis
- Bestand / Stückzahl
- Zustand: neu, gebraucht, beschädigt, ausgemustert, verloren
- Bestandswarnungen
- Änderungshistorie
- detaillierte Komponenten-/Setup-Vergleiche

Diese Funktionen sind kein Muss für die erste MVP-Bedienung.

## UX-Prinzip

**Schnell draußen, vollständig zuhause.**

Ein Ereignis muss am Wasser mit sehr wenigen Taps gespeichert werden können. Detailinformationen zu Köder, Haken, Rig, Schnur oder Setup können jederzeit später ergänzt oder korrigiert werden.

Das Tackle-System darf trotz großer Datentiefe die schnelle Ereigniserfassung nicht verlangsamen.
