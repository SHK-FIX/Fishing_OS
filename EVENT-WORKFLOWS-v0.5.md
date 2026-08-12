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

- Verlustphase:
  - direkt nach dem Biss
  - während des Drills
  - kurz vor dem Landen
- ungefähre Drilldauer
- geschätzte Fischgröße
- Verlustgrund:
  - ausgeschlitzt
  - Schnurbruch
  - Haken aufgebogen
  - Hindernis / Struktur
  - ausgestiegen
  - fehlgehakt / schlechter Hakensitz
  - unbekannt

Alle Angaben sind optional und dienen ausschließlich der späteren Analyse. Der Nutzer darf das Ereignis jederzeit mit einem einzigen schnellen Speichervorgang sichern und später ergänzen.

## Nachläufer erfassen – freigegeben

Der helle iPhone-Entwurf ist freigegeben.

Ziel: Nachläufer in wenigen Sekunden sichern, damit Aktivität und Fischverhalten auch ohne Biss oder Fang analysiert werden können.

Automatisch, soweit verfügbar:
- Wetter-Snapshot mit manuellem Aktualisieren
- aktiver Angeltag
- Gewässer
- aktueller Spot
- Datum und Uhrzeit
- GPS

Optional:
- Fischart
- Köder oder komplettes Tackle-Setup
- Verhalten des Fisches
- Reaktion auf Köder / Führung
- Distanz bis zum Abbruch
- Notiz
- Foto

### Optionales Verhalten des Fisches

- Neugier / Interesse gezeigt
- verfolgt
- kurz vor dem Biss
- dreht ab
- Köder leicht berührt, aber nicht gebissen
- unbekannt

### Optionale Reaktion auf Köder / Führung

- positive Reaktion: Interesse / Beschleunigung nimmt zu
- keine erkennbare Reaktion
- negative Reaktion: Fisch entfernt sich / wirkt scheu
- unbekannt

### Optionale Distanz bis zum Abbruch

- sehr nah: unter 1 m
- nah: 1–3 m
- mittel: 3–10 m
- weit: 10–20 m
- sehr weit: über 20 m
- unbekannt

Minimaler Workflow: **Nachläufer öffnen → Speichern → weiterangeln.** Alle Details können später ergänzt oder korrigiert werden.

## Beobachtung erfassen – freigegeben

Der helle, wissenschaftlich orientierte iPhone-Entwurf ist freigegeben.

Beobachtungen sind in Fishing OS keine bloßen Tagebuchnotizen, sondern strukturierte Feldbeobachtungen. Ziel ist, ökologische, biologische und situative Informationen so zu erfassen, dass sie später statistisch ausgewertet und im Gewässer-Labor mit Hypothesen verknüpft werden können.

### Automatisch erfasst, soweit verfügbar

- Wetter-Snapshot inklusive manuellem „Wetter aktualisieren“
- aktiver Angeltag
- Gewässer
- aktueller Spot
- Datum und Uhrzeit
- GPS

### Beobachtungskategorien

Vorgefertigte Kategorien sorgen für konsistente und statistisch auswertbare Daten. Mehrfachauswahl ist möglich:

- Fischaktivität
- Beute / Nahrungsangebot
- Wasser
- Struktur & Vegetation
- Tierwelt
- Angeldruck / Störung
- Wetteränderung
- Sonstiges

Freitext bleibt zusätzlich möglich, ersetzt aber nicht die strukturierten Kategorien.

### Beute / Nahrungsangebot

Diese Kategorie ist ausdrücklich vorgesehen, weil sichtbares Nahrungsangebot für Köderwahl, Fischstandort und Verhaltensanalyse relevant sein kann.

Vorgefertigte Auswahl, erweiterbar:
- Beutefische / Fischbrut
- Krebse
- Frösche / Kaulquappen
- Echsen
- Insekten
- Würmer / Wirbellose
- sonstige Beute

Zusätzliche optionale Attribute:
- Menge / Intensität: einzeln, wenige, mehrere, viele, sehr viele
- Position / Bereich: Oberfläche, Uferkante, Flachwasser, mittlere Tiefe, Tiefwasser, im Kraut, an Struktur, offenes Wasser, sonstiges
- Verhalten / Aktivität: ruhig, aktiv, flüchtend, springend, Jagdverhalten, Laichverhalten, sonstiges

### Weitere Beobachtungsdetails

Je nach Kategorie können strukturierte Detailwerte ergänzt werden, beispielsweise:
- Fischart
- Menge / Intensität
- Position / Tiefe / Bereich
- Bewegungsrichtung
- Verhalten
- Reaktion auf Köder oder Angler
- Wasserstand / Wassertrübung / auffällige Veränderungen
- Vegetation und Struktur
- Störung / Angeldruck

Alle Detailfelder bleiben optional und vollständig nachbearbeitbar.

### Notiz und wissenschaftliche Trennung

Freie Notizen sind möglich. Fishing OS trennt dabei ausdrücklich zwischen **Beobachtung** und **Hypothese**.

Beispiel:
- Beobachtung: „Mehrere kleine Echsen regelmäßig direkt an der Uferkante gesehen.“
- Hypothese: „Schwarzbarsche könnten an diesem Bereich regelmäßig Echsen als Beute nutzen.“

Eine Beobachtung darf niemals automatisch als Beweis für eine Hypothese behandelt werden.

### Bedeutung vermutet

Optional kann markiert werden, warum die Beobachtung interessant sein könnte:
- Nahrungsangebot
- Fischstandort
- Aktivität
- Köderwahl
- Wetterreaktion
- unbekannt

### Gewässer-Labor

Optionaler Schalter: **„Als Hypothese ins Gewässer-Labor übernehmen“**.

Aus einer Beobachtung kann damit bewusst eine Hypothese angelegt werden. Zukünftige Beobachtungen, Fänge, Bisse, Drillverluste und Nachläufer können später als Datenbasis zur Einordnung dienen.

Mögliche Einordnung:
- spricht dafür
- neutral
- spricht eher dagegen
- noch zu wenig Daten

Keine Scheingenauigkeit: Stichprobengröße und Datenqualität müssen bei jeder späteren Aussage berücksichtigt werden.

### Medien

Beobachtungen unterstützen:
- Fotos
- Videos
- mehrere Medien pro Beobachtung

Medien können sofort oder später ergänzt, entfernt oder geändert werden. Video ist insbesondere für Fischverhalten, Beutefischschwärme, Tierverhalten, Wasserbewegung und andere dynamische Beobachtungen vorgesehen.

Wegen Offline-first und Speicherbedarf muss die spätere Implementierung Videos speichereffizient behandeln und unnötige Dateiduplikate vermeiden.

### Statistik und Analyse

Strukturierte Beobachtungen können später u. a. ausgewertet werden nach:
- Häufigkeit bestimmter Beobachtungen
- Saison / Jahreszeit
- Gewässer und Spot
- Tageszeit
- Wetterbedingungen
- beobachtetem Nahrungsangebot
- Fischaktivität
- Zusammenhängen mit späteren Bissen und Fängen
- Köder- und Technikperformance bei bestimmten Beobachtungen

Beispiel: Fishing OS kann später prüfen, ob an Tagen mit beobachteter Fischbrut bestimmte Ködertypen häufiger Kontakte oder Fänge erzeugt haben. Korrelation wird dabei nicht automatisch als Ursache dargestellt.

Minimaler Workflow: **Beobachtung öffnen → Speichern → weiterangeln.** Alle strukturierten Details, Notizen, Medien und Hypothesen können später ergänzt werden.

## Daten- und Analyseprinzip

Die optionalen Detaildaten dürfen später für Gewässer-, Spot-, Köder-, Tackle-, Ökosystem- und Verhaltensanalysen verwendet werden. Fishing OS darf daraus nur dann Aussagen ableiten, wenn eine ausreichende Datenbasis vorhanden ist. Kleine Stichproben dürfen nicht als belastbare Erkenntnis dargestellt werden.
