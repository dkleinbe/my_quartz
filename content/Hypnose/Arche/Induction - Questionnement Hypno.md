

## Questionnement hypno

### Objectif

Le but du questionnement hypnotique est de faire imaginer à votre sujet, étape après étape, l’entrée dans un état d’hypnose tout en lui faisant expérimenter ce qu’il propose.

Cette forme d’accompagnement permet d’éviter les résistances puisque c’est le sujet qui construit lui- même son avancée : tout vient de lui. Il ne peut alors qu’expérimenter ce qu’il propose et invente.

### Séquence

```plantuml-svg
@startuml
skinparam svgDimensionStyle false
skinparam BackgroundColor #FEFEFE

title __Questionnement hypno__

start

: **Intro de séance**
----
On va explorer la façon dont tu expérimenterais un état de conscience modifé, la transe
;

group **Questionnement**

: **Question inductive**
Si vous deviez expérimenter un état hypnotique, quelle serait, à votre avis,
la première sensation que vous pourriez ressentir en vous ?
;

repeat 
: **Valider et lier**;

if (choix) then  (1)
	:**Préciser le ressenti**
	Cela commencerait par une sensation de lourdeur ? 
	À quel endroit de votre corps est-ce que cela commencerait ? 
	Où est-ce que vous le ressentez en premier ?
	;
else (2)
	:**Chercher un conséquance**
	Cela commencerait par une sensation de lourdeur ? 
	Quand cette lourdeur apparaît, qu’est-ce qui en découle pour vous ? 
	Qu’est-ce que cela amène d’autre en vous ?
	;
endif

: **Ratifier et amplifier**
Connexion à la sensation
Qu'est ce que ça change ?
Qu'est ce que tu resents ?
S'interresser à la transe de l'autre, la questionner
;

repeat while (amplification)
end group

:**Retour au présent**;

stop

@enduml
```



