# f10k

f10k should become the answer to the 10k saving limit of Spotify. This web-based player
can be used to save tracks, artists and albums by saving the corresponding ids to its own storage.

## Current features

- Save tracks and artists
- View saved tracks and artists
- Track/artist lists pagination (also in search)
- Import saved tracks from your Spotify account
- Play tracks
- Next + previous song
- Current track information (track position, album, artist)
- Search tracks and artists

## Planned features

- Control other devices
- Play a list of all your saved tracks
- Play your saved tracks on shuffle
- Volume control
- Replacing pagination by virtual scrolling
- Play an album
- Export saved tracks to Spotify

## Running f10k

Up until now, there is no backend yet, so just run the regular commands for Angular: 
`npm install` and `npm run start`.

### Insanity prevention

To prevent yourself from going completely insane, open up Spotify on your development machine
and switch to that player. This will prevent from the music starting over again every time 
you make changes and the page reloads.
