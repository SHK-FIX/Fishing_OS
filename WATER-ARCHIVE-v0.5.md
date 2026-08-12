# Fishing OS v0.5 – Gewässer-Übersicht / Gewässerarchiv

Stand: 12.08.2026
Status: freigegeben

## Ziel

Das Gewässerarchiv ist die zentrale visuelle Übersicht aller persönlichen Gewässer. Es soll auch bei vielen Einträgen schnell erfassbar bleiben und den direkten Einstieg in Gewässerprofil, Karte, Spots und Angeltag ermöglichen.

## Hauptansicht

Oben:
- Titel „Gewässer“
- Suche
- Filter
- Karten-Schnellzugriff
- „Gewässer hinzufügen“

Kompakte Kennzahlen können zeigen:
- Anzahl Gewässer
- Anzahl bewertbarer / besonders erfolgreicher Gewässer
- Fänge gesamt
- Angelzeit gesamt

Die Kennzahlen bleiben bewusst kompakt; tiefere Statistik gehört in die Statistik-/Analysebereiche.

## Gewässerkarten

Jedes Gewässer wird als hochwertige visuelle Karte dargestellt mit:
- frei wählbarem Titelbild
- Gewässername
- Region / Land, sofern gepflegt
- Favorit
- datenbasierter Status, sofern ausreichend Daten vorhanden
- Fänge
- Bisse
- Drillverluste
- Angelzeit
- letzter Besuch

Antippen öffnet die Gewässer-Detailseite.

## Bewertung / Relevanz

Mögliche sichtbare Zustände:
- Sehr erfolgreich
- Erfolgreich
- Potenzial
- Noch nicht bewertet

**Diese Einstufung wird nicht willkürlich oder rein manuell vergeben.**

Fishing OS darf einen datenbasierten Status nur anzeigen, wenn eine ausreichende Datenbasis vorhanden ist. Bei zu wenig Daten wird ausdrücklich „Noch nicht bewertet“ bzw. eine vergleichbare neutrale Formulierung verwendet.

Keine Scheingenauigkeit: Wenige kurze Besuche dürfen nicht dieselbe Aussagekraft besitzen wie viele dokumentierte Angelstunden.

Langfristig können bei der Bewertung u. a. berücksichtigt werden:
- Angelzeit
- Anzahl Besuche
- Fänge
- Fischkontakte
- Fang-/Kontaktquote pro Zeiteinheit
- Fischgröße
- Datenmenge / Stichprobengröße

Die genaue Bewertungsformel wird separat definiert und darf später angepasst werden, ohne historische Rohdaten zu verändern.

## Favoriten

Gewässer können als Favorit markiert werden. Favoriten dienen ausschließlich Organisation und Schnellzugriff und beeinflussen nicht automatisch den statistischen Erfolgswert.

## Suche

Durchsuchbar mindestens nach:
- Gewässername
- Region
- Land
- optional Notizen / eigene Bezeichnungen, sofern performant sinnvoll

## Schnellfilter

Mindestens:
- Alle
- Favoriten
- In der Nähe, wenn Standortfreigabe vorhanden

Erweiterte Filter können später umfassen:
- Land / Region
- Fischarten
- besucht / noch nicht besucht
- Zeitraum letzter Besuch
- datenbasierter Erfolgsstatus

## Sortierung

Mindestens:
- A–Z
- zuletzt besucht
- zuletzt hinzugefügt
- datenbasierte Relevanz / Erfolg, sofern ausreichend Daten vorhanden
- Angelzeit
- Anzahl Fänge

Bei statistischer Sortierung muss die Datenbasis berücksichtigt werden, damit ein einzelner Zufallsfang ein Gewässer nicht automatisch dauerhaft an die Spitze setzt.

## Kartenansicht

Vom Gewässerarchiv ist eine Kartenansicht schnell erreichbar.

Sie zeigt:
- gespeicherte Gewässer
- eigenen Standort, sofern freigegeben
- Auswahl eines Gewässers
- direkten Sprung in dessen Karte / Spots

Die globale Kartenlogik bleibt gemäß bestehender Spezifikationen Karte / Hybrid / Satellit und offline-first soweit technisch möglich.

## Gewässer-Detail-Vorschau

Vom Archiv aus kann eine kompakte Vorschau bzw. direkt die bereits definierte Gewässer-Detailseite geöffnet werden.

Dort verfügbar:
- Übersicht
- Karte / Spots
- Statistik
- Analysen
- Notizen / Labor
- letzte Aktivitäten
- Top-Fänge

Die Detailseite selbst wird durch `WATER-DETAIL-v0.5.md` definiert.

## Neue Gewässer

Ein neues oder noch nicht beangeltes Gewässer darf vollständig im Archiv existieren, auch wenn noch keine Fänge oder Angelzeit vorliegen.

Es wird nicht künstlich negativ bewertet. Stattdessen: **„Noch nicht bewertet“**.

Damit eignet sich das Archiv sowohl für bekannte Stammgewässer als auch für zukünftige Ziele.

## Historische Daten

Historisch nachgetragene Fänge und Angeltage können in die Gewässerkennzahlen einfließen, sofern ihre Zuordnung zum Gewässer bekannt ist.

Fehlende GPS-/Spotdaten reduzieren nicht automatisch den Wert des gesamten Fangs; sie werden lediglich bei positionsabhängigen Analysen nicht als präzise Daten behandelt.

## Bearbeitbarkeit

Gewässerdaten bleiben gemäß systemweiter Bearbeiten-Logik vollständig nachträglich pflegbar.

Änderungen an Name, Bild oder Stammdaten dürfen historische Ereignisse nicht verlieren oder unbemerkt verfälschen.

## Skalierung

Die Anzahl der Gewässer ist konzeptionell nicht künstlich begrenzt. Suche, Filter und Sortierung müssen auch bei einer langfristig großen persönlichen Datenbank sinnvoll funktionieren.

## UX-Prinzip

**Erst visuell erkennen, dann bei Bedarf tief einsteigen.**

Das Gewässerarchiv soll nicht wie eine Tabelle wirken. Bilder, wenige aussagekräftige Kennzahlen und klare Navigation stehen im Vordergrund.
