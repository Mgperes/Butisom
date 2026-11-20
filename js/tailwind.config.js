tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            serif: ['Playfair Display', 'Georgia', 'serif'],
          },
          colors: {
            apple: {
              bg: '#FFFFFF',
              surface: '#F5F5F7',
              surfaceHover: '#EBEBEF',
              text: '#1D1D1F',
              muted: '#6E6E73',
              border: 'rgba(0, 0, 0, 0.08)',
            },
            butisom: {
              red: '#E61919',
              green: '#007A1F',
              blue: '#141066',
            }
          },
          borderRadius: {
            'apple': '24px',
            'apple-lg': '32px',
          }
        }
      }
    }
