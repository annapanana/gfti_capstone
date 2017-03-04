'use strict';

var frameData = {
  1: [
    {
      id: 0,
      local_frame: "",
      template_name: ""
    },
    {
      id: 1,
      local_frame: 'classic-1',
      template_name: "classic/classic_01.html"

    },
    {
      id: 2,
      local_frame: 'classic-2',
      template_name: "classic/classic_02.html"
    },
    {
      id: 3,
      local_frame: 'classic-3',
      template_name: "classic/classic_03.html"
    },
    {
      id: 4,
      local_frame: 'classic-4',
      template_name: "classic/classic_04.html"
    },
    {
      id: 5,
      local_frame: 'classic-5',
      template_name: "classic/classic_05.html"
    },
    {
      id: 6,
      local_frame: 'classic-6',
      template_name: "classic/classic_06.html"
    }
  ],
  2: [
    {
      id: 0,
      local_frame: '',
      template_name: ''
    },
    {
      id: 1,
      local_frame: 'playful-1',
      template_name: 'playful/playful_01.html'
    },
    {
      id: 2,
      local_frame: 'playful-2',
      template_name: 'playful/playful_02.html'
    },
    {
      id: 3,
      local_frame: 'playful-3',
      template_name: 'playful/playful_03.html'
    },
    {
      id: 4,
      local_frame: 'playful-4',
      template_name: 'playful/playful_04.html'
    },
    {
      id: 5,
      local_frame: 'playful-5',
      template_name: 'playful/playful_05.html'
    }
  ],
  3: [
    {
      id: 0,
      local_frame: '',
      template_name: ''
    },
    {
      id: 1,
      local_frame: 'modern-1',
      template_name: 'modern/modern_01.html'
    },
    {
      id: 2,
      local_frame: 'modern-2',
      template_name: 'modern/modern_02.html'
    },
    {
      id: 3,
      local_frame: 'modern-3',
      template_name: 'modern/modern_03.html'
    },
    {
      id: 4,
      local_frame: 'modern-4',
      template_name: 'modern/modern_04.html'
    },
    {
      id: 5,
      local_frame: 'modern-5',
      template_name: 'modern/modern_05.html'
    },
    {
      id: 6,
      local_frame: 'modern-6',
      template_name: 'modern/modern_06.html'
    }
  ],
  4: [
    {
      id: 0,
      local_frame: "",
      template_name: ""
    },
    {
      id: 1,
      local_frame: 'wild-1',
      template_name: 'wild/wild_01.html'
    },
    {
      id: 2,
      local_frame: 'wild-2',
      template_name: 'wild/wild_02.html'
    },
    {
      id: 3,
      local_frame: 'wild-3',
      template_name: 'wild/wild_03.html'
    },
    {
      id: 4,
      local_frame: 'wild-4',
      template_name: 'wild/wild_04.html'
    },
    {
      id: 5,
      local_frame: 'wild-5',
      template_name: 'wild/wild_05.html'
    }
  ]
};
var filterData = [
  {
    id:0,
    name: "#noFilter",
    asset: "../../assets/filters/filter_none.svg"
  },
  {
    id:1,
    name: "#bw",
    asset: "../../assets/filters/filter_bw.svg"
  },
  {
    id:2,
    name: "#oldtimes",
    asset: "../../assets/filters/filter_old_times.svg"
  },
  {
    id:3,
    name: "#coldlife",
    asset: "../../assets/filters/filter_cold_life.svg"
  },
  {
    id:4,
    name: "#sepium",
    asset: "../../assets/filters/filter_sepium.svg"
  },
  {
    id:5,
    name: "#milk",
    asset: "../../assets/filters/filter_milk.svg"
  },
  {
    id:6,
    name: "#contrast",
    asset: "../../assets/filters/filter_dark.svg"
  },
  {
    id:7,
    name: "#add-saturation",
    asset: "../../assets/filters/filter_bright.svg",
  },
  {
    id:8,
    name: "#purple",
    asset: "../../assets/filters/filter_purple.svg"
  },
  {
    id:9,
    name: "#yellow",
    asset: "../../assets/filters/filter_yellow.svg"
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
