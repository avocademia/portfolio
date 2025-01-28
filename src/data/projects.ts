export const projects = [
    {
        name: 'Saint Safaris',
        role: 'Lead Developer',
        description: `A comprehensive user friendly web application for Saint Travel & Safaris, 
                      combining a React frontend with a Strapi backend to create a seamless 
                      experience for both staff and users. The application enables the company’s 
                      staff to manage and access data effortlessly without requiring any coding 
                      skills, thanks to a user-friendly strapi interface and intuitive forms that 
                      dynamically responds to user inputs sending submitted forms to the company emails. 
                      It features a thoughtfully designed tour review system that allows users to submit 
                      one review per tour, promoting fairness and authenticity. The app is fully mobile-responsive
                      ensureing a smooth and accessible experience across all devices. 
                     `,
        key_features: [
            'Custom user authentication built on top of strapi',
            'Tour review system',
            'Responsive and adaptive forms for various services',
            'Strapi CMS for admin access to data'
        ],
        stack: [
            'React',
            'Strapi',
            'MySql',
        ],
        launch_date: '2025-02-15',
        launched: false,
        client: 'https://www.github.com/avocademia/saintsafaris-client',
        server: 'https://www.github.com/avocademia/saintsafaris-backend',
        website: undefined,
        photos: [
            '/saint/home.png',
            '/saint/tours.png',
            '/saint/tour.png',
            '/saint/contact.png',
            '/saint/form.png',
            '/saint/signup.png',
        ]
    },

    {
        name: 'Crafted',
        role: 'Founder & Developer',
        description: `A platform meant to enable artisans to sell various products e.g 
                      up-cycled apparel, art, pottery, books, digital downloads etc. It boasts 
                      scalable architecture with a React.js front end and Node.js 
                      back end, integrated with MySQL for efficient data management. This 
                      prototype has favorable features like product categorization, 
                      user-friendly dashboards, minimalistic straight foward design, and 
                      highly responsive user interface with plans to include a secure 
                      payment system and ai powered market place curation with the aid of 
                      tenserflow. A finished product would address the gap in Kenya's market for 
                      robust e-commerce experiences tailored for socialmedia-based thrift 
                      stores and handcrafted goods, inspired by platforms like Etsy.
                     `,
        key_features: [
            'Minimalist intuitive design',
            'Intuitive shop powered by tensor-flow',
            'Four different product types with custom properties',
        ],
        stack: [
            'Next',
            'Express',
            'MySql',
        ],
        launch_date: 'N/A',
        launched: false,
        client: 'https://www.github.com/avocademia/crafted-client',
        server: 'https://www.github.com/avocademia/crafted-server',
        website: undefined,
        photos: [
            '/crafted/Home.png',
            '/crafted/Klosets.png',
            '/crafted/Kloset.png',
            '/crafted/Product.png',
            '/crafted/Admin.png',     
        ]
    },

    {
        name: 'Comfujon',
        role: 'Founder & Developer',
        description: `A platform for posting and reading web-comics
                      made on next.js.
                     `,
        key_features: [
            'to be updated',
        ],
        stack: [
            'Next',
        ],
        launch_date: '2025-02-01',
        launched: false,
        client: 'https://www.github.com/avocademia',
        server: undefined,
        website: undefined,
        photos: [
            '/comfujon/discover.png',
            '/comfujon/deck.png',
            '/comfujon/discuss.png',
            '/comfujon/dashboard.png', 
        ]
    },
]