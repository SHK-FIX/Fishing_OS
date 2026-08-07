Fishing OS v0.3.0 – Smart Waters

Neu:
- frei wählbares Dashboard-Hero-Bild
- echte Online-Karte mit OpenStreetMap/Leaflet
- Spots und Gewässer als Marker
- Navigation per Apple Karten
- automatische Wetter-Snapshots via Open-Meteo (ohne API-Key)
- Temperatur, gefühlte Temperatur, Luftdruck, Wind, Böen, Windrichtung, Bewölkung, Niederschlag, Luftfeuchte
- Sonnenaufgang / Sonnenuntergang
- Mondphase lokal berechnet
- Wetter-Snapshot beim Start eines Angeltags und optional bei jedem Ereignis
- Nullfang-Angeltage werden für die spätere Statistik berücksichtigt
- „Heute vor einem Jahr“ auf dem Dashboard
- Statistik für Druckbereiche, Temperaturbereiche, Windrichtung und Köder
- lokales Backup/Restore

Wichtig:
Die aktuelle PWA kann Apple Maps nicht direkt als eingebettete Karte nutzen, ohne MapKit-JS-Authentifizierung über ein Apple-Developer-Konto. Darum nutzt diese Version für die sichtbare Online-Karte OpenStreetMap und öffnet für Navigation Apple Karten. In einer nativen SwiftUI-Version kann MapKit direkt eingesetzt werden.
