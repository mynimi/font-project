# Wie Fourteen Dreams entstand
Hier eine ausführliche Beschreibung der Schritte, die ich gegangen bin um Fourteen Dreams zu erstellen.
Während des Prozesses habe ich auf Instagram Teile des Fortschritts gepostet. Alle diese Posts finden sich unter

<a href="https://www.instagram.com/explore/tags/createascriptfont/" class="btn">#createascriptfont</a>

## Schritt 0: Habe ich Zeit?
Einen Font zu erstellen ist ein wahnsinniger Zeitaufwand. In Fourteen Dreams stecken jetzt schon mehr als 50h, und das ist erst Version 1. Ein solches Projekt sollte also nur angegangen werden, wenn man Zeit dafür hat.

## Schritt 1: Was ist ein Font?
* Ein Font ist eine Sammlung von Glyphen (Zeichen).
* Die Zeichen müssen in Kombination miteinander immer funktionieren.
* Die Zeichen bestehen aus Vektoren

Ein Brush Lettering Font ist verbunden. Das heisst, dass Verbindungen ein grosses Thema sind. Das heisst auch, dass wir auf jeden Fall mehr Arbeit haben. Denn wenn zwei Buchstaben nicht miteinander funktionieren, müssen wir eine Ligatur oder Alternative Buchstaben verwenden.

## Schritt 2: Welche Programme benötigt man?
Ein Font lässt sich nicht einfach so erstellen. Man benötigt dazu ein Font-Programm.
Ich habe mich für [FontForge](https://fontforge.github.io) entschieden. Dieses Font-Programm ist kostenlos. Es ist nicht unbedingt wahnsinnig intuitiv und oft sucht man eine ganze Weile bis man seine Antworten findet, aber die Möglichkeiten sind bemerkenswert.

Da FontForge in erster Linie ein Font-Programm ist und nicht ganz so viel Möglichkeiten bei der Digitalisierung bietet wie ein reines Vektor-Programm, habe ich beschlossen die Vektoren in Adobe Illustrator zu erstellen. FontForge erlaubt es dann die SVG-Bilder zu importieren.

Nicht direkt ein Programm, aber ein Tool, welches unbedingt Teil des Workflows sein sollte ist [Git](https://git-scm.com/). Damit kann man die unterschiedlichen Versionen dokumentieren und hat ausserdem ein BackUp, falls das Programm beschliesst nach einem Absturz alles zu löschen.

Ich hatte anfangs ohne Git gearbeitet, doch dann trat eben dieser Das-Programm-Hat-Meine-Komplette-Schrift-Gelöscht-Fall auf und  von dort an, habe ich alles weitere mit Git gemacht. Glücklicherweise hatte ich die Schrift am Vortag einmal generiert und konnte somit alles wieder retten. Dennoch: Git ist bei der Font-Erstellung unser bester Freund.

![fontforge](/font-project/img/font/fontforge.png)
<span class="small">Fourteen Dreams in FontForge</span>

## Schritt 3: Schriftdesign
Hier macht man sich Gedanken, wie die Schrift aussehen soll. Ich habe mich hier für ein Tool entschieden, mit dem ich die Schrift zeichnen wollte, sowie meine Hilfslinien entworfen. Die Glyphen mussten alle innerhalb dieser Linien gezeichnet werden, damit sie in der Grösse (und der Liniendicke) gleich waren. Ich erstellte das Linientemplate in Adobe Illustrator und entschied mich für einen feinen Pentel Aquash Pinsel als Tool. Nachdem ich das iPad gekauft hatte, designte ich einen Procreate Pinsel, der diesem Pinsel gleich kam und erstellte einen Teil der Glyphen damit. Denn durch das digitale Lettering sparte ich mir den kompletten Scan-Prozess und verschwendete somit auch weniger Papier.

![draw](/font-project/img/font/draw.jpg)

## Schritt 4: Vektorisieren
Nachdem die Glyphen auf den Computer geladen waren, mithilfe eines Scanners oder der Apple iCloud, mussten diese Pixel-Bilder in Vektor-Bilder umgewandelt werden. Wie ich das gemacht habe, lässt sich im Digitalisieren-Bereich dieser Website finden.

![vector_b](/font-project/img/font/vector_b.png)

## Schritt 5: in FontForge einfügen
Als nächstes musste in FontForge ein neues Projekt erstellt werden und die Buchstaben eingefügt werden. Hier wurden dann auch grundlegende Sachen wie die Default-Abstände zum nächsten Buchstaben hin definiert.

![letter](/font-project/img/font/letter.png)

## Schritt 6: Ligaturen und Kontextbezogene Alternativen
Ich bin alphabetisch vorgegangen. Als es dann zu den mühsamen Buchstaben r und s kam, habe ich mich um Ligaturen und Alternativbuchstaben gekümmert.

Zuerst habe ich die Buchstaben analysiert. Ähnlich endende Buchstaben wie a, h, n, m etc. konnten mit dem identischen Alternativbuchstaben bedient werden. Es ging also darum diesen zu designen. In Fontforge hinzuzufügen und dann in FontForge einzuprogrammieren.

![context](/font-project/img/font/context.png)

## Schritt 7: Akzente
Fontforge hat ein automatisches Feature um Akzente zu generieren. So mussten diese nur leicht angepasst werden.

![accent](/font-project/img/font/accent.png)

## Schritt 8: Kerning
Im letzten Schritt geht es noch darum die Abstände zwischen bestimmten Buchstabengruppen noch einmal separat zu bearbeiten. Damit auch alle Verbindungen hübsch sind.

![kerning](/font-project/img/font/kern.png)

## Schritt 9: Generieren
Schrift Speichern. Als OpenType, damit alle Features, die mit Mühe einprogrammiert wurden auch funktionieren.

## Schritt 10: Champagner Trinken und Jubeln
Es. Ist. Geschafft.

!!!

![14dreams](/font-project/img/14dreams.jpg)
