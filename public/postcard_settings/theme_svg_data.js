'use strict';

var frameData = {
  1: [
    {
      id: 0,
      local_frames: [""],
      frames: [""]
    },
    {
      id: 1,
      local_frames: [],
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_01_exports/frame_classic_01_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 2,
      local_frames: [],
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_02_exports/frame_classic_02_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 3,
      local_frames: [],
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_03_exports/frame_classic_03_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 4,
      local_frames: [],
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_04_exports/frame_classic_04_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 5,
      local_frames: [],
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_05_exports/frame_classic_05_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 6,
      local_frames: [],
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/classic/classic_06_exports/frame_classic_06_0${i}.svg`);
        }
        return frames;
      })()
    }
  ],
  2: [
    {
      id: 0,
      local_frames: [""],
      frames: [""]
    },
    {
      id: 1,
      local_frames: [],
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/playful_01_exports/frame_playful_01_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 2,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/playful_02_exports/frame_playful_02_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 3,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/playful_03_exports/frame_playful_03_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 4,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/playful_04_exports/frame_playful_04_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 5,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/playful_05_exports/frame_playful_05_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 6,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/playful_06_exports/frame_playful_06_0${i}.svg`);
        }
        return frames;
      })()
    }
  ],
  3: [
    {
      id: 0,
      frames: []
    },
    {
      id: 1,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/modern/modern_01_exports/frame_modern_01_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 2,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/modern/modern_02_exports/frame_modern_02_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 3,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/modern/modern_03_exports/frame_modern_03_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 4,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/modern/modern_04_exports/frame_modern_04_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 5,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/modern/modern_05_exports/frame_modern_05_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 6,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/modern/modern_06_exports/frame_modern_06_0${i}.svg`);
        }
        return frames;
      })()
    }
  ],
  4: [
    {
      id: 0,
      frames: [""]
    },
    {
      id: 1,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/wild/wild_01_exports/frame_wild_01_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 2,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/wild/wild_02_exports/frame_wild_02_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 3,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/wild/wild_03_exports/frame_wild_03_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 4,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/wild/wild_04_exports/frame_wild_04_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 5,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/wild/wild_05_exports/frame_wild_05_0${i}.svg`);
        }
        return frames;
      })()
    },
    {
      id: 6,
      frames: (function generateFrames() {
        let frames = [];
        for (var i = 1; i <= 8; i++) {
          frames.push(`https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/wild/wild_06_exports/frame_wild_06_0${i}.svg`);
        }
        return frames;
      })()
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
  2:[
    {id:0, c:"#FBFC01"},
    {id:1, c:"#FF7F1C"},
    {id:2, c:"#FF3A9E"},
    {id:3, c:"#50FC00"},
    {id:4, c:"#009AD8"},
    {id:5, c:"#BC3EFF"},
    {id:6, c:"#FFF"},
    {id:7, c:"#000"}],
  3:[
    {id:0, c:"#F9C5C5"},
    {id:1, c:"#485967"},
    {id:2, c:"#A0C1BB"},
    {id:3, c:"#A898B7"},
    {id:4, c:"#F2C66D"},
    {id:5, c:"#F07463"},
    {id:6, c:"#FFF"},
    {id:7, c:"#000"}],
  4:[
    {id:0, c:"#C7BAA7"},
    {id:1, c:"#B3DDB9"},
    {id:2, c:"#607563"},
    {id:3, c:"#8BA7AA"},
    {id:4, c:"#DD5E27"},
    {id:5, c:"#FEDF72"},
    {id:6, c:"#FFF"},
    {id:7, c:"#000"}],
};
