# Fishing OS v0.4 – stabile Ausgangsbasis

Stand vor dem v0.5-Workflow-Update.

- Referenz: aktueller v0.4 GC Field Test
- Stabiler Ausgangs-Commit: `50a333f3960c97ef6cf213da1eb0f420e7dddb08`
- Arbeitsbranch für das neue Update: `update/v0.5-workflow`
- Grundsatz: `main` bleibt während der Entwicklung unangetastet.
- Vor Übernahme nach `main` werden Datenintegrität, Angeltage, Spot-Sessions, Export/Import und bestehende Daten geprüft.

Die hochgeladene lokale v0.4-Referenz wurde mit dem Repository abgeglichen. Manifest, Service Worker und App-Icons stimmen anhand ihrer Git-Blob-Hashes überein; die aktive App-Logik befindet sich in `index.html`. Die alten Dateien unter `js/` und `css/` sind für den aktuellen Stand nicht die aktive Quelle und werden aus Sicherheitsgründen zunächst nicht gelöscht.
