const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "You Raise Me Up",
        artist: 'Westlife',
        url: 'https://music.163.com/#/song?id=20707713',
        cover: 'http://p2.music.126.net/ffWmzD86V-IKPe0D1DNSsA==/18348650045094640.jpg?param=130y130',
      }
    ]
});