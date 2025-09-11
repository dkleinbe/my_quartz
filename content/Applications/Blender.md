---
{"publish":true,"created":"22.06.2024 - 15:29","modified":"22.06.2024 - 15:29","tags":["blender"],"cssclasses":""}
---


# Blender

## flip normal

Go to Mesh > Normals > select Flip Normals to flip the selected face normals

## Clear parent and keep transformation

Alt+P 

## Full Course

source: [How to use Eevee - Full Blender Course - YouTube](https://www.youtube.com/watch?v=-gW6vk_OuNQ)

### Light bleed

- No paper thin geometry ever
	=> Solidify modifier

 - Shadow sample steps
![[Applications/attachements/Blender-1.png|Sampling|220]]

=> Increase number of steps

Related of the size of the light (Angle for Sun) ==limitation==

### Noise

- Increase samples globally, for all scene

![[Applications/attachements/Blender.png|Samples|260]]
  
- Increase samples only for shadows

![[Applications/attachements/Blender-2.png|Rays|250]]

Samples for shadows = nb Rays x nb Samples

### Reflexion

![[Applications/attachements/Blender-3.png|Raytracing|250]]

#### Probes

Source: [Probes](https://youtu.be/-gW6vk_OuNQ?t=887)


![[Applications/attachements/Blender-4.png|Probes|300]]

##### Plane

![[Applications/attachements/Blender-5.png]]

>[!warning]
>Position the plan correctly in Z (by default it is underneath the object)
> Select the probe and use Capture to test the position
>
>
> ![[Applications/attachements/Blender-6.png|Capture|220]]



