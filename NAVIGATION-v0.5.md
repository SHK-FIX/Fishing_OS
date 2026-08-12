# Fishing OS v0.5 – Globale iPhone-Navigation

Status: finalisiert nach Gesamtcheck

## Bottom Tab Bar

Maximal fünf feste Hauptbereiche:
1. **Übersicht** – Dashboard, aktiver Angeltag, Highlights, Schnellzugriffe
2. **Gewässer** – Gewässerarchiv und Gewässerdetails
3. **Karte** – große Karte, Spots, Navigation, Spot-Aktionen
4. **Fänge** – Fangarchiv und Fangdetails
5. **Mehr** – Tagebuch, Statistik/Analyse, Tackle, Fischarten, Einstellungen, Papierkorb/Backup

## Warum „Mehr“

Tagebuch, Statistik, Tackle, Fischarten und Einstellungen sind wichtig, aber nicht alle gleichzeitig primäre Navigation. Fünf klare Tabs verhindern eine überladene Tab Bar und bleiben iPhone-tauglich.

## Live-Modus

Ein laufender Angeltag ist kein eigener permanenter Tab. Er wird von Übersicht und Karte prominent erreichbar und kann als eigener voller Screen / Navigationszustand geöffnet werden.

## Zentraler + Einstieg

Ein schneller globaler Erfassungszugang kann als klarer Toolbar-/Floating-Action-Button angeboten werden, ohne einen Haupttab zu verdrängen.

Bei laufendem Angeltag öffnet er primär die Schnellereignisse:
- Fang
- Biss
- Drillverlust
- Nachläufer
- Beobachtung
- Köderverlust

Ohne laufenden Angeltag bietet er kontextabhängig z. B.:
- Angeltag starten
- vergangenen Fang hinzufügen
- Gewässer / Spot hinzufügen

## Deep Links innerhalb der App

Detailseiten werden über NavigationStack / kontextbezogene Navigation geöffnet und erhalten keinen eigenen permanenten Tab.

## Produktregel

**Fünf Haupttabs, alles Weitere eine Ebene tiefer. Primäre Navigation bleibt ruhig und vorhersehbar.**
