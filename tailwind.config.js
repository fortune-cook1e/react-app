/** @type {import('tailwindcss').Config} */

// https://www.tailwindcss.cn/docs
module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.ts'],
  content: [],

  theme: {
    // 如果是直接定义在 theme 中 那么就会影响全局
    // colors:{},
    // fontFamily:{}

    // 扩展
    extend: {
      // 扩展颜色
      // 例如 text-primary-light
      colors: {
        primary: {
          light: 'rgb(255, 246, 240)',
          DEFAULT: '#f65c2c',
          dark: ''
        },
        error: {
          DEFAULT: '#f65c2c'
        },
        bgGray: {
          DEFAULT: '#f0f2f5'
        },
        tableHeader: {
          DEFAULT: 'rgba(0, 0, 0, 0.02)'
        },
        borderColor: {
          light: 'rgba(240, 240, 240, 1)',
          DEFAULT: '#D9D9D9'
        }
      },
      space: {
        'px-5': '5px'
      },
      // 自定义动画
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(300px)' }
        }
      },
      animation: {
        move: 'move 2s ease-in-out infinite'
      }
    }
  },

  // variants 控制是否为某个插件开启 xx 功能
  // 比如：给 padding 增加 hover功能
  variants: {
    extend: {}
  },
  plugins: []
}
