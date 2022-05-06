## Inhaltsverzeichnis
1. [Beschreibung](#beschreibung)
2. [Entwickler](#entwickler)
3. [API](#api)
4. [Prüfungsfragen](#prüfungsfragen)
***

### Beschreibung

Diese API wurde für die Modulprüfung in Verteilte Systeme von Studierenden aus dem Kurs WWI20B3 erstellt.
***
### Entwickler

* Florian Waldschmitt
* Tim Huthmann
* Alexander Werner
***

## API

Die API kann man sich als eine Videothek vorstellen. Sie enthält Informationen über Filme, Direktoren und Genres. 


API Endpoint 1:
/movies/

API Endpoint 2:
/directors/

API Endpoint 3:
/genres/

***
## Prüfungsfragen

* Beschreibt ein konkretes Anwendungsszenario für den entwickelten
Service und schildert (in wenigen Worten) eine mögliche
Gesamt-Architektur in welcher sich dieser befinden könnte.

Antwort: 

Unser Service soll es ermöglichen, als Videothek zu funktionieren. Dabei können Filme angezeigt werden. Es können auch Informationen zu Filmen wie zum Beispiel Autoren oder Genres dargestellt werden. Der Service könnte wie eine Art "Mini-Netflix" angesehen werden.

Die Gesamt-Architektur besteht aus folgenden Schritten: 
•	Der Benutzer stellt am System eine Suchanfrage über einen Film, Genres oder Dartseller bzw. Regisseur (Request)
•	Der Benutzer ruft die Inhalte vom Server mit GET ab 
•	Der Admin hat die Möglichkeit über POST, PUT sowie DELETE unterschiedliche Datensätze hinzuzufügen, zu verändern und zu löschen 
Außerdem wird unser Service in drei grundlegenden Schichten dargestellt: 
1.	Frontend: Darstellung der Website bzw. App, welche Eingaben des Benutzers empfängt, diese als Anfragen an die REST-API sendet und die Antwort der API darstellt 
2.	Backend: API bildet die Basis für eine Videothek und beinhaltet die Logik des Service
3.	MongoDB: Daten werden in einer Datenbank abgelegt  


* Welche Probleme können entstehen, wenn der entwickelte Service von
mehreren Parteien verwendet wird? Beschreibt zwei Probleme sowie
mögliche Lösungen.

Antwort: 

Ein potenzielles Problem könnte die Überlastung des Service aufgrund zu vieler Benutzeranfragen zur gleichen Zeit sein. Das Risiko, welches durch die Nicht-Verfügbarkeit des Service entsteht, ist dass dieser ausfällt oder Benutzeranfragen abgelehnt werden. Dadurch entsteht eine Sicherheitslücke für potenzielle Angreifer. 
Eine mögliche Lösung zum Entgegenwirken des Problems kann die Anwendung eines Retry-Architekturmusters sein. Hierbei werden Benutzeranfragen bei zu hoher Auslastung des Service nicht direkt abgelehnt, sondern nach Verzögerung erneut wiederholt und durchgeführt. Die Benutzer befinden sich dann in einer virtuellen Warteschlange und bekommen nach einer bestimmten Wartezeit Zugriff auf den Service. Ein weiteres Problem kann entstehen, wenn zwei oder mehr Benutzer gleichzeitig einen Datensatz bearbeiten. Der Service kann in dieser Situation nicht entscheiden welcher Nutzer die Eingabe tätigt, welche anschließend auch in der Datenbank gespeichert werden soll. Eine mögliche Lösung wäre ein Transaktionskonzept, bei dem Einträge, welche in Bearbeitung sind, gesperrt werden.


* Was ist abseits der reinen Programmierung für die Produktivsetzung des
entwickelten Services zu beachten? Nenne mindestens zwei Aspekte und
führe diese in ein paar Sätzen aus.

Antwort: TODO



