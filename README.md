# Cloud Resume Challenge

Welcome to my Cloud Resume Challenge repository!

## Overview

This repository contains the code and configuration for my Cloud Resume Challenge. The Cloud Resume Challenge is a project that demonstrates the ability to build and deploy a fully functional static website using various AWS services. This challenge is designed to showcase skills in cloud computing and web development.

## Project Description

The project is a static resume website that includes the following features:

- **HTML/CSS Website**: A clean and responsive static website showcasing my resume and projects.
- **AWS Services**:
  - **CloudFront**: Configured to provide HTTPS security for the site.
  - **Route 53**: Used for managing a custom domain name.
  - **DynamoDB**: Stores visitor count data.
  - **AWS Lambda**: Powers a custom API to interact with DynamoDB for updating and retrieving visitor counts.
  - **API Gateway**: Exposes the Lambda function as a REST API.
  - **S3**: Hosts the static website content.
  - **IAM Roles**: Securely manage permissions for AWS services.

## Features

- **Visitor Counter**: A JavaScript-based counter that tracks the number of visitors to the site. The counter data is stored in DynamoDB and updated through a custom API.
- **Responsive Design**: The website is designed to be responsive and adapt to different screen sizes using HTML and CSS.
- **Continuous Integration and Deployment**: Managed through a GitHub repository to automate updates and deployments.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/cloud-resume-challenge.git
   cd cloud-resume-challenge
