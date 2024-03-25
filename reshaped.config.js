const { generateThemeColors } = require('reshaped/themes');

const config = {
  themes: {
    orangeTheme: {
      color: {
        ...generateThemeColors({
          primary: '#ff4f04',
          critical: '#ff2732',
          positive: '#00ca78',
          neutral: '#dbd8d5'
        }),
        backgroundPage: { hex: "#f5f3ef" },
      },
      unit: {
        radiusSmall: {
          px: 5
        }
      },
      shadow: {
        overlay: [
          {
            offsetX: 0,
            offsetY: 1,
            blurRadius: 3,
            colorToken: 'black',
            opacity: 0.1
          }
        ]
      }
    }
  }
};

module.exports = config;
