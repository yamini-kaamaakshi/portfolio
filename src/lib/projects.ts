export const projects = [
    {
        id: "1",
        title: "Portfolio",
        description: "A fully responsive and optimized portfolio website built with Next.js 15 and Tailwind CSS. This project showcases my skills, featured projects, and contact information with a clean and modern UI. It includes animations, dark mode support, and SEO optimizations to ensure better visibility and user engagement.",
        problemStatement: "Many developers struggle with showcasing their skills and projects effectively in a structured and visually appealing manner. Traditional static portfolios often lack responsiveness, interactivity, and modern design principles.",
        solutionApproach: "Implemented Next.js for server-side rendering (SSR) and static site generation (SSG) to optimize performance. Used Tailwind CSS for a sleek and modern design with reusable components. Integrated Framer Motion for smooth animations, and added dark mode support for better accessibility. Ensured SEO best practices using metadata, structured data, and optimized images.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        images: ["/images/portfolio.jpg", "/images/about.jpg", "/images/projects.jpg", "/images/contact.jpg"],
        github: "https://github.com/yamini-kaamaakshi/portfolio.git",
    },
    {
        id: "2",
        title: "E-Commerce App",
        description: "A robust e-commerce platform developed using Next.js and MongoDB. It features a seamless checkout process using Stripe, user authentication with JWT, an admin dashboard for managing products, orders, and users, and a responsive design to enhance the shopping experience. The platform supports product filtering, search functionality, and user-friendly order tracking.",
        problemStatement: "Developing a scalable and user-friendly e-commerce platform that ensures secure transactions, seamless user experience, and efficient product management. Many small businesses lack a cost-effective, customized solution tailored to their needs.",
        solutionApproach: "Used Next.js for server-side rendering (SSR) and static generation (SSG) to enhance performance and scalability. Integrated MongoDB as a NoSQL database for efficient product and user data storage. Implemented user authentication with JWT and NextAuth for secure login and registration. Integrated Stripe for secure and smooth payment processing. Developed an admin dashboard for easy product, order, and user management, improving operational efficiency.",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS", "JWT", "Stripe"],
        images: ["/images/home.jpg", "/images/products.jpg", "/images/cart.jpg", "/images/orders.jpg"],
        github: "https://github.com/yamini-kaamaakshi/eCommerce-app-nextjs.git",
    },
    {
        id: "3",
        title: "Announcements",
        description: "An advanced dashboard feature that allows users to customize their layout and themes, providing more flexibility and personalization. Users can modify the look and feel of their dashboard by selecting different themes, adjusting layouts, and managing notifications, improving engagement and accessibility.",
        problemStatement: "Users needed the ability to personalize their dashboard layout and theme to better suit their preferences and workflow. Many dashboards provide limited customization, reducing user satisfaction and engagement.",
        solutionApproach: "Developed a theme and layout customization feature using Zustand for efficient state management. Implemented a flexible grid system to allow drag-and-drop customization of widgets and sections. Enabled theme persistence using local storage to ensure user preferences are saved across sessions. Enhanced the UI with Tailwind CSS for a visually appealing and responsive design.",
        technologies: ["React.js", "Tailwind CSS", "Zustand"],
        images: ["/images/announcements.jpg", "/images/announcement1.jpg"],
        github: "https://github.com/yourusername/feature-release.git",
    }
];
