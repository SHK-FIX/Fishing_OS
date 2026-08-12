# Fishing OS v0.5 – Historische Fänge nachtragen

Stand: 12.08.2026
Status: freigegeben

## Ziel

Fishing OS soll Fänge, die vor der Nutzung der App entstanden sind, sauber nachträglich erfassen können, ohne fehlende Informationen zu erfinden oder wissenschaftliche Auswertungen durch falsche Präzision zu verfälschen.

Grundprinzip: **Keine Information wird wertlos, nur weil sie vor Fishing OS entstanden ist. Fehlende Daten bleiben unbekannt statt geschätzt.**

## Einstieg

Eigener Workflow: **„Vergangenen Fang hinzufügen“**.

Die Bearbeitungsmaske orientiert sich an der normalen Fangmaske, deaktiviert aber Automatiken, die bei historischen Daten irreführend wären.

## Zeitpunkt

- Datum frei wählbar.
- Uhrzeit frei wählbar und optional.
- Wenn nur ein ungefährer Zeitraum bekannt ist, soll die App später eine entsprechend unscharfe Eingabe unterstützen können, statt eine exakte Uhrzeit zu erzwingen.
- Datum und Uhrzeit bleiben jederzeit nachträglich bearbeitbar.

## Ort und Standortgenauigkeit

GPS ist **nicht erforderlich**.

Vorgefertigte Standortgenauigkeit:
- exakter Spot bekannt
- ungefährer Bereich bekannt
- nur Gewässer bekannt
- Ort unbekannt

Gewässer kann ausgewählt werden. Spot ist optional.

Bei „ungefährer Bereich bekannt“ kann später eine grobe Position bzw. Bereichszuordnung ergänzt werden, ohne eine exakte GPS-Genauigkeit vorzutäuschen.

Die Standortgenauigkeit wird mit dem Datensatz gespeichert und kann später verbessert werden, wenn neue Informationen verfügbar werden.

## Fangdaten

Soweit bekannt, können eingetragen werden:
- Fischart
- Länge
- Gewicht
- Köder
- Farbe / Dekor
- Technik / Führung
- Rig / Tackle-Setup
- Tiefe
- Struktur
- Grundbeschaffenheit
- Beute / Nahrungsangebot
- Notizen
- weitere Fangdetails

Alle Felder sind nachträglich bearbeitbar.

## Gewichtseinheiten

Gewicht unterstützt die in Fishing OS vorgesehenen Einheiten. Für den aktuellen v0.5-Workflow ist lbs wichtig; metrische Umrechnung wird automatisch angezeigt. Langfristig richtet sich die Eingabeeinheit nach den Benutzereinstellungen.

## Wetter und Bedingungen

- Heutige Wetterdaten dürfen bei historischen Fängen niemals automatisch eingetragen werden.
- Wenn keine damaligen Wetterdaten vorhanden sind, zeigt Fishing OS klar **„Keine Wetterdaten vorhanden“**.
- Historische Wetterdaten können später ergänzt werden, sofern eine ausreichend zuverlässige Quelle und ein sinnvoller Ort/Zeitpunkt verfügbar sind.
- Nachträglich bezogene Wetterdaten müssen als solche gekennzeichnet werden und dürfen nicht mit einem echten Wetter-Snapshot vom Fangzeitpunkt verwechselt werden.

## Fotos und Medien

- Fotos aus der Mediathek können hinzugefügt werden.
- Mehrere Fotos sind möglich.
- Medien können später ergänzt, ersetzt oder entfernt werden.
- Falls ein Foto verwertbare Metadaten enthält, kann Fishing OS später anbieten, Datum oder Position daraus zu übernehmen.
- Solche Metadaten werden nur als Vorschlag verwendet und niemals ungefragt als bestätigte Tatsache gespeichert.

## Historisch nachgetragen

Jeder über diesen Workflow erfasste Datensatz erhält intern eine Kennzeichnung **„historisch nachgetragen“**.

Diese Kennzeichnung darf in der Detailansicht dezent sichtbar sein und steht Analysen zur Verfügung, damit zwischen live am Wasser erfassten und nachträglich rekonstruierten Daten unterschieden werden kann.

## Persönliche Bedeutung und Bestwerte

- Eine persönliche Bewertung / Bedeutung des Fangs darf manuell vergeben werden.
- **Persönliche Bestwerte (PB) werden nicht manuell als Schalter gesetzt.**
- Fishing OS ermittelt Bestwerte automatisch aus den vorhandenen Fangdaten.
- Wenn historische Daten unvollständig sind, muss die App entsprechend vorsichtig mit Rekord-Aussagen umgehen.

## Statistik und Datenqualität

Historische Fänge zählen normal für Bereiche, für die ausreichend verlässliche Daten vorhanden sind, z. B.:
- Gesamtfänge
- Fischarten
- Größen- und Gewichtsrekorde
- Gewässerstatistik
- Köderstatistik, sofern der Köder bekannt ist

Spot- und Standortanalysen dürfen nur Daten verwenden, deren Standortgenauigkeit dafür ausreichend ist.

Beispiel: Ein Fang mit „nur Gewässer bekannt“ zählt für das Gewässer und persönliche Rekorde, aber nicht für die Erfolgsquote eines einzelnen Spots.

## Nachbearbeitung

Alle Felder eines historischen Fangs bleiben jederzeit editierbar. Standortgenauigkeit, Fischart, Maße, Köder, Bilder, Notizen und weitere Informationen können nachträglich ergänzt oder korrigiert werden.

Korrekturen an automatisch oder aus Metadaten abgeleiteten Werten sollen nachvollziehbar bleiben, wenn dies für spätere Analysen relevant ist.

## Zukunftserweiterung

Das Prinzip soll später nicht nur für Fänge, sondern auch für alte Angeltage, Spots und Beobachtungen nutzbar sein. Dabei gelten dieselben Regeln: fehlende Daten nicht erfinden, Unsicherheit explizit speichern und alles nachträglich bearbeitbar halten.
