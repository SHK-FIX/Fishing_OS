# Fishing OS v0.5 – Angeltag, Gewässer-Sessions & Spot-Übergänge

Status: finalisiert nach Gesamtcheck

## Ein Angeltag, mehrere Gewässer

Ein persönlicher Angeltag bleibt **ein Tag**, auch wenn mehrere Gewässer besucht werden.

Intern wird der Tag in Gewässer-Sessions aufgeteilt:
- FishingDay = gesamter Tag
- WaterSession = zusammenhängender Abschnitt an einem Gewässer
- SpotVisit = Aufenthalt an einem Spot innerhalb dieser Gewässer-Session

Beispiel:
- 07:00–11:00 Chira
- 13:00–17:30 Ayagaures

Das bleibt ein Angeltag mit zwei Gewässer-Sessions.

## Gewässerwechsel

Beim Wechsel des Gewässers:
- bisherige WaterSession beenden
- neue WaterSession starten
- Wetter für die neue Session erfassen
- Spot optional direkt starten

Die Zeit zwischen zwei Gewässer-Sessions bleibt Teil des Angeltags, wird aber nicht automatisch einem Gewässer oder Spot als Angelzeit zugerechnet, sofern sie nur Transfer / Pause ist.

## Spot beenden

Ein Spot kann unabhängig vom Start eines neuen Spots beendet werden.

Nach „Spot beenden“:
- SpotVisit endet
- Aufenthaltsdauer wird gespeichert
- WaterSession kann weiterlaufen
- Zustand = **kein Spot aktiv**

## Übergangszeit

Zwischen zwei Spots darf beliebig viel Zeit liegen. Diese Zeit zählt zum Verlauf des Angeltags / der Session, aber nicht zur Aufenthaltsdauer eines Spots.

## Neuen Spot starten

Später kann ein vorhandener oder neuer Spot gestartet werden. Erst dann beginnt eine neue SpotVisit.

## Ereignis während Übergangszeit

Wenn während einer Phase ohne aktiven Spot ein Live-Ereignis erfasst wird, verlangt Fishing OS keine Rückkehr in eine andere Ansicht. Direkt in der Ereignismaske kann ein neuer Spot an der aktuellen Position minimal angelegt und dem Ereignis zugeordnet werden.

## Produktregel

**Ein Tag bleibt ein Tag. Gewässer und Spots sind zeitliche Unterabschnitte. Zwischen Spots darf bewusst nichts aktiv sein.**
