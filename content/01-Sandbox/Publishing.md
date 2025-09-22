---
{"publish":true,"title":"This is a title","created":"03.08.2025 - 18:12","modified":"03.08.2025 - 18:12","cssclasses":""}
---


# Publishing

## PLantUML test

[[Hypnose/Arche/Croyances limitantes]]

  ```plantuml-svg
skinparam svgDimensionStyle false

!theme spacelab
left to right direction

@startuml


state "[[git]] Cadrage de la scéance - 15' à30'" as CS {
  state "[[Network Manager]] Préparation" as PREP
  state "[[Network%20Manager]] Le cadre" as CAD
  state "Détermination d'objectif" as DO
  DO : 1 - Etat présent
  DO : 2 - Etat désiré
  DO : 3 - Changements
  DO : 4 - Objectif de la scéance
  
  PREP --> CAD
  CAD --> DO
    
}


state "Induction 15' à 20'" as IND {
  state "Discours Pré-Hypnotique" as DPH
}

state "Travail 10' à 20'" as WORK {
  
}

CS --> IND
IND --> WORK 

@enduml

```
 
---
## Excalidraw

### Applyed

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 137.45989990234375 83.34183664460497" filter="invert(93%) hue-rotate(180deg)" class="excalidraw-svg"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="137.45989990234375" height="83.34183664460497" fill="#ffffff"/><a href="Hypnose/Arche/Séance type"><g transform="translate(10 48.34183664460497) rotate(0 58.729949951171875 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Séance type</text></g></a><g transform="translate(41.48067819346514 10) rotate(0 40.509986877441406 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Hello 10 </text></g></svg>


