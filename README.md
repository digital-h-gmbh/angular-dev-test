
# AngularDevTest 

Schön, dass Du Dir die Zeit nimmst, uns zu zeigen, was Du drauf hast.

## Ablauf
Bitte clone oder forke dir das Repository und bearbeite die Aufgaben in den verschiedenen Branche auf die am Ende der letzten Aufgabe verwiesen wird.
Du kannst alle frei verfügbaren Tools und Labraries verwenden.
Das Design selbst wird nicht bewertet, du kannst gerne plain HTML nutzen oder auch eine Component Library wie Angular Material verwenden.

## Aufgabe 1
Bitte erstelle ein Wizard für ein mehrseitiges Formular. Das Formular soll folgende Werte abfragen: 

- Ticketinhaber
  - Vorname
  - Nachname
- Rechnungsinhaber
  - Vorname
  - Nachname
  - Firma (optional)
  - Straße
  - PLZ
  - Ort
- Bestellübersicht
  - hier sollen alle zuvor eingetragenen Werte angezeigt werden

Die eingegebenen Werte sollen anschließend an den apiService übergeben und gespeichert werden. 

Bitte bearbeite anschließend die Aufgabe in Branch `task-2`.

## Aufgabe 2

Es soll eine Möglichkeit entwickelt werden, dass die Daten vom Ticketinhaber auf die Page vom Rechnungsinhaber übernommen werden können und nicht erneut eingetragen werden müssen. 

Bitte entwickle eine Checkbox oder Button "Ticketinhaber für Rechnungsinhaber übernehmen".

Bitte bearbeite anschließend die Aufgabe 
in Branch `task-3`.

## Aufgabe 3

Es soll eine weitere Page zwischen Ticketinhaber und Rechnungsinhaber geben. Auf dieser soll der Kunde die Möglichkeit haben ein "1.Klasse Upgrade" oder die Option "Fahrradmitnahme" auszuwählen.   
Eine Auswahl nicht ist Pflicht, aber es kann maximal eine Option gewählt werden.

Bitte bearbeite anschließend die Aufgabe
in Branch `task-4`.

## Aufgabe 4

Bei so vielen Bestellungen wird nun eine Übersicht benötigt. Bitte entwickle eine Seite, auf der alle getätigten Bestellungen in einer Tabelle angezeigt werden.
Diese Seite sollte natürlich nur für eingeloggte Benutzer sichtbar sein. Hier reicht es wenn im localstorage ein wert `token` existiert.

Bitte bearbeite anschließend die Aufgabe
in Branch `task-5`.

## Aufgabe 5
Bei so vielen Daten scheint ein request nicht auszureichen. Bitte implementiere ein lazy loading für das Laden der Bestellungen.
Hierfür kannst du die funktion `loadPart` im apiService verwenden.
Für den Nutzer der Seite sollte ersichtlich sein, dass noch weitere Daten geladen werden.

Vielen Dank für Deine Zeit. 
Bitte schick mir (s.hansen@digital-h.de) den Link zu Deinem Repo.
