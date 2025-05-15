# Techtonic - A Next.js Blog Application

[![Next.js](https://img.shields.io/badge/Next.js-v14-blue.svg?style=flat-square)](https://nextjs.org/)
[![Payload CMS](https://img.shields.io/badge/Payload_CMS-v2-brightgreen.svg?style=flat-square)](https://payloadcms.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-blueviolet.svg?style=flat-square)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/shadcn/ui-latest-gray.svg?style=flat-square)](https://ui.shadcn.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-latest-orange.svg?style=flat-square)](https://www.mongodb.com/)

**Techtonic** is an example blog application built with **Next.js**, **Payload CMS** for content management, **Tailwind CSS** for styling, **shadcn/ui** for accessible UI components, and **MongoDB** as the database. It draws inspiration from the intuitive content management system of the [Prismic Blog](https://prismic.io/blog/). This project was primarily developed as a hands-on learning experience with Next.js, aiming to create a practical and functional blogging platform.

## Inspiration and Goal

The Prismic Blog serves as a key inspiration for Techtonic's design and user experience. The goal of this project was to:

* Gain a deeper understanding of Next.js features and best practices.
* Learn and integrate **Payload CMS** for content management.
* Utilize **Tailwind CSS** for rapid and responsive styling.
* Implement accessible and reusable UI components with **shadcn/ui**.
* Understand database interactions with **MongoDB**.
* Create a functional blog application with essential features.
* Develop a tangible project to showcase Next.js development skills.

## Tech Stack

* **Next.js:** A React framework for building server-rendered and statically generated applications.
* **Payload CMS:** A headless CMS for managing content with a flexible and developer-friendly API.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **shadcn/ui:** A collection of accessible and reusable UI components built using Radix UI and Tailwind CSS.
* **MongoDB:** A NoSQL database for storing application data.

## Features

Techtonic currently showcases the following features using mock data:

* **Browse Blog Posts:** Easily navigate through a list of blog articles.
* **Read Individual Posts:** View detailed content for each blog entry.
* **Clean and Responsive Design:** Enjoy a consistent and user-friendly experience across different devices, powered by Tailwind CSS.
* **Modern UI Components:** Utilizes accessible and stylish components from shadcn/ui.

## Getting Started

To get Techtonic up and running on your local machine, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone <your_repository_url>
    cd techtonic
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root of your project and populate it with the provided environment variables:

    ```
    DATABASE_URI=mongodb://127.0.0.1/payload-template-blank-3-0
    PAYLOAD_SECRET=YOUR_SECRET_HERE
    NEXT_PUBLIC_SITE_URL=http://localhost:3000
    ```

    **Important:** Replace `YOUR_SECRET_HERE` with a strong, unique secret key for your Payload CMS.

4.  **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open your browser and navigate to [`http://localhost:3000`](http://localhost:3000) to view the application.

## Contributing

As this project was primarily for personal learning, contributions are not actively being sought at this time. However, feel free to fork the repository and experiment!

## License

[MIT](LICENSE) (Replace `LICENSE` with the actual license file if you have one)

## Acknowledgements

* Inspired by the [Prismic Blog](https://prismic.io/blog/).
* Built using the powerful combination of [Next.js](https://nextjs.org/), [Payload CMS](https://payloadcms.com/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), and [MongoDB](https://www.mongodb.com/).

---

Thank you for checking out Techtonic!