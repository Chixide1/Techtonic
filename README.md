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

## Infrastructure (Terraform)

This repo includes Terraform configuration under the `terraform` directory to provision Azure resources for the app (an Azure Resource Group and a serverless Azure Cosmos DB account with MongoDB API).

### Files overview

- `terraform/backend.tf` — Remote state backend using Azure Storage (resource group: `infra`, storage account: `ckstandardsa`, container: `tfstate`, key: `techtonic.terraform.tfstate`).
- `terraform/providers.tf` — Configures the `azurerm` provider.
- `terraform/variables.tf` — Declares required variables.
- `terraform/main.tf` — Creates the resource group `techtonic` in `uksouth`.
- `terraform/cosmosdb.tf` — Creates a serverless Cosmos DB account (MongoDB API, v7.0) in `uksouth`.

### Prerequisites

- Terraform v1.6+ installed.
- An Azure subscription and a Service Principal with permissions to create resources.
- Access to an Azure Storage account for Terraform remote state as specified in `backend.tf`.
- Update `backend.tf` accordingly before running `terraform init` with the correct storage account details.

### Required variables

The following variables are required by the provider (see `terraform/variables.tf`):

- `AZURE_SUBSCRIPTION_ID` (string)
- `AZURE_TENANT_ID` (string)
- `AZURE_CLIENT_ID` (string)
- `AZURE_CLIENT_SECRET` (string)

Provide them via one of the methods below.

1) `terraform.tfvars` file (recommended for local use; do not commit):

```hcl
# terraform/terraform.tfvars
AZURE_SUBSCRIPTION_ID = "<your-subscription-id>"
AZURE_TENANT_ID       = "<your-tenant-id>"
AZURE_CLIENT_ID       = "<your-app-registration-client-id>"
AZURE_CLIENT_SECRET   = "<your-client-secret>"
```

2) Environment variables using the `TF_VAR_` prefix:

```bash
# PowerShell example
$env:TF_VAR_AZURE_SUBSCRIPTION_ID = "<your-subscription-id>"
$env:TF_VAR_AZURE_TENANT_ID       = "<your-tenant-id>"
$env:TF_VAR_AZURE_CLIENT_ID       = "<your-client-id>"
$env:TF_VAR_AZURE_CLIENT_SECRET   = "<your-client-secret>"
```

Note: Authentication is performed using the Service Principal values above; `az login` is not strictly required if these are provided.

### Usage

From the project root:

```bash
cd terraform
terraform init      # configures Azure remote state backend
terraform plan      # review the changes
terraform apply     # create/update resources

# When finished (optional):
terraform destroy   # tear down all resources created by this configuration
```

### Important considerations

- Locations are hard-coded to `uksouth` in the sample; adjust if you need a different region.
- The Cosmos DB account name `techtonic-cosmosdb` must be globally unique. If apply fails due to a name conflict, change the name in `terraform/cosmosdb.tf`.
- Ensure your Service Principal has sufficient permissions on the target subscription and the state storage account.

## License

[MIT](LICENSE) (Replace `LICENSE` with the actual license file if you have one)

## Acknowledgements

* Inspired by the [Prismic Blog](https://prismic.io/blog/).
* Built using the powerful combination of [Next.js](https://nextjs.org/), [Payload CMS](https://payloadcms.com/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), and [MongoDB](https://www.mongodb.com/).

---

Thank you for checking out Techtonic!