const { SONG_BOOKS, CATEGORIES } = require("../constants");

const songs = [
  // =========================================================
  // BOOK: CHRISTIAN HYMN BOOK
  // =========================================================

  {
    id: 1,
    songBookId: SONG_BOOKS.CHRISTIAN_HYMN_BOOK,
    categoryId: CATEGORIES.CONGREGATIONAL_WORSHIP,
    number: "001",
    title: "Come, Let Us Worship",
    author: "Unknown",
    language: "English",
    lyrics: `Come, let us worship the Lord today,
Come with our hearts and sing and pray.
Together we gather in His holy name,
Giving Him glory and endless praise.`,
  },

  {
    id: 2,
    songBookId: SONG_BOOKS.CHRISTIAN_HYMN_BOOK,
    categoryId: CATEGORIES.JESUS_CHRIST,
    number: "002",
    title: "Jesus, Our Lord",
    author: "Unknown",
    language: "English",
    lyrics: `Jesus, our Lord, our hope and King,
To You our hearts will ever sing.
Your love has saved us from our sin,
Your grace has made us whole again.`,
  },

  {
    id: 3,
    songBookId: SONG_BOOKS.CHRISTIAN_HYMN_BOOK,
    categoryId: CATEGORIES.LIFE_OF_CHRIST,
    number: "003",
    title: "Follow His Steps",
    author: "Unknown",
    language: "English",
    lyrics: `Follow the steps of Jesus our Lord,
Listen closely to His word.
Serve with love and walk in grace,
Seeking always His holy face.`,
  },

  {
    id: 4,
    songBookId: SONG_BOOKS.CHRISTIAN_HYMN_BOOK,
    categoryId: CATEGORIES.DEATH_OF_CHRIST,
    number: "004",
    title: "At the Cross",
    author: "Unknown",
    language: "English",
    lyrics: `At the cross we see His love,
Love that came from God above.
Jesus gave His life for me,
Through His sacrifice we are free.`,
  },

  {
    id: 5,
    songBookId: SONG_BOOKS.CHRISTIAN_HYMN_BOOK,
    categoryId: CATEGORIES.RESURRECTION,
    number: "005",
    title: "Christ Has Risen",
    author: "Unknown",
    language: "English",
    lyrics: `Christ has risen, death is gone,
Darkness fades before the dawn.
He is living, He is King,
Let the church His praises sing.`,
  },

  {
    id: 6,
    songBookId: SONG_BOOKS.CHRISTIAN_HYMN_BOOK,
    categoryId: CATEGORIES.SECOND_COMING,
    number: "006",
    title: "He Will Come Again",
    author: "Unknown",
    language: "English",
    lyrics: `He will come again in glory,
Every nation shall behold.
Keep your hearts prepared and faithful,
Trust the promise we were told.`,
  },

  {
    id: 7,
    songBookId: SONG_BOOKS.CHRISTIAN_HYMN_BOOK,
    categoryId: CATEGORIES.HOLY_SPIRIT,
    number: "007",
    title: "Spirit of God",
    author: "Unknown",
    language: "English",
    lyrics: `Spirit of God, come near,
Fill our hearts and calm our fear.
Guide us in the path of truth,
Give us strength and heavenly hope.`,
  },

  {
    id: 8,
    songBookId: SONG_BOOKS.CHRISTIAN_HYMN_BOOK,
    categoryId: CATEGORIES.SALVATION,
    number: "008",
    title: "Saved by Grace",
    author: "Unknown",
    language: "English",
    lyrics: `Saved by grace and washed clean,
Through the blood of Christ our King.
Now we walk in freedom's way,
Thanking God for every day.`,
  },

  {
    id: 9,
    songBookId: SONG_BOOKS.CHRISTIAN_HYMN_BOOK,
    categoryId: CATEGORIES.GRACE,
    number: "009",
    title: "Amazing Grace",
    author: "Traditional",
    language: "English",
    lyrics: `Amazing grace has found my heart,
God's mercy gives a brand new start.
His love has called me from the night,
And led me into saving light.`,
  },

  // =========================================================
  // BOOK: BANGLA CHRISTIAN SONGS
  // =========================================================

  {
    id: 10,
    songBookId: SONG_BOOKS.BANGLA_CHRISTIAN_SONGS,
    categoryId: CATEGORIES.FAITH,
    number: "001",
    title: "Walk by Faith",
    author: "Unknown",
    language: "English",
    lyrics: `Walk by faith and not by sight,
Trust the Lord through every night.
He will guide your path each day,
Follow Him and do not stray.`,
  },

  {
    id: 11,
    songBookId: SONG_BOOKS.BANGLA_CHRISTIAN_SONGS,
    categoryId: CATEGORIES.HOPE,
    number: "002",
    title: "Hope Will Rise",
    author: "Unknown",
    language: "English",
    lyrics: `Hope will rise with every dawn,
When the darkest night is gone.
Keep your eyes upon the light,
God will make the future bright.`,
  },

  {
    id: 12,
    songBookId: SONG_BOOKS.BANGLA_CHRISTIAN_SONGS,
    categoryId: CATEGORIES.CHRISTIAN_LIFE,
    number: "003",
    title: "A Life for Christ",
    author: "Unknown",
    language: "English",
    lyrics: `Every day I live for Christ,
Following His way of life.
Let my words and actions show,
That His love within me grows.`,
  },

  {
    id: 13,
    songBookId: SONG_BOOKS.BANGLA_CHRISTIAN_SONGS,
    categoryId: CATEGORIES.SERVICE,
    number: "004",
    title: "Here I Am",
    author: "Unknown",
    language: "English",
    lyrics: `Here I am, Lord, send me,
Use my hands to serve for Thee.
Give me courage, give me grace,
Let me serve in every place.`,
  },

  {
    id: 14,
    songBookId: SONG_BOOKS.BANGLA_CHRISTIAN_SONGS,
    categoryId: CATEGORIES.WITNESS,
    number: "005",
    title: "Tell the World",
    author: "Unknown",
    language: "English",
    lyrics: `Tell the world about His love,
Tell the story from above.
Jesus came to save the lost,
He has paid the greatest cost.`,
  },

  // =========================================================
  // BOOK: BANGLA CHORUS SONGS
  // =========================================================

  {
    id: 15,
    songBookId: SONG_BOOKS.BANGLA_CHORUS_SONGS,
    categoryId: CATEGORIES.CHORUS,
    number: "001",
    title: "Sing Hallelujah",
    author: "Unknown",
    language: "English",
    lyrics: `Sing Hallelujah, praise the Lord,
Sing together with one accord.
Lift your voice and sing His name,
Yesterday, today, the same.`,
  },

  {
    id: 16,
    songBookId: SONG_BOOKS.BANGLA_CHORUS_SONGS,
    categoryId: CATEGORIES.PRAISE,
    number: "002",
    title: "Praise the Lord",
    author: "Unknown",
    language: "English",
    lyrics: `Praise the Lord with all your heart,
Sing His glory from the start.
Lift your voice and sing today,
Praise the Lord in every way.`,
  },

  {
    id: 17,
    songBookId: SONG_BOOKS.BANGLA_CHORUS_SONGS,
    categoryId: CATEGORIES.WORSHIP,
    number: "003",
    title: "We Worship You",
    author: "Unknown",
    language: "English",
    lyrics: `We worship You, we honor You,
Our hearts belong to You.
Holy God, receive our praise,
We will serve You all our days.`,
  },

  // =========================================================
  // BOOK: NEW GENERATION SONGS
  // =========================================================

  {
    id: 18,
    songBookId: SONG_BOOKS.NEW_GENERATION_SONGS,
    categoryId: CATEGORIES.YOUTH,
    number: "001",
    title: "Young and Faithful",
    author: "Unknown",
    language: "English",
    lyrics: `Young and faithful, strong and true,
We will live our lives for You.
With our hearts and minds renewed,
We will follow Jesus through.`,
  },

  {
    id: 19,
    songBookId: SONG_BOOKS.NEW_GENERATION_SONGS,
    categoryId: CATEGORIES.CONTEMPORARY,
    number: "002",
    title: "You Are With Me",
    author: "Unknown",
    language: "English",
    lyrics: `You are with me every day,
You are near me when I pray.
Through the mountains, through the storm,
Your great love keeps me warm.`,
  },

  {
    id: 20,
    songBookId: SONG_BOOKS.NEW_GENERATION_SONGS,
    categoryId: CATEGORIES.MISSION,
    number: "003",
    title: "Send Us Out",
    author: "Unknown",
    language: "English",
    lyrics: `Send us out to serve Your name,
Share Your love and tell Your fame.
Across the nations, near and far,
Let us shine like morning stars.`,
  },

  {
    id: 21,
    songBookId: SONG_BOOKS.NEW_GENERATION_SONGS,
    categoryId: CATEGORIES.EVANGELISM,
    number: "004",
    title: "Share the Good News",
    author: "Unknown",
    language: "English",
    lyrics: `Share the good news everywhere,
Tell the world that Jesus cares.
There is hope for everyone,
Through the love of God's own Son.`,
  },

  // =========================================================
  // BOOK: WORSHIP AND PRAISE
  // =========================================================

  {
    id: 22,
    songBookId: SONG_BOOKS.WORSHIP_AND_PRAISE,
    categoryId: CATEGORIES.THANKSGIVING,
    number: "001",
    title: "Thank You Lord",
    author: "Unknown",
    language: "English",
    lyrics: `Thank You Lord for every day,
For Your love that lights our way.
For the blessings we receive,
Teach us always to believe.`,
  },

  // =========================================================
  // BOOK: CHRISTMAS SONGS
  // =========================================================

  {
    id: 23,
    songBookId: SONG_BOOKS.CHRISTMAS_SONGS,
    categoryId: CATEGORIES.CHRISTMAS,
    number: "001",
    title: "The King Is Born",
    author: "Unknown",
    language: "English",
    lyrics: `The King is born,
The Savior has come.
Heaven rejoices,
God's will is done.`,
  },

  {
    id: 24,
    songBookId: SONG_BOOKS.CHRISTMAS_SONGS,
    categoryId: CATEGORIES.ADVENT,
    number: "002",
    title: "Prepare the Way",
    author: "Unknown",
    language: "English",
    lyrics: `Prepare the way, the Savior comes,
The promised King has come.
Let every heart be ready now,
And praise the Holy One.`,
  },

  {
    id: 25,
    songBookId: SONG_BOOKS.CHRISTMAS_SONGS,
    categoryId: CATEGORIES.BIRTH_OF_CHRIST,
    number: "003",
    title: "Bethlehem's Child",
    author: "Unknown",
    language: "English",
    lyrics: `In Bethlehem a child was born,
The promised Savior came.
The angels sang across the night,
And glorified His name.`,
  },

  // =========================================================
  // BOOK: PRAYER AND DEVOTION
  // =========================================================

  {
    id: 26,
    songBookId: SONG_BOOKS.PRAYER_AND_DEVOTION,
    categoryId: CATEGORIES.PRAYER,
    number: "001",
    title: "Hear Our Prayer",
    author: "Unknown",
    language: "English",
    lyrics: `Hear our prayer, O Lord,
Listen to our cry.
Give us strength and courage,
Stay forever by our side.`,
  },

  {
    id: 27,
    songBookId: SONG_BOOKS.PRAYER_AND_DEVOTION,
    categoryId: CATEGORIES.MORNING,
    number: "002",
    title: "New Morning",
    author: "Unknown",
    language: "English",
    lyrics: `Every morning brings new grace,
Every day we seek His face.
Yesterday has gone away,
God will guide us through today.`,
  },

  {
    id: 28,
    songBookId: SONG_BOOKS.PRAYER_AND_DEVOTION,
    categoryId: CATEGORIES.EVENING,
    number: "003",
    title: "Evening Prayer",
    author: "Unknown",
    language: "English",
    lyrics: `As the evening shadows fall,
Lord, we hear Your gentle call.
Thank You for this peaceful day,
Keep us safely through the night.`,
  },

  // =========================================================
  // BOOK: CHURCH OF BANGLADESH HYMNS
  // =========================================================

  {
    id: 29,
    songBookId: SONG_BOOKS.CHURCH_OF_BANGLADESH_HYMNS,
    categoryId: CATEGORIES.CHURCH,
    number: "001",
    title: "One Church, One Lord",
    author: "Unknown",
    language: "English",
    lyrics: `One Church, one Lord, one faith,
One body gathered in His name.
Together we will serve and love,
Giving glory to our God above.`,
  },

  {
    id: 30,
    songBookId: SONG_BOOKS.CHURCH_OF_BANGLADESH_HYMNS,
    categoryId: CATEGORIES.COMMUNION,
    number: "002",
    title: "At the Table",
    author: "Unknown",
    language: "English",
    lyrics: `At the table we remember,
Jesus gave His life for all.
Bread and cup proclaim His mercy,
Through His grace we hear His call.`,
  },

  {
    id: 31,
    songBookId: SONG_BOOKS.CHURCH_OF_BANGLADESH_HYMNS,
    categoryId: CATEGORIES.BAPTISM,
    number: "003",
    title: "New Life in Christ",
    author: "Unknown",
    language: "English",
    lyrics: `New life in Christ, a life made new,
Walking in faith and trusting You.
Buried with Christ and raised to live,
By Your grace new hope You give.`,
  },

  {
    id: 32,
    songBookId: SONG_BOOKS.CHURCH_OF_BANGLADESH_HYMNS,
    categoryId: CATEGORIES.MARRIAGE,
    number: "004",
    title: "Bless This Union",
    author: "Unknown",
    language: "English",
    lyrics: `Bless this union, Lord above,
Fill this home with faithful love.
Guide their journey through the years,
Walk beside them through their joys and tears.`,
  },

  {
    id: 33,
    songBookId: SONG_BOOKS.CHURCH_OF_BANGLADESH_HYMNS,
    categoryId: CATEGORIES.FUNERAL,
    number: "005",
    title: "Rest in God's Care",
    author: "Unknown",
    language: "English",
    lyrics: `Rest in God's eternal care,
His loving presence will be there.
Though we mourn and say goodbye,
Hope remains beyond the sky.`,
  },

  {
    id: 34,
    songBookId: SONG_BOOKS.CHURCH_OF_BANGLADESH_HYMNS,
    categoryId: CATEGORIES.FAREWELL,
    number: "006",
    title: "Until We Meet Again",
    author: "Unknown",
    language: "English",
    lyrics: `Until we meet again,
May God's peace remain.
Wherever life may lead,
His grace will meet our need.`,
  },

  // =========================================================
  // BOOK: CHILDREN CHRISTIAN SONGS
  // =========================================================

  {
    id: 35,
    songBookId: SONG_BOOKS.CHILDREN_CHRISTIAN_SONGS,
    categoryId: CATEGORIES.CHILDREN,
    number: "001",
    title: "Jesus Loves Me",
    author: "Traditional",
    language: "English",
    lyrics: `Jesus loves me every day,
He is with me when I pray.
I will follow where He leads,
He will meet my every need.`,
  },
];

module.exports = songs;
