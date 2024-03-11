# Music Player React App
This is a React application that allows users to upload audio files (e.g., mp3) and create a playlist. Users can play any file from the playlist, and the playback will continue to the next file automatically upon completion. The application also remembers the last playing audio file and continues playing from the last position when the page is reloaded.

# Features Implemented:
Upload Audio Files: Users can upload audio files using the built-in file input field.

Store Audio Files: Audio files are stored locally using built-in Browser APIs.

Playlist View: Displays a list of uploaded audio files as a playlist.

Now Playing View: Shows the currently playing audio file with standard HTML audio player controls.

Playback Management: Users can play any file from the playlist, and the playback will automatically continue to the next file upon completion.

Persistent Playback: The application remembers the last playing audio file and continues playing from the last position when the page is reloaded.

# Technologies Used:
React.js: Frontend library for building user interfaces.
HTML5: Used for structuring the web pages and incorporating the standard HTML audio player.
CSS: Styling the components and layout of the application.
Browser API - IndexDB: Utilized for storing audio files locally and managing playback.

# Usage:
Upload Audio Files:

Click on the "Upload" button to select audio files from your local machine.
Supported file formats: mp3.
Play Audio Files:

Click on any audio file from the playlist to start playback.
The audio player will display the currently playing audio file along with standard playback controls (Play, Pause, Seek).
Automatic Playback:

After the current audio file finishes playing, the playback will automatically continue to the next file in the playlist.
Persistent Playback:

When the page is reloaded, the application will load the last playing audio file and resume playback from the last position.
