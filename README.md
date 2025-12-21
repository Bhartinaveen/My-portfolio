# ⚡ Personal Portfolio

A modern, high-performance, and responsive personal portfolio website built with **React.js** and **Tailwind CSS**. This project showcases my skills, experience, and projects in a visually engaging way, featuring glassmorphism effects, smooth animations, and a clean, structured layout.

## 🚀 Features

- **Interactive UI**: Engaging user interface with custom animations and glassmorphism aesthetics.
- **Projects Showcase**: Detailed view of projects with descriptions, tech stacks, and direct links to GitHub repositories and live demos.
- **Experience Timeline**: A structured vertical timeline displaying professional experience, roles, and achievements.
- **Responsive Design**: Fully optimized for seamless experience across desktops, tablets, and mobile devices.
- **Contact Form**: Integrated with **EmailJS** for direct and secure communication.
- **Dynamic Content**: Modular component architecture making it easy to update projects, skills, and experience data.

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: React Parallax Tilt, React Typing Effect, CSS3 Transitions
- **Routing**: React Router DOM v7
- **Icons**: React Icons (Lucide, FontAwesome, etc.)
- **Notifications**: React Toastify for user feedback

## 📦 Installation & Setup

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhartinaveen/My-portfolio.git
   cd My-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will typically start at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── assets/         # Static assets (images, icons)
├── components/     # Reusable UI components
│   ├── Work/       # Projects section
│   ├── Experience/ # Experience timeline
│   ├── Skills/     # Skills display
│   ├── Navbar/     # Navigation bar
│   ├── Contact/    # Contact form
│   └── ...
├── App.jsx         # Main application layout
├── main.jsx        # Entry point
└── index.css       # Global styles & Tailwind configuration
```

## 📝 Customization

- **Update Projects**: Edit `src/components/Work/Work.jsx` to modify the `projects` array.
- **Update Experience**: Edit `src/components/Experience/Experience.jsx` to change the `experiences` data.
- **Update Colors**: Modify `tailwind.config.js` or `index.css` to change the color theme.

## 📄 License

This project is available for personal and educational use.

---
*Designed & Developed by [Your Name]*
