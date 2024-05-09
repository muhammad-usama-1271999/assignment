//question40: album: create objects for music albums.



function make_album(artist:string, title: string, tracks?:number):any{
    let album : {
        artist:string,
        title : string,
        tracks? : number,
    }={
        artist : artist,
        title : title,
    }
    if(tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("artist one", "the first album"));
console.log(make_album("artist two", "the second album", 5));
console.log(make_album("artist three", "the third album"));