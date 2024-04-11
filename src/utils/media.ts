interface Imedia {
  title: string;
  src: string;
  description: string;
  rowSpan: number;
  colSpan: number;
  position?: 'RIGHT' | 'LEFT';
}
/**
 * [
  //!'a-create-playlist.mp4',
  //!'a-delete-ss.mp4',
  //!'a-edit-playlist-aside.mp4',
  //!'a-move-dd.mp4',
  //!'a-new-section.mp4',
  //!'a-new-song-dd.mp4',
  //!'a-view-songs.mp4',
  //!'c-current-song.mp4',
  //!'c-pp.mp4',
  //!'c-shorcuts.mp4',
  //!'c-speed.mp4',
  //!'c-threate-fs.mp4',
  //!'h-dark-light.mp4',
  //!'h-en-es.mp4',
  //!'h-import-youtube.mp4',
  //!'o-export-config.mp4',
  //!'o-import-config.mp4',
  //!'p-edit-playlist.mp4',
  //!'p-enter-playlist.mp4',
  //!'p-move-dd.mp4',
  //!'p-new-song-ply-dd.mp4',
  //!'p-reproduce-by-dd.mp4',
  //!'p-search.mp4',
  //!'p-view-playlist.mp4',
  //!'update.mp4'
]
 */
export const media: Imedia[] = [
  {
    "title": "Reproduce by Drag and Drop",
    "src": "p-reproduce-by-dd.mp4",
    "description": "Reproduce songs by Drag and Drop and add them to the queue",
    "rowSpan": 1,
    "colSpan": 2,
  },
  {
    "title": "Create new Playlists",
    "src": "a-create-playlist.mp4",
    "description": "Create new playlists to add new songs to them",
    "rowSpan": 1,
    "colSpan": 1
  },
  {
    title: "View songs in playlist",
    src: "a-view-songs.mp4",
    description: "View playlists songs in each playlist to see what songs are in them and play them",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    title: "Edit order playlists",
    src: "a-move-dd.mp4",
    description: "Edit the order of the playlists by Drag and Drop",
    rowSpan: 1,
    colSpan: 1,
  },
  
  {
    title: "Add new songs by Drag and Drop",
    src: "a-new-song-dd.mp4",
    description: "Add new songs to the playlist by Drag and Drop",
    rowSpan: 1,
    colSpan: 2,
  },
  {
    title: "New Section",
    src: "a-new-section.mp4",
    description: "Create new sections to organize your playlists",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    title: "Delete playlists and Section",
    src: "a-delete-ss.mp4",
    description: "Delete playlists and sections to keep your library organized",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    title: "Edit playlists",
    src: "a-edit-playlist-aside.mp4",
    description: "Edit playlists to change their name",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    title: "View playlists",
    src: "p-view-playlist.mp4",
    description: "View all your playlists to see what songs are in them and play them",
    rowSpan: 1,
    colSpan: 2,
  },
  {
    title: "Enter playlist",
    src: "p-enter-playlist.mp4",
    description: "Enter a playlist to see the songs in it",
    rowSpan: 1,
    colSpan: 2,
  },
  {
    title: "Edit playlist",
    src: "p-edit-playlist.mp4",
    description: "Edit the name, image, color and section of the playlist",
    rowSpan: 1,
    colSpan: 2,
  },
  {
    title: "Search songs in playlist",
    src: "p-search.mp4",
    description: "Search songs in the playlist to find them quickly",
    rowSpan: 1,
    colSpan: 2,
  },
  {
    title: "New songs by Drag and Drop",
    src: "p-new-song-ply-dd.mp4",
    description: "Add new songs to the playlist by Drag and Drop",
    rowSpan: 1,
    colSpan: 2,
  },
  {
    title: "Edit order songs in playlist",
    src: "p-move-dd.mp4",
    description: "Edit the order of the songs in the playlist by Drag and Drop",
    rowSpan: 1,
    colSpan: 2,
  },
  {
    title: "Dark and Light mode",
    src: "h-dark-light.mp4",
    description: "Change the theme of the application to dark or light mode",
    rowSpan: 1,
    colSpan: 1,
    position: 'RIGHT'
  },
  {
    title: "Switch between English and Spanish",
    src: "h-en-es.mp4",
    description: "Change the language of the application to English or Spanish",
    rowSpan: 1,
    colSpan: 1,
    position: 'RIGHT'
  },
  {
    title: "Import playlists from YouTube",
    src: "h-import-youtube.mp4",
    description: "Import playlists from YouTube to the application",
    rowSpan: 1,
    colSpan: 1,
    position: 'RIGHT'
  },
  {
    title: "Threate mode and Full Screen",
    src: "c-threate-fs.mp4",
    description: "Change the video to full screen or theater mode to watch it better",
    rowSpan: 1,
    colSpan: 2,
  },
  {
    title: "Mode Picture in Picture",
    src: "c-pp.mp4",
    description: "Activate the Picture in Picture mode to watch videos while you do other things",
    rowSpan: 1,
    colSpan: 1,
    position: 'RIGHT'
  },
  
  {
    title: "Show position of the current song",
    src: "c-current-song.mp4",
    description: "Show the position of the current song in the playlist",
    rowSpan: 1,
    colSpan: 2,
  },
  {
    title: "Change playback speed",
    src: "c-speed.mp4",
    description: "Change the playback speed of the video to watch it faster or slower",
    rowSpan: 1,
    colSpan: 1,
    position: 'RIGHT'
  },
  {
    title: "Show shortcuts",
    src: "c-shorcuts.mp4",
    description: "Show the shortcuts to use the application faster",
    rowSpan: 1,
    colSpan: 1,
    position: 'RIGHT'
  },
  
  {
    title: "Export configuration with all your data",
    src: "o-export-config.mp4",
    description: "Export the configuration with all your data to use it in another device or to restore it",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    title: "Import configuration with all your data",
    src: "o-import-config.mp4",
    description: "Import the configuration with all your data to use it in another device or to restore it",
    rowSpan: 1,
    colSpan: 1,
  },
  {
    title: "Update the application",
    src: "update.mp4",
    description: "Update the application to get the latest features and improvements",
    rowSpan: 1,
    colSpan: 2,
  },
  
]