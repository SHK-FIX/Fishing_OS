# Fishing OS v0.5 – Spot-Detailseite

Stand: 12.08.2026
Status: freigegeben

## Ziel

Die Spot-Detailseite ist das zentrale Profil für einen konkreten Angelplatz. Sie soll nicht nur Position und Name zeigen, sondern Struktur, Zugänglichkeit, Grund, Fisch-/Beute-Beobachtungen, Nutzung, Erfolg, Risiken, Medien und datenbasierte Vorschläge zusammenführen.

## Kopfbereich

Vorgesehen:
- Spotname
- zugehöriges Gewässer
- frei wählbares Titelbild
- Karte / Koordinaten
- letzter Besuch
- Aktivstatus
- Relevanz / Priorität
- Schnellaktionen: Spot starten, Navigation, neues Ereignis, Bearbeiten

## Angelart / Erreichbarkeit

Mehrfachauswahl, da ein Spot mehrere Nutzungsarten erlauben kann:
- Ufer
- Boot
- Watend
- Steg
- Sonstiges

### Uferspezifische optionale Angaben

- Zugang leicht / mittel / schwer
- flaches oder steiles Ufer
- Platz zum Werfen
- Hindernisse hinter dem Angler
- mögliche Landestelle
- Sicherheit / Nutzbarkeit bei unterschiedlichen Wasserständen

### Bootspezifische optionale Angaben

- sinnvolle Anfahrtsrichtung
- Driftmöglichkeit
- Anker-/Positionierungsbereich
- Abstand zur Zielstruktur
- offene Wurfseite
- Tiefenbereich

## Spot, Zielbereich, Struktur und Grund

Fishing OS trennt konzeptionell:
- **Spot / Angelposition**: wo der Angler steht bzw. das Boot positioniert ist
- **Zielbereich**: wohin gefischt wird
- **Struktur**: was dort vorhanden ist
- **Grund**: Bodenbeschaffenheit

Diese Trennung verhindert spätere Fehldeutungen in der Analyse.

## Tiefe & Struktur

Optionale Angaben:
- minimale / maximale / typische Wassertiefe
- Tiefenverlauf
- Kanten
- Plateaus
- Abrüche
- Übergänge
- offene Fläche
- Buchten
- Einlauf / Ablauf
- Brücke / Steg
- überhängende Bäume
- Holz / Totholz
- Kraut / Schilf / Vegetation
- Fels / Stein
- weitere eigene Strukturtypen

Mehrfachauswahl ist vorgesehen.

## Grundbeschaffenheit

Vorgefertigte Mehrfachauswahl, erweiterbar:
- Schlamm
- Sand
- Kies
- Steine
- Fels
- Lehm / Ton
- harter Grund
- weicher Grund
- Kraut / Vegetation
- Totholz
- Muscheln
- gemischt
- unbekannt

Zusätzlich können **Grundübergänge** erfasst werden, z. B. Schlamm → harter Grund oder Sand → Fels.

## Fisch & Beute

Spotbezogen erfassbar und aus Beobachtungen ableitbar:
- beobachtete Fischarten
- Fischbrut / Beutefische
- Krebse
- Frösche / Kaulquappen
- Echsen
- Insekten
- sonstiges Nahrungsangebot

Diese Informationen können später mit Köderwahl, Fischaktivität und Erfolg verglichen werden.

## Nutzung & Erfolg

Gewünschte Spot-Statistik:
- Besuche
- gesamte Angelzeit / Aufenthaltsdauer
- Fänge
- Bisse
- Im Drill verloren
- Nachläufer
- Beobachtungen
- Köderverluste
- Erfolgsquote
- Biss-zu-Fang-Quote
- größte / schwerste Fische

## Bedingungen

Spotbezogene Analyse kann später berücksichtigen:
- Wetterlage
- Windrichtung
- Windstärke
- Temperatur
- Luftdruck
- Bewölkung
- Tageszeit
- Jahreszeit
- Wasserstand
- Sichttiefe / Trübung

Fishing OS darf nur bei ausreichender Datenmenge belastbare Aussagen anzeigen.

## Top-Köder & Setups

Automatisch aus echten Ereignissen abgeleitet:
- erfolgreichste Köder
- erfolgreichste Ködertypen
- Tackle-Setups
- Techniken / Führungsarten
- Kontakt- und Fangquoten

Historische Setup-Momentaufnahmen bleiben unverändert, auch wenn Stammdaten später bearbeitet werden.

## Risiko

Optional / automatisch ableitbar:
- Hänger-/Köderverlust-Risiko
- häufige Verluststrukturen
- schwieriger Zugang
- schwierige Landung
- sonstige spotbezogene Risiken

## Fotos & Videos

- mehrere Fotos und Videos pro Spot
- eigenes Titelbild
- Medien jederzeit ergänzbar, austauschbar oder entfernbar
- Offline-first und Speicherbedarf beachten

## Notizen & Gewässer-Labor

- freie Spotnotizen
- Hypothesen direkt am Spot
- Beobachtungen können mit dem Spot verknüpft werden
- Hypothesen können später anhand von Ereignissen und Beobachtungen bewertet werden

## Datenbasierte Vorschläge

Fishing OS darf auf Basis vorhandener Daten sinnvolle Spot-Vorschläge machen, z. B.:
- felsige Struktur häufig produktiv
- bestimmte Windrichtung war häufig erfolgreich
- Tiefe 2–4 m oft produktiv
- Krautkante im Sommer beachten
- Köderverlust-Risiko erhöht
- typische Tiefe aus bisherigen Einträgen
- häufig beobachtete Beute
- häufig verwendete / erfolgreiche Köder

### Verbindliche Regel

**Vorschläge sind niemals automatisch Fakten.**

Der Nutzer kann einen Vorschlag:
- bestätigen
- anpassen
- ignorieren

Nur bestätigte oder eindeutig aus Ereignisdaten ableitbare Informationen dürfen als Stammdaten bzw. belastbare Spot-Eigenschaft verwendet werden.

Die Herkunft eines Vorschlags soll sichtbar sein, z. B.:
- datenbasiert
- manuell bestätigt
- später ggf. aus Karte / Umgebung abgeleitet

## Bearbeitbarkeit

**Alle vom Nutzer eingetragenen Spotdaten sind jederzeit nachträglich bearbeitbar.**

Das umfasst insbesondere:
- Name
- Titelbild / Medien
- Koordinaten / Position
- Angelart / Erreichbarkeit
- Tiefen
- Strukturen
- Grundbeschaffenheit
- Übergänge
- Zugang
- Boot-/Uferinformationen
- Fisch- und Beutedaten
- Notizen
- Hypothesen
- bestätigte Vorschläge
- weitere manuell gepflegte Angaben

Automatisch erfasste Originalwerte sollen bei Korrekturen nachvollziehbar bleiben.

## Löschen / Archivieren

Wenn historische Ereignisse mit einem Spot verknüpft sind, wird bevorzugt archiviert statt destruktiv gelöscht. Alte Ereignisse und Statistiken dürfen nicht rückwirkend verfälscht werden.

## Sonar / Echolot

Echolot-/Sonarintegration ist **nur als spätere Zukunftsidee** vorgemerkt. Sie gehört nicht zum aktuellen v0.5-Umfang. Das Datenmodell soll Erweiterbarkeit ermöglichen, ohne jetzt Sonarfelder, Dateiimporte oder Herstellerintegration umzusetzen.

## Produktprinzip

Der Spot ist ein **lebendes Angelplatz-Profil**: Position + Struktur + Grund + Nutzung + Erfolg + Beobachtung + Wissen. Die Oberfläche bleibt iPhone-tauglich, hell und schnell bedienbar, obwohl im Hintergrund sehr viele optionale Details möglich sind.
