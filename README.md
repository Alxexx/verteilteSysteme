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

Antwort: 

Steakholder müssen vorbereitet sein

Die Steakholder (Nutzer, Betreuer, Administratoren), welche das System nutzen oder betreuen müssen auf die Produktivsetzung vorbereitet sein. Die Einführung sollte mit einiger Vorlaufzeit angekündigt und geplant werden. Eine überstürzte Einführung kann die Beteiligten überfordern. Die Beteiligten sollten wissen auf, welches System, mit welchen Anforderungen sie sich zukünftig einstellen müssen. Die Beteiligten können sich auf das entsprechende System vorbereiten und sich selbst über die neuen Einsatzmöglichkeiten bewusst werden. Schulungen für die einzelnen Betriebsbereiche sollten im Vorfeld geplant und vorbereitet werden. Diese sind wichtig um jeden Nutzer, aus jedem einzelnen Bereich, auf den entsprechenden Umgang mit der Software erlernen kann und die technischen Details kennt. Auch der Übergang von einem eventuellen Altsystem auf die Einführung muss mit den Beteiligten geplant werden. 



Prozesse müssen abgestimmt werden

Mit der neuen Software werden auch neue Prozesse eingeführt, welche aber noch nicht abgestimmt sind. Bei der Auswahl und der Einführung der Software ging es auch um Verbesserungen bei betrieblichen Prozessen. Das ist meist der Fall, wenn eine Unternehmenssoftware erstmalig eingeführt oder gewechselt wird. Manchmal sind dann die Verbesserungen in Abläufen, die mit der Softwareeinführung einhergehen, noch nicht praxisreif. Dann kann es vorkommen, dass die Mitarbeiter der Software die Schuld geben, obwohl eigentlich der Prozess als solches noch verbessert werden müsste. Die richtige Kommunikation und Abstimmung im Vorfeld können diesem Problem vorbeugen. Die Nutzer können im Vorfeld in den Planungsprozess einbezogen werden. Systemprozesse und die Prozesse innerhalb des Unternehmens sollten synchron verlaufen, um Abstimmungsprobleme zu vermeiden.




