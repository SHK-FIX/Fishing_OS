# Fishing OS v0.5 – Papierkorb & Wiederherstellung

Stand: 12.08.2026
Status: freigegeben

## Verbindliche globale Grundregel

**Vom Nutzer erzeugte Inhalte werden bei einer normalen Löschaktion niemals sofort endgültig gelöscht.**

„Löschen“ bedeutet in Fishing OS zunächst: **in den Papierkorb verschieben**.

Diese Regel gilt systemweit und hat Vorrang vor älteren UI-Entwürfen mit direktem Löschen oder kurzen Undo-Zeitfenstern.

## Geltungsbereich

Insbesondere:
- Gewässer
- Spots
- Angeltage
- Fänge
- Bisse
- Drillverluste
- Nachläufer
- Beobachtungen
- Köderverluste
- historische Einträge
- Köder
- Tackle
- Ruten
- Rollen
- Schnüre / Vorfächer
- Haken
- Zubehör
- Setups / Rigs
- Fischarten / eigene Bibliothekseinträge
- Notizen
- Hypothesen / Gewässer-Labor-Einträge
- Fotos und Videos, soweit sie vom Nutzer innerhalb Fishing OS verwaltet werden
- weitere zukünftige nutzererzeugte Datensätze

## Soft Delete

Technisch wird ein Datensatz beim normalen Löschen nicht physisch entfernt, sondern als gelöscht / im Papierkorb markiert.

Mindestens vorzusehen:
- `deletedAt`
- ursprüngliche stabile ID bleibt erhalten
- Beziehungen / Referenzen bleiben erhalten

Optional später:
- Löschgrund
- Quelle der Löschung
- vorheriger Zustand

## Papierkorb

Ein zentraler Papierkorb ist über Einstellungen / Datenverwaltung erreichbar.

Er zeigt gelöschte Inhalte mit:
- Typ
- Name / Kurzbeschreibung
- Löschdatum
- ggf. Gewässer / Kontext
- Wiederherstellen
- endgültig löschen

Filter nach Datentyp können bei vielen Einträgen ergänzt werden.

## Wiederherstellung

Jeder Datensatz im Papierkorb kann wiederhergestellt werden, solange er nicht bewusst endgültig gelöscht wurde.

Bei Wiederherstellung müssen seine Beziehungen möglichst vollständig erhalten bzw. wieder aktiviert werden.

Beispiel:
Ein gelöschter Spot wird wiederhergestellt → zugehörige Fänge, Angeltage, Beobachtungen, Aufenthaltszeiten und statistische Zuordnungen erkennen wieder denselben Spot.

Es wird kein neuer unabhängiger Spot mit neuer Identität erzeugt.

## Beziehungen und abhängige Daten

Das Löschen eines übergeordneten Datensatzes darf abhängige historische Daten nicht unbemerkt zerstören.

Beispiel Gewässer:
Wird ein Gewässer in den Papierkorb verschoben, bleiben seine Spots, Angeltage, Fänge und sonstigen Beziehungen erhalten.

Die UI kann zusammengehörige Inhalte vorübergehend aus normalen Ansichten ausblenden, die Datenbeziehungen bleiben jedoch bestehen.

## Statistik

Datensätze im Papierkorb werden standardmäßig nicht in normalen aktuellen Statistiken gezählt.

Nach Wiederherstellung werden sie wieder berücksichtigt.

Die Rohdaten bleiben während der Papierkorbphase erhalten.

## Endgültig löschen

Endgültiges Löschen ist eine separate, bewusste Aktion im Papierkorb.

Dafür gelten strengere Schutzmaßnahmen:
- klare Warnung
- genaue Benennung dessen, was gelöscht wird
- Hinweis auf betroffene Beziehungen / Medien
- zusätzliche Bestätigung bei umfangreichen oder verknüpften Daten

Bei besonders kritischen Objekten kann eine stärkere Bestätigung vorgesehen werden.

## Keine automatische Leerung im MVP

Für v0.5 wird der Papierkorb **nicht automatisch nach 30 Tagen o. ä. geleert**.

Grund: Fishing OS ist ein langfristiges persönliches Archiv. Eine automatische Frist könnte unbemerkt wertvolle historische Daten vernichten.

Eine spätere optionale automatische Bereinigung kann geprüft werden, darf aber nicht ungefragt aktiviert sein.

## Medien

Bei Medien muss zwischen Fishing-OS-Verknüpfung und Originaldatei in der iPhone-Fotomediathek unterschieden werden.

Fishing OS darf beim Löschen eines internen Medieneintrags nicht ungefragt das Original aus der Apple-Fotomediathek löschen.

## Export / Backup

Die Backup-Strategie soll berücksichtigen, ob Papierkorb-Daten enthalten sind. Für vollständige Sicherungen sollten sie grundsätzlich erhalten bleiben, damit eine Wiederherstellung auch nach Gerätewechsel / Import möglich bleibt.

## Offline-first

Papierkorb und Wiederherstellung funktionieren lokal und benötigen keine Internetverbindung.

## UX-Prinzip

**Ein falscher Tap darf keine Jahre an Angelhistorie vernichten.**

Fishing OS behandelt Löschen als reversiblen Zustand und endgültiges Vernichten als separate Ausnahmeaktion.
