

// renderer used to setup the symbolizaton of the housing layers
dPixelSize = "6px"
dOutlineWidth = 1
transparency = 1
PtOutlineColor = [40,40,40]


const countyRenderer = {
    type: "unique-value",
          legendOptions: {
              title: "County"
          },
          field: "MPO",
          uniqueValueInfos: [{
                  value: "WFRC",
                  label: "WFRC",
                  symbol: {
                      type: "simple-fill",
                      color: null,
                      outline: {
                        color: [222,45,38, 1],
                        width: 2
                    }
                  }

            },{
                  value: "WFRC-Box Elder",
                  label: "WFRC-Box Elder",
                  symbol: {
                      type: "simple-fill",
                      color: null,
                      outline: {
                        color: [0,0,0, .75],
                        width: 1
                    }
                  }
            },{
                  value: "MAG",
                  label: "MAG",
                  symbol: {
                      type: "simple-fill",
                      color: null,
                      outline: {
                        color: [0,0,0, .75],
                        width: 1
                    }
                  }
            }]  
    };

const cityRenderer = {
        type: "unique-value",
              legendOptions: {
                  title: "City"
              },
              field: "MPO",
              uniqueValueInfos: [{
                      value: "WFRC",
                      label: "WFRC",
                      symbol: {
                          type: "simple-fill",
                          color: null,
                          outline: {
                            color: [222,45,38, 1],
                            width: 2
                        }
                      }
                },{
                      value: "WFRC-Box Elder",
                      label: "WFRC-Box Elder",
                      symbol: {
                          type: "simple-fill",
                          color: null,
                          outline: {
                            color: [0,0,255, .5],
                            width: 1
                        }
                      }
                },{
                      value: "MAG",
                      label: "MAG",
                      symbol: {
                          type: "simple-fill",
                          color: null,
                          outline: {
                            color: [0,0,255, .5],
                            width: 1
                        }
                      }
                }]  
        };
const centerRenderer = {
    type: "unique-value",
            legendOptions: {
                title: "City"
            },
            field: "Area",
            uniqueValueInfos: [{
                    value: "WFRC",
                    label: "WFRC",
                    symbol: {
                        type: "simple-fill",
                        color: null,
                        outline: {
                        color: [222,45,38, 1],
                        width: 3
                    }
                    }
            },{
                    value: "WFRC-Box Elder",
                    label: "WFRC-Box Elder",
                    symbol: {
                        type: "simple-fill",
                        color: null,
                        outline: {
                        color: [128,0,0, 1],
                        width: 1
                    }
                    }
            },{
                    value: "MAG",
                    label: "MAG",
                    symbol: {
                        type: "simple-fill",
                        color: null,
                        outline: {
                        color: [128,0,0, 1],
                        width: 1
                    }
                    }
            }]  
    };


  const ptRendererType = {
          type: "unique-value",
          legendOptions: {
              title: "Housing Type"
          },
          field: "SUBTYPE",
          uniqueValueInfos: [{
              value: "single_family",
              label: "Single Family",
              symbol: {
                type: "simple-marker",
                color: [250, 236, 167, transparency], // [R,G,B, Transparency]
                size: dPixelSize,
                outline: {
                  color: PtOutlineColor,
                  width: dOutlineWidth
              }
            }
          }, {
              value: "duplex",
              label: "Duplex",
              symbol: {
                  type: "simple-marker",
                  color: [252, 146, 31, transparency],
                  size: dPixelSize,
                  outline: {
                    color: PtOutlineColor,
                    width: dOutlineWidth
                }
              }
          }, {
              value: "single_family_adu",
              label: "Single Family ADU",
              symbol: {
                  type: "simple-marker",
                  color: [230, 0, 73, transparency],
                  size: dPixelSize,
                  outline: {
                    color: PtOutlineColor,
                    width: dOutlineWidth
                }
              }
          }, {
              value: "townhome",
              label: "Townhome",
              symbol: {
                  type: "simple-marker",
                  color: [40, 200, 48, transparency],
                  size: dPixelSize,
                  outline: {
                    color: PtOutlineColor,
                    width: dOutlineWidth
                }
              }
          }, {
              value: "condo",
              label: "Condo",
              symbol: {
                  type: "simple-marker",
                  color: [158, 85, 156, transparency],
                  size: dPixelSize,
                  outline: {
                    color: PtOutlineColor,
                    width: dOutlineWidth
                }
              }
          }, {
              value: "mobile_home_park",
              label: "Mobile Home Park",
              symbol: {
                  type: "simple-marker",
                  color: [91, 73, 196, transparency],
                  size: dPixelSize,
                  outline: {
                    color: PtOutlineColor,
                    width: dOutlineWidth
                }
              }
          }, {
              value: 'mixed th/single_family',
              label: "Townhome/Single Family",
              symbol: {
                  type: "simple-marker",
                  color: [30, 133, 83, transparency],
                  size: dPixelSize,
                  outline: {
                    color: PtOutlineColor,
                    width: dOutlineWidth
                }
              }
          }, {
              value: "apartment",
              label: "Apartment",
              symbol: {
                  type: "simple-marker",
                  color: [20, 158, 206, transparency],
                  size: dPixelSize,
                  outline: {
                    color: PtOutlineColor,
                    width: dOutlineWidth
                }
              }
          }]
        };

// renderer used to setup the symbolizaton of the housing layers
const parcelTransparency = .5;
const pclRendererType = {
            type: "unique-value",
            legendOptions: {
                title: "Housing Type"
            },
            field: "SUBTYPE",
            uniqueValueInfos: [{
                value: "single_family",
                label: "Single Family",
                symbol: {
                    type: "simple-fill",
                    color: [250, 236, 167, parcelTransparency], // [R,G,B, Transparency]
                    size: dPixelSize,
                    outline: {
                      color: PtOutlineColor,
                      width: dOutlineWidth
                    }
                }
            }, {
                value: "duplex",
                label: "Duplex",
                symbol: {
                    type: "simple-fill",
                    color: [252, 146, 31, parcelTransparency],
                    size: dPixelSize,
                    outline: {
                      color: PtOutlineColor,
                      width: dOutlineWidth
                    }
                }
            }, {
                value: "single_family_adu",
                label: "Single Family ADU",
                symbol: {
                    type: "simple-fill",
                    color: [230, 0, 73,parcelTransparency],
                    size: dPixelSize,
                    outline: {
                      color: PtOutlineColor,
                      width: dOutlineWidth
                    }
                }
            }, {
                value: "townhome",
                label: "Townhome",
                symbol: {
                    type: "simple-fill",
                    color: [40, 200, 48,parcelTransparency],
                    size: dPixelSize,
                    outline: {
                      color: PtOutlineColor,
                      width: dOutlineWidth
                    }
                }
            }, {
                value: "condo",
                label: "Condo",
                symbol: {
                    type: "simple-fill",
                    color: [158, 85, 156,parcelTransparency],
                    size: dPixelSize,
                    outline: {
                      color: PtOutlineColor,
                      width: dOutlineWidth
                    }
                }
            }, {
                value: "mobile_home_park",
                label: "Mobile Home Park",
                symbol: {
                    type: "simple-fill",
                    color: [91, 73, 196,parcelTransparency],
                    size: dPixelSize,
                    outline: {
                      color: PtOutlineColor,
                      width: dOutlineWidth
                    }
                }
            }, {
                value: 'mixed th/single_family',
                label: "Townhome/Single Family",
                symbol: {
                    type: "simple-fill",
                    color: [30, 133, 83,parcelTransparency],
                    size: dPixelSize,
                    outline: {
                      color: PtOutlineColor,
                      width: dOutlineWidth
                    }
                }
            }, {
                value: "apartment",
                label: "Apartment",
                symbol: {
                    type: "simple-fill",
                    color: [20, 158, 206,parcelTransparency],
                    size: dPixelSize,
                    outline: {
                      color: PtOutlineColor,
                      width: dOutlineWidth
                    }
                }
            }]
          };

// arcade functions used to modify text in the popup window
const arcadeExpressionInfos = [
    {
      name: "capitalize-subtype-arcade",
      title: "Subtype",
      expression: "Proper(Replace($feature.SUBTYPE, '_', ' '))"
    },
    {
      name: "format-type-arcade",
      title: "Type",
      expression: "Proper(Replace($feature.TYPE, '_', ' '))"
    },
    {
        name: "format-value-arcade",
        title: "Total Assessed Value",
        expression: 
        "'$'+ Text($feature.TOT_VALUE, '###,###')"
    }
  ];

const parcelPopupTemplate = {
    title: "{expression/capitalize-subtype-arcade} in {CITY}",
    content: [{
          type: "fields",
          fieldInfos: [
            {
              fieldName: "expression/format-type-arcade",
              // label: "Type"
            },
            {
              fieldName: "expression/capitalize-subtype-arcade",
            },
            {
              fieldName:'APX_BLT_YR',
              label: "Approximate Year Built"
            },
            {
              fieldName:"UNIT_COUNT",
              label: "Number of Units"
            },
            {
              fieldName:"TOT_BD_FT2",
              label: "Total Bldg Square Ft.",
              format: {
                digitSeparator: true, // Uses a comma separator in numbers >999
                places: 0 // Sets the number of decimal places to 0 and rounds up
              }
            },
            {
              fieldName:'ACRES',
              label: "Acres",
              format: {
                digitSeparator: true, // Uses a comma separator in numbers >999
                places: 1 // Sets the number of decimal places to 0 and rounds up
              }
            },
            {
              fieldName:"expression/format-value-arcade",
            },  
            {
              fieldName:"COUNTY",
              label: "County"
            },
            {
              fieldName:"CITY",
              label: "City"
            },
            {
              fieldName:"CENTER",
              label: "Center"
            },
            {
              fieldName:"CENTERTYPE",
              label: "Center Type"
            },
          ],
        }
      ],
      expressionInfos: arcadeExpressionInfos
    }

// renderer for DUA symbolization on points
const ptRendererDensity = {
  type: "class-breaks",
  field: "DUA",
  legendOptions: {
    title: "Land Use Density"
  },
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 1.0,
      label: "< 1 units / acre",
      symbol: {
        type: "simple-marker",
        color: [255, 255, 217,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        },
      },
    },
    {
      minValue: 1,
      maxValue: 2,
      symbol: {
        type: "simple-marker",
        color: [239, 249, 181,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
        
      },
      label: "1 - 2 units / acre"
    },
    {
      minValue: 2,
      maxValue: 3,
      symbol: {
        type: "simple-marker",
        color: [207, 236, 179,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "2 - 3 units / acre"
    },
    {
      minValue: 3,
      maxValue: 5,
      symbol: {
        type: "simple-marker",
        color: [151, 214, 185,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "3 - 5 units / acre"
    },
    {
      minValue: 5,
      maxValue: 7,
      symbol: {
        type: "simple-marker",
        color: [93, 192, 192,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "5 - 7 units / acre"
    },
    {
      minValue: 7,
      maxValue: 10,
      symbol: {
        type: "simple-marker",
        color: [49, 166, 194,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "7 - 10 units / acre"
    },
    {
      minValue: 10,
      maxValue: 20,
      symbol: {
        type: "simple-marker",
        color: [31, 128, 184,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "10 - 20 units / acre"
    },
    {
      minValue: 20,
      maxValue: 50,
      symbol: {
        type: "simple-marker",
        color: [35, 85, 164,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "20 - 50 units / acre"
    },
    {
      minValue: 50,
      maxValue: 100,
      symbol: {
        type: "simple-marker",
        color: [34, 49, 141,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "50 - 100 units / acre"
    },
    {
      minValue: 100,
      maxValue: Infinity,
      symbol: {
        type: "simple-marker",
        color: [8, 29, 88,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "> 100 units / acre"
    }
  ]
};

// renderer for DUA symbolization on points
const pclRendererDensity = {
  type: "class-breaks",
  field: "DUA",
  legendOptions: {
    title: "Land Use Density"
  },
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 1.0,
      label: "< 1 units / acre",
      symbol: {
        type: "simple-fill",
        color: [255, 255, 217,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        },
      },
    },
    {
      minValue: 1,
      maxValue: 2,
      symbol: {
        type: "simple-fill",
        color: [239, 249, 181,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
        
      },
      label: "1 - 2 units / acre"
    },
    {
      minValue: 2,
      maxValue: 3,
      symbol: {
        type: "simple-fill",
        color: [207, 236, 179,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "2 - 3 units / acre"
    },
    {
      minValue: 3,
      maxValue: 5,
      symbol: {
        type: "simple-fill",
        color: [151, 214, 185,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "3 - 5 units / acre"
    },
    {
      minValue: 5,
      maxValue: 7,
      symbol: {
        type: "simple-fill",
        color: [93, 192, 192,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "5 - 7 units / acre"
    },
    {
      minValue: 7,
      maxValue: 10,
      symbol: {
        type: "simple-fill",
        color: [49, 166, 194,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "7 - 10 units / acre"
    },
    {
      minValue: 10,
      maxValue: 20,
      symbol: {
        type: "simple-fill",
        color: [31, 128, 184,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "10 - 20 units / acre"
    },
    {
      minValue: 20,
      maxValue: 50,
      symbol: {
        type: "simple-fill",
        color: [35, 85, 164,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "20 - 50 units / acre"
    },
    {
      minValue: 50,
      maxValue: 100,
      symbol: {
        type: "simple-fill",
        color: [34, 49, 141,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "50 - 100 units / acre"
    },
    {
      minValue: 100,
      maxValue: Infinity,
      symbol: {
        type: "simple-fill",
        color: [8, 29, 88,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "> 100 units / acre"
    }
  ]
};

// renderer for Total Value symbolization on points
const ptRendererValue = {
  type:"class-breaks",
  // field: "TOT_VALUE",
  legendOptions: {
    title: "Assessed Value"
  },
  valueExpression: "( $feature.TOT_VALUE / $feature.ACRES )",
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 1200000,
      symbol: {
        type: "simple-marker",
        color: [240, 38, 28,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "< 1.2 M$ / acre"
    },
    {
      minValue: 1200000,
      maxValue: 1600000,
      symbol: {
        type: "simple-marker",
        color: [247, 120, 51,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "1.2 - 1.6 M$ / acre"
    },
    {
      minValue: 1600000,
      maxValue: 1900000,
      symbol: {
        type: "simple-marker",
        color: [248, 175, 78,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "1.6 - 1.9 M$ / acre"
    },
    {
      minValue: 1900000,
      maxValue: 2100000,
      symbol: {
        type: "simple-marker",
        color: [246, 227, 107,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "1.9 - 2.1 M$ / acre"
    },
    {
      minValue: 2100000,
      maxValue: 2400000,
      symbol: {
        type: "simple-marker",
        color: [222, 238, 137,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "2.1 - 2.4 M$ / acre"
    },
    {
      minValue: 2400000,
      maxValue: 2800000,
      symbol: {
        type: "simple-marker",
        color: [255, 227, 0,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "2.4 - 2.8 M$ / acre"
    },
    {
      minValue: 2800000,
      maxValue: 3500000,
      symbol: {
        type: "simple-marker",
        color: [134, 186, 189,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "2.8 - 3.5 M$ / acre"
    },
    {
      minValue: 3500000,
      maxValue: Infinity,
      symbol: {
        type: "simple-marker",
        color: [61, 161, 209,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "> 3.5 M$ / acre"
    },
  ]
};

// renderer for Total Value symbolization on points
const pclRendererValue = {
  type:"class-breaks",
  // field: "TOT_VALUE",
  legendOptions: {
    title: "Assessed Value"
  },
  valueExpression: "( $feature.TOT_VALUE / $feature.ACRES )",
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 1200000,
      symbol: {
        type: "simple-fill",
        color: [240, 38, 28,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "< 1.2 M$ / acre"
    },
    {
      minValue: 1200000,
      maxValue: 1600000,
      symbol: {
        type: "simple-fill",
        color: [247, 120, 51,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "1.2 - 1.6 M$ / acre"
    },
    {
      minValue: 1600000,
      maxValue: 1900000,
      symbol: {
        type: "simple-fill",
        color: [248, 175, 78,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "1.6 - 1.9 M$ / acre"
    },
    {
      minValue: 1900000,
      maxValue: 2100000,
      symbol: {
        type: "simple-fill",
        color: [246, 227, 107,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "1.9 - 2.1 M$ / acre"
    },
    {
      minValue: 2100000,
      maxValue: 2400000,
      symbol: {
        type: "simple-fill",
        color: [222, 238, 137,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "2.1 - 2.4 M$ / acre"
    },
    {
      minValue: 2400000,
      maxValue: 2800000,
      symbol: {
        type: "simple-fill",
        color: [255, 227, 0,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "2.4 - 2.8 M$ / acre"
    },
    {
      minValue: 2800000,
      maxValue: 3500000,
      symbol: {
        type: "simple-fill",
        color: [134, 186, 189,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "2.8 - 3.5 M$ / acre"
    },
    {
      minValue: 3500000,
      maxValue: Infinity,
      symbol: {
        type: "simple-fill",
        color: [61, 161, 209,transparency],
        size: dPixelSize,
        outline: {
          color: PtOutlineColor,
          width: dOutlineWidth
        }
      },
      label: "> 3.5 M$ / acre"
    },
  ]
};

const ptRendererBuiltDecade = {
  type: "unique-value",
  legendOptions: {
      title: "Built Decade"
  },
  field: "BLT_DECADE",
  uniqueValueGroups: [
    {
        classes: [{
          values: ["NA"],
          label: "NA",
          symbol: {
            type: "simple-marker",
            color: [0, 0, 0, transparency], // [R,G,B, Transparency]
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
          }
        }]
    },  
    {  
      classes: [{
        values: ["1840", "1850", "1860", "1870", "1880", "1890"],
        label: "1840-1890",
        symbol: {
            type: "simple-marker",
            color: [13, 8, 135, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["1900", "1910","1920", "1930", "1940", "1950"],
        label: "1900-1950",
        symbol: {
            type: "simple-marker",
            color: [77, 2, 162, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["1960"],
        label: "1960",
        symbol: {
            type: "simple-marker",
            color: [126, 3, 168, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["1970"],
        label: "1970",
        symbol: {
            type: "simple-marker",
            color: [170, 35, 150, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      
      classes: [{
        values: ["1980"],
        label: "1980",
        symbol: {
            type: "simple-marker",
            color: [204, 71, 121, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, {
      classes: [{
        values: ["1990"],
        label:"1990",
        symbol: {
            type: "simple-marker",
            color: [230, 108, 93, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      
      classes: [{
        values: ["2000"],
        label: "2000",
        symbol: {
            type: "simple-marker",
            color: [249, 149, 65, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["2010"],
        label: "2010",
        symbol: {
            type: "simple-marker",
            color: [254, 196, 40, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["2020"],
        label: "2020",
        symbol: {
            type: "simple-marker",
            // color: [241, 250, 34, transparency],
            color: [255, 255, 190, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }
  ]
};

const pclRendererBuiltDecade = {
  type: "unique-value",
  legendOptions: {
      title: "Built Decade"
  },
  field: "BLT_DECADE",
  uniqueValueGroups: [
    {
        classes: [{
          values: ["NA"],
          label: "NA",
          symbol: {
            type: "simple-fill",
            color: [0, 0, 0, transparency], // [R,G,B, Transparency]
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
          }
        }]
    },  
    {  
      classes: [{
        values: ["1840", "1850", "1860", "1870", "1880", "1890"],
        label: "1840-1890",
        symbol: {
            type: "simple-fill",
            color: [13, 8, 135, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["1900", "1910","1920", "1930", "1940", "1950"],
        label: "1900-1950",
        symbol: {
            type: "simple-fill",
            color: [77, 2, 162, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["1960"],
        label: "1960",
        symbol: {
            type: "simple-fill",
            color: [126, 3, 168, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["1970"],
        label: "1970",
        symbol: {
            type: "simple-fill",
            color: [170, 35, 150, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      
      classes: [{
        values: ["1980"],
        label: "1980",
        symbol: {
            type: "simple-fill",
            color: [204, 71, 121, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, {
      classes: [{
        values: ["1990"],
        label:"1990",
        symbol: {
            type: "simple-fill",
            color: [230, 108, 93, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      
      classes: [{
        values: ["2000"],
        label: "2000",
        symbol: {
            type: "simple-fill",
            color: [249, 149, 65, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["2010"],
        label: "2010",
        symbol: {
            type: "simple-fill",
            color: [254, 196, 40, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }, 
    {
      classes: [{
        values: ["2020"],
        label: "2020",
        symbol: {
            type: "simple-fill",
            // color: [241, 250, 34, transparency],
            color: [255, 255, 190, transparency],
            size: dPixelSize,
            outline: {
              color: PtOutlineColor,
              width: dOutlineWidth
            }
        }
      }]
    }
  ]
};
