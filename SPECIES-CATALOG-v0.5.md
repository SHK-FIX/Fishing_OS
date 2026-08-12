# Fishing OS v0.5 – Artenkatalog (Startset)

Status: beschlossenes Startset für die erste bearbeitbare Fischarten-Bibliothek.

## Produktregel

Fischarten werden nicht hart in Formularen codiert, sondern als bearbeitbare Stammdaten geführt. Gewässer referenzieren relevante Arten über IDs. Fänge speichern die Arten-ID. Dadurch bleiben Umbenennen, Ergänzen, regionale Priorisierung und Statistik sauber möglich.

Fishing OS v0.5 ist für die persönliche **Süßwasserangelei** ausgelegt. Ein Salzwasser-/Meeresartenkatalog gehört nicht zum aktuellen Produktumfang.

Pro Art vorgesehen:
- stabile `speciesId`
- gebräuchlicher Name
- wissenschaftlicher Name optional, nach Verifikation
- alternative/lokale Namen optional
- Bild/Icon
- Fischtyp, z. B. Raubfisch / Friedfisch / sonstige sinnvolle Gruppe
- Länder/Regionen
- aktiv/inaktiv
- optionale Notiz

„Süßwasser“ ist damit Produktumfang und kein pro Art benötigtes Kategorie-Feld. Fischtyp und regionale Zuordnung bleiben getrennte Eigenschaften.

## Startset Spanien – Süßwasser

Die Spanien-Zuordnung wird bewusst landesweit gedacht und ist nicht nur auf Gran Canaria begrenzt. Damit bleibt das Startset auch für spätere Reisen bzw. Gewässer auf dem spanischen Festland nutzbar.

- Schwarzbarsch / Black Bass
- Tilapia
- Sonnenbarsch – genaue Artbezeichnung erst nach sicherer Bestimmung
- Karpfen
- Wels / Katzenwels
- Barsch
- Zander

Nicht jede Art kommt an jedem spanischen Gewässer vor. Das konkrete Gewässer priorisiert nur die dort relevanten Arten.

## Startset Deutschland – Süßwasser

- Hecht
- Zander
- Barsch
- Schwarzbarsch
- Karpfen
- Wels
- Rapfen
- Aal
- Forelle
- Döbel

## UX-Regeln

- Fangformular zeigt zuerst Arten, die dem aktuellen Gewässer zugeordnet sind.
- Über „Weitere Fischart“ bleibt die komplette aktive Artenbibliothek erreichbar.
- Kleine Artbilder/Icons dürfen in der Auswahl erscheinen, sofern sie einheitlich und gut erkennbar sind.
- Arten können später hinzugefügt, deaktiviert und in ihrer Darstellung bearbeitet werden.
- Löschen folgt der globalen Papierkorbregel; Deaktivieren/Archivieren ist eine separate organisatorische Funktion.
- Länderzuordnung dient nur als sinnvolle Vorauswahl; maßgeblich ist immer die konkrete Artenliste des Gewässers.

## Bildregeln

- Jede Art erhält möglichst ein einheitliches, gut erkennbares Vorschaubild.
- Bilddarstellung soll anatomisch plausibel und eindeutig sein; unklare/fehlerhafte Darstellungen werden ersetzt.
- Der visuelle Referenzentwurf für v0.5 bleibt der ursprünglich freigegebene erste Fischarten-Bibliothek-Entwurf.

## Datenqualität

- Keine unsichere Artbestimmung als gesicherte Taxonomie speichern.
- Bei unsicherer Bestimmung kann zunächst ein allgemeiner/Arbeitsname genutzt und später präzisiert werden.
- Wissenschaftliche Namen und Bildmaterial werden vor produktiver Übernahme verifiziert.
