# `TourAppTemplate`

`TourAppTemplate` is a sample app code template for a tour like app with React360.
There're also inline comments to guide how each part of the sample code works.
This Template includes:

- Basic UI and interaction and Animation
- Loading Data via network
- Display 360 scene and hotspots
  This sample is designed for use in Facebook Instant Games using the [Instant Games SDK](https://developers.facebook.com/docs/games/instant-games)."

`TourAppTemplate` provide two example ways to place hotspots, which you can switch by setting
`useDynamicSurface` to true/false in `index.html`

1. Use dynamic surface: (`useDynamicSurface = true`):
   - This is recommended for most case, it has less limitation and allow you to place hotspots on any position(e.g. on the top or bottom). From performance wise, less than 8 hotspots per scene should works fine on mobile.
   - Each hotspot will be rendered on a different surface, and surface will be place on the right position dynamically by the hotspot setting.
   - You don't need to care about the creating, destroying, placing the surface. TourHotspot uses a custom native view "WorkInProgressSurface", which allow you to create and rotate a surface from react side by using this view.
   - "RCTWorkInProgressSurface" provides a custom native view to create a surface and place it in 3D space from react side.
2. Use one cylinder surface: (`useDynamicSurface = false`)
   - If all of you hotspots are in the place that a cylinder surface can cover, and you want simpler layout logic of hotspots that just maps position from 2D space of cylinder layer to the world. You can try this way.
   - It has two limitation: 1. You can't place a hotspot outside of the edge of the cylinder surface, otherwise it will be cropped. 2. There's an edge of cylinder surface on the back, if a hotspot is placed across the edge, it will also get cropped. (This template solves this by placing tooltip of a hotspot on the left if it's close to right edge).
   - It uses the translation on X direction on cylinder layer space to map hotspots' rotation to 3D space.
   - If you want to go with this way, you can remove the `RCTWorkInProgressSurface` and `WorkInProgressSurface` related codes.

Self-notes:
Templates for static-assets .json navigating file

"soundEffects": {
"navButton": {
"onEnter": {
"uri": "switch-flip.wav",
"attributionUri": "https://www.freesound.org/people/ianstargem/sounds/278205/"
},
"onClick": {
"uri": "menu-click.wav",
"attributionUri": "https://www.freesound.org/people/fins/sounds/146721/"
}
},
"infoButton": {
"onEnter": {
"uri": "switch-flip.wav",
"attributionUri": "https://www.freesound.org/people/ianstargem/sounds/278205/"
}
},
"ambient": {
"uri": "cafe.wav",
"attributionUri": "https://www.freesound.org/people/PapercutterJohn/sounds/322031/",
"loop": true,
"volume": 0.50
}
},
      {
      "type": "panelimage",
      "rotationY": 140,
      "width": 256,
      "height": 256,
      "source": "old-fashioned.jpg",
      "text": "Bar open until midnight M-F and 2:00 a.m. weekends.",
      "attribution": "Photo by Will Shenton",
      "attributionUri": "https://commons.wikimedia.org/wiki/File:The_Young_Laddie_Cocktail.jpg"
      },
      {
      "type": "textblock",
      "title": "The Chester",
      "text": "An American restaurant, bar, and private event space located in The Gansevoort Hotel in New York City, The Chester is designed to bring guests together at any time of day. It features a vibrant bar scene and a lively dining ara, as well as an exclusive boutique nightclub and outdoor beirgarten.",
      "attribution": "360 Photos courtesy of Oyster.com, text from TheChester.com",
      "rotationY": 0,
      "width": 300,
      "height": 300
      }
