---
{"publish":true,"created":"2025.09.19 18:02","modified":"2025.09.30 18:14","tags":["hypnose"],"cssclasses":""}
---


# Séance type

```plantuml-svg
skinparam svgDimensionStyle false


!theme spacelab
'left to right direction

@startuml


state "Cadrage de la séance - 15' à30'" as CS {
    
  state "[[Cadrage {Cadrage} Le cadre]]" as CAD
  CAD : Façon de travailler
  CAD : Façon d’aborder le changement
  CAD : Déroulement de la séance d’hypnose
  
  state "[[D%C3%A9termination%20objectif {Détermination objectif} Détermination d'objectif]]" as DO
  DO : 1 - Etat présent
  DO : 2 - Etat désiré
  DO : 3 - Changements
  DO : 4 - Objectif de la scéance
  
  CAD -down-> DO
    
}


state "[[Inductions {Inductions} Inductions]] 15' à 20'" as IND {
  state "[[Discours%20pr%C3%A9-hypnothique {Discours pré-hypnothique} Discours pré-hypnothique]]" as DPH
}

state "[[Protocoles {Protocoles} Travail]] 10' à 20'" as WORK {
  
}

CS -right-> IND
IND -right-> WORK 

@enduml

```

- [[Hypnose/Cadrage]]
- [[Hypnose/Détermination objectif\|Détermination d'objectif (DO)]]
- [[Hypnose/Inductions]]
- [[Hypnose/Protocoles]]

