# Fishing OS v0.5 – Fischarten-Bibliothek

Stand: 12.08.2026
Status: freigegeben

## Ziel

Die Fischarten-Bibliothek ist die persönliche, vollständig lokale Arten-Datenbank von Fishing OS. Sie verbindet Fangdokumentation, eigene Erfahrungen, Bilder, Merkmale und Statistiken, ohne den Nutzer beim eigentlichen Angeln mit unnötiger Pflege zu belasten.

Der visuelle Referenzentwurf ist der **ursprünglich freigegebene erste Fischarten-Bibliothek-Entwurf**. Die anschließend erzeugte alternative Grafik mit geänderten Fischdarstellungen wird ausdrücklich nicht übernommen.

## Artenübersicht

Die Hauptansicht zeigt eine schnell durchsuchbare Liste bzw. visuelle Übersicht der Fischarten.

Mindestens:
- Bild / Illustration
- deutscher Name
- wissenschaftlicher Name, sofern vorhanden
- Anzahl dokumentierter Fänge
- Suche
- Filter
- „Fischart hinzufügen“

Mögliche Kategorien:
- Raubfisch
- Friedfisch
- weitere sinnvolle Gruppen

Die Bibliothek ist nicht auf Deutschland begrenzt. Regionale Ausgangssammlungen können z. B. Deutschland und Spanien enthalten, während der Nutzer jederzeit eigene Arten ergänzen kann.

## Vorgefüllte Arten

Fishing OS kann eine kuratierte Ausgangsbibliothek relevanter Fischarten enthalten. Sie ist jedoch keine starre Systemliste.

Der Nutzer kann:
- vorhandene Arten verwenden
- eigene Arten hinzufügen
- Bezeichnungen und eigene Informationen ergänzen
- eigene Bilder hinterlegen
- die persönliche Sortierung anpassen

## Fischart-Detailseite

Eine Art kann u. a. folgende Bereiche besitzen:
- Überblick
- Merkmale
- Verhalten
- eigene Notizen
- eigene Fotos
- Fangstatistik
- letzte Fänge

Mögliche Stammdaten:
- deutscher Name
- wissenschaftlicher Name
- Kategorie
- Beschreibung
- Lebensraum
- Aktivitätszeit
- bevorzugte Wassertiefe
- typische / bekannte Größe
- typische / bekannte Gewichte
- Ernährung
- Laichzeit
- äußere Merkmale
- besondere Merkmale

Diese Informationen sind unterstützende Wissensdaten und dürfen nicht mit eigenen Beobachtungen vermischt werden.

## Eigene Erfahrungen / Notizen

Der Nutzer kann pro Fischart eigene Notizen und Beobachtungen hinterlegen.

Beispiele:
- Verhalten an bestimmten Gewässern
- Reaktion auf Köder
- bevorzugte Tiefen
- Tageszeiten
- saisonale Beobachtungen

Eigene Beobachtungen werden als persönliche Daten behandelt und nicht automatisch zu allgemeingültigen biologischen Fakten erklärt.

## Eigene Fotos

Pro Fischart können eigene Bilder hinterlegt werden.

Fotos bleiben nachträglich:
- hinzufügbar
- entfernbar / Papierkorb
- sortierbar
- ersetzbar

Das Artenbild kann vom Nutzer geändert werden.

## Art bearbeiten

Alle nutzerpflegbaren Informationen sind nachträglich bearbeitbar.

Bearbeiten umfasst insbesondere:
- Name
- wissenschaftlicher Name
- Kategorie
- Beschreibung
- Merkmale
- Verhalten
- Lebensraum
- eigene Fotos
- eigene Notizen
- weitere optionale Felder

Löschen erfolgt ausschließlich gemäß `TRASH-RECOVERY-v0.5.md`.

## Verknüpfung mit Fängen

Jeder Fang kann einer Fischart zugeordnet werden.

Die Auswahl erfolgt aus der persönlichen Fischarten-Bibliothek.

Von einer Art aus können zugehörige Fänge geöffnet werden; von einem Fang aus kann die Art geöffnet werden.

Änderungen an Bibliotheksdaten dürfen historische Fang-Rohdaten nicht zerstören.

## Neue Art während Fang-Erfassung

Ist die benötigte Fischart noch nicht vorhanden, kann sie direkt aus dem Fang-Workflow schnell angelegt werden.

Dabei gilt:
- Fang darf trotzdem schnell gespeichert werden
- keine Pflicht zur sofortigen vollständigen Artenpflege
- fehlende Details können später ergänzt werden

Fishing OS kann bei unbekannten / noch nicht vorhandenen Arten eine Anlage vorschlagen, aber nicht ungefragt eine Art als sicher erkannt speichern.

## Statistiken je Fischart

Mögliche Auswertungen:
- Fänge über Zeit
- Größenverteilung
- Gewichtsverteilung
- persönliche Bestwerte
- Top-Köder
- Top-Spots
- Top-Gewässer
- Erfolgszeiten
- saisonale Verteilung

Nur tatsächlich vorhandene Daten werden ausgewertet. Fehlende Werte werden nicht geschätzt.

## Sortieren & Filtern

Mindestens möglich:
- Suche nach Name
- Kategorie
- nur eigene Arten
- nur Arten mit Fängen
- alphabetisch
- persönliche Reihenfolge

Eine persönliche Reihenfolge kann per Drag & Drop gepflegt werden.

## Regionale Organisation

Regionen / Länder dienen als Hilfe für Vorschläge und Ausgangssammlungen, nicht als harte Trennung der Bibliothek.

Beispiel:
- Deutschland
- Spanien

Eine Art kann in mehreren Regionen relevant sein. Zander und Barsch dürfen beispielsweise auch in der spanischen Auswahl vorkommen.

Der Nutzer ist nicht auf vorgegebene Länder oder Arten beschränkt.

## Offline & Datenschutz

Die Fischarten-Bibliothek funktioniert offline-first.

Persönliche Bilder, Notizen und Fangverknüpfungen bleiben lokal und privat, soweit keine ausdrückliche Export-/Teilen-Aktion erfolgt.

## Backup & Wiederherstellung

Artenbibliothek, eigene Bilder, Notizen und Verknüpfungen müssen in der Backup-/Exportstrategie berücksichtigt werden.

Gelöschte Arten landen im Papierkorb und bleiben wiederherstellbar.

## UX-Prinzip

**Beim Fang schnell auswählen – Wissen später in Ruhe ergänzen.**

Die Bibliothek darf umfangreich und nerdig werden, ohne den Live-Workflow am Wasser zu verlangsamen.
