'use strict';

var themeData = {
  1: [
    {
      id: 0,
      frames: [""]
    },
    {
      id: 1,
      frames: ["https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_01_exports/frame_classic_01_01.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_01_exports/frame_classic_01_02.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_01_exports/frame_classic_01_03.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_01_exports/frame_classic_01_04.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_01_exports/frame_classic_01_05.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_01_exports/frame_classic_01_06.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_01_exports/frame_classic_01_07.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_01_exports/frame_classic_01_08.svg"]
    },
    {
      id: 2,
      frames: ["https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_02_exports/frame_classic_02_01.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_02_exports/frame_classic_02_02.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_02_exports/frame_classic_02_03.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_02_exports/frame_classic_02_04.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_02_exports/frame_classic_02_05.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_02_exports/frame_classic_02_06.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_02_exports/frame_classic_02_07.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_02_exports/frame_classic_02_08.svg"]
    },
    {
      id: 3,
      frames: ["https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_03_exports/frame_classic_03_01.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_03_exports/frame_classic_03_02.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_03_exports/frame_classic_03_03.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_03_exports/frame_classic_03_04.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_03_exports/frame_classic_03_05.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_03_exports/frame_classic_03_06.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_03_exports/frame_classic_03_07.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_03_exports/frame_classic_03_08.svg"]
    },
    {
      id: 4,
      frames: ["https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_04_exports/frame_classic_04_01.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_04_exports/frame_classic_04_02.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_04_exports/frame_classic_04_03.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_04_exports/frame_classic_04_04.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_04_exports/frame_classic_04_05.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_04_exports/frame_classic_04_06.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_04_exports/frame_classic_04_07.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_04_exports/frame_classic_04_08.svg"]
    },
    {
      id: 5,
      frames: ["https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_05_exports/frame_classic_05_01.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_05_exports/frame_classic_05_02.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_05_exports/frame_classic_05_03.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_05_exports/frame_classic_05_04.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_05_exports/frame_classic_05_05.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_05_exports/frame_classic_05_06.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_05_exports/frame_classic_05_07.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_05_exports/frame_classic_05_08.svg"]
    },
    {
      id: 6,
      frames: ["https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_06_exports/frame_classic_06_01.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_06_exports/frame_classic_06_02.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_06_exports/frame_classic_06_03.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_06_exports/frame_classic_06_04.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_06_exports/frame_classic_06_05.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_06_exports/frame_classic_06_06.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_06_exports/frame_classic_06_07.svg", "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_06_exports/frame_classic_06_08.svg"]
    }
  ],
  2: [
    {
      id: 0,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 1,
      frame: "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/frame_playful_01.svg",
      asset_name: "pattern.svg"
    },
    {
      id: 2,
      frame: "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/frame_playful_02.svg",
      asset_name: "pattern.svg"
    },
    {
      id: 3,
      frame: "	https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/frame_playful_03.svg",
      asset_name: "pattern.svg"
    },
    {
      id: 4,
      frame: "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/frame_playful-4.svg",
      asset_name: "pattern.svg"
    },
    {
      id: 5,
      frame: "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/frame_playful_05.svg",
      asset_name: "pattern.svg"
    },
    {
      id: 6,
      frame: "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/frame_playful_06.svg",
      asset_name: "pattern.svg"
    }
  ],
  3: [
    {
      id: 0,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 1,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 2,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 3,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 4,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 5,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 6,
      frame: "",
      asset_name: "pattern.svg"
    }
  ],
  4: [
    {
      id: 0,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 1,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 2,
      frame: "assets/frames/wild/frame_wild_01.svg",
      asset_name: "pattern.svg"
    },
    {
      id: 3,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 4,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 5,
      frame: "",
      asset_name: "pattern.svg"
    },
    {
      id: 6,
      frame: "",
      asset_name: "pattern.svg"
    }
  ]

};
var filterData = [
  {
    id:0,
    name: "#noFilter",
    asset_name: "color.svg"
  },
  {
    id:1,
    name: "#pictureFilter",
    asset_name: "color.svg"
  },
  {
    id:2,
    name: "#noFilter",
    asset_name: "color.svg",
  },
  {
    id:3,
    name: "#noFilter",
    asset_name: "color.svg"
  },
  {
    id:4,
    name: "#noFilter",
    asset_name: "color.svg"
  },
  {
    id:5,
    name: "#noFilter",
    asset_name: "color.svg"
  }
];

var fontData = [];
var colorData = {
  1:[
    {id:0, c:"#F4987A"},
    {id:1, c:"#130E32"},
    {id:2, c:"#A9140A"},
    {id:3, c:"#B5A77F"},
    {id:4, c:"#64CC9E"},
    {id:5, c:"#0A9796"},
    {id:6, c:"#FFF"},
    {id:7, c:"#000"}],
  2:[],
  3:[
    {id:0, c:"#EDE5D0"},
    {id:1, c:"#224567"},
    {id:2, c:"#BAE4E4"},
    {id:3, c:"#B0CE9B"},
    {id:4, c:"#435F2E"},
    {id:5, c:"#332926"},
    {id:6, c:"#FFF"},
    {id:7, c:"#000"}],
  4:[]
};
