# Fishing OS v0.5 – Ereignis-Workflows

Stand: 12.08.2026

## Übergreifende UX-Regel

Für Schnellereignisse wie Biss, Im Drill verloren, Nachläufer, Beobachtung und Köderverlust gilt:

- Alles, was nicht automatisch ermittelt werden kann, ist optional.
- Kein Detailfeld darf den Nutzer am Wasser am schnellen Speichern hindern.
- Automatisch vorbelegt werden, soweit verfügbar: Datum, Uhrzeit, aktiver Angeltag, Gewässer, aktueller Spot, GPS und Wetter-Snapshot.
- Fischart, Köder/Setup, Technik, Tiefe, Ereignisdetails, Foto, Notiz und weitere Zusatzinformationen können sofort oder später ergänzt werden.
- Minimalziel: Ereignis öffnen → Speichern → sofort weiterangeln.
- Alle Angaben bleiben nachträglich vollständig bearbeitbar.
- Automatisch erfasste Originaldaten sollen bei späteren Korrekturen nachvollziehbar bleiben, damit Analysen nicht unbemerkt verfälscht werden.

## Biss erfassen – freigegeben

Der helle iPhone-Entwurf ist freigegeben.

Struktur:
- Wetter-Snapshot oben inklusive manuellem „Wetter aktualisieren“.
- Gewässer und Spot.
- Datum und Uhrzeit automatisch vorbelegt, aber korrigierbar.
- Fischart optional.
- Bissdetails optional.
- Köder oder komplettes Tackle-Setup optional auswählbar.
- Notiz und Foto optional.
- großer Speichern-Button.

Optionale Bissart:
- hart / eindeutig
- vorsichtig
- kurzer Kontakt
- Fehlbiss
- unbekannt

Minimaler Workflow: **Biss öffnen → Speichern → weiterangeln.**

## Im Drill verloren – freigegeben

Der helle iPhone-Entwurf ist freigegeben.

Struktur:
- Wetter-Snapshot oben inklusive manuellem Aktualisieren.
- Gewässer und Spot automatisch aus aktivem Angeltag übernehmen, sofern vorhanden.
- Datum und Uhrzeit automatisch setzen, aber später korrigierbar.
- Fischart optional.
- Verlustdetails optional.
- Köder oder komplettes Tackle-Setup optional auswählbar.
- Notiz und Foto optional.
- großer Button **„Speichern & weiterangeln“**.

### Optionale Verlustdetails

- Verlustphase: direkt nach dem Biss / während des Drills / kurz vor dem Landen
- ungefähre Drilldauer
- geschätzte Fischgröße
- Verlustgrund: ausgeschlitzt / Schnurbruch / Haken aufgebogen / Hindernis oder Struktur / ausgestiegen / fehlgehakt oder schlechter Hakensitz / unbekannt

Alle Angaben sind optional und dienen ausschließlich der späteren Analyse.

## Nachläufer erfassen – freigegeben

Der helle iPhone-Entwurf ist freigegeben.

Ziel: Nachläufer in wenigen Sekunden sichern, damit Aktivität und Fischverhalten auch ohne Biss oder Fang analysiert werden können.

Automatisch, soweit verfügbar: Wetter-Snapshot, aktiver Angeltag, Gewässer, aktueller Spot, Datum/Uhrzeit und GPS.

Optional: Fischart, Köder oder komplettes Tackle-Setup, Verhalten des Fisches, Reaktion auf Köder/Führung, Distanz bis zum Abbruch, Notiz und Foto.

Verhalten: Neugier/Interesse, verfolgt, kurz vor dem Biss, dreht ab, Köder leicht berührt, unbekannt.

Reaktion: positiv / keine erkennbare Reaktion / negativ / unbekannt.

Distanz: unter 1 m / 1–3 m / 3–10 m / 10–20 m / über 20 m / unbekannt.

Minimaler Workflow: **Nachläufer öffnen → Speichern → weiterangeln.**

## Beobachtung erfassen – freigegeben

Der helle, wissenschaftlich orientierte iPhone-Entwurf ist freigegeben.

Beobachtungen sind strukturierte Feldbeobachtungen und können später statistisch ausgewertet sowie mit Hypothesen im Gewässer-Labor verknüpft werden.

Automatisch, soweit verfügbar: Wetter-Snapshot, aktiver Angeltag, Gewässer, aktueller Spot, Datum/Uhrzeit und GPS.

Vorgefertigte Kategorien mit Mehrfachauswahl:
- Fischaktivität
- Beute / Nahrungsangebot
- Wasser
- Struktur & Vegetation
- Tierwelt
- Angeldruck / Störung
- Wetteränderung
- Sonstiges

Beute/Nahrungsangebot ist ausdrücklich vorgesehen. Auswahl u. a.: Beutefische/Fischbrut, Krebse, Frösche/Kaulquappen, Echsen, Insekten, Würmer/Wirbellose, sonstige Beute.

Optionale strukturierte Attribute: Menge/Intensität, Position/Bereich, Verhalten/Aktivität, Fischart, Tiefe, Bewegungsrichtung, Wasserzustand, Vegetation/Struktur, Störung/Angeldruck.

Fishing OS trennt Beobachtung und Hypothese ausdrücklich. Optional kann eine Beobachtung über **„Als Hypothese ins Gewässer-Labor übernehmen“** in eine bewusst formulierte Hypothese überführt werden.

Bedeutung vermutet: Nahrungsangebot / Fischstandort / Aktivität / Köderwahl / Wetterreaktion / unbekannt.

Medien: mehrere Fotos und Videos pro Beobachtung möglich; später ergänzbar und bearbeitbar. Offline-first und Speicherbedarf müssen bei Videos berücksichtigt werden.

Statistik kann Häufigkeit, Saison, Gewässer/Spot, Tageszeit, Wetter, Nahrungsangebot, Fischaktivität und Zusammenhänge mit Bissen/Fängen sowie Köder-/Technikperformance auswerten. Korrelation wird nicht als Ursache dargestellt.

Minimaler Workflow: **Beobachtung öffnen → Speichern → weiterangeln.**

## Köderverlust erfassen – freigegeben

Der helle iPhone-Entwurf ist freigegeben. Die im visuellen Entwurf versehentlich als erforderlich dargestellte Verlustart wird in der echten Umsetzung **nicht verpflichtend** sein.

### Automatisch erfasst, soweit verfügbar

- Wetter-Snapshot inklusive manuellem „Wetter aktualisieren“
- aktiver Angeltag
- Gewässer
- aktueller Spot
- Datum und Uhrzeit
- GPS-Position des Anglers

### Optional

- verlorener Köder
- verwendetes Rig bzw. komplettes Tackle-Setup
- Verlustart
- Struktur / vermutete Ursache
- Entfernungsklasse
- Schnur / Vorfach bzw. verwendete Komponenten
- Wassertiefe, falls bekannt oder geschätzt
- Wurf / Führung
- Notiz
- Foto / Video

### Verlustart

Vorgefertigte Auswahl, aber vollständig optional:
- Hänger
- Abriss
- im Drill verloren
- sonstiger Verlust
- unbekannt

Ein Köderverlust darf also auch ohne Auswahl einer Verlustart sofort gespeichert und später ergänzt werden.

### Struktur / vermutete Ursache

Optional, insbesondere bei Hängern:
- Felsen / Steine
- Totholz / Äste
- Kraut / Pflanzen
- Unterwasserstruktur
- Pfosten / Steg
- sonstiges
- unbekannt

### Entfernungsklasse

Da die GPS-Position des Anglers nicht der exakten Position des verlorenen Köders entspricht, kann optional nur eine grobe Entfernungsklasse erfasst werden:
- sehr nah: unter 5 m
- nah: 5–20 m
- mittel: 20–40 m
- weit: 40–70 m
- sehr weit: über 70 m
- unbekannt

### Karten- und GPS-Regel

Fishing OS darf einen Köderverlust **nicht als vermeintlich exakten Verlustpunkt auf der Karte darstellen**. Gespeichert wird die tatsächliche GPS-Position des Anglers zum Ereigniszeitpunkt sowie die optionale Entfernungsklasse. Der Verlust wird statistisch dem Spot bzw. Bereich zugeordnet.

Grund: Bei Würfen über mehrere Dutzend Meter wäre ein Marker an der Anglerposition eine falsche Präzision und könnte später zu fehlerhaften Rückschlüssen führen.

Es ist keine spätere Köderbergungs-/„geborgen“-Funktion vorgesehen.

### Verbindung zum Tackle-System

Wenn der verlorene Köder, das Rig oder Setup ausgewählt wurde, kann Fishing OS die verwendeten Komponenten als Ereignis-Momentaufnahme referenzieren. Spätere Änderungen am Tackle-Katalog dürfen historische Köderverlustdaten nicht rückwirkend verfälschen.

### Statistik und Analyse

Später auswertbar:
- Verluste pro Gewässer und Spot
- Verlustquote pro Köder / Ködertyp
- Verlustquote pro Rig / Haken / Setup
- Verlustarten im Vergleich
- häufige Hängerstrukturen
- Verhältnis von Fängen bzw. Fischkontakten zu Köderverlusten
- besonders erfolgreiche, aber tackle-riskante Spots
- Veränderungen über Zeit und Wasserstände, sofern ausreichend Daten vorliegen

Fishing OS darf auch hier keine Scheingenauigkeit erzeugen; kleine Stichproben werden entsprechend gekennzeichnet.

Minimaler Workflow: **Köderverlust öffnen → Speichern → weiterangeln.** Sämtliche Details können später ergänzt oder korrigiert werden.

## Daten- und Analyseprinzip

Die optionalen Detaildaten dürfen später für Gewässer-, Spot-, Köder-, Tackle-, Ökosystem- und Verhaltensanalysen verwendet werden. Fishing OS darf daraus nur dann Aussagen ableiten, wenn eine ausreichende Datenbasis vorhanden ist. Kleine Stichproben dürfen nicht als belastbare Erkenntnis dargestellt werden.
