# Fishing OS v0.5 – Artenkatalog (Startset)

Status: beschlossenes Startset für die erste bearbeitbare Fischarten-Bibliothek.

## Produktregel

Fischarten werden nicht hart in Formularen codiert, sondern als bearbeitbare Stammdaten geführt. Gewässer referenzieren relevante Arten über IDs. Fänge speichern die Arten-ID. Dadurch bleiben Umbenennen, Ergänzen, regionale Priorisierung und Statistik sauber möglich.

Pro Art vorgesehen:
- stabile `speciesId`
- gebräuchlicher Name
- wissenschaftlicher Name (optional, nach Verifikation)
- alternative/lokale Namen (optional)
- Bild/Icon
- Kategorie Süßwasser/Salzwasser
- Länder/Regionen
- aktiv/inaktiv
- optionale Notiz

## Startset Spanien – Süßwasser

Die Spanien-Zuordnung wird bewusst landesweit gedacht und ist nicht nur auf Gran Canaria begrenzt. Damit bleibt das Startset auch für spätere Reisen bzw. Gewässer auf dem spanischen Festland (z. B. Ebro) nutzbar.

- Schwarzbarsch / Black Bass
- Tilapia
- Sonnenbarsch (genaue Artbezeichnung erst nach sicherer Bestimmung festlegen)
- Karpfen
- Wels / Katzenwels
- Barsch
- Zander

Hinweis: Nicht jede Art kommt an jedem spanischen Gewässer vor. Das konkrete Gewässer priorisiert nur die dort relevanten Arten. Meer-/Küstenarten werden separat ergänzt, wenn Fishing OS dafür genutzt wird.

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
- Eine Art darf nicht einfach gelöscht werden, solange Fänge auf sie verweisen; stattdessen deaktivieren oder sicher migrieren.
- Länderzuordnung dient nur als sinnvolle Vorauswahl; maßgeblich ist immer die konkrete Artenliste des Gewässers.

## Bildregeln

- Jede Art erhält möglichst ein einheitliches, gut erkennbares Vorschaubild.
- Bilddarstellung soll anatomisch plausibel und eindeutig sein; unklare/fehlerhafte Darstellungen werden ersetzt.
- Der Zander wird im finalen Bildset mit einer klar erkennbaren, realistischen Silhouette/Darstellung geführt.

## Datenqualität

- Keine unsichere Artbestimmung als gesicherte Taxonomie speichern.
- Bei unsicherer Bestimmung kann zunächst ein allgemeiner/Arbeitsname genutzt und später präzisiert werden.
- Wissenschaftliche Namen und Bildmaterial werden vor produktiver Übernahme verifiziert.
