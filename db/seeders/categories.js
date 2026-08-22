const { SONG_BOOKS, CATEGORIES } = require("../constants");

const categories = [
  // =========================================================
  // CHRISTIAN HYMN BOOK
  // =========================================================

  {
    id: CATEGORIES.CONGREGATIONAL_WORSHIP,
    name: "Congregational Worship",
    description: "Songs for congregational worship and corporate praise.",
    icon: "⛪",
  },

  {
    id: CATEGORIES.JESUS_CHRIST,
    name: "Jesus Christ",
    description:
      "Songs centered on the person, ministry, and glory of Jesus Christ.",
    icon: "✝️",
  },

  {
    id: CATEGORIES.LIFE_OF_CHRIST,
    name: "Life of Christ",
    description: "Songs reflecting on the life and ministry of Jesus Christ.",
    icon: "📖",
  },

  {
    id: CATEGORIES.DEATH_OF_CHRIST,
    name: "Death of Christ",
    description: "Songs reflecting on the suffering and death of Jesus Christ.",
    icon: "✝️",
  },

  {
    id: CATEGORIES.RESURRECTION,
    name: "Resurrection",
    description:
      "Songs celebrating the resurrection and victory of Jesus Christ.",
    icon: "🌅",
  },

  {
    id: CATEGORIES.SECOND_COMING,
    name: "Second Coming",
    description: "Songs about the return and second coming of Jesus Christ.",
    icon: "☁️",
  },

  {
    id: CATEGORIES.HOLY_SPIRIT,
    name: "Holy Spirit",
    description:
      "Songs about the presence, work, and guidance of the Holy Spirit.",
    icon: "🕊️",
  },

  {
    id: CATEGORIES.SALVATION,
    name: "Salvation",
    description:
      "Songs about salvation, redemption, and eternal life through Christ.",
    icon: "🕊️",
  },

  {
    id: CATEGORIES.GRACE,
    name: "Grace",
    description: "Songs celebrating God's grace, mercy, and forgiveness.",
    icon: "💝",
  },

  // =========================================================
  // BANGLA CHRISTIAN SONGS
  // =========================================================

  {
    id: CATEGORIES.FAITH,
    name: "Faith",
    description: "Songs about faith, trust, and dependence on God.",
    icon: "✝️",
  },

  {
    id: CATEGORIES.HOPE,
    name: "Hope",
    description: "Songs of hope, encouragement, and confidence in God.",
    icon: "🌅",
  },

  {
    id: CATEGORIES.CHRISTIAN_LIFE,
    name: "Christian Life",
    description: "Songs about daily Christian living and following Christ.",
    icon: "❤️",
  },

  {
    id: CATEGORIES.SERVICE,
    name: "Service",
    description: "Songs encouraging Christian service and dedication to God.",
    icon: "🤝",
  },

  {
    id: CATEGORIES.WITNESS,
    name: "Witness",
    description: "Songs about sharing faith and being a witness for Christ.",
    icon: "📢",
  },

  // =========================================================
  // BANGLA CHORUS SONGS
  // =========================================================

  {
    id: CATEGORIES.CHORUS,
    name: "Chorus",
    description:
      "Short, repetitive, and congregational Christian chorus songs.",
    icon: "🎶",
  },

  {
    id: CATEGORIES.PRAISE,
    name: "Praise",
    description: "Short songs focused on praising and celebrating God.",
    icon: "🙌",
  },

  {
    id: CATEGORIES.WORSHIP,
    name: "Worship",
    description: "Chorus songs for worship, adoration, and devotion.",
    icon: "🙏",
  },

  // =========================================================
  // NEW GENERATION SONGS
  // =========================================================

  {
    id: CATEGORIES.YOUTH,
    name: "Youth",
    description: "Songs intended for Christian youth and young people.",
    icon: "🧑‍🤝‍🧑",
  },

  {
    id: CATEGORIES.CONTEMPORARY,
    name: "Contemporary",
    description: "Modern Christian songs with contemporary musical styles.",
    icon: "🎤",
  },

  {
    id: CATEGORIES.MISSION,
    name: "Mission",
    description:
      "Songs inspiring believers to participate in Christian mission.",
    icon: "🌍",
  },

  {
    id: CATEGORIES.EVANGELISM,
    name: "Evangelism",
    description:
      "Songs focused on sharing the Gospel and reaching others for Christ.",
    icon: "📣",
  },

  // =========================================================
  // WORSHIP AND PRAISE
  // =========================================================

  {
    id: CATEGORIES.THANKSGIVING,
    name: "Thanksgiving",
    description: "Songs expressing gratitude and thanksgiving to God.",
    icon: "❤️",
  },

  // =========================================================
  // CHRISTMAS SONGS
  // =========================================================

  {
    id: CATEGORIES.CHRISTMAS,
    name: "Christmas",
    description: "Songs celebrating the birth of Jesus Christ.",
    icon: "🎄",
  },

  {
    id: CATEGORIES.ADVENT,
    name: "Advent",
    description:
      "Songs reflecting on the coming of Christ and the Advent season.",
    icon: "🕯️",
  },

  {
    id: CATEGORIES.BIRTH_OF_CHRIST,
    name: "Birth of Christ",
    description: "Songs about the birth and incarnation of Jesus Christ.",
    icon: "⭐",
  },

  // =========================================================
  // PRAYER AND DEVOTION
  // =========================================================

  {
    id: CATEGORIES.PRAYER,
    name: "Prayer",
    description: "Songs for personal and community prayer.",
    icon: "🙏",
  },

  {
    id: CATEGORIES.MORNING,
    name: "Morning",
    description: "Songs for morning devotion, prayer, and praise.",
    icon: "🌅",
  },

  {
    id: CATEGORIES.EVENING,
    name: "Evening",
    description: "Songs for evening devotion, reflection, and prayer.",
    icon: "🌙",
  },

  // =========================================================
  // CHURCH OF BANGLADESH HYMNS
  // =========================================================

  {
    id: CATEGORIES.CHURCH,
    name: "Church",
    description:
      "Songs celebrating the Church, Christian fellowship, and community.",
    icon: "⛪",
  },

  {
    id: CATEGORIES.COMMUNION,
    name: "Communion",
    description: "Songs for Holy Communion and remembrance of Christ.",
    icon: "🍞",
  },

  {
    id: CATEGORIES.BAPTISM,
    name: "Baptism",
    description:
      "Songs for baptism services and celebrations of new life in Christ.",
    icon: "💧",
  },

  {
    id: CATEGORIES.MARRIAGE,
    name: "Marriage",
    description: "Songs for Christian marriage and wedding services.",
    icon: "💍",
  },

  {
    id: CATEGORIES.FUNERAL,
    name: "Funeral",
    description: "Songs for funeral services, remembrance, comfort, and hope.",
    icon: "🕊️",
  },

  {
    id: CATEGORIES.FAREWELL,
    name: "Farewell",
    description:
      "Songs for farewell services, departures, and moments of transition.",
    icon: "👋",
  },

  // =========================================================
  // CHILDREN CHRISTIAN SONGS
  // =========================================================

  {
    id: CATEGORIES.CHILDREN,
    name: "Children",
    description:
      "Christian songs designed for children and children's worship.",
    icon: "👧",
  },
];

module.exports = categories;
