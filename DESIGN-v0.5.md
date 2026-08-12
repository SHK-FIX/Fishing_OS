# Fishing OS v0.5 – freigegebene Designrichtung

Stand: 12.08.2026

Diese Datei hält die gemeinsam freigegebenen UI/UX-Entscheidungen für Fishing OS v0.5 fest. Ziel ist, die bereits bestätigten Screens und Regeln nicht bei späteren Arbeiten versehentlich wieder umzubauen.

## Grundprinzipien

- Zielplattform zuerst iPhone.
- Helle Oberfläche für bessere Ablesbarkeit draußen und in direkter Sonne.
- Hochwertig, modern, klar und eigenständig; Apple-inspiriert, aber nicht steril.
- Originales Fishing-OS-Logo bleibt sichtbar und Teil der Designsprache.
- Mobile First: schnelle Bedienung, große Tap-Flächen, wenig unnötiger Text.
- Karte und Angeltag sind zentrale Elemente der App.
- Bestehende Funktionen und Datenlogik werden bei der visuellen Umsetzung nicht leichtfertig verändert.
- Offline-first und private Spots bleiben unverändert Kernprinzipien.
- Alle vom Nutzer erfassten Daten müssen nachträglich bearbeitbar sein.

## UX-Grundregel für Schnellereignisse

Für Biss, Im Drill verloren, Nachläufer, Beobachtung und Köderverlust gilt:

- Alles, was nicht automatisch ermittelt werden kann, ist optional.
- Kein Detailfeld darf den Nutzer am Wasser am schnellen Speichern hindern.
- Automatisch vorbelegt werden, soweit verfügbar: Datum, Uhrzeit, aktiver Angeltag, Gewässer, aktueller Spot, GPS und Wetter-Snapshot.
- Fischart, Köder/Setup, Technik, Tiefe, Biss-/Ereignisdetails, Foto, Notiz und weitere Zusatzinformationen können sofort oder später ergänzt werden.
- Minimalziel: Schnellereignis öffnen → Speichern → sofort weiterangeln.
- Alle Angaben bleiben nachträglich vollständig bearbeitbar.
- Automatisch erfasste Originaldaten sollen bei späteren Korrekturen nachvollziehbar bleiben, damit Analysen nicht unbemerkt verfälscht werden.

## Dashboard – freigegebene Struktur

Die bisherige Überschrift „Guten Tag / Dashboard“ entfällt vollständig.

Reihenfolge:
1. Highlights ganz oben.
2. Große, dominante Karten-/Angeltag-Fläche.
3. Schnelleinträge.
4. Danach aktiver Angeltag / letzte Ereignisse / weitere Inhalte nach Bedarf.

### Highlights

Die Highlights gelten als final und werden nicht mehr umgestaltet:
- Fang: Kescher-Symbol.
- Gewässer: freigegebenes Gewässer-Symbol.
- Spots: freigegebenes Spot-Symbol.
- Fotos: Kamera-Symbol.

Die Highlights bleiben als kompakte Reihe mit Anzahl und Beschriftung bestehen.

### Schnelleinträge

Grundstruktur: sechs kompakte Einträge in zwei Reihen.

Vorläufig bestätigte Symbolrichtung:
- Fang: Kescher.
- Biss: fischbezogenes Symbol; aktueller Entwurf akzeptiert, später bei Bedarf feinjustierbar.
- Drill: gebogene Baitcaster-Rute; bleibt.
- Nachläufer: Fisch/Nachläufer-Symbol; bleibt.
- Beobachtung: Fernglas.
- Köderverlust: deutlich erkennbares Verlust-/Abriss-Symbol; aktueller Stand bleibt zunächst.

Die Symbolsprache soll klar und aussagekräftig sein, nicht verspielt.

## Fang erfassen – freigegeben

Die Fangmaske gilt als freigegeben.

Reihenfolge:
1. Kopf „Fang erfassen“.
2. Gewässer / Spot / Uhrzeit.
3. Wetterblock ganz oben mit manuellem „Wetter aktualisieren“.
4. Fischart als Dropdown, gern mit kleinem Fischbild/Icon.
5. Länge untereinander.
6. Gewicht untereinander; bevorzugte Eingabe lbs, automatische metrische Anzeige darunter.
7. Köder sichtbar.
8. Optimale/verwendete Technik sichtbar.
9. Foto groß und prominent.
10. Notiz.
11. Großer „Fang speichern“-Button.

Wetter ist bewusst weit oben, weil die manuelle Aktualisierung sich in der Praxis bewährt hat und nicht versteckt werden darf.

## Biss erfassen – freigegeben

Der helle iPhone-Entwurf ist freigegeben.

Struktur:
- Wetter-Snapshot oben, inklusive manuellem „Wetter aktualisieren“.
- Gewässer und Spot.
- Datum und Uhrzeit automatisch vorbelegt, aber korrigierbar.
- Fischart optional.
- Bissdetails optional.
- Köder oder komplettes Tackle-Setup optional auswählbar.
- Notiz und Foto optional.
- großer Speichern-Button.

### Bissart

Optionaler Ein-Tap-Wert für spätere Analyse, z. B.:
- hart / eindeutig,
- vorsichtig,
- kurzer Kontakt,
- Fehlbiss,
- unbekannt.

Die Bissart ist niemals Pflicht.

### Minimaler Biss-Workflow

Im Extremfall genügt: **Biss öffnen → Speichern → weiterangeln.**

Wenn Zeit vorhanden ist, können Gewässer/Spot, Köder/Setup, Fischart, Bissart, Tiefe, Foto und Notiz sofort ergänzt werden. Andernfalls erfolgt die Nachbearbeitung später.

## Aktiver Angeltag – freigegeben

Der helle Entwurf ist freigegeben.

Inhalte:
- Gewässername und Status „läuft“.
- Startzeit und Gesamtdauer.
- aktueller Spot prominent.
- Wetter kompakt sichtbar.
- große Kartenfläche.
- Spot-Verlauf als Timeline.
- Ereignisse des Tages chronologisch.
- klarer Button „Angeltag beenden“.

### Kartenregel im aktiven Angeltag

- Der aktuelle Standort des Nutzers ist immer sichtbar.
- Genauigkeitskreis wird dargestellt, wenn verfügbar.
- Der aktive Spot wird ebenfalls deutlich angezeigt.
- Karte darf beim Öffnen sinnvoll auf Standort + aktiven Spot ausgerichtet sein.
- Sobald der Nutzer die Karte selbst bewegt, darf sie nicht ständig automatisch zurückspringen.
- „Zu meinem Standort“ bleibt als feste Aktion verfügbar.

## Tagebuch – freigegeben

Der helle Tagebuch-Entwurf ist freigegeben.

Struktur:
- Kalender / Datumsnavigation oben.
- Filter für Ereignistypen.
- kompakte Tageszusammenfassung.
- Gewässer mit Bild, Zeitraum und Kennzahlen.
- Spot-Verlauf sichtbar.
- Ereignisse des Tages chronologisch.
- Möglichkeit, Ereignisse zu öffnen / zu korrigieren.

## Karte – freigegebene Richtung

- Große dominante Kartenfläche.
- Umschalter Satellit / Hybrid / Karte.
- aktueller Standort immer sichtbar, optional mit Genauigkeitskreis.
- kein permanentes Auto-Recenter während manueller Kartennutzung.
- aktiver Spot wird stärker hervorgehoben als andere Spots.
- Spotanzahl technisch unbegrenzt.
- bei vielen Spots: Clustering beim Herauszoomen; beim Reinzoomen einzelne Marker.
- Liste/Bottom Sheet unter der Karte in mehreren Höhen: eingeklappt, halb, voll geöffnet.
- Standard-Sortierung der Spotliste: zuletzt genutzt.
- Spot antippen öffnet Schnellaktionen, z. B. Spot starten, Details, Bearbeiten, Navigation, neuer Eintrag.
- Filter für Spots werden vorgesehen.

### Spot-Relevanz

Die Karte soll langfristig Statistik und Relevanz einbeziehen.

Relevanz kann u. a. berücksichtigen:
- letzte Nutzung,
- Fangzahl,
- Bisse,
- Drillverluste,
- Aufenthaltsdauer,
- Erfolgsquote,
- größte Fische,
- Köderverluste,
- vorhandene Datenmenge.

Je relevanter ein Spot, desto stärker darf er visuell hervorgehoben werden. Farben/Intensitäten müssen trotzdem ruhig und eindeutig bleiben. Der aktive Spot hat immer eine eigene, klar erkennbare Priorität.

## Statistik – freigegeben

Die klassische Statistikseite ist in ihrer Grundstruktur freigegeben.

Bereiche:
- Zeitraumfilter.
- zentrale Kennzahlen: Fänge, Bisse, Drillverluste, Beobachtungen, Köderverluste, Angelzeit.
- Trends / Fänge pro Monat.
- Erfolgsquote.
- Top-Gewässer.
- Top-Spots nach Erfolgsquote/Relevanz.
- Top-Köder.
- Fischartenverteilung.
- persönliche Bestleistungen.

Die Statistik soll schnell verständlich bleiben und die Frage beantworten: „Was ist passiert?“

## Analyse / Gewässer-Labor – freigegeben

Zusätzlich zur klassischen Statistik gibt es eine zweite, tiefere Ebene „Analyse“.

Sie beantwortet stärker die Frage: „Warum ist etwas passiert?“

Freigegebene Inhaltsrichtung:
- beste Bedingungen,
- Wind & Erfolg,
- Luftdruck & Erfolg,
- Temperaturbereiche,
- Tageszeiten-Muster,
- Mondphase,
- Top-Spots unter bestimmten Bedingungen,
- Köder-Performance unter Bedingungen,
- Fischverhalten / Aktivitätsmuster,
- erkennbare Zusammenhänge und Auffälligkeiten.

### Gewässer-Labor

Das Gewässer-Labor bleibt als eigener Unterbereich der Analyse erhalten.

Mögliche Hypothesen:
- monotone Führung funktioniert besser,
- bestimmte Windrichtung ist günstig,
- Chatterbait funktioniert an flachen Spots,
- tiefe Kanten werden bei bestimmten Druckverläufen relevanter.

Fishing OS soll Hypothesen später anhand realer Daten einordnen, z. B.:
- „Spricht dafür“,
- „Neutral“,
- „Spricht eher dagegen“,
- „Noch zu wenig Daten“.

Keine Scheingenauigkeit: Aussagen müssen immer mit ausreichender Datenbasis und nachvollziehbaren Stichprobengrößen dargestellt werden.

## Noch nicht final entworfen

Diese Bereiche werden erst nach diesem Design-Freeze weiter bearbeitet:
- Im Drill verloren erfassen,
- Nachläufer erfassen,
- Beobachtung erfassen,
- Köderverlust erfassen,
- Spot-Detail,
- Gewässer-Detail,
- Bearbeiten-Masken,
- Profil / Einstellungen,
- weitere Detailansichten.

## Umsetzungsregel

Diese Datei ist ein Design-Freeze für die oben freigegebenen Bereiche. Spätere Implementierung auf `update/v0.5-workflow` soll sich daran orientieren. Bereits freigegebene Screens werden nur nach einer neuen gemeinsamen Designentscheidung verändert.
