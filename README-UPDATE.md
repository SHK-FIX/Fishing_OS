# Fishing OS – Update-Arbeitsweise ab v0.5

## Sicherheitsprinzip

Fishing OS wird ab v0.5 mit klarer Trennung zwischen stabilem Stand und Entwicklung gepflegt.

1. `main` bleibt der stabile Stand.
2. Größere Änderungen entstehen auf einem separaten Update-Branch.
3. Vor Änderungen wird der Ausgangsstand dokumentiert.
4. Datenmigrationen und Änderungen an Angeltagen/Spot-Sessions werden besonders geprüft.
5. Export/Import wird vor Freigabe einer neuen Version mitgetestet.
6. Erst nach realem Test wird der neue Stand nach `main` übernommen.
7. Frühere stabile Stände bleiben über die Git-Historie und klar benannte Versionen nachvollziehbar.

## v0.5 – geplanter Schwerpunkt

- Fehler bei dauerhaft weiterlaufenden historischen Spot-Sessions beheben
- Spot-Workflow ändern: Spot starten → Spot beenden → Übergangszeit → nächsten Spot starten
- Spot-Zeiten nachträglich korrigierbar machen
- Spots nachträglich bearbeiten
- Angeltage und Ereignisse robuster nachbearbeitbar machen
- Fanggewicht ergänzen
- Wetter-Snapshots absichern
- Köderverlust als Ereignis ergänzen
- Karten-/Standortlogik verbessern
- bestehende Daten und Backups kompatibel halten

Das optische Redesign folgt nach Stabilisierung des Workflows separat.
