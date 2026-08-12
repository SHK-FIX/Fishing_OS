# Fishing OS v0.5 – Profil & Einstellungen

Stand: 12.08.2026
Status: freigegeben

## Grundprinzip

Die Einstellungen bleiben auf der Hauptseite bewusst minimal. Erweiterte Optionen werden nur in klaren Unterseiten gezeigt. Ziel: kein Einstellungs-Friedhof, sondern wenige verständliche Bereiche im Stil nativer iPhone-Apps.

## Hauptseite Einstellungen

Bereiche:
- Profil
- Einheiten
- Karte
- Wetter
- Daten & Backup
- Datenschutz
- Bibliotheken
- Analyse & Vorschläge
- App

Optionaler Schnellzugriff unten:
- Daten exportieren
- Backup erstellen
- App-Info / Version

## Einheiten

Einstellbar:
- Gewicht: lbs / kg / g
- Länge: cm / inch
- Temperatur: °C / °F
- Tiefe: m / ft
- gewünschte Dezimalstellen, sofern sinnvoll

Umrechnungen erfolgen automatisch. Der Nutzer soll Werte nicht manuell umrechnen müssen.

Bei Gewicht kann optional die automatische Umrechnung sichtbar bleiben. Beispiel: Eingabe 3,20 lbs → Anzeige 1,45 kg. Bei kleinen metrischen Werten kann g statt kg verwendet werden.

Intern sollen Messwerte möglichst normalisiert gespeichert werden, damit spätere Änderungen der bevorzugten Anzeigeeinheit historische Statistiken nicht verfälschen.

## Karte

Standardansicht:
- Karte
- Hybrid
- Satellit

Standortverhalten:
- eigenen Standort anzeigen
- „Zu meinem Standort“-Button anzeigen
- letzten Kartenbereich merken
- optional automatisch zentrieren

Die Karte soll beim normalen Öffnen nicht unnötig die Nutzeransicht überschreiben. Der zuletzt betrachtete Bereich kann wiederhergestellt werden, während der eigene Standort weiterhin sichtbar bzw. schnell erreichbar bleibt.

Offline-Kartenverwaltung kann als eigener Unterpunkt vorgesehen werden, soweit die tatsächlich verwendete Kartenlösung dies unterstützt.

## Wetter

Unterseite für:
- automatische Wettererfassung an Spot-/Session-Grenzen
- manuelles Aktualisieren bei Ereignissen
- Verhalten bei fehlender Internetverbindung
- spätere Kennzeichnung nachgezogener Wetterdaten

Die globale Einstellung darf die bereits definierte Möglichkeit zum manuellen „Wetter aktualisieren“ an relevanten Einträgen nicht entfernen. Details siehe `WEATHER-SYSTEM-v0.5.md`.

## Daten & Backup

Mindestens:
- Export
- Import
- lokale Sicherung
- Backup-Status / Zeitpunkt letzter Sicherung

Fishing OS bleibt offline-first. Export und Import müssen langfristig versionssicher geplant werden, damit ältere Datenbestände nicht durch App-Updates wertlos werden.

## Datenschutz

Grundregeln:
- Spots standardmäßig privat
- GPS-/Positionsdaten bleiben lokal, sofern der Nutzer nichts anderes ausdrücklich auslöst
- Teilen standardmäßig restriktiv
- vor Teilen klare Kontrolle / Bestätigung
- Export kann später Optionen zum Entfernen oder Verbergen präziser Positionen erhalten

Optionen können umfassen:
- GPS-Positionen speichern
- Positionsdaten beim Teilen/Export verbergen
- Teilen standardmäßig deaktivieren
- vor jedem Teilen bestätigen

Private Spots dürfen niemals versehentlich öffentlich werden.

## Bibliotheken

Verwaltung von:
- Fischarten
- Ködern
- Tackle
- Ruten
- Rollen
- Schnüren / Vorfächern
- Haken
- Zubehör
- Rigs / Setups
- eigenen Bildern und Bezeichnungen

Bibliothekseinträge bleiben nachträglich bearbeitbar. Historische Ereignisse müssen ihre damaligen Werte bzw. Momentaufnahmen behalten, wenn spätere Änderungen am Katalog sonst die Vergangenheit verfälschen würden.

## Analyse & Vorschläge

Minimaler globaler Schalterbereich für datenbasierte Vorschläge.

Mögliche Optionen:
- datenbasierte Vorschläge verwenden
- standortbezogene Vorschläge verwenden

Grundregel: Vorschläge werden niemals automatisch zu Fakten. Der Nutzer bestätigt, ändert oder verwirft sie.

## App

- App-Version
- Informationen
- ggf. Diagnose-/Datenstatus

**Eine globale Funktion „App zurücksetzen“ wird nicht angeboten.** Daten werden gezielt bearbeitet, in den Papierkorb verschoben oder bewusst über Datenverwaltung behandelt. Dadurch gibt es keinen leicht erreichbaren Knopf, der das persönliche Angelarchiv gefährden könnte.

## Profil

Profil bleibt bewusst klein und funktional. Persönliche Präferenzen und appbezogene Einstellungen können dort erreichbar sein; Fishing OS benötigt kein soziales Nutzerprofil.

## UX-Prinzip

**Außen minimal, innen nur bei Bedarf detailliert.**

Die Hauptseite soll auf einem iPhone schnell erfassbar bleiben. Selten benötigte technische Optionen gehören in Unterseiten und nicht in die primäre Navigation.
