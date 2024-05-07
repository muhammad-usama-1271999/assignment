function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("artist one", "the first album"));
console.log(make_album("artist two", "the second album", 5));
console.log(make_album("artist three", "the third album"));
export {};
