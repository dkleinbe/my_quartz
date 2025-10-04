---
{"publish":true,"created":"2025.09.22 19:56","modified":"2025.09.30 18:11","tags":["hypnose","induction"],"cssclasses":""}
---


# Inductions

```plantuml-svg
skinparam svgDimensionStyle false

!theme spacelab
left to right direction

@startuml


state "Induction" as IND {
  state "Phase I : Préparation" as PREP
  state "Phase II : Début d'induction" as START
  state "Phase III : Amplification" as AMP
  PREP : Observation
  PREP : Questionnement
  PREP : Synchronisation
 
  START : Boucle 1
  START : Boucle 2
  
  AMP : [[Ph%C3%A9nom%C3%A8nes%20Hypnotiques {Phénomènes Hypnotiques} Phénomènes Hypnotiques]]
  
  PREP --> START
  START --> AMP
    
}




@enduml


```

## Phase I - préparation

- [[Hypnose/Discours pré-hypnothique]]
- [[Hypnose/Chemins hypnotiques]]

## Phase II - début d'induction

## Phase III - amplification

## Les inductions

- [[Hypnose/Induction - Tests Hypnotiques\|Tests Hypnotiques]]
- [[Hypnose/Induction - Questionnement Hypnotique\|Questionnement Hypnotiques]]
- Souvenir hypnotique
- Vision périphérique
- Spirale sensorielle
- Contraction/Décontraction
- Association/Dissociation
- Saturation
- Confusion
- ...
